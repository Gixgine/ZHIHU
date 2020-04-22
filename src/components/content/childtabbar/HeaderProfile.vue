<template>
  <div class="header-profile">
      <div class="header-profile-bell">
        <div class="bell-span"
              ></div>
      </div>
      <tab-bar-list class="bell-list" 
      v-show="bellshow">
        
      </tab-bar-list>
      <div class="header-profile-chat">
        <div class="chat-span" 
       
        ></div>
      </div>
      <tab-bar-list 
      class="chat-list"
      v-show="chatshow"
      :bell="bell">
      </tab-bar-list>
      <div class="header-profile-myself">
        <a href="javascript:;">
          <img src="~assets/img/header/header-profile-avatar.png" alt="" class="profile-img">
        </a>
      </div>
      <profile-list class="profile-list"
      v-show="profileshow">

      </profile-list>
  </div>
</template>
<script>

import TabBarList from "./TabBarList"
import request from "networks/request.js"
import ProfileList from "./ProfileList"


export default {
  name:"HeaderProfile",
  components:{
    TabBarList,
    ProfileList
  },
    data(){
    return{
      bell:{
        list0:[],
        list1:[],
        list2:[]
      },
      chat:{
        list0:[]
      },
      chatshow:false,
      bellshow:false,
      profileshow:false
    }
  },
  methods:{
    hideBellList(){
      document.addEventListener("click",(e)=>{
        let targetClass=e.target.className;
        if(targetClass!="bell-list"&&targetClass!="bell-span"){
          this.bellshow=false
        };
        if(targetClass==="bell-span"){
          this.bellshow=true
        }
      })
    },
    hideChatList(){
      document.addEventListener("click",(e)=>{
        let targetClass=e.target.className;
        if(targetClass!="chat-list"&&targetClass!="chat-span"){
          this.chatshow=false
        };
        if(targetClass==="chat-span"){
          this.chatshow=true
        }
      })
    },
    hideProfileList(){
      document.addEventListener("click",(e)=>{
        let targetClass=e.target.className;
        if(targetClass!="profile-list"&&targetClass!="profile-img"){
          this.profileshow=false
        };
        if(targetClass==="profile-img"){
          this.profileshow=true
        }
      })
    }
  },
  created(){
    request().then(res=>{
      this.bell.list0=res.data.data.header.bell.list0;
      this.bell.list1=res.data.data.header.bell.list1;
      this.bell.list2=res.data.data.header.bell.list2;
      this.chat.list0=res.data.data.header.chat.list0;
    }
  )
  },
  mounted() {
    this.hideBellList();
    this.hideChatList();
    this.hideProfileList();
  }
}
</script>
<style scoped>
  .header-profile{
    position: relative;
    width: 200px;
    height: 31px;
    /* background-color: pink; */
    /* position: absolute; */
    /* right:170px; */
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left:200px
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
  .bell-list{
    position: absolute;
    left:-139px;
  }
  .profile-list{
    position: absolute;
    right:-20px;
  }
</style>