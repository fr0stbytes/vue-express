<template>
  <div>
    <header class="modal-card-head has-text-centered">
      <a @click="$emit('back')"><img src="../../../static/arrow-left.svg" alt="back"></a>
      <p class="modal-card-title">Register to Aegean Guides</p>
    </header>
    <section class="modal-card-body">
      <div class="card-content">
        Facebook
      </div>
    </section>
    <footer class="modal-card-foot is-small">
      <p class="is-small">
        To use Aegean Guides you must have cookies enabled. <br>
        Also, we’ll never post to Facebook or Google without your permission. For more info, please see Login FAQ.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LoginModalFacebook',
  components: {
  }
}
</script>

<style lang="sass" scoped>

</style>
