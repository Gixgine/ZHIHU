import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import('../views/home/Home')
const Explore = () => import('../views/explore/Explore')
const Question = () => import('../views/question/Question')

Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/explore",
    component:Explore
  },
  {
    path:"/question",
    component:Question
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router