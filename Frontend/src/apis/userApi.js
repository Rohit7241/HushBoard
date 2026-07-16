import api from "./axiosInstance";

export const Registeruser=(data)=>{
    return api.post("/user/register",data)
}
export const login=(data)=>{
    return api.post("/user/login",data)
}
