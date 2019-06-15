<template>
    <footer class="footer">
       <p class="back"><slot></slot></p>
       <p class="tui" v-if="open">退回</p>
       <p class="que" @click="subfile">{{title}}</p>
    </footer>
</template>
<script>
export default {
    props:{
         title:String,
         open:Boolean,
    },
    components:{

    },
    data(){
        return {
           sd(){}
        }
    },
    computed:{

    },
    methods:{
         subfile(){
             this.submitFn();
         }    
        
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../static/scss/common";
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
    .tui{
        width: pxTorem(136px);
        height:100%;
        background: #404A53;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: pxTorem(15px);
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