<template>
  <v-card elevation="0">
    <v-card-title class="display-3">
      Vyberte si spôsob vyhodnotenia
    </v-card-title>
    <v-card-text class="headline">
      <p>Vaše skúsenosti a prax vieme vyhodnotiť dvomi spôsobmi.<br>Buď nahratím Vášho CV, ktoré Vám prinesie presnejší odhad mzdy, alebo vyplnením krátkeho dotazníka.</p>
    </v-card-text>
    <v-card-text>
      <v-layout row just>
        <v-flex xs6>
          <v-card elevation="0">
            <v-card-title class="display-2">
              Nahrať CV
            </v-card-title>
            <v-card-text>
              <p>Vaše skúsenosti budú vyhodnotené s najväčšou presnosťou.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn depressed color="primary" @click="$router.push({name : 'cv'})">
                Nahrať CV
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card elevation="0">
            <v-card-title class="display-2">
              Vyplniť dotazník
            </v-card-title>
            <v-card-text>
              <p>Zaberie 2 minúty, no bude vyhodnotený s menšou presnosťou.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn depressed color="grey lighten-3" @click="$router.push({name : 'form'})">
                Vyplniť dotazník
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
    })
  }
</script>