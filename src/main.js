import Vue       from 'vue'
import VueRouter from 'vue-router'
import App       from './App.vue'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/', name:'login',
    //     component: () => import('./components/LoginLayout.vue')
    // },
    {
        path: '/', name:'home',
        component: () => import('./components/StevenHome.vue'),
        meta: {
          transitionName: 'slide'
        },
    },
  {
      path: '/about', name:'about',
      component: () => import('./components/StevenAbout.vue'),
      meta: {
        transitionName: 'slide'
      },
  },
  {
      path: '/projects', name:'projects',
      component: () => import('./components/StevenProjects.vue'),
      meta: {
        transitionName: 'slide'
      },
  },
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
  vuetify,
  router
}).$mount('#app')
