import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'es': {
        hello: 'mensaje global de saludo',
        english: 'inglés (de global)',
        spanish: 'español (de global)'
      },
      'en': {
        hello: 'global hello message',
        english: 'english (from global)',
        spanish: 'spanish (from global)'
      }
    }
  })
}
