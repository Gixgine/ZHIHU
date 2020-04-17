<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from 'components/content/tabbar/TabBar'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
