import axios from "axios";
import router from "../router/index";

const request = axios.create({
    baseURL:"http://localhost:8080"
});

//请求之前拦截
request.interceptors.request.use((config)=>{
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem("token")
        }
    }
},(error)=>{
    return Promise.reject(error);
})


//响应之前拦截
request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
   const response=error.response;
   const status=response.status;//状态码
   if(status>400){
    switch(status){
        case 401:
            router.push("/login");
            break;
        case 403:
            alert("没有权限");
            break;
        case 404:
            alert("页面不存在");
            break;
    }
   }
   return Promise.reject(error);
})


export default {
    get(url,data){
       return request.get(url,{
           params:data
       })
    },
    post(url,data){
        return request.post(url,data)
    }
};