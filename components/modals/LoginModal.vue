<template>
  <b-modal id="scRedirectModal" :title="$t('loginmodal.title')">
    <p class="mb-0" v-html="$t('loginmodal.text')" />
    <div slot="modal-footer" class="w-100 text-center">
      <a :href="$hivesigner.getLoginURL()" class="btn btn-primary">{{ $t('loginmodal.button') }}</a>
    </div>
  </b-modal>
</template>
