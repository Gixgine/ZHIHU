<template>
  <div class="childtabbar">
    <div class="main-icon" @click="mainClick">
      <a href="javascript:;">
        <img src="~assets/img/main-icon.png" alt="">
      </a>
    </div>
    <div class="mainitem">
      <div v-for="(item,index) in titles"
       :key="index"
        class="itembar"
         :class="{'active':currentIndex===index}"
        @click="itemClick(index)">
        {{item}}
      </div>
    </div>
    <search-bar></search-bar>
    <header-profile></header-profile>
  </div>
</template>
<script>
import HeaderProfile from "./HeaderProfile"
import SearchBar from "./SearchBar"
export default {
  name:"ChildTabBar",
  components:{
    HeaderProfile,
    SearchBar
  },
  data(){
    return {
      titles:["首页","发现","等你来答"],
      link:["/home","/explore","/question"],
      currentIndex:0,
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index;
      // console.log(this.link[index]);
      this.$router.push(this.link[index])
    },
    mainClick(){
      this.$router.push("/home")
      this.currentIndex=0
    },
  }
}
</script>
<style scoped>
  .childtabbar{
    width: 1300px;
    height: 52px;
    display:flex;
    align-items: center;
  }
  .main-icon{
    margin-left: 20px;
  }
  .main-icon img{
    height: 34px;
    width: 68px;
  }
  .mainitem{
    display:flex;
    width: 250px;
    margin: 0 20px;
    height: 52px;
    line-height: 52px;
  }
  .mainitem .itembar{
    /* padding:14px 0; */
    margin: 0 20px;
    cursor: pointer;
    color:#8590A6;
    font-size: 15px;
  }
  .mainitem .itembar:hover{
    color:#000;
  }
  .mainitem>.active{
    font-weight: 600;
    color:#000;
    border-bottom:3px solid var(--color-deeper-blue);
  }
</style>