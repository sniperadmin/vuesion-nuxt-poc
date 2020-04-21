import Vue from 'vue'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'

Bugsnag.start({
  apiKey: '3bf6b1423a81f7d8786dc86e8f4da590',
  plugins: [new BugsnagPluginVue(Vue)]
})