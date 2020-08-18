<template>
  <div>
      <new-header title="朋友" :showLeft="true" :showRight="true" rightText="朋友详情"></new-header>
  </div>
</template>

<script>
import NewHeader from '@/components/newHeader'
export default {
    name: 'friends',
    components: {
        NewHeader
    }
}
</script>

<style>

</style>