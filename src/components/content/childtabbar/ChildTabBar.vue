<template>
  <div class="childtabbar">
    <div class="main-icon">
      <a href="http://192.168.1.7:8080/home">
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
    <div class="search-bar">
      <form class="search-tool">
        <div>
          <label class="search-main">
            <input type="text" placeholder="点击搜索" class="search-input">
            <div class="search-button">
              <a><img src="~assets/img/search-icon.png" alt=""></a>
            </div>
          </label>
        </div>
      </form>
      <button class="ask-button">提问</button>
    </div>
    <header-profile></header-profile>
  </div>
</template>
<script>
import HeaderProfile from "./HeaderProfile"

export default {
  name:"ChildTabBar",
  components:{
    HeaderProfile
  },
  data(){
    return {
      titles:["首页","发现","等你来答"],
      link:["/home","/explore","/question"],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index;
      // console.log(this.link[index]);
      this.$router.push(this.link[index])
    }
  }
}
</script>
<style scoped>
  .childtabbar{
    width: 1032px;
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
    /* width: 222px; */
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
  .search-bar{
    position: relative;
    width: 326px;
    height: 34px;
    display:flex;
    align-items: center;
    background: #f6f6f6;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    /* transition: width ease 1s; */
  }
  .search-main{
    display:flex;
    width: 326px;
    padding-left: 12px;
    padding-right: 0;
  }
  .search-button{
    position: absolute;
    right:10px;
    cursor: pointer;
  }
  .search-button img{
    width: 18px;
    height: 18px;
  }
  .ask-button{
    position: absolute;
    z-index: 103;
    padding: 0 14px;
    width:60px;
    left:340px;
    height: 34px;
    line-height: 34px;
    background-color: var(--color-lighter-blue);
    color:white;
    border: 1px solid;
    border-radius: 3px;
    font-size:14px;
    border-color: #0084ff;
    cursor: pointer;
  }
  .childtabbar>button:hover{
    background-color: var(--color-deeper-blue);
  }
</style>