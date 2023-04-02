<template>
  <b-container>
    <div class="text-center py-5">
      <img src="/avatar.png" alt="">
      <h1 class="pt-4">
        {{ message }}
      </h1>
      <div v-if="loading" class="upload-spinner">
        <div class="dot1" />
        <div class="dot2" />
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      message: this.$t('auth.openthedoor'),
      loading: true
    }
  },
  head () {
    return {
      title: this.$t('index.themagicfrog'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('index.description') }
      ]
    }
  },
  async mounted () {
    const accessToken = this.$route.query.access_token
    if (accessToken) {
      localStorage.setItem('access_token', accessToken)
      await this.$store.dispatch('hivesigner/login')
      this.$router.push('/')
    }
  }
}
</script>
