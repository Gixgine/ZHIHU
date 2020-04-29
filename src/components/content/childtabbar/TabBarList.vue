<template>
  <div id="tab-bar-list">
    <div class="child-switch">
      <child-switch-button 
      class="button"
      :link="link[0]"
      @click.native="btnClick(link[0])"
      :clickClass="clickClass">
        <template v-slot:icon>
          <div class="bell-icon">
            <a href="javascript:;" >
              <img src="~assets/img/header/category_lighter.png" alt="">
            </a>
          </div>
        </template>
        <template v-slot:active-icon>
          <div class="bell-icon">
            <a href="javascript:;">
              <img src="~assets/img/header/category_deeper.png" alt="">
            </a>
          </div>
        </template>
    </child-switch-button>
    <child-switch-button 
    class="button"
    :link="link[1]"
    @click.native="btnClick(link[1])"
    :clickClass="clickClass">
        <template v-slot:icon>
          <div class="bell-icon">
            <a href="javascript:;" >
              <img src="~assets/img/header/people_lighter.png" alt="">
            </a>
          </div>
        </template>
        <template v-slot:active-icon>
          <div class="bell-icon">
            <a href="javascript:;">
              <img src="~assets/img/header/people_deeper.png" alt="">
            </a>
          </div>
        </template>
    </child-switch-button>
    <child-switch-button 
    class="button"
    :link="link[2]"
    @click.native="btnClick(link[2])"
    :clickClass="clickClass">
        <template v-slot:icon>
          <div class="bell-icon">
            <a href="javascript:;" >
              <img src="~assets/img/header/heart_lighter.png" alt="">
            </a>
          </div>
        </template>
        <template v-slot:active-icon>
          <div class="bell-icon">
            <a href="javascript:;">
              <img src="~assets/img/header/heart_deeper.png" alt="">
            </a>
          </div>
        </template>
    </child-switch-button>
    </div>
      <div class="list-content">
        <child-tab-bar-list  
        v-for="(item,index) in bell.list[clickClass]" 
        :key="index"
        :item="item">
        </child-tab-bar-list>
      </div>
      <div class="list-bottom">
        <div class="bottom-left">
          <slot name="bottom-left">设置</slot>
        </div>
        <div class="bottom-right">
          <slot name="bottom-right">查看全部通知</slot>
        </div>
      </div>
  </div>
</template>
<script>

import ChildTabBarList from "./ChildTabBarList"
import ChildSwitchButton from "../childtabbar/ChildHeaderProfile/ChildSwitchButton"

export default {
  name:"TabBarList",
  data(){
    return {
      bellClickClass:"",
      link:[
        "category",
        "people",
        "heart"
      ],
      clickClass:0
    }
  },
  components:{
    ChildTabBarList,
    ChildSwitchButton
  },
  props:{
    bell:{
      type:Object
    }
  },
  methods: {
    btnClick(a){
      this.clickClass=this.link.indexOf(a)
      // console.log(this.clickClass);
    }
  },
}
</script>
<style scoped>
  .list-content{
    width: 360px;
    height: 350px;
    overflow-x:hidden;
    overflow-y: auto;
    /* border:solid 1px #F1F1F1; */
    border-top:0;
  }
  .inner-content{
    position: relative;
    font-size: 14px;
    line-height: 25px;
    padding:15px 10px;
    border-bottom:solid 1px #F1F1F1;
  }
  .list-bottom{
    width: 360px;
    height: 40px;
    border-top:solid 1px #F1F1F1;
    border-radius: 0 0 5px 5px;
    line-height: 40px;
    color: #8590a6
  }
  .bottom-left{
    float: left;
    margin-left: 25px;
    cursor: pointer;
  }
  .bottom-right{
    float: right;
    margin-right: 25px;
    cursor: pointer;
  }
  .bell-icon img{
    height: 22px;
    width: 22px;
  }
  .child-switch{
    display:flex;
    border-bottom:solid 1px #F1F1F1;
  }
  .button{
    flex:1;
  }
</style>