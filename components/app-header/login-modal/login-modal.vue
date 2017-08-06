<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head has-text-centered">
        <p class="modal-card-title">Login in to Aegean Guides</p>
        <button class="delete" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">
        <div class="card-content" :is="currentComponent" @facebook="swapComponent('login-modal-facebook')"
        @email="swapComponent('login-modal-email')" @register="swapComponent('login-modal-register')"
        @google="swapComponent('login-modal-google')">
        </div>
      </section>
      <footer class="modal-card-foot is-small">
        <p class="is-small">
          To use Aegean Guides you must have cookies enabled. <br>
          Also, we’ll never post to Facebook or Google without your permission. For more info, please see Login FAQ.
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import LoginModal1 from './login-modal-1'
import LoginModalFacebook from './login-modal-facebook'
import LoginModalGoogle from './login-modal-google'
import LoginModalEmail from './login-modal-email'
import LoginModalRegister from './login-modal-register'

export default {
  name: 'LoginModal',
  data () {
    return {
      currentComponent: 'login-modal-1'
    }
  },
  components: {
    'login-modal-1': LoginModal1,
    'login-modal-facebook': LoginModalFacebook,
    'login-modal-google': LoginModalGoogle,
    'login-modal-register': LoginModalRegister,
    'login-modal-email': LoginModalEmail
  },
  methods: {
    swapComponent: function (component) {
      this.currentComponent = component
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-content {
    padding: 0 20%
  }
  .is-small {
    font-size: .75rem
  }
</style>
