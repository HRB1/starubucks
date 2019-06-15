<template>
    <div class="apply_item" @click="detailFn(list_type,applicationNumber)">
         <p class="apply_item_top"><span>{{applicationNumber}}</span><span><img id="apply_img" :src="require('../../../static/imgs/shen.png')"/>待审批</span></p>
         <div>
             <p><span>申请人</span><span>{{nickname}}</span></p>
              <p><span>加班类型</span><span>{{describes}}</span></p>
         </div>
          <div>
             <p><span>加班日期</span><span>{{getData}}</span></p>
              <p><span>加班时数</span><span>{{getdataLength.toFixed(1)}}个小时</span></p>
         </div>
    </div>
</template>
<script>
export default {
    props:["nickname","startTime","endTime","applicationNumber","describes","list_type"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        //获取加班日期
        getData(){
            let data=new Date(this.startTime);
            let year=data.getFullYear();
            let month=data.getMonth()+1;
            let Day = data.getDate();
            return year+"-"+month+"-"+Day;//年月日
        },

        //获取加班时长
        getdataLength(){
           let data=new Date(this.startTime).getTime();
           let endata=new Date(this.endTime).getTime();
           let dataTime=endata-data;
           let newdata=new Date(dataTime);
           return newdata / 1000 / 60 / 60 ;//小时
        }
    },
    methods:{
         //跳转详情
        detailFn(type,id){
            console.log(type,id)
            this.$router.push({name:"detail",params:{type,id}})
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../../static/scss/home";
#apply_img{
    width:pxTorem(25px);
    height: pxTorem(25px); 
}

</style>