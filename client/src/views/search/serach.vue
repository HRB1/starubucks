<template>
    <div class="search">
        <div class="search-top-box">
             <p class="search-top">
                <i class="iconfont icon-fangdajing"></i>
                <input type="text" placeholder="搜索"/>
            </p>
        <router-link to="/home" tag="p">取消</router-link>
        </div>
       
    </div>
</template>
<script>
import request from "../../utils/request";
import {mapActions} from "vuex";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
       ...mapActions("user",["getUserInfo"])
    },
    created(){
         this.getUserInfo();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/common";
.search{
    width: 100%;
    height: 100%;
}
.search-top-box{
    width: 100%;
    display: flex;
    padding-left: 2%;
    height: pxTorem(30px);
    margin-top:2%;
}
.search-top-box>p:nth-child(2){
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
      color: #10935D;
    font-size: pxTorem(16px);
}
.search-top{
    width: 85%;
    height: 100%;
    background: #eee;
    margin: 0 auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-size: pxTorem(16px);
    padding-left: 2%;
    input{
        flex: 1;
    }
    i{
        display: inline-block;
        width: 5%;
        text-align: center;
        margin-right: 2%;
    }
}

</style>