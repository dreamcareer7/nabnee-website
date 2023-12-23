<template>
    <div class="h-100vh design-page">
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
                        <div class="card shadow rounded h-100 overflow-hidden">
                          <div class="position-absolute inventory-title" v-if="lang=='english'">
                            <p class="mb-0 font-weight-bold">
                                <router-link to="/images" class="mr-3 btn btn-sm btn-primary">
                                    <i class="fa fa-chevron-left mr-2"></i>Back
                                </router-link>
                                <span><h1 class="d-inline font-weight-bold">{{design.item_name}}</h1></span>
                            </p>
                          </div>
                          <div class="position-absolute inventory-title" v-if="lang=='arabic'">
                            <p class="mb-0 font-weight-bold">
                              <router-link to="/images" class="mr-3 btn btn-sm btn-primary">
                                    <i class="fa fa-chevron-left mr-2"></i>عودة
                                </router-link>
                                <span>
                                    <h1 class="d-inline font-weight-bold">{{design.item_name_ar}}</h1>
                                </span>
                                <span v-if="!design.item_name_ar">
                                    <span>
                                        <h1 class="d-inline font-weight-bold">{{design.item_name}}</h1>
                                    </span>
                                </span>
                            </p>
                          </div>
                          <span class="gallery-navigation right-nav cursor-pointer mt-6" @click="shownextimage(design.item_img,index)"><i class="fa fa-2x fa-chevron-right"></i> </span>
                          <img class="img-fluid img-big rounded" @click="showImg(design.item_img)" :src="imgsrc" style="max-height: 100%;" :alt="design.item_name">
                          <span class="gallery-navigation left-nav cursor-pointer mt-6" @click="showpreviewimage(design.item_img,index)"> <i class="fa fa-2x fa-chevron-left"></i> </span>
                          <vue-easy-lightbox
                              :visible="visible"
                              :imgs="imgs"
                              :index="index"
                              @hide="handleHide"
                          ></vue-easy-lightbox>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 pl-3 mt-3 mt-md-0 pl-md-0 h-100 profile-page">
                        <div class="card shadow rounded h-100 design-content">
                            <div class="cover-box">
                                <div class="cover-picture">
                                    <img v-if="design.created_by" v-lazy="design.created_by.cover_image" class="card-img-top rounded">
                                </div>
                                <div class="card-profile">
                                  <div class="card-profile-image">
                                      <router-link :to="'/business/'+design.created_by.user_id" class="" v-if="design.created_by">
                                          <img class="rounded-circle" v-if="design.created_by" :data-src="design.created_by.logo" :src="design.created_by.logo" lazy="loaded" style="width: 100px;height: 100px;" :alt="design.created_by.business_name_english">
                                      </router-link>
                                      <div class="design-info pt-4 px-3" v-if="lang=='english'">
                                          <router-link :to="'/business/'+design.created_by.user_id" class="" v-if="design.created_by">
                                            <h2 class="h6 text-center font-weight-bold" v-if="design.created_by">{{design.created_by.business_name_english}}</h2>
                                          </router-link>
                                          <h3 class="text-center description" v-if="design.created_by">{{design.item_description}}</h3>
                                          <div class="h6 description mt-4 text-center">
                                              <i class="fa fa-cubes text-success mr-2"></i><h3 class="text-success mr-2 description d-inline" v-if="design.item_category">{{design.item_category.inventory_category_name}}</h3>•
                                              <i class="fa fa-sitemap text-warning ml-2 mr-2"></i><h3 class="text-warning mr-2 description d-inline" v-if="design.item_subcategory">{{design.item_subcategory.inventory_subcategory_name}}</h3>
                                          </div>
                                      </div>
                                      <div class="design-info pt-4 px-3" v-if="lang=='arabic'">
                                          <h2 class="h6 text-center font-weight-bold" v-if="design.created_by">
                                            <span>{{design.created_by.business_name_arabic}}</span>
                                            <span v-if="!design.created_by.business_name_arabic">{{design.created_by.business_name_english}}</span>
                                          </h2>
                                          <h3 class="text-center description" v-if="design.created_by">
                                            <span>{{design.item_description_ar}}</span>
                                            <span v-if="!design.item_description_ar">{{design.item_description}}</span>
                                          </h3>
                                          <div class="h6 description mt-4 text-center">
                                              <h3 class="text-success mr-2 d-inline description" v-if="design.item_category">{{design.item_category.inventory_category_name_ar}}</h3> •<i class="fa fa-cubes text-success mr-2"></i>
                                              <h3 class="text-warning mr-2 d-inline description" v-if="design.item_subcategory">{{design.item_subcategory.inventory_subcategory_name_ar}}</h3> <i class="fa fa-sitemap text-warning ml-2 mr-2"></i>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </div>
                            
                            <div class="gallery container pb-3">
                                <div class="row pt-3">
                                    <div class="col-md-4 cursor-pointer mb-2 sub-images" v-for="(images,index) in design.item_img" :key="index">
                                        <img :src="images" class="hover-zoom img-fluid rounded" @click="showimage(images)" :alt="design.created_by.business_name_english+' portfolio'">
                                    </div>
                                </div>
                            </div>
                            <div class="container border-top pt-3">
                                <div class="row">
                                    <div class="col-md-3 col-6 pr-3 pr-md-2">
                                        <base-button block type="success" outline v-if="likeexist(design.item_id)" size="sm" @click="unlikeitem(design)" class="no-outline" icon="fa fa-heart fa-15x">{{design.item_likes}}</base-button>
                                        <base-button block type="success" outline v-if="!likeexist(design.item_id)" size="sm" @click="likeitem(design)" class="no-outline" icon="fa fa-heart-o fa-15x">{{design.item_likes}}</base-button>
                                    </div>
                                    <div class="col-md-3 col-6 pl-md-1 pl-3 pr-3 pr-md-1" v-if="lang=='english'">
                                      <base-button block type="secondary" size="sm" class="" v-if="!itemexist(design._id)" icon="fa fa-bookmark" @click="opencollectionwindow(design)">Save</base-button>
                                      <base-button block type="success" size="sm" class="success" v-if="itemexist(design._id)" icon="fa fa-bookmark" >Saved</base-button>
                                    </div>
                                    <div class="col-md-3  col-6 pl-md-1 pl-3 pr-3 pr-md-1" v-if="lang=='arabic'">
                                      <base-button type="secondary" size="sm" class="" v-if="!itemexist(design._id)" icon="fa fa-bookmark" @click="opencollectionwindow(design)">حفظ</base-button>
                                      <base-button type="success" size="sm" class="success" v-if="itemexist(design._id)" icon="fa fa-bookmark" >تم الحفظ</base-button>
                                    </div>
                                    <div class="col-md-6 pl-3 mt-2 mt-md-0 pl-md-1" v-if="lang=='english'">
                                        <base-button outline type="primary" block size="sm" @click="opencomment(design)" icon="fa fa-plus">Comment</base-button>
                                    </div>
                                    <div class="col-md-6 pl-1" v-if="lang=='arabic'">
                                        <base-button outline type="primary" block size="sm" @click="opencomment(design)" icon="fa fa-plus">تعليق</base-button>
                                    </div>
                                </div>
                            </div>
                            <div class="comments container mt-4">
                                <div class="row mb-3" v-for="(comments) in commentsdata" :key="comments.user_id">
                                    <div class="col-md-3 col-2 pr-0 pr-md-3">
                                        <img class="rounded-circle img-fluid" v-if="comments.user_dp" :data-src="comments.user_dp" :src="comments.user_dp" lazy="loaded">
                                        <!-- <img class="rounded-circle img-fluid" v-if="comments.logo" :data-src="comments.logo" :src="comments.logo" lazy="loaded"> -->
                                    </div>
                                    <div class="col-md-9 col-10">
                                        <h6 class="text-bold" v-if="comments.user_public_name">{{comments.user_public_name}}</h6>
                                        <!-- <h6 class="text-bold" v-if="comments.business_name_english">{{comments.business_name_english}}</h6> -->
                                        <p class="description">{{comments.comment}}</p>
                                        <base-button v-if="comments.comment_by==created_by" outline type="danger" size="sm" @click="deletecomment(comments)" icon="fa fa-trash">Delete</base-button>
                                    </div>
                                </div>

                                <!-- <div class="row mb-3">
                                    <div class="col-md-3">
                                        <img class="rounded-circle img-fluid" data-src="img/theme/team-4-800x800.jpg" src="img/theme/team-1-800x800.jpg" lazy="loaded">
                                    </div>
                                    <div class="col-md-9">
                                        <h6 class="text-bold">Rahul Maurya</h6>
                                        <p class="description">This is a test comment for UI testing purpose only.</p>
                                    </div>
                                </div> -->
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
            <span v-if="lang=='english'">Add comment</span>
            <span v-if="lang=='arabic'">أضف تعليق</span>
          </p>
          <template>
            <form @submit.prevent>
              <div class="row justify-content-center">
                <div class="col-lg-8 mb-3">
                  <label class="form-control-label" v-if="lang=='english'">Comment</label>
                  <label class="form-control-label" v-if="lang=='arabic'">تعليق</label>
                  <base-input
                    v-if="lang=='english'"
                    placeholder="comment"
                    v-model="comment.comment"
                    addon-left-icon="fa fa-commenting-o"
                    class="form-control-alternative"
                  />
                  <base-input
                    v-if="lang=='arabic'"
                    placeholder="تعليق"
                    v-model="comment.comment"
                    addon-left-icon="fa fa-commenting-o"
                    class="form-control-alternative"
                  />
                </div>
              </div>
            </form>
          </template>

          <template slot="footer">
            <base-button
                @click="createcomment()"
                id="savecommentbtn"
                size="lg"
                type="success"
                class="float-center"
              >
                <span v-if="lang=='english'">Save</span>
                <span v-if="lang=='arabic'">حفظ</span>
            </base-button>
            <base-button
              type="link"
              class="ml-auto mt--3"
              @click="addcomment = false"
            >
              <span v-if="lang=='english'">Close</span>
              <span v-if="lang=='arabic'">قريب</span>
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
            <span v-if="lang=='english'">Add to collection</span>
            <span v-if="lang=='arabic'">أضف إلى المجموعة</span>
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
                      <span v-if="lang=='english'">select</span>
                      <span v-if="lang=='arabic'">تحديد</span>
                    </option>
                    <option
                      v-for="(collections,index) in collectionData"
                      :key="index"
                      :value="collections.collection_id"
                    >
                      <span v-if="lang=='english'">{{ collections.collection_name }}</span>
                      <span v-if="lang=='arabic'">
                        <span>{{ collections.collection_name_arabic }}</span>
                        <span v-if="!collections.collection_name_arabic">{{ collections.collection_name }}</span>
                      </span>
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
                      <span v-if="lang=='english'">Save</span>
                      <span v-if="lang=='arabic'">حفظ</span>
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
                    <span v-if="lang=='english'">Create new collection</span>
                    <span v-if="lang=='arabic'">أنشئ مجموعة جديدة</span>
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
              <span v-if="lang=='english'">Close</span>
              <span v-if="lang=='arabic'">قريب</span>
            </base-button>
          </template>
        </modal>
        <!-- modal  collection window -->
        <modal :show.sync="createcollection">
          <p
            id="modal-title-default"
            slot="header"
            class="modal-title"
            v-if="lang=='english'"
          >
            New collection
          </p>
          <p
            id="modal-title-default"
            slot="header"
            class="modal-title"
            v-if="lang=='arabic'"
          >
            مجموعة جديدة
          </p>
          <template>
            <form @submit.prevent>
              <div class="row justify-content-center">
                <div class="col-lg-8 mb-3">
                  <label class="form-control-label" v-if="lang=='english'">Collection Title</label>
                  <label class="form-control-label" v-if="lang=='arabic'">عنوان المجموعة</label>
                  <base-input
                    v-if="lang=='english'"
                    placeholder="Collection Title"
                    v-model="collection.collection_name"
                    addon-left-icon="fa fa-commenting-o"
                    class="form-control-alternative"
                  />
                  <base-input
                    v-if="lang=='arabic'"
                    placeholder="عنوان المجموعة"
                    v-model="collection.collection_name"
                    addon-left-icon="fa fa-commenting-o"
                    class="form-control-alternative"

                  />
                </div>
                <div class="col-lg-8">
                  <label class="form-control-label" v-if="lang=='english'">Collection Description</label>
                  <label class="form-control-label" v-if="lang=='arabic'">وصف المجموعة</label>
                  <base-input
                    v-if="lang=='english'"
                    placeholder="'Enter description"
                    addon-left-icon="fa fa-commenting"
                    v-model="collection.collection_description"
                    class="form-control-alternative"
                  />
                  <base-input
                    v-if="lang=='arabic'"
                    placeholder="وصف المجموعة"
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
                    <span v-if="lang=='english'">Save</span>
                    <span v-if="lang=='arabic'">حفظ</span>
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
              <span v-if="lang=='english'">Close</span>
              <span v-if="lang=='arabic'">قريب</span>
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
        lang:localStorage.getItem('lang'),
        deleteitem:false,
        imageview:false,
        collection_id:'',
        commentsdata:[],
        collectionData:[],
        user_likes:[],
        saveditems:[],
        imgsrc:'',
        imgs: '',  // Img Url , string or Array of string
        visible: false,
        index:0,
        created_by:localStorage.getItem('_id'),
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
      this.path=process.env.VUE_APP_API_ENDPOINT;
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_by_id',{"item_id":this.$route.params.id},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.design=response.data.details[0];
        this.imgsrc=this.design.item_img[0];
        if(this.design.item_comments){
          let j=0;
          this.commentsdata=[];
        for (let i = 0; i < this.design.item_comments.length; i++) {
             axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_oid',{"user_oid":this.design.item_comments[i].comment_by},this.auth).then(response1 => {
            console.log(response1);
            if(response1.data.details){
              if(response1.data.details[0].logo){

              }
              var pair = {_id:this.design.item_comments[i]._id,user_dp: response1.data.details[0].user_dp,user_public_name:response1.data.details[0].user_public_name,user_id: response1.data.details[0].user_id,user_type: response1.data.details[0].user_type,user_name:response1.data.details[0].user_name,comment:this.design.item_comments[i].comment,comment_by:this.design.item_comments[i].comment_by,business_name_english:response1.data.details[0].business_name_english,business_name_arabic:response1.data.details[0].business_name_arabic,logo:response1.data.details[0].logo};
              if(response1.data.details[0].logo){
                pair.user_dp=response1.data.details[0].logo;
              }
              if(response1.data.details[0].business_name_english){
                pair.user_public_name=response1.data.details[0].business_name_english;
              }

              this.commentsdata.push(pair);
              j++;

             }
            })
          
          }
          console.log(this.commentsdata);
         }
        }
      })
      if(localStorage.getItem('user_id')){
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

     }
    },

    metaInfo() {
      return {
        title: this.design.item_name,
        titleTemplate: '%s | nabnee',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          {
            name: 'description', content: this.design.item_description,
          },
          {
            property: 'og:title',
            content: this.design.item_name,
            // template: '%s - My page',
            template: chunk => `${chunk} - nabnee`,
            vmid: 'og:title'
          },
          {
            property: 'og:description',
            content: this.design.item_description,
            vmid: 'og:description'
          },
          {
            property: 'og:type',
            content: 'website',
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

    methods: {
      getalldata(){
        axios
          .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_by_id',{"item_id":this.$route.params.id},this.auth)
          .then(response => {
            console.log(response);
            if(response.data.details){
                  this.design=response.data.details[0];
                  this.imgsrc=this.design.item_img[0];
                    if(this.design.item_comments){
                let j=0;
                this.commentsdata=[];
              for (let i = 0; i < this.design.item_comments.length; i++) {
                   axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_oid',{"user_oid":this.design.item_comments[i].comment_by},this.auth).then(response1 => {
                  console.log(response1);
                  if(response1.data.details){
                    var pair = {_id:this.design.item_comments[i]._id,user_dp: response1.data.details[0].user_dp,user_public_name:response1.data.details[0].user_public_name,user_id: response1.data.details[0].user_id,user_type: response1.data.details[0].user_type,user_name:response1.data.details[0].user_name,comment:this.design.item_comments[i].comment,comment_by:this.design.item_comments[i].comment_by,business_name_english:response1.data.details[0].business_name_english,business_name_arabic:response1.data.details[0].business_name_arabic,logo:response1.data.details[0].logo};
                      if(response1.data.details[0].logo){
                        pair.user_dp=response1.data.details[0].logo;
                      }
                      if(response1.data.details[0].business_name_english){
                        pair.user_public_name=response1.data.details[0].business_name_english;
                      }

                    this.commentsdata.push(pair);
                    j++;

                   }
                  })
                
                }
                console.log(this.commentsdata);
               }
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
            title: 'Do you want to delete?',
            text: "This action is not reversible.",
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
       //this.addcollection = false;
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
    transform: translate(-50%, -95%);
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
.inventory-title h1 {
    color: white;
    font-size: 1rem;
    line-height: 1.7;
}
</style>
