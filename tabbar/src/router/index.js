import  Vue from 'vue';
import VueRouter from "vue-router";
import Category from "../views/category/Category";
import Cart from "../views/cart/Cart";
const Home = () => import('../views/home/Home')
const File = () => import('../views/file/File')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')

//安装插件
Vue.use(VueRouter)
//创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    components: Home
  },
  {
    path: '/category',
    components: Category
  },
  {
    path: '/cart',
    components: Cart
  },
  {
    path: '/file',
    components: File
  }
]

const router = new VueRouter({

})
//导出路由
export default router

