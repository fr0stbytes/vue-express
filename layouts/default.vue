<template>
  <div>
    <app-navbar/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import AppNavbar from '~/components/app-header/app-navbar.vue'

export default {
  components: {
    MyFooter,
    'app-navbar': AppNavbar
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/initial-variables"

$primary:    #3386ff !default

@import "~bulma/bulma"

.button.is-white
  color: #6c6c6c
.button.is-white:hover, .button.is-white.is-hovered
  color: #3386ff

.main-container
  overflow: hidden

.has-margin-5
  margin-top: 5em

.has-margin-3
  margin-top: 3em

</style>
