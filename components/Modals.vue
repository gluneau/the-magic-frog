<template>
  <div>
    <LangModal />
    <AboutModal />
    <SignupModal />
    <LoginModal />
    <TransferModal v-if="user" :user="user" />
  </div>
</template>

<script>
import LangModal from '~/components/modals/LangModal'
import AboutModal from '~/components/modals/AboutModal'
import SignupModal from '~/components/modals/SignupModal'
import LoginModal from '~/components/modals/LoginModal'
import TransferModal from '~/components/modals/TransferModal'

export default {
  components: {
    LangModal,
    AboutModal,
    SignupModal,
    LoginModal,
    TransferModal
  },
  props: ['user']
}
</script>
