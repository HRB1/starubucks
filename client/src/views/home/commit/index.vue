<template>
    <div class="container">
                 <my-header :flag="true" :flag2="false">{{$route.params.type=="overtime"?"办公室加班申请表":"办公室休假申请表"}}</my-header>
        <main>
             <div class="header">
                 <header-con :userinfo="userinfo"/>
             </div>
              <div class="main-item">
                   <h2>申请信息</h2>
                   <p>
                       <span>{{title}}日期</span>
                        <span>
                            <el-date-picker    
                                type="date"
                                v-model="data"
                                placeholder="选择日期"
                            >
                            </el-date-picker>
                        </span>
                    </p>
                   <p><span>{{title}}类型</span><span><select ref="select">
                       <option value="-1">{{title}}类型</option>
                        <option  v-for="(item,ind) in $route.params.type=='overtime'?typeovertime:typevacation" 
                        :key="ind"
                        :value="item.id"
                        >{{item.title}}</option>
                       </select></span></p>
                   <p><span>{{title}}起始时间</span> <span>
                            <el-date-picker
                                 arrow-control
                                v-model="startTime"
                                placeholder="选择开始时间"
                                  @change="times"   
                                   type="datetime"
                            >
                            </el-date-picker>
                        </span></p>
                   <p><span>{{title}}结束时间</span><span>
                            <el-date-picker
                                 arrow-control
                                v-model="endTime"
                                placeholder="选择结束时间"
                                 @change="times"   
                                 type="datetime"
                            >
                            </el-date-picker>
                        </span></p>
                   <p><span>共计时数</span><span>{{timeLength==""?0:(timeLength.toFixed(1))}}天</span></p>
             </div>
              <div class="main-item-over">
                   <h2>{{title}}事由</h2>
                   <textarea  maxlength="200" v-model="describe">
                   </textarea>
             </div>
              <div class="main-item-annex">
                   <h2><span><img :src="require('../../../static/imgs/add.png')" />上传</span><span>共{{urlarr.length?urlarr.length:"0"}}个</span><input type="file" ref="fileimg" @change="fileImg"/></h2>
                   <template v-if="urlarr.length">
                       <ul>
                           <li v-for="(item,ind) in urlarr" :key="ind">
                               <img :src="'http://localhost:3000'+item.url"/>
                               <span @click="delfile(ind)">&times;</span>
                           </li>
                       </ul>
                   </template>
             </div> 

        </main>
         <footer class="footer">
            <p class="back" @click="goback"><span style="color:green">取消</span></p>
            <p class="que" @click="submitFn">提交</p>
        </footer>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex";
import headerCon from "./component/header_con";
import IsFile from "../../../utils/isFlie";
import api from "../../../api/index";
export default {
    props:{ 

    },
    components:{
        headerCon
    },
    data(){
        return {
           data:"",//日期
           startTime:"",//开始时间
           endTime:"",//结束时间
           timeLength:"",//时间差
           describe:"",//加班理由
           typeovertime:[
               {
                   title:"工作日加班",
                   id:1
               },{
                   title:"bug加班",
                   id:2,
               }
               ,{
                   title:"日常加班",
                   id:3,
               }
           ],
           typevacation:[
             {
                   title:"年假休假",
                   id:1
               },{
                   title:"节假日休假",
                   id:2
               }
           ],
           urlarr:[]//存放附件的容器
        }
    },
    computed:{
        //获取登录用户信息
        ...mapState("user",["userinfo"]),
       title(){
           return this.$route.params.type=="overtime"?"加班":"休假"
       }
    },
    methods:{
        //验证是否登陆
        ...mapActions("user",["getUserInfo"]),
       //计算时假差
       times(){
           if(this.startTime&&this.endTime){
                  let time=new Date(this.endTime).getTime()-new Date(this.startTime).getTime();
               
                  this.timeLength=time/1000/60/60/24;
           }else{
               //没有时间的话，将时间差改为0
                this.timeLength=0;
           }
       },
       
       //上传图片
       fileImg(e){
           let userfile=e.target.files[0];//图片对象
           //调用封装的上传图片的方法，传对象和默认参数
           let isfilecheck=new IsFile(e.target.files[0],{
               type:["jpg","jpeg","png","gif"],
               size:3
           })
           //判断类型和大小都满足要求时进行请求接口
           if(isfilecheck.isType()&&isfilecheck.isSize()){
                const formdata=new FormData();//吧向ajax发送的数据变成 键值对形式
                formdata.append("file",userfile);
                //请求上传附件接口
                api.submitFile(formdata).then(res=>{
                    if( this.urlarr.length<3){
                        this.urlarr.push(res.url);
                    }else{
                        alert("最多上传3个")
                    }
                })
           }else{
               alert("文件格式不符要求")
           }
       },
       //删除附件
       delfile(ind){
           this.urlarr.splice(ind,1);
       },
       //点击提交
       submitFn(){
           let userType=this.$route.params.type;
           //请求接口要传递的对象
           let option={
               annex:this.urlarr,//附件对象
               describe:this.describe,//加班理由
               endTime:this.endTime,//结束时间
               startTime:this.startTime,//开始时间
               type:this.$refs.select.value,//加班类型,
               create_at:this.data
           }
           if(option.describe!==""&&option.endTime!=="" &&option.startTime!=="" && option.type!==""){
                api['submit'+userType](option).then(res=>{
                    if(res.msg=="提交成功"){
                        this.$router.back();
                    }else{
                        alert("提交失呗");
                    }
                })
           }
          
       },
       //点击取消,返回上一级
       goback(){
          this.$router.back();
       } 
    },
    created(){
        //验证登录信息
        this.getUserInfo();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../../static/scss/common";
@import "../../../static/scss/commit";
footer{
    width: 100%;
    height: pxTorem(46px);
    display: flex;
    align-items: center;
    box-shadow: -2px -2px 5px 2px #ccc;
    .back{
       width: pxTorem(100px);
       height: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       span{
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           color: #999;
           i{
               font-size: pxTorem(17px);

           }
       }
    }
  
    .que{
        flex: 1;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background: #0b6242;
        color: #fff;
        font-size: pxTorem(15px);
    }
}
</style>