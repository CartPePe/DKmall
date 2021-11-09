<template>
  <div class="recommends">
    <p class="info">热门推荐</p>
    <goods-list :goods="goods"/>
  </div>
</template>
<script>
import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name:'DetailRecommends',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    GoodsList,
  }
}
</script>
<style scoped>
.info{
  padding: 15px 12px 0 12px;
  font-size: 15px;
  color: black;
}
</style>