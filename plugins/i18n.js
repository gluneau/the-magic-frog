import Vue from 'vue'
// eslint-disable-next-line import/default
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }) => {
  let locale = process.env.locale
  if (!['de', 'fr', 'pt'].includes(locale)) {
    locale = 'en'
  }
  app.i18n = new VueI18n({
    locale,
    fallbackLocale: 'en',
    messages: {
      en: require('../locales/en.json'),
      de: require('../locales/de.json'),
      fr: require('../locales/fr.json'),
      pt: require('../locales/pt.json')
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }

  const accounts = {
    en: 'the-magic-frog',
    de: 'der-zauberfrosch',
    fr: 'grenouille',
    pt: 'sapo-magico'
  }

  app.account = accounts[app.i18n.locale]
  Vue.prototype.$account = app.account
}
