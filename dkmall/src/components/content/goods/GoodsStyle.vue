<template>
  <div class="good-style" v-if="Object.keys(product).length!=0">
    <div class="middle">
      <div class="head">
        <div class="left">
          <img :src="product.img" alt />
        </div>
        <div class="title">
          <p>{{product.priceRange}}</p>
          <div class="goodbase">
            <span>库存：{{product.totalStock}}</span>
            <br />
            <span>请选择：颜色 尺码</span>
          </div>
        </div>
        <div class="back" @click="back()">
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/180130_86402bc8cg06gejic6f67affc71c1_40x40.png"
            alt
          />
        </div>
      </div>

      <scroll class="scroll">
        <div class="product">
          <div class="color">
            <p>颜色</p>
            <div class="center">
              <span
                v-for="(item,index) in product.styleColor.list"
                :key="index"
                :class="{action:index==colorIndex}"
                @click="colorClick(index)"
              >{{item.name}}</span>
            </div>
          </div>
          <div class="rule">
            <p>尺码</p>
            <span
              v-for="(item,index) in product.rule.list"
              :key="index"
              :class="{action:index==ruleIndex}"
              @click="ruleClick(index)"
            >{{item.name}}</span>
          </div>
          <div class="count">
            <p>数量</p>
            <span @click="unAdd">-</span>
            <span>{{product.count}}</span>
            <span @click="Add">+</span>
          </div>
        </div>
      </scroll>

      <div class="bottom" @click="addProduct()">确定</div>
    </div>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";

import { cartProduct } from "network/Detail";
export default {
  name: "GoodStyle",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      colorIndex: 0,
      ruleIndex: 0,
      cartProduct: null
    };
  },
  components: {
    Scroll
  },
  methods: {
    addProduct() {
      const pro = this.product;
      this.cartProduct = new cartProduct(
        pro.iid,
        pro.img,
        pro.lowNowPrice,
        pro.title,
        pro.rule.list[this.ruleIndex].name,
        pro.styleColor.list[this.colorIndex].name,
        pro.count
      );
      this.$store.dispatch("judgeProduct", this.cartProduct);
      this.$emit("showMess");
      console.log(this.cartProduct);

    },
    back() {
      this.$emit("back");
    },
    Add() {
      this.product.count++;
    },
    unAdd() {
      if (this.product.count <= 1) return;
      this.product.count--;
    },
    colorClick(index) {
      this.colorIndex = index;
    },
    ruleClick(index) {
      this.ruleIndex = index;
    }
  }
};
</script>
<style scoped>
.scroll {
  height: 230px;
  position: relative;
  bottom: 0px;
  overflow: hidden;
}
.good-style {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
}
.middle {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 70%;
  background: #fff;
  padding: 20px 20px;
}
.head {
  height: 100px;
  position: relative;
}
.left {
  width: 83px;
  margin-top: -50px;
  box-shadow: 0 0 1px white;
}
.back {
  position: fixed;
  right: 10px;
  z-index: 999;
}
.back img {
  width: 20px;
  height: 20px;
}
.left img {
  width: 100%;
  border-radius: 5px;
}
.title {
  width: 200px;
  float: left;
  margin-left: 20px;
}
.title p {
  font-size: 22px;
  color: var(--color-height-text);
}
.color {
  padding: 25px 0 0 0;
}
.rule {
  padding: 25px 0 0 0;
  display: flex;
  flex-wrap: wrap;
}
.count {
  padding: 25px 0 20px 0;
}
.goodbase {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.5em;
}
.product span {
  text-align: center;
  margin-right: 10px;
  margin-top: 5px;
  padding: 5px 8px;
  border: 1px solid #b2bbbe;
  border-radius: 5px;
  color: #5e5e5e;
  font-size: 13px;
}
.product p {
  padding-bottom: 10px;
  width: 100%;
}

.product div:nth-child(1) {
  padding: 0px;
}

.center {
  display: flex;
  flex-wrap: wrap;
}
/* .center span{
    flex: 1;
} */
.count span {
  padding: 5px 20px;
  margin-right: 0px;
}
.bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 44px;
  background: linear-gradient(90deg, #ff5777, #ff468f);
  height: 50px;
  line-height: 50px;
  width: 100%;
  text-align: center;
  color: #fff;
}
.action {
  color: #fff;
  background: var(--color-tint);
}
.test {
  background: yellow;
}
</style>