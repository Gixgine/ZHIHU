<template>
  <div id="child-switch-button">
    <div class="list-header">
      <div v-show="btnShow">
        <slot name="icon"></slot>
      </div>
      <div v-show="!btnShow">
        <slot name="active-icon"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"ChildSwitchButton",
  data(){
    return {
      btnLink:[
        "category",
        "people",
        "heart"
      ]
    }
  },
  props:{
    link:{
      type:String,
      default:"category"
    },
    clickClass:{
      type:Number
    }
  },
  computed: {
    btnShow(){
      // console.log(this.clickClass,this.link);
      return !(this.btnLink[this.clickClass]===this.link)
    }
  },
}
</script>
<style scoped>
  .list-header{
    /* position: relative; */
    width: 120px;
    height: 48px;
    display:flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 5px 5px 0 0;
    border:1px solid #F1F1F1; */
    /* margin-top: 15px; */
    background: white;
  }
</style>