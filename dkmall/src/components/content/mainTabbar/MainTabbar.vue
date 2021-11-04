<template>
  <div id="app">
    <tab-bar>
      <!--首页-->
      <tab-bar-item path="/home">
        <template class="img" #item-icon><img src="@/assets/img/tabbar/zhuye.svg" alt=""></template>
        <template #item-icon-active><img src="@/assets/img/tabbar/zhuye-active.svg" alt=""></template>
        <template #item-text>首页</template>
      </tab-bar-item>
      <!--分类-->
      <tab-bar-item path="/category">
        <template #item-icon><img src="@/assets/img/tabbar/fenlei.svg" alt=""></template>
        <template #item-icon-active><img src="@/assets/img/tabbar/fenlei-active.svg" alt=""></template>
        <template #item-text>分类</template>
      </tab-bar-item>
      <!--购物车-->
      <tab-bar-item path="/cart">
        <template #item-icon><img src="@/assets/img/tabbar/shopcart.svg" alt=""></template>
        <template #item-icon-active><img src="@/assets/img/tabbar/shopcart-active.svg" alt=""></template>
        <template #item-text>购物车</template>
      </tab-bar-item>
      <!--档案-->
      <tab-bar-item path="/file">
        <template #item-icon><img src="@/assets/img/tabbar/wode.svg" alt=""></template>
        <template #item-icon-active><img src="@/assets/img/tabbar/wode-active.svg" alt=""></template>
        <template #item-text>我的</template>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
img{
  height: 22px;
  width: 22px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
