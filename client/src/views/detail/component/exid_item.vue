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
<style scoped lang="scss">
@import "../../../static/scss/common";
 .main-item {
        width: 90%;
        border-radius: pxTorem(10px);
        background: #fff;
        height: pxTorem(188px);
        box-shadow: 0px 0px 4px 2px #ccc;
        margin: 0 auto;
        margin-top: pxTorem(-30px);
        h2 {
            width: 100%;
            height: pxTorem(40px);
            padding: 0 pxTorem(15px);
            display: flex;
            align-items: center;
            font-size: pxTorem(14px);
            border-bottom: 1px solid #ccc;
        }

        p {
            display: flex;
            align-items: center;
            padding: 0 pxTorem(15px);
            font-size: pxTorem(14px);
            height: pxTorem(27px);

            span {
                flex: 1;
            }

            span:nth-child(2) {
                display: flex;
                justify-content: flex-end;
            }
        }
    }
</style>