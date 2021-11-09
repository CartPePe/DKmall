import {createRouter, createWebHashHistory} from 'vue-router'

const Home = () => import('../views/home/Home')
const File = () => import('../views/file/File')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Detail = () => import('../views/detail/Detail')

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
    },
    {
        path: '/detail/:iid',
        name: 'Detail',
        component: Detail
    }
]

export const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})