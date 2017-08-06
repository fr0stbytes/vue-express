<template>
  <div class="card-content">
    <div class="title is-5">
      Welcome
    </div>
    <div class="subtitle is-6">
      For a better user experience sign in to Aegean Guides so you can fully plan and customize your next journey!
    </div>
    <div class="button is-fullwidth is-medium is-facebook" @click = "$emit('facebook')">
      Continue with Facebook
    </div>
    <div class="button is-fullwidth is-medium" @click = "$emit('google')">
      Continue with Google
    </div>
    <div class="button is-fullwidth is-medium" @click = "$emit('email')">
      Sign in with email
    </div>
    <div class="button is-fullwidth is-primary is-inverted" @click = "$emit('register')">
      Don't have an account? Sign up
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginModal1',
  components: {
  }
}
</script>

<style lang="sass" scoped>
  .button
    margin-top: .5rem

  .is-facebook
    background-color: #3B5998
    color: #f2f2f2
</style>
