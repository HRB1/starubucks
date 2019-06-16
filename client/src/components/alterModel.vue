<template>
    <div class="alertbox" v-show="open">
         <span>{{text}}</span>  
    </div>
</template>
<script>
export default {
    props:{
       text:String
    },
    components:{

    },
    data(){
        return {
          open:false,
          timers:null
        }
    },
    computed:{

    },
    methods:{
     
    },
    created(){

    },
    mounted(){
      this.timers= setTimeout(()=>{
          this.open=false;
      },3000)
    },
    destroyed(){
      clearTimeout(this.timers);
    }
}
</script>
<style scoped lang="scss">
@import "../static/scss/common.scss";
  .alertbox{
      width: pxTorem(300px);
      height: pxTorem(80px);
      background: rgba(0,0,0,.5);
      color: #fff;
      text-align: center;
      line-height: pxTorem(80px);
      font-size: pxTorem(15px);
      position: fixed;
      top: 30%;
      left: 50%;
      margin-left: pxTorem(-150px);
  }
</style>