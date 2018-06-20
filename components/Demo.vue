<template>
  <div>
    <!-- <p>
        localized text (using $t): {{$t('hello')}}
    </p>
    <p>
        localized text (using v-t): <span v-t="'hello'"/>
    </p> -->
    <div>current locale: {{$i18n.locale}}</div>
    <div>
        <v-btn
          v-if="$i18n.locale === 'es'"
          small
          color="deep-purple"
          dark
          class="ma-0 px-4"
          style="height: 3rem;"
          @click="$i18n.locale = 'en'"
        >
          <v-icon>near_me</v-icon>
          <span v-t="'english'"></span>
        </v-btn>
        <v-btn
          v-else
          small
          color="orange"
          dark
          class="ma-0 px-4"
          style="height: 3rem;"
          @click="$i18n.locale = 'es'"
        >
          <v-icon>near_me</v-icon>
          <span v-t="'spanish'"></span>
        </v-btn>
    </div>
    <div>
        <v-btn color="primary" flat nuxt :to="localePath({name: 'Inspire'})">{{$t('goto')}}</v-btn>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
      "hello": "local hello message",
      "english": "english",
      "spanish": "spanish",
      "goto": "go to /inspire"
  },
  "es": {
      "hello": "mensaje local de saludo",
      "english": "inglés",
      "spanish": "español",
      "goto": "vamos /inspire"
  }
}
</i18n>