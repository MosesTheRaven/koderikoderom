<template>
  <v-app>
    <Header/>
    <v-content>
      <v-container fill-height fluid>
        <v-layout align-center justify-center  fill-height>
          <v-flex xs12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/navigation/Header'
import Footer from './components/navigation/Footer'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  data () {
    return {
      //
    }
  }
}

</script>

<style>
body{
  background-color: rgb(245, 245, 245)
}
.v-card{
  background-color: rgb(245, 245, 245) !important
}
</style>
