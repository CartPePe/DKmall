import  Vue from 'vue';
import VueRouter from "vue-router";
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
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/file',
    component: File
  }
]

const router = new VueRouter({
  routes
})
//导出路由
export default router

