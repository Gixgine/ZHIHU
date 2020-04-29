<template>
  <div id="sec-tab-bar-list">
    <div class="list-header">
      <div class="center">
        <slot name="center">
        我的私信
      </slot>
      </div>
    </div>
      <div class="list-content">
        <div  
        v-for="(item,index) in chat.list" 
        :key="index"
        :item="item"
        class="inner-content">
          <div class="img-content">
            <a href="javascript:;">
              <img :src="item.image" alt="">
            </a>
          </div>
          <div class="id-pa">
            <div class="identity-content">
              <span>
              {{item.name}}
              </span>
            </div>
            <div class="paragraph-content">
              {{item.paragraph}}
            </div>
          </div>
        </div>
      </div>
      <div class="list-bottom">
        <div class="bottom-left">
          <slot name="bottom-left">写新私信</slot>
        </div>
        <div class="bottom-right">
          <slot name="bottom-right">查看全部私信</slot>
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
    chat:{
      type:Object
    }
  }
}
</script>
<style scoped>
  /* #sec-tab-bar-list{
    position: absolute;
    top:100%;
  } */
  .list-header{
    /* position: relative; */
    width: 360px;
    height: 48px;
    display:flex;
    align-items: center;
    border-radius: 5px 5px 0 0;
    border:1px solid #F1F1F1;
    /* margin-top: 15px; */
    background: white;
  }
  /* .list-header:before{
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
  } */
  .center{
    flex:1;
    cursor: pointer;
  }
  .center:hover{
    color: #8590a6
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
    width: 343px;
    height: 74px;
    /* padding:15px 10px; */
    display:flex;
  }
  .inner-content .img-content{
    width: 60px;
    height: 60px;
    padding: 10px;
  }
  .inner-content .id-pa{
    width: 283px;
    padding: 10px 0px;
  }
  .inner-content .identity-content{
    font-size: 15px;
  }
  .inner-content .paragraph-content{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color:#8590a6;
  }
  .list-bottom{
    width: 360px;
    height: 40px;
    border:solid 1px #F1F1F1;
    border-top:0;
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
  .left img{
    width: 14px;
    height: 14px;
  }
</style>