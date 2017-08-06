<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('close')">
      <button class="delete" @click="$emit('close')"></button>
    </div>
    <div class="modal-card" :is="currentComponent" @facebook="swapComponent('login-modal-facebook')"
    @email="swapComponent('login-modal-email')" @register="swapComponent('login-modal-register')"
    @google="swapComponent('login-modal-google')" @back="swapComponent('login-modal-1')">

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

<style lang="sass" scoped>
  .card-content
    padding: 0 20%
  .is-small
    font-size: .75rem
  .delete
    position: absolute
    top: 20px
    right: 20px
</style>
