import Vue from 'vue'

const i18nPathPlugin = {
  install (vueInstance) {
    vueInstance.mixin({
      methods: {
        path (link) {
          if (this.$i18n.locale === this.$i18n.fallbackLocale) {
            return `/${link}`
          }

          return `/${this.$i18n.locale}/${link}`
        }
      }
    })
  }
}

Vue.use(i18nPathPlugin)
