<template>
        <div class="header-con">
          <dl>
            <dt>
              <img :src="datadetail.avatar">
            </dt>
            <dd>
              <div class="header-con-left">
                <p>
                  <span>申请人姓名</span>
                  <span>{{datadetail.nickname}}</span>
                </p>
                <p>
                  <span>直接主管</span>
                  <span>王指出</span>
                </p>
                <p>
                  <span>申请单号</span>
                  <span>{{datadetail.applicationNumber}}</span>
                </p>
                <p>
                  <span>发起时间</span>
                  <span>{{getOverTime}}</span>
                </p>
              </div>
              <i class="iconfont icon-chevron-thin-right"></i>
            </dd>
          </dl>
        </div>
</template>
<script>
export default {
    props:["datadetail","getOverTime"]
    ,
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
@import "../../../static/scss/common.scss";
 .header-con {
            width: 100%;
            height: 100%;
            padding: 0 pxTorem(14px);
            padding-top: pxTorem(30px);
            box-sizing: border-box;
            color: #fff;
    
            dl {
                display: flex;
    
                dt {
                    width: pxTorem(50px);
                    height: pxTorem(50px);
                    margin-right: pxTorem(16px);
    
                    img {
                        width: 100%;
                        border-radius: 50%;
                    }
    
                    flex-shrink: 0;
                }
    
                dd {
                    flex: 1;
                    font-size: pxTorem(14px);
                    display: flex;
                    padding-right: pxTorem(16px);
                    align-items: center;
                    justify-content: space-around;
    
                    .header-con-left {
                        width: 80%;
    
                        p {
                            width: 100%;
                            height: pxTorem(25px);
                            display: flex;
                            align-items: center;
    
                            span {
                                flex: 1;
                            }
    
                            span:nth-child(1) {
                                text-align: left;
                                color: rgba(255, 255, 255, 0.7)
                            }
    
                            span:nth-child(2) {
                                text-align: left;
                                color: rgba(255, 255, 255, 0.8)
                            }
                        }
                    }
                }
            }
        }
</style>