<template>
    <div class="container">
        <headers :flag="true" :flag2="true">加班/休假</headers>
         <navlist @changeStatus="titleStatus"></navlist>
          <todilist @typechange="changetype" :tag="dataoptions.type"></todilist>
         <main class="main">
              <div class="main-con">
                <template v-if="list.length">
                      <applyItem v-for="(item,index) in list" :key="index"
                      :nickname="item.nickname"
                      :startTime="item.startTime"
                      :endTime="item.endTime"
                      :applicationNumber="item.applicationNumber"
                      :describes="item.describes"
                      :list_type="item.list_type"
                      ></applyItem>
                </template>
              </div>
         </main>
        <div class="addpro" @click="change()">
            <i class="iconfont icon-jia"></i>发起任务
        </div>
        <dailog :open="open" @close="closeD"></dailog>
    </div>
</template>
<script>
import headers from "../../components/headers.vue";//头部
import api from "../../api/index";
import todilist from "./components/todilist";//加班休假
import navlist from "./components/navlist";//待处理导航
import applyItem from "./components/apply_item";//列表每一项
import {mapActions} from "vuex";
import dailog from "./dailog/index";
export default {
    name:"home",
    props:{

    },
    components:{
        headers,
        todilist,
        navlist,
        applyItem,
        dailog
    },
    data(){
        return {
            open:false,
            dataoptions:{
                page:1,
                pageSize:10,
                create_at:0,
                type:"overtime",//加班
                status:0//待处理
            },
            list:[],//请求到的数据,
        }
    },
    computed:{
          
    },
    methods:{
        //发起任务弹框
        change(){
            this.open=true;
        },
        closeD(flag){
            this.open=flag;
        },
        //请求数据
        getlist(){
            api.getlist(this.dataoptions).then(res=>{
                this.list=res.data;
                // console.log(this.list)
            })
        },
        //待处理导航
        titleStatus(status){
            this.dataoptions.status=status;
            this.dataoptions.type="overtime";
            this.getlist();
        },
        //加班休假
        changetype(type){
            this.dataoptions.type=type;
            this.getlist();
        },
        //验证登录
        ...mapActions("user",["getUserInfo"]),

       
    },
      
    created(){
        this.getUserInfo();
        this.getlist();
    },
    mounted(){

    }
}
</script>
<style  lang="scss">
@import "../../static/scss/common.scss";
@import "../../static/scss/home.scss";
</style>