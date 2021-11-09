<template>
  <div id="detail">
    <detail-navbar class="detail-navbar" ref="navbar" @titleClick="titleClick" />
    <scroll class="detail-content" ref="scroll"
            :probe-type="3" @scroll="detailContenScroll">
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-param-info ref="param" :goodparam="goodparam"/>
    <detail-comment-info ref="comment" :comment-info="commentInfo"/>
    <detail-recommends ref="recommend" :goods="recommends"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import DetailNavbar from "@/views/detail/childComps/DetailNavbar";
import {getDetail, Goods, getRecommends, Shop, product, GoodParam} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailRecommends from "@/views/detail/childComps/DetailRecommends";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import GoodsStyle from "@/components/content/goods/GoodsStyle";
import {mixins, backTopMixin} from "@/assets/common/mixins";
import {debounce} from "@/assets/common/tool";
import {formatDate} from "@/assets/common/tool";

export default {
  name: "Detail",
  components: {
    Scroll,
    GoodsStyle,
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommends,
    DetailBottomBar
  },
  data() {
    return {
      iid: null,
      /**详情页轮播图图片 */
      swiperImages: null,
      goods: {},
      shops: {},
      detailinfo:{},//商品穿着效果
      goodparam:{},//商品尺码
      commentInfo:{},//评论信息
      recommends:{},//商品推荐信息
      themeTops:[],//点击DetailNavBar滚动到指定地方
      currentIndex:0,//记录滚动状态
      product:{},//点击加入购物车时商品样式
      showcart:false,
      showmess:false,//添加购物车成功提示
    };
  },
  mixins:[mixins,backTopMixin],
  created() {
    /**保存商品id */
    this.iid = this.$route.params.iid,
      getDetail(this.iid).then(res => {
        const data = res.result;

        this.swiperImages = data.itemInfo.topImages;

        /**获取商品数据 */
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );


        /**商店信息 */
        this.shops = new Shop(data.shopInfo);

        /**商品上身效果数据 */
        this.detailinfo=data.detailInfo;

        /**商品尺码信息 */
        this.goodparam=new GoodParam(data.itemParams.info,data.itemParams.rule)

        /**评论信息 */
        if(data.rate.cRate!==0){
          this.commentInfo=data.rate;

        }
        /**点击加入购物车时商品样式*/
        this.product=new product(this.iid,data.itemInfo,data.skuInfo);


      });

    /**商品推荐信息 */
    getRecommends().then(res=>{
      this.recommends=res.data;
    })
  },
  destroyed(){
    this.$mybus.$off("imgLoad",this.imgLoadListener);
  },
  methods:{
    showMess(){
      this.showcart=false;
      clearTimeout(timer);
      this.showmess=true;
      let timer=setTimeout(()=>{
        this.showmess=false;
      },1500)
    },
    showCart(){
      this.showcart=true;
    },
    back(){
      this.showcart=false;
    },
    imgLoad(){
      this.$refs.scroll.refresh();
      debounce(this.getThemeTops(),300);
    },

    /**点击DetailDavBar滚动到对应区域 */
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTops[index],300);
    },

    /**监听滚动 */
    detailContenScroll(position){
      this.currentScroll = -position.y > 1000 ;
      let positionY=-position.y;
      for(let i=0;i<this.themeTops.length-1;i++){
        if(this.currentIndex!=i&&(positionY>=this.themeTops[i]&&positionY<this.themeTops[i+1])){
          this.currentIndex=i;

        }
        this.$refs.navbar.currentIndex=this.currentIndex;
      }

    },

    getThemeTops(){
      this.themeTops=[];

      this.themeTops.push(0);
      this.themeTops.push(this.$refs.param.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE);

    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
  overflow: hidden;
}
.detail-navbar{
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
}
.detail-content {
  position: absolute;
  top: 44px;
  bottom: 58px;
}
.backtop{
  bottom: 90px;
  right: 15px;
}
.mess{
  width: 200px;
  height: 100px;
  border-radius: 5px;
  background: rgba(0, 0, 0, .6);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -72px;
  line-height: 100px;
  text-align: center;
  color: rgb(199, 197, 197);
}
.mess img{
  vertical-align: -6px;
}
</style>