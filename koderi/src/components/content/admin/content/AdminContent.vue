<template>
  <div>
    <v-card>
      <v-card-title>
        {{tableName == "" ? 'Vyber si odkiaľ majú programátori byť' : tableName}}
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-if="computedTableType=='form' || computedTableType=='cv'"
        ></v-text-field>
      </v-card-title>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      v-if="computedTableType=='form'"
    >
      <template  slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left"><a :href="'mailto:' + props.item.email ">{{props.item.email}}</a></td>
        <td class="text-xs-left">{{ props.item.typ }}</td>
        <td class="text-xs-left">{{ props.item.technologies }}</td>
        <td class="text-xs-left">{{ props.item.moretechnologies }}</td>
        <td class="text-xs-left">{{ props.item.prax }}</td>
        <td class="text-xs-left">{{ props.item.special }}</td>
      </template>

      
    </v-data-table>
    <v-data-table 
      :headers="headers" 
      :items="items" 
      :search="search"
      v-if="computedTableType=='cv'"
    >
      <template  slot="items" slot-scope="props">
        <td>{{props.item.name}}</td>
        <td class="text-xs-left"><a :href="'mailto:' + props.item.email ">{{props.item.email}}</a></td>
        <td><a  class="download-link" :href="props.item.cv" target="_blank" ><i class="fas fa-file-download"></i></a></td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import * as firebase from 'firebase'

export default {
  name: 'AdminContent',
  data:() => {
    return{
      tableName : '',
      search: '',
      headers : [],
      items : [],
      computedTableType : '',
      enums : {programmer : null}
    }
  },
  beforeCreate : function(){
    let self = this
    firebase.database().ref('enums')
    .once('value', function(enumsSnapshot){
      self.enums = enumsSnapshot.val()
    })
  },
  methods:{
    setCVTableType : function(){
      this.headers = [
        { text: 'Meno', align: 'left', value: 'name'},
        { text: 'email', align: 'left', value: 'email'},
        { text: 'CV', align: 'left', value: 'cv'},
      ]
      this.items = []
      let self = this
      firebase.database().ref('cv')
      .on('child_added', function(programmerDataSnapshot){
        let retrievedProgrammer = programmerDataSnapshot.val()
        let programmer = {
          name : retrievedProgrammer.name + ' ' + retrievedProgrammer.surname,
          email : retrievedProgrammer.email,
          cv : retrievedProgrammer.cv
        }
        self.items.push(programmer)
      })
    },
    setFormsTableType : function(){
      this.headers = [
          { text: 'Meno', align: 'left', value: 'name'},
          { text: 'email', align: 'left', value: 'email'},
          { text: 'typ', align: 'left', value: 'typ'},
          { text: 'technologie', align: 'left', value: 'technologies'},
          { text: 'rozsirenie technologii', align: 'left', value: 'moretechnologies' },
          { text: 'prax', align: 'left', value: 'prax' },
          { text: 'specialne vlastnosti', align: 'left', value: 'special'},
        ]
      this.items = []
      let self = this
      firebase.database().ref('programmers')
      .on('child_added', function(programmerDataSnapshot){
        let retrievedProgrammer = programmerDataSnapshot.val() 
        let programmer = {
          name : retrievedProgrammer.name + ' ' + retrievedProgrammer.surname,
          email : retrievedProgrammer.email,
          prax : self.enums.programmer['praxis'][retrievedProgrammer.prax].label,
          technologies : '',
          moretechnologies : '',
          special : '',
          typ : ''
        }
        //nacitanie enumov 
        if(retrievedProgrammer.selectedProgrammerTypes){
          retrievedProgrammer.selectedProgrammerTypes.forEach(type =>{
            programmer.typ += self.enums.programmer['type'][type] + ', '
          })
        }
        if(retrievedProgrammer.selectedTechnologies){
          retrievedProgrammer.selectedTechnologies.forEach(technology =>{
            programmer.technologies += self.enums.programmer['availableTechnologies'][technology] + ', '
          })
        }
        if(retrievedProgrammer.selectedJavaTechnologies){
          retrievedProgrammer.selectedJavaTechnologies.forEach(technology =>{
            programmer.moretechnologies += self.enums.programmer['availableJavaTechnologies'][technology] + ', ' 
          })
        }
        if(retrievedProgrammer.selectedJavascriptTechnologies){
          retrievedProgrammer.selectedJavascriptTechnologies.forEach(technology =>{
            programmer.moretechnologies += self.enums.programmer['availableJavascriptTechnologies'][technology] + ', ' 
          })
        }
        //spracovanie specialnych vlastnosti
        if(retrievedProgrammer.isArchitect) programmer.special += 'architekt, '
        if(retrievedProgrammer.workedDomain) programmer.special += 'domenista, '
        if(retrievedProgrammer.isTeamLeader) programmer.special += 'teamleader'
        self.items.push(programmer)
      }) 
    } 
  },
  props: ['tableType'],
  watch:{
    tableType: function(newTableType){
      if(newTableType == 'form') {
        this.computedTableType = 'form'
        this.tableName = "Ľudia z Formulara"
        this.setFormsTableType()
      }
      else {
        this.computedTableType = 'cv'
        this.tableName = "Ľudia z CV"
        this.setCVTableType()
      }
    }
  }
}
</script>
<style>
.download-link:hover{
  color : #4297F9
}
</style>
