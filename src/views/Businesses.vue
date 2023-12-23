<template>
    <div class="nabnee">
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape bg-white">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row justify-content-center">
                            <div class="col-lg-9 text-center">
                                <h1 class="display-3" v-if="lang=='english'">Find relevant businesses
                                    <span class="d-inline">for your home</span>
                                </h1>
                                <h1 class="display-3" v-if="lang=='arabic'">
                                    <span class="d-inline">ابحث عن الأعمال</span> ذات الصلة بمنزلك
                                </h1>
                                <!-- <p class="lead  text-white">The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p> -->
                                <!-- <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 icon="fa fa-code">
                                        Components
                                    </base-button>
                                    <base-button tag="a"
                                                 href="https://www.creative-tim.com/product/argon-design-system"
                                                 class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="ni ni-cloud-download-95">
                                        Download HTML
                                    </base-button>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-2 pt-lg-0 mt-2 mt-md-4">
            <div class="container">
                <div class="row mb-3" v-if="lang=='english'">
                  <div class="col-lg-4">
                      <!-- <h4 class="mt-1">Filter Results</h4> -->
                      <div class="searchbar">
                        <input v-if="lang=='english'" class="search_input" type="text"  @keyup.enter="searchbusiness()" v-model="search" placeholder="Search businesses... ">
                        <input v-if="lang=='arabic'" class="search_input" type="text"  @keyup.enter="searchbusiness()" v-model="search" placeholder="...بحث">
                        <a href="#" class="search_icon"  @click="searchbusiness()"><i class="fa fa-search"></i></a>
                      </div>
                  </div>
                  <div class="col-lg-2 col-6 pr-1 pr-md-3">
                    <select
                      aria-describedby="addon-right addon-left"
                      v-model="modals.business_city"
                      addon-left-icon="ni ni-bullet-list-67"
                      class="form-control form-control-alternative"
                      autocomplete="off"
                      @change="filtercitybusiness($event)"
                    >
                      <option
                        value=""
                      >
                        City
                      </option>
                      <option  v-for="city in cities" :key="city.value_en" :value="city.value_en">
                        {{city.value_en}}
                      </option>
                      
                    </select>
                  </div>
                  <div class="col-lg-2 col-6 pl-1 pl-md-3">
                    <select
                      aria-describedby="addon-right addon-left"
                      v-model="modals.business_category"
                      addon-left-icon="ni ni-bullet-list-67"
                      class="form-control form-control-alternative"
                      autocomplete="off"
                      @change="getsubcategories($event)"
                    >
                      <option
                        value=""
                      >
                        Category
                      </option>
                      <option  v-for="category in categories" :key="category._id" :value="category._id+'#'+category.business_category_name">
                        {{category.business_category_name}}
                      </option>
                      
                    </select>
                  </div>
                  <div class="col-lg-2 col-6 pr-1 pr-md-3">
                    <select
                      aria-describedby="addon-right addon-left"
                      addon-left-icon="ni ni-bullet-list-67"
                      v-model="modals.business_subcategory"
                      class="form-control form-control-alternative"
                      autocomplete="off"
                      @change="filterbusiness()"
                    >
                      <option
                        value=""
                      >
                        Sub-category
                      </option>
                      <option  v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id+'#'+subcategory.business_subcategory_name">
                        {{subcategory.business_subcategory_name}}
                      </option>
                    </select>
                  </div>
                  <div class="col-lg-2 col-6 pl-1 pl-md-3">
                    <select 
                      aria-describedby="addon-right addon-left"
                      v-model="distance"
                      addon-left-icon="ni ni-bullet-list-67"
                      class="form-control form-control-alternative"
                      autocomplete="off"
                      @change="filterdistancebusiness()"
                    >
                      <option
                        value=""
                      >
                        Distance
                      </option>
                      <option>
                        2 km
                      </option>
                      <option>
                        5 km
                      </option>
                      <option>
                        10 km
                      </option>
                      <option>
                        20 km
                      </option>
                      <option>
                        50 km
                      </option>
                      <option>
                        100 km
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3" v-if="lang=='arabic'">
                  <div class="col-lg-2 col-6 pr-1 pr-md-3">
                    <select
                      aria-describedby="addon-right addon-left"
                      v-model="modals.business_city"
                      addon-left-icon="ni ni-bullet-list-67"
                      class="form-control form-control-alternative"
                      autocomplete="off"
                      @change="filtercitybusiness($event)"
                    >
                      <option
                        value=""
                      >
                        المدينة
                      </option>
                      <option  v-for="city in cities" :key="city.value_en" :value="city.value_en">
                        {{city.value_ar}}
                      </option>
                      
                    </select>
                  </div>
                  <div class="col-lg-2 col-6 pl-1 pr-md-3">
                    <select
                      aria-describedby="addon-right addon-left"
                      addon-left-icon="ni ni-bullet-list-67"
                      v-model="modals.business_subcategory"
                      class="form-control form-control-alternative"
                      autocomplete="off"
                      @change="filterbusiness()"
                    >
                      <option
                        value=""
                      >
                        تصنيف فرعي
                      </option>
                      <option  v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id+'#'+subcategory.business_subcategory_name_ar">
                        {{subcategory.business_subcategory_name_ar}}
                      </option>
                    </select>
                  </div>
                  <div class="col-lg-2 col-6 pr-1 pl-md-3">
                    <select
                      aria-describedby="addon-right addon-left"
                      v-model="modals.business_category"
                      addon-left-icon="ni ni-bullet-list-67"
                      class="form-control form-control-alternative"
                      autocomplete="off"
                      @change="getsubcategories($event)"
                    >
                      <option
                        value=""
                      >
                        الفئة
                      </option>
                      <option  v-for="category in categories" :key="category._id" :value="category._id+'#'+category.business_category_name_ar">
                        {{category.business_category_name_ar}}
                      </option>
                      
                    </select>
                  </div>
                  <div class="col-lg-2 col-6 pl-1 pl-md-3">
                    <select 
                      aria-describedby="addon-right addon-left"
                      v-model="distance"
                      addon-left-icon="ni ni-bullet-list-67"
                      class="form-control form-control-alternative"
                      autocomplete="off"
                      @change="filterdistancebusiness()"
                    >
                      <option
                        value=""
                      >
                        مسافة
                      </option>
                      <option>
                        2 km
                      </option>
                      <option>
                        5 km
                      </option>
                      <option>
                        10 km
                      </option>
                      <option>
                        20 km
                      </option>
                      <option>
                        50 km
                      </option>
                      <option>
                        100 km
                      </option>
                    </select>
                  </div>
                  <div class="col-lg-4">
                    <!-- <h4 class="mt-1 text-right">تصفية النتائج</h4> -->
                    <div class="searchbar">
                      <input v-if="lang=='arabic'" class="search_input" type="text"  @keyup.enter="searchbusiness()" v-model="search" placeholder="...بحث">
                      <a href="#" class="search_icon"  @click="searchbusiness()"><i class="fa fa-search"></i></a>
                    </div>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-lg-12">
                    
                    <base-button size="sm" id="country" type="success" @click="removecountry()">
                      <span>{{company_name}}</span>
                      <i class="fa fa-times"></i>
                    </base-button>
                    <base-button size="sm" id="search" type="success" @click="removesearch()" class="d-none">
                      <span>{{search}}</span>
                      <i class="fa fa-times"></i>
                    </base-button>
                    <base-button size="sm" id="city" type="success" @click="removecity()" class="d-none">
                      <span>{{modals.business_city}}</span>
                      <i class="fa fa-times"></i>
                    </base-button>
                    <base-button size="sm" id="category" type="success" @click="removecategory()" class="d-none">
                      <span>{{modals.business_category_name}}</span>
                      <i class="fa fa-times"></i>
                    </base-button>
                    <base-button size="sm" id="subcategory" type="success" @click="removesubcategory()" class="d-none">
                      <span>{{modals.business_subcategory_name}}</span>
                      <i class="fa fa-times"></i>
                    </base-button>
                    <base-button size="sm" id="distance" type="success" @click="removedistance()" class="d-none">
                      <span>{{distance}}</span>
                      <i class="fa fa-times"></i>
                    </base-button>
                  </div>
                </div>
                <div class="row justify-content-center" v-if="businessexists">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 mt-3 mt-md-0 mb-0 mb-md-5" v-for="(business,index) in businessData" :key="index">
                                <card class="border-0" shadow body-classes="py-4">
                                
                                    <router-link :to="'/business/'+business.user_id" class="img-zoom">
                                      <img v-lazy="business.cover_image" class="img-fluid rounded shadow card-img-top mb-4" :alt="business.business_name_english">
                                    </router-link>
                                    <div v-if="lang=='english'">
                                      <router-link :to="'/business/'+business.user_id" class="h6 d-block">{{business.business_name_english}}</router-link>
                                      <p class="business_description description mt-3" v-if="business.business_description_arabic">{{business.business_description_english}}</p>
                                      <!-- <div>
                                          <badge type="success" rounded>business</badge>
                                          <badge type="success" rounded>vision</badge>
                                          <badge type="success" rounded>success</badge>
                                      </div> -->
                                      <a class="btn mt-2 btn-success btn-sm" :href='"tel:"+business.user_phone' target="_blank"><i class="fa fa-phone mr-2"></i>Call</a>
                                      <a type="" class="btn mt-2 btn-success btn-sm" :href='"mailto:"+business.user_email' target="_blank"><i class="fa fa-envelope mr-2"></i>Email</a>
                                      
                                      <a type="" class="btn mt-2 btn-success btn-sm" :href='"https://www.google.com/maps/search/?api=1&query="+business.location_lat+","+business.location_long' target="_blank"><i class="fa fa-map-marker mr-2"></i>Map</a>
                                    </div>
                                    <div v-if="lang=='arabic'" class="text-right">
                                      <router-link :to="'/business/'+business.user_id" class="h6 text-right d-block">{{business.business_name_arabic}}</router-link>
                                      <p class="business_description description mt-3 text-right" v-if="business.business_description_arabic">{{business.business_description_arabic}}</p>
                                      <!-- <div>
                                          <badge type="success" rounded>business</badge>
                                          <badge type="success" rounded>vision</badge>
                                          <badge type="success" rounded>success</badge>
                                      </div> -->
                                      <a class="btn mt-2 btn-success btn-sm" :href='"tel:"+business.user_phone' target="_blank"><i class="fa fa-phone mr-2"></i>مكالمة</a>
                                      <a type="" class="btn mt-2 btn-success btn-sm" :href='"mailto:"+business.user_email' target="_blank"><i class="fa fa-envelope mr-2"></i>بريد</a>
                                      <a type="" class="btn mt-2 btn-success btn-sm" :href='"https://www.google.com/maps/search/?api=1&query="+business.location_lat+","+business.location_long' target="_blank"><i class="fa fa-map-marker mr-2"></i>خريطة</a>
                                    </div>
                                </card>
                            </div>
                            <!-- <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>
                                        <badge type="warning" rounded>marketing</badge>
                                        <badge type="warning" rounded>product</badge>
                                        <badge type="warning" rounded>launch</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div> -->
                        </div>
                    </div>
                    <!-- <div class="container col-lg-12">
                      <div class="card-footer d-flex justify-content-end">
                        <nav aria-label="Page navigation example">
                          <ul class="pagination">
                            <li class="page-item d-flex mr-2">
                              <p class="mb-0 px-1 mt-1">
                                Page
                              </p>
                              <input
                                id="page_no"
                                size="4"
                                class="mx-1 p-1 text-center"
                                style="border: 1px solid #e9ecff;border-radius: 5px !important;background-color: #e9ecff;width: 4em;"
                                type="number"
                                name="page_no"
                              >
                              <base-button
                                block
                                type="primary"
                                class="px-3 mx-1"
                                title="GO"
                                size="sm"
                                @click="gotopage()"
                              >
                                GO
                              </base-button>
                            </li>
                            <li class="page-item">
                              <a
                                class="page-link"
                                @click="previouspage()"
                              > <span aria-hidden="true"><i
                                aria-hidden="true"
                                class="fa fa-angle-left"
                              /></span> </a>
                            </li>
                            <li class="page-item">
                              <a
                                class="page-link"
                                @click="nextpage()"
                              > <span aria-hidden="true"><i
                                aria-hidden="true"
                                class="fa fa-angle-right"
                              /></span> </a>
                            </li>
                          </ul>
                        </nav> 
                      </div>
                    </div> -->
                    <div class="container text-center">
                      <base-button type="success" v-if="loadmorefound" @click="loadmore()">
                        Load More
                      </base-button>
                    </div>
                </div>
                <div class="row mt-2 justify-content-center" v-if="!businessexists">
                    <div class="col-lg-4">
                        <div class="card border-0 shadow">
                           <div class="card-body p-2">
                                <span class="photo-shimmer shine mb-3">
                                    
                                </span>
                                <div class="row">
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-11 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-0 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card border-0 shadow">
                           <div class="card-body p-2">
                                <span class="photo-shimmer shine mb-3">
                                    
                                </span>
                                <div class="row">
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-11 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-0 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card border-0 shadow">
                           <div class="card-body p-2">
                                <span class="photo-shimmer shine mb-3">
                                    
                                </span>
                                <div class="row">
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-11 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-0 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import axios from "axios";
  import VueSwal from 'vue-swal';
  import VueTimepicker from 'vue2-timepicker';
  import 'vue2-timepicker/dist/VueTimepicker.css'
  import VueGeolocation from 'vue-browser-geolocation';
  export default {
    name: 'tables',
    components:{VueTimepicker},
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        metaData:[],
        search:'',
        selected:false,
        lat:0,
        lng:0,
        checkvalue :false,
        loadmorefound:1,
        username:false,
        usernamelength:false,
        specialcharacter:false,
        lcheckvalue:false,
        company_name:localStorage.getItem('country_name'),
        distance:'',
        searchData:[],
        categories: [],
        subcategories:[],
        cities:[],
        businessData: [],
        businessexists:0,
        reportedcaption: [],
        lang:localStorage.getItem('lang'),
        business_hours:[{day:"Mon",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Tue",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Wed",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Thu",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Fri",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Sat",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Sun",from:{hh:"",mm:""},to:{hh:"",mm:""}}],
        leisure_hours:[{day:"Mon",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Tue",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Wed",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Thu",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Fri",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Sat",from:{hh:"",mm:""},to:{hh:"",mm:""}},{day:"Sun",from:{hh:"",mm:""},to:{hh:"",mm:""}}],
        offset:0,
        u_offset:0,
        deleteitem:false,
        r_offset:0,
        modals:{
         editbusiness:false,
         stats:false,
         business_name:'',
         business_name_ar:'',
         business_description_ar:'',
         business_description:'',
         business_type:'business',
         business_visibility:'Public',
         business_category:'',
         business_subcategory:'',
         business_space:'',
         business_city:'',
         business_cost:'',
         business_theme_color:'',
         business_tags:'',
         optype:'Add',
         business_img:'',
         business_mentions:'',
         business_rate:'',
         created_by: '',
         status:''
         },

        model:{item_name:'',
               item_name_ar:'',
               item_description_ar:'',
               item_description:'',
               item_type:'business',
               item_visibility:'Public',
               item_category:'',
               item_subcategory:'',
               item_space:'',
               item_brand:'',
               item_cost:'',
               item_theme_color:'',
               item_tags:'',
               optype:'Add',
               item_img:'',
               item_mentions:'',
               item_rate:'',
               created_by: '',
               status:'',
                user_email:'',
                user_password:'',
                user_name:'',
                user_businessname:'',
                user_businessdescription:'',
                user_businessemail:'',
                user_businessnamearabic:'',
                user_businessdescriptionarabic:'',
                business_category:'',
                business_subcategory:'',
                user_businessaddressenglish:'',
                user_businessaddressarabic:'',
                business_city:'',
                user_phone:'',
                user_website:'',
                cuser_facebook:'',
                user_instagram:'',
                user_youtube:'',
                user_twitter:'',
                logo:'',
                cover_image:'',
                gpslink:'',
               },
        status:{
         0: {val: 'approved'},
         1: {val: 'rejected'},
         2: {val: 'pending'},
         3: {val: 'suspended'}
        },
        auth : { headers: { 'Content-Type':'application/json',
          'Authorization':'nabnee#' + localStorage.getItem('accessToken'),
          '_id':localStorage.getItem('_id')}},
        auth1 : { headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization':'nabnee#' + localStorage.getItem('accessToken'),
          '_id':localStorage.getItem('_id')}},
      }
    },
    mounted () {
       

      this.path=process.env.VUE_APP_API_ENDPOINT;
      const querystring = require('querystring');
      console.log(this.auth);
      let bdetails={"details" :{ "user_type":"Business"},"offset" :"0"};
      if(this.company_name!=""){
        bdetails.details.user_country=this.company_name;
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        this.businessexists=1;
         if(response.data.details.length < 29){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.businessexists=1;
            this.loadmorefound=0;
        }
            
      })

      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_category',{"status":"approved"})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.categories=response.data.details;
        }
            
      })

      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_filter_all',{ "filters" :{ "filter_name":"city"}})
      .then(response => {
        //console.log(response);
        if(response.data.details){
        this.cities=response.data.details[0].filter_values;
        }  
      })

      //api call for metadata
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_metadata',{ "details" :{"page_url":'/businesses'},"offset":"0"},this.authjson)
      .then(response => {
          console.log(response);
          if(response.data.details){
          this.metaData=response.data.details[0];
            
          }else{
            this.metaData={};
          }
      })

    },
    methods: {

    getalldata(){
      const querystring = require('querystring');
      console.log(this.auth);
      let bdetails={"details" :{ "user_type":"Business"},"offset" :"0"};
      if(this.company_name!=""){
        bdetails.details.user_country=this.company_name;
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        this.businessexists=1;
          if(response.data.details.length < 30){
             this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.businessexists=1;
            this.loadmorefound=0;
        }
            
      })
    },
    hadleimage: function(event) {
            // Reference to the DOM input element
            this.uploadPercentage =0;
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if(input.files[0].size < 5000000){

            const fd= new FormData();
            fd.append('image',input.files[0],input.files[0].name);
            axios
            .post(process.env.VUE_APP_API_ENDPOINT+'image-upload',fd,{ headers: {'Content-Type': 'multipart/form-data'},onUploadProgress: function( progressEvent ) { this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) ); console.log(this.uploadPercentage)}.bind(this)})
            .then(response => {
              //console.log(response);
                  this.model.logo=response.data.imageUrl;
               
            })

            }else{

            swal({
              title:'File to large!',
              text: 'Your file is larger than 5 MB. Please upload images which are less than 5 MB.',
              icon:'warning',
             }).then((result) => {
               
            })

          }

    },
    removecountry(){
      this.businessexists=0;
      this.company_name="";
      document.getElementById("country").classList.add('d-none');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      let bdetails={"details" :{ "user_type":"Business"},"offset" :"0"};
      if(this.company_name!=""){
        
        document.getElementById("country").classList.remove('d-none');
        
        bdetails.details.user_country=this.company_name;
      }
      if(this.search){
        bdetails.search_term=this.search;
        bdetails.business_name_english=this.search;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        this.businessexists=1;
         if(response.data.details.length < 29){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.businessexists=1;
            this.loadmorefound=0;
        }
            
      })
     }
    },
    removecity(){
      this.businessexists=0;
      this.modals.business_city="";
      document.getElementById("city").classList.add('d-none');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      let bdetails={"details" :{ "user_type":"Business"},"offset" :"0"};
      if(this.modals.business_city!=""){
        
        document.getElementById("city").classList.remove('d-none');
        
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.search){
        bdetails.search_term=this.search;
        bdetails.business_name_english=this.search;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        this.businessexists=1;
          if(response.data.details.length < 30){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.businessexists=1;
            this.loadmorefound=0;
        }
            
      })
     }
    },
    removecategory(){
      this.businessexists=0;
      this.modals.business_category="";
      this.modals.business_category_name="";
      document.getElementById("category").classList.add('d-none');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      let bdetails={"details" :{ "user_type":"Business"},"offset" :"0"};
      if(this.modals.business_category!=""){
        
        document.getElementById("category").classList.remove('d-none');
        
        bdetails.details.business_category=this.modals.business_category;
      }
      if(this.search){
        bdetails.search_term=this.search;
        bdetails.business_name_english=this.search;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        this.businessexists=1;
          if(response.data.details.length < 30){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.businessexists=1;
            this.loadmorefound=0;
        }
            
      })
     }
    },
    removesubcategory(){
      this.businessexists=0;
      this.modals.business_subcategory="";
      this.modals.business_subcategory_name="";
      document.getElementById("subcategory").classList.add('d-none');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      let bdetails={"details" :{ "user_type":"Business"},"offset" :"0"};
      if(this.modals.business_subcategory!=""){
        
        document.getElementById("subcategory").classList.remove('d-none');
        
        bdetails.details.business_subcategory=this.modals.business_subcategory;
      }
      if(this.search){
        bdetails.search_term=this.search;
        bdetails.business_name_english=this.search;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        this.businessexists=1;
          if(response.data.details.length < 30){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.businessexists=1;
            this.loadmorefound=0;
        }
            
      })
     }
    },
    removedistance(){
      this.businessexists=0;
      this.distance="";
      this.distance="";
      document.getElementById("distance").classList.add('d-none');
      let bdetails={"details" :{ "user_type":"Business"},"offset" :"0"};
      if(this.distance!=""){
        
        document.getElementById("distance").classList.remove('d-none');
        
        bdetails.distance=this.distance;
        bdetails.lat=localStorage.getItem('location_lat');
        bdetails.long=localStorage.getItem('location_long');
      }
      if(this.search){
        bdetails.search_term=this.search;
        bdetails.business_name_english=this.search;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        this.businessexists=1;
          if(response.data.details.length < 30){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.businessexists=1;
            this.loadmorefound=0;
        }
            
      })
    },
    removesearch(){
      this.businessexists=0;
      this.search="";
      document.getElementById("search").classList.add('d-none');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      let bdetails={"details" :{"user_type":"Business","user_status":"approved"},"search_type":"search_business","offset":"0"};
      
      if(this.search!=""){
         bdetails.search_term=this.search;
        document.getElementById("search").classList.remove('d-none');

          if(this.lang=='english'){
           bdetails.business_name_english=this.search;
          }
          if(this.lang=='arabic'){
             bdetails.business_name_arabic=this.search;
          }
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        this.businessexists=1;
           if(response.data.details.length < 30){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.businessexists=1;
            this.loadmorefound=0;
        }
            
      })
     }
    },
    hadleicon: function(event) {
            // Reference to the DOM input element
            this.uploadPercentage =0;
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if(input.files[0].size < 5000000){

            const fd= new FormData();
            fd.append('image',input.files[0],input.files[0].name);
            axios
            .post(process.env.VUE_APP_API_ENDPOINT+'image-upload',fd,{ headers: {'Content-Type': 'multipart/form-data'},onUploadProgress: function( progressEvent ) { this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) ); console.log(this.uploadPercentage)}.bind(this)})
            .then(response => {
              //console.log(response);
                  this.model.cover_image=response.data.imageUrl;
               
            })

            }else{

            swal({
              title:'File to large!',
              text: 'Your file is larger than 5 MB. Please upload images which are less than 5 MB.',
              icon:'warning',
             }).then((result) => {
               
            })

          }

    },
    checktime(start_time,end_time,type)
    {
      // console.log(start_time);
      let start_time1=start_time.hh+":"+start_time.mm+" "+start_time.A;
      let end_time1=end_time.hh+":"+end_time.mm+" "+end_time.A;
        var startTime = moment(start_time1, "HH:mm a");
        var endTime = moment(end_time1, "HH:mm a");
        if (endTime.hour() < startTime.hour())
        {
            console.log("Batch start time can't be greater than batch end time");
            if(type=='edit'){
              document.getElementById("edittimev").innerHTML="Batch start time can't be greater than batch end time";
            }else{
              document.getElementById("timev").innerHTML="Batch start time can't be greater than batch end time";
            }
            
            
        }
        else if (endTime.hour() == startTime.hour() && endTime.minute() <= startTime.minute())
        {
            console.log("Batch start time can't be equal or greater than batch end time");
             if(type=='edit'){
            document.getElementById("edittimev").innerHTML="Batch start time can't be equal or greater than batch end time";
            }else{
            document.getElementById("timev").innerHTML="Batch start time can't be equal or greater than batch end time";
           }
        }else{
           if(type=='edit'){
              document.getElementById("edittimev").innerHTML="";
            }else{
              document.getElementById("timev").innerHTML="";
            }

        }
        return false;
    },
    sameastime(){
       console.log('reach same as'); 
       console.log(this.business_hours);
      let start_time=this.business_hours[0].from;
      let end_time=this.business_hours[0].to;
      var inputElements = document.getElementById('sameas');
      console.log(inputElements);
      if (inputElements.checked) {
        for (var i = 0; i < this.business_hours.length; i++) {
          this.business_hours[i].from=start_time;
          this.business_hours[i].to=end_time;
          console.log(this.business_hours[i]);
        }
       }

      // console.log(this.days);
      
    },
    selectday(value){
      const index = this.days.map(e => e.day).indexOf(value);
      // console.log(index);
      if(index==-1){
        document.getElementById(value).classList.add('active');
        this.days.push({day:value,start_time:{hh:"",mm:"",A:""},end_time:{hh:"",mm:"",A:""}});
        // console.log(this.days);
      }else{
        this.days.splice(index,1);
        document.getElementById(value).classList.remove('active');
        // console.log(this.days);
      }
      
    },
    removeday(index){
      document.getElementById(this.days[index].day).classList.remove('active');
      this.days.splice(index,1);
      // console.log(this.days);
    }, 
    lchecktime(start_time,end_time,type)
    {
      // console.log(start_time);
      let start_time1=start_time.hh+":"+start_time.mm+" "+start_time.A;
      let end_time1=end_time.hh+":"+end_time.mm+" "+end_time.A;
        var startTime = moment(start_time1, "HH:mm a");
        var endTime = moment(end_time1, "HH:mm a");
        if (endTime.hour() < startTime.hour())
        {
            console.log("Batch start time can't be greater than batch end time");
            if(type=='edit'){
              document.getElementById("ledittimev").innerHTML="Batch start time can't be greater than batch end time";
            }else{
              document.getElementById("ltimev").innerHTML="Batch start time can't be greater than batch end time";
            }
            
            
        }
        else if (endTime.hour() == startTime.hour() && endTime.minute() <= startTime.minute())
        {
            console.log("Batch start time can't be equal or greater than batch end time");
             if(type=='edit'){
            document.getElementById("ledittimev").innerHTML="Batch start time can't be equal or greater than batch end time";
            }else{
            document.getElementById("ltimev").innerHTML="Batch start time can't be equal or greater than batch end time";
           }
        }else{
           if(type=='edit'){
              document.getElementById("ledittimev").innerHTML="";
            }else{
              document.getElementById("ltimev").innerHTML="";
            }

        }
        return false;
    },
    lsameastime(){
      // console.log('reach same as');
      // console.log(this.days);
      let start_time=this.leisure_hours[0].from;
      let end_time=this.leisure_hours[0].to;
      var inputElements = document.getElementById('lsameas');
      if (inputElements.checked) {
        for (var i = 0; i < this.leisure_hours.length; i++) {
          this.leisure_hours[i].from=start_time;
          this.leisure_hours[i].to=end_time;
          console.log(this.leisure_hours[i]);
        }
       }

      // console.log(this.days);
      
    },
    lselectday(value){
      const index = this.ldays.map(e => e.day).indexOf(value);
      // console.log(index);
      if(index==-1){
        document.getElementById(value).classList.add('active');
        this.ldays.push({day:value,start_time:{hh:"",mm:"",A:""},end_time:{hh:"",mm:"",A:""}});
        // console.log(this.days);
      }else{
        this.ldays.splice(index,1);
        document.getElementById(value).classList.remove('active');
        // console.log(this.days);
      }
      
    },
    lremoveday(index){
      document.getElementById(this.ldays[index].day).classList.remove('active');
      this.ldays.splice(index,1);
      // console.log(this.days);
    }, 
    openbusiness: function(tcdata) {
      const querystring = require('querystring');
       console.log(tcdata);
       this.modals.editbusiness = true;
       this.modals.item_name=tcdata.item_name;
       this.modals.item_name_ar=tcdata.item_name_ar;
       this.modals.item_description_ar=tcdata.item_description_ar;
       this.modals.item_description=tcdata.item_description;
       this.modals.item_visibility=tcdata.item_visibility;
       this.modals.item_category=tcdata.item_category._id+'#'+tcdata.item_category.business_category_name;

       this.modals.item_space=tcdata.item_space;
       this.modals.item_brand=tcdata.item_brand;
       this.modals.item_cost=tcdata.item_cost; 
       this.modals.item_theme_color=tcdata.item_theme_color;
       if(tcdata.item_tags.length>0){
        this.modals.item_tags=tcdata.item_tags.toString();
       }
       this.modals.item_img=tcdata.item_img;
       this.modals.item_mentions=tcdata.item_mentions;
       this.modals.created_by=tcdata.created_by._id;
       this.modals.status=tcdata.status;

       this.modals.item_id=tcdata.item_id;

       console.log(this.modals);

    },
    getsubcategories(event){
       const querystring = require('querystring');
       document.getElementById("category").classList.remove('d-none');
       let category=this.modals.business_category.split('#');
       this.modals.business_category_name=category[1];
       this.filtercategorybusiness();
       axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_subcategory',querystring.stringify({ business_category_oid:category[0] }),this.auth1).then(response => {
        console.log(response);
        if(response.data.details){
        this.subcategories=response.data.details; 
        // this.modals.business_category_name=this.subcategories[0].business_category_name;
        
        //this.model.category_name=response.data.subcategory_data[0].category_name;
        }
            
      })
      },
      isValidusername(){
        const querystring = require('querystring');
        console.log(this.model.user_name.length);
        if(this.model.user_name.length < 4)
        {
          this.usernamelength=true;
          this.username=false;
           this.specialcharacter=false;
        }
        else if(/[$&+,:;=\\\\?@#|/'<>.^*() %!-]/.test(this.model.user_name))
        {
         this.usernamelength=false;
         this.username=false;
         this.specialcharacter=true;
        }else{
        axios.post(process.env.VUE_APP_API_ENDPOINT+'search_business_user_name',{ user_name:this.model.user_name },this.auth).then(response => {
          console.log(response);
          if(response.data.details){
            this.username=true;
            this.usernamelength=false;
            this.specialcharacter=false;
            //this.model.category_name=response.data.subcategory_data[0].category_name;
          }else{
            this.username=false;
            this.usernamelength=false;
            this.specialcharacter=false;
          }
        })
       }
        
     },
     searchbusiness(){
        document.getElementById("search").classList.remove('d-none');
        if(this.distance){
         this.filterdistancebusiness();
        }else{
        let bdetails={"details" :{"user_type":"Business","user_status":"approved"},"search_type":"search_business","offset":"0"};
        if(this.search){
        bdetails.search_term=this.search;
        bdetails.business_name_english=this.search;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails,this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.businessData=[];
          this.deleteitem=false;
        this.businessData=response.data.details;
          if(response.data.details.length < 30){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else if(response.data.message=="Data not found"){
          this.businessData=[];
          this.deleteitem=true;
          this.loadmorefound=0; 
        }   
      })
     }
    },
    getbusinesssubcategories(event){
     const querystring = require('querystring');
     axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_subcategory',querystring.stringify({ business_category_oid:this.model.business_category }),this.auth1).then(response => {
      console.log(response);
      if(response.data.details){
      this.subcategories=response.data.details;
      //this.model.category_name=response.data.subcategory_data[0].category_name;
      }
          
    })
    },
    updatebusiness() {
      console.log(this.modals);
      let tags=[];
       // if(this.modals.item_tags){
       //  tags=this.modals.item_tags.split(','); 
       // }
       if(this.modals.item_category){
        let item_category=this.modals.item_category.split('#'); 
        this.modals.item_category=item_category[0];
       }
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'update_business',querystring.stringify({item_id:this.modals.item_id,item_name : this.modals.item_name,item_name_ar:this.modals.item_name_ar,item_description:this.modals.item_description,item_tags:this.modals.item_tags,item_type:this.modals.item_type,item_visibility:this.modals.item_visibility,item_category:this.modals.item_category,item_subcategory:this.modals.item_subcategory,item_cost: this.modals.item_cost,created_by: this.modals.created_by,status: this.modals.status}),this.auth1)
      .then(response => {
        console.log(response);
        this.message=response.data.message;
        document.getElementById("updatebtn1").classList.remove('btn-primary');
        document.getElementById("updatebtn1").classList.add('btn-success');
        document.getElementById("updatebtn1").innerHTML='Updated';
        setTimeout(function(){
        document.getElementById("updatebtn1").classList.remove('btn-success');
        document.getElementById("updatebtn1").classList.add('btn-primary');
        document.getElementById("updatebtn1").innerHTML="Update";
        window.location.reload()
      }, 2000);
      })

    },

    previouspage(){

      console.log(this.auth);
      if(this.offset>=0){
      --this.offset;
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',{"details" :{ "user_type":"Business"},"offset" :this.offset.toString()})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        }      
      })
    }

    },
    gotopage(){

      const querystring = require('querystring');
      console.log(this.auth);
      if(document.getElementById("page_no").value){
      this.offset=document.getElementById("page_no").value;
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',{"details" :{ "user_type":"Business"},"offset" :this.offset.toString()})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        }      
      })

      }

    },
    loadmore(){
      this.offset=this.offset+1;
      const querystring = require('querystring');
      let bdetails={"details" :{ "user_type":"Business"},"offset" :this.offset.toString()};
      if(this.search){
        bdetails.search_term=this.search;
        bdetails.business_name_english=this.search;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
            for (var i = 0; i < response.data.details.length; i++) {
                this.businessData.push(response.data.details[i]);
            }
        // this.businessData.push(response.data.details);
            if(response.data.details.length < 30){
               this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.loadmorefound=0;
        }      
      })
    },
    // searchbusiness() {
    //   const querystring = require('querystring');
    //   axios
    //   .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',{"details" :{ "user_type":"Business"},"offset" :"0","user_name":this.search})
    //   .then(response => {
    //     console.log(response);
    //     if(response.data.details){
    //     this.deleteitem=false;
    //     this.searchData=response.data.details;
    //     }else if(response.data.message=="Data not found"){
    //       this.searchData=[];
    //       this.deleteitem=true;
    //     }  
    //   })
    // },
    filterbusiness() {
      const querystring = require('querystring');
      document.getElementById("subcategory").classList.remove('d-none');
      let subcategories=this.modals.business_subcategory.split('#');
      this.modals.business_subcategory_name=subcategories[1];
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      
      let bdetails={"offset":"0","details":{"user_type":"Business"}};
      if(this.search){
        bdetails.search_term=this.search;
        bdetails.business_name_english=this.search;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
          this.businessData=response.data.details;
           if(response.data.details.length < 30){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else if(response.data.message=="Data not found"){
          this.businessData=[];
          this.deleteitem=true;
          this.loadmorefound=0;
        }
            
      })
     }
    },
    filtercategorybusiness() {
      const querystring = require('querystring');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      let bdetails={"offset":"0","details":{"user_type":"Business"}};
      if(this.search){
        bdetails.search_term=this.search;
        bdetails.business_name_english=this.search;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
          this.businessData=response.data.details;
          if(response.data.details.length < 30){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else if(response.data.message=="Data not found"){
          this.businessData=[];
          this.deleteitem=true;
          this.loadmorefound=0; 
        }
            
      })
     }
    },
    filtercitybusiness() {
      // console.log(this.modals.item_brand);
      document.getElementById("city").classList.remove('d-none');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      const querystring = require('querystring');
      let bdetails={"offset":"0","details":{"user_type":"Business"}};
      if(this.search){
        bdetails.search_term=this.search;
        bdetails.business_name_english=this.search;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        let category=this.modals.business_category.split('#');
        bdetails.details.business_category=category[0];
      }
      if(this.modals.business_subcategory){
        let subcategory=this.modals.business_subcategory.split('#');
        bdetails.details.business_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
          this.businessData=response.data.details;
          if(response.data.details.length < 30){
            this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else if(response.data.message=="Data not found"){
          this.businessData=[];
          this.deleteitem=true;
          this.loadmorefound=0;
        }
            
      })
     }
    },
    filterdistancebusiness() {
        this.$getLocation({
            enableHighAccuracy: true, //defaults to false
            timeout: Infinity, //defaults to Infinity
            maximumAge: 0 //defaults to 0
            
        })
          .then(coordinates => {
            console.log(coordinates.lat);
            console.log(coordinates.lng);
            this.lat=coordinates.lat;
            this.lng=coordinates.lng;
            console.log(this.distance);
            const querystring = require('querystring');
              document.getElementById("distance").classList.remove('d-none');
              let bdetails={"offset":"0","details":{"user_type":"Business"},"distance" : this.distance,"lat" : this.lat,"long" : this.lng};
              if(this.search){
                bdetails.search_term=this.search;
                bdetails.business_name_english=this.search;
                bdetails.search_type="search_business";
                
              }
              if(this.company_name!=""){
                    bdetails.details.user_country=this.company_name;
              }
              if(this.modals.business_city){
                bdetails.details.business_city=this.modals.business_city;
              }
              if(this.modals.business_category){
                let category=this.modals.business_category.split('#');
                bdetails.details.business_category=category[0];
              }
              if(this.modals.business_subcategory){
                let subcategory=this.modals.business_subcategory.split('#');
                bdetails.details.business_subcategory=subcategory[0];
              }
              axios
              .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
              .then(response => {
                console.log(response);
                let businessdata=[];
                if(response.data.details){
                    this.businessexists=1;
                    for (var i = 0; i < response.data.details.length; i++) {
                        response.data.details[i]
                        businessdata.push(response.data.details[i].businessData);
                    }
                  this.deleteitem=false;
                  this.businessData=businessdata;
                  if(response.data.details.length < 30){
                    this.loadmorefound=0; 
                    }else{
                     this.loadmorefound=1; 
                    }
                }else if(response.data.message=="Data not found"){
                  this.businessData=[];
                  this.deleteitem=true;
                  this.businessexists=1;
                  this.loadmorefound=0;
                }
                    
              })
          });
      
    },
    cleardata() {
      const querystring = require('querystring');
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',{"details" :{ "user_type":"Business"},"offset" :"0"})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        this.modals.item_category='';
        this.modals.item_subcategory='';
        this.modals.item_brand='';
        this.subcategories=[];
        this.deleteitem=false;
        }
            
      })
    },


    },
    metaInfo() {
      return {
        title: this.metaData.meta_title,
        titleTemplate: '%s | nabnee',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          {
            name: 'description', content: this.metaData.meta_description,
          },
          {
            property: 'og:title',
            content: this.metaData.og_title,
            // template: '%s - My page',
            template: chunk => `${chunk} - nabnee`,
            vmid: 'og:title'
          },
          {
            property: 'og:description',
            content: this.metaData.og_description,
            vmid: 'og:description'
          },
          {
            property: 'og:image',
            content: this.metaData.og_image,
            vmid: 'og:image'
          },
          {
            property: 'og:type',
            content: this.metaData.og_type,
            vmid: 'og:type'
          },
          {
            property: 'og:url',
            content: 'https://nabnee.com'+window.location.pathname,
            vmid: 'og:url'
          }
        ]
      }
    },
  };
</script>
<style>
.business_description {
  display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height:68px;
}
</style>