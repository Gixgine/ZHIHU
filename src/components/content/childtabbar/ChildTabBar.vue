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
      moveTop:false
    }
  },
  methods:{
    scrollToTop() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop);
    },
    itemClick(index){
      this.currentIndex=index;
      // console.log(this.link[index]);
      this.$router.push(this.link[index])
    },
    mainClick(){
      this.$router.push("/home")
      this.currentIndex=0
    },
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
},
}
</script>
<style scoped>
.childtabbar{
  position: relative;
  width: 1032px;
  height: 52px;
  display:flex;
  align-items: center;
  /* justify-content: space-between; */
}
.main-icon{
  margin-top: 8px;
  /* float: left; */
  margin-left: 10px;
}
.main-icon img{
  height: 34px;
  width: 68px;
}
.mainitem{
  /* float:left; */
  display:flex;
  min-width: 250px;
  height: 52px;
  line-height: 52px;
  margin-left: 15px;
  margin-right: 10px;
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