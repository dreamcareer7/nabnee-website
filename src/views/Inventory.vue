<template>
    <div class="h-100vh design-page">
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default bg-gradient-success">
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
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="py-3 showcase">
            <div class="container-fluid h-100">
                <div class="row h-100">
                    <div class="col-lg-9 col-md-8 h-100">
                        <div class="card shadow overflow-hidden rounded h-100">
                            <div class="position-absolute inventory-title">
                              <p v-if="lang=='english'" class="mb-0 font-weight-bold"><router-link to="/products" class="mr-3 btn btn-sm btn-primary"><i class="fa fa-chevron-left mr-2"></i>Back</router-link>{{design.item_name}}</p>
                              <p v-if="lang=='arabic'" class="mb-0 font-weight-bold"><router-link to="/products" class="mr-3 btn btn-sm btn-primary"><i class="fa fa-chevron-left mr-2"></i>عودة</router-link>{{design.item_name_ar}}<span v-if="!design.item_name_ar">{{design.item_name}}</span></p>
                            </div>
                            <span class="gallery-navigation right-nav cursor-pointer mt-6" @click="shownextimage(design.item_img,index)"> <i class="fa fa-2x fa-chevron-right"></i> </span>
                            <img class="img-fluid img-big rounded" @click="showImg(design.item_img)" :src="imgsrc" style="max-height: 100%;">
                            <span class="gallery-navigation left-nav cursor-pointer mt-6" @click="showpreviewimage(design.item_img,index)"> <i class="fa fa-2x fa-chevron-left"></i> </span>
                          <vue-easy-lightbox
                              :visible="visible"
                              :imgs="imgs"
                              :index="index"
                              @hide="handleHide"
                          ></vue-easy-lightbox>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 pl-0 h-100 profile-page">
                        <div class="card shadow rounded h-100 design-content">
                            <div class="cover-box">
                                <div class="cover-picture">
                                    <img v-if="design.created_by" v-lazy="design.created_by.cover_image" class="card-img-top rounded">
                                </div>
                                <div class="card-profile">
                                  <div class="card-profile-image">
                                      <a href="#">
                                          <img class="rounded-circle" v-if="design.created_by" :data-src="design.created_by.logo" :src="design.created_by.logo" lazy="loaded" style="width: 100px;height: 100px;">
                                      </a>
                                      <div class="design-info pt-4 px-3" v-if="lang=='english'">
                                          <p class="h6 text-center" v-if="design.created_by">{{design.created_by.business_name_english}}</p>
                                          <p class="text-center description" v-if="design.created_by">{{design.created_by.business_description_english}}</p>
                                          <div class="mb-2">
                                            <div>
                                              <div class="h6 description mt-4">
                                                <i class="fa fa-cubes text-primary mr-1"></i><span class="text-primary mr-2">Category:</span> <span v-if="design.item_category">{{design.item_category.inventory_category_name}} </span>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="h6 description mt-2">
                                                <i class="ni ni-archive-2 text-primary mr-2"></i><span class="text-primary mr-2">Sub-category:</span> <span v-if="design.item_subcategory">{{design.item_subcategory.inventory_subcategory_name}}</span>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="h6 description mt-2">
                                                <i class="fa fa-tag text-primary mr-2"></i><span class="text-primary mr-2">Brand:</span> <span v-if="design.item_brand">{{design.item_brand}}</span>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="h6 description mt-2">
                                                <i class="fa fa-money text-primary mr-2"></i><span class="text-primary mr-2">Price:</span> <span v-if="design.item_cost">{{design.item_cost}}</span>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                      <!-- arabic version -->
                                      <div class="design-info pt-4 px-3" v-if="lang=='arabic'">
                                          <p class="h6 text-center" v-if="design.created_by">{{design.created_by.business_name_arabic}}<span v-if="!design.created_by.business_name_arabic">{{design.created_by.business_name_english}}</span></p>
                                          <p class="text-center description" v-if="design.created_by">{{design.created_by.business_description_arabic}}<span v-if="!design.created_by.business_description_arabic">{{design.created_by.business_description_english}}</span></p>
                                          <div class="mb-2 text-right">
                                            <div>
                                              <div class="h6 description mt-4">
                                                <span class="text-primary ml-2">الفئة:</span>
                                                <span v-if="design.item_category">{{design.item_category.inventory_category_name_ar}} </span>
                                                <i class="fa fa-cubes text-primary mr-1"></i>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="h6 description mt-2">
                                                <span class="text-primary ml-2">تصنيف فرعي:</span>
                                                <span v-if="design.item_subcategory">{{design.item_subcategory.inventory_subcategory_name_ar}}</span>
                                                <i class="ni ni-archive-2 text-primary ml-2"></i>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="h6 description mt-2">
                                                <span v-if="design.item_brand">{{design.item_brand_ar}}</span>
                                                <span class="text-primary ml-2">الماركة:</span> <i class="fa fa-tag text-primary ml-2"></i>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="h6 description mt-2">
                                                <span v-if="design.item_cost">{{design.item_cost}}</span>
                                                <span class="text-primary ml-2">السعر:</span> <i class="fa fa-money text-primary ml-2"></i>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </div>
                            <div class="gallery container pb-3">
                                <div class="row pt-3">
                                    <div class="col-md-4 mb-2" v-for="(images,index) in design.item_img" :key="index">
                                        <img :src="images" class="img-fluid rounded" @click="showimage(images)">
                                    </div>
                                    <!-- <div class="col-md-4 mb-2">
                                        <img src="img/theme/img-1-1200x1000.jpg" class="img-fluid rounded">
                                    </div>
                                    <div class="col-md-4 mb-2">
                                        <img src="img/theme/img-1-1200x1000.jpg" class="img-fluid rounded">
                                    </div>
                                    <div class="col-md-4 mb-2">
                                        <img src="img/theme/img-1-1200x1000.jpg" class="img-fluid rounded">
                                    </div>
                                    <div class="col-md-4 mb-2">
                                        <img src="img/theme/img-1-1200x1000.jpg" class="img-fluid rounded">
                                    </div>
                                    <div class="col-md-4 mb-2">
                                        <img src="img/theme/img-1-1200x1000.jpg" class="img-fluid rounded">
                                    </div> -->
                                </div>
                            </div>
                            <div class="container border-top pt-3">
                                <div class="row">
                                    <div class="col-md-3 pr-2">
                                        <base-button block type="primary" v-if="likeexist(design.item_id)" size="sm" @click="unlikeitem(design)" icon="ni ni-favourite-28">{{design.item_likes}}</base-button>
                                        <base-button block type="primary" v-if="!likeexist(design.item_id)" size="sm" @click="likeitem(design)" icon="ni ni-favourite-28">{{design.item_likes}}</base-button>
                                    </div>
                                    <div class="col-md-3 pl-1 pr-1" v-if="lang=='english'">
                                      <base-button type="secondary" size="sm" class="" v-if="!itemexist(design._id)" icon="fa fa-bookmark" @click="opencollectionwindow(design)">Save</base-button>
                                      <base-button type="secondary" size="sm" class="success" v-if="itemexist(design._id)" icon="fa fa-bookmark" >Saved</base-button>
                                    </div>
                                    <div class="col-md-3 pl-1 pr-1" v-if="lang=='arabic'">
                                      <base-button type="secondary" size="sm" class="" v-if="!itemexist(design._id)" icon="fa fa-bookmark" @click="opencollectionwindow(design)">حفظ</base-button>
                                      <base-button type="secondary" size="sm" class="success" v-if="itemexist(design._id)" icon="fa fa-bookmark" >تم الحفظ</base-button>
                                    </div>
                                    <div class="col-md-6 pl-1">
                                        <base-button outline type="primary" block size="sm" @click="opencomment(design)" icon="fa fa-plus"><span v-if="lang=='english'">Comment</span><span v-if="lang=='arabic'">تعليق</span></base-button>
                                    </div>
                                </div>
                            </div>
                            <div class="comments container mt-4">
                                <div class="row mb-3" v-for="(comments) in design.item_comments" :key="comments.user_public_name">
                                    <div class="col-md-3">
                                        <img class="rounded-circle img-fluid" :data-src="comments.user_dp" :src="comments.user_dp" lazy="loaded">
                                    </div>
                                    <div class="col-md-9">
                                        <h6 class="text-bold">{{comments.user_public_name}}</h6>
                                        <p class="description">{{comments.comment}}</p>
                                        <base-button v-if="comments.comment_by==created_by" outline type="danger" size="sm" @click="deletecomment(comments)" icon="fa fa-trash">Delete</base-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- /addcomment -->
        <modal :show.sync="addcomment">
          <p
            id="modal-title-default"
            slot="header"
            class="modal-title"
          >
            Add comment
          </p>
          <template>
            <form @submit.prevent>
              <div class="row justify-content-center">
                <div class="col-lg-8 mb-1">
                  <label class="form-control-label">Comment</label>
                  <base-input
                    placeholder="comment"
                    v-model="comment.comment"
                    addon-left-icon="fa fa-commenting-o"
                    class="form-control-alternative comment-input"
                  />
                </div>
                <div class="col-lg-8">
                  <base-button
                      @click="createcomment()"
                      id="savecommentbtn"
                      size="lg"
                      type="success"
                      block
                      class="float-center"
                    >
                      Save
                  </base-button>
                </div>
              </div>
            </form>
          </template>

          <template slot="footer">
            <base-button
              type="link"
              class="ml-auto mt--3"
              @click="addcomment = false"
            >
              Close
            </base-button>
          </template>
        </modal>
        <!-- add collection -->
        <modal :show.sync="addcollection">
          <p
            id="modal-title-default"
            slot="header"
            class="modal-title"
          >
            Add to collection
          </p>
          <template>
            <form @submit.prevent>
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <select
                    v-model="collection_id"
                    aria-describedby="addon-right addon-left"
                    addon-left-icon="ni ni-bullet-list-67"
                    class="form-control form-control-alternative"
                    autocomplete="off"
                  >
                    <option
                      value=""
                      disabled=""
                    >
                      Select
                    </option>
                    <option
                      v-for="(collections,index) in collectionData"
                      :key="index"
                      :value="collections.collection_id"
                    >
                      {{ collections.collection_name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="row justify-content-center mt-4">
                <div class="col-lg-8">
                    <base-button
                        @click="saveincollection()"
                        id="saveincollectionbtn"
                        size="lg"
                        type="success"
                        class="float-center"
                        icon="fa fa-check"
                        block
                        >
                        Save
                    </base-button>
                </div>
                <div class="col-lg-8">
                    <p class="text-center my-3">Or</p>
                </div>
                <div class="col-lg-8">
                  <base-button
                    @click="createcollectionwindow()"
                    id="sendnoti"
                    size="lg"
                    type="secondary"
                    icon="fa fa-plus"
                    class="float-center"
                    block
                    outline
                  >
                    Create new collection
                  </base-button>
                </div>
              </div>
            </form>
          </template>

          <template slot="footer">
            <base-button
              type="link"
              class="ml-auto mt--3"
              @click="addcollection = false"
            >
              Close
            </base-button>
          </template>
        </modal>
        <!-- modal  collection window -->
        <modal :show.sync="createcollection">
          <p
            id="modal-title-default"
            slot="header"
            class="modal-title"
          >
            New collection
          </p>
          <template>
            <form @submit.prevent>
              <div class="row justify-content-center">
                <div class="col-lg-8 mb-3">
                  <label class="form-control-label">Collection Title</label>
                  <base-input
                    placeholder="Collection Title"
                    v-model="collection.collection_name"
                    addon-left-icon="fa fa-commenting-o"
                    class="form-control-alternative"
                  />
                </div>
                <div class="col-lg-8">
                  <label class="form-control-label">Collection Description</label>
                  <base-input
                    placeholder="'Enter description"
                    addon-left-icon="fa fa-commenting"
                    v-model="collection.collection_description"
                    class="form-control-alternative"
                  />
                </div>
              </div>
              <div class="row justify-content-center mt-4">
                <div class="col-lg-8">
                  <base-button
                    @click="savecollection()"
                    id="savecollectionbtn"
                    size="lg"
                    type="success"
                    icon="fa fa-plus"
                    class="float-center"
                  >
                    Save
                  </base-button>
                </div>
              </div>
            </form>
          </template>

          <template slot="footer">
            <base-button
              type="link"
              class="ml-auto mt--3"
              @click="createcollection = false"
            >
              Close
            </base-button>
          </template>
        </modal>

    </div>
</template>

<script>
  import axios from "axios";
  import VueSwal from 'vue-swal';
  import VueEasyLightbox from 'vue-easy-lightbox'
  
  import _ from 'lodash';
  export default {
    name: 'Design',
     components: {VueEasyLightbox
    },
    props:['id'],
    data() {
      return {
        design: [],
        deleteitem:false,
        imageview:false,
        collection_id:'',
        collectionData:[],
        user_likes:[],
        saveditems:[],
        imgsrc:'',
        imgs: '',  // Img Url , string or Array of string
        visible: false,
        index:0,
        lang:localStorage.getItem('lang'),
        created_by:localStorage.getItem('_id'),
        item_likes:localStorage.getItem('item_likes'),
        addcollection:false,
        createcollection:false,
        addcomment:false,
        collection:{
            collection_name:'',
            collection_description:'',
            collection_type:'',
            status:'approved',
            created_by:localStorage.getItem('_id')
         },
        comment:{comment : '', 
        user_public_name : localStorage.getItem('user_public_name'), 
        user_dp : localStorage.getItem('user_dp'), 
        comment_by :localStorage.getItem('_id') , 
        mention : ''
        },
        statuses: {
         1: {id: 'pending', val: 'pending'},
         2: {id: 'approved',val: 'approved'}
        },
        model: {option_type:'text'},
        message:'',
        options:'',
        path:'',
        test_type:[{nature:'',amount:''}],
        auth : { headers: { 'Content-Type':'application/json',
          'Authorization':'nabnee#' + localStorage.getItem('accessToken'),
          '_id':localStorage.getItem('_id')}},
        auth1 : { headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization':'nabnee#' + localStorage.getItem('accessToken'),
          '_id':localStorage.getItem('_id')}},
      }
    },
    mounted () {
      console.log(localStorage.getItem('user_likes'));
      this.path=process.env.VUE_APP_API_ENDPOINT;
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_by_id',{"item_id":this.$route.params.id},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.design=response.data.details[0];
        this.imgsrc=this.design.item_img[0];
        }
      })

      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_id',{"user_id":localStorage.getItem('user_id')},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        let design=response.data.details[0];
        this.user_likes= design.user_likes;
        }
            
      })

      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_collection',{"created_by":localStorage.getItem('_id'),"status" :"approved"},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.collectionData=response.data.details;
        let portfolio =  _.map(this.collectionData, projects => (projects.collection_items));
        for (var i = 0; i < portfolio.length; i++) {
            for (var j = 0; j < portfolio[i].length; j++) {
            this.saveditems.push(portfolio[i][j]._id)
        }
        }
        console.log(this.saveditems);
        }
            
      })

    },
    methods: {
      getalldata(){

        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_by_id',{"item_id":this.$route.params.id},this.auth)
        .then(response => {
          console.log(response);
          if(response.data.details){
          this.design=response.data.details[0];
          this.imgsrc=this.design.item_img[0];
          }
        })

        axios
          .post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_id',{"user_id":localStorage.getItem('user_id')},this.auth)
          .then(response => {
            console.log(response);
            if(response.data.details){
            let design=response.data.details[0];
            this.user_likes= design.user_likes;
            }
                
          })

        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_collection',{"created_by":localStorage.getItem('_id'),"status" :"approved"},this.auth)
        .then(response => {
          console.log(response);
          if(response.data.details){
          this.collectionData=response.data.details;
          let portfolio =  _.map(this.collectionData, projects => (projects.collection_items));
          for (var i = 0; i < portfolio.length; i++) {
              for (var j = 0; j < portfolio[i].length; j++) {
              this.saveditems.push(portfolio[i][j]._id)
          }
          }
          console.log(this.saveditems);
          }
              
        })

      },
      itemexist(value){
        return this.saveditems.includes(value);
      },
      likeexist(value){
        return this.user_likes.includes(value);
      },
      likeitem(row){
        if(localStorage.getItem('accessToken')){
         axios.post(process.env.VUE_APP_API_ENDPOINT+'update_inventory_public',{"attribute" : "like","user_id" : localStorage.getItem('user_id'),"item_id" : this.$route.params.id,optype : "Add"},this.auth)
          .then(response => {
            console.log(response);
             this.getalldata();
            })
        }else{
          localStorage.setItem('url',window.location.pathname);
          this.$router.push('/login');
        }
      },
      unlikeitem(row){
        if(localStorage.getItem('accessToken')){
         axios.post(process.env.VUE_APP_API_ENDPOINT+'update_inventory_public',{"attribute" : "like","user_id" : localStorage.getItem('user_id'),"item_id" : this.$route.params.id,optype : "Remove"},this.auth)
          .then(response => {
            console.log(response);
             this.getalldata();
            })
        }else{
          localStorage.setItem('url',window.location.pathname);
          this.$router.push('/login');
        }
      },
      handleHide() {
      this.visible = false
      },
      showImg (imgs) {
        this.imgs = imgs;
        this.visible = true
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
      openimage(imgsrc){
        this.imageview=true;
        this.imagesrc=imgsrc;

      },
      deletecomment(row) {
      console.log(row);
      const querystring = require('querystring');
        swal({
            title: 'Are you sure?',
            text: "wan't to delete",
            icon: 'warning',
            buttons: {cancel: true,confirm: true,}
        }).then((result) => { // <--
          if (result) {
            console.log('result cloud',result)
            axios.post(process.env.VUE_APP_API_ENDPOINT+'update_inventory_public',{"comment" : { "comment" :row.comment,"comment_by" : row.comment_by,"_id" : row._id},"item_id" : this.$route.params.id,optype : "Remove"},this.auth)
          .then(response => {
            console.log(response);
            swal({
              title:'Deleted!',
              text: 'Your file has been deleted.',
              icon:'success',
             }).then((result) => {
              console.log(result)
              this.getalldata();
            })
            })
           }
        });
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
              this.deleteitem=true;
            })
            })
           }
        });
    },
    opencollectionwindow: function(data) {
       console.log("collection window");
       if(localStorage.getItem('accessToken')){
       this.addcollection = true;
       this.items=data._id;
       }else{
          localStorage.setItem('url',window.location.pathname);
          this.$router.push('/login');
       }
    },
    createcollectionwindow: function() {
       this.addcollection = false;
       console.log("collection window");
       this.createcollection = true;
       
    },
    opencomment: function(data) {
      if(localStorage.getItem('accessToken')){
       this.addcomment = true;
       console.log("comment window");
       }else{
          localStorage.setItem('url',window.location.pathname);
          this.$router.push('/login');
       }
    },
    savecollection() {
      console.log(this.collection);
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'create_collection',querystring.stringify({collection_name:this.collection.collection_name,collection_description:this.collection.collection_description,created_by: this.collection.created_by,status: this.collection.status}),this.auth1)
      .then(response => {
        console.log(response);
        this.message=response.data.message;
        let ref=this;
        document.getElementById("savecollectionbtn").classList.remove('btn-primary');
        document.getElementById("savecollectionbtn").classList.add('btn-success');
        document.getElementById("savecollectionbtn").innerHTML='Saved';
        setTimeout(function(){
        document.getElementById("savecollectionbtn").classList.remove('btn-success');
        document.getElementById("savecollectionbtn").classList.add('btn-primary');
        document.getElementById("savecollectionbtn").innerHTML="Save";
        ref.createcollection = false;
        ref.getalldata();
      }, 2000);
      })

    },
    saveincollection() {
       
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'update_collection',querystring.stringify({collection_id:this.collection_id,user_oid :localStorage.getItem('_id'),created_by:localStorage.getItem('_id'),optype:"Add",items:this.items}),this.auth1)
      .then(response => {
        console.log(response);
        this.message=response.data.message;
        let ref=this;
        document.getElementById("saveincollectionbtn").classList.remove('btn-primary');
        document.getElementById("saveincollectionbtn").classList.add('btn-success');
        document.getElementById("saveincollectionbtn").innerHTML='Saved';
        setTimeout(function(){
        document.getElementById("saveincollectionbtn").classList.remove('btn-success');
        document.getElementById("saveincollectionbtn").classList.add('btn-primary');
        document.getElementById("saveincollectionbtn").innerHTML="Update";
        ref.addcollection = false;
        ref.getalldata();
      }, 2000);
      })

    },
    unsaveincollection() {
       
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'update_collection',querystring.stringify({collection_id:this.collection_id,user_oid :localStorage.getItem('_id'),created_by:localStorage.getItem('_id'),optype:"Remove",items:this.items}),this.auth1)
      .then(response => {
        console.log(response);
        this.message=response.data.message;
        let ref=this;
        document.getElementById("saveincollectionbtn").classList.remove('btn-primary');
        document.getElementById("saveincollectionbtn").classList.add('btn-success');
        document.getElementById("saveincollectionbtn").innerHTML='Saved';
        setTimeout(function(){
        document.getElementById("saveincollectionbtn").classList.remove('btn-success');
        document.getElementById("saveincollectionbtn").classList.add('btn-primary');
        document.getElementById("saveincollectionbtn").innerHTML="Update";
        ref.addcollection = false;
        ref.getalldata();
      }, 2000);
      })

    },
    createcomment() {
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'update_inventory_public',{"comment" : this.comment,"item_id" : this.$route.params.id,optype : "Add"},this.auth)
      .then(response => {
        console.log(response);
        this.message=response.data.message;
        let ref=this;
        document.getElementById("savecommentbtn").classList.remove('btn-primary');
        document.getElementById("savecommentbtn").classList.add('btn-success');
        document.getElementById("savecommentbtn").innerHTML='Saved';
        setTimeout(function(){
        document.getElementById("savecommentbtn").classList.remove('btn-success');
        document.getElementById("savecommentbtn").classList.add('btn-primary');
        document.getElementById("savecommentbtn").innerHTML="Update";
        ref.addcomment = false;
        ref.getalldata();
      }, 2000);
      })

    },
  },
  };
</script>
<style>
.showcase {
    height: calc(100vh - 97px);
}
.cover-box {
    height: auto;
}
.cover-picture {
    max-height: 100px;
    overflow: hidden;
}
.design-page .profile-page .card-profile .card-profile-image img {
    transform: translate(-50%, -90%);
}
.design-page .profile-page .card-profile .card-profile-image img:hover {
    transform: translate(-50%, -93%);
}
.design-content {
    overflow-y: scroll;
}
.design-page .profile-page .card-profile {
    margin-top: 35px;
}
.inventory-title {
    background: #00000038;
    padding: 10px;
    width: 100%;
}
.inventory-title p {
    color: white;
}
.comment-input {
  height: 80px;
}
.comment-input .form-control {
  height: inherit;
}
</style>