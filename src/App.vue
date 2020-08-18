<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">home</van-tabbar-item>
      <van-tabbar-item icon="search">search</van-tabbar-item>
      <van-tabbar-item icon="friends-o">friends</van-tabbar-item>
      <van-tabbar-item icon="setting-o">setting</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onChange(index) {
      this.$notify({ type: "primary", message: index });
      if (index == 0) {
          this.$router.push({path: '/home'})
      } else if (index == 1) {
          this.$router.push({path: '/search'})
      } else {
          this.$router.push({path: '/login'})
      }
    },
  },
};
</script>

<style>
</style>
