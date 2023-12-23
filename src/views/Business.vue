<template>
    <div class="profile-page profile" style="margin-top: 90px;">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary alpha-4" :style="'background-image: linear-gradient(150deg, #0000008c 15%, #585858ab 70%, #86868694 94%), url('+cover_image+');'">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container-fluid px-0 px-md-3">
                <card shadow class="card-profile" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 col-md-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="design.logo" v-if="businessloaded" class="rounded-circle" :alt="design.business_name_english">
                                        <span v-if="!businessloaded" class="circle-shimmer logo-shimmer shine"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-5 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-2 py-md-4 mt-lg-0 px-0 text-center text-md-right">
                                    <a v-if="design.web_link && design.web_link!=' '" @click="gotoGoogle(design)" class="mr-1 btn btn-info btn-sm text-white" target="_blank">
                                      <i class="fa fa-globe"></i>
                                      <span v-if="lang=='english'">Website</span>
                                      <span v-if="lang=='arabic'">موقع الكتروني</span>
                                    </a>
                                    <base-button type="warning" size="sm" class="ml-1" @click="functionshare(design)" icon="fa fa-share">
                                      <span v-if="lang=='english'">Share</span>
                                      <span v-if="lang=='arabic'">شارك</span>
                                    </base-button>
                                    <a type="" class="btn btn-success btn-sm" :href='"https://www.google.com/maps/search/?api=1&query="+design.location_lat+","+design.location_long' target="_blank"><i class="fa fa-location-arrow mr-2"></i><span v-if="lang=='english'">Locate</span><span v-if="lang=='arabic'">الموقع</span></a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center justify-content-md-start">
                                    <div class="p-0" v-if="design.fb_link && design.fb_link!=' '">
                                        <base-button type="primary" target="_blank"  tag="a" :href="'https://www.facebook.com/'+design.fb_link" size="sm" icon="fa fa-facebook" class="mr-2"></base-button>
                                    </div>
                                    <div class="p-0" v-if="design.twitter_link && design.twitter_link!=' '">
                                        <base-button type="info" target="_blank" size="sm"  tag="a" :href="'https://www.twitter.com/'+design.twitter_link" icon="fa fa-twitter" class="mr-2"></base-button>
                                    </div>
                                    <div class="p-0" v-if="design.youtube_link && design.youtube_link!=' '">
                                        <base-button type="danger" target="_blank" size="sm" tag="a" :href="'https://www.youtube.com/'+design.youtube_link" icon="fa fa-youtube" class="mr-2"></base-button>
                                    </div>
                                    <div class="p-0" v-if="design.instagram_link && design.instagram_link!=' '">
                                        <base-button type="danger" target="_blank" size="sm"  tag="a" :href="'https://www.instagram.com/'+design.instagram_link" icon="fa fa-instagram" class="mr-2"></base-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-3">
                            <div v-if="lang=='english'">
                              <h3>{{design.business_name_english}}</h3>
                              <div class="mx-auto mt-3 font-weight-400" style="max-width: 600px">{{design.business_description_english}}  </div>
                              <div class="row text-left p-0 p-md-2 mt-3 justify-content-center">
                                <div class="col-lg-8 border rounded shadow">
                                  <div class="row py-3" v-if="!businessloaded">
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                  </div>
                                  <div class="row p-3" v-if="businessloaded">
                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.business_category">
                                      <div class="h6 mt-2"><i class="fa fa-cubes text-success mr-1"></i><span class="text-success mr-2"></span> {{design.business_category.business_category_name}}</div>    
                                    </div>
                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.business_subcategory">
                                      <div class="h6 mt-2"><i class="fa fa-sitemap text-warning mr-2"></i><span class="text-warning mr-2"></span> {{design.business_subcategory.business_subcategory_name}}</div>
                                    </div>
                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.user_phone">
                                      <div class="h6 mt-2"><i class="fa fa-phone text-info mr-2"></i><span class="text-info mr-2"></span> <a class="text-dark" :href='"tel:"+design.user_phone' target="_blank">{{design.user_phone}}</a></div>
                                    </div>

                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.business_email">
                                      <div class="h6 mt-2 d-flex"><i class="fa fa-envelope text-danger mr-2"></i><span class="text-danger mr-2"></span> <a :href='"mailto:"+design.business_email+"?subject=Email from nabnee website&body=Hi, I want to know more about your services."' class="text-dark overflow-hidden" target="_blank"><span class="overflow-hidden">{{design.business_email}}</span></a></div>
                                    </div>
                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.address">
                                      <div class="h6 mt-2 d-flex"><i class="fa fa-map-marker text-primary mr-2"></i><span class="text-primary mr-2"></span> {{design.address}}</div>
                                    </div>
                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.ratings">
                                      <div class="h6 mt-2"><i class="ni ni-trophy text-warning mr-2"></i><span class="text-warning mr-2"></span> <star-rating :rating="parseFloat(design.ratings).toFixed(2)" :inline="true" :star-size="20" :read-only="true" :increment="0.01"></star-rating><span v-if="design.ratings"> Rating</span></div>
                                    </div>
                                    <div class="col-lg-4 mt-3 col-md-6 d-flex" v-if="design.business_hours">
                                      <i class="fa fa-clock-o text-primary mr-2"></i>
                                      <div>
                                        <span  v-if="bv" @click="openbusinesshours(design.business_hours)" class="h6" style="cursor: pointer;font-size: .98rem;">{{bhours.day}}  {{bhours.from}}-{{bhours.to}} <i class="fa fa-chevron-down fa-small"></i></span>
                                      </div>
                                    </div>
                                    <div class="col-lg-4 mt-3 col-md-6 d-flex" v-if="design.business_hours">
                                      <i class="fa fa-coffee text-yellow mr-2"></i>
                                      <div>
                                        <span v-if="lv" @click="openleisurehours(design.leisure_hours)" class="h6" style="cursor: pointer;">{{lhours.day}}  {{lhours.from}}-{{lhours.to}} <i class="fa fa-chevron-down fa-small"></i></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div v-if="lang=='arabic'">
                              <h3>{{design.business_name_arabic}}</h3>
                              <h3 v-if="!design.business_name_arabic">{{design.business_name_english}}</h3>
                              <div class="mx-auto mt-3 font-weight-400" style="max-width: 600px">{{design.business_description_arabic}} <span v-if="!design.business_name_arabic">{{design.business_description_english}} </span></div>
                              <div class="row text-left p-0 p-md-2 mt-3 justify-content-center">
                                <div class="col-lg-8 border rounded shadow">
                                  <div class="row p-3" v-if="businessloaded">
                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.business_category">
                                      <div class="h6 mt-2" v-if="design.business_category"><span class="text-success mr-2"></span> {{design.business_category.business_category_name_ar}} <i class="fa fa-cubes text-success"></i></div>
                                    </div>
                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.business_subcategory_name_ar">
                                      <div class="h6 mt-2" v-if="design.business_subcategory"><span class="text-warning mr-2"></span> {{design.business_subcategory.business_subcategory_name_ar}}<i class="fa fa-sitemap text-warning"></i></div>
                                    </div>
                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.user_phone">
                                      <div class="h6 mt-2"><span class="text-info"></span> {{design.user_phone}}<i class="fa fa-phone ml-2 text-info"></i></div>
                                    </div>
                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.business_email">
                                      <div class="h6 mt-2 d-flex"><i class="fa fa-envelope text-danger mr-2"></i><span class="text-danger mr-2"></span> <a :href='"mailto:"+design.business_email+"?subject=بريد إلكتروني من موقع نبني&body=مرحبًا ، أريد معرفة المزيد عن خدماتك."' class="text-dark overflow-hidden" target="_blank"><span class="overflow-hidden">{{design.business_email}}</span></a></div>
                                    </div>
                                    <div class="col-lg-4 mt-2 col-md-6" v-if="design.address">
                                      <div class="h6 mt-2"><span class="text-primary mr-2"></span> {{design.address_ar}}<span v-if="!design.address_ar">{{design.address}}</span><i class="fa fa-map-marker text-primary mr-2"></i></div>
                                    </div>
                                    <div class="col-lg-4 mt-2 col-md-6 arabic" v-if="design.ratings">
                                      <div class="h6 mt-2"><i class="ni ni-trophy text-warning mr-2"></i><span class="text-warning mr-2"></span> <star-rating :inline="true" :star-size="20" :rating="parseFloat(design.ratings).toFixed(2)" :read-only="true" :increment="0.01"></star-rating> <span v-if="design.ratings"> تقييم</span></div>
                                    </div>
                                    <div class="col-lg-4 mt-3 col-md-6 d-flex" v-if="design.business_hours">
                                      <i v-if="bv" class="fa fa-clock-o text-primary mr-2"></i>
                                      <div>
                                        <span v-if="bv" @click="openbusinesshours(design.business_hours)" class="h6" style="cursor: pointer;">{{bhours.day}}  {{bhours.from}}-{{bhours.to}} <i class="fa fa-chevron-down fa-small"></i></span>
                                      </div>
                                    </div>
                                    <div class="col-lg-4 mt-3 col-md-6 d-flex" v-if="design.leisure_hours">
                                      <i v-if="lv" class="fa fa-coffee text-yellow mr-2"></i>
                                      <div>
                                        <span v-if="lv" @click="openleisurehours(design.leisure_hours)" class="h6" style="cursor: pointer;">{{lhours.day}}  {{lhours.from}}-{{lhours.to}} <i class="fa fa-chevron-down fa-small"></i></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row py-3 arabic" v-if="!businessloaded">
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer icon-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-3 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-1 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                            <!-- <div class="row mt-4 text-left">
                              
                            </div> -->
                            
                        </div>
                        <div class="mt-5 py-3 border-top text-center portfolio container">
                            <div class="row">
                                <tabs :fill="false" centered class="flex-column flex-md-row w-100">
                                  <tab-pane title="Collections">
                                      <span slot="title" v-if="lang=='english'">
                                          <i class="ni ni-cloud-upload-96"></i>
                                            Projects
                                      </span>
                                      <span slot="title" v-if="lang=='arabic'">
                                          <i class="ni ni-cloud-upload-96"></i>
                                          المشاريع
                                      </span>
                                       
                                      <div class="mt-3 row px-3" v-if="collectionData.length >0">
                                        <div class="col-lg-3 mb-3" v-for="collections in collectionData" :key="collections._id">
                                            <router-link  :to="'/project/'+collections.project_id" class="card bg-default shadow border-0 rounded">

                                                <div v-if="collections.project_items.length" style="height: 150px; overflow: hidden;">
                                                  <img :src="collections.project_items[0].item_img[0]" class="rounded card-img-top" :alt="collections.project_name">
                                                </div>
                                                <div v-if="!collections.project_items.length" style="height: 150px; overflow: hidden;">
                                                  <img src="/img/theme/add_design_en.jpg" class="rounded card-img-top" alt="add new design">
                                                </div>
                                                <blockquote class="card-blockquote">
                                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                                         class="svg-bg">
                                                        <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                                        <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                                    </svg>
                                                    <div v-if="lang=='english'">
                                                      <h4 class="display-5 font-weight-bold text-white">{{collections.project_name}}</h4>
                                                      <p class="text-white">{{collections.project_description}}</p>
                                                    </div>
                                                    <div v-if="lang=='arabic'">
                                                      <h4 class="display-5 font-weight-bold text-white">{{collections.project_name_ar}}<span v-if="!collections.project_name_ar">{{collections.project_name}}</span></h4>
                                                      <p class="text-white">{{collections.project_description_ar}} <span v-if="!collections.project_description_ar">{{collections.project_description}}</span></p>
                                                    </div>
                                                </blockquote>
                                            </router-link>
                                        </div>
                                      </div>
                                      <div class="row justify-content-center">
                                        <!-- no result -->
                                        <div class="col-lg-6" v-if="collectionData.length==0">
                                          <div class="p-5 no-result">
                                            <img src="/img/theme/empty_result.png" class="img-fluid" alt="Add new project">
                                            <p v-if="lang=='english'" class="font-weight-400">Business has not added any project yet.</p>
                                            <p v-if="lang=='arabic'" class="font-weight-400">لم تتم اضافة أي مشاريع</p>
                                          </div>
                                        </div>
                                      </div>
                                  </tab-pane>

                                  <tab-pane title="Portfolio">
                                    <span slot="title" v-if="lang=='english'">
                                        <i class="fa fa-photo mr-2"></i>
                                        Portfolio
                                    </span>
                                    <span slot="title" v-if="lang=='arabic'">
                                        <i class="fa fa-photo mr-2"></i>
                                        محفظة
                                    </span>
                                    <div class="mt-3 row px-3" v-if="collectionData.length >0">
                                      <div class="col-lg-3 mb-4" v-for="portf in portfolio" :key="portf._id">
                                        <card class="border" hover shadow body-classes="p-2 pb-3">
                                            <router-link v-if="portf.item_type=='Design'" :to="'/design/'+portf.item_id">
                                              <img v-if="portf.item_img" :src="portf.item_img[0]" class="img-fluid shadow card-img-top mb-4" :alt="portf.item_name">
                                            </router-link>
                                            <router-link v-if="portf.item_type!='Design'" :to="'/product/'+portf.item_id">
                                                <img v-if="portf.item_img" :src="portf.item_img[0]" class="img-fluid shadow card-img-top mb-4" :alt="portf.item_name">
                                            </router-link>
                                            <div v-if="lang=='english'">
                                              <router-link v-if="portf.item_type=='Design'" :to="'/design/'+portf.item_id"  class="h6"><span v-if="portf.item_name">{{portf.item_name}}</span></router-link>
                                             <router-link v-if="portf.item_type!='Design'" :to="'/product/'+portf.item_id" class="h6"><span v-if="portf.item_name">{{portf.item_name}}</span></router-link>
                                              <!-- <router-link to="#" class="h6">{{portf.item_name}}</router-link> -->
                                              <p class="description business_description mt-2">{{portf.item_description}}</p>
                                            </div>
                                            <div v-if="lang=='arabic'">
                                              <router-link v-if="portf.item_type=='Design'" :to="'/design/'+portf.item_id"  class="h6"><span v-if="portf.item_name">{{portf.item_name_ar}}<span v-if="!portf.item_name_ar">{{portf.item_name}}</span></span></router-link>
                                              <router-link v-if="portf.item_type!='Design'" :to="'/product/'+portf.item_id" class="h6"><span v-if="portf.item_name">{{portf.item_name_ar}}<span v-if="!portf.item_name_ar">{{portf.item_name}}</span></span></router-link>
                                              <p class="description business_description mt-2">{{portf.item_description_ar}}<span v-if="!portf.item_description_ar">{{portf.item_description}}</span></p>
                                            </div>
                                            <div class="mt-4">
                                                <div class="float-left" v-if="lang=='english'">
                                                      <base-button size="sm" type="secondary" outline class="" v-if="!itemexist(portf._id)" @click="opencollectionwindow(portf)">
                                                         <i class="fa fa-bookmark mr-1"></i> Save
                                                      </base-button>
                                                      <base-button  size="sm" type="success" class="" v-if="itemexist(portf._id)" @click="opencollectionwindow(portf)">
                                                         <i class="fa fa-check mr-1"></i> Saved
                                                      </base-button>
                                                  </div>
                                                  <div class="float-left" v-if="lang=='arabic'">
                                                      <base-button size="sm" type="secondary" outline class="" v-if="!itemexist(portf._id)" @click="opencollectionwindow(portf)">
                                                         <i class="fa fa-bookmark mr-1"></i> حفظ
                                                      </base-button>
                                                      <base-button  size="sm" type="success" class="" v-if="itemexist(portf._id)" @click="opencollectionwindow(portf)">
                                                         <i class="fa fa-check mr-1"></i> تم الحفظ
                                                      </base-button>
                                                  </div>
                                                <div class="float-right">
                                                     <base-button type="secondary" outline v-if="!likeexist(portf.item_id)" size="sm" icon="ni ni-favourite-28" @click="likeitem(portf)"> {{portf.item_likes}}</base-button>
                                                       <base-button type="danger" v-if="likeexist(portf.item_id)" size="sm" @click="unlikeitem(portf)" icon="ni ni-favourite-28">{{portf.item_likes}}</base-button>
                                                       <base-button type="success" size="sm" @click="functionshareproduct(portf)" icon="fa fa-share"></base-button>
                                                </div>
                                            </div>
                                        </card>
                                      </div>
                                    </div>
                                    <!-- no result found -->
                                    <div class="row justify-content-center">
                                      <!-- no result -->
                                      <div class="col-lg-6" v-if="collectionData.length==0">
                                        <div class="p-5 no-result">
                                          <img src="/img/theme/empty_result.png" class="img-fluid" alt="add new project">
                                          <p v-if="lang=='english'" class="font-weight-400">Business has not added any project yet.</p>
                                          <p v-if="lang=='arabic'" class="font-weight-400">الأعمال لم تضف أي مشروع حتى الآن.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </tab-pane>
                                </tabs>
                            </div>
                        </div>
                        <div class="row px-2 px-md-5 mb-4 reviews">
                          <div class="col-lg-12" >
                            <p class="border-bottom w-100 text-left" v-if="lang=='english'">Write your review for <span class="font-weight-400">{{design.business_name_english}}</span></p>
                            <p class="border-bottom w-100 text-right arabic" v-if="lang=='arabic'">اكتب رأيك عن {{design.business_name_arabic}}<span class="font-weight-400" v-if="!design.business_name_arabic">{{design.business_name_english}}</span></p>
                          </div>
                          <div class="col-lg-12" v-if="!reviewexist()">
                            <a  @click="openrating(design)" class="btn btn-outline-secondary btn-lg w-100" style="cursor: pointer;"><i class="fa fa-star mr-2"></i> <span v-if="lang=='english'">Rate this Business</span><span v-if="lang=='arabic'">قيم هذا العمل</span></a>
                          </div>
                          <div class="mt-3 col-lg-12 media-comment text-left" v-for="(comments) in commentsdata" :key="comments._id">
                            <div class="media p-2 rounded border" v-if="lang=='english'">
                              <img v-if="comments.user_dp ==! undefined" :src="comments.user_dp" class="avatar avatar-lg media-comment-avatar rounded-circle" :alt="comments.user_name">
                              <img v-if="comments.user_dp == undefined" src="/img/theme/user.png" class="avatar avatar-lg media-comment-avatar rounded-circle" :alt="comments.user_name">
                              <div class="media-body pl-3 pr-2"> 
                                <div class="media-comment-text">
                                  <p class="mt-0 h6">
                                    <a :href="'/business/'+comments.user_id" v-if="comments.user_type=='Business'">
                                      <span style="font-weight: bold;">@{{comments.user_name}}</span></a>
                                      <a href="#" v-if="comments.user_type!='Business'">
                                      <span style="font-weight: bold;">@{{comments.user_name}}</span></a> rated this business <star-rating :rating="comments.rating" :show-rating="false"  :inline="true" :star-size="20" :read-only="true" :increment="0.01"></star-rating>
                                  </p>
                                  <p class="text-sm mb-0 lh-160">"{{comments.comment}}"</p> 
                                  <div class="icon-actions mt-2">
                                    <base-button type="success" size="sm" outline v-if="oid==comments.comment_by" class="no-outline" icon="fa fa-pencil" id="" v-on:click="editrating(comments)">Edit</base-button>
                                    <base-button outline type="danger" size="sm" v-if="oid==comments.comment_by" class="no-outline" icon="fa fa-trash" id="" v-on:click="deleterating(comments)">Delete</base-button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="media p-2 rounded border arabic" v-if="lang=='arabic'">
                              <img v-if="comments.user_dp ==! undefined" :src="comments.user_dp" class="avatar avatar-lg media-comment-avatar rounded-circle" :alt="comments.user_name">
                              <img v-if="comments.user_dp == undefined" src="/img/theme/user.png" class="avatar avatar-lg media-comment-avatar rounded-circle" :alt="comments.user_name">
                              <div class="media-body pl-3 pr-2"> 
                                <div class="media-comment-text">
                                  <p class="mt-0 h6 text-right">
                                    <a :href="'/business/'+comments.user_id" v-if="comments.user_type=='Business'">
                                      <span style="font-weight: bold;">@{{comments.user_name}} </span></a>
                                      <a href="#" v-if="comments.user_type!='Business'">
                                      <span style="font-weight: bold;">@{{comments.user_name}} </span></a> قيم هذا العمل <star-rating :inline="true" :star-size="20" :show-rating="false" :rating="comments.rating" :read-only="true" :increment="0.01"></star-rating>
                                  </p>
                                  <p class="text-sm mb-0 text-right lh-160">"{{comments.comment}}"</p> 
                                  <div class="icon-actions mt-2 float-right">
                                    <base-button type="success" size="sm" outline v-if="oid==comments.comment_by" class="no-outline" icon="fa fa-pencil ml-2" id="" v-on:click="editrating(comments)">تعديل</base-button>
                                    <base-button outline type="danger" size="sm" v-if="oid==comments.comment_by" class="no-outline" icon="fa fa-trash ml-2" id="" v-on:click="deleterating(comments)">حذف</base-button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
      <!-- Business Hours -->
      <modal :show.sync="businesshours">
        <h6 slot="header" class="modal-title" id="modal-title-default">
          <span v-if="lang=='english'">Business Hours</span>
          <span v-if="lang=='arabic'">ساعات العمل</span>
        </h6>

        <template>
          <form @submit.prevent> 
            <div class="mt-3">
            <div class="row" >
              <div class="col-lg-4 col-4">
                  <p class="h5" v-if="lang=='english'">Day</p>
                  <p class="h5" v-if="lang=='arabic'">يوم</p>
              </div>
              <div class="col-lg-4 col-4">
                  <p class="h5" v-if="lang=='english'">Opening Time</p>
                  <p class="h5" v-if="lang=='arabic'">وقت مفتوح</p>
              </div>
              <div class="col-lg-4 col-4">
                  <p class="h5" v-if="lang=='english'">Closing Time</p>
                  <p class="h5" v-if="lang=='arabic'">وقت الإغلاق</p>
              </div>
            </div>
            <div class="row mt-3" v-for="(hours,index) in businesshoursdata" :key="index">
               <div class="col-lg-4 col-4 bg-light bg-light py-2" v-if="day==hours.day">
                    <p class="mb-0 font-weight-bold">{{hours.day}}</p>
                </div>
                <div class="col-lg-4 col-4" v-if="day!=hours.day">
                     <p class="mb-0">{{hours.day}}</p>
                </div>
                <div class="col-lg-4 col-4 bg-light bg-light py-2" v-if="day==hours.day">
                    <p class="mb-0 font-weight-bold" v-if="hours.from==': undefined' || hours.from=='' || hours.from==': '">Closed</p>
                    <p class="mb-0 font-weight-bold" v-if="hours.from!=': undefined' && hours.from!='' && hours.from!=': '">{{hours.from}}</p>
                </div>
                <div class="col-lg-4 col-4" v-if="day!=hours.day">
                    <p class="mb-0" v-if="hours.from==': undefined' || hours.from=='' || hours.from==': '">Closed</p>
                    <p class="mb-0" v-if="hours.from!=': undefined' && hours.from!='' && hours.from!=': '">{{hours.from}}</p>
                </div>
                <div class="col-lg-4 col-4 bg-light bg-light py-2" v-if="day==hours.day">
                    <p class="mb-0 font-weight-bold" v-if="hours.to==': undefined' || hours.to=='' || hours.to==': '"></p>
                    <p class="mb-0 font-weight-bold" v-if="hours.to!=': undefined' && hours.to!='' && hours.to!=': '">{{hours.to}}</p>
                </div>
                <div class="col-lg-4 col-4" v-if="day!=hours.day">
                    <p class="mb-0" v-if="hours.to==': undefined' || hours.to=='' || hours.to==': '"></p>
                    <p class="mb-0" v-if="hours.to!=': undefined' && hours.to!='' && hours.to!=': '">{{hours.to}}</p>
                </div>
            </div>
            </div>
          </form>
        </template>

        <template slot="footer">
            <base-button type="primary" id="updatebtn1" @click="businesshours = false">Close
            </base-button>
        </template>
      </modal>
      <!-- modal leisurehours -->
      <modal :show.sync="leisurehours">
            <h6 slot="header" class="modal-title" id="modal-title-default">
              <span v-if="lang=='english'">Break Hours</span>
              <span v-if="lang=='arabic'">ساعات الراحة</span>
            </h6>
            <template>
              <form @submit.prevent> 
                <div class="mt-3">
                <div class="row" >
                  <div class="col-lg-4 col-4">
                      <p class="h5" v-if="lang=='english'">Day</p>
                      <p class="h5" v-if="lang=='arabic'">يوم</p>
                  </div>
                  <div class="col-lg-4 col-4">
                      <p class="h5" v-if="lang=='english'">From</p>
                      <p class="h5" v-if="lang=='arabic'">من عند</p>
                  </div>
                  <div class="col-lg-4 col-4">
                      <p class="h5" v-if="lang=='english'">To</p>
                      <p class="h5" v-if="lang=='arabic'">إلى</p>
                  </div>
                </div>
                <div class="row mt-3" v-for="(leisure,index) in leisurehoursdata" :key="index">
                  <div class="col-lg-4 col-4 bg-light py-2" v-if="day==leisure.day">
                      <p class="mb-0 font-weight-bold">{{leisure.day}}</p>
                  </div>
                  <div class="col-lg-4 col-4" v-if="day!=leisure.day">
                      <p class="mb-0">{{leisure.day}}</p>
                  </div>
                  <div class="col-lg-4 col-4 bg-light py-2" v-if="day==leisure.day">
                      <p class="mb-0 font-weight-bold" v-if="leisure.from==': undefined' || leisure.from=='' || leisure.from==': '">Closed</p>
                      <p class="mb-0 font-weight-bold" v-if="leisure.from!=': undefined' && leisure.from!='' && leisure.from!=': '">{{leisure.from}}</p>
                  </div>
                  <div class="col-lg-4 col-4" v-if="day!=leisure.day">
                      <p class="mb-0" v-if="leisure.from==': undefined' || leisure.from=='' || leisure.from==': '">Closed</p>
                      <p class="mb-0" v-if="leisure.from!=': undefined' && leisure.from!='' && leisure.from!=': '">{{leisure.from}}</p>
                  </div>
                  <div class="col-lg-4 col-4 bg-light py-2" v-if="day==leisure.day">
                    <p class="mb-0 font-weight-bold" v-if="leisure.to==': undefined' || leisure.to=='' || leisure.to==': '"></p>
                      <p class="mb-0 font-weight-bold" v-if="leisure.to!=': undefined' && leisure.to!='' && leisure.to!=': '">{{leisure.to}}</p>
                  </div>
                  <div class="col-lg-4 col-4" v-if="day!=leisure.day">
                      <p class="mb-0" v-if="leisure.to==': undefined' || leisure.to=='' || leisure.to==': '"></p>
                      <p class="mb-0" v-if="leisure.to!=': undefined' && leisure.to!='' && leisure.to!=': '">{{leisure.to}}</p>
                  </div>
                </div>
                </div>
              </form>
            </template>

            <template slot="footer">
                <base-button type="primary" id="updatebtn1" @click="leisurehours = false">Close
                </base-button>
            </template>
      </modal>
      <!-- modal  collection window -->
      <modal :show.sync="sharebtn">
        <p
          id="modal-title-default"
          slot="header"
          class="modal-title"
        >
          Share On
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
            Close
          </base-button>
        </template>
      </modal>
      <!-- review rating window -->
      <modal :show.sync="ratingwindow">
        <p
          id="modal-title-default"
          slot="header"
          class="modal-title"
        >
          <span v-if="lang=='english'">Rate this Business</span>
          <span v-if="lang=='arabic'">قيم هذا العمل</span>
        </p>
        <template>
          <form @submit.prevent>
              <div class="row justify-content-center">
                <div class="col-lg-8 mb-3">
                  <label v-if="lang=='english'" class="form-control-label">Rating</label>
                  <label v-if="lang=='arabic'" class="form-control-label">تقييم</label>
                  <star-rating v-model="rating"></star-rating>
                </div>
                <div class="col-lg-8">
                  <label v-if="lang=='english'" class="form-control-label">Review</label>
                  <label v-if="lang=='arabic'" class="form-control-label">مراجعة</label>
                  <base-input
                    placeholder="Write your review"
                    addon-left-icon="fa fa-commenting"
                    v-model="review"
                    class="form-control-alternative"
                  />
                </div>
              </div>
              <div class="row justify-content-center mt-4">
                <div class="col-lg-8">
                  <base-button
                    @click="insertrating()"
                    id="savecollectionbtn"
                    size="lg"
                    type="success"
                    class="float-center"
                  >
                    <span v-if="lang=='english'">Submit</span>
                    <span v-if="lang=='arabic'">إرسال</span>
                  </base-button>
                </div>
              </div>
            </form>
        </template>

        <template slot="footer">
          <base-button
            type="link"
            class="ml-auto mt--3"
            @click="ratingwindow = false"
          >
            <span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">أغلق</span>
          </base-button>
        </template>
      </modal>
      <!-- Edit review rating window -->
      <modal :show.sync="editratingwindow">
        <p
          id="modal-title-default"
          slot="header"
          class="modal-title"
        >
          <span v-if="lang=='english'">Rate this Business</span>
          <span v-if="lang=='arabic'">قيم هذا العمل</span>
        </p>
        <template>
          <form @submit.prevent>
              <div class="row justify-content-center">
                <div class="col-lg-8 mb-3">
                  <label v-if="lang=='english'" class="form-control-label">Rating</label>
                  <label v-if="lang=='arabic'" class="form-control-label">تقييم</label>
                  <star-rating v-model="reviewdata.rating"></star-rating>
                </div>
                <div class="col-lg-8">
                  <label v-if="lang=='english'" class="form-control-label">Review</label>
                  <label v-if="lang=='arabic'" class="form-control-label">مراجعة</label>
                  <base-input
                    placeholder="'Enter Review"
                    addon-left-icon="fa fa-commenting"
                    v-model="reviewdata.comment"
                    class="form-control-alternative"
                  />
                </div>
              </div>
              <div class="row justify-content-center mt-4">
                <div class="col-lg-8">
                  <base-button
                    @click="updaterating()"
                    id="updatecollectionbtn"
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
            @click="editratingwindow = false"
          >
            <span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">أغلق</span>
          </base-button>
        </template>
      </modal>
      
    </div>
