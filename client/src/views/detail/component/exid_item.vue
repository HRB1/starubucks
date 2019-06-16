<template>
    <div class="main-item">
        <h2>申请信息</h2>
        <p>
          <span>加班日期</span>
          <span>{{getOverTime}}</span>
        </p>
        <p>
          <span>加班类型</span>
          <span>{{gettype?gettype.title:"工作日加班"}}</span>
        </p>
        <p>
          <span>加班起始时间</span>
          <span>{{gettiemstart}}</span>
        </p>
        <p>
          <span>加班结束时间</span>
          <span>{{gettiemend}}</span>
        </p>
        <p>
          <span>共计时数</span>
          <span>{{getdataLength.toFixed(1)}}</span>
        </p>
      </div>
</template>
<script>
export default {
    props:["getOverTime","gettype","gettiemstart","gettiemend","getdataLength"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>