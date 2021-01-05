import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Account from '../views/Account.vue'
import Message from '../views/Message.vue'
import List from '../views/List.vue'
import Infos from '../views/Infos.vue'

Vue.use(VueRouter)
Vue.use(require('vue-moment'));

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/infos',
    name: 'Infos',
    component: Infos,
  }
]

const router = new VueRouter({
  routes
})

export default router
