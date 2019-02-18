<template>
    <v-navigation-drawer
      absolute
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
                <img src="../../../../assets/img/admin-logo.png" alt="logo">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Koderi koderom - Admin</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        
        <v-list-tile @click="changeTable('form')">
          <v-list-tile-avatar>
            <i class="far fa-file"></i>
          </v-list-tile-avatar>
          <v-list-tile-content>
            Ľudia z Formularu
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="changeTable('cv')">
          <v-list-tile-avatar>
            <i class="far fa-file"></i>
          </v-list-tile-avatar>
          <v-list-tile-content>
            Ľudia z CV
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name : 'AdminNavigation',
  methods : {
    changeTable : function (arg){
      this.$emit('changeTable', arg)
    }
  }
}
</script>