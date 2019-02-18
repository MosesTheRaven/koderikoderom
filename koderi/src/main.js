import Vue from 'vue'
import './plugins/vuetify'
import * as firebase from 'firebase' 
import './stylus/main.styl'

import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Form from './components/forms/Form'
import CVUpload from './components/forms/CVUpload'
import ONas from './components/content/ONas'
import ThankYou from './components/content/ThankYou'
import Admin from './components/content/admin/Admin'


Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDK5GBRnkV5jv9jOcIOjB97uOk1h0KXlw4",
  authDomain: "koderikoderom-365dd.firebaseapp.com",
  databaseURL: "https://koderikoderom-365dd.firebaseio.com",
  projectId: "koderikoderom-365dd",
  storageBucket: "koderikoderom-365dd.appspot.com",
  messagingSenderId: "678888712592"
};
firebase.initializeApp(config);

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [
      { 
        path: '/',
        name: 'home',
        component: Home 
      },
      { 
        path: '/form',
        name: 'form',
        component: Form
      },
      {
        path: '/cv',
        name: 'cv',
        component: CVUpload
      },
      {
        path: '/o-nas',
        name: 'o-nas',
        component: ONas
      },
      {
        path: '/zasady',
        name: 'zasady',
        component: ThankYou
      },
      {
        path: 'dakujeme',
        name: 'thankyou',
        component: ThankYou
      },
      {
        path : 'koderi-admin',
        name: 'admin',
        component : Admin
      },
    ]
  })
}).$mount('#app')
