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
                                <!-- <h1 class="display-3 d-flex justify-content-center">Data
                                    <span class="pl-2">Protection</span>
                                </h1>
                                <h1 class="display-3 justify-content-center d-none"> البيانات
                                    <span class="pl-2">حماية</span>
                                </h1> -->
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
              <div class="col-md-12">
                <br>
                <div>
                  <!-- <div dir="ltr">Updated on {{dateformat(content.updated_at)}}</div> -->
                  <div class="text-left" v-html="content.return_refund_policy"></div>
                </div>
               <!--  <div class="text-right arabic d-none">
                  <div dir="rtl">اخر تحديث بتاريخ 15 ديسمبر 2020</div><br>
                  <h4>طلب حذف بيانات GDPR</h4>
                </div>
                <div>
                  <p>As part of our continuing efforts to user data security and GDPR compliance, nabnee offers all Customers the opportunity to request data deletion for any data associated with their account.</p>
                  <h4>What is the data deletion process?</h4>
                  <p>Once we receive the data deletion is request and confirm the account ownership, the data deletion request enters our queue. Generally, the data is deleted within 25 calendar days of the initial request. Once data has been deleted it cannot be recovered.</p>
                  <h4>How can I request data deletion?</h4>
                  <p>If you (user) want to delete your data, you can request this by sending an email with subject line <span style="font-weight: 600;">Delete my nabnee data</span> and send it to <span style="font-weight: 600;">contact@nabnee.com</span>. Please include your registered email address which is associalted with your account. We will keep you updated on the deletion progress.</p>
                </div>
                <div class="d-none text-right arabic">
                  <p>كجزء من جهودنا المستمرة لأمن بيانات المستخدم والامتثال للائحة العامة لحماية البيانات ، يوفر (nabnee | نبني) لجميع الزوار الفرصة لطلب حذف البيانات لأي بيانات مرتبطة بحساباتهم.</p>
                  <h4>ما هي عملية حذف البيانات؟</h4>
                  <p>بمجرد استلامنا طلب حذف البيانات وتأكيد ملكية الحساب ، يدخل طلب حذف البيانات إلى قائمة الانتظار لدينا. بشكل عام ، يتم حذف البيانات خلال 25 يومًا تقويميًا من الطلب الأولي. بمجرد حذف البيانات لا يمكن استعادتها.</p>
                  <h4>كيف يمكنني طلب حذف البيانات؟</h4>
                  <p>إذا كنت (كمستخدم للموقع) تريد حذف بياناتك ، يمكنك طلب ذلك عن طريق إرسال بريد إلكتروني مع عنوان الموضوع ، احذف بيانات (nabnee | نبني) الخاصة بي وأرسلها إلى contact@nabnee.com. يرجى تضمين عنوان بريدك الإلكتروني المسجل والمرتبط بحسابك. سنبقيك على اطلاع بعملية الحذف.</p>
                </div> -->
              </div>
            </div>
          </div>
        </section>
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
        content:[],
        auth : { headers: { 'Content-Type':'application/json',
          'Authorization':'nabnee#' + localStorage.getItem('accessToken'),
          '_id':localStorage.getItem('_id')}},
        auth1 : { headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization':'nabnee#' + localStorage.getItem('accessToken'),
          '_id':localStorage.getItem('_id')}},
      }
    },
    mounted () {
      // this.path=process.env.VUE_APP_API_ENDPOINT;
      // const querystring = require('querystring');
      // console.log(this.auth);
      axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_content',{ "details" :{}},this.auth)
        .then(response => {
        console.log(response);
          if(response.data.details){
          this.content=response.data.details[0];
          }
            
      })

    },
    methods: {
    dateformat(val) {
      return moment.utc(new Date(val)).format("Do MMMM YYYY");
      //console.log(this.blogData.date);
    },
    }
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