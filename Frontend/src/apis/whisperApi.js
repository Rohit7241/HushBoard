import api from "./axiosInstance";
export const CreateWhisper=(data,postid)=>{
    return api.post("/whisper/CreateWhisper",data,
        {params:{
            postid
        }}      
    )
}
export const GetWhispers=(postid)=>{
    return api.get("/whisper/GetWhispers",{
        params:{postid}
    })
}