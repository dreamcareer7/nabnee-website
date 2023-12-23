<template>
    <div class="nabnee designs">
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
                            <div class="col-lg-8 text-center">
                                <h1 class="display-3" v-if="lang=='english'">Find design ideas
                                    <span class="d-inline">for your home</span>
                                </h1>
                                <h1 class="display-3" v-if="lang=='arabic'">
                                    <span class="d-inline">ابحث عن أفكار</span>تصميم لمنزلك
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-2 pt-lg-0 mt-2 mt-md-4 inventory">
          <div class="container">
            <div class="row mb-3" v-if="lang=='english'">
              <div class="col-lg-8 col-12 mb-2 mb-md-0">
                  <!-- <h4 class="mt-1">Filter Results</h4> -->
                <div class="searchbar">
                  <input v-if="lang=='english'" class="search_input" type="text"  @keyup.enter="searchDesign()" v-model="search" placeholder="Search designs... ">
                  <a href="#" class="search_icon"  @click="searchDesign()"><i class="fa fa-search"></i></a>
                </div>
              </div>
              <div class="col-lg-2 col-6 pr-1 pr-md-3">
                <select
                  aria-describedby="addon-right addon-left"
                  v-model="modals.item_category"
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
                  <option  v-for="category in categories" :key="category._id" :value="category._id+'#'+category.inventory_category_name">
                    {{category.inventory_category_name}}
                  </option>
                  
                </select>
              </div>
              <div class="col-lg-2 col-6 pl-1 pl-md-3">
                <select
                  aria-describedby="addon-right addon-left"
                  addon-left-icon="ni ni-bullet-list-67"
                  v-model="modals.item_subcategory"
                  class="form-control form-control-alternative"
                  autocomplete="off"
                  @change="filterDesign()"
                >
                  <option
                    value=""
                  >
                    Sub-category
                  </option>
                  <option  v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id+'#'+subcategory.inventory_subcategory_name">
                    {{subcategory.inventory_subcategory_name}}
                  </option>
                </select>
              </div>
            </div>
            <div class="row mb-3" v-if="lang=='arabic'">
              <div class="col-lg-2 col-6 pr-1 pl-md-3 pr-md-3">
                <select
                  aria-describedby="addon-right addon-left"
                  addon-left-icon="ni ni-bullet-list-67"
                  v-model="modals.item_subcategory"
                  class="form-control form-control-alternative"
                  autocomplete="off"
                  @change="filterDesign()"
                >
                  <option
                    value=""
                  >
                    تصنيف فرعي
                  </option>
                  <option  v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id+'#'+subcategory.inventory_subcategory_name_ar">
                    {{subcategory.inventory_subcategory_name_ar}}
                  </option>
                </select>
              </div>
              <div class="col-lg-2 col-6 pl-1 pr-md-3 pl-md-3">
                <select
                  aria-describedby="addon-right addon-left"
                  v-model="modals.item_category"
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
                  <option  v-for="category in categories" :key="category._id" :value="category._id+'#'+category.inventory_category_name_ar">
                    {{category.inventory_category_name_ar}}
                  </option>
                  
                </select>
              </div>
              <div class="col-lg-8 col-12 mt-2 mt-md-0">
                <!-- <h4 class="mt-1 text-right">تصفية النتائج</h4> -->
                <div class="searchbar">
                  <input v-if="lang=='arabic'" class="search_input" type="text"  @keyup.enter="searchDesign()" v-model="search" placeholder="...بحث">
                  <a href="#" class="search_icon"  @click="searchDesign()"><i class="fa fa-search"></i></a>
                </div>
              </div>
            </div>
            <div class="row mb-4">
                  <div class="col-lg-12">

                    <base-button size="sm" id="search" type="success" @click="removesearch()" class="d-none">
                      <span>{{search}}</span>
                      <i class="fa fa-times"></i>
                    </base-button>
                    <base-button size="sm" id="category" type="success" @click="removecategory()" class="d-none">
                      <span>{{modals.item_category_name}}</span>
                      <i class="fa fa-times"></i>
                    </base-button>
                    <base-button size="sm" id="subcategory" type="success" @click="removesubcategory()" class="d-none">
                      <span>{{modals.item_subcategory_name}}</span>
                      <i class="fa fa-times"></i>
                    </base-button>
                  </div>
            </div>
            <div class="row justify-content-center" v-if="designsexists">
                <div class="col-lg-12">
                    <div class="row row-grid">
                        
                        <div class="col-lg-4 mb-2 mt-2 mb-md-4" v-for="(design,index) in designData" :key="index">
                            <card class="border-0" shadow body-classes="pt-2 pb-3" v-if="design.created_by!=null">
                                <div class="inventory-thumbnail position-relative">
                                    <!-- <span class="gallery-navigation right-nav cursor-pointer mt-6" @click="shownextimage(design.item_img,index)"><i class="fa fa-2x fa-chevron-right"></i> </span> -->
                                    <router-link :to="'/design/'+design.item_id" class="img-zoom">
                                      <img v-if="design.item_img.length==1" v-lazy="design.item_img[0]" class="img-fluid cursor-zoom rounded shadow img-big d-block" :alt="design.item_name">
                                      <img v-if="design.item_img.length==0" src="img/pattern.jpg" class="img-fluid rounded shadow card-img-top image-shimmer" :alt="design.item_name">
                                       <div v-if="design.item_img.length>1">
                                          <b-carousel
                                            :id="'carousel-'+index+1"
                                            :interval="4000"
                                            controls
                                            indicators
                                            background="#ffffff"
                                            img-width="1024"
                                            img-height="480"
                                            style="text-shadow: 1px 1px 2px #333;"
                                            @sliding-start="onSlideStart"
                                            @sliding-end="onSlideEnd"
                                            class="inventory-thumbnail"
                                          >

                                            <!-- Slides with image only -->
                                            <b-carousel-slide  v-for="(image,index) in design.item_img" :key="index">
                                              <template v-slot:img>
                                                <img
                                                  class="d-block img-fluid img-big"
                                                  width="1024"
                                                  height="480"
                                                  :src="image"
                                                  :alt="design.item_name"
                                                >
                                              </template>
                                            </b-carousel-slide>
                                            
                                           <!--  <b-carousel-slide  img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
                                            </b-carousel>
                                            <b-carousel-slide  img-src="https://picsum.photos/1024/480/?image=55"></b-carousel-slide>
                                            </b-carousel>
                                            <b-carousel-slide  img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
                                            </b-carousel>
                                            <b-carousel-slide  img-src="https://picsum.photos/1024/480/?image=55"></b-carousel-slide> -->
                                            </b-carousel>
                                        </div>
                                    </router-link>
                                    <!-- <span class="gallery-navigation left-nav cursor-pointer mt-6" @click="showpreviewimage(design.item_img,index)"> <i class="fa fa-2x fa-chevron-left"></i> </span> -->
                                </div>
                                <router-link :to="'/design/'+design.item_id" class="d-block h6 px-2" v-if="lang=='english'">{{design.item_name}}</router-link>
                                
                                <router-link :to="'/design/'+design.item_id" class="d-block h6 px-2" v-if="lang=='arabic'">
                                  <span>{{design.item_name_ar}}</span>
                                  <span v-if="!design.item_name_ar">{{design.item_name}}</span>
                                </router-link>
                            </card>
                        </div>
                    </div>
                </div>
                <div class="container text-center">
                      <base-button type="success" v-if="loadmorefound" @click="loadmore()">
                        Load More
                      </base-button>
                </div>
            </div>
            <div class="row justify-content-center" v-if="!designsexists">
              <div class="col-lg-4">
                  <div class="card border-0 shadow">
                     <div class="card-body pt-2 pb-3">
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
                     <div class="card-body pt-2 pb-3">
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
                     <div class="card-body pt-2 pb-3">
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
        slide: 0,
        sliding: null,
        search:'',
        searchData:[],
        categories: [],
        subcategories:[],
        brands:[],
        metaData:[],
        index:0,
        imgsrc:'',
        deleteitem:false,
        loadmorefound:1,
        designData: [],
        reportedcaption: [],
        offset:0,
        u_offset:0,
        r_offset:0,
        designsexists:0,
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
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{ "item_type":"Design","status":"approved","item_visibility":"Public"},"offset" :"0"})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.designData=response.data.details;
        this.designsexists=1;
           if(response.data.details.length < 30){
               this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
          this.loadmorefound=0; 
        }
            
      })

      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_category',{"status":"approved"})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.categories=response.data.details;
        }
            
      })

      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_filter_all',{ "filters" :{ "filter_name":"brand"}})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.brands=response.data.details[0].filter_values;
        }
            
      })

      //api call for metadata
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_metadata',{ "details" :{"page_url":'/images'},"offset":"0"},this.authjson)
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
    onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
    showimage(url){
       this.imgsrc=url;
       console.log(this.imgsrc);
      },
      showpreviewimage(imagearr,index){
        index--;
        if(index>=0){
          this.index=index;
          this.imgsrc=imagearr[index];
        }
       console.log(this.imgsrc);
      },
      shownextimage(imagearr,index){
       index++;
        if(index < imagearr.length){
          this.index=index;
          this.imgsrc=imagearr[index];
        }
       console.log(this.imgsrc);
      },
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
       document.getElementById("category").classList.remove('d-none');
       const querystring = require('querystring');
       let category =this.modals.item_category.split('#');
       this.modals.item_category_name=category[1];
       this.filtercategoryDesign();
       axios.post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_subcategory',querystring.stringify({ inventory_category_oid:category[0] }),this.auth1).then(response => {
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
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{ "item_type":"Design","status":"approved","item_visibility":"Public"},"offset" :this.offset.toString()})
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
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{ "item_type":"Design","status":"approved","item_visibility":"Public"},"offset" :this.offset.toString()})
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
      let bdetails={"offset":this.offset.toString(),"details":{"item_type":"Design","status":"approved","item_visibility":"Public"}};
      if(this.search){
        bdetails.item_name=this.search;
        bdetails.search_term=this.search;
      }
      if(this.modals.item_category){
        let category=this.modals.item_category.split('#')
        bdetails.details.item_category=category[0];
      }
      if(this.modals.item_subcategory){
        let subcategory=this.modals.item_subcategory.split('#')
        bdetails.details.item_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.designData=response.data.details;
        }      
      })
    },
    loadmore(){
      this.offset=this.offset+1;
      const querystring = require('querystring');
      let bdetails={"offset":this.offset.toString(),"details":{"item_type":"Design","status":"approved","item_visibility":"Public"}};
      if(this.search){
        bdetails.item_name=this.search;
        bdetails.search_term=this.search;
      }
      if(this.modals.item_category){
        let category=this.modals.item_category.split('#')
        bdetails.details.item_category=category[0];
      }
      if(this.modals.item_subcategory){
        let subcategory=this.modals.item_subcategory.split('#')
        bdetails.details.item_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
            for (var i = 0; i < response.data.details.length; i++) {
                this.designData.push(response.data.details[i]);
            }
        // this.designData.push(response.data.details);
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
    removecategory(){
      this.designsexists=0;
      this.modals.item_category="";
      this.modals.item_category_name="";
      document.getElementById("category").classList.add('d-none');
      let bdetails={"offset":"0","details":{"item_type":"Design"}};
      if(this.search){
        bdetails.item_name=this.search;
        bdetails.search_term=this.search;
        bdetails.search_type="search_design";
      }
      if(this.modals.item_category){
        let category=this.modals.item_category.split('#')
        bdetails.details.item_category=category[0];
      }
      if(this.modals.item_subcategory){
        let subcategory=this.modals.item_subcategory.split('#')
        bdetails.details.item_subcategory=subcategory[0];
      }
      if(this.modals.item_category!=""){
        
        document.getElementById("category").classList.remove('d-none');
        
        bdetails.details.item_category=this.modals.item_category;
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.designData=response.data.details;
        if(response.data.details.length < 30){
               this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        this.designsexists=1;
        }else{
            this.designsexists=1;
            this.loadmorefound=0;
        }
            
      })
    },
    removesubcategory(){
      this.designsexists=0;
      this.modals.item_subcategory="";
      this.modals.item_subcategory_name="";

      document.getElementById("subcategory").classList.add('d-none');
      let bdetails={"offset":"0","details":{"item_type":"Design"}};
      if(this.search){
        bdetails.item_name=this.search;
        bdetails.search_term=this.search;
        bdetails.search_type="search_design";
      }
      if(this.modals.item_category){
        let category=this.modals.item_category.split('#')
        bdetails.details.item_category=category[0];
      }
      if(this.modals.item_subcategory!=""){
        
        document.getElementById("subcategory").classList.remove('d-none');
        
        bdetails.item_subcategory=this.modals.item_subcategory;
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.designData=response.data.details;
        this.designsexists=1;
        if(response.data.details.length < 30){
             this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.designsexists=1;
            this.loadmorefound=0;
        }
            
      })
    },
    removesearch(){
      this.businessexists=0;
      this.search="";
      document.getElementById("search").classList.add('d-none');
      let bdetails={"details" :{ "item_type":"Design"},"offset" :"0","search_term":this.search,"search_type":"search_product"};
      
      if(this.search!=""){
         bdetails.search_term=this.search;
        document.getElementById("search").classList.remove('d-none');

      if(this.lang=='english'){
         bdetails.item_name=this.search;
      }
      if(this.lang=='arabic'){
         bdetails.item_name_ar=this.search;
      }
        
      }
      if(this.search){
        bdetails.item_name=this.search;
        bdetails.search_term=this.search;
        bdetails.search_type="search_design";
      }
      if(this.modals.item_category){
        let category=this.modals.item_category.split('#')
        bdetails.details.item_category=category[0];
      }
      if(this.modals.item_subcategory){
        let subcategory=this.modals.item_subcategory.split('#')
        bdetails.details.item_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.designData=response.data.details;
        this.designsexists=1;
           if(response.data.details.length < 30){
               this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else{
            this.designsexists=1;
            this.loadmorefound=0;
        }
            
      })
    },
    searchDesign() {
      document.getElementById("search").classList.remove('d-none');

      let bdetails={"offset":"0","details":{"item_type":"Design"}};
      if(this.search){
        bdetails.item_name=this.search;
        bdetails.search_term=this.search;
        bdetails.search_type="search_design";
      }
      if(this.modals.item_category){
        let category=this.modals.item_category.split('#')
        bdetails.details.item_category=category[0];
      }
      if(this.modals.item_subcategory){
        let subcategory=this.modals.item_subcategory.split('#')
        bdetails.details.item_subcategory=subcategory[0];
      }
      
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails,this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
          this.designData=response.data.details;
          if(response.data.details.length < 30){
               this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else if(response.data.message=="Data not found"){
          this.designData=[];
          this.deleteitem=true;
          this.loadmorefound=0;
        }   
      })
    },
    filterDesign() {
      document.getElementById("subcategory").classList.remove('d-none');
      let bdetails={"offset":"0","details":{"item_type":"Design"}};
      if(this.search){
        bdetails.item_name=this.search;
        bdetails.search_term=this.search;
        bdetails.search_type="search_design";
      }
      if(this.modals.item_category){
        let category=this.modals.item_category.split('#')
        bdetails.details.item_category=category[0];
      }
      if(this.modals.item_subcategory){
        let subcategory=this.modals.item_subcategory.split('#')
        bdetails.details.item_subcategory=subcategory[0];
        this.modals.item_subcategory_name=subcategory[1];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
          this.designData=response.data.details;
           if(response.data.details.length < 30){
               this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else if(response.data.message=="Data not found"){
          this.designData=[];
          this.loadmorefound=0;
          this.deleteitem=true;
        }
            
      })
    },
    filtercategoryDesign() {
      const querystring = require('querystring');
      let bdetails={"offset":"0","details":{"item_type":"Design"}};
      if(this.search){
        bdetails.item_name=this.search;
        bdetails.search_term=this.search;
        bdetails.search_type="search_design";
      }
      if(this.modals.item_category){
        let category=this.modals.item_category.split('#')
        bdetails.details.item_category=category[0];
      }
      if(this.modals.item_subcategory){
        let subcategory=this.modals.item_subcategory.split('#')
        bdetails.details.item_subcategory=subcategory[0];
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
          this.designData=response.data.details;
          if(response.data.details.length < 30){
               this.loadmorefound=0; 
            }else{
             this.loadmorefound=1; 
            }
        }else if(response.data.message=="Data not found"){
          this.designData=[];
          this.loadmorefound=0;
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
.business_description {
  display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height:68px;
}
/*.designs .display-3 span {
     display: inline;
}*/
.designs .carousel-control-prev {
    height: auto;
}
.designs .carousel-control-next {
    height: auto;
}
/*.designs .carousel {
    height: auto;
}*/
.designs .carousel-inner  {
  height: inherit;
}
.designs .carousel-item  {
  height: inherit;
}
.designs .carousel-indicators {
  bottom: 0px;
}
.designs .card-lift--hover:hover {
    transform: translateY(-5px);
}
</style>