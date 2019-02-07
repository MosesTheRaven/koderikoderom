<template>
  <div class="header">
    <img src="../../assets/kk-logo.png" alt="logo" :width="width" :height="height">
    <p>
      <router-link :to="{name: 'o-nas'}">Zistite o tomto dotazníku viac</router-link> a <a href="https://www.facebook.com/K%C3%B3deri-K%C3%B3derom-1243492685805038/">sledujte nás na Facebooku</a>.</p>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data: ()=> ({
      width : 181,
      height : 40
    })
}
</script>

