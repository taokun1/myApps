<template>
  <div>
    <new-header title="搜索" :showLeft="true" :showRight="true"></new-header>
  </div>
</template>

<script>
import NewHeader from '@/components/newHeader'
export default {
  name: "search",
  data() {
    return {
      isFixed: true,
      isPlaceHolder: true
    };
  },
  components: {
    NewHeader
  },
  methods: {
    onClickLeft () {
      console.log('left');
    },
    onClickRight () {
      console.log('right');
    }
  },
  mounted() {},
};
</script>

<style>
</style>