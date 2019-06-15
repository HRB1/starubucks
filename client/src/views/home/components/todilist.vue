<template>
    <div class="main-nav">
      <p>
        <span
          v-for="(item,index) in links"
          :key="index"
          :class="{'active':tag==item.type}"
          @click="changeInd(item.type)"
        >{{item.title}}</span>
      </p>
      <p>
        <img :src="require('../../../static/imgs/nav1.png')"/>
        <img :src="require('../../../static/imgs/sort.png')"/>
      </p>
    </div>
</template>
<script>

export default {
  props:["tag"],
  components: {
  },
  data() {
    return {
      links: [
        {
          title: "加班",
          id: 0,
          type:"overtime"
        },
        {
          title: "休假",
          id: 1,
          type:"vacation"
        }
      ]
    };
  },
  computed: {
     
  },
  methods: {
    changeInd(type) {
      //根据type发其请求
      this.$emit("typechange",type)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../../static/scss/common.scss";
@import "../../../static/scss/home.scss";
</style>