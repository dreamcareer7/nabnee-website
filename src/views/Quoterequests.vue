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
                            <div class="col-lg-8 text-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt-3">
            <div class="container shape-container d-flex pb-4">
                <div class="col px-0">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h1 class="display-3" v-if="lang=='english'">Quote Requests
                                <!-- <span>(Collection)</span> -->
                            </h1>
                            <h1 class="display-3" v-if="lang=='arabic'">عروض الأسعار
                                <!-- <span>(مجموعة)</span> -->
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                          <div class="col-lg-12 mb-5">
                            <div class="col">
                              <!-- by contract and quotation tables start here -->
                              <div class="" v-if="!planloader">
                                <!-- <div
                                  class="card-header border-0 px-2 px-md-4"
                                  style="background-color: #f6f9fc"
                                  >
                                  <div class="row align-items-center">
                                    <div class="col pr-0 pr-md-3">
                                      <h5
                                        class="text-capitalize mb-0"
                                      >
                                        Request from Goury Shanker on 22 Nov 2020
                                      </h5>
                                    </div>
                                    <div class="col pl-2 pl-md-3 text-right">
                                      
                                    </div>
                                  </div>
                                </div> -->
                                <div class="container">
                                  <div>
                                    <div class="row py-3 mt-4 border shadow-sm bg-gradient-secondary"  v-for="quotes in quoteData" :key="quotes._id">
                                      <!-- first batch -->
                                      <div
                                        class="col-lg-8 text-decoration-none"
                                        style="color: #525f7f"
                                        >
                                          <div class="card border">
                                            <div class="card-header bg-white border-0">
                                              <div class="row align-items-center">
                                                <div class="col-10">
                                                  <p class="mb-0 font-weight-bold" v-if="quotes.created_by">
                                                    <span v-if="lang=='english'">Request from</span><span v-if="lang=='arabic'">طلب من</span>  {{quotes.created_by.business_name_english}} on {{format_date(quotes.created_at)}}
                                                  </p>
                                                </div>
                                                <!-- <div class="col-4 text-right">
                                                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                                                </div> -->
                                              </div>
                                            </div>
                                            <div class="table-responsive">
                                              <base-table
                                                  thead-classes="thead-light"
                                                  :data="[quotes]"
                                                  class="req_type"
                                                >
                                                  <template slot="columns">
                                                    <th class="user_req"><span v-if="lang=='english'">Item</span><span v-if="lang=='arabic'">الغرض</span></th>
                                                    <th class="user_req"><span v-if="lang=='english'">Type</span><span v-if="lang=='arabic'">النوع</span></th>
                                                    <th class="user_req"><span v-if="lang=='english'">Qty. Required</span><span v-if="lang=='arabic'">الكمية المطلوبة</span></th>
                                                    <th class="user_req"><span v-if="lang=='english'">Notes</span><span v-if="lang=='arabic'">ملاحظات</span></th>
                                                    <th class="user_req"><span v-if="lang=='english'">Attachment</span><span v-if="lang=='arabic'">المرفق</span></th>
                                                    <th class="user_req"></th>
                                                  </template>
                                                  <template
                                                    slot-scope="{row,index}"
                                                  >
                                                    <!-- <th class="pr-0 align-middle">
                                                      <base-button
                                                        iconOnly
                                                        type="danger"
                                                        size="sm"
                                                        outline
                                                        icon="fa fa-times"
                                                        class="no-outline"
                                                        >
                                                      </base-button>
                                                    </th> -->
                                                    <th class="align-middle text-capitalize">
                                                      <span class="pr-2 d-none">{{index+1}}.</span><span class="mb-0 font-weight-bold" v-if="row.materiallist_id"><span v-if="lang=='english'">{{row.materiallist_id.item_name}}</span><span v-if="lang=='arabic'">{{row.materiallist_id.item_name_ar}}<span v-if="lang=='!arabic'">{{row.materiallist_id.item_name}}</span></span></span>
                                                    </th>
                                                    <th class="align-middle">
                                                      <span class="mb-0 font-weight-400"><span v-if="lang=='english'">{{row.type}}</span><span v-if="lang=='arabic'">{{row.type_ar}}</span></span>
                                                    </th>
                                                    <th class="align-middle">
                                                      <span class="mb-0 font-weight-400">{{row.quantity}}</span>
                                                    </th>
                                                    <th class="align-middle">
                                                      <span class="mb-0 font-weight-400">{{row.business_remark}}</span>
                                                    </th>
                                                    <th class="align-middle">
                                                      <span class="mb-0 font-weight-400 text-primary d-block" v-for="business_attachments in row.business_attachments" :key="business_attachments"><a v-if="business_attachments" :href="business_attachments" target="_blank"><i class="fa fa-download mr-2"></i>download </a></span>
                                                    </th>
                                                    <th class="align-middle">
                                                      <base-button
                                                        v-if="!quotes.response.price"
                                                        type="success"
                                                        size="sm"
                                                        icon="fa fa-reply"
                                                        @click="opensendquote(row)"
                                                        >
                                                         <span v-if="lang=='english'">Reply</span><span v-if="lang=='arabic'">الرد</span>
                                                      </base-button>
                                                    </th>
                                                  </template>
                                                </base-table>
                                            </div>
                                          </div>
                                      </div>
                                      <div class="col-md-4">
                                        <div class="card border">
                                            <div class="card-header bg-white border-0">
                                              <div class="row align-items-center">
                                                <div class="col-12">
                                                  <p class="mb-0 font-weight-bold">
                                                    <span v-if="lang=='english'">Your price</span><span class="text-right" v-if="lang=='arabic'">سعرك</span>
                                                  </p>
                                                </div>
                                                <!-- <div class="col-4 text-right">
                                                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                                                </div> -->
                                              </div>
                                            </div>
                                            <div class="table-responsive">
                                              <base-table
                                                  thead-classes="thead-light"
                                                  :data="[quotes.response]"
                                                >
                                                  <template slot="columns">
                                                    <th class="business_res"><span v-if="lang=='english'">Price</span><span v-if="lang=='arabic'">السعر</span></th>
                                                    <th class="business_res"><span v-if="lang=='english'">Remarks</span><span v-if="lang=='arabic'">ملاحظات</span></th>
                                                    <th class="business_res"><span v-if="lang=='english'">Attachment</span><span v-if="lang=='arabic'">ملاحظات</span></th>
                                                  </template>
                                                  <template
                                                    slot-scope="{row,index}"
                                                    v-if="quotes.response.price"
                                                  >
                                                    <!-- <th class="pr-0 align-middle">
                                                      <base-button
                                                        iconOnly
                                                        type="danger"
                                                        size="sm"
                                                        outline
                                                        icon="fa fa-times"
                                                        class="no-outline"
                                                        >
                                                      </base-button>
                                                    </th> -->
                                                    <th class="align-middle">

                                                      <span class="mb-0 font-weight-400" v-if="row.price">OMR {{row.price}}</span>
                                                       
                                                    </th>
                                                    <th class="align-middle">
                                                      <span class="mb-0 font-weight-400">{{row.remark}}</span>
                                                    </th>
                                                    <th class="align-middle">
                                                      <span class="mb-0 font-weight-400 text-primary" v-for="attachments in row.attachments" :key="attachments"><a v-if="attachments" :href="attachments" target="_blank"><i class="fa fa-download mr-2"></i>download</a></span>
                                                    </th>
                                                  </template>
                                              </base-table>
                                              <div class="col-6 offset-md-3" v-if="!quotes.response.price">
                                                <img src="/img/theme/empty_quote.png" class="img-fluid">
                                                <h6 class="text-center px-3 description pt-2">Provide your best price.</h6>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- shimer -->
                              <div class="row shimmer" v-if="planloader">
                                <div class="col-md-3 mt-3 mb-3">
                                  <span class="box-shimmer w-100 shine"></span>
                                </div>
                                <div class="col-md-9 mt-3 mb-3">
                                  <div class="div-shimmer w-100 pr-4">
                                    <span class="line-shimmer w-100 shine"></span>
                                    <span class="line-shimmer w-100 shine"></span>
                                    <span class="line-shimmer w-100 shine"></span>
                                  </div>
                                </div>

                                <div class="col-md-12 mb-3">
                                  <span class="photo-shimmer shine"></span>
                                  <!-- <span class="photo-shimmer shine"></span> -->
                                </div>

                                <div class="col-md-3 mt-2">
                                  <span class="box-shimmer w-100 shine"></span>
                                </div>
                                <div class="col-md-9 mt-2">
                                  <div class="div-shimmer w-100 pr-4">
                                    <span class="line-shimmer w-100 shine"></span>
                                    <span class="line-shimmer w-100 shine"></span>
                                    <span class="line-shimmer w-100 shine"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="col-lg-7" v-if="quoteData.length==0">
                      <img src="/img/theme/empty_result.png" class="img-fluid">
                      <h5 class="text-center px-3" v-if="lang=='english'">You have not received any quotation requests yet.</h5>
                      <h5 class="text-center px-3" v-if="lang=='arabic'">لم يتم استلام عروض أسعار بعد</h5>
                      <!-- <div class="text-center mt-3">
                        <router-link class="btn btn-success m-auto" to="/smartplanner">
                          <i class="fa fa-send"></i> Create your first plan
                        </router-link>
                      </div> -->
                    </div>
                </div>
            </div>
        </section>
        <!-- reply to a quote request -->
        <modal :show.sync="sendquote">
          <p
            id="modal-title-default"
            slot="header"
            class="modal-title"
          >
            <span v-if="lang=='english'">Send your quote</span><span v-if="lang=='arabic'">ارسال عرض الأسعار</span>
          </p>
          <template>
            <form @submit.prevent>
              <div class="row justify-content-center">
                <div class="col-lg-8 mb-3">
                  <label class="form-control-label" v-if="lang=='english'">Price (in OMR)</label>
                  <label class="form-control-label" v-if="lang=='arabic'">السعر (ريال عماني)</label>
                  <base-input
                    placeholder="Price"
                    v-model="quotes.price"
                    addon-left-icon="fa fa-commenting-o"
                    class="form-control-alternative"
                    v-if="lang=='english'"
                  />
                  <base-input
                    placeholder="السعر"
                    v-model="quotes.price"
                    addon-left-icon="fa fa-commenting-o"
                    class="form-control-alternative"
                    v-if="lang=='arabic'"
                  />
                </div>
                <div class="col-lg-8">
                  <label class="form-control-label" v-if="lang=='english'">Remarks</label>
                  <label class="form-control-label" v-if="lang=='arabic'">ملاحظات</label>
                  <base-input
                    placeholder="Remarks"
                    addon-left-icon="fa fa-commenting"
                    v-model="quotes.remark"
                    class="form-control-alternative"
                    v-if="lang=='english'"
                  />
                  <base-input
                    placeholder="ملاحظات"
                    addon-left-icon="fa fa-commenting"
                    v-model="quotes.remark"
                    class="form-control-alternative"
                    v-if="lang=='arabic'"
                  />
                </div>
                <div class="col-lg-8">
                  <label class="form-control-label" v-if="lang=='english'">Attach File</label>
                  <label class="form-control-label" v-if="lang=='arabic'">أرفق ملف</label>
                    <input
                    type="file"
                    ref="file"
                    id="quotefile"
                    accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                    placeholder="User DP"
                    class="form-control form-control-alternative"
                    multiple="multiple"
                    @change="hadleimage($event)"
                  />
                  <base-progress v-if="lang=='english'" type="success" :value="uploadPercentage" label="File uploaded"></base-progress>
                  <base-progress v-if="lang=='arabic'" type="success" :value="uploadPercentage" label="تحميل الملف"></base-progress>
                </div>
              </div>
              <div class="row justify-content-center mt-4">
                <div class="col-lg-8">
                  <base-button
                    @click="quotesubmission()"
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
              @click="sendquote = false"
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
  import moment from 'moment';
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
        planloader:true,
        quotes:[],
        sendquote:false,
        imagearr:[],
        uploadPercentage:0,
        quotesubmissions:[],
        created_by:localStorage.getItem('_id'),
        collectionData:[],
        quoteData:{price:'',remarks:'',attachment:'',row:{}},
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
      .post(process.env.VUE_APP_API_ENDPOINT+'read_quote',{"details":{"request_sendto":{ "$in":localStorage.getItem('_id')},"status" :"approved"},created_by:localStorage.getItem('_id')},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.quoteData=response.data.details;
        this.planloader=false;
        // console.log(this.saveditems);
        }else{
          this.quoteData=[];
          this.planloader=false;
        }
            
      })

      // axios
      // .post(process.env.VUE_APP_API_ENDPOINT+'read_quotesubmission',{"details":{"created_by":localStorage.getItem('_id'),"status" :"approved"}},this.auth)
      // .then(response => {
      //   console.log(response);
      //   if(response.data.details){
      //   this.quotesubmissions=response.data.details;
      //   //this.planloader=false;
      //   // console.log(this.saveditems);
      //   }
            
      // })
    },
    methods: {
    async hadleimage(event) {
            // Reference to the DOM input element
            console.log(event);
            console.log(this.$refs.file.files);
            this.uploadPercentage=0;
              for( var i = 0; i < this.$refs.file.files.length; i++ ){
                  let file = this.$refs.file.files[i];
                  console.log(file);
                  if(file.size < 10000000){
                  await this.upload(file,'add');
                   }else{
                    swal({
                      title:'File to large!',
                      text: 'Your file is larger than 10 MB. Please upload images which are less than 10 MB.',
                      icon:'warning',
                     }).then((result) => {
                       this.quotes.attachment=[]
                    })

                }
            }

    },
    upload(file,type){
      console.log(file);
      let fd = new FormData();
      fd.append('image',file,file.name);
      axios.post(process.env.VUE_APP_API_ENDPOINT+'image-upload',fd,{ headers: {'Content-Type': 'multipart/form-data'},onUploadProgress: function( progressEvent ) { this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) ); console.log(this.uploadPercentage)}.bind(this)}).then(response => {
        // console.log(response);
        // console.log(this.imagearr);
        if(type=='add'){
          this.imagearr.push(response.data.imageUrl);
          this.quotes.attachment=this.imagearr;
          console.log(this.quotes.attachment);
          //document.getElementById('addimage').value= null;
        }else{
          // this.editimagearr=this.modals.item_img;
          // this.editimagearr.push(response.data.imageUrl);
          // this.modals.item_img=this.editimagearr;
          // console.log(this.modals.item_img);
          // document.getElementById('editimage').value= null;
        }
        
     })

    },
    // hadleimage: function(event) {
    //         this.uploadPercentage =0;
    //         console.log(event.target);
    //         // Reference to the DOM input element
    //         var input = event.target;
    //         console.log(input.files[0].size);
    //         if(input.files[0].size < 5000000){
    //         // Ensure that you have a file before attempting to read it
    //         if (input.files && input.files[0]) {
    //             // create a new FileReader to read this image and convert to base64 format
    //             var reader = new FileReader();
    //             // Define a callback function to run, when FileReader finishes its job
    //             reader.onload = (e) => {
    //                 // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
    //                 // Read image as base64 and set to imageData
    //                 this.imageData = e.target.result;
    //             }
    //             // Start the reader job - read file as a data url (base64 format)
    //             reader.readAsDataURL(input.files[0]);

    //             this.selectedimage=input.files[0];
    //         }

    //         const fd= new FormData();
    //         fd.append('image',this.selectedimage,this.selectedimage.name);
    //         axios.post(process.env.VUE_APP_API_ENDPOINT+'image-upload',fd,{ headers: {'Content-Type': 'multipart/form-data'},onUploadProgress: function( progressEvent ) { this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) ); console.log(this.uploadPercentage)}.bind(this)})
    //         .then(response => {
    //           console.log(response);
    //           this.quotes.attachment=response.data.imageUrl;
    //         })

    //       }else{

    //         swal({
    //           title:'File to large!',
    //           text: 'Your file is larger than 5 MB. Please upload images which are less than 5 MB.',
    //           icon:'warning',
    //          }).then((result) => {
               
    //         })

    //       }

    //    },
    editcollection(row){
        console.log(row);
        this.collection.collection_id=row.collection_id;
        this.collection.collection_name=row.collection_name;
        this.collection.collection_description=row.collection_description;
        this.collection.created_by=row.created_by._id;
        this.createcollection=true;
    },
    quotesubmission() {
      console.log(this.quotes);
      let _this=this;
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'create_quotesubmission',querystring.stringify({quote_id:_this.quotes.row._id,projectplan_id:_this.quotes.row.projectplan_id._id,price:_this.quotes.price,remark:_this.quotes.remark,attachments:_this.quotes.attachment,created_by:localStorage.getItem('_id')}),_this.auth1)
      .then(response => {
        let subject_body='';
        let type='';
        console.log(response);
        if(this.lang=='arabic'){
           subject_body="لقد استلمت عرض أسعار جديد";
           type="newquotationrequestreply_ar";
           axios.post(process.env.VUE_APP_API_ENDPOINT+'send_mail',querystring.stringify({email:_this.quotes.row.created_by.user_email,_id:_this.quotes.row._id,subject_body:subject_body,user_name:_this.quotes.row.created_by.user_name,type:type}),_this.auth1)
             .then(response => {

             })
        }else{
          subject_body="You have received one quotation on nabnee.com";
           type="newquotationrequestreply";
           axios.post(process.env.VUE_APP_API_ENDPOINT+'send_mail',querystring.stringify({email:_this.quotes.row.created_by.user_email,_id:_this.quotes.row._id,subject_body:subject_body,user_name:_this.quotes.row.created_by.user_name,type:type}),_this.auth1).then(response => {

              })
        }
        
        _this.message=response.data.message;
        document.getElementById("savecollectionbtn").classList.remove('btn-primary');
        document.getElementById("savecollectionbtn").classList.add('btn-success');
        document.getElementById("savecollectionbtn").innerHTML='Updated';
        setTimeout(function(){
        document.getElementById("savecollectionbtn").classList.remove('btn-success');
        document.getElementById("savecollectionbtn").classList.add('btn-primary');
        document.getElementById("savecollectionbtn").innerHTML="Updated";
        _this.createcollection = false;
        window.location.reload();
      }, 2000);
      })

    },
    removecollection(row){
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

     },
     opensendquote(row){
      console.log(row)
      this.quotes.row=row;
      this.quotes.price='';
      this.quotes.attachment=[];
      this.quotesremark='';
      this.uploadPercentage=0;
      document.getElementById('quotefile').value= null;
      this.sendquote=true;
    },
    format_date(value){
         if (value) {
           return moment.utc(new Date(value)).format("Do MMM YY")
          }
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
/*.collection-items:nth-child(1) {
    display: none;
}*/
.table .thead-light th.user_req {
    background-color: #e7f3ff;
}
</style>