</template>
<script>
  import axios from "axios";
  import VueSwal from 'vue-swal';
  import _ from 'lodash';
  import StarRating from 'vue-star-rating';
  import moment from 'moment';
  export default {
    name: 'Business',
    components: { StarRating },
    props:['id'],
    data() {
      return {
        sharing: {
            url: 'https://news.vuejs.org/issues/180',
            title: 'Say hi to nabnee! A brand new, extremely fast development setup for Vue.',
            description: 'This week, I’d like to introduce you to "nabnee", which means "We Build". It’s a brand new development setup created by Evan You.',
            quote: 'The hot reload is so fast it\'s near instant. - Evan You',
            hashtags: 'vuejs,vite,javascript',
            twitterUser: 'nabneedotcom'
          },
          networks: [
            { network: 'email', name: 'Email', icon: 'fa fa-lg fa-envelope', color: '#333333' },
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
        sharebtn:false,
        design: [],
        lv:'',
        bv:'',
        reviewtems:[],
        user_id:localStorage.getItem('_id'),
        rating:0,
        review:'',
        reviewdata:[],
        day:'',
        bhours:{day:'',from:'',to:''},
        lhours:{day:'',from:'',to:''},
        commentsdata: [],
        user_likes:[],
        saveditems:[],
        cover_image:'',
        portfolio:[],
        collectionData:[],
        usercollectionData:[],
        deleteitem:false,
        businesshours:false,
        leisurehours:false,
        ratingwindow:false,
        editratingwindow:false,
        businesshoursdata:[],
        businessloaded:0,
        leisurehoursdata:[],
        lang:localStorage.getItem('lang'),
        oid:localStorage.getItem('_id'),
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
          var today = new Date();
          const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          };
          const time = new Intl.DateTimeFormat('en-US', options).format(today)
          console.log(time)
          
          var day = today.getDay();
          var daylist = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
          this.day=daylist[day];
          console.log("Today is : " + daylist[day] + ".");
      this.path=process.env.VUE_APP_API_ENDPOINT;
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_id',{"user_id":this.$route.params.id},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.design=response.data.details[0];
        this.cover_image=this.design.cover_image;
        this.businessloaded=1;
        let bhours=JSON.parse(this.design.business_hours);
        let bhour={};
        let lhour={};
        let bv=0;
        bhours.forEach(function (arrayItem) {
            if(arrayItem.from==''){
                bv++;
            }

            if(arrayItem.day==daylist[day])
            {
                console.log(arrayItem.day);
                console.log(daylist[day]);
                 bhour=arrayItem;
                 if(arrayItem.from==''){
                        bhour.to="Closed";
                 }
                let fromtime=moment(arrayItem.from, "HH:mm a");
                let totime=moment(arrayItem.to, "HH:mm a");
                let currenttime=moment(time, "HH:mm a");
                console.log(fromtime)
                console.log(totime)
                console.log(currenttime);
                 if(fromtime.hour() < currenttime.hour() &&  totime.hour() > currenttime.hour()){
                        bhour.day="Open Now";
                 }else if((fromtime.hour() == currenttime.hour() && fromtime.minute() <= currenttime.minute()) || (totime.hour() == currenttime.hour() && fromtime.minute() <= currenttime.minute())){

                    bhour.day="Open Now";

                   }else{
                    bhour.day="Closed";
                   }
                
            }
        });
        console.log(bv);
        if(bv==7){
            this.bv=false;
        }else{
            this.bv=true;
        }
        this.bhours=bhour;
        if(this.bhours.from ==': undefined' || this.bhours.from =='' || this.lhours.from ==': '){
            this.bhours.from='';
            this.bhours.to="Closed";
        }
        console.log(bhour)
        let lv=0;
        console.log(this.design.leisure_hours);
        if(this.design.leisure_hours!='""'){
        let lhours=JSON.parse(this.design.leisure_hours);
        
            lhours.forEach(function (larrayItem) {
                if(larrayItem.from=='' || larrayItem.from==': '){
                    lv++;
                }
                if(larrayItem.day==daylist[day])
                {
                    lhour=larrayItem;
                    // if(larrayItem.from==''){
                    //     lhour.to="Closed";
                    // }
                    
                }
            });
        }else{

            this.lv=false;
            console.log(this.lv);
        }
        console.log(lv);
            if(lv==7){
                this.lv=false;
            }else{
                this.lv=true;
            }
        
        this.lhours=lhour;
        if(this.lhours.from ==': undefined' || this.lhours.from =='' || this.lhours.from ==': '){
            this.lhours.from='';
            this.lhours.to="Closed";
        }
        console.log(this.lhours)
        // for (var day of this.design.business_hours) {
        //     console.log(day);
        // }

        // if(this.design.user_reviews){
        //   let j=0;
        // for (let i = 0; i < this.design.user_reviews.length; i++) {

        //     axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_oid',{"user_oid":response.data.details[0].user_reviews[i].comment_by},this.auth).then(response1 => {
        //     console.log(response1);
        //     if(response1.data.details){
              
        //       console.log(j)
        //       console.log(this.design.user_reviews[j]);
        //       console.log(response.data.details[0].user_reviews[i].rating);
        //       var pair = {user_dp: response1.data.details[0].user_dp,user_name:response1.data.details[0].user_name,comment:this.design.user_reviews[j].comment,rating:this.design.user_reviews[j].rating};
        //       this.commentsdata.push(pair);
        //       j++;

        //      }
        //     })
          
        //   }
        //   console.log(this.commentsdata);
        //  }

        axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_project_by_user',{"created_by":this.design._id,"status" :"approved"},this.auth)
      .then(response => {
        console.log(response);
        console.log(this.collectionData);
        if(response.data.details){
        this.collectionData=response.data.details;

        let portfolio =  _.map(this.collectionData, projects => (projects.project_items));
        if(portfolio){
            for (var i = 0; i < portfolio.length; i++) {
            for (var j = 0; j < portfolio[i].length; j++) {
            this.portfolio.push(portfolio[i][j])
            }

           }
        
        }
        console.log(this.portfolio);
        }else{
            this.collectionData=[];
        }
            
      })
      // console.log(this.design.user_reviews);
      // let portfolio =  _.map(this.collectionData, projects => (projects.collection_items));
        // for (var i = 0; i < this.design.user_reviews.length; i++) {
        //     this.saveditems.push(this.design.user_reviews[i].comment_by)
        // }
        //this.commentsdata=response.data.details[0].user_reviews;
        if(this.design.user_reviews){
          let j=0;
          this.commentsdata=[];
        for (let i = 0; i < this.design.user_reviews.length; i++) {
            this.reviewtems.push(this.design.user_reviews[i].comment_by);

            axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_oid',{"user_oid":this.design.user_reviews[i].comment_by},this.auth).then(response1 => {
            console.log(response1);
            if(response1.data.details){
              var pair = {user_dp: response1.data.details[0].user_dp,user_id: response1.data.details[0].user_id,user_type: response1.data.details[0].user_type,user_name:response1.data.details[0].user_name,comment:this.design.user_reviews[i].comment,comment_by:this.design.user_reviews[i].comment_by,rating:this.design.user_reviews[i].rating};
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
        this.usercollectionData=response.data.details;
        let portfolio =  _.map(this.usercollectionData, projects => (projects.collection_items));
        for (var i = 0; i < portfolio.length; i++) {
            for (var j = 0; j < portfolio[i].length; j++) {
            this.saveditems.push(portfolio[i][j]._id)
        }
        }
        console.log(this.saveditems);
        }
            
      })
    },

    metaInfo() {
      return {
        title: this.design.business_name_english,
        titleTemplate: '%s | nabnee',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          {
            name: 'description', content: this.design.business_description_english,
          },
          {
            property: 'og:title',
            content: this.design.business_name_english,
            // template: '%s - My page',
            template: chunk => `${chunk} - nabnee`,
            vmid: 'og:title'
          },
          {
            property: 'og:description',
            content: this.design.business_description_english,
            vmid: 'og:description'
          },
          {
            property: 'og:image',
            content: this.cover_image,
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
     getalldata(){
         axios
          .post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_id',{"user_id":this.$route.params.id},this.auth)
          .then(response => {
            console.log(response);
            if(response.data.details){
            this.design=response.data.details[0];
            this.cover_image=this.design.cover_image;
            this.businessloaded=1;
            //this.commentsdata=response.data.details[0].user_reviews;
            if(this.design.user_reviews){
              let j=0;
              this.commentsdata=[];
              this.reviewtems=[];
                for (let i = 0; i < this.design.user_reviews.length; i++) {
                this.reviewtems.push(this.design.user_reviews[i].comment_by);

                axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_oid',{"user_oid":this.design.user_reviews[i].comment_by},this.auth).then(response1 => {
                console.log(response1);
                if(response1.data.details){
                  var pair = {user_dp: response1.data.details[0].user_dp,user_name:response1.data.details[0].user_name,comment:this.design.user_reviews[i].comment,comment_by:this.design.user_reviews[i].comment_by,rating:this.design.user_reviews[i].rating};
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
            this.usercollectionData=response.data.details;
            let portfolio =  _.map(this.usercollectionData, projects => (projects.collection_items));
            for (var i = 0; i < portfolio.length; i++) {
                for (var j = 0; j < portfolio[i].length; j++) {
                this.saveditems.push(portfolio[i][j]._id)
            }
            }
            console.log(this.saveditems);
            }
                
          })

          // axios
          // .post(process.env.VUE_APP_API_ENDPOINT+'read_project_by_user',{"created_by":this.design._id,"status" :"approved"},this.auth)
          // .then(response => {
          //   console.log(response);
          //   if(response.data.details){
          //   this.collectionData=response.data.details;
          //   let portfolio =  _.map(this.collectionData, projects => (projects.project_items));
          //   for (var i = 0; i < portfolio.length; i++) {
          //       for (var j = 0; j < portfolio[i].length; j++) {
          //       this.portfolio.push(portfolio[i][j])
          //   }
          //   }
          //   console.log(this.portfolio);
          //   }
                
          // })
      },
      openbusinesshours(row){
        console.log(row)
        this.businesshours=true;
       
        try { 
                JSON.parse(row); 
                console.log("true");
                 this.businesshoursdata=JSON.parse(row);
                 console.log(this.businesshoursdata);
            } catch (error) { 
                console.log(error);
                this.businesshoursdata=JSON.parse(row);
            } 
        
      },
      openrating(row){
        console.log(row)
        console.log(localStorage.getItem('accessToken'));
        if(localStorage.getItem('accessToken')){
            this.ratingwindow=true;
            this.reviewdata=row;
        }else{
           localStorage.setItem('url',window.location.pathname);
           this.$router.push('/login');
        }  
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
        functionshareproduct:function(row) {
          axios.post('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDGuJpq1O1wrigLq-ScHPoz3UnXhQQbv5E',{'longDynamicLink': 'https://nabnee.page.link/?link=https://nabnee.com/inventory/'+row.item_id+'&apn=com.nabnee.app&st=Nabnee&utm_source=AndroidApp'},{'Content-Type':'application/json'})
          .then(response => {
            console.log(response);
            this.sharing.url= ''+response.data.shortLink+'\n\n',
            this.sharing.title= ''+row.item_name+': '+row.item_description.substr(0, 150)+'...\n\n',
            this.sharing.description= "",
            this.sharing.quote= "",
            this.sharing.hashtags= '',
            this.sharebtn = true;
          })
        },
      itemexist(value){
        return this.saveditems.includes(value);
      },
      likeexist(value){
        return this.user_likes.includes(value);
       },
      likeitem(row){
        console.log(localStorage.getItem('accessToken'));
        if(localStorage.getItem('accessToken')){
        axios.post(process.env.VUE_APP_API_ENDPOINT+'update_inventory_public',{"attribute" : "like","user_id" : localStorage.getItem('user_id'),"item_id" : row.item_id,optype : "Add"},this.auth)
          .then(response => {
            console.log(response);
             this.getalldata()
            })
        }else{
        localStorage.setItem('url',window.location.pathname);
        this.$router.push('/login');
       }  
      },
      unlikeitem(row){
        if(localStorage.getItem('accessToken')){
         axios.post(process.env.VUE_APP_API_ENDPOINT+'update_inventory_public',{"attribute" : "like","user_id" : localStorage.getItem('user_id'),"item_id" : row.item_id,optype : "Remove"},this.auth)
          .then(response => {
            console.log(response);
             this.getalldata();
            })
        }else{
          localStorage.setItem('url',window.location.pathname);
          this.$router.push('/login');
        }
      },
      editrating(row){
        console.log(row)
        this.editratingwindow=true;
        this.reviewdata=row;
      },
      reviewexist(){
        var value=localStorage.getItem('_id');
        console.log(this.reviewtems)
        return this.reviewtems.includes(value);
      },
      copylink(id){
        var inp =document.createElement('input');
        document.body.appendChild(inp)
        inp.value ='https://nabnee.page.link/?link=https://nabnee.com/newbusinessuser/'+id+'&apn=com.nabnee.app&st=Nabnee&utm_source=AndroidApp'
        inp.select();
        document.execCommand('copy',false);
        inp.remove();
        document.getElementById("copylink").classList.remove('btn-primary');
        document.getElementById("copylink").classList.add('btn-success');
        document.getElementById("copylink").innerHTML='Link copied!';
        setTimeout(function(){
          document.getElementById("copylink").classList.remove('btn-success');
          document.getElementById("copylink").classList.add('btn-primary');
          document.getElementById("copylink").innerHTML="Invite link";
        }, 2000);
      },
      insertrating() {
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'update_business_public',{"user_review" : { "rating" : this.rating,"comment" :this.review,"comment_by" : localStorage.getItem('_id')},"business_id" :this.reviewdata.user_id},this.auth)
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
        ref.ratingwindow = false;
        ref.getalldata();
      }, 2000);
      })

    },
    updaterating() {
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'update_business_public',{"user_review" : { "rating" : this.reviewdata.rating,"comment" :this.reviewdata.comment,"comment_by" : localStorage.getItem('_id')},"business_id" :this.design.user_id},this.auth)
      .then(response => {
        console.log(response);
        this.message=response.data.message;
        let ref=this;
        document.getElementById("updatecollectionbtn").classList.remove('btn-primary');
        document.getElementById("updatecollectionbtn").classList.add('btn-success');
        document.getElementById("updatecollectionbtn").innerHTML='Saved';
        setTimeout(function(){
        document.getElementById("updatecollectionbtn").classList.remove('btn-success');
        document.getElementById("updatecollectionbtn").classList.add('btn-primary');
        document.getElementById("updatecollectionbtn").innerHTML="Save";
        ref.editratingwindow = false;
        ref.getalldata();
      }, 2000);
      })

    },
    deleterating(row){
        const querystring = require('querystring');

        swal({
            title: 'Are you sure?',
            text: "wan't to delete",
            icon: 'warning',
            buttons: {cancel: true,confirm: true,}
        }).then((result) => { // <--
          if (result) {
            console.log('result cloud',result)
            axios.post(process.env.VUE_APP_API_ENDPOINT+'deletecomment',{"user_review" : { "rating" : row.rating,"comment" :row.comment,"comment_by" : localStorage.getItem('_id')},"business_id" :this.design.user_id},this.auth)
          .then(response => {
          let  _this=this;
            console.log(response);
            swal({
              title:'Deleted!',
              text: 'Your rating has been deleted.',
              icon:'success',
             }).then((result) => {
              console.log(result)
              _this.getalldata();
            })
            })
           }
        });
    },
      openleisurehours(row){
        console.log(row)
        this.leisurehours=true;
        this.leisurehoursdata=JSON.parse(row);
      },
      promotebusiness(row){
        let featured=0;
        let firsttitle='';
        let firsttext='';
        let secondtitle='';
        let secondtext='';
        if(row.business_featured==0){
           featured=1;
            firsttitle='Are you sure?';
            firsttext='You want to promote this listing?';
            secondtitle='Promoted!';
            secondtext='Your listing has been promoted.';

        }else{
           firsttitle='Are you sure?';
           firsttext='You want to remove promotion form this listing?';
           secondtitle='Demoted!';
           secondtext='Your listing has been demoted.';
        }
      const querystring = require('querystring');
        swal({
            title: firsttitle,
            text: firsttext,
            icon: 'info',
            buttons: {cancel: true,confirm: true,}
        }).then((result) => { // <--
          if (result) {
            console.log('result cloud',result)
            axios.post(process.env.VUE_APP_API_ENDPOINT+'update_business_profile',querystring.stringify({ user_email:row.user_email,business_featured:featured}),this.auth1)
          .then(response => {
            console.log(response);
            swal({
              title: secondtitle,
              text: secondtext,
              icon:'success',
             }).then((result) => {
              console.log(result)
              window.location.reload()
            })
            })
           }
        });

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
            axios.post(process.env.VUE_APP_API_ENDPOINT+'update_inventory_public1',{"comment" : { "comment" :row.comment,"comment_by" : row.comment_by,"_id" : row._id},"item_id" : this.$route.params.id,optype : "Remove"},this.auth)
          .then(response => {
            let  _this=this;
            console.log(response);
            swal({
              title:'Deleted!',
              text: 'Your file has been deleted.',
              icon:'success',
             }).then((result) => {
              console.log(result)
              _this.getalldata();
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
            axios.post(process.env.VUE_APP_API_ENDPOINT+'delete_business',querystring.stringify({ user_email:row.user_email}),this.auth1)
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
    functionshare:function(row) {
        console.log(row);
        axios.post('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDGuJpq1O1wrigLq-ScHPoz3UnXhQQbv5E',{'longDynamicLink': 'https://nabnee.page.link/?link=https://nabnee.com/business/'+row.user_id+'&apn=com.nabnee.app&st=Nabnee&utm_source=AndroidApp'},{'Content-Type':'application/json'})
      .then(response => {
            console.log(response);
            this.sharing.url= ''+response.data.shortLink+'\n\n',
            this.sharing.title= ''+row.business_name_english+': '+row.business_description_english.substr(0, 150)+'...\n\n',
            this.sharing.description= '',
            this.sharing.quote= "",
            this.sharing.hashtags= '',
            this.sharebtn = true;
      })
    },
    gotoGoogle(design) {
        console.log(design.web_link)
        console.log(design.web_link.match(/http:/i))
        console.log(design.web_link.match(/https:/i))
      if (!design.web_link.match(/^https?:\/\//i)) {
        design.web_link = 'https://' + design.web_link;
      }else if(!design.web_link.match(/https:/i) && !design.web_link.match(/http:/i)) {
        design.web_link = 'http://' + design.web_link;
      }
      window.open(design.web_link);
      console.log(design.web_link);
    },
  },
  };
</script>
<style>
.profile-page .section-shaped .shape-style-1.shape-primary {
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
  /*background-image: url("/img/theme/img-1-1200x1000.jpg"); 
  background-image: linear-gradient(150deg, #0000008c 15%, #585858ab 70%, #86868694 94%), url(/img/theme/img-1-1200x1000.jpg);*/
  background-size: cover;
}
.profile-page .card-profile .card-profile-stats > div {
  text-align: center;
  margin-right: 0rem;
  padding: 0.875rem;
}
.portfolio .rounded {
    border-radius: 1.25rem !important;
}
.portfolio a.bg-default:hover, a.bg-default:focus {
    background-color: #172b4d !important;
}
.media-comment-text .h6 {
  font-size: 0.9rem;
}
.media-comment .avatar-lg {
    width: 40px;
    height: 40px;
}
.media {
  background-color: #fafafa;
}
.reviews .btn-outline-secondary {
    border-color: #dedede;
}
@media (min-width: 1200px) {
  .profile-page .container {
      max-width: 1140px;
  }
}
</style>
