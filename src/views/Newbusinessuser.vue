<template>
    <section class="section section-shaped section-lg my-0 h-md-100vh">
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
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Reset Password</small>
                                <br>
                                <badge
                                  v-if="forgotError"
                                  type="danger"
                                >
                                  {{ forgotError }}
                                </badge>
                                <badge
                                  v-if="forgotSuccess"
                                  type="success"
                                >
                                  {{ forgotSuccess }}
                                </badge>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            v-model.trim="model.user_password"
                                            class="mb-3"
                                            placeholder="New password">
                                </base-input>
                                <base-input alternative
                                            v-model.trim="model.cpassword"
                                            class="mb-3"
                                            placeholder="Confirm password">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <!-- <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small> -->
                                </div>
                                <div class="text-center">
                                    <base-button type="primary" id="register" @click="resetpassword()" class="my-4">Submit</base-button>
                                </div>
                            </form>
                        </template>
                        <div class="row mt-3">
                          <div class="col-6">
                            <router-link to="/login" class="text-light">
                              <small>Back to login</small>
                            </router-link>
                          </div>
                        </div>
                    </card>
                </div>
                <div class="col-lg-5" v-if="lang=='arabic'">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>هل نسيت كلمة المرور</small>
                                <br>
                                <badge
                                  v-if="forgotError"
                                  type="danger"
                                >
                                  {{ forgotError }}
                                </badge>
                                <badge
                                  v-if="forgotSuccess"
                                  type="success"
                                >
                                  {{ forgotSuccess }}
                                </badge>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            v-model.trim="model.user_password"
                                            class="mb-3"
                                            placeholder="New password">
                                </base-input>
                                <base-input alternative
                                            v-model.trim="model.cpassword"
                                            class="mb-3"
                                            placeholder="Confirm password">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <!-- <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small> -->
                                </div>
                                <div class="text-center">
                                    <base-button type="primary" id="register" @click="resetpassword()" class="my-4">إرسال</base-button>
                                </div>
                            </form>
                        </template>
                        <div class="row mt-3">
                          <div class="col-6">
                            <router-link to="/login" class="text-light">
                              <small>تسجيل الدخول</small>
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
  export default {
    name: 'forgotpassword',
    data() {
      return {
        lang:localStorage.getItem('lang'),
        model: {
          user_public_name:'',
          user_email: '',
          user_password:'',
          cpassword:'',
        },
        auth : {
          headers: {'Content-Type':'application/x-www-form-urlencoded'}
        },
        forgotError:'',
        forgotSuccess:''
      }
    },
    mounted () {

    },
    methods: {

    resetpassword() {
      //console.log(this.model.email); document.getElementById("register").innerHTML='Loading...';
       const querystring = require('querystring');
       if(this.model.user_password==this.model.cpassword && this.model.user_password!=''){

           axios
            .post(process.env.VUE_APP_API_ENDPOINT+'changepassword',querystring.stringify({id:this.$route.params.id,user_password:this.model.user_password}),this.auth)
            .then(response => {
              if(response.data.success==true){
                 this.forgotSuccess='Password reset successfully';
                 this.forgotError='';
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
                document.location.href = "/profile";
        
              }
           
            })

       }else{
          this.forgotSuccess='';
          this.forgotError='Password and Confirm password not matched';
       }
    
    }
  },
  };
</script>
<style>
</style>
