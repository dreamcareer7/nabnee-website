import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: null,
    loggingIn: false,
    loginError: null
  },
  mutations: {

    loginStart: state => state.loggingIn = true,
    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    }
  },
  actions: {
    doLogin({ commit }, loginData) {
      commit('loginStart');

      axios.post(process.env.VUE_APP_API_ENDPOINT+'register_business', {
        ...loginData
      })
      .then(response => {
        if(response.data.success==true){
        localStorage.setItem('accessToken', response.data.user_token);
        //localStorage.setItem('partner_name', response.data.user_details.partner_name);
        //localStorage.setItem('partner_code', response.data.user_details.partner_code);
        //localStorage.setItem('smscount', response.data.user_details.smscount);
        localStorage.setItem('user_id', response.data.user_details[0].user_id);
        localStorage.setItem('user_dp', response.data.user_details[0].user_dp);
        localStorage.setItem('user_public_name', response.data.user_details[0].user_public_name);
        localStorage.setItem('item_likes', JSON.stringify(response.data.user_details[0].item_likes));
        localStorage.setItem('user_type', response.data.user_details[0].user_type);
        //localStorage.setItem('partner_mobile', response.data.user_details.partner_mobile);
        localStorage.setItem('user_email', response.data.user_details[0].user_email);
        localStorage.setItem('_id', response.data.user_details[0]._id);
        localStorage.setItem('hometab',true);
        if(localStorage.getItem('lang')){
  
        }else{
          localStorage.setItem('lang', 'arabic');
        }
        if(response.data.user_details[0].user_gid){
          localStorage.setItem('user_gid', response.data.user_details[0].user_gid);
        }
        if(response.data.user_details[0].user_fid){
          localStorage.setItem('user_fid', response.data.user_details[0].user_fid);
        }
        if(response.data.user_details[0].location_lat){
          localStorage.setItem('location_lat', response.data.user_details[0].location_lat);
        }
        if(response.data.user_details[0].location_long){
          localStorage.setItem('location_long', response.data.user_details[0].location_long);
        }
        var date = new Date();
        // add a day
        date.setDate(date.getDate() + 15);
        console.log(date);
        localStorage.setItem('expiry_date',date);
        commit('loginStop', null);
        commit('updateAccessToken', response.data.user_token);
        // setTimeout(function(){
          if(localStorage.getItem('url')){
             document.location.href = localStorage.getItem('url');
          }else{
            document.location.href = "/";
          }
         
        // }, 2000);
        }else{
          commit('loginStop',response.data.message);
          commit('updateAccessToken', null);
          document.getElementById("login").innerHTML='Sign In';
        }
      })
      .catch(error => {
        commit('loginStop', error.response);
        commit('updateAccessToken', null);
      })
    },
    fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'));
    },
    fetchUserdata({ commit }) {
      commit('UserDetails', localStorage.getItem('UserDetails'));
    },
    logout() {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_type');
      localStorage.removeItem('user_email');
      localStorage.removeItem('_id');
      localStorage.removeItem('url');
      localStorage.removeItem('hometab');
      localStorage.setItem('logout',1);
      document.location.href = "/";
      window.location.reload()
    }
  }
})