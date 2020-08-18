<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-arrow="showLeft"
      :right-text="showRight ? rightText : ''"
      :left-text="showLeft ? leftText : ''"
      :fixed="isFixed"
      :placeholder="isPlaceHolder"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: "newHeader",
  data () {
      return {
          isFixed: true,
          isPlaceHolder: true,
      }
  },
  props: {
      title: {
          type: String,
          default: '主页'
      },
      showLeft: {
          type: Boolean,
          default: true
      },
      leftText: {
          type: String,
          default: '返回'
      },
      rightText: {
          type: String,
          default: '右键'
      },
      showRight: {
          type: Boolean,
          default: true
      }
  },
  methods: {
      onClickLeft () {
          this.$router.go(-1)
      },
      onClickRight () {
          console.log('this is right button');
        //   this.$router.push({
        //       path: '/pagesearch'
        //   })
      }
  }
};
</script>

<style>
</style>