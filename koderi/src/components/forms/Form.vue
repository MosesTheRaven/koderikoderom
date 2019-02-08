<template>
    <v-card elevation="0">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span class="headline"><strong>Krok {{step}}</strong>/3</span>
      </v-card-title>
      <v-form ref="form" v-model="formIsValid" >
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
                <p>V prvom kroku je dôležité zistiť to, aký kóder ste a koľko reálnych skúseností máte.</p>
                <p class="headline">Aký typ programátora ste?</p>
                <v-layout row class="mb-4">
                        <v-chip label color="white" 
                            v-for="(type, index) in programmerEnums.type" :key="index"
                            :selected="programmer.selectedProgrammerTypes.includes(index)" 
                            @click="processItemInArray(programmer.selectedProgrammerTypes, index)"
                        >
                            {{type}} 
                        </v-chip>
                    </v-layout>
                    
                    <p class="headline">Ktoré technológie sú vám blízke?</p>
                    <v-layout row wrap class="mb-4">
                        <v-chip label color="white"
                            v-for="(technology, index) in programmerEnums.availableTechnologies" :key="index"  
                            @click="processItemInArray(programmer.selectedTechnologies, index)"
                            :selected="programmer.selectedTechnologies.includes(index)"
                        >
                            {{technology}}
                        </v-chip>
                    </v-layout>
                    
                    <!-- 5 = Java in Java enums -->
                    <div v-if="programmer.selectedTechnologies.includes(5)"> 
                        <p class="headline">Aký Java framework používate?</p>
                        <v-layout  row wrap class="mb-4">
                            <v-chip label color="white"
                              v-for="(javaTechnology, index) in programmerEnums.availableJavaTechnologies" :key="index"  
                              @click="processItemInArray(programmer.selectedJavaTechnologies, index)"
                              :selected="programmer.selectedJavaTechnologies.includes(index)"
                            >{{javaTechnology}}</v-chip>
                        </v-layout>
                    </div>

                    <!-- 6 = Java in Java enums -->
                    <div v-if="programmer.selectedTechnologies.includes(6)">
                        <p class="headline">Aký Javascript framework používate?</p>
                        <v-layout  row wrap class="mb-4">
                            <v-chip label color="white" 
                            v-for="(javaScriptTechnology, index) in programmerEnums.availableJavascriptTechnologies" :key="index"  
                            @click="processItemInArray(programmer.selectedJavascriptTechnologies, index)"
                            :selected="programmer.selectedJavascriptTechnologies.includes(index)"
                            >{{javaScriptTechnology}}</v-chip>
                        </v-layout>
                    </div>
                    
                    <p class="headline">Koľko rokov praxe máte?</p>
                    <v-layout row wrap class="mb-4">
                        <v-chip color="white"
                          v-for="(prax, index) in programmerEnums.praxis" :key="index"
                          :selected="programmer.prax===index" label @click="programmer.prax = index">{{prax.label}}</v-chip>
                    </v-layout>
            </v-card-text>
          </v-window-item>
          <v-window-item :value="2">
            <v-card-text>
              <p>V druhom kroku uveďte doplňujúce informácie.</p>
              <p class="headline">Viedli ste niekedy tím ľudí?</p>
              <v-layout class="mb-4">
                <v-chip label color="white" :selected="programmer.isTeamLeader" @click="programmer.isTeamLeader = true">Áno</v-chip>
                <v-chip label color="white" :selected="!programmer.isTeamLeader && programmer.isTeamLeader != null" @click="programmer.isTeamLeader = false">Nie</v-chip>
              </v-layout>
              <p class="headline">Máte skúsenosti s konkrétnou doménou? (Bankovníctvo, Medicína, Telekomunikácie...)</p>
              <v-layout class="mb-4">
                  <v-chip label color="white" :selected="programmer.workedDomain" @click="programmer.workedDomain = true">Áno</v-chip>
                  <v-chip label color="white" :selected="!programmer.workedDomain && programmer.workedDomain != null" @click="programmer.workedDomain = false">Nie</v-chip>
              </v-layout>
              <p class="headline">Pracovali ste ako softvérový architekt?</p>
              <v-layout class="mb-4">
                <v-chip label color="white" :selected="programmer.isArchitect" @click="programmer.isArchitect = true">Áno</v-chip>
                <v-chip label color="white" :selected="!programmer.isArchitect && programmer.isArchitect != null" @click="programmer.isArchitect = false">Nie</v-chip>
              </v-layout>
            </v-card-text>
          </v-window-item>
          <v-window-item :value="3">
            <v-card-text>
              <p>Nakoniec nám nechajte svoje meno a e-mail, na ktorý Vám pošleme výsledok formulára.</p>
              <v-flex lg4 class="mb-4">
                <v-text-field class="mb-2" required v-model="programmer.name" label="Meno" :rules="[rules.required]" placeholder="Jožko" />
                <v-text-field class="mb-2" required v-model="programmer.surname" label="Priezvisko" :rules="[rules.required]" placeholder="Mrkvička"/>
                <v-text-field  required v-model="programmer.email" :rules="[rules.required, rules.email]" label="E-mail" placeholder="jozko@mrkvicka.sk"></v-text-field>
              </v-flex>
              <div id="zasadyDiv">
                <p><strong>I. Súhlas so spracovaním osobných údajov</strong><br>Spoločnosť Objectify s.r.o, so sídlom Martinengova 4881/36 811 02 Bratislava – Staré Mesto, IČO: 47975890 informuje, že osobné údaje spracúva podľa §10 zákona č. 122/2013 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov v rozsahu meno, priezvisko, adresa, miesto podnikania, IČO, bankové spojenie, dátum narodenia, e-mailová adresa, telefónne číslo, pracovné skúsenosti a ďalších údajov, ktoré záujemca dobrovoľne poskytne.</p>
                <p>Záujemca odoslaním svojej žiadosti, ktorej súčasťou je aj tento súhlas, týmto dáva spoločnosti Objectify súhlas aby do {{date}} spracúvala jeho osobné údaje vo vyššie uvedenom rozsahu, tieto následne poskytovala, sprístupňovala a cezhranične prenášala právnickým a fyzickým osobám podľa potreby spoločnosti. Záujemca má právo kedykoľvek svoj súhlas odvolať, a to doručením písomného odvolania svojho súhlasu na adresu spoločnosti.</p>
                <p>Účelom spracúvania osobných údajov záujemcu je zanalyzovanie jeho skúseností a praxe a následnom vyhodnotení jeho predpokladanej mzdy.</p>
                <p><strong>II. Informácie pre dotknutú osobu v zmysle zákona č. 122/2013 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov</strong><br>
                Spoločnosť Objectify s.r.o, so sídlom Martinengova 4881/36 811 02 Bratislava – Staré Mesto, IČO: 47975890 vystupuje prostredníctvom konateľov Jána Čúzyho a Igora Dyska (ďalej len „oprávnené osoby“) za účelom získavania a spracúvania osobných údajov dotknutej osoby v zmysle zákona č. 122/2013 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov v platnom znení (ďalej len „ZOOÚ“) v postavení</p>
                <ul>
                  <li>prevádzkovateľa (ďalej len „prevádzkovateľ“) za účelom spracúvania získaných osobných údajov dotknutej osoby</li>
                </ul>
                <p><strong>Rozsah a účel spracúvania osobných údajov</strong><br>Prevádzkovateľ spracúva v zmysle ZOOÚ osobné údaje kandidáta (ďalej len „dotknutá osoba“) na základe jeho súhlasu v rozsahu meno, priezvisko, adresa, miesto podnikania, IČO, bankové spojenie, dátum narodenia, e-mailová adresa, telefónne číslo, pracovné skúsenosti a ďalších údajov, ktoré kandidát dobrovoľne poskytne. Účelom spracúvania osobných údajov záujemcu je zanalyzovanie jeho skúseností a praxe a následnom vyhodnotení jeho predpokladanej mzdy.</p>
                <p><strong>Tretie strany, príjemcovia, tretie krajiny</strong><br>Osobné údaje dotknutej osoby môžu byť poskytnuté právnickým a fyzickým osobám, ktoré budú mať záujem o dodanie služieb poskytovaných dotknutou osobou. Osobné údaje kandidáta môžu byť cezhranične prenášané, pričom kandidát vyslovene súhlasí s tým, aby vzhľadom na jeho záujmy mohli byť jeho osobné údaje za vyššie uvedeným účelom prenášané do akýchkoľvek tretích krajín.</p>
                <p><strong>Práva dotknutej osoby</strong><br>Dotknutá osoba, ktorá poskytuje osobné údaje, má právo vyžiadať preukázanie totožnosti oprávnenej osoby, ktorá získava osobné údaje, alebo preukázanie príslušnosti oprávnenej osoby hodnoverným dokladom k tomu subjektu, v mene ktorého koná. Oprávnená osoba je povinná takejto žiadosti dotknutej osoby bez zbytočného odkladu vyhovieť. Dotknutá osoba má právo kedykoľvek svoj súhlas so spracovaním osobných údajov odvolať, a to doručením písomného odvolania svojho súhlasu na adresu spoločnosti. Dotknutá osoba bola poučená, že poskytnutie súhlasu so spracovaním jej osobných údajov je dobrovoľný. Ďalšie práva dotknutej osoby sú uvedené v ZOOÚ.</p>
                <p><strong>Poučenie a vyhlásenie dotknutej osoby</strong><br>Dotknutá osoba vyhlasuje, že bola poučená o svojich právach v zmysle ustanovenia § 28 ZOOÚ. Dotknutá osoba vyhlasuje, že bola v plnom rozsahu informovaná o všetkých skutočnostiach v zmysle ustanovenia § 15 ZOOÚ.</p>
                <p>Záujemca/dotknutá osoba … zaslaním svojho životopisu alebo vyplnením formulára vyjadrujem svoj súhlas so spracovaním osobných údajov, ako aj potvrdzujem, že som sa oboznámil(a) so všetkými informáciami uvedenými vo vyššie uvedenom článku II. Dátumom udelenia môjho súhlasu je dátum odoslania môjho životopisu spoločnosti.</p>
              </div>
              <v-checkbox requried  :rules="[v => !!v || 'Musíte súhlasiť so spracovaním informácií']" v-model="suhlas" label="Súhlasím so spracovaním osobných údajov"></v-checkbox>
            </v-card-text>
          </v-window-item>
        </v-window>
      </v-form>
      

      <v-divider></v-divider>
      
      <v-card-actions>
        <v-btn depressed :disabled="step === 1" flat @click="step--">Späť</v-btn>
        <v-btn color="primary" depressed @click="processStep()">{{step==3 ? 'Odoslať' : 'Ďalej' }}</v-btn>
      </v-card-actions>
      <!-- left unused -->
      <v-dialog v-model="dialog" hide-overlay persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            Vase odpovede sa spracovávajú
            <v-progress-circular indeterminate color="white" class="mb-0"></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-dialog>
  </v-card>
</template>
<script>
import * as firebase from 'firebase'

export default {
    name: 'Form',
    computed: {
        date : function(){
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDate();
            var date = new Date(year + 50, month, day)

            return date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear()
        }
    },
    created() {
      firebase.database().ref('enums/programmer')
      .once('value', (dataSnapshot) => {
        this.programmerEnums = dataSnapshot.val()
      })
    },
    data: () => ({
      // used for monitoring steps in window
      step: 1,
      formIsValid : null,
      programmer : {
        selectedJavaTechnologies : [],
        selectedProgrammerTypes : [],
        selectedTechnologies : [],
        selectedJavascriptTechnologies : [],
        prax : null,
        isTeamLeader : null,
        workedDomain : null,
        isArchitect : null,
        name : null,
        surname : null,
        email : null,
      },
      // loaded at creation
      programmerEnums : {  
      },
      suhlas : null,
      dialog: false,
      rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        },
      suhlasFarba : ''
    }),
    methods:{
        processItemInArray: function(array, item){
            array.includes(item) ? array.splice(array.indexOf(item), array.indexOf(item) + 1) : array.push(item)
        },
        processStep: function(){
            if (this.step < 3) this.step++;
            else {
              this.validate();
              if(this.formIsValid){
                // this.dialog = true
                firebase.database().ref('programmers').push(this.programmer)
                .then(()=>{
                  // this.dialog = false
                  this.$router.push({name : 'thankyou'})
                })
                .catch((err)=>{
                  console.log(err)
                })
              }
              else{
                console.log('nezvalidovalo to dobre')
              }
            }
            
            // else if(!this.suhlas && this.programmer.name != '' && this.programmer.email != ''){
            //     this.suhlasFarba = 'text-red'
            //     // dorobit rozhodovanie
            // } 
            // else{
            // }
        },
        validate : function(){
          this.$refs.form.validate();
        }
    },
}
</script>
<style>
.v-chip:focus:not(.v-chip--selected):after {
    background: none !important;
}
#zasadyDiv{
    height: 150px;
    overflow: scroll;
    overflow-x: hidden
}
.text-red .v-label{
    color: red !important;
}

</style>
