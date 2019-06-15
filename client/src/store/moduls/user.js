import api from "../../api";
export default {
    namespaced:true,
    state:{
         userinfo:{}
    },
   
    mutations:{
        getuser(state,data){
             state.userinfo=data;
            //  console.log(data);
        }
    },
     actions:{
        getUserInfo({commit}){
            api.islogin().then(res=>{
                // console.log("用户验证",res);
                commit("getuser",res.data)
             })
        }
    }
}