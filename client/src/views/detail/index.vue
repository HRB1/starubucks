<template>
  <div class="container">
    <my-header 
      :flag="true"
      :flag2="false"
     >{{$route.params.type=="overtime"?"办公室加班申请":"办公室休假申请"}}</my-header>
    <main>
      <div class="header">
           <header-con 
              :datadetail="datadetail" 
              :getOverTime="getOverTime"
           ></header-con>
      </div>
      <exid-item 
          :getOverTime="getOverTime"
          :gettype="gettype" 
          :gettiemstart="gettiemstart"
          :gettiemend="gettiemend"
          :getdataLength="getdataLength"
      ></exid-item>
      <div class="main-item-over">
        <h2>加班事由</h2>
        <textarea :value="datadetail.describes"></textarea>
      </div>
      <div class="main-item-annex">
        <h2>
          <span>
            <img :src="require('../../static/imgs/annuc.png')">附件
          </span>
          <span>共{{datadetail.annex?datadetail.annex.length:"0"}}个</span>
        </h2>
        <ul>
          <template v-if="datadetail.annex">
            <li v-for="(item,ind) in datadetail.annex" :key="ind">
              <img :src="'http://localhost:3000/'+item">
            </li>
          </template>
        </ul>
      </div>
    </main>
    <my-footer :open="true" :title="'同意'">
      <span>
        <i class="iconfont icon-xinxi"></i>审批历史
      </span>
    </my-footer>
  </div>
</template>
<script>
import headerCon from "./component/header_con.vue";
import exidItem from "./component/exid_item";//时间信息
import api from "../../api/index";
export default {
  props: {},
  components: {
    headerCon,
    exidItem
  },
  data() {
    return {
      datadetail: {},
      typeovertime:[
               {
                   title:"工作日加班",
                   id:1
               },{
                   title:"bug加班",
                   id:2,
               }
               ,{
                   title:"日常加班",
                   id:3,
               }
           ],
           typevacation:[
             {
                   title:"年假休假",
                   id:1
               },{
                   title:"节假日休假",
                   id:2
               }
           ],
    };
  },
  computed: {
    //总时长
    getdataLength() {
      let data = new Date(this.datadetail.startTime).getTime();
      let endata = new Date(this.datadetail.endTime).getTime();
      let dataTime = endata - data;
      let newdata = new Date(dataTime);
      return (newdata / 1000 / 60 / 60) % 24; //小时
    },
    // //获取结束时间
    gettiemend() {
      let data = new Date(this.datadetail.endTime).getTime();
      let hour = (data / 1000 / 60 / 60) % 24;
      let min = (data / 1000 / 60 / 60) % 60;
      return hour.toFixed(0) + " ：" + min.toFixed(0);
    },
    //获取起始时间
    gettiemstart() {
    //   console.log(this.datadetail.startTime);
      let data = new Date(this.datadetail.startTime).getTime();
      let hour = (data / 1000 / 60 / 60) % 24;
      let min = (data / 1000 / 60 / 60) % 60;
      return hour.toFixed(0) + " ：" + min.toFixed(0);
    },
    //获取加班日期
    getOverTime() {
         console.log(this.datadetail.startTime)
      let data = new Date(this.datadetail.startTime);
      let year = data.getFullYear();
      let month = data.getMonth() + 1;
      let Day = data.getDate();
      return year + "-" + month + "-" + Day; //年月日
    },
    //加班类型
    gettype(){
        let types=this.$route.params.type;
        let obj=this["type"+types].find(item=>item.id==this.datadetail.type);
        return obj;
    }
  },
  methods: {},
  created() {
    let id = this.$route.params.id;
    //根据id获取信息
    api[this.$route.params.type]({ applicationNumber: id }).then(res => {
      console.log(res.data);
      this.datadetail = res.data;
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/scss/common";
@import "../../static/scss/detail";
</style>