import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/products/list';
import configure from '@/components/products/configure';
import clientDetails from '@/components/Products/clientDetails';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/products',
      name: 'list',
      component: list
    },
    {
      path: '/configure/:mach',
      name: 'configure',
      component: configure
    },
    {
      path: '/step',
      name: 'clientDetails',
      component: clientDetails
    }
  ]
})
