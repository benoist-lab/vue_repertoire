import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VueMeta from 'vue-meta';

Vue.config.productionTip = false


// Vue.use(VueMeta, {
//   keyName: 'head'
// });

new Vue({
  router,
  store,
  // metaInfo: {
  //   title: "repertoire"
  // },
  render: h => h(App)
})



.$mount('#app')
