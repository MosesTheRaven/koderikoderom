<template>
  <v-card elevation="0">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span class="headline"><strong>Nahranie CV</strong></span>
    </v-card-title>
    <v-form ref="form" v-model="formIsValid">
      <v-card-text>
        <p>Vaše CV odporúčame nahrať v .doc, .docx alebo .pdf formáte.</p>
        <v-flex lg4 class="mb-4">
          <v-text-field class="mb-2" required v-model="programmer.name" label="Meno" :rules="[rules.required]" placeholder="Jožko" />
          <v-text-field class="mb-2" required v-model="programmer.surname" label="Priezvisko" :rules="[rules.required]" placeholder="Mrkvička"/>
          <v-text-field class="mb-2" required v-model="programmer.email" :rules="[rules.required, rules.email]" label="E-mail" placeholder="jozko@mrkvicka.sk"></v-text-field>
        </v-flex>
        <v-flex lg4 class="mb-4">
          <input 
            type="file" 
            ref="filesInput" 
            id="cvFileInput" 
            name="cvFileInput" 
            style="display : none" 
            accept=".doc, .docx, .pdf"
            @change="processChange()">
          <label :class="'file-input-label ' + alert" for="cvFileInput">{{fileInputLabel}}</label>
        </v-flex>
        <div class="mt-5" id="zasadyDiv">
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
      <v-card-actions>
        <v-btn color="primary" depressed @click="processForm()">Odoslať</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import * as firebase from 'firebase'

export default {
    name: 'CVUpload',
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
    data: ()=>({
      formIsValid : null,
      programmer : {},
      file : null,
      suhlas : null,
      alert : '',
      fileInputLabel : 'Nahrať životopis',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      },
    }),
    methods : {
      processChange: function(){
        if(this.$refs.filesInput.files.length > 1 || !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(this.$refs.filesInput.files[0].type)){
          this.fileInputLabel = 'Nesprávne nahratý súbor',
          this.alert = "red-bg"
        }
        else {
          this.file = this.$refs.filesInput.files[0]
          this.fileInputLabel = this.file.name
          this.alert = ''
        }
      },
      processForm(self=this){
        this.validate();
        if(this.formIsValid && this.file != null){
          let uploadFile = firebase.storage().ref('cv').put(this.file)
          
          uploadFile.on(
            // pri zmene uploadu
            'state_changed', function(snapshot){}, 
            // pri zlyhani uploadu
            function(error) {console.log(error)}, 
            // pri uspesnom nahrati suboru
            function() {
              // si ziskam url zo storage
              uploadFile.snapshot.ref.getDownloadURL()
              .then(function(downloadURL) {
                self.programmer.cv = downloadURL
                // a ulozim do databazy zozbierane data aj s url pre CVcko
                firebase.database().ref('cv').push(self.programmer)
                .then(function(){
                  self.$router.push({name: 'thankyou'})
                })
              });
            }
          );
        }
        // form je invalid
        else{
          if(this.file == null){
            this.alert = 'red-bg'
            this.fileInputLabel = 'Musíte nahrať životopis'
          }
          console.log('formular je invalid')
        }
      },
      validate : function(){
        this.$refs.form.validate();
      }
    }
}
</script>

<style>
.file-input-label{
  background-color: rgb(103,103,103);
  color : white;
  padding : 1.4em 3em;
  cursor : pointer;
  transition: all 0.5s ease !important;
}
.file-input-label:hover{
  background-color: #222
}
.file-input-label.red-bg{
  background-color : #ff5252
}
#zasadyDiv{
  border : 1px solid #e9e9e9;
  height: 150px;
  overflow: scroll;
  overflow-x: hidden
}
</style>
