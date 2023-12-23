<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-skew bg-white">
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
                <div class="container d-flex pb-1 pb-300 shape-container">
                    <div class="col px-0">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-center">
                                <h1 v-if="lang=='english'" class="display-3 d-flex justify-content-center"><span class="font-weight-300">About</span>
                                    <span class="pl-2 font-weight-bold">nabnee</span>
                                </h1>
                                <h1 v-if="lang=='arabic'" class="display-3 arabic d-flex justify-content-center"> <span class="font-weight-300">عن</span>
                                    <span class="pr-2 font-weight-bold">نبني</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-0 pt-lg-0 mt--300">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12" v-if="lang=='english'">
                <div class="row justify-content-center mb-3">
                  <div class="col-md-2">
                    <img src="/img/brand/blue.png" class="img-fluid">
                  </div>
                </div>
                <div class="row justify-content-center mt-5">
                  <div class="col-md-7">
                    <p class="font-weight-500 blockquote">Welcome! نبني | nabnee is an online platform dedicated to home design and construction. nabnee brings together home professionals, homeowners, and design enthusiasts. Through nabnee, people can find design ideas, advice, products, and services related to home design and construction.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-12" v-if="lang=='arabic'">
                <div class="row justify-content-center">
                  <div class="col-md-3">
                    <img src="/img/brand/blue.png" class="img-fluid">
                  </div>
                </div>
                <div class="row justify-content-center mt-5">
                  <div class="col-md-7 blockquote">
                    <p>أهلا بكم في نبني. نبني عبارة عن منصة على الإنترنت مختصة بكل ما يتعلق بتصميم وبناء المنازل. تجمع منصة نبني بين مكاتب التصميم ومحلات التشطيبات وأصحاب المنازل وعشاق التصميم. من خلال نبني ، يمكن للناس العثور على أفكار لتصميم منازلهم والمشورة والتشطيبات والخدمات المتعلقة بتصميم وبناء منازلهم.</p>
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
  import _ from 'lodash';
  export default {
    name: 'tables',
    props: {
      type: {
        type: String
      }
    },
    data() {
      return {
        metaData:[],
        title: 'About nabnee',
        search:'',
        searchData:[],
        categories: [],
        subcategories:[],
        brands:[],
        deleteitem:false,
        blogData: [],
        path:'',
        reportedcaption: [],
        offset:0,
        u_offset:0,
        r_offset:0,
        modals:{
         editdesign:false,
         stats:false,
         item_name:'',
         item_name_ar:'',
         item_description_ar:'',
         item_description:'',
         item_type:'Design',
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
         status:''
         },
        lang:localStorage.getItem('lang'),
        model:{item_name:'',
               item_name_ar:'',
               item_description_ar:'',
               item_description:'',
               item_type:'Design',
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
               status:''
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
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_metadata',{ "details" :{"page_url":'/about'},"offset":"0"},this.authjson)
      .then(response => {
          console.log(response);
          if(response.data.details){
          this.metaData=response.data.details[0];
            
          }else{
            this.metaData={};
          }
      })
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
.blog-excerpt {
  display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height:78px;
}
.blog-category {
  font-size: 0.875rem;
  color: #404040;
}
.blog-content img {
  height: auto;
  max-width: 100%;
}
</style>