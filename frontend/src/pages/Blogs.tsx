import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"

export const Blogs = () => {
  const {loading,blog} = useBlogs()
  if(loading){
    return <div>
      loading
    </div>
  }
  return (
    <div>
    <Appbar/>
    <div className="flex justify-center">
    <div className=" max-w-xl">
        <BlogCard authorName={"Pratham Yadav"}
        title={"Why I Keep Failing Candidates During Google Interviews…"}
        content={"After joining Google in 2022, I got trained to interview candidates. I’ve had a chance to meet candidates and saw how much they struggled. I’m ready to share some of their common mistakes (that I’m legally allowed to share).Not knowing their data structures is NOT the #1 reason why I fail candid Before we dig in, let’s go through what the interview process looks like today."}
        publishedDate={"2nd Feb 2024"}
        />

<BlogCard authorName={"Pratham Yadav"}
        title={"Why I Keep Failing Candidates During Google Interviews…"}
        content={"After joining Google in 2022, I got trained to interview candidates. I’ve had a chance to meet candidates and saw how much they struggled. I’m ready to share some of their common mistakes (that I’m legally allowed to share).Not knowing their data structures is NOT the #1 reason why I fail candid Before we dig in, let’s go through what the interview process looks like today."}
        publishedDate={"2nd Feb 2024"}
        />


<BlogCard authorName={"Pratham Yadav"}
        title={"Why I Keep Failing Candidates During Google Interviews…"}
        content={"After joining Google in 2022, I got trained to interview candidates. I’ve had a chance to meet candidates and saw how much they struggled. I’m ready to share some of their common mistakes (that I’m legally allowed to share).Not knowing their data structures is NOT the #1 reason why I fail candid Before we dig in, let’s go through what the interview process looks like today."}
        publishedDate={"2nd Feb 2024"}
        />
        

<BlogCard authorName={"Pratham Yadav"}
        title={"Why I Keep Failing Candidates During Google Interviews…"}
        content={"After joining Google in 2022, I got trained to interview candidates. I’ve had a chance to meet candidates and saw how much they struggled. I’m ready to share some of their common mistakes (that I’m legally allowed to share).Not knowing their data structures is NOT the #1 reason why I fail candid Before we dig in, let’s go through what the interview process looks like today."}
        publishedDate={"2nd Feb 2024"}
        />
    </div>
    </div>
    </div>
  )
}
