<template>
    <div>

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
        <section class="section section-lg pt-lg-0 mt-3">
            <div class="container shape-container d-flex pb-5">
                <div class="col px-0">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h1 class="display-3" v-if="lang=='english'">Saved items
                                <span>(Collection)</span>
                            </h1>
                            <h1 class="display-3" v-if="lang=='arabic'">العناصر المحفوظة
                                <span>(مجموعة)</span>
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
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                          <div class="col-lg-12 mb-5" v-for="(collections,index) in collectionData" :key="index">
                              <card class="border-0" hover shadow body-classes="py-4">
                                  <!-- <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                  </icon> -->
                                  <div>
                                      <div class="row">
                                          <!-- <div class="col-lg-2" >
                                              <img v-if="collections.collection_items[0]" v-lazy="collections.collection_items[0].item_img[0]" class="img-fluid rounded shadow card-img-top mb-4">
                                          </div> -->
                                          <div class="col-lg-2 mb-2 mb-md-0">
                                            <router-link class="h6" :to="'/items/'+collections.collection_id" v-if="lang=='english'">{{collections.collection_name}}</router-link>
                                            <router-link class="h6" :to="'/items/'+collections.collection_id" v-if="lang=='arabic'">{{collections.collection_name_ar}}<span v-if="!collections.collection_name_ar">{{collections.collection_name}}</span></router-link>
                                            <p class="business_description description mb-0" v-if="collections.collection_items">({{collections.collection_items.length}} items)</p>

                                            <base-button @click="editcollection(collections)" size="sm" type="success" class="mt-4 no-outline" outline>
                                            <i class="fa fa-pencil mr-0"></i><span v-if="lang=='english'"></span><span v-if="lang=='arabic'"></span>
                                            </base-button>

                                            <base-button @click="removecollection(collections)" size="sm" type="danger" class="mt-4 no-outline" outline>
                                            <i class="fa fa-trash mr-0"></i><span v-if="lang=='english'"></span><span v-if="lang=='arabic'"></span>
                                            </base-button>
                                          </div>
                                          <router-link :to="'/items/'+collections.collection_id" class="col-lg-2 col-6 mb-2 mb-md-0 collection-items" v-for="(items,index) in collections.collection_items" :key="items._id">
                                            <div class="col-lg-12 px-0" v-if="index>=0 && index<=4" >
                                                <img v-if="items.item_img[0]" v-lazy="items.item_img[0]" class="img-fluid rounded shadow card-img-top">
                                            </div>
                                          </router-link>
                                      </div>
                                      <div class="row">
                                          
                                          <!-- <div class="col-lg-6" v-if="collections.collection_items[2]">
                                              <img v-if="collections.collection_items" v-lazy="collections.collection_items[2]" class="img-fluid rounded shadow card-img-top mb-4">
                                          </div> -->
                                      </div>
                                  </div>
                                  <!-- <div>
                                      <badge type="success" rounded>business</badge>
                                      <badge type="success" rounded>vision</badge>
                                      <badge type="success" rounded>success</badge>
                                  </div> -->
                                  <!-- <base-button tag="a" href="#" size="sm" type="success" class="mt-4">
                                      <i class="fa fa-phone mr-2"></i>Call
                                  </base-button>
                                  <base-button tag="a" href="#" size="sm" type="success" class="mt-4">
                                      <i class="fa fa-envelope mr-2"></i>Email
                                  </base-button> -->
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
                    <div class="col-lg-7" v-if="collectionData.length == 0">
                      <img src="/img/theme/empty_result.png" class="img-fluid">
                      <h5 class="text-center px-3" v-if="lang=='english'">You have not added any design or products in cllection.</h5>
                      <h5 class="text-center px-3" v-if="lang=='arabic'">لا توجد صور في المفضلة. يمكنك انشاء مجلدات مختلفة لحفظ الصورالتي تعجبك للرجوع اليها في المستقبل. نقترح اعطاء كل ملف اسما مناسبا للرجوع اليه في المستقبل</h5>

                      <div class="text-center mt-3">
                        <router-link class="btn btn-success m-auto" to="/home">
                          <i class="fa fa-search"></i> <span v-if="lang=='english'">Save your first item</span><span v-if="lang=='arabic'">البدء باضافة صور</span>
                        </router-link>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- modal  collection window -->
        <modal :show.sync="createcollection">
          <p
            id="modal-title-default"
            slot="header"
            class="modal-title"
          >
            <span v-if="lang=='english'">Edit collection</span>
            <span v-if="lang=='arabic'">تعديل المجموعة</span>
          </p>
          <template>
            <form @submit.prevent>
              <div class="row justify-content-center">
                <div class="col-lg-8 mb-3">
                  <label class="form-control-label" v-if="lang=='english'">Collection Title</label>
                  <label class="form-control-label" v-if="lang=='arabic'">عنوان المجموعة</label>
                  <base-input
                    placeholder="Collection Title"
                    v-model="collection.collection_name"
                    addon-left-icon="fa fa-commenting-o"
                    class="form-control-alternative"
                  />
                </div>
                <div class="col-lg-8">
                  <label class="form-control-label" v-if="lang=='arabic'">وصف المجموعة</label>
                  <label class="form-control-label" v-if="lang=='english'">Collection Description</label>
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
                    @click="updatecollection()"
                    id="savecollectionbtn"
                    size="lg"
                    type="success"
                    class="float-center"
                  >
                    <span v-if="lang=='english'">Update</span>
                    <span v-if="lang=='arabic'">تحديث</span>
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
              <span v-if="lang=='arabic'">اغلاق</span><span v-if="lang=='english'">Close</span>
            </base-button>
          </template>
        </modal>

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
        search:'',
        deleteitem:false,
        createcollection:false,
        collectionData:[],
        offset:0,
        u_offset:0,
        r_offset:0,
        lang:localStorage.getItem('lang'),
        collection:{
            collection_id:'',
            collection_name:'',
            collection_description:'',
            created_by:'',
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
      if(!localStorage.getItem('accessToken')){
          this.$router.push('/login');
       }
      this.path=process.env.VUE_APP_API_ENDPOINT;
      const querystring = require('querystring');
      console.log(this.auth);
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_collection',{"created_by":localStorage.getItem('_id'),"status" :"approved"},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.collectionData=response.data.details;
        console.log(this.saveditems);
        }
            
      })
    },
    methods: {
    editcollection(row){
        console.log(row);
        this.collection.collection_id=row.collection_id;
        this.collection.collection_name=row.collection_name;
        this.collection.collection_description=row.collection_description;
        this.collection.created_by=row.created_by._id;
        this.createcollection=true;
    },
    updatecollection() {
      console.log(this.collection);
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'update_collection',querystring.stringify({collection_id:this.collection.collection_id,collection_name:this.collection.collection_name,collection_description:this.collection.collection_description,created_by:this.collection.created_by}),this.auth1)
      .then(response => {
        let ref=this;
        console.log(response);
        this.message=response.data.message;
        document.getElementById("savecollectionbtn").classList.remove('btn-primary');
        document.getElementById("savecollectionbtn").classList.add('btn-success');
        document.getElementById("savecollectionbtn").innerHTML='Updated';
        setTimeout(function(){
        document.getElementById("savecollectionbtn").classList.remove('btn-success');
        document.getElementById("savecollectionbtn").classList.add('btn-primary');
        document.getElementById("savecollectionbtn").innerHTML="Updated";
        ref.createcollection = false;
        window.location.reload();
      }, 2000);
      })

    },
    removecollection(row){
      console.log(row);
      const querystring = require('querystring');
      if(this.lang=='english'){
        swal({
            title: 'Do you want to delete?',
            text: "This action is not reversible.",
            icon: 'warning',
            buttons: {cancel: true,confirm: true,}
        }).then((result) => { // <--
          if (result) {
            console.log('result cloud',result)
            axios.post(process.env.VUE_APP_API_ENDPOINT+'delete_collection',querystring.stringify({collection_id:row.collection_id,created_by: localStorage.getItem('_id')}),this.auth1)
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

      }else{

        swal({
            title: 'هل تود الحذف ؟',
            text: "هذه العملية تؤدي لحذف كامل",
            icon: 'warning',
            buttons: {cancel: true,confirm: true,}
        }).then((result) => { // <--
          if (result) {
            console.log('result cloud',result)
            axios.post(process.env.VUE_APP_API_ENDPOINT+'delete_collection',querystring.stringify({collection_id:row.collection_id,created_by: localStorage.getItem('_id')}),this.auth1)
          .then(response => {
            console.log(response);
            swal({
              title:'تم الحذف',
              text: '',
              icon:'success',
             }).then((result) => {
              console.log(result)
              window.location.reload()
            })
            })
           }
        });

      }

     }

    }
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
/*.collection-items:nth-child(1) {
    display: none;
}*/
</style>
