<template>
      <nav class="nav">
            <div  v-for="(item,index) in link" :class="{'active':ind==index}" :key="index" @click="change(item.status)">
                <a>
                    <span :class="'iconfont '+item.icon"></span>
                    <span class="nav-tit">{{item.title}}</span>
                </a>
            </div>
      </nav>
</template>

<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            ind:0,
             link:[
               {
                   title:"待处理",
                   icon:"icon-naozhong",
                   status:0
               },
                {
                   title:"已发起",
                    icon:"icon-07",
                    status:1
               }, {
                   title:"已处理",
                     icon:"icon-yibangding",
                     status:2
               }
           ]
        }
    },
    computed:{

    },
    methods:{
        change(status){
            this.ind=status;
            this.$emit("changeStatus",status)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../../static/scss/common.scss";
@import "../../../static/scss/home.scss";
</style>