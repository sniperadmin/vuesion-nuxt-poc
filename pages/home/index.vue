<i18n locale="en">
  {
    "title": "Nuxt Vuesion TypeScript Starter"
  }
</i18n>
<i18n locale="ja">
  {
    "title": "Nuxt Vuesion TypeScript スターター"
  }
</i18n>
<template>
  <div class="container">
    <div class="links">
      <nuxt-link :to="switchLocalePath('en')" class="button--green">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('ja')" class="button--grey">japanese</nuxt-link>
    </div>

    <div>
      <h1 class="title">
        {{ $t('title') }}
      </h1>
      <h2 class="subtitle">
        My terrific Nuxt.js project
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Bugsnag from '@bugsnag/js'

export default Vue.extend({
  mounted () {
    Bugsnag.notify('test')
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
