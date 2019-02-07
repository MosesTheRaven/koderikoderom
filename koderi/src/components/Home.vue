<template>
  <v-list>
    <v-list-tile>
      <v-list-tile-content>
        <router-link :to="{name:'cv'}">link to cv</router-link>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-content>
        <router-link :to="{name:'form'}">link to form</router-link>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
    })
  }
</script>