import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import Adjective from '@/views/Adjective'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Rhymesaurus',
    component: Rhymesaurus
  },
  {
    path: '/adjective',
    name: 'adjective',
    component: Adjective
  }

]

const router = new VueRouter({
  routes
})

export default router
