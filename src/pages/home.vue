<template>
  <div id="home">
    <!-- <van-nav-bar
      title="主页"
      right-text="按钮"
      :fixed="isFixed"
      :placeholder="isPlaceHolder"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
    <new-header title="主页" :showLeft="false" :showRight="true" rightText="主页"></new-header>
    <header>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </header>
    <main>
      <van-grid :border="false" :column-num="columnNum" :gutter="10">
        <van-grid-item v-for="(item, index) in gridImg" :key="index" @click="jump(item, index)">
          <van-image :src="item" />
          <span>{{ index }}</span>
        </van-grid-item>
      </van-grid>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="item in list" :key="item">
          {{ item }}
        </div>
      </van-list>
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import NewHeader from '@/components/newHeader'
Vue.use(Lazyload);
export default {
  components: {
    NewHeader
  },
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
      gridImg: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
      ],
      columnNum: 3,
      isFixed: true,
      isPlaceHolder: true,
      list: [],
      loading: false,
      finished: false,

    };
  },
  methods: {
    onClickLeft() {
      console.log("left");
    },
    onClickRight() {
      console.log("right");
    },
    jump (item, index) {
      console.log(item);
      console.log(index);
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  },
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  background: #eaeaea;
  > header {
    img {
      width: 100%;
      height: 150px;
    }
  }
}
</style>
