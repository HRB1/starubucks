<template>
    <div class="container">
       <header class="header">
            <span>&times;</span> 
            <h2>欢迎来到星享俱乐部</h2>
       </header>
       <main class="main">
            <div  class="main-con-phone" v-show="flag">
                <p>
                    <input type="text" placeholder="手机号码" />
                </p>
                <p>
                    <input type="password" placeholder="验证码"/>
                    <span>获取验证码</span>
                </p>
            </div>
            <div class="main-con-user" v-show="!flag">
                <p>
                    <input type="text" placeholder="账号" v-model="phon_value"/>
                </p>
                <p>
                    <input type="password" placeholder="密码"  v-model="pwd_value"/>
                </p>
            </div>
            <div class="btns" @click="submitFn()">
                <span>登录/注册</span>
            </div>
            <p class="userlogin" @click="changeFlag()">{{!flag?"使用手机号验证码登录":"使用账号密码登录"}}</p>

            <div class="main-footer">
                 <p>使用一下方式进行登录</p>
                 <p>
                     <img :src="require('../../static/imgs/tao.png')"/>
                       <img :src="require('../../static/imgs/zhi.png')"/>
                 </p>
            </div>
       </main>
    </div>
</template>
<script>
import api from "../../api/index";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            flag:false,
            phon_value:"",
            pwd_value:"",
        }
    },
    computed:{

    },
    methods:{
        changeFlag(){
            this.flag=!this.flag;
        },
        //登录
        submitFn(){
            if(this.phon_value.trim()!=="" && this.pwd_value.trim()!==""){
                 api.login({
                     phone:this.phon_value,
                     password:this.pwd_value
                 }).then(data=>{
                     let {token}=data;
                     window.localStorage.setItem('token',token);
                     this.$router.back();
                 }).catch(error=>{
                    alert(error.response.data.message)
                 })
            }else{
                console.log(this)
                alter("用户名或密码不能为空")
            }
        }
    },
    created(){
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/common";
@import "../../static/scss/login";
</style>