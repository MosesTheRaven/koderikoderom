<template>
    <v-card>
    <v-card-title class="title font-weight-regular justify-space-between">
      <span class="headline"><strong>Krok {{step}}</strong>/3</span>
    </v-card-title>
    <v-window v-model="step">
      
      <v-window-item :value="1">
        <v-card-text>
            <p>V prvom kroku je dôležité zistiť to, aký kóder ste a koľko reálnych skúseností máte.</p>
            <v-form>
                <p class="headline">Aký typ programátora ste?</p>
                <v-layout row>
                    <v-chip label 
                        v-for="(type, index) in availableProgrammerTypes" :key="index"
                        :selected="selectedProgrammerTypes.includes(type)" 
                        @click="processItemInArray(selectedProgrammerTypes, type)"
                    >
                        {{type}}
                    </v-chip>
                </v-layout>
                <p>{{selectedProgrammerTypes}}</p>
                
                <p class="headline">Ktoré technológie sú vám blízke?</p>
                <v-layout row wrap>
                    <v-chip label 
                        v-for="(technology, index) in availableTechnologies" :key="index"  
                        @click="processItemInArray(selectedTechnologies, technology)"
                        :selected="selectedTechnologies.includes(technology)"
                    >
                        {{technology}}
                    </v-chip>
                </v-layout>
                <p>{{selectedTechnologies}}</p>
                
                <div v-if="selectedTechnologies.includes('Java')">
                    <p class="headline">Aký Java framework používate?</p>
                    <v-layout  row wrap>
                        <v-chip label v-for="(javaTechnology, index) in availableJavaTechnologies" :key="index"  
                        @click="processItemInArray(selectedJavaTechnologies, javaTechnology)"
                        :selected="selectedJavaTechnologies.includes(javaTechnology)"
                        >{{javaTechnology}}</v-chip>
                    </v-layout>
                    <p>{{selectedJavaTechnologies}}</p>
                </div>
                
                <div v-if="selectedTechnologies.includes('Javascript')">
                    <p class="headline">Aký Javascript framework používate?</p>
                    <v-layout  row wrap>
                        <v-chip label v-for="(javaScriptTechnology, index) in availableJavascriptTechnologies" :key="index"  
                        @click="processItemInArray(selectedJavascriptTechnologies, javaScriptTechnology)"
                        :selected="selectedJavascriptTechnologies.includes(javaScriptTechnology)"
                        >{{javaScriptTechnology}}</v-chip>
                    </v-layout>
                    <p>{{selectedJavascriptTechnologies}}</p>
                </div>
                
                <p class="headline">Koľko rokov praxe máte?</p>
                <v-layout row wrap>
                    <v-chip :selected="prax==='Menej ako 1 rok'" label @click="prax = 'Menej ako 1 rok'">Menej ako 1 rok</v-chip>
                    <v-chip :selected="prax==='1 - 2 roky'" label @click="prax = '1 - 2 roky'">1 - 2 roky</v-chip>
                    <v-chip :selected="prax==='3 - 4 roky'" label @click="prax = '3 - 4 roky'">3 - 4 roky</v-chip>
                    <v-chip :selected="prax==='5 a viac rokov'" label @click="prax = '5 a viac rokov'">5 a viac rokov</v-chip>
                </v-layout>
                <p>{{prax}}</p>
            </v-form>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
            <p>V druhom kroku uveďte doplňujúce informácie.</p>

            <p class="headline">Viedli ste niekedy tím ľudí?</p>
            <v-layout>
                <v-chip label :selected="isTeamLeader" @click="isTeamLeader = true">Áno</v-chip>
                <v-chip label :selected="!isTeamLeader && isTeamLeader != null" @click="isTeamLeader = false">Nie</v-chip>
            </v-layout>
            
            <p class="headline">Máte skúsenosti s konkrétnou doménou? (Bankovníctvo, Medicína, Telekomunikácie...)</p>
            <v-layout>
                <v-chip label :selected="workedDomain" @click="workedDomain = true">Áno</v-chip>
                <v-chip label :selected="!workedDomain && workedDomain != null" @click="workedDomain = false">Nie</v-chip>
            </v-layout>
            
            <p class="headline">Pracovali ste ako softvérový architekt?</p>
            <v-layout>
                <v-chip label :selected="isArchitect" @click="isArchitect = true">Áno</v-chip>
                <v-chip label :selected="!isArchitect && isArchitect != null" @click="isArchitect = false">Nie</v-chip>
            </v-layout>
            
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <v-card-text>
            <p>Nakoniec nám nechajte svoje meno a e-mail, na ktorý Vám pošleme výsledok formulára.</p>
            <v-layout row justify-space-between wrap>
                <v-flex sm6>
                    <v-text-field v-model="name" label="Meno" :rules="[rules.required]" placeholder="Jožko" outline/>
                </v-flex>
                <v-flex sm6>
                    <v-text-field v-model="surname" label="Priezvisko" :rules="[rules.required]" placeholder="Mrkvička" outline/>
                </v-flex>
            </v-layout>
            <v-text-field v-model="email" :rules="[rules.required, rules.email]" label="E-mail"></v-text-field>
        
            <div id="zasadyDiv">
                <p><strong>I. Súhlas so spracovaním osobných údajov</strong><br>
                Spoločnosť Objectify s.r.o, so sídlom Martinengova 4881/36 811 02 Bratislava – Staré Mesto, IČO: 47975890 informuje, že osobné údaje spracúva podľa §10 zákona č. 122/2013 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov v rozsahu meno, priezvisko, adresa, miesto podnikania, IČO, bankové spojenie, dátum narodenia, e-mailová adresa, telefónne číslo, pracovné skúsenosti a ďalších údajov, ktoré záujemca dobrovoľne poskytne.</p>
                <p >Záujemca odoslaním svojej žiadosti, ktorej súčasťou je aj tento súhlas, týmto dáva spoločnosti Objectify súhlas aby do {{date}} spracúvala jeho osobné údaje vo vyššie uvedenom rozsahu, tieto následne poskytovala, sprístupňovala a cezhranične prenášala právnickým a fyzickým osobám podľa potreby spoločnosti. Záujemca má právo kedykoľvek svoj súhlas odvolať, a to doručením písomného odvolania svojho súhlasu na adresu spoločnosti.</p>
                <p>Účelom spracúvania osobných údajov záujemcu je zanalyzovanie jeho skúseností a praxe a následnom vyhodnotení jeho predpokladanej mzdy.</p>
                <p><strong>II. Informácie pre dotknutú osobu v zmysle zákona č. 122/2013 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov</strong><br>
                Spoločnosť Objectify s.r.o, so sídlom Martinengova 4881/36 811 02 Bratislava – Staré Mesto, IČO: 47975890 vystupuje prostredníctvom konateľov Jána Čúzyho a Igora Dyska (ďalej len „oprávnené osoby“) za účelom získavania a spracúvania osobných údajov dotknutej osoby v zmysle zákona č. 122/2013 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov v platnom znení (ďalej len „ZOOÚ“) v postavení</p>
                <ul>
                <li>prevádzkovateľa (ďalej len „prevádzkovateľ“) za účelom spracúvania získaných osobných údajov dotknutej osoby</li>
                </ul>
                <p><strong>Rozsah a účel spracúvania osobných údajov</strong><br>
                Prevádzkovateľ spracúva v zmysle ZOOÚ osobné údaje kandidáta (ďalej len „dotknutá osoba“) na základe jeho súhlasu v rozsahu meno, priezvisko, adresa, miesto podnikania, IČO, bankové spojenie, dátum narodenia, e-mailová adresa, telefónne číslo, pracovné skúsenosti a ďalších údajov, ktoré kandidát dobrovoľne poskytne. Účelom spracúvania osobných údajov záujemcu je zanalyzovanie jeho skúseností a praxe a následnom vyhodnotení jeho predpokladanej mzdy.</p>
                <p><strong>Tretie strany, príjemcovia, tretie krajiny</strong><br>
                Osobné údaje dotknutej osoby môžu byť poskytnuté právnickým a fyzickým osobám, ktoré budú mať záujem o dodanie služieb poskytovaných dotknutou osobou. Osobné údaje kandidáta môžu byť cezhranične prenášané, pričom kandidát vyslovene súhlasí s tým, aby vzhľadom na jeho záujmy mohli byť jeho osobné údaje za vyššie uvedeným účelom prenášané do akýchkoľvek tretích krajín.</p>
                <p><strong>Práva dotknutej osoby</strong><br>
                Dotknutá osoba, ktorá poskytuje osobné údaje, má právo vyžiadať preukázanie totožnosti oprávnenej osoby, ktorá získava osobné údaje, alebo preukázanie príslušnosti oprávnenej osoby hodnoverným dokladom k tomu subjektu, v mene ktorého koná. Oprávnená osoba je povinná takejto žiadosti dotknutej osoby bez zbytočného odkladu vyhovieť. Dotknutá osoba má právo kedykoľvek svoj súhlas so spracovaním osobných údajov odvolať, a to doručením písomného odvolania svojho súhlasu na adresu spoločnosti. Dotknutá osoba bola poučená, že poskytnutie súhlasu so spracovaním jej osobných údajov je dobrovoľný. Ďalšie práva dotknutej osoby sú uvedené v ZOOÚ.</p>
                <p><strong>Poučenie a vyhlásenie dotknutej osoby</strong><br>
                Dotknutá osoba vyhlasuje, že bola poučená o svojich právach v zmysle ustanovenia § 28 ZOOÚ. Dotknutá osoba vyhlasuje, že bola v plnom rozsahu informovaná o všetkých skutočnostiach v zmysle ustanovenia § 15 ZOOÚ.</p>
                <p>Záujemca/dotknutá osoba … zaslaním svojho životopisu alebo vyplnením formulára vyjadrujem svoj súhlas so spracovaním osobných údajov, ako aj potvrdzujem, že som sa oboznámil(a) so všetkými informáciami uvedenými vo vyššie uvedenom článku II. Dátumom udelenia môjho súhlasu je dátum odoslania môjho životopisu spoločnosti.</p>
            </div>

            <v-checkbox :class="suhlas ? '' : suhlasFarba" v-model="suhlas" label="Súhlasím so spracovaním osobných údajov"></v-checkbox>
            <p>{{suhlas}}</p>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="step === 1" flat @click="step--">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" depressed @click="processStep()">Next</v-btn>
    </v-card-actions>

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
    data: () => ({
      step: 1,
      availableProgrammerTypes:[
        'Frontend',
        'Backend',
        'Fullstack'
      ],
      availableTechnologies : [
        'ABAB',
        'C#',
        'C++',
        '.NET',
        'Haskell',
        'Java',
        'Javascript',
        'Perl',
        'PHP',
        'PL/SQL',
        'Python',
        'Ruby',
        'Rust',
        'Scala',
        'Swift'
      ],
      availableJavaTechnologies : [
        'GWT',
        'JPA (Hibernate)',
        'JSF',
        'Spring',
        'Vaadin',
        'Wicket'
      ],
      availableJavascriptTechnologies: [
        'Angular 1',
        'Angular 2+',
        'React',
        'Vue'
      ],
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
      suhlas : null,
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
            else if(!this.suhlas && this.name != '' && this.email != ''){
                this.suhlasFarba = 'text-red'
                // dorobit rozhodovanie
            } 
            else{
                let programmer = {
                    'name' : this.name,
                    'surname' : this.surname,
                    'email' : this.email,
                    'selectedProgrammerTypes' : this.selectedProgrammerTypes,
                    'selectedTechnologies' : this.selectedTechnologies,
                    'selectedJavaTechnologies' : this.selectedJavaTechnologies,
                    'selectedJavascriptTechnologies' : this.selectedJavascriptTechnologies,
                    'prax' : this.prax,
                    'isTeamLeader' : this.isTeamLeader,
                    'workedDomain' : this.workedDomain,
                    'isArchitect' : this.isArchitect,
                }
                firebase.database().ref('programatori').push(programmer)

            }
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
