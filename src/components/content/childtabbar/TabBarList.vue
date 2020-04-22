<template>
  <div id="tab-bar-list">
    <div class="list-header">
      <div class="left">
        <slot name="left">
        左
      </slot>
      </div>
      <div class="center">
        <slot name="center">
        中
      </slot>
      </div>
      <div class="right">
        <slot name="right">
        右
      </slot>
      </div>
    </div>
      <div class="list-content">
        <child-tab-bar-list  
        v-for="(item,index) in bell[list0]" 
        :key="index"
        :item="item">

        </child-tab-bar-list>
      </div>
      <div class="list-bottom">
        <div class="bottom-left">
          <slot name="bottom-left">底左</slot>
        </div>
        <div class="bottom-right">
          <slot name="bottom-right">底右</slot>
        </div>
      </div>
  </div>
</template>
<script>

import ChildTabBarList from "./ChildTabBarList"

export default {
  name:"TabBarList",
  components:{
    ChildTabBarList
  },
  props:{
    bell:Object,
  }
}
</script>
<style scoped>
  #tab-bar-list{
    position: absolute;
    top:100%;
  }
  .list-header{
    position: relative;
    width: 360px;
    height: 48px;
    display:flex;
    align-items: center;
    border-radius: 5px 5px 0 0;
    border:1px solid #F1F1F1;
    margin-top: 15px;
    background: white;
  }
  .list-header:before{
    position: absolute;
    content:"";
    height: 0;
    width: 0;
    border-style:solid;
    border-color: transparent transparent #F1F1F1 transparent;
    border-width:10px;
    left:50%;
    top:-20px;
    transform:translate(-50%);
  }
  .list-header:after{
    position: absolute;
    content:"";
    height: 0;
    width: 0;
    border-style:solid;
    border-color: transparent transparent #fff transparent;
    border-width:9px;
    left:50%;
    top:-18px;
    transform:translate(-50%);
  }
  .list-header div{
    width: 120px;
    height: 22px;
    text-align: center;
  }
  .list-content{
    width: 360px;
    height: 350px;
    overflow-x:hidden;
    overflow-y: auto;
    border:solid 1px #F1F1F1;
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
    border:solid 1px #F1F1F1;
    border-top:0;
    border-radius: 0 0 5px 5px;
    line-height: 40px;
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
</style>