<template>
    <section class="section section-shaped section-lg my-0 register">
        <div class="shape shape-style-1 bg-gradient-light">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5" v-if="lang=='english'">
                    <card type="white" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 pt-lg-5 pb-lg-4"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center row">
                              <div class="col-lg-6 col-6">
                                <!-- <base-button type="facebook" class="facebook">
                                    <facebook-login class="button px-0"
                                      appId="516147582494423"
                                      loginLabel="Facebook"
                                      @login="onLogin"
                                      @logout="onLogout"
                                      @sdk-loaded="sdkLoaded">
                                    </facebook-login>
                                </base-button> -->
                                <base-button type="primary" block class="h-100 button" @click="logInWithFacebook"><i class="fa fa-facebook"></i> Facebook</base-button>
                              </div>
                              <div class="col-lg-6 col-6">
                                <base-button type="danger" block>
                                <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                                    <i class="fa fa-google mr-2"></i>
                                    Google
                                </base-button>
                              </div>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-2 mt-2">
                                <small>Or sign up with credentials</small><br>
                                <badge
                                  v-if="loginError"
                                  type="danger"
                                  style="white-space: normal;"
                                >
                                  {{ loginError }}
                                </badge>
                                <badge
                                  v-if="accessToken"
                                  type="success"
                                >
                                  Login Successful
                                </badge>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            v-model.trim="model.user_public_name"
                                            class="mb-3"
                                            placeholder="Full Name"
                                            addon-left-icon="fa fa-user">
                                </base-input>
                                <base-input alternative
                                            v-model.trim="model.user_email"
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            v-model.trim="model.password"
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <!-- <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small> -->
                                </div>
                                <base-checkbox v-model="checked">
                                    <span>I agree with the
                                        <a href="/privacy">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" id="register" @click="register()" class="my-4">Create account</base-button>
                                </div>
                            </form>
                        </template>
                        <div class="row mt-3">
                            <div class="col-12">
                                <router-link to="/login" class="text-light">
                                    <small class="text-primary">Already have an account? Login.</small>
                                </router-link>
                            </div>
                        </div>
                    </card>
                </div>
                <div class="col-lg-5 arabic" v-if="lang=='arabic'">
                    <card type="white" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 pt-lg-5 pb-lg-4"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>قم بتسجيل الدخول باستخدام</small>
                            </div>
                            <div class="btn-wrapper text-center row">
                              <div class="col-lg-6">
                                <!-- <base-button type="facebook" class="facebook">
                                    <facebook-login class="button px-0"
                                      appId="516147582494423"
                                      loginLabel="Facebook"
                                      @login="onLogin"
                                      @logout="onLogout"
                                      @sdk-loaded="sdkLoaded">
                                    </facebook-login>
                                </base-button> -->
                                <base-button type="primary" block class="h-100 button" @click="logInWithFacebook"><i class="fa fa-facebook"></i> Facebook</base-button>
                              </div>
                              <div class="col-lg-6">
                                <base-button type="danger" block>
                                <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                                    <i class="fa fa-google mr-2"></i>
                                    Google
                                </base-button>
                              </div>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-2 mt-2">
                                <small>أو قم بتسجيل الدخول باستخدام بريدك الالكتروني</small><br>
                                <badge
                                  v-if="loginError"
                                  type="danger"
                                  style="white-space: normal;"
                                >
                                  {{ loginError }}
                                </badge>
                                <badge
                                  v-if="accessToken"
                                  type="success"
                                >
                                  Login Successful
                                </badge>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            v-model.trim="model.user_public_name"
                                            class="mb-3"
                                            placeholder="الاسم الكامل"
                                            addon-left-icon="fa fa-user">
                                </base-input>
                                <base-input alternative
                                            v-model.trim="model.user_email"
                                            class="mb-3"
                                            placeholder="البريد الإلكتروني"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            v-model.trim="model.password"
                                            type="password"
                                            placeholder="كلمه السر"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <!-- <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small> -->
                                </div>
                                <base-checkbox class="float-right d-block w-100" v-model="checked">
                                    <span>أوافق على
                                        <a href="/privacy"> سياسة الخصوصية</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" id="register" @click="register()" class="my-4">انشئ حساب</base-button>
                                </div>
                            </form>
                        </template>
                        <div class="row mt-3">
                            <div class="col-12">
                                <router-link to="/login" class="text-light">
                                    <small class="text-primary">هل لديك حساب؟ تسجيل الدخول.</small>
                                </router-link>
                            </div>
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
  import axios from "axios";
  import GoogleLogin from 'vue-google-login';
  import facebookLogin from 'facebook-login-vuejs';
  export default {
    name: 'Register',
    components: {GoogleLogin,facebookLogin},
    data() {
      return {
        idImage:'', loginImage:'', mailImage:'', faceImage:'',
        loginError:'',
        accessToken:'',
        isConnected: false,
        name: '',
        personalID: '',
        checked:true,
        FB: undefined,
        email: '',
        password: '',
        lang:localStorage.getItem('lang'),
        params: {
                    client_id: "838514782657-9a60ivnvl666nrni7irslmjlf1ihbj8c.apps.googleusercontent.com"
                },
                // only needed if you want to render the button with the google ui
        renderParams: {
            width: 250,
            height: 50,
            longtitle: true
        },
        model: {
          user_public_name:'',
          user_email: '',
          password:'',
        },
        auth : {
          headers: {'Content-Type':'application/x-www-form-urlencoded'}
        },
        forgotError:'',
        forgotSuccess:''
      }
    },
    created: function() {
    console.log('created main');
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '516147582494423',
          xfbml      : true,
          version    : 'v2.7'
        });

        //This function should be here, inside window.fbAsyncInit
        FB.getLoginStatus(function(response) {
          console.log(response);
       });

     };

      (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    },
    mounted () {

    },
    methods: {

    register() {
      //console.log(this.model.email);
      if(!this.model.user_public_name){
       this.loginError="Please enter name";
      }else if(!this.model.user_email){
        this.loginError="Please enter email";
      }else if(!this.model.password){
        this.loginError="Please enter password";
      }else if(this.checked){
       document.getElementById("register").innerHTML='Loading...';
       const querystring = require('querystring');
    axios
      .post(process.env.VUE_APP_API_ENDPOINT+'register_business',querystring.stringify({user_email:this.model.user_email,user_password:this.model.password,user_type:"General",user_public_name:this.model.user_public_name,user_dp:'https://nabnee.s3.me-south-1.amazonaws.com/user.png'}),this.auth)
      .then(response => {
        console.log(response);
        if(response.data.success==true){
              localStorage.setItem('accessToken', response.data.user_token);
              localStorage.setItem('user_id', response.data.user_details[0].user_id);
              localStorage.setItem('user_dp', response.data.user_details[0].user_dp);
              localStorage.setItem('user_public_name', response.data.user_details[0].user_public_name);
              localStorage.setItem('item_likes', JSON.stringify(response.data.user_details[0].item_likes));
              localStorage.setItem('user_type', response.data.user_details[0].user_type);
              localStorage.setItem('user_email', response.data.user_details[0].user_email);
              localStorage.setItem('_id', response.data.user_details[0]._id);
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
              // setTimeout(function(){
              if(localStorage.getItem('url')){
                 document.location.href = localStorage.getItem('url');
              }else{
                document.location.href = "/";
              }
        }else{
           // this.forgotError='Email Not Exist';
           // this.forgotSuccess='';
        }
        document.getElementById("register").classList.remove('btn-primary');
        document.getElementById("register").classList.add('btn-success');
        document.getElementById("register").innerHTML='User Registered Successfully';
     
      })
     }else{
      this.loginError="Please checked Privacy Policy";
     }
    },
    onSuccess(googleUser) {
        console.log(googleUser);
        const querystring = require('querystring');
        // This only gets the user information: id, name, imageUrl and email
         const profile=  googleUser.getBasicProfile();
         console.log(profile);
         console.log('ID: ' + googleUser.getBasicProfile().getId());
         console.log('Image URL: ' + googleUser.getBasicProfile().getImageUrl());
         console.log('Email: ' + googleUser.getBasicProfile().getEmail());
         let logindata={"user_public_name":googleUser.getBasicProfile().getName(),"user_email":googleUser.getBasicProfile().getEmail(),"user_gid":googleUser.getBasicProfile().getId(),"user_dp":googleUser.getBasicProfile().getImageUrl()};
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'register_business',querystring.stringify(logindata),this.auth).then(response => {
          if(response.data.success==true){
              localStorage.setItem('accessToken', response.data.user_token);
              localStorage.setItem('user_id', response.data.user_details[0].user_id);
              localStorage.setItem('user_dp', response.data.user_details[0].user_dp);
              localStorage.setItem('user_public_name', response.data.user_details[0].user_public_name);
              localStorage.setItem('item_likes', JSON.stringify(response.data.user_details[0].item_likes));
              localStorage.setItem('user_type', response.data.user_details[0].user_type);
              localStorage.setItem('user_email', response.data.user_details[0].user_email);
              localStorage.setItem('_id', response.data.user_details[0]._id);
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
              // setTimeout(function(){
              if(localStorage.getItem('url')){
                 document.location.href = localStorage.getItem('url');
              }else{
                document.location.href = "/";
              }
        }else{
          // this.loginStop=response.data.message;
          // this.updateAccessToken=null;
        }
      })
            
      },
      onFailure(error){

        console.log(error)

      },
      async logInWithFacebook() {
      // await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      // await this.initFacebook();
      window.FB.login(function(response) {
         console.log(response);
        if (response.authResponse) {
          console.log("You are logged in &amp; cookie set!");
           window.FB.api('/me', 'GET', { fields: 'id,name,email,picture' },
          userInformation => {
            this.personalID = userInformation.id;
            this.email = userInformation.email;
            this.name = userInformation.name;
            this.user_dp=userInformation.picture.data.url;
            console.log(userInformation);
            const querystring = require('querystring');
            let logindata={"user_public_name":this.name,"user_email":this.email,"user_fid":this.personalID,"user_dp":this.user_dp};
                axios
                .post(process.env.VUE_APP_API_ENDPOINT+'register_business',querystring.stringify(logindata),this.auth)
              .then(response => {
                if(response.data.success==true){
                localStorage.setItem('accessToken', response.data.user_token);
                localStorage.setItem('user_id', response.data.user_details[0].user_id);
                localStorage.setItem('user_dp', response.data.user_details[0].user_dp);
                localStorage.setItem('user_public_name', response.data.user_details[0].user_public_name);
                localStorage.setItem('item_likes', JSON.stringify(response.data.user_details[0].item_likes));
                localStorage.setItem('user_type', response.data.user_details[0].user_type);
                localStorage.setItem('user_email', response.data.user_details[0].user_email);
                localStorage.setItem('_id', response.data.user_details[0]._id);
                localStorage.setItem('logout',0);
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
                this.isConnected=false;
                console.log(this.isConnected);
                localStorage.setItem('expiry_date',date);
                // setTimeout(function(){
                 if(localStorage.getItem('url')){
                   document.location.href = localStorage.getItem('url');
                  }else{
                    document.location.href = "/";
                  }
                }else{
                  // this.loginStop=response.data.message;
                  // this.updateAccessToken=null;
                }
              })
          // .catch(error => {
          //   this.loginStop=error.response;
          //   this.updateAccessToken=null;
          // })
          }
          

        )
          // Now you can redirect the user or do an AJAX request to
          // a PHP script that grabs the signed request from the cookie.
        } else {
          alert("User cancelled login or did not fully authorize.");
        }
        });
        return false;
      },
    onLogout() {
      window.FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            var accessToken = response.authResponse.accessToken;
            window.FB.logout(function(response){
               window.FB.Auth.setAuthResponse(null,'unknown');  
                 //logout();
             });
           } 
        });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_type');
      localStorage.removeItem('user_email');
      localStorage.removeItem('_id');
      
    }
  },
  };
</script>
<style>
  .facebook button {
    min-width: 100px !important;
    background-image: linear-gradient(#3b5999, #3b5999) !important;
    cursor: pointer;
  }
  .facebook.btn {
    padding: .2em;
  }
  .facebook button img {
    top: 6px;
    width: 21px;
  }
  /*#google-signin-btn-1 {
    background: none;
    color: white;
    border: navajowhite;
    font-weight: 500;
    font-size: 16px;
  }
  #google-signin-btn-0 {
    background: none;
    color: white;
    border: navajowhite;
    font-weight: 500;
    font-size: 16px;
  }*/
  .register #google-signin-btn-1, #google-signin-btn-0, #google-signin-btn-3 {
    background: 0 0;
    color: #fff;
    border: #ffdead;
    font-weight: 500;
    font-size: 16px;
    width: 140px;
    position: absolute;
    height: 43px;
    top: 0;
    left: 0;
    cursor: pointer;
}
</style>
