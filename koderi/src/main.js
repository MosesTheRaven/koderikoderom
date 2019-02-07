import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase' 

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

new Vue({
  render: h => h(App),
}).$mount('#app')
