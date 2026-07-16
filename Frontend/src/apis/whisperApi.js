import api from "./axiosInstance";
export const CreateWhisper=(data,postid)=>{
    return api.post("/whisper/create",data,
        {params:{
            postid
        }}      
    )
}
export const GetWhispers=(postid)=>{
    return api.get("/whisper/getall",{
        params:postid
    })
}