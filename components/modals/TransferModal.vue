<template>
  <b-modal id="transferModal" ref="transferModalRef" :title="$t('transfermodal.title')" hide-footer>
    <b-container>
      <b-alert
        variant="info"
        dismissible
        :show="true"
        class="text-left"
      >
        {{ $t('transfermodal.info') }}
      </b-alert>
      <b-form>
        <b-form-group id="receiver" :label="$t('transfermodal.labels.recipient')" label-for="receiver" :description="$t('transfermodal.descriptions.recipient')">
          <b-form-input id="receiver" v-model="receiver" type="text" required :placeholder="$t('transfermodal.placeholders.recipient')" />
        </b-form-group>

        <b-row>
          <b-col sm="7">
            <b-form-group id="amount" :label="$t('transfermodal.labels.amount')" label-for="amount" :description="$t('transfermodal.descriptions.amount', {hive: user.account.balance, hbd: user.account.hbd_balance})">
              <b-form-input id="amount" v-model="amount" type="number" required :placeholder="$t('transfermodal.placeholders.amount')" />
            </b-form-group>
          </b-col>
          <b-col sm="5">
            <b-form-group id="currency" :label="$t('transfermodal.labels.currency')" label-for="currency">
              <b-form-radio-group
                id="currency"
                v-model="currency"
                buttons
                button-variant="outline-primary"
                size="md"
                :options="options"
                name="currency"
              />
            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group id="memo" :label="$t('transfermodal.labels.memo')" label-for="memo">
          <b-form-textarea v-model="memo" rows="2" />
        </b-form-group>
      </b-form>
    </b-container>
    <div class="text-center">
      <a class="btn btn-primary" :href="transferUrl" target="_blank" @click="$refs.transferModalRef.hide()">
        {{ $t('transfermodal.submit') }}
      </a>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ['user'],
  data: function () {
    return {
      receiver: '',
      amount: 0.001,
      currency: 'HBD',
      memo: this.$t('transfermodal.placeholders.memo'),
      options: [
        { text: 'HIVE', value: 'HIVE' },
        { text: 'HBD', value: 'HBD' }
      ]
    }
  },
  computed: {
    transferUrl: function () {
      return 'https://hivesigner.com/sign/transfer?to=' + this.receiver + '&amount=' + this.amount + '%20' + this.currency + '&memo=' + this.memo
    }
  }
}
</script>
