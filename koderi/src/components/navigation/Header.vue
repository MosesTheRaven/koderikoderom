<template>
  <nav class="header">
    <div class="header-container">
      <router-link :to="{name : 'home'}">
        <p class="logo-title">KOD3RI<br>K0DEROM</p>
      </router-link>
      <ul>
        <li>
          <router-link :to="{name: 'o-nas'}">O dotazníku</router-link>
        </li>
        <li>
          <router-link :to="{name: 'zasady'}">Zásady ochrany súkromia</router-link>
        </li>
        <li>
          <router-link :to="{name: 'admin'}">Admin</router-link>
        </li>
      </ul>
    </div>  
  </nav>
</template>

<script>
export default {
    name: 'Header',
    data: ()=> ({
    })
}
</script>
<style scoped>
  .logo-title{
    font-family: 'Roboto Mono', monospace;
    color : #222222;
    font-size : 19px;
    line-height: 100%;
    font-weight: 900;
  }
  .header{
    padding-top : 72px;
    display: flex;
    justify-content: center;
  }
  .header-container{
    display: flex;
    width : 1140px;
    height: 190px;
    justify-content: space-between;
    padding : 0 42px;
  }
  ul{
    font-family: 'Roboto Mono', monospace;
    font-size : 19px;
    display: flex;
    flex-direction: row;
    list-style-type: none; 
  }
  ul li{
    padding: 15px;
  }
  ul li a{
    color : #777777;
  }
  a{
    text-decoration: none;
  }
</style>
