<template>
  <div>
    <v-data-table
    :headers="headers"
    :items="items"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right"><a :href="'mailto:' + props.item.email ">{{props.item.email}}</a></td>
        <td class="text-xs-right">{{ props.item.typ }}</td>
        <td class="text-xs-right">{{ props.item.technologies }}</td>
        <td class="text-xs-right">{{ props.item.moretechnologies }}</td>
        <td class="text-xs-right">{{ props.item.prax }}</td>
        <td class="text-xs-right">{{ props.item.special }}</td>
      </template>
    </v-data-table>
    <v-btn @click="addPerson()"></v-btn>  
  </div>
</template>
<script>
import * as firebase from 'firebase'

export default {
  name: 'AdminContent',
  data:() => {
    return{
      headers : [],
      items : [],
      computedTableType : 'form',
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
    addPerson: function(){
      this.items.push({
            name: 'Jozko Mrkvicka',
            typ : 'frontend',
            technologie : 'Java',
            moretechnologies : 'Wicket',
            prax : '3 - 4 roky',
            special : 'worked domain'
          })
    },
    setFormsTableType : function(){
      this.headers = [
          {
            text: 'Ludia z Formularu',
            align: 'center',
            sortable: true,
            value: 'name'
          },
          { text: 'email', value: 'email' },
          { text: 'typ', value: 'typ' },
          { text: 'technologie', value: 'technologies' },
          { text: 'rozsirenie technologii', value: 'moretechnologies' },
          { text: 'prax', value: 'prax' },
          { text: 'specialne vlastnosti', value: 'special' },
        ]
      this.items = []
      let self = this
      firebase.database().ref('programmers')
      .on('child_added', function(programmerDataSnapshot){
        let retrievedProgrammer = programmerDataSnapshot.val() 
        let programmer = {
          name : retrievedProgrammer.name + ' ' + retrievedProgrammer.surname,
          email : retrievedProgrammer.email,
          prax : retrievedProgrammer.prax,
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
        this.setFormsTableType()
      }
      else console.log('nastala zmena - cv')
    }
  }
}

</script>