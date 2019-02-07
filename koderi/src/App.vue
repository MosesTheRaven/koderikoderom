<template>
  <v-app>
    <!-- <v-toolbar app>kek</v-toolbar> -->
    <v-content>
      <v-container fill-height fluid>
        <v-layout align-center justify-center  fill-height>
          <v-flex xs12 sm6 offset-sm3>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/navigation/Footer'

export default {
  name: 'App',
  components:{
    Footer
  },
  data () {
    return {
      //
    }
  }
}

</script>