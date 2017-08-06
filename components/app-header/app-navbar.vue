<template>
  <div class="border-bottom">
    <div class="container has-margin-top">
      <app-navbar-top class="border-bottom"></app-navbar-top>
      <app-navbar-bottom class="has-margin-top navbar-menu"></app-navbar-bottom>
    </div>
  </div>
</template>

<script>
import AppNavbarTop from './app-navbar-top'
import AppNavbarBottom from './app-navbar-bottom'

export default {
  name: 'AppNavbar',
  components: {
    'app-navbar-top': AppNavbarTop,
    'app-navbar-bottom': AppNavbarBottom
  }
}
</script>

<style lang="scss">
.border-bottom {
  border-bottom: 1px solid #ebebeb;
}
.has-margin-top {
  margin-top: 10px
}

</style>
