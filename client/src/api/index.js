import request from "../utils/request";
export default {
        //获取验证用户是否登陆
        islogin:()=>request.get("/api/user/info"),

        //获取列表
        getlist:(data)=> request.get("/api/task/list",data),

        //登录接口
        login:(data)=>request.post("/api/login",data),

        //加班详情接口
        overtime:(data)=>request.get("/api/apply/overtime",data),

        //休假详情接口
        vacation:(data)=>request.get("/api/apply/vacation",data),

        //上传附件(图片)
        submitFile:(file)=>request.post("/api/upload",file),

        //提交加班接口
        submitovertime:(data)=>request.post("/api/apply/overtime",data),
        
        //提交休假接口
        submitvacation:(data)=>request.post("/api/apply/vacation",data)
}