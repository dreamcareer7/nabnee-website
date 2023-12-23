<template>
    <div>
        <!-- <div class="position-relative">
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
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-center">
                                <h1 v-if="lang=='english'" class="display-3">Read home makeover stories
                                    <span>and find inspiration</span>
                                </h1>
                                <h1 v-if="lang=='arabic'" class="display-3 ">اقرأ قصص تحول المنزل
                                    <span>والعثور على الإلهام</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div> -->
        <section class="section section-lg mt-4">
            <div class="container">
                <div class="row justify-content-center">
                    <!-- <div class="col-lg-3">
                        <div class="row row-grid">
                            <div class="col-lg-12 mb-5">
                                <card class="border-0" shadow body-classes="py-4">
                                   <p class="h6 mb-4">Stories and ideas</p>
                                   <a href="#/blog" class="mb-2 d-block blog-category">Category 1</a>
                                   <a href="#/blog" class="mb-2 d-block blog-category">Category 1</a>
                                   <a href="#/blog" class="mb-2 d-block blog-category">Category 1</a>
                                   <a href="#/blog" class="mb-2 d-block blog-category">Category 1</a>
                                   <a href="#/blog" class="mb-2 d-block blog-category">Category 1</a>
                                   <a href="#/blog" class="mb-2 d-block blog-category">Category 1</a>
                                   <a href="#/blog" class="mb-2 d-block blog-category">Category 1</a>
                                   <a href="#/blog" class="mb-2 d-block blog-category">Category 1</a>
                                   <a href="#/blog" class="mb-2 d-block blog-category">Category 1</a>
                                   <a href="#/blog" class="mb-2 d-block blog-category">Category 1</a>
                                </card>
                            </div>
                        </div>
                    </div> -->
                    <div class="col-md-12">
                      <div class="col-lg-12 mb-5" v-for="(blogs,index) in blogData" :key="index">
                          <card class="border-0" hover shadow body-classes="py-4">
                              <router-link :to="'/article/'+blogs.blog_id" class="featured-image d-block mb-3">
                                <img v-if="blogs.blog_img" v-lazy="path+blogs.blog_img" class="img-fluid rounded shadow card-img-top mb-4">
                              </router-link>
                              <div v-if="lang=='english'">
                                <router-link :to="'/article/'+blogs.blog_id" class="h4">{{blogs.blog_title}}</router-link>
                                <p class="mt-2 blog-excerpt" v-html="blogs.blog_body"></p>
                              </div>
                              <div v-if="lang=='arabic'">
                                <router-link :to="'/article/'+blogs.blog_id" class="h4">{{blogs.blog_title_ar}}</router-link>
                                <p class="mt-2 blog-excerpt" v-html="blogs.blog_body_ar"></p>
                              </div>
                              <span>By <router-link :to="'/article/'+blogs.blog_id" class="text-primary">{{blogs.created_by}}</router-link> <!-- | <router-link class="badge badge-primary" :to="'/article/'+blogs.blog_id">Interior Design</router-link> --></span>
                          </card>
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
  export default {
    name: 'tables',
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
      .post(process.env.VUE_APP_API_ENDPOINT+'read_blog_all',{"details" :{},"offset" :"0"})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.blogData=response.data.details;
        }
            
      })

      //api call for metadata
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_metadata',{ "details" :{"page_url":'/blog'},"offset":"0"},this.authjson)
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
    deleteDesign(row) {
      console.log(row);
      const querystring = require('querystring');
        swal({
            title: 'Delete this item?',
            text: "This action is not reversible.",
            icon: 'warning',
            buttons: {cancel: true,confirm: true,}
        }).then((result) => { // <--
          if (result) {
            console.log('result cloud',result)
            axios.post(process.env.VUE_APP_API_ENDPOINT+'delete_inventory',querystring.stringify({ item_id:row.item_id,created_by:row.created_by._id}),this.auth1)
          .then(response => {
            console.log(response);
            swal({
              title:'Deleted!',
              text: 'Your file has been deleted.',
              icon:'success',
             }).then((result) => {
              console.log(result)
              window.location.reload()
            })
            })
           }
        });
    },
    
    openDesign: function(tcdata) {
      const querystring = require('querystring');
       console.log(tcdata);
       this.modals.editdesign = true;
       this.modals.item_name=tcdata.item_name;
       this.modals.item_name_ar=tcdata.item_name_ar;
       this.modals.item_description_ar=tcdata.item_description_ar;
       this.modals.item_description=tcdata.item_description;
       this.modals.item_visibility=tcdata.item_visibility;
       this.modals.item_category=tcdata.item_category._id+'#'+tcdata.item_category.inventory_category_name;

      //  axios.post(process.env.VUE_APP_API_ENDPOINT+'subcategories',querystring.stringify({ category_id:tcdata.category._id,token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdHVzZXIiLCJpYXQiOjE1NDk4OTE1ODQsImV4cCI6MTU4MTQyNzU4NH0.LXjF7LPkGplQj6nWnEgmdyK7GNceoiihf4mKoAmQQqc' }),this.auth)
      // .then(response => {
      //   console.log(response);
      //   if(response.data.subcategory_data){
      //   this.item_subcategory=response.data.subcategory_data;
      //   this.model.category_name=response.data.subcategory_data[0].category_name;
      //    }   
      //   })
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
       // if(tcdata.sub_category[0]){
       //  this.modals.sub_category={'sub_id':tcdata.sub_category[0].subcat_id,'name':tcdata.sub_category_name[0]};
       //  //this.modals.sub_category=tcdata.sub_category[0].subcat_id;
       //  this.model.sub_category_name=tcdata.sub_category_name[0];
       // }
       this.modals.item_id=tcdata.item_id;

       console.log(this.modals);
    },
    getsubcategories(event){
       const querystring = require('querystring');
       this.filtercategoryDesign();
       axios.post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_subcategory',querystring.stringify({ inventory_category_oid:this.modals.item_category }),this.auth1).then(response => {
        console.log(response);
        if(response.data.details){
        this.subcategories=response.data.details;
        //this.model.category_name=response.data.subcategory_data[0].category_name;
        }
            
      })
      },
    updateDesign() {
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
       axios.post(process.env.VUE_APP_API_ENDPOINT+'update_inventory',querystring.stringify({item_id:this.modals.item_id,item_name : this.modals.item_name,item_name_ar:this.modals.item_name_ar,item_description:this.modals.item_description,item_tags:this.modals.item_tags,item_type:this.modals.item_type,item_visibility:this.modals.item_visibility,item_category:this.modals.item_category,item_subcategory:this.modals.item_subcategory,item_cost: this.modals.item_cost,created_by: this.modals.created_by,status: this.modals.status}),this.auth1)
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
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{ "item_type":"Design"},"offset" :this.offset})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.designData=response.data.details;
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
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{ "item_type":"Design"},"offset" :this.offset})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.designData=response.data.details;
        }      
      })

      }
    },
    nextpage(){
      this.offset=this.offset+1;
      const querystring = require('querystring');
      console.log(this.auth);
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{ "item_type":"Design"},"offset" :this.offset})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.designData=response.data.details;
        }      
      })
    },
    searchDesign() {
      const querystring = require('querystring');
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{ "item_type":"Design"},"offset" :"0","item_name":this.search})
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.searchData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.productData=[];
          this.deleteitem=true;
        }   
      })
    },
    filterDesign() {
      const querystring = require('querystring');
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"offset":"0","details":{"item_type":"Design","item_category":this.modals.item_category,"item_subcategory":this.modals.item_subcategory}})
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.designData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.designData=[];
          this.deleteitem=true;
        }
            
      })
    },
    filtercategoryDesign() {
      const querystring = require('querystring');
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"offset":"0","details":{"item_type":"Design","item_category":this.modals.item_category}})
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.designData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.designData=[];
          this.deleteitem=true;
        }
            
      })
    },
    cleardata() {
      const querystring = require('querystring');
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"offset":"0","details":{"item_type":"Design"}})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.designData=response.data.details;
        this.modals.item_category='';
        this.modals.item_subcategory='';
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