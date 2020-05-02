<template>
  <div class="header-profile">
      <el-popover
        placement="bottom"
        trigger="click">
      <tab-bar-list 
      class="bell-list" 
      :bell="bell"
      :key="timer">
      </tab-bar-list>
      <div class="header-profile-bell" slot="reference" @click="handleLoad">
        <div class="bell-span"></div>
      </div>
      </el-popover>
      
      <el-popover
        placement="bottom"
        trigger="click">
      <sec-tab-bar-list 
      class="chat-list"
      :chat="chat"
      >
      </sec-tab-bar-list>
      <div class="header-profile-chat" slot="reference">
        <div class="chat-span"></div>
      </div>
      </el-popover>
      <el-popover>
      <div class="header-profile-myself" slot="reference">
        <a href="javascript:;">
          <img src="~assets/img/header/header-profile-avatar.png" alt="" class="profile-img">
        </a>
      </div>
      <profile-list class="profile-list">

      </profile-list>
      </el-popover>
  </div>
</template>
<script>

import TabBarList from "./TabBarList"
import SecTabBarList from "./SecTabBarList"
import request from "networks/request.js"
import ProfileList from "./ProfileList"


export default {
  name:"HeaderProfile",
  components:{
    TabBarList,
    ProfileList,
    SecTabBarList
  },
    data(){
    return{
      bell:{
        list:[
          [],
          [],
          []
        ]
      },
      chat:{
        list:[]
      },
      timer:""
    }
  },
  created(){
    request().then(res=>{
      this.bell.list[0]=res.data.data.header.bell.list0;
      this.bell.list[1]=res.data.data.header.bell.list1;
      this.bell.list[2]=res.data.data.header.bell.list2;
      this.chat.list=res.data.data.header.chat.list0;
      console.log(res);
      console.log(this.bell.list[0])
    }
  )
  },
  methods: {
    handleLoad(){
      this.timer=new Date().getTime()
    }
  },
}
</script>
<style scoped>
  .header-profile{
    position: absolute;
    right:10px;
    min-width: 150px;
    height: 31px;
    /* background-color: pink; */
    /* position: absolute; */
    /* right:170px; */
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* float:right; */
  }
  .header-profile-bell div{
    /* display:block; */
    height: 22px;
    width: 22px;
    background: url("~assets/img/header/header-bell-lighter.png") no-repeat;
    background-size: cover;
    cursor: pointer;
  }
  .bell-span:hover{
    background: url("~assets/img/header/header-bell-deeper.png") no-repeat;
    background-size: cover;
  }
  .header-profile-chat div{
    display:block;
    height: 25px;
    width: 25px;
    background: url("~assets/img/header/header-chat-lighter.png") no-repeat;
    background-size: cover;
    cursor: pointer;
  }
  .chat-span:hover{
    background: url("~assets/img/header/header-chat-deeper.png") no-repeat;
    background-size: cover;
  }
  .header-profile-myself{
    cursor: pointer;
  }
  /* .profile-list{
    position: absolute;
    right:-20px;
  } */
</style>
