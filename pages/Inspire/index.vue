<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <div>
        <v-btn color="primary" nuxt :to="path('')">back</v-btn>
      </div>
      <div>
        <span style="font-family: 'Material Icons'">exit_to_app</span>
      </div>
    </v-flex>
  </v-layout>
</template>
