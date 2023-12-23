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
        <section class="section section-lg pt-2 pt-lg-0 mt-2 mt-md-4">
            <div class="container shape-container d-flex pb-5">
                <div class="col px-0">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center" v-if="lang=='english'">
                            <h1 class="display-3" v-if="collectionData.collection_name">{{collectionData.collection_name}}
                                <span v-if="collectionData.collection_items">({{collectionData.collection_items.length}} items)</span>
                            </h1>
                            <p class="lead text-default" v-if="collectionData.collection_description">{{collectionData.collection_description}}</p>
                        </div>
                        <div class="col-lg-8 text-center" v-if="lang=='arabic'">
                            <h1 class="display-3" v-if="collectionData.collection_name">{{collectionData.collection_name_ar}}<div v-if="!collectionData.collection_name_ar">{{collectionData.collection_name}}</div>
                                <span v-if="collectionData.collection_items">({{collectionData.collection_items.length}} items)</span>
                            </h1>
                            <p class="lead text-default" v-if="collectionData.collection_description">{{collectionData.collection_description_ar}}<span v-if="!collectionData.collection_description_ar">{{collectionData.collection_description}}</span></p>
                        </div>
                        <!-- <div class="col-lg-8 text-center">
                            <h1 class="display-3" v-if="collectionData.collection_name_ar">{{collectionData.collection_name_ar}}
                                <span v-if="collectionData.collection_items">({{collectionData.collection_items.length}} العناصر)</span>
                            </h1>
                            <p class="lead text-default" v-if="collectionData.collection_description">{{collectionData.collection_description_ar}}</p>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center inventory">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            
                            <div class="col-lg-4 mb-5" v-for="(products,index) in collectionData.collection_items" :key="index">
                                <card class="border-0" hover shadow body-classes="pt-2 pb-3" v-if="products.item_type=='Design'">
                                    <!-- <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon> -->
                                    <router-link :to="'/design/'+products.item_id" >
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <img v-if="products.item_img" v-lazy="products.item_img[0]" class="img-fluid rounded shadow card-img-top mb-4">
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link v-if="lang=='english'" class="h6 px-2 d-block" :to="'/design/'+products.item_id">{{products.item_name}}</router-link>
                                    <router-link v-if="lang=='arabic'" class="h6 px-2 text-right d-block" :to="'/design/'+products.item_id">{{products.item_name_ar}}<span v-if="!products.item_name_ar">{{products.item_name}}</span></router-link>
                                    <!-- <div>
                                        <badge type="success" rounded>business</badge>
                                        <badge type="success" rounded>vision</badge>
                                        <badge type="success" rounded>success</badge>
                                    </div> -->
                                    <!-- <base-button tag="a" href="#" size="sm" type="success" class="mt-4">
                                        <i class="fa fa-phone mr-2"></i>Call
                                    </base-button> -->
                                    <div class="px-2" v-if="lang=='english'">
                                      <base-button @click="unsaveincollection(products)" size="sm" type="danger" class="mt-3">
                                          <i class="fa fa-trash mr-2"></i>Remove
                                      </base-button>
                                    </div>
                                    <div class="px-2" v-if="lang=='arabic'">
                                      <base-button @click="unsaveincollection(products)" size="sm" type="danger" class="mt-3">
                                          <i class="fa fa-trash mr-2"></i>إزالة
                                      </base-button>
                                    </div>
                                </card>
                                <card class="border-0" hover shadow body-classes="pt-2 pb-3" v-if="products.item_type!='Design'">
                                    <!-- <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon> -->
                                    <router-link :to="'/product/'+products.item_id" >
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <img v-if="products.item_img" v-lazy="products.item_img[0]" class="img-fluid rounded shadow card-img-top mb-4">
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link v-if="lang=='english'" class="h6 px-2 d-block" :to="'/product/'+products.item_id">{{products.item_name}}</router-link>
                                    <router-link v-if="lang=='arabic'" class="h6 d-block text-right px-2" :to="'/product/'+products.item_id">{{products.item_name_ar}}</router-link>
                                    <div class="px-2" v-if="lang=='english'">
                                        <base-button @click="unsaveincollection(products)" size="sm" type="danger" class="mt-3">
                                        <i class="fa fa-trash mr-2"></i>Remove
                                        </base-button>
                                    </div>
                                    <div class="px-2 float-right" v-if="lang=='arabic'">
                                        <base-button @click="unsaveincollection(products)" size="sm" type="danger" class="mt-3">
                                        <i class="fa fa-trash mr-2"></i>إزالة
                                        </base-button>
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
        search:'',
        deleteitem:false,
        collectionData:[],
        offset:0,
        u_offset:0,
        r_offset:0,
        lang:localStorage.getItem('lang'),
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
      .post(process.env.VUE_APP_API_ENDPOINT+'read_collection_by_collection_id',{"collection_id":this.$route.params.id},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.collectionData=response.data.details[0];
        }
            
      })
    },
    methods: {

     unsaveincollection(row) {
       console.log(row);
      const querystring = require('querystring');
      swal({
            title: 'Remove this item?',
            text: "This action is not reversible.",
            icon: 'warning',
            buttons: {cancel: true,confirm: true,}
        }).then((result) => { // <--
          if (result) {
            console.log('result cloud',result)
            axios.post(process.env.VUE_APP_API_ENDPOINT+'update_collection',querystring.stringify({collection_id:this.$route.params.id,user_oid :localStorage.getItem('_id'),created_by:localStorage.getItem('_id'),optype:"Remove",items:row._id}),this.auth1)
              .then(response => {
                console.log(response);
                swal({
                  title:'Deleted!',
                  text: 'Your item has been deleted.',
                  icon:'success',
                 }).then((result) => {
                  console.log(result)
                  axios
                    .post(process.env.VUE_APP_API_ENDPOINT+'read_collection_by_collection_id',{"collection_id":this.$route.params.id},this.auth)
                      .then(response => {
                        console.log(response);
                        if(response.data.details){
                        this.collectionData=response.data.details[0];
                        }
                            
                   })
                })
             })
          }
        });

    },
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
</style>