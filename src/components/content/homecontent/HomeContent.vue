<template>
  <div id="home-content">
    <div class="inner-content">
      <home-main-content></home-main-content>
      <home-aside-content></home-aside-content>
    </div>
  </div>
</template>
<script>

import HomeMainContent from "./homechildcontent/HomeMainContent"
import HomeAsideContent from "./homechildcontent/HomeAsideContent"

export default {
  name:"HomeContent",
  components:{
    HomeMainContent,
    HomeAsideContent
  }
}
</script>
<style scoped>
  #home-content{
    position: relative;
    min-width: 1032px;
    width: 100vh;
    margin: 0 auto;
  }
  .inner-content{
    position: absolute;
    top:52px;
    width: 1032px;
    height: auto;
    border: 1px solid #000;
    /* margin: 52px auto; */
    display:flex;
    justify-content: space-evenly;
    margin-top: 10px;
  }
</style>