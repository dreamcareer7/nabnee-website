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
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 mb-5">
                      <div class="shadow card mb-4 featured-image">
                        <img :src="path+blogData.blog_img" class="img-fluid rounded shadow card-img-top" :alt="blogData.blog_title">
                      </div>
                      <div class="mb-3 overflow-hidden" v-if="lang=='english'">
                        <a @click="functionshare(blogData)" class="float-left btn btn-sm btn-success">
                          <i class="fa fa-share"></i>Share
                        </a>
                      </div>
                      <div class="mb-3 overflow-hidden" v-if="lang=='arabic'">
                        <a @click="functionshare(blogData)" class="btn float-right btn-sm btn-success">
                          شارك <i class="fa fa-share ml-2"></i>
                        </a>
                      </div>
                      <div class="content" v-if="lang=='english'">
                        <h1 class="h3 font-weight-bold">{{blogData.blog_title}}</h1>
                        <p class="mt-2 blog-content" v-html="blogData.blog_body"></p>
                      </div>
                      <div class="content arabic rtl" v-if="lang=='arabic'">
                        <h1 class="h3 font-weight-bold">{{blogData.blog_title_ar}}</h1>
                        <p class="mt-2 blog-content" v-html="blogData.blog_body_ar"></p>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        

        <!-- modal  collection window -->
        <modal :show.sync="sharebtn">
          <p
            v-if="lang=='english'"
            id="modal-title-default"
            slot="header"
            class="modal-title"
          >
            Share On
          </p>
          <p
            v-if="lang=='arabic'"
            id="modal-title-default"
            slot="header"
            class="modal-title"
          >
            مشاركه فى
          </p>
          <template>
            <div class="share-network">
              <ShareNetwork
                v-for="network in networks"
                :network="network.network"
                :key="network.network"
                :style="{backgroundColor: network.color,margin:'5px', cursor:'pointer'}"
                :url="sharing.url"
                :title="sharing.title"
                :description="sharing.description"
                :quote="sharing.quote"
                :hashtags="sharing.hashtags"
                :twitterUser="sharing.twitterUser"
                >
                <i :class="network.icon"></i>
                <span>{{ network.name }}</span>
              </ShareNetwork>
            </div>
          </template>

          <template slot="footer">
            <base-button
              type="link"
              class="ml-auto mt--3"
              @click="sharebtn = false"
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
        sharing: {
            url: 'https://news.vuejs.org/issues/180',
            title: 'Say hi to Vite! A brand new, extremely fast development setup for Vue.',
            description: 'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
            quote: 'The hot reload is so fast it\'s near instant. - Evan You',
            hashtags: 'vuejs,vite,javascript',
            twitterUser: 'youyuxi'
          },
          networks: [
            { network: 'email', name: 'Email', icon: 'fa fa-lg fa-envelope', color: '#333333' },
            { network: 'facebook', name: 'Facebook', icon: 'fa fah fa-lg fa-facebook-f', color: '#1877f2' },
            { network: 'linkedin', name: 'LinkedIn', icon: 'fa fah fa-lg fa-linkedin', color: '#007bb5' },
            { network: 'odnoklassniki', name: 'Odnoklassniki', icon: 'fa fah fa-lg fa-odnoklassniki', color: '#ed812b' },
            { network: 'pinterest', name: 'Pinterest', icon: 'fa fah fa-lg fa-pinterest', color: '#bd081c' },
            { network: 'reddit', name: 'Reddit', icon: 'fa fah fa-lg fa-reddit-alien', color: '#ff4500' },
            { network: 'skype', name: 'Skype', icon: 'fa fah fa-lg fa-skype', color: '#00aff0' },
            { network: 'telegram', name: 'Telegram', icon: 'fa fah fa-lg fa-telegram', color: '#0088cc' },
            { network: 'tumblr', name: 'Tumblr', icon: 'fa fah fa-lg fa-tumblr', color: '#35465c' },
            { network: 'twitter', name: 'Twitter', icon: 'fa fah fa-lg fa-twitter', color: '#1da1f2' },
            { network: 'whatsapp', name: 'Whatsapp', icon: 'fa fah fa-lg fa-whatsapp', color: '#25d366' }
          ],
        lang:localStorage.getItem('lang'),
        sharebtn:false,
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
      .post(process.env.VUE_APP_API_ENDPOINT+'read_blog_by_id',{"blog_id" :this.$route.params.id,"status" :"approved"})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.blogData=response.data.details[0];
        }
            
      })

    },

    metaInfo() {
      return {
        title: this.blogData.blog_title,
        titleTemplate: '%s | nabnee',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          {
            name: 'description', content: this.blogData.blog_title,
          },
          {
            property: 'og:title',
            content: this.blogData.blog_title,
            // template: '%s - My page',
            template: chunk => `${chunk} - nabnee`,
            vmid: 'og:title'
          },
          {
            property: 'og:description',
            content: this.blogData.blog_title,
            vmid: 'og:description'
          },
          {
            property: 'og:image',
            content: 'https://api.nabnee.com/'+this.blogData.blog_img,
            vmid: 'og:image'
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
    functionshare:function(row) {
        axios.post('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDGuJpq1O1wrigLq-ScHPoz3UnXhQQbv5E',{'longDynamicLink': 'https://nabnee.page.link/?link=https://nabnee.com/article/'+row.blog_id+'&apn=com.nabnee.app&st=Nabnee&utm_source=AndroidApp'},this.auth)
      .then(response => {
            console.log(response);
      })
        this.sharing.url= 'https://nabnee.page.link/?link=https://nabnee.com/article/'+row.blog_id+'&apn=com.nabnee.app&st=Nabnee&utm_source=AndroidApp',
        this.sharing.title= row.blog_title,
        this.sharing.description= "",
        this.sharing.quote= "",
        this.sharing.hashtags= '',
        this.sharebtn = true;
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
.featured-image {
  max-height: 400px;
  overflow: hidden;
}
.blog-content img {
  height: auto;
  max-width: 100%;
}
.blog-content p {
  font-weight: 400;
}
.blog-content li {
  font-weight: 400;
  margin-bottom: 12px;
}
</style>