import Vue from 'vue'
import Menu from '../components/Menu.vue'
import Todo from '../components/Todo.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Menu },
  { path: '/Todo', name: 'todo', component: Todo }
]
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
