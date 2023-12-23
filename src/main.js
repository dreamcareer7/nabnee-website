import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import Lightbox from 'vue-easy-lightbox'
import VueLodash from 'vue-lodash'
import VueFormWizard from 'vue-form-wizard'
import VueSocialSharing from 'vue-social-sharing'
import { BootstrapVue} from 'bootstrap-vue'
import VueGeolocation from 'vue-browser-geolocation';
import Blob from './excel/Blob'
import Export2Excel from './excel/Export2Excel.js'
import JsonExcel from 'vue-json-excel';
import JsonCSV from 'vue-json-csv';
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import VueMeta from 'vue-meta';
 
Vue.component('downloadCsv', JsonCSV)
Vue.component('downloadExcel', JsonExcel)
const options = { name: 'lodash' } // customize the way you want to call it
Vue.use(BootstrapVue);
Vue.use(VueGeolocation);
Vue.use(VueSocialSharing);
Vue.use(VueFormWizard);
Vue.use(VueLodash, options)
Vue.use(VueLazyLoad);
Vue.use(VueMeta, { refreshOnceOnNavigation: true });
Vue.use(Lightbox);
Vue.config.productionTip = false;
Vue.use(Argon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

