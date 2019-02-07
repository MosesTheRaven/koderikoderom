<template>
    <v-card class="mx-auto" max-width="500">
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
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <v-card-text>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="step === 1" flat @click="step--">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="step === 3" color="primary" depressed @click="step++">Next</v-btn>
    </v-card-actions>

  </v-card>
</template>
<script>
export default {
    name: 'Form',
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
      prax : null
    }),
    methods:{
        processItemInArray: function(array, item){
            array.includes(item) ? array.splice(array.indexOf(item), array.indexOf(item) + 1) : array.push(item)
        },
    },
}
</script>
<style>
    .v-chip:focus:not(.v-chip--selected):after {
        background: none !important;
    }
</style>
