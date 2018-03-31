import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Popular from '@/components/Popular.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/popular",
      name: "Popular",
      component: Popular
    }
  ]
});
