import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {createBlogInput,updateBlogInput}from '@npmuserhahaha/medium-common'


export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables:{
      userId : string
    }
}>();

blogRouter.use('/*',async (c, next)=>{
    const header = c.req.header("authorization") || "";
    const token = header? header.split(" ")[1]: "";
  
  const user  = await verify(token,c.env.JWT_SECRET)
  if(user){
    c.set("userId",user.id);
   await next();
  }else{
    c.status(403);
    return c.json({
      message : "You are not Logged in"
    })
  }
  })
  
  blogRouter.post('/',async (c)=>{
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    if(!success){
      c.status(411);
     return c.json({
        "error" : "Inputs are incorrect"
      }
      )
    }
    try{
    const authorId = parseInt(c.get("userId"))
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
       data : {
        title : body.title,
        content : body.content,
        authorId :authorId
       }
    })
    return c.json({
        id : blog.id
    })
  }catch(e){
    return c.status(403)
  }
})
  
blogRouter.put("/", async(c)=>{
const body = await c.req.json()
const {success} = updateBlogInput.safeParse(body);
if(!success){
  c.status(411);
  return c.json({
    "message" : "Inputs are Incorrect"
  })
}
const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
}).$extends(withAccelerate())

const blog = await prisma.blog.update({
    where:{
        id : body.id
    },
    data:{
        title : body.title ,
        content : body.content
    }
    
})
    return c.json({
        id : blog.id
    })
  })
  
  blogRouter.get("/get/:id",async (c)=>{
    const id =  c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
      const blog = await prisma.blog.findFirst({
        where : {
          id : Number(id)
        },
      })
      
        return c.json({
          blog
        });

    }catch(error){
              c.status(411); 
              return c.json({
                message : "Error while fetching blog post"
              })    ;
    }
  })
  
  blogRouter.get("/bulk", async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  const blogs = await prisma.blog.findMany({
    select:{
      content : true,
      title : true , 
      id : true , 
      author : {
        select :{
          name : true
        }
      }
    }
  })
  
    return c.json({
      blogs
    })
})