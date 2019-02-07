import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import * as firebase from 'firebase' 
import Home from './components/Home'
import Form from './components/forms/Form'
import CVUpload from './components/forms/CVUpload'


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
    mode: 'history',
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
      }
    ]
  })
}).$mount('#app')
