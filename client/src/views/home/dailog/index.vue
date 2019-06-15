<template>
    <div class="mack" v-if="open" @click.self="closes()">
             <div class="makc_con">
                  <p @click="overtimes">
                      <img :src="require('../../../static/imgs/addclass.png')"/>
                      <span>加班</span>
                  </p> 
                  <p @click="vacations">
                      <img :src="require('../../../static/imgs/xiujia.png')"/>
                      <span>休假</span>
                  </p> 
             </div>
        </div>
</template>
<script>
export default {
    props:{
       open:Boolean
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
          //关闭弹框
        closes(){
            this.$emit("close",false)
        },
        overtimes(){
            this.$router.push({name:"commit",params:{type:"overtime"}})
             this.$emit("close",false)
        },
        vacations(){
            this.$router.push({name:"commit",params:{type:"vacation"}})
             this.$emit("close",false)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>