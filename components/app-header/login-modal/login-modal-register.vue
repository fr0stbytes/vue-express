<template>
  <div>
    <header class="modal-card-head has-text-centered">
      <a @click="$emit('back')"><img src="../../../static/arrow-left.svg" alt="back"></a>
      <p class="modal-card-title">Register to Aegean Guides</p>
    </header>
    <section class="modal-card-body">
      <div class="card-content">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="name">
          </div>
        </div>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input class="input" type="text" placeholder="username">
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" placeholder="your email">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="text" placeholder="*******">
          </div>
        </div>
        <div class="field">
          <label class="label">Confirm Password</label>
          <div class="control">
            <input class="input" type="text" placeholder="*******">
          </div>
        </div>
        <div class="control">
        <button class="button is-primary is-outlined">Submit</button>
      </div>
      </div>
      <div class="button is-fullwidth is-primary is-inverted" @click = "$emit('email')">
        Already have an account? Sign in
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
  name: 'LoginModalRegister',
  components: {
  }
}
</script>

<style lang="sass" scoped>

</style>
