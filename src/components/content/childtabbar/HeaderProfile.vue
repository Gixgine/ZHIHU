<template>
  <div class="header-profile">
      <div class="header-profile-bell">
        <div class="bell-span"></div>
      </div>
      <div class="header-profile-chat">
        <div class="chat-span"></div>
      </div>
      <div class="header-profile-myself">
        <a href="javascript:;">
          <img src="~assets/img/header/header-profile-avatar.png" alt="">
        </a>
      </div>
  </div>
</template>
<script>
export default {
  name:"HeaderProfile"
}
</script>
<style scoped>
  .header-profile{
    width: 200px;
    height: 31px;
    /* background-color: pink; */
    position: absolute;
    right:170px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
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
</style>