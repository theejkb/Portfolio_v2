import Vue       from 'vue'
import VueRouter from 'vue-router'
import App       from './App.vue'


Vue.use(VueRouter)

const routes = [
  {
      path: '/home', name:'home',
      component: () => import('./components/CoffeeHome.vue')
  },
  {
      path: '/products', name:'products',
      component: () => import('./components/CoffeeProducts.vue')
  },
  {
      path: '/about', name:'about',
      component: () => import('./components/CoffeeAbout.vue')
  },
  {
      path: '/store', name:'store',
      component: () => import('./components/CoffeeStore.vue')
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
