import { useEffect,useState } from "react";
import axios from "axios";
import { Backend_URL } from "../config";

export const useBlogs = ()=>{
    const [loading , setloading] = useState(true);
    const [blog , setBlog] = useState([]);

    useEffect(()=>{
        axios.get(`${Backend_URL}/api/v1/blog/bulk`)
       .then(response =>{
        setBlog(response.data)
        setloading(false)
       })
    },[])
    return {
        loading,
        blog
    }
}