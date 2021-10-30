<template>
  <tab-bar>
    <!--首页-->
    <tab-bar-item path="/home" active-color="">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <!--分类-->
    <tab-bar-item path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/all-fill.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/all-fill-active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <!--购物车-->
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/cart-full.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/cart-full-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <!--档案-->
    <tab-bar-item path="/file">
      <img slot="item-icon" src="@/assets/img/tabbar/account.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/account-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";
export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
