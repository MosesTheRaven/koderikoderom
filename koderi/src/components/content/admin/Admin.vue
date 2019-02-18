<template>
  <v-container>
    <AdminNavigation @changeTable="(arg)=>{changeTable(arg)}"/>
    <AdminContent v-bind:tableType="table"/>
  </v-container>
</template>
<script>
import AdminNavigation from './navigation/AdminSideDrawer'
import AdminContent from './content/AdminContent'

export default {
  name : 'Admin',
  components:{
    AdminNavigation,
    AdminContent
  },
  data:() =>{
    return {
      drawer : true,
      drawerTitle : 'koderi',
      table : null
    }
  },
  methods:{
    changeTable: function(arg){
      this.table = arg
    }
  }
}
</script>
<style scoped>
a{
  text-decoration: none;
}
.logo-title{
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  color : #222222;
  font-size : 19px;
  line-height: 100%;
  font-weight: 900;
  }

</style>
