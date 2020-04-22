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

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
     return originalPush.call(this, location).catch(err => err)
}

export default router