<template>
    <header class="header">
         <p class="header_left" v-show="flag" @click="goback()"><i class="iconfont icon-arrow-left"></i> </p> 
          <p class="header_cen"><slot></slot></p> 
         <p class="header_right" v-show="flag2"><img :src="require('../static/imgs/teach.png')"/> <i class="iconfont icon-fangdajing" @click="searchfn()"></i></p> 
    </header>
</template>
<script>
export default {
    props:["flag","flag2"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        //跳搜索
         searchfn(){
             this.$router.push({path:'/search'})
         },
         //返回上一级
         goback(){
              this.$router.back();
         }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../static/scss/common.scss";
    header{
       width: 100%;
       height: pxTorem(27px);
       display: flex;
       font-size: pxTorem(16px);
    }
    .header_left{
        width: 10%;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-shrink: 0;
        align-items: center;
        img{
            width: 50%;
            height: 60%;;
        }
    } 
    .header_cen{
        flex:1;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    .header_right{
        width: 15%;
        display: flex;
        align-items: center;
        font-size: pxTorem(17px);
        img:nth-child(1){
            width: pxTorem(20px);
            height: pxTorem(20px);
            margin-right:pxTorem(8px)
        }
    }
   
</style>