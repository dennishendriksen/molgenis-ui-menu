import 'es6-promise/auto'
import 'babel-polyfill'

import Vue from 'vue'
import MolgenisMenu from './MolgenisMenu'

/* eslint-disable no-new */
new Vue({
  el: '#molgenis-menu',
  template: '<MolgenisMenu />',
  components: {MolgenisMenu}
})
