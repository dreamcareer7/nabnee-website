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
                                <small>Forgot Password</small>
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
                                            v-model.trim="model.user_email"
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <!-- <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small> -->
                                </div>
                                <div class="text-center">
                                    <base-button type="primary" id="register" @click="forgotpassword()" class="my-4">Submit</base-button>
                                </div>
                            </form>
                        </template>
                        <div class="row mt-3">
                          <div class="col-6">
                              <router-link to="/login" class="text-light">
                                  <small class="text-primary">Back to login</small>
                              </router-link>
                          </div>
                          <!-- <div class="col-6 text-right">
                              <router-link to="/register" class="text-light">
                                  <small>Create new account</small>
                              </router-link>
                          </div> -->
                        </div>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <router-link to="/login" class="text-light">
                                <small>Login</small>
                            </router-link>
                        </div>
                    </div>
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
                                            v-model.trim="model.user_email"
                                            class="mb-3"
                                            placeholder="البريد الإلكتروني"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <!-- <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small> -->
                                </div>
                                <div class="text-center">
                                    <base-button type="primary" id="register" @click="forgotpassword()" class="my-4">إرسال</base-button>
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
          password:'',
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

    forgotpassword() {
      //console.log(this.model.email); document.getElementById("register").innerHTML='Loading...';
      if(this.model.user_email){
       const querystring = require('querystring');
    axios
      .post(process.env.VUE_APP_API_ENDPOINT+'forgotpassword',querystring.stringify({user_email:this.model.user_email,user_lang:this.lang}),this.auth)
      .then(response => {
        //console.log(response);
        if(response.data.success==true){
           this.forgotSuccess='Password reset link sent to Email';
           this.forgotError='';
        }else{
           this.forgotError='Email Not Exist';
           this.forgotSuccess='';
        }
     
       })
      }else{
        this.forgotError='Please enter valid email';
      }
     }
    },
  };
</script>
<style>
</style>
