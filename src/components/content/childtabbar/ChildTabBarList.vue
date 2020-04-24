<template>
  <div class="child-tab-bar-list">
          <span>
            <a href="javascript:;">
              {{item.cname}}
            </a>
            回复了文章下你的评论
            <a href="javascript:;">
              {{item.cparagragh}}
            </a>
          </span>
  </div>
</template>
<script>
export default {
  name:"ChildTabBarList",
  props:{
    item:Object
  }
}
</script>
<style scoped>
  .child-tab-bar-list{
    position: relative;
    font-size: 14px;
    line-height: 25px;
    padding:15px 10px;
    border-bottom:solid 1px #F1F1F1;
  }
</style>