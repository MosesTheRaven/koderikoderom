<template>
  <v-toolbar>
    <v-toolbar-title class="toolbar-title" @click="$router.push({name:'home'})">
      Koderi Koderom
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <p>
        <router-link :to="{name: 'o-nas'}">Zistite o tomto dotazníku viac</router-link> a <a href="https://www.facebook.com/K%C3%B3deri-K%C3%B3derom-1243492685805038/">sledujte nás na Facebooku</a>.
      </p>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    name: 'Header',
    data: ()=> ({
      width : 181,
      height : 40
    })
}
</script>

<style>
.toolbar-title{
  cursor : pointer;
}
</style>
