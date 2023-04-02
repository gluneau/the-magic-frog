<template>
  <section>
    <NavbarLoggedIn v-if="user" :user="user" />
    <NavbarLoggedOut v-else />
    <b-container>
      <h1 class="my-5">
        {{ $t('archive.title') }}
      </h1>
      <b-row v-if="stories.length">
        <ArchivedStory v-for="(story, index) in stories" v-if="story" :key="index" :story="story" />
      </b-row>
      <div v-else class="upload-spinner">
        <div class="dot1" />
        <div class="dot2" />
      </div>
    </b-container>
    <Footer />
    <Modals :user="user" />
  </section>
</template>

<script>
import marked from 'marked'
import axios from 'axios'

import { mapGetters } from 'vuex'
import NavbarLoggedIn from '~/components/NavbarLoggedIn'
import NavbarLoggedOut from '~/components/NavbarLoggedOut'
import Footer from '~/components/Footer'
import Modals from '~/components/Modals'
import ArchivedStory from '~/components/ArchivedStory'

export default {
  components: {
    NavbarLoggedIn,
    NavbarLoggedOut,
    Footer,
    Modals,
    ArchivedStory
  },
  head () {
    // localizing meta description
    return {
      title: this.$t('index.themagicfrog'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('index.description') }
      ]
    }
  },
  computed: {
    ...mapGetters('hivesigner', ['user']),
    ...mapGetters(['stories'])
  },
  async mounted () {
    // login
    this.$store.dispatch('hivesigner/login')

    // fetch data
    this.$store.dispatch('fetchStories')
  }
}
</script>
