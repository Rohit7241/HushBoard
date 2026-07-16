import api from "./axiosInstance";
export const Create=(data)=>{
    return api.post("/posts/CreatePost",data)
}
export const Delete=(postid)=>{
    return api.post("/posts/DeletePost",{},{
        params:{
            postid
        }
    })
}
export const getMyPosts=()=>{
    return api.get("/posts/getMyPosts")
}
export const getPostById=(postid)=>{
    return api.get("/posts/getPost",{
        params:{
            postid,
        },
    })
}
export const getAllPosts=()=>{
    return api.get("/posts/AllPosts")
}
export const toggleReaction=(data,postid)=>{
    return api.post("/posts/toggleReaction",data,{
        params:{
            postid
        }
    })
}
export const getReactions=(postid)=>{
    return api.get("/posts/Reactions",{
        params:postid
    })
}