<template>
  <div class="header-profile">
      <div class="header-profile-bell" >
        <div class="bell-span"
              ></div>
      </div>
      <tab-bar-list class="bell-list" 
      :bell="bell"
      v-show="bellshow"
      @bellClick="bellListClick">
        <template v-slot:left-icon>
          <div class="bell-icon">
            <a href="javascript:;" >
              <img src="~assets/img/header/category_lighter.png" alt="">
            </a>
          </div>
        </template>
        <template v-slot:left-active-icon>
          <div class="bell-icon">
            <a href="javascript:;">
              <img src="~assets/img/header/category_deeper.png" alt="">
            </a>
          </div>
        </template>
        <template v-slot:center-icon>
          <div class="bell-icon">
            <a href="javascript:;" >
              <img src="~assets/img/header/people_lighter.png" alt="">
            </a>
          </div>
        </template>
        <template v-slot:center-active-icon>
          <div class="bell-icon">
            <a href="javascript:;">
              <img src="~assets/img/header/people_deeper.png" alt="">
            </a>
          </div>
        </template>
        <template v-slot:right-icon>
          <div class="bell-icon">
            <a href="javascript:;" >
              <img src="~assets/img/header/heart_lighter.png" alt="">
            </a>
          </div>
        </template>
        <template v-slot:right-active-icon>
          <div class="bell-icon">
            <a href="javascript:;">
              <img src="~assets/img/header/heart_deeper.png" alt="">
            </a>
          </div>
        </template>
      </tab-bar-list>
      <div class="header-profile-chat">
        <div class="chat-span" 
       
        ></div>
      </div>
      <sec-tab-bar-list 
      class="chat-list"
      v-show="chatshow"
      :chat="chat"
      >
      </sec-tab-bar-list>
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
        list0:[],
        list1:[],
        list2:[]
      },
      chat:{
        list0:[]
      },
      chatshow:false,
      bellshow:false,
      profileshow:false,
      bellCurrentClass:"",
    }
  },
  methods:{
    bellListClick(res){
      this.bellCurrentClass=res;
      console.log(res);
    },
    // hideBellList(e){
    //   if(e.target.className==="bell-span"||this.bellCurrentClass==="header-profile-bell"){
    //     this.bellshow=true
    //   }else{
    //     this.bellshow=false
    //   }
    //   console.log(e.target.className);
    // },
    clickWindowHide(){
      var _this=this
      document.addEventListener("click",(e)=>{
        if(e.target.className==="bell-span"||_this.bellCurrentClass==="bell-list"){
        _this.bellshow=true
      }else{
        _this.bellshow=false
      }
      console.log(e.target.className,);
      console.log(_this.bellCurrentClass);
      })
    }
  },
  mounted() {
    this.clickWindowHide()
  },
  created(){
    request().then(res=>{
      this.bell.list0=res.data.data.header.bell.list0;
      this.bell.list1=res.data.data.header.bell.list1;
      this.bell.list2=res.data.data.header.bell.list2;
      this.chat.list0=res.data.data.header.chat.list0;
      // console.log(res);
      // console.log(this.bell.list0)
    }
  )
  },
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
  /* .bell-left{
    height: px;
    width: 14px;
  } */
  .bell-icon img{
    height: 22px;
    width: 22px;
  }
</style>