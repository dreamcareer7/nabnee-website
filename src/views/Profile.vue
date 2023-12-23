<template>
  <div class="profile-page profile" style="margin-top: 90px;">
    <section class="section-profile-cover section-shaped my-0">
        <div class="shape shape-style-1 shape-primary alpha-4 user-profile" :style="'background-image: linear-gradient(150deg, #0000008c 15%, #585858ab 70%, #86868694 94%), url('+cover_image+');'">
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
        <div class="container">
            <card shadow class="card-profile" no-body>
                <div class="px-4">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 order-lg-1">
                            <div class="card-profile-image">
                                <a href="#" v-if="design.user_type=='Business'">
                                    <img v-if="design" v-lazy="design.logo" class="rounded-circle">
                                </a>
                                <a href="#" v-if="design.user_type!='Business'">
                                    <img v-if="design" v-lazy="design.user_dp" class="rounded-circle">
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-5 order-lg-3 text-center text-lg-right" v-if="lang=='english'">
                            <div class="card-profile-actions pb-2 pt-5 mt-lg-0">
                                <base-button v-if="design.user_type != 'Business'" @click="openeditprofile_user" icon="fa fa-edit" type="default" size="sm" class="float-md-right">Edit Profile</base-button>
                                <base-button v-if="design.user_type == 'Business'" @click="openeditprofile" icon="fa fa-edit" type="default" size="sm" class="float-md-right">Edit Profile</base-button>
                                <router-link v-if="design.user_type == 'Business'" class="btn btn-default btn-sm" :to="'/business/'+design.user_id"><i class="fa fa-eye"></i> Preview</router-link>
                                <base-button v-if="!design.user_fid && !design.user_gid" @click="openchangepassword" icon="fa fa-gear" type="default" size="sm" class="float-md-right mr-2"></base-button>
                                <base-button v-if="design.user_type!='Business'" @click="openeditprofile" icon="fa fa-briefcase" type="default" size="sm" class="float-md-right mr-2">Create Business Profile</base-button>
                            </div>
                        </div>
                        <div class="col-lg-5 order-lg-3 text-lg-right text-center" v-if="lang=='arabic'">
                            <div class="card-profile-actions pb-2 pt-5 py-md-4 mt-lg-0">
                                <base-button v-if="design.user_type != 'Business'" @click="openeditprofile_user" icon="fa fa-edit" type="default" size="sm" class="float-md-right">تعديل الملف الشخصي</base-button>
                                <base-button v-if="design.user_type == 'Business'" @click="openeditprofile" icon="fa fa-edit" type="default" size="sm" class="float-md-right">تعديل الملف الشخصي</base-button>
                                <base-button v-if="!design.user_fid && !design.user_gid" @click="openchangepassword" icon="fa fa-gear" type="default" size="sm" class="float-md-right mr-2" title="Change Password"></base-button>
                                <router-link v-if="design.user_type == 'Business'" class="btn btn-default btn-sm mr-2" :to="'/business/'+design.user_id"><i class="fa fa-eye"></i> معاينة</router-link>
                                <base-button v-if="design.user_type!='Business'" @click="openeditprofile" icon="fa fa-briefcase" type="default" size="sm" class="float-md-right mr-2">أنشئ ملفًا تجاريًا</base-button>
                            </div>
                        </div>
                        <div class="col-lg-4 order-lg-2">
                            <div class="pt-4" v-if="lang=='english'">
                                <h3 v-if="design.user_type != 'Business'">{{design.user_public_name}}</h3>
                                <h3 v-if="design.user_type == 'Business'">{{design.business_name_english}}</h3>
                                <div v-if="design" class="h6 font-weight-300 pl-0">{{design.user_name}}</div>
                            </div>
                            <div class="pt-4" v-if="lang=='arabic'">
                                <h3 v-if="design">
                                  <span v-if="!design.user_public_name_ar">{{design.user_public_name}}</span>{{design.user_public_name_ar}}
                                </h3>
                                <h3 v-if="design.user_type == 'Business'">
                                  <span v-if="!design.business_name_arabic">{{design.business_name_english}}</span>{{design.business_name_arabic}}
                                </h3>
                                <div v-if="design" class="h6 font-weight-300 pl-0">{{design.user_name}}</div>
                            </div>
                            <div class="business_details" v-if="design.user_type=='Business'">
                                <div v-if="lang=='english'">
                                  <div class="h6 mt-4" v-if="design.business_category"><i class="fa fa-cubes text-success"></i><span class="text-success mr-2"></span> {{design.business_category.business_category_name}}</div>
                                  <div class="h6 mt-2" v-if="design.business_subcategory"><i class="fa fa-sitemap text-warning"></i><span class="text-warning mr-3"></span> {{design.business_subcategory.business_subcategory_name}}</div>
                                </div>
                                <div v-if="lang=='arabic'">
                                  <div class="h6 mt-4" v-if="design.business_category"><i class="fa fa-cubes text-success"></i><span class="text-success mr-2"></span> {{design.business_category.business_category_name_ar}}</div>
                                  <div class="h6 mt-2" v-if="design.business_subcategory"><i class="fa fa-sitemap text-warning"></i><span class="text-warning mr-3"></span> {{design.business_subcategory.business_subcategory_name_ar}}</div>
                                </div>
                                <div class="h6 mt-2"><i class="fa fa-phone text-info"></i><span class="text-info mr-3"></span> {{design.user_phone}}</div>
                                <div class="h6 mt-2"><i class="fa fa-envelope text-danger"></i><span class="text-danger mr-3"></span> {{design.business_email}}</div>
                                <div class="h6 mt-2" v-if="design.address"><span v-if="lang=='english'"><i class="fa fa-map-marker text-primary"></i><span class="text-primary mr-3"></span> {{design.address}}</span></div>
                                <div class="h6 mt-2" v-if="lang=='arabic'"><i class="fa fa-map-marker text-primary"></i><span class="text-primary mr-3"></span> {{design.address_ar}}<span v-if="!design.address_ar">{{design.address}}</span></div>
                                <a class="btn btn-sm btn-success text-white mt-3" @click="openbusinesshours(design.business_hours)" style="cursor: pointer;">
                                  <span v-if="lang=='english'">Business Hours</span>
                                  <span v-if="lang=='arabic'">ساعات العمل</span>
                                </a>
                                <a class="btn btn-sm btn-success text-white mt-3" @click="openleisurehours(design.leisure_hours)" style="cursor: pointer;">
                                  <span v-if="lang=='english'">Break Hours</span>
                                  <span v-if="lang=='arabic'">ساعات الاستراحة</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-5 py-5" v-if="design.user_type!='Business'">
                        <!-- normal user -->
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <img src="img/theme/empty_result.png" class="img-fluid">
                                <p>Be faithful to your own taste, because nothing you really like is ever out of style. - BILLY BALDWIN</p>
                                <router-link v-if="lang=='english'" class="btn btn-success" to="/collection">View Saved Designs and Products <i class="ml-1 fa fa-chevron-right"></i></router-link>
                                <router-link v-if="lang=='arabic'" class="btn btn-success" to="/collection"> <i class="ml-1 fa fa-chevron-left"></i> عرض مجلد المجموعات/المفضلة</router-link>
                            </div>
                        </div>
                    </div>
                    
                      
                    <div class="mt-5 py-4 border-top text-center portfolio" v-if="design.user_type=='Business'">
                      <div class="row">
                          <tabs :fill="false" type="success" centered class="flex-column flex-md-row w-100">
                            <tab-pane title="Collections">
                                <span slot="title" v-if="lang=='english'">
                                    <i class="ni ni-folder-17"></i>
                                    Projects
                                </span>
                                <span slot="title" v-if="lang=='arabic'">
                                    <i class="ni ni-folder-17"></i>
                                    المشاريع
                                </span>
                                 
                                <div class="mt-3 row px-3 justify-content-center justify-content-md-start">
                                  <div class="col-lg-3 col-10 mb-3">
                                      <a @click="openadditem" class="h-100 cursor-pointer card bg-white shadow border rounded">
                                          <img src="img/theme/plus.png" class="p-5 rounded card-img-top">
                                          <p v-if="lang=='english'" class="text-default font-weight-400">Add new item</p>
                                          <p v-if="lang=='arabic'" class="text-default font-weight-400">اضافة صور جديدة</p>
                                      </a>
                                  </div>
                                  <div class="col-lg-3 col-10 mb-3" v-for="collections in collectionData" :key="collections._id+'c'">
                                      <router-link :to="'/project/'+collections.project_id" class="card bg-default shadow border-0 rounded">
                                          <div v-if="collections.project_items.length" style="height: 150px; overflow: hidden;">
                                            <img :src="collections.project_items[0].item_img[0]" class="rounded card-img-top">
                                          </div>
                                          <div v-if="!collections.project_items.length" style="height: 150px; overflow: hidden;">
                                            <img src="img/theme/add_design_en.jpg" class="rounded card-img-top">
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
                                                <p class="text-white"><span v-if="!collections.project_description_ar">{{collections.project_description}}</span>{{collections.project_description_ar}}</p>
                                              </div>
                                          </blockquote>
                                      </router-link>
                                      <base-button @click="removeproject(collections)" outline size="sm" type="secondary" class="mt-3">
                                      <i class="fa fa-trash mr-2"></i>
                                        <span v-if="lang=='english'">Delete</span>
                                        <span v-if="lang=='arabic'">حذف</span>
                                      </base-button>
                                      <base-button @click="editcreatecollectionwindow(collections)" outline size="sm" type="secondary" class="mt-3">
                                      <i class="fa fa-pencil mr-2"></i>
                                        <span v-if="lang=='english'">Edit</span>
                                        <span v-if="lang=='arabic'">تعديل</span>
                                      </base-button>
                                  </div>
                                </div>
                                <!-- no result found -->
                                <div class="row justify-content-center" >
                                  <div class="col-lg-8" v-if="collectionData.length==0">
                                    <div class="p-5 no-result">
                                      <img src="img/theme/empty_result.png" class="img-fluid">
                                      <p v-if="lang=='english'" class="font-weight-400">Business has not added any project yet.</p>
                                      <p v-if="lang=='arabic'" class="font-weight-400">لم تتم اضافة أي مشاريع</p>
                                    </div>
                                  </div>
                                </div>
                            </tab-pane>

                            <tab-pane title="Portfolio">
                                <span slot="title" v-if="lang=='english'">
                                    <i class="ni ni-building mr-2"></i>
                                    Portfolio
                                </span>
                                <span slot="title" v-if="lang=='arabic'">
                                    <i class="ni ni-building mr-2"></i>
                                    محفظة
                                </span>
                                <div class="mt-3 row px-3">
                                    <div class="col-lg-4 mb-4" v-for="portf in portfolio" :key="portf._id+'p'">
                                        <card class="border" hover shadow body-classes="py-4">
                                            <router-link v-if="portf.item_type=='Design'" :to="'/design/'+portf.item_id">
                                              <img v-if="portf.item_img" :src="portf.item_img[0]" class="img-fluid shadow card-img-top mb-4">
                                            </router-link>
                                            <router-link v-if="portf.item_type!='Design'" :to="'/product/'+portf.item_id">
                                              <img v-if="portf.item_img" :src="portf.item_img[0]" class="img-fluid shadow card-img-top mb-4">
                                            </router-link>
                                            <div v-if="lang=='english'">
                                              <router-link v-if="portf.item_type=='Design'" :to="'/design/'+portf.item_id"  class="h6"><span v-if="portf.item_name">{{portf.item_name}}</span></router-link>
                                              <router-link v-if="portf.item_type!='Design'" :to="'/product/'+portf.item_id" class="h6"><span v-if="portf.item_name">{{portf.item_name}}</span></router-link>
                                              <p class="description business_description mt-2" v-if="portf.item_description">{{portf.item_description}}</p>
                                            </div>
                                            <div v-if="lang=='arabic'">
                                              <router-link v-if="portf.item_type=='Design'" :to="'/design/'+portf.item_id"  class="h6"><span v-if="portf.item_name">{{portf.item_name_ar}}<span v-if="!portf.item_name_ar">{{portf.item_name}}</span></span></router-link>
                                              <router-link v-if="portf.item_type!='Design'" :to="'/product/'+portf.item_id" class="h6"><span v-if="portf.item_name">{{portf.item_name_ar}}<span v-if="!portf.item_name_ar">{{portf.item_name}}</span></span></router-link>
                                              <p class="description business_description mt-2" v-if="portf.item_description">{{portf.item_description_ar}}<span v-if="!portf.item_description_ar">{{portf.item_description}}</span></p>
                                            </div>
                                            <div class="mt-4">
                                                <div class="float-left">
                                                     <base-button @click="unsaveincollection(portf)" size="sm" type="danger" outline class="no-outline">
                                                        <i class="fa fa-trash mr-2"></i>
                                                        <span v-if="lang=='english'">Delete</span>
                                                        <span v-if="lang=='arabic'">حذف</span>
                                                    </base-button>
                                                    <!-- <base-button  size="sm" type="primary" class="">
                                                       <i class="fa fa-plus mr-1"></i> Save
                                                    </base-button> -->
                                                </div>
                                                <div class="float-right">
                                                     <base-button @click="openeditmodals(portf)" size="sm" type="primary" outline class="no-outline">
                                                        <i class="fa fa-pencil mr-2"></i>
                                                        <span v-if="lang=='english'">Edit</span>
                                                        <span v-if="lang=='arabic'">تعديل</span>
                                                    </base-button>
                                                     <base-button outline type="primary" size="sm" icon="fa fa-share" class="no-outline" @click="functionshare(portf)"></base-button>
                                                </div>
                                            </div>
                                        </card>
                                    </div>
                                </div>
                                <!-- no result found -->
                                <div class="row justify-content-center">
                                  <div class="col-lg-8" v-if="collectionData.length==0">
                                    <div class="p-5 no-result">
                                      <img src="img/theme/empty_result.png" class="img-fluid">
                                      <p class="font-weight-400">Business has not added any portfolio yet.</p>
                                    </div>
                                  </div>
                                </div>
                            </tab-pane>
                          </tabs>
                      </div>
                    </div>
                </div>
            </card>
        </div>
    </section>

    <!-- add item -->
    <modal :show.sync="additem" modalClasses="modal-lg">
        <h6 v-if="lang=='english'" slot="header" class="modal-title" id="modal-title-default">Add Item</h6>
        <h6 v-if="lang=='arabic'" slot="header" class="modal-title" id="modal-title-default">اضافة عنصر</h6>
        <template>
          <form @submit.prevent> 
            <div class="mt-3">
                <div class="row" >
                    <div class="col-lg-12">
                        <form-wizard @on-complete="onComplete" color="#5e72e4" 
                            @on-loading="setLoading1"
                            @on-validate="handleValidation1"
                            @on-error="handleErrorMessage1"
                            :nextButtonText="editprofilenextbtn"
                            :backButtonText="editprofilebackbtn">
                            <!-- upload type english -->
                            <tab-content v-if="lang=='english'" title="Upload Type" icon="fa fa-plus">
                              <div class="row justify-content-center mt-3 mb-4">
                                  <div class="col-lg-4">
                                      <p><span class="font-weight-bold">Q. What should I upload?</span></p>
                                      <p><span class="font-weight-bold">A.</span> If you are a product manufacturer or supplier, upload your products. <br></p>
                                      <p>If you are a designer/architect/builder, upload your design portfolio.
                                      </p>
                                  </div>
                                  <div class="col-lg-4">
                                      <div class="add-item cursor-pointer position-relative" @click="selectitem('addproduct')" id="addproduct">
                                          <img src="img/theme/add_product_en.jpg" class="img-fluid">
                                          <div class="activemask"></div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4">
                                      <div class="add-item cursor-pointer position-relative" @click="selectitem('adddesign')" id="adddesign">
                                          <img src="img/theme/add_design_en.jpg" class="img-fluid">
                                          <div class="activemask"></div>
                                      </div>
                                  </div>
                              </div>
                            </tab-content>
                            <!-- upload type arabic -->
                            <tab-content v-if="lang=='arabic'" title="اختر نوع الاضافة" icon="fa fa-plus">
                              <div class="row justify-content-center mt-3 mb-4">
                                  <div class="col-lg-4">
                                      <div class="add-item cursor-pointer position-relative" @click="selectitem('addproduct')" id="addproduct">
                                          <img src="img/theme/add_product.png" class="img-fluid">
                                          <div class="activemask"></div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4">
                                      <div class="add-item cursor-pointer position-relative" @click="selectitem('adddesign')" id="adddesign">
                                          <img src="img/theme/add_design.png" class="img-fluid">
                                          <div class="activemask"></div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 arabic text-right">
                                      <p><span class="font-weight-bold">1- كيف أختار نوع الاضافة؟</span></p>
                                      <p><span class="font-weight-bold">أ.</span>اذا كنت مُصَنِّع أو مُورِّد منتجات وتشطيبات, يرجى اختيار اضافة منتج.<br></p>
                                      <p>اذا كنت استشاري/ مُصمِّم/ مقاول, يرجى اختيار اضافة صور.
                                      </p>
                                  </div>
                              </div>
                            </tab-content>
                            <!-- add pictures english -->
                            <tab-content v-if="lang=='english'" title="Add Pictures" icon="fa fa-upload" :before-change="validateitemStep1">
                              <div class="row">
                                  <div class="col-lg-12">
                                     <base-progress type="success" :value="uploadPercentage" label="File uploaded"></base-progress>
                                      <input
                                        type="file"
                                        ref="file1"
                                        accept="image/*" 
                                        placeholder="User DP"
                                        class="form-control form-control-alternative"
                                        multiple="multiple"
                                        @change="addhadleimage($event,'add','file')"
                                      />
                                  </div>
                              </div>
                              <div class="row mt-3 mb-3">
                                  <div class="col-lg-4" v-for="(img,index) in model.item_img" :key="img">
                                      <span class="delete-image cursor-pointer" @click="deleteimage(index)"><i class="fa fa-trash text-white"></i></span>
                                      <img v-if="img" :src="img" class="rounded shadow img-fluid">
                                  </div>
                              </div>
                            </tab-content>
                            <!-- add pictures arabic -->
                            <tab-content v-if="lang=='arabic'" title="إضافة صور" icon="fa fa-upload" :before-change="validateitemStep1">
                              <div class="row">
                                  <div class="col-lg-12">
                                     <base-progress type="success" :value="uploadPercentage" label="ملف مرفوع"></base-progress>
                                      <input
                                        type="file"
                                        ref="file1"
                                        accept="image/*" 
                                        placeholder="User DP"
                                        class="form-control form-control-alternative"
                                        multiple="multiple"
                                        @change="addhadleimage($event,'add','file')"
                                      />
                                  </div>
                              </div>
                              <div class="row mt-3 mb-3">
                                  <div class="col-lg-4" v-for="(img,index) in model.item_img" :key="img">
                                      <span class="delete-image cursor-pointer" @click="deleteimage(index)"><i class="fa fa-trash text-white"></i></span>
                                      <img v-if="img" :src="img" class="rounded shadow img-fluid">
                                  </div>
                              </div>
                            </tab-content>
                            <!-- add to project english -->
                            <tab-content v-if="lang=='english'" title="Add to project" icon="fa fa-folder" :before-change="validateitemStep2">
                                <div class="row justify-content-center">
                                    <div class="col-lg-5">
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="model.project_id"
                                        class="form-control form-control-alternative"
                                        autocomplete="off"
                                      >
                                        <option
                                          value=""
                                        >
                                          Select folder
                                        </option>
                                        <option
                                          v-for="(collections,index) in collectionData"
                                          :key="index"
                                          :value="collections.project_id">
                                          {{ collections.project_name }}
                                        </option>
                                      </select>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-2">
                                    <div class="col-lg-5">
                                        <p class="text-center mb-2">Or</p>
                                    </div>
                                </div>
                                <div class="row justify-content-center mb-4">
                                    <div class="col-lg-5">
                                      <base-button
                                        id="sendnoti"
                                        size="lg"
                                        @click="createcollectionwindow()"
                                        type="primary"
                                        icon="fa fa-plus"
                                        class="float-center"
                                        block
                                      >
                                        Create new project
                                      </base-button>
                                    </div>
                                </div>
                            </tab-content>
                            <!-- add to project arabic -->
                            <tab-content v-if="lang=='arabic'" title="إضافة إلى المجلد" icon="fa fa-folder" :before-change="validateitemStep2">
                                <div class="row justify-content-center">
                                    <div class="col-lg-5">
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="model.project_id"
                                        class="form-control form-control-alternative"
                                        autocomplete="off"
                                      >
                                        <option
                                          value=""
                                        >
                                          إضافة إلى المجلد الحالي
                                        </option>
                                        <option
                                          v-for="(collections,index) in collectionData"
                                          :key="index"
                                          :value="collections.project_id">
                                          {{ collections.project_name }}
                                        </option>
                                      </select>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-2">
                                    <div class="col-lg-5">
                                        <p class="text-center mb-2">Or</p>
                                    </div>
                                </div>
                                <div class="row justify-content-center mb-4">
                                    <div class="col-lg-5">
                                      <base-button
                                        id="sendnoti"
                                        size="lg"
                                        @click="createcollectionwindow()"
                                        type="primary"
                                        icon="fa fa-plus"
                                        class="float-center"
                                        block
                                      >
                                        انشاء مجلد جديد
                                      </base-button>
                                    </div>
                                </div>
                            </tab-content>
                            <!-- add details english -->
                            <tab-content v-if="lang=='english'" title="Add Details" icon="ni ni-align-center" :before-change="validateitemStep3">
                              <div class="row" v-if="lang=='english'">
                                <div class="col-lg-12">
                                    <p>Note: It is recommended to fill details in both languages to get more reach to users.</p>
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">Title (English)</label>
                                      <base-input v-model="model.item_name"
                                          placeholder="Item title in english"
                                          class="mb-0"
                                      />
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">Title (عربى)</label>
                                      <base-input v-model="model.item_name_ar"
                                          placeholder="عنوان المادة باللغة العربية"
                                          class="mb-0"
                                      />
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">Description (English)</label>
                                      <textarea v-model="model.item_description"
                                          aria-describedby="addon-right addon-left"
                                          class="form-control"
                                          rows="4"
                                       />
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">Description (عربى)</label>
                                      <textarea v-model="model.item_description_ar"
                                          aria-describedby="addon-right addon-left"
                                          class="form-control"
                                          rows="4"
                                       />
                                </div>
                                <div class="col-lg-6">
                                  <label class="form-control-label">Select category</label>
                                  <select
                                    aria-describedby="addon-right addon-left"
                                    addon-left-icon="ni ni-bullet-list-67" v-model="model.item_category"
                                    class="form-control"
                                    autocomplete="off"
                                    @change="getsubcategories()"
                                  >
                                    <option
                                      value=""
                                    >
                                      Select category
                                    </option>
                                    <option v-for="category in categories" :key="category.inventory_category" :value="category._id">
                                      {{category.inventory_category_name}}
                                    </option>
                                    <!-- <option>
                                      Option two
                                    </option> -->
                                  </select>
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-control-label">Select sub-category</label>
                                  <select
                                    aria-describedby="addon-right addon-left"
                                    addon-left-icon="ni ni-bullet-list-67" v-model="model.item_subcategory"
                                    class="form-control"
                                    autocomplete="off"
                                  >
                                    <option
                                      value=""
                                    >
                                      Select sub-category
                                    </option>
                                    <option v-for="subcategory in subcategories" :key="subcategory.inventory_subcategory" :value="subcategory._id">
                                      {{subcategory.inventory_subcategory_name}}
                                    </option>
                                    <!-- <option>
                                      Option two
                                    </option> -->
                                  </select>
                                </div>
                              </div>
                              <div class="row" v-if="lang=='arabic'">
                                <div class="col-lg-12">
                                    <p class="arabic text-right">ملاحظة: يوصى بملء التفاصيل باللغتين للوصول لمستخدمين أكثر عند البحث</p>
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">Title (English)</label>
                                      <base-input v-model="model.item_name"
                                          placeholder="Item title in english"
                                          class="mb-0"
                                      />
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">Title (عربى)</label>
                                      <base-input v-model="model.item_name_ar"
                                          placeholder="عنوان المادة باللغة العربية"
                                          class="mb-0"
                                      />
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">Description (English)</label>
                                      <textarea v-model="model.item_description"
                                          aria-describedby="addon-right addon-left"
                                          class="form-control"
                                          rows="4"
                                       />
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">Description (عربى)</label>
                                      <textarea v-model="model.item_description_ar"
                                          aria-describedby="addon-right addon-left"
                                          class="form-control"
                                          rows="4"
                                       />
                                </div>
                                <div class="col-lg-6">
                                  <label class="form-control-label">Select category</label>
                                  <select
                                    aria-describedby="addon-right addon-left"
                                    addon-left-icon="ni ni-bullet-list-67" v-model="model.item_category"
                                    class="form-control"
                                    autocomplete="off"
                                    @change="getsubcategories()"
                                  >
                                    <option
                                      value=""
                                    >
                                      Select category
                                    </option>
                                    <option v-for="category in categories" :key="category.inventory_category" :value="category._id">
                                      {{category.inventory_category_name}}
                                    </option>
                                    <!-- <option>
                                      Option two
                                    </option> -->
                                  </select>
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-control-label">Select sub-category</label>
                                  <select
                                    aria-describedby="addon-right addon-left"
                                    addon-left-icon="ni ni-bullet-list-67" v-model="model.item_subcategory"
                                    class="form-control"
                                    autocomplete="off"
                                  >
                                    <option
                                      value=""
                                    >
                                      Select sub-category
                                    </option>
                                    <option v-for="subcategory in subcategories" :key="subcategory.inventory_subcategory" :value="subcategory._id">
                                      {{subcategory.inventory_subcategory_name}}
                                    </option>
                                    <!-- <option>
                                      Option two
                                    </option> -->
                                  </select>
                                </div>
                              </div>
                            </tab-content>
                            <!-- add details arabic -->
                            <tab-content v-if="lang=='arabic'" title="إضافة تفاصيل" icon="ni ni-align-center" :before-change="validateitemStep3">
                              <div class="row" v-if="lang=='arabic'">
                                <div class="col-lg-12">
                                    <p class="arabic text-right">ملاحظة: يوصى بتعبئة التفاصيل باللغتين للوصول لمستخدمين أكثر عند البحث</p>
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">العنوان (الإنجليزية)</label>
                                      <base-input v-model="model.item_name"
                                          placeholder="Item title in english"
                                          class="mb-0"
                                      />
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">العنوان (عربي)</label>
                                      <base-input v-model="model.item_name_ar"
                                          placeholder="عنوان المادة باللغة العربية"
                                          class="mb-0"
                                      />
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">الوصف (انجليزي)</label>
                                      <textarea v-model="model.item_description"
                                          aria-describedby="addon-right addon-left"
                                          class="form-control"
                                          rows="4"
                                       />
                                </div>
                                <div class="col-lg-6">
                                      <label class="form-control-label">الوصف (عربي)</label>
                                      <textarea v-model="model.item_description_ar"
                                          aria-describedby="addon-right addon-left"
                                          class="form-control"
                                          rows="4"
                                       />
                                </div>
                                <div class="col-lg-6">
                                  <label class="form-control-label">التصنيف</label>
                                  <select
                                    aria-describedby="addon-right addon-left"
                                    addon-left-icon="ni ni-bullet-list-67" v-model="model.item_category"
                                    class="form-control"
                                    autocomplete="off"
                                    @change="getsubcategories()"
                                  >
                                    <option
                                      value=""
                                    >
                                      اختر الفئة
                                    </option>
                                    <option v-for="category in categories" :key="category.inventory_category" :value="category._id">
                                      {{category.inventory_category_name_ar}}
                                    </option>
                                    <!-- <option>
                                      Option two
                                    </option> -->
                                  </select>
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-control-label">تصنيف فرعي</label>
                                  <select
                                    aria-describedby="addon-right addon-left"
                                    addon-left-icon="ni ni-bullet-list-67" v-model="model.item_subcategory"
                                    class="form-control"
                                    autocomplete="off"
                                  >
                                    <option
                                      value=""
                                    >
                                      حدد فئة فرعية
                                    </option>
                                    <option v-for="subcategory in subcategories" :key="subcategory.inventory_subcategory" :value="subcategory._id">
                                      {{subcategory.inventory_subcategory_name_ar}}
                                    </option>
                                    <!-- <option>
                                      Option two
                                    </option> -->
                                  </select>
                                </div>
                              </div>
                            </tab-content>
                            <!-- additional details english -->
                            <tab-content v-if="lang=='english'" title="Additional Details" icon="fa fa-tag">
                                <div class="row justify-content-center" v-if="model.item_type=='Product'">
                                    <div class="col-lg-3">
                                        <label class="form-control-label">Currency</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="model.item_space"
                                        class="form-control"
                                        autocomplete="off"
                                      >
                                        <option
                                          value=""
                                        >
                                          Select currency
                                        </option>
                                        <option>
                                          BHD
                                        </option>
                                        <option>
                                          OMR
                                        </option>
                                      </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <label class="form-control-label">Product Cost</label>
                                        <base-input
                                            v-model="model.item_cost"
                                            placeholder="type here"
                                            class="mb-0"
                                        />
                                    </div>
                                </div>
                                <div class="row justify-content-center" >
                                    <div class="col-lg-7" v-if="model.item_type=='Product'">
                                        <label class="form-control-label">Brand</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="model.item_brand"
                                        class="form-control"
                                        autocomplete="off"
                                      >
                                        <option value="" disabled="" >Select brand</option>
                                        <option v-for="brand in brands" :value="brand.value_en" :key="brand.value_en">
                                                         {{ brand.value_en+'('+brand.value_ar+')' }}
                                        </option>
                                        <!-- <option>
                                          Armani
                                        </option> -->
                                      </select>
                                    </div>
                                    <div class="col-lg-7">
                                        <label class="form-control-label">Add</label>
                                        <!-- <base-input
                                            placeholder="type here"
                                            class="mb-0"
                                            v-model="model.item_tags"
                                        /> -->
                                        <multiselect  aria-describedby="addon-right addon-left" v-model="model.item_tags" tag-placeholder="Add Tag" placeholder="Search tag" label="tag" track-by="tag" :options="tagData" :multiple="true" :taggable="true" @tag="addTag" ></multiselect>
                                        <!-- <div class="mt-2 mb-4">
                                            <badge type="primary">Tag 1</badge>
                                            <badge type="primary">Tag 2</badge>
                                            <badge type="primary">Tag 3</badge>
                                            <badge type="primary">Tag 4</badge>
                                        </div> -->
                                    </div>
                                    <div class="col-lg-7">
                                        <label class="form-control-label">Mention users</label>
                                        <multiselect  aria-describedby="addon-right addon-left" v-model="model.item_mentions" tag-placeholder="Search users" placeholder="Select user" label="business_name_english" track-by="_id" :options="userData" :multiple="true" :taggable="true" ></multiselect>
                                        <!-- <div class="mt-2 mb-4">
                                            <badge type="warning" rounded icon="fa fa-times">User 1 <i class="fa fa-times ml-2"></i></badge>
                                            <badge type="warning" rounded icon="fa fa-times">User 2 <i class="fa fa-times ml-2"></i></badge>
                                            <badge type="warning" rounded icon="fa fa-times">User 3 <i class="fa fa-times ml-2"></i></badge>
                                        </div> -->
                                    </div>
                                    <div class="col-lg-7">
                                        <p v-if="lang=='english'">(You can tag suppliers to help others know where to find products)</p>
                                         <p class="arabic text-right" v-if="lang=='arabic'">إشارة لمستخدمين آخرين: (يمكنك إقتراح\ إضافة\ إشارة لموردين لمساعدة المستخدمين لايجاد التشطيبات\المنتجات في الصور)</p>
                                    </div>
                                </div>
                            </tab-content>
                            <!-- additional details arabic -->
                            <tab-content v-if="lang=='arabic'" title="تفاصيل اضافية" icon="fa fa-tag">
                                <div class="row justify-content-center" v-if="model.item_type=='Product'">
                                    <div class="col-lg-3">
                                        <label class="form-control-label">عملة</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="model.item_space"
                                        class="form-control"
                                        autocomplete="off"
                                      >
                                        <option
                                          value=""
                                        >
                                          العملة
                                        </option>
                                        <option>
                                          BHD
                                        </option>
                                        <option>
                                          OMR
                                        </option>
                                      </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <label class="form-control-label">تكلفة المنتج</label>
                                        <base-input
                                            v-model="model.item_cost"
                                            placeholder="type here"
                                            class="mb-0"
                                        />
                                    </div>
                                </div>
                                <div class="row justify-content-center" >
                                    <div class="col-lg-7" v-if="model.item_type=='Product'">
                                        <label class="form-control-label">علامة تجارية</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="model.item_brand"
                                        class="form-control"
                                        autocomplete="off"
                                      >
                                        <option value="" disabled="" >حدد العلامة التجارية</option>
                                        <option v-for="brand in brands" :value="brand.value_en" :key="brand.value_en">
                                                         {{ brand.value_en+'('+brand.value_ar+')' }}
                                        </option>
                                        <!-- <option>
                                          Armani
                                        </option> -->
                                      </select>
                                    </div>
                                    <div class="col-lg-7">
                                        <label class="form-control-label">اضافة</label>
                                        <!-- <base-input
                                            placeholder="type here"
                                            class="mb-0"
                                            v-model="model.item_tags"
                                        /> -->
                                        <multiselect  aria-describedby="addon-right addon-left" v-model="model.item_tags" tag-placeholder="إضافة علامة" placeholder="علامة البحث" label="tag" track-by="tag" :options="tagData" :multiple="true" :taggable="true" @tag="addTag" ></multiselect>
                                        <!-- <div class="mt-2 mb-4">
                                            <badge type="primary">Tag 1</badge>
                                            <badge type="primary">Tag 2</badge>
                                            <badge type="primary">Tag 3</badge>
                                            <badge type="primary">Tag 4</badge>
                                        </div> -->
                                    </div>
                                    <div class="col-lg-7">
                                        <label class="form-control-label">اشارة لمستخدمين اخرين</label>

                                        <multiselect  aria-describedby="addon-right addon-left" v-model="model.item_mentions" tag-placeholder="البحث عن مستخدم" placeholder="البحث عن مستخدم" label="business_name_english" track-by="_id" :options="userData" :multiple="true" :taggable="true" ></multiselect>
                                        <!-- <div class="mt-2 mb-4">
                                            <badge type="warning" rounded icon="fa fa-times">User 1 <i class="fa fa-times ml-2"></i></badge>
                                            <badge type="warning" rounded icon="fa fa-times">User 2 <i class="fa fa-times ml-2"></i></badge>
                                            <badge type="warning" rounded icon="fa fa-times">User 3 <i class="fa fa-times ml-2"></i></badge>
                                        </div> -->
                                    </div>
                                    <div class="col-lg-7">
                                         <p class="arabic text-right">اشارة لمستخديم اخرين: يمكنك اقتراح/اضافة/اشارة لموردين لمساعدة الاخرين لايجاد التشطيبات/المنتجات في الصور</p>
                                    </div>
                                </div>
                            </tab-content>
                            <button slot="finish" id="additem" class="btn-primary wizard-btn" style="background-color: rgb(94, 114, 228); border-color: rgb(94, 114, 228); color: white;"><span v-if="lang=='english'">Save</span> <span v-if="lang=='arabic'">حفظ</span> </button>
                                <div class="loader" v-if="loadingWizard1"></div>
                                <div v-if="errorMsg1">
                                    <span class="error text-danger">{{errorMsg1}}</span>
                                </div>
                        </form-wizard>
                        
                    </div>
                </div>
            </div>
          </form>
        </template>

        <template slot="footer">
          <base-button type="seondary" id="updatebtn1" @click="additem = false"><span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">أغلق</span>
          </base-button>
        </template>
    </modal>

    <!-- Edit item -->
    <modal :show.sync="edititem" modalClasses="modal-lg">
        <h6 v-if="lang=='english'" slot="header" class="modal-title" id="modal-title-default">Edit Item</h6>
        <h6 v-if="lang=='arabic'" slot="header" class="modal-title" id="modal-title-default">اضافة عنصر</h6>
        <template>
          <form @submit.prevent> 
            <div class="mt-3">
                <div class="row" >
                    <div class="col-lg-12">
                        <form-wizard @on-complete="updateitem" color="#5e72e4" 
                            @on-loading="setLoading2"
                            @on-validate="handleValidation2"
                            @on-error="handleErrorMessage2"
                            :nextButtonText="editprofilenextbtn"
                            :backButtonText="editprofilebackbtn">
                            <!-- upload type english -->
                            <tab-content v-if="lang=='english'" title="Upload Type" icon="fa fa-plus">
                              <div class="row justify-content-center mt-3 mb-4">
                                  <div class="col-lg-4">
                                      <p><span class="font-weight-bold">Q. What should I upload?</span></p>
                                      <p><span class="font-weight-bold">A.</span> If you are a product manufacturer or supplier, upload your products. <br></p>
                                      <p>If you are a designer/architect/builder, upload your design portfolio.
                                      </p>
                                  </div>
                                  <div class="col-lg-4">
                                        <div class="add-item cursor-pointer position-relative active" @click="selectitem1('editaddproduct')" id="editaddproduct" v-if="editmodals.item_type=='Product'">
                                          <img src="img/theme/add_product_en.jpg" class="img-fluid">
                                          <div class="activemask"></div>
                                        </div>
                                        <div class="add-item cursor-pointer position-relative" @click="selectitem1('editaddproduct')" id="editaddproduct" v-if="editmodals.item_type!='Product'">
                                          <img src="img/theme/add_product_en.jpg" class="img-fluid">
                                          <div class="activemask"></div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4">
                                      <div class="add-item cursor-pointer position-relative active" @click="selectitem1('editadddesign')" id="editadddesign" v-if="editmodals.item_type=='Design'">
                                          <img src="img/theme/add_design_en.jpg" class="img-fluid">
                                          <div class="activemask"></div>
                                      </div>
                                      <div class="add-item cursor-pointer position-relative" @click="selectitem1('editadddesign')" id="editadddesign" v-if="editmodals.item_type!='Design'">
                                          <img src="img/theme/add_design_en.jpg" class="img-fluid">
                                          <div class="activemask"></div>
                                      </div>
                                  </div>
                              </div>
                            </tab-content>
                            <!-- upload type arabic -->
                            <tab-content v-if="lang=='arabic'" title="اختر نوع الاضافة" icon="fa fa-plus">
                              <div class="row justify-content-center mt-3 mb-4">
                                  <div class="col-lg-4">
                                       <div class="add-item cursor-pointer position-relative active" @click="selectitem1('editaddproduct')" id="editaddproduct" v-if="editmodals.item_type=='Product'">
                                          <img src="img/theme/add_product.png" class="img-fluid">
                                          <div class="activemask"></div>
                                        </div>
                                        <div class="add-item cursor-pointer position-relative" @click="selectitem1('editaddproduct')" id="editaddproduct" v-if="editmodals.item_type!='Product'">
                                          <img src="img/theme/add_product.png" class="img-fluid">
                                          <div class="activemask"></div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4">
                                      <div class="add-item cursor-pointer position-relative active" @click="selectitem1('editadddesign')" id="editadddesign" v-if="editmodals.item_type=='Design'">
                                          <img src="img/theme/add_design.png" class="img-fluid">
                                          <div class="activemask"></div>
                                      </div>
                                      <div class="add-item cursor-pointer position-relative" @click="selectitem1('editadddesign')" id="editadddesign" v-if="editmodals.item_type!='Design'">
                                          <img src="img/theme/add_design.png" class="img-fluid">
                                          <div class="activemask"></div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 arabic text-right">
                                      <p><span class="font-weight-bold">س: ما الذي يجب علي تحميله؟</span></p>
                                      <p><span class="font-weight-bold">أ.</span> إذا كنت منتجًا أو موردًا ، فقم بتحميل منتجاتك.<br></p>
                                      <p>إذا كنت مصممًا / مهندسًا معماريًا / منشئًا ، فقم بتحميل محفظة التصميم الخاصة بك.
                                      </p>
                                  </div>
                              </div>
                            </tab-content>
                            <!-- add pictures english -->
                            <tab-content v-if="lang=='english'" title="Add Pictures" icon="fa fa-upload" :before-change="validateitemStep12">
                              <div class="row">
                                  <div class="col-lg-12">
                                    <base-progress type="success" :value="uploadPercentage" label="File uploaded"></base-progress>
                                      <input
                                        type="file"
                                        ref="file"
                                        accept="image/*" 
                                        placeholder="User DP"
                                        class="form-control form-control-alternative"
                                        multiple="multiple"
                                        @change="hadleimage($event,'edit','file')"
                                      />
                                  </div>
                              </div>
                              <div class="row mt-4 mb-3">
                                  <div class="col-lg-4" v-for="(img,index) in editmodals.item_img" :key="img">
                                    <span class="delete-image cursor-pointer" @click="editdeleteimage(index)"><i class="fa fa-trash text-white"></i></span>
                                      <img v-if="img" :src="img" class="rounded shadow img-fluid">
                                  </div>
                              </div>
                            </tab-content>
                            <!-- add pictures arabic -->
                            <tab-content v-if="lang=='arabic'" title="إضافة صور" icon="fa fa-upload" :before-change="validateitemStep12">
                              <div class="row">
                                  <div class="col-lg-12">
                                    <base-progress type="success" :value="uploadPercentage" label="ملف مرفوع"></base-progress>
                                      <input
                                        type="file"
                                        ref="file"
                                        accept="image/*" 
                                        placeholder="User DP"
                                        class="form-control form-control-alternative"
                                        multiple="multiple"
                                        @change="hadleimage($event,'edit','file')"
                                      />
                                  </div>
                              </div>
                              <div class="row mt-4 mb-3">
                                  <div class="col-lg-4" v-for="(img,index) in editmodals.item_img" :key="img">
                                    <span class="delete-image cursor-pointer" @click="editdeleteimage(index)"><i class="fa fa-trash text-white"></i></span>
                                      <img v-if="img" :src="img" class="rounded shadow img-fluid">
                                  </div>
                              </div>
                            </tab-content>
                            <!-- add to project english -->
                            <tab-content v-if="lang=='english'" title="Add to project" icon="fa fa-folder" :before-change="validateitemStep22">
                                <div class="row justify-content-center">
                                    <div class="col-lg-5">
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="editmodals.project_id"
                                        class="form-control form-control-alternative"
                                        autocomplete="off"
                                      >
                                        <option
                                          value=""
                                        >
                                          Select folder
                                        </option>
                                        <option
                                          v-for="(collections,index) in collectionData"
                                          :key="index"
                                          :value="collections.project_id">
                                          {{ collections.project_name }}
                                        </option>
                                      </select>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-2">
                                    <div class="col-lg-5">
                                        <p class="text-center mb-2">Or</p>
                                    </div>
                                </div>
                                <div class="row justify-content-center mb-4">
                                    <div class="col-lg-5">
                                      <base-button
                                        id="sendnoti"
                                        size="lg"
                                        @click="createcollectionwindow()"
                                        type="primary"
                                        icon="fa fa-plus"
                                        class="float-center"
                                        block
                                      >
                                        Create new project
                                      </base-button>
                                    </div>
                                </div>
                            </tab-content>
                            <!-- add to project arabic -->
                            <tab-content v-if="lang=='arabic'" title="إضافة إلى المجلد" icon="fa fa-folder" :before-change="validateitemStep22">
                                <div class="row justify-content-center">
                                    <div class="col-lg-5">
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="editmodals.project_id"
                                        class="form-control form-control-alternative"
                                        autocomplete="off"
                                      >
                                        <option
                                          value=""
                                        >
                                          إضافة إلى المجلد الحالي
                                        </option>
                                        <option
                                          v-for="(collections,index) in collectionData"
                                          :key="index"
                                          :value="collections.project_id">
                                          {{ collections.project_name }}
                                        </option>
                                      </select>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-2">
                                    <div class="col-lg-5">
                                        <p class="text-center mb-2">أو</p>
                                    </div>
                                </div>
                                <div class="row justify-content-center mb-4">
                                    <div class="col-lg-5">
                                      <base-button
                                        id="sendnoti"
                                        size="lg"
                                        @click="createcollectionwindow()"
                                        type="primary"
                                        icon="fa fa-plus"
                                        class="float-center"
                                        block
                                      >
                                        انشاء مجلد جديد
                                      </base-button>
                                    </div>
                                </div>
                            </tab-content>
                            <!-- add details english -->
                            <tab-content v-if="lang=='english'" title="Add Details" icon="ni ni-align-center" :before-change="validateitemStep32">
                              <div class="row">
                                      <div class="col-lg-12">
                                          <p>Note: It is recommended to fill details in both languages to get more reach to users.</p>
                                      </div>
                                      <div class="col-lg-6">
                                            <label class="form-control-label">Title (English)</label>
                                            <base-input v-model="editmodals.item_name"
                                                placeholder="Item title in english"
                                                class="mb-0"
                                            />
                                      </div>
                                      <div class="col-lg-6">
                                            <label class="form-control-label">Title (عربى)</label>
                                            <base-input v-model="editmodals.item_name_ar"
                                                placeholder="عنوان المادة باللغة العربية"
                                                class="mb-0"
                                            />
                                      </div>
                                      <div class="col-lg-6">
                                            <label class="form-control-label">Description (English)</label>
                                            <textarea v-model="editmodals.item_description"
                                                aria-describedby="addon-right addon-left"
                                                class="form-control"
                                                rows="4"
                                             />
                                      </div>
                                      <div class="col-lg-6">
                                            <label class="form-control-label">Description (عربى)</label>
                                            <textarea v-model="editmodals.item_description_ar"
                                                aria-describedby="addon-right addon-left"
                                                class="form-control"
                                                rows="4"
                                             />
                                      </div>
                                    <div class="col-lg-6">
                                      <label class="form-control-label">Select category</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="editmodals.item_category"
                                        class="form-control"
                                        autocomplete="off"
                                        @change="editgetsubcategories()"
                                      >
                                        <option
                                          value=""
                                        >
                                          Select category
                                        </option>
                                        <option v-for="category in categories" :key="category._id+'c'" :value="category._id">
                                          {{category.inventory_category_name}}
                                        </option>
                                        <!-- <option>
                                          Option two
                                        </option> -->
                                      </select>
                                    </div>
                                    <div class="col-lg-6">
                                        <label class="form-control-label">Select sub-category</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="editmodals.item_subcategory"
                                        class="form-control"
                                        autocomplete="off"
                                      >
                                        <option
                                          value=""
                                        >
                                          Select sub-category
                                        </option>
                                        <option v-for="subcategory in subcategories" :key="subcategory._id+'s'" :value="subcategory._id">
                                          {{subcategory.inventory_subcategory_name}}
                                        </option>
                                        <!-- <option>
                                          Option two
                                        </option> -->
                                      </select>
                                    </div>
                              </div>
                            </tab-content>
                            <!-- add details arabic -->
                            <tab-content v-if="lang=='arabic'" title="إضافة تفاصيل" icon="ni ni-align-center" :before-change="validateitemStep32">
                              <div class="row">
                                      <div class="col-lg-12">
                                          <p class="arabic text-right">ملاحظة: يوصى بتعبئة التفاصيل باللغتين للوصول لمستخدمين أكثر عند البحث</p>
                                      </div>
                                      <div class="col-lg-6">
                                            <label class="form-control-label">العنوان (الإنجليزية)</label>
                                            <base-input v-model="editmodals.item_name"
                                                placeholder="Item title in english"
                                                class="mb-0"
                                            />
                                      </div>
                                      <div class="col-lg-6">
                                            <label class="form-control-label">العنوان (عربي)</label>
                                            <base-input v-model="editmodals.item_name_ar"
                                                placeholder="عنوان المادة باللغة العربية"
                                                class="mb-0"
                                            />
                                      </div>
                                      <div class="col-lg-6">
                                            <label class="form-control-label">الوصف (انجليزي)</label>
                                            <textarea v-model="editmodals.item_description"
                                                aria-describedby="addon-right addon-left"
                                                class="form-control"
                                                rows="4"
                                             />
                                      </div>
                                      <div class="col-lg-6">
                                            <label class="form-control-label">الوصف (عربي)</label>
                                            <textarea v-model="editmodals.item_description_ar"
                                                aria-describedby="addon-right addon-left"
                                                class="form-control"
                                                rows="4"
                                             />
                                      </div>
                                    <div class="col-lg-6">
                                      <label class="form-control-label">التصنيف</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="editmodals.item_category"
                                        class="form-control"
                                        autocomplete="off"
                                        @change="editgetsubcategories()"
                                      >
                                        <option
                                          value=""
                                        >
                                          اختر الفئة
                                        </option>
                                        <option v-for="category in categories" :key="category._id+'c'" :value="category._id">
                                          {{category.inventory_category_name_ar}}
                                        </option>
                                        <!-- <option>
                                          Option two
                                        </option> -->
                                      </select>
                                    </div>
                                    <div class="col-lg-6">
                                        <label class="form-control-label">تصنيف فرعي</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="editmodals.item_subcategory"
                                        class="form-control"
                                        autocomplete="off"
                                      >
                                        <option
                                          value=""
                                        >
                                          حدد فئة فرعية
                                        </option>
                                        <option v-for="subcategory in subcategories" :key="subcategory._id+'s'" :value="subcategory._id">
                                          {{subcategory.inventory_subcategory_name_ar}}
                                        </option>
                                        <!-- <option>
                                          Option two
                                        </option> -->
                                      </select>
                                    </div>
                              </div>
                            </tab-content>
                            <!-- additional details english -->
                            <tab-content v-if="lang=='english'" title="Additional Details" icon="fa fa-tag">
                                <div class="row justify-content-center" v-if="editmodals.item_type=='Product'">
                                    <div class="col-lg-3">
                                        <label class="form-control-label">Currency</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="editmodals.item_space"
                                        class="form-control"
                                        autocomplete="off"
                                      >
                                        <option
                                          value=""
                                        >
                                          Select currency
                                        </option>
                                        <option>
                                          BHD
                                        </option>
                                        <option>
                                          OMR
                                        </option>
                                      </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <label class="form-control-label">Product Cost</label>
                                        <base-input
                                            v-model="editmodals.item_cost"
                                            placeholder="type here"
                                            class="mb-0"
                                        />
                                    </div>
                                </div>
                                <div class="row justify-content-center" >
                                    <div class="col-lg-7" v-if="editmodals.item_type=='Product'">
                                        <label class="form-control-label">Brand</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="editmodals.item_brand"
                                        class="form-control"
                                        autocomplete="off"
                                      >
                                        <option value="" disabled="" >Select brand</option>
                                        <option v-for="brand in brands" :value="brand.value_en" :key="brand.value_en">
                                                         {{ brand.value_en+'('+brand.value_ar+')' }}
                                        </option>
                                        <!-- <option>
                                          Armani
                                        </option> -->
                                      </select>
                                    </div>
                                    <div class="col-lg-7">
                                        <label class="form-control-label">Add Tags</label>
                                        <!-- <base-input
                                            placeholder="type here"
                                            class="mb-0"
                                            v-model="editmodals.item_tags"
                                        /> -->
                                        <multiselect  aria-describedby="addon-right addon-left" v-model="editmodals.item_tags" tag-placeholder="Add Tag" placeholder="Search tag" label="tag" track-by="tag" :options="tagData" @close="closetag" :multiple="true" :taggable="true" @tag="addTag" ></multiselect>

                                        <!-- {{editmodals.item_tags}} -->
                                        <!-- <div class="mt-2 mb-4">
                                            <badge type="primary">Tag 1</badge>
                                            <badge type="primary">Tag 2</badge>
                                            <badge type="primary">Tag 3</badge>
                                            <badge type="primary">Tag 4</badge>
                                        </div> -->
                                    </div>
                                    <div class="col-lg-7">
                                        <label class="form-control-label">Search Users</label>

                                        <multiselect  aria-describedby="addon-right addon-left" v-model="editmodals.item_mentions" tag-placeholder="Search users" placeholder="Select user" label="business_name_english" track-by="_id" :options="userData" :multiple="true" :taggable="true" ></multiselect>
                                        <!-- {{editmodals.item_mentions}}  -->
                                        <!-- <div class="mt-2 mb-4">
                                            <badge type="warning" rounded icon="fa fa-times">User 1 <i class="fa fa-times ml-2"></i></badge>
                                            <badge type="warning" rounded icon="fa fa-times">User 2 <i class="fa fa-times ml-2"></i></badge>
                                            <badge type="warning" rounded icon="fa fa-times">User 3 <i class="fa fa-times ml-2"></i></badge>
                                        </div> -->
                                    </div>
                                    <div class="col-lg-7">
                                        <p>You can tag suppliers to help others know where to find products)</p>
                                    </div>
                                </div>
                            </tab-content>
                            <!-- additional details arabic -->
                            <tab-content v-if="lang=='arabic'" title="تفاصيل اضافية" icon="fa fa-tag">
                                <div class="row justify-content-center" v-if="editmodals.item_type=='Product'">
                                    <div class="col-lg-3">
                                        <label class="form-control-label">عملة</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="editmodals.item_space"
                                        class="form-control"
                                        autocomplete="off"
                                      >
                                        <option
                                          value=""
                                        >
                                          العملة
                                        </option>
                                        <option>
                                          BHD
                                        </option>
                                        <option>
                                          OMR
                                        </option>
                                      </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <label class="form-control-label">تكلفة المنتج</label>
                                        <base-input
                                            v-model="editmodals.item_cost"
                                            placeholder="type here"
                                            class="mb-0"
                                        />
                                    </div>
                                </div>
                                <div class="row justify-content-center" >
                                    <div class="col-lg-7" v-if="editmodals.item_type=='Product'">
                                      <label class="form-control-label">علامة تجارية</label>
                                      <select
                                        aria-describedby="addon-right addon-left"
                                        addon-left-icon="ni ni-bullet-list-67" v-model="editmodals.item_brand"
                                        class="form-control"
                                        autocomplete="off"
                                      >
                                        <option value="" disabled="" >حدد العلامة التجارية</option>
                                        <option v-for="brand in brands" :value="brand.value_en" :key="brand.value_en">
                                                         {{ brand.value_en+'('+brand.value_ar+')' }}
                                        </option>
                                        <!-- <option>
                                          Armani
                                        </option> -->
                                      </select>
                                    </div>
                                    <div class="col-lg-7">
                                        <label class="form-control-label">إضافة وسم</label>
                                        <!-- <base-input
                                            placeholder="type here"
                                            class="mb-0"
                                            v-model="editmodals.item_tags"
                                        /> -->
                                        <multiselect  aria-describedby="addon-right addon-left" v-model="editmodals.item_tags" tag-placeholder="إضافة علامة" placeholder="بحث الوسم" label="tag" track-by="tag" :options="tagData" @close="closetag" :multiple="true" :taggable="true" @tag="addTag" ></multiselect>

                                        <!-- {{editmodals.item_tags}} -->
                                        <!-- <div class="mt-2 mb-4">
                                            <badge type="primary">Tag 1</badge>
                                            <badge type="primary">Tag 2</badge>
                                            <badge type="primary">Tag 3</badge>
                                            <badge type="primary">Tag 4</badge>
                                        </div> -->
                                    </div>
                                    <div class="col-lg-7">
                                        <label class="form-control-label">مستخدم البحث</label>

                                        <multiselect  aria-describedby="addon-right addon-left" v-model="editmodals.item_mentions" tag-placeholder="بحث عن طريق اسم المستخدم" placeholder="بحث عن طريق اسم المستخدم" label="business_name_english" track-by="_id" :options="userData" :multiple="true" :taggable="true" ></multiselect>
                                        <!-- {{editmodals.item_mentions}}  -->
                                        <!-- <div class="mt-2 mb-4">
                                            <badge type="warning" rounded icon="fa fa-times">User 1 <i class="fa fa-times ml-2"></i></badge>
                                            <badge type="warning" rounded icon="fa fa-times">User 2 <i class="fa fa-times ml-2"></i></badge>
                                            <badge type="warning" rounded icon="fa fa-times">User 3 <i class="fa fa-times ml-2"></i></badge>
                                        </div> -->
                                    </div>
                                    <div class="col-lg-7">
                                        <p class="arabic text-right">وسمإشارة لمستخدمين آخرين: (يمكنك إقتراح إضافة إشارة الموردين المساعدة المستخدمین لايجاد التشطيبات المنتجات في الصور)</p>
                                    </div>
                                </div>
                            </tab-content>
                            <button slot="finish" id="edititem" class="btn-primary wizard-btn" style="background-color: rgb(94, 114, 228); border-color: rgb(94, 114, 228); color: white;"><span v-if="lang=='english'">Save</span><span v-if="lang=='arabic'">حفظ</span></button>
                            <div class="loader" v-if="loadingWizard2"></div>
                            <div v-if="errorMsg2">
                                <span class="error text-danger">{{errorMsg2}}</span>
                            </div>
                        </form-wizard>
                        
                    </div>
                </div>
            </div>
          </form>
        </template>

        <template slot="footer">
          <base-button type="seondary" id="updatebtn2" @click="edititem = false"><span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">اغلاق</span>
          </base-button>
        </template>
    </modal>
    <!-- edit profile business user-->
    <modal :show.sync="editprofile" modalClasses="modal-lg">
        <h6 slot="header" class="modal-title" id="modal-title-default" v-if="lang=='english'">Edit Profile</h6>
        <h6 slot="header" class="modal-title" id="modal-title-default" v-if="lang=='arabic'">تعديل الحساب</h6>
        <template>
          <form @submit.prevent> 
            <div class="">
              <div class="row" >
                  <div class="col-lg-12">
                      <form-wizard @on-complete="onComplete" color="#5e72e4" 
                        @on-loading="setLoading"
                        @on-validate="handleValidation"
                        @on-error="handleErrorMessage"
                        :nextButtonText="editprofilenextbtn"
                        :backButtonText="editprofilebackbtn">
                          <!-- basic details english -->
                          <tab-content v-if="lang=='english'" title="Basic Details" icon="ni ni-badge" :before-change="validateAsyncStep1">
                            <div class="row justify-content-center mt-1 mb-4">
                              <div class="col-lg-6">
                                <label class="form-control-label">Logo</label><br>
                                <input 
                                type="file" 
                                accept="image/*"
                                @change="uploadlogo" 
                                >
                                <img :src="editmodel.logo" class="img-fluid rounded img-thumbnail mt-2">
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">Cover image</label>
                                <input 
                                type="file" 
                                accept="image/*"
                                @change="uploadcover" 
                                >
                                <img :src="editmodel.cover_image" class="img-fluid rounded img-thumbnail mt-2">
                              </div>
                            </div>
                            <div class="row mt-1">
                              <div class="col-lg-6">
                                <label class="form-control-label">* Create a unique username</label>
                                <base-input
                                    v-model="editmodel.user_name"
                                    placeholder="username"
                                    class="mb-0"
                                    @change="isValidusername()"
                                />
                                  <div
                                      v-if="username"
                                      class="error h5 text-danger pt-1 pl-1"
                                    >
                                      Username already exist 
                                  </div>
                                  <div
                                      v-if="usernamelength && lang=='english'"
                                      class="error h5 text-danger pt-1 pl-1"
                                    >
                                      Username length not less than 4 
                                  </div>
                                  <div
                                      v-if="specialcharacter"
                                      class="error h5 text-danger pt-1 pl-1"
                                    >
                                     Special character not allowed  
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">* Business Email</label>
                                <base-input
                                    v-model="editmodel.business_email"
                                    placeholder="example@abc.com"
                                    class="mb-0"
                                />
                                <!-- <div class="error h5 text-danger pt-1 pl-1" >
                                      Field required 
                                </div> -->
                              </div>
                            </div>
                            <div class="row mt-1">
                              <div class="col-lg-6">
                                <label class="form-control-label">* Business Name (English)</label>
                                <base-input
                                    v-model="editmodel.business_name_english"
                                    placeholder="Business Name"
                                    class="mb-0"
                                />
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">اسم العمل (عربي)</label>
                                <base-input
                                    v-model="editmodel.business_name_arabic"
                                    placeholder="أعمالي"
                                    class="mb-0"
                                />
                              </div>
                            </div>
                            <div class="row mt-1">
                              <div class="col-lg-6">
                                <label class="form-control-label">Business Description (English)</label>
                                <textarea
                                    v-model="editmodel.business_description_english"
                                    aria-describedby="addon-right addon-left"
                                    class="form-control"
                                    rows="4"
                                />
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">وصف العمل (عربي)</label>
                                <textarea
                                    v-model="editmodel.business_description_arabic"
                                    aria-describedby="addon-right addon-left"
                                    class="form-control"
                                    rows="4"
                                />
                              </div>
                              <div class="col-lg-6 mt-2">
                                <label class="form-control-label">Add your products/services to receive business enquiries</label>
                                <multiselect  aria-describedby="addon-right addon-left" v-model="editmodel.deals_in" tag-placeholder="Add Deals" placeholder="Search" label="item_name" track-by="item_name" :options="materialData" :multiple="true" :taggable="true" ></multiselect>
                                <span>Multiple items can be added</span>
                              </div>
                            </div>
                          </tab-content>
                          <!-- basic details arabic -->
                          <tab-content v-if="lang=='arabic'" title="معلومات أساسية" icon="ni ni-badge" :before-change="validateAsyncStep1">
                            <div class="row justify-content-center mt-1 mb-4">
                              <div class="col-lg-6">
                                <label class="form-control-label">الشعار</label>
                                <input 
                                type="file" 
                                accept="image/*"
                                @change="uploadlogo" 
                                >
                                <img :src="editmodel.logo" class="img-fluid rounded img-thumbnail mt-2">
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">صورة الخلفية</label>
                                <input 
                                type="file" 
                                accept="image/*"
                                @change="uploadcover" 
                                >
                                <img :src="editmodel.cover_image" class="img-fluid rounded img-thumbnail mt-2">
                              </div>
                            </div>
                            <div class="row mt-1">
                              <div class="col-lg-6">
                                <label class="form-control-label">* اختيار اسم مستخدم</label>
                                <base-input
                                    v-model="editmodel.user_name"
                                    placeholder="username"
                                    class="mb-0"
                                    @change="isValidusername()"
                                />
                                  <div
                                      v-if="username"
                                      class="error h5 text-danger pt-1 pl-1"
                                    >
                                      اسم المستخدم موجود بالفعل 
                                  </div>
                                  
                                  <div
                                      v-if="usernamelength && lang=='arabic'"
                                      class="error h5 text-danger pt-1 pl-1"
                                    >
                                      لا يقل طول اسم المستخدم عن 4
                                  </div>
                                  <div
                                      v-if="specialcharacter"
                                      class="error h5 text-danger pt-1 pl-1"
                                    >
                                     الطابع الخاص غير مسموح به  
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">* البريد الالكتروني</label>
                                <base-input
                                    v-model="editmodel.business_email"
                                    placeholder="example@abc.com"
                                    class="mb-0"
                                />
                                <!-- <div class="error h5 text-danger pt-1 pl-1" >
                                      Field required 
                                </div> -->
                              </div>
                            </div>
                            <div class="row mt-1">
                              <div class="col-lg-6">
                                <label class="form-control-label">* الاسم التجاري (English)</label>
                                <base-input
                                    v-model="editmodel.business_name_english"
                                    placeholder="Business Name"
                                    class="mb-0"
                                />
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">الاسم التجاري (عربي)</label>
                                <base-input
                                    v-model="editmodel.business_name_arabic"
                                    placeholder="أعمالي"
                                    class="mb-0"
                                />
                              </div>
                            </div>
                            <div class="row mt-1">
                              <div class="col-lg-6">
                                <label class="form-control-label">نبذة عن العمل/الشركة (English)</label>
                                <textarea
                                    v-model="editmodel.business_description_english"
                                    aria-describedby="addon-right addon-left"
                                    class="form-control"
                                    rows="4"
                                />
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">نبذة عن العمل/الشركة (عربي)</label>
                                <textarea
                                    v-model="editmodel.business_description_arabic"
                                    aria-describedby="addon-right addon-left"
                                    class="form-control"
                                    rows="4"
                                />
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">المنتجات المتوفرة</label>
                                
                                <multiselect  aria-describedby="addon-right addon-left" v-model="editmodel.deals_in" tag-placeholder="Add Deals" placeholder="البحث" label="item_name" track-by="item_name" :options="materialData" :multiple="true" :taggable="true" ></multiselect>
                                <span>يمكنك اضافة عدة منتجات</span>
                              </div>
                            </div>
                          </tab-content>
                          <!-- business details english -->
                          <tab-content v-if="lang=='english'" title="Business Details" icon="fa fa-briefcase" :before-change="validateAsyncStep2" >
                            <div class="row">
                              <div class="col-lg-6">
                                <label class="form-control-label">* Business category</label>
                                <select aria-describedby="addon-right addon-left" v-model="editmodel.business_category" class="form-control" autocomplete="off" @change="getbusinesssubcategories($event)">
                                     <option value="" disabled="">Select category</option>
                                     <option v-for="category in businesscategories" :value="category._id" :key="category.business_category_name">
                                        {{ category.business_category_name }}
                                     </option>
                                </select>
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">Business sub-category</label>
                                <select  aria-describedby="addon-right addon-left" v-model="editmodel.business_subcategory" class="form-control" autocomplete="off">
                                 <option value="" >Select sub-category</option>
                                 <option v-for="subcategory in businesssubcategories" :value="subcategory._id" :key="subcategory.business_subcategory_name">
                                        {{ subcategory.business_subcategory_name }}
                                </option>
                               </select>
                              </div>
                            </div>
                            <div class="row mt-1">
                              <div class="col-lg-6">
                                <label class="form-control-label">Business Location</label>
                                <vue-google-autocomplete
                                    ref="address"
                                    id="map"
                                    classname="form-control mb-0"
                                    placeholder="Search your google map listing"
                                    v-on:placechanged="getAddressData"
                                    types="establishment"
                                    placechanged="place"
                                >
                                </vue-google-autocomplete>
                                <div class="mt-0" @click="getcurrentlocation()">
                                  <base-button id="location" type="default" outline class="border-0 float-right detect_location" size="sm"> <!-- id="location" type="checkbox" class="mb-3" v-model="currentlocation"> -->
                                    <i class="fa fa-crosshairs"></i> locate
                                  </base-button>
                                </div>
                                <!-- <base-input
                                    v-model="gpslink"
                                    placeholder="Business GPS Address"
                                    class="mb-0"
                                /> -->
                                <p class="text-center mb-0">Or</p>
                                <div class="mt-0">
                                  <base-input label="Paste Google Map Link" placeholder="Business GPS Address" input-classes="" v-model="editmodel.gpslink" />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">Business Address (English)</label>
                                <base-input
                                    v-model="editmodel.address"
                                    placeholder="Business Address"
                                    class="mb-0"
                                />
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">Country</label>
                                <select  aria-describedby="addon-right addon-left" v-model="editmodel.user_country" class="form-control" autocomplete="off">
                                  <option value="" >Select country</option>
                                  <option v-for="country in countrydata" :key="country._id" :value="country.country_name">{{country.country_name}}</option>
                               </select>
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">عنوان العمل (الإنجليزية)</label>
                                <base-input  
                                    v-model="editmodel.address_ar"
                                    placeholder="عنوان العمل"
                                    class="mb-0"
                                />
                              </div>
                              
                              <!-- <div class="col-lg-12 mt-3" @click="getcurrentlocation()">
                                <base-checkbox id="location" type="checkbox" class="mb-3" v-model="currentlocation">
                                    Make the current location as your business location
                                </base-checkbox>
                              </div> -->
                              <div class="col-lg-6">
                                <label class="form-control-label">Phone Number</label>
                                <base-input
                                    v-model="editmodel.user_phone"
                                    placeholder="9999999999"
                                    class="mb-0"
                                />
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">Business City</label>
                                <select aria-describedby="addon-right addon-left"
                                  addon-left-icon="ni ni-bullet-list-67"
                                  class="form-control"
                                  autocomplete="off" v-model="editmodel.business_city">
                                    <option value="" disabled="" >Select city</option>
                                    <option v-for="city in businesscities" :value="city.value_en" :key="city.value_en">
                                      {{ city.value_en+'('+city.value_ar+')' }}
                                     </option>
                                 </select>
                              </div>
                            </div>
                          </tab-content>
                          <!-- business details arabic -->
                          <tab-content v-if="lang=='arabic'" title="تفاصيل العمل" icon="fa fa-briefcase" :before-change="validateAsyncStep2" >
                            <div class="row">
                              <div class="col-lg-6">
                                <label class="form-control-label">* التصنيف</label>
                                <select aria-describedby="addon-right addon-left" v-model="editmodel.business_category" class="form-control form-control-alternative" autocomplete="off" @change="getbusinesssubcategories($event)">
                                     <option value="" disabled="">اختر الفئة</option>
                                     <option v-for="category in businesscategories" :value="category._id" :key="category.business_category_name">
                                                       {{ category.business_category_name }}
                                     </option>
                                </select>
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">التصنيف الفرعي</label>
                                <select  aria-describedby="addon-right addon-left" v-model="editmodel.business_subcategory" class="form-control form-control-alternative" autocomplete="off">
                                 <option value="" >اختر فئة فرعية</option>
                                 <option v-for="subcategory in businesssubcategories" :value="subcategory._id" :key="subcategory.business_subcategory_name">
                                                   {{ subcategory.business_subcategory_name }}
                                </option>
                               </select>
                              </div>
                            </div>
                            <div class="row mt-1">
                              <div class="col-lg-6">
                                <label class="form-control-label">عنوان GPS الخاص بالعمل</label>
                                <vue-google-autocomplete
                                    ref="address"
                                    id="map"
                                    classname="form-control mb-0"
                                    placeholder="عنوان البحث"
                                    v-on:placechanged="getAddressData"
                                    types="establishment"
                                    
                                >
                                </vue-google-autocomplete>
                                <div class="mt-0" @click="getcurrentlocation()">
                                  <base-button id="location" type="default" outline class="border-0 float-right detect_location" size="sm"> <!-- id="location" type="checkbox" class="mb-3" v-model="currentlocation"> -->
                                    حدد <i class="fa fa-crosshairs"></i>
                                  </base-button>
                                </div>
                                <!-- <base-input
                                    v-model="gpslink"
                                    placeholder="Business GPS Address"
                                    class="mb-0"
                                /> -->
                                <p class="text-center mb-0">Or</p>
                                <base-input label="رابط خريطة جوجل" placeholder="رابط خريطة جوجل" input-classes="" v-model="editmodel.gpslink" />
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">عنوان العمل (English)</label>
                                <base-input
                                    v-model="editmodel.address"
                                    placeholder="Business Address"
                                    class="mb-0"
                                />
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">الدولة</label>
                                <select  aria-describedby="addon-right addon-left" v-model="editmodel.user_country" class="form-control form-control-alternative" autocomplete="off">
                                  <option value="" >اختر ولاية</option>
                                  <option v-for="country in countrydata" :key="country._id" :value="country.country_name">{{country.country_name}}</option>
                               </select>
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">عنوان العمل (عربي)</label>
                                <base-input
                                    v-model="editmodel.address_ar"
                                    placeholder="عنوان العمل"
                                    class="mb-0"
                                />
                              </div>
                              
                              <!-- <div class="col-lg-12 mt-3" @click="getcurrentlocation()">
                                <base-checkbox id="location" type="checkbox" class="mb-3" v-model="currentlocation">
                                    تحديد الموقع الحالي كموقع عملك
                                </base-checkbox>
                              </div> -->
                              <div class="col-lg-6">
                                <label class="form-control-label">رقم التواصل</label>
                                <base-input
                                    v-model="editmodel.user_phone"
                                    placeholder="9999999999"
                                    class="mb-0"
                                />
                              </div>
                              <div class="col-lg-6">
                                <label class="form-control-label">المدينة</label>
                                <select aria-describedby="addon-right addon-left"
                                  addon-left-icon="ni ni-bullet-list-67"
                                  class="form-control"
                                  autocomplete="off" v-model="editmodel.business_city">
                                    <option value="" disabled="" >اختر مدينة</option>
                                    <option v-for="city in businesscities" :value="city.value_en" :key="city.value_en">
                                      {{ city.value_en+'('+city.value_ar+')' }}
                                     </option>
                                 </select>
                              </div>
                            </div>
                          </tab-content>
                          <!-- business hours english -->
                          <tab-content v-if="lang=='english'" title="Business Hours" icon="fa fa-clock-o">
                              <div class="row justify-content-center">
                                <div class="col-lg-6">
                                  <div class="col-lg-12">
                                    <p>Business Hours</p>
                                  </div>
                                  <div class="col-md-12 mt-2 mb-4" @click="sameastime()">
                                    <base-checkbox class="" type="checkbox" v-model="checkvalue" id="sameas"><span class="mt-3">Same time for all days</span></base-checkbox> 
                                  </div>
                                  <div class="col-md-12 mb-1" v-for="(day,index) in business_hours" :key="index">
                                    <span class="mb-2 d-block text-sm">{{day.day}}</span>
                                    <div class="row">
                                      <div class="col-lg-6 col-4 mb-3">
                                        <vue-timepicker id="endPicker" v-model="day.from" format="hh:mm A" ></vue-timepicker>
                                      </div>
                                      <div class="col-lg-6 col-4 mb-3">
                                        <vue-timepicker id="endPicker" v-model="day.to" format="hh:mm A"  @change="sameastime();checktime(day.from,day.to,'add')"></vue-timepicker>
                                      </div>
                                      
                                    </div>
                                    <div id="timev" style="color: red;"></div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="col-lg-12">
                                    <p>Break hours</p>
                                  </div>
                                  <div class="col-md-12 mt-2 mb-4" @click="lsameastime()">
                                    <base-checkbox class="" type="checkbox" v-model="lcheckvalue" id="lsameas"><span class="mt-3">Same time for all days</span></base-checkbox> 
                                  </div>
                                  <div class="col-md-12 mb-1" v-for="day in leisure_hours" :key="day.day">
                                    <span class="mb-2 d-block text-sm">{{day.day}}</span>
                                    <div class="row">
                                      <div class="col-lg-6 col-4 mb-3">
                                        <vue-timepicker id="endPicker" v-model="day.from" format="hh:mm A" ></vue-timepicker>
                                      </div>
                                      <div class="col-lg-6 col-4 mb-3">
                                        <vue-timepicker id="endPicker" v-model="day.to" format="hh:mm A"  @change="lsameastime();lchecktime(day.from,day.to,'add')"></vue-timepicker>
                                      </div>
                                      
                                    </div>
                                    <div id="ltimev" style="color: red;"></div>
                                  </div>
                                </div>
                              </div>
                          </tab-content>
                          <!-- business hours arabic -->
                          <tab-content v-if="lang=='arabic'" title="ساعات العمل" icon="fa fa-clock-o">
                              <div class="row justify-content-center">
                                <div class="col-lg-6">
                                  <div class="col-lg-12">
                                    <p>ساعات العمل</p>
                                  </div>
                                  <div class="col-md-12 mt-2 mb-4" @click="sameastime()">
                                    <base-checkbox class="" type="checkbox" v-model="checkvalue" id="sameas"><span class="mt-3">نفس التوقيت في كل الأيام</span></base-checkbox> 
                                  </div>
                                  <div class="col-md-12 mb-1" v-for="(day,index) in business_hours" :key="index">
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Sun'">الأحد</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Mon'">الاثنين</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Tue'">الثلاثاء</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Wed'">الأربعاء</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Thu'">الخميس</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Fri'">الجمعة</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Sat'">السبت</span>
                                    <div class="row">
                                      <div class="col-lg-6 col-4 mb-3">
                                        <vue-timepicker id="endPicker" v-model="day.from" format="hh:mm A" ></vue-timepicker>
                                      </div>
                                      <div class="col-lg-6 col-4 mb-3">
                                        <vue-timepicker id="endPicker" v-model="day.to" format="hh:mm A"  @change="sameastime();checktime(day.from,day.to,'add')"></vue-timepicker>
                                      </div>
                                      
                                    </div>
                                    <div id="timev" style="color: red;"></div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="col-lg-12">
                                    <p>ساعات الاستراحة</p>
                                  </div>
                                  <div class="col-md-12 mt-2 mb-4" @click="lsameastime()">
                                    <base-checkbox class="" type="checkbox" v-model="lcheckvalue" id="lsameas"><span class="mt-3">نفس التوقيت في كل الأيام</span></base-checkbox> 
                                  </div>
                                  <div class="col-md-12 mb-1" v-for="day in leisure_hours" :key="day.day">
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Sun'">الأحد</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Mon'">الاثنين</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Tue'">الثلاثاء</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Wed'">الأربعاء</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Thu'">الخميس</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Fri'">الجمعة</span>
                                    <span class="mb-2 d-block text-sm" v-if="day.day=='Sat'">السبت</span>
                                    <div class="row">
                                      <div class="col-lg-6 col-4 mb-3">
                                        <vue-timepicker id="endPicker" v-model="day.from" format="hh:mm A" ></vue-timepicker>
                                      </div>
                                      <div class="col-lg-6 col-4 mb-3">
                                        <vue-timepicker id="endPicker" v-model="day.to" format="hh:mm A"  @change="lsameastime();lchecktime(day.from,day.to,'add')"></vue-timepicker>
                                      </div>
                                      
                                    </div>
                                    <div id="ltimev" style="color: red;"></div>
                                  </div>
                                </div>
                              </div>
                          </tab-content>
                          <!-- social media english -->
                          <tab-content v-if="lang=='english'" title="Add Social Pages/Links" icon="fa fa-facebook">
                              <div class="row justify-content-center">
                                <div class="col-lg-6">
                                  <label class="form-control-label">Website</label>
                                  <base-input
                                      v-model="editmodel.web_link"
                                      placeholder="www.yoursite.com"
                                      class="mb-0"
                                      addon-left-icon="fa fa-link"
                                    >
                                  </base-input>
                                </div>
                                <div class="col-lg-6">
                                  <label class="form-control-label">Facebook Link</label>
                                  <base-input
                                      v-model="editmodel.fb_link"
                                      placeholder=""
                                      class="mb-0 social-link"
                                      addon-left-icon="fa fa-facebook"
                                      >
                                    <template slot="addonLeft">
                                        https://facebook.com/
                                    </template>
                                  </base-input>
                                </div>
                              </div>
                              <div class="row mt-2">
                                <div class="col-lg-6">
                                  <label class="form-control-label">Twitter Link</label>
                                  <base-input
                                      v-model="editmodel.twitter_link"
                                      placeholder=""
                                      class="mb-0 social-link"
                                      addon-left-icon="fa fa-twitter"
                                    >
                                    <template slot="addonLeft">
                                        https://twitter.com/
                                    </template>
                                  </base-input>
                                </div>
                                <div class="col-lg-6">
                                  <label class="form-control-label">Instagram Link</label>
                                  <base-input
                                      v-model="editmodel.instagram_link"
                                      placeholder=""
                                      class="mb-0 social-link"
                                      addon-left-icon="fa fa-instagram"
                                    >
                                    <template slot="addonLeft">
                                        https://instagram.com/
                                    </template>
                                  </base-input>
                                </div>
                              </div>
                              <div class="row mt-2">
                                <div class="col-lg-6">
                                  <label class="form-control-label">Youtube Link</label>
                                  <base-input
                                      v-model="editmodel.youtube_link"
                                      placeholder=""
                                      class="mb-0 social-link"
                                      addon-left-icon="fa fa-youtube"
                                    >
                                    <template slot="addonLeft">
                                        https://youtube.com/
                                    </template>
                                  </base-input>
                                </div>
                              </div>
                          </tab-content>
                          <!-- social media arabic -->
                          <tab-content v-if="lang=='arabic'" title="اضافة صفحات التواصل الاجتماعي" icon="fa fa-facebook">
                              <div class="row justify-content-center">
                                <div class="col-lg-6">
                                  <label class="form-control-label">الموقع الالكتروني</label>
                                  <base-input
                                      v-model="editmodel.web_link"
                                      placeholder="www.yoursite.com"
                                      class="mb-0"
                                      addon-left-icon="fa fa-link"
                                  />
                                </div>
                                <div class="col-lg-6">
                                  <label class="form-control-label">Facebook Link</label>
                                  <base-input
                                      v-model="editmodel.fb_link"
                                      placeholder=""
                                      class="mb-0 social-link"
                                      addon-left-icon="fa fa-facebook"
                                    >
                                    <template slot="addonLeft">
                                        https://facebook.com/
                                    </template>
                                  </base-input>
                                </div>
                              </div>
                              <div class="row mt-2">
                                <div class="col-lg-6">
                                  <label class="form-control-label">Twitter Link</label>
                                  <base-input
                                      v-model="editmodel.twitter_link"
                                      placeholder=""
                                      class="mb-0 social-link"
                                      addon-left-icon="fa fa-twitter"
                                    >
                                    <template slot="addonLeft">
                                        https://twitter.com/
                                    </template>
                                  </base-input>
                                </div>
                                <div class="col-lg-6">
                                  <label class="form-control-label">Instagram Link</label>
                                  <base-input
                                      v-model="editmodel.instagram_link"
                                      placeholder=""
                                      class="mb-0 social-link"
                                      addon-left-icon="fa fa-instagram"
                                    >
                                    <template slot="addonLeft">
                                        https://twitter.com/
                                    </template>
                                  </base-input>
                                </div>
                              </div>
                              <div class="row mt-2">
                                <div class="col-lg-6">
                                  <label class="form-control-label">Youtube Link</label>
                                  <base-input
                                      v-model="editmodel.youtube_link"
                                      placeholder=""
                                      class="mb-0 social-link"
                                      addon-left-icon="fa fa-youtube"
                                    >
                                    <template slot="addonLeft">
                                        https://youtube.com/
                                    </template>
                                  </base-input>
                                </div>
                              </div>
                          </tab-content>
                          <button slot="finish" id="updateprofile" class="btn-primary wizard-btn" style="background-color: rgb(94, 114, 228); border-color: rgb(94, 114, 228); color: white;"><span v-if="lang=='english'">Update profile</span><span v-if="lang=='arabic'">تحديث الملف</span></button>
                          <div class="loader" v-if="loadingWizard"></div>
                          <div v-if="errorMsg">
                              <span class="error text-danger">{{errorMsg}}</span>
                          </div>
                      </form-wizard>
                  </div>
              </div>
            </div>
          </form>
        </template>

        <template slot="footer">
          <base-button type="seondary" id="updatebtn1" @click="editprofile = false"><span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">اغلاق</span>
          </base-button>
        </template>
    </modal>
    <!-- edit profile non-business user -->
    <modal :show.sync="editprofile_user" modalClasses="modal-lg">
        <h6 slot="header" class="modal-title" id="modal-title-default" v-if="lang=='english'">Edit Profile</h6>
        <h6 slot="header" class="modal-title" id="modal-title-default" v-if="lang=='arabic'">تعديل الحساب</h6>
        <template>
          <form @submit.prevent> 
            <div class="">
              <div class="row mt-1">
                <div class="col-lg-6">
                  <label class="form-control-label" v-if="lang=='english'">* Create a unique username</label>
                  <label class="form-control-label arabic" v-if="lang=='arabic'">* اختيار اسم مستخدم</label>
                  <base-input
                      v-model="editmodel.user_name"
                      placeholder="username"
                      class="mb-0"
                      @change="isValidusername()"
                  />
                    <div
                        v-if="username"
                        class="error h5 text-danger pt-1 pl-1"
                      >
                        <span v-if="lang=='english'">Username already exist </span>
                        <span v-if="lang=='arabic'">اسم المستخدم غير متاح</span>
                    </div>
                    
                    <div
                        v-if="usernamelength"
                        class="error h5 text-danger pt-1 pl-1"
                      >
                        <span v-if="lang=='english'">Username length should not be less than 4 </span>
                        <span v-if="lang=='arabic'">اسم المستخدم يجب أن يتكون من 4 حروف على الأقل</span>
                    </div>
                    <div
                        v-if="specialcharacter"
                        class="error h5 text-danger pt-1 pl-1"
                      >
                       <span v-if="lang=='english'">Special character not allowed</span>
                       <span v-if="lang=='arabic'">لا يمكن استخدام رموز خاصة</span>  
                    </div>
                </div>
                <div class="col-lg-6">
                  <label class="form-control-label" v-if="lang=='english'">* Your Name</label>
                  <label class="form-control-label arabic" v-if="lang=='arabic'">* الاسم</label>
                  <base-input
                      v-model="editmodel.user_public_name"
                      placeholder="for example; Khalid Alwaili"
                      class="mb-0"
                  />
                  <!-- <div class="error h5 text-danger pt-1 pl-1" >
                        Field required 
                  </div> -->
                </div>
                <div class="col-lg-6">
               <label class="form-control-label" v-if="lang=='english'">User DP</label>
               <label class="form-control-label arabic" v-if="lang=='arabic'">اختيار صورة خلفية</label>
                <input 
                type="file" 
                accept="image/*"
                @change="uploaddp" 
                >
                <img :src="editmodel.user_dp" class="img-fluid rounded img-thumbnail mt-2">
              </div>
                <div class="col-lg-12 text-center mt-4">
                    <button id="updateprofile_user" class="btn-primary text-center" :disabled="usernamelength || username || specialcharacter"  @click="updateuser()"><span v-if="lang=='english'">Update profile</span><span v-if="lang=='arabic'">تحديث البيانات</span></button>
                </div>
              </div>
            </div>
          </form>
        </template>

        <template slot="footer">
          <base-button type="seondary" id="updatebtn1" @click="editprofile_user = false"><span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">اغلاق</span>
          </base-button>
        </template>
    </modal>
    <!-- change password -->
    <modal :show.sync="changepassword" modalClasses="modal-lg">
      <h6 slot="header" class="modal-title" id="modal-title-default" v-if="lang=='english'">Change Password</h6>
      <h6 slot="header" class="modal-title arabic" id="modal-title-default" v-if="lang=='arabic'">تغيير كلمة المرور</h6>
      <template>
        <form @submit.prevent> 
          <div class="">
            <div class="row mt-1">
              <div class="col-lg-6">
                <label class="form-control-label" v-if="lang=='english'">New password</label>
                <label class="form-control-label arabic" v-if="lang=='arabic'">كلمة المرور الجديدة</label>
                <base-input
                    v-model="changemodel.password"
                    placeholder="password"
                    class="mb-0"
                    v-if="lang=='english'"
                />
                <base-input
                    v-model="changemodel.password"
                    placeholder="كلمة المرور"
                    class="mb-0"
                    v-if="lang=='arabic'"
                />
              </div>
              <div class="col-lg-6">
                <label class="form-control-label" v-if="lang=='english'">Confirm password</label>
                <label class="form-control-label arabic" v-if="lang=='arabic'">تأكيد كلمة المرور</label>
                <base-input
                    v-model="changemodel.cpassword"
                    placeholder="password"
                    class="mb-0"
                    v-if="lang=='english'"
                />
                <base-input
                    v-model="changemodel.cpassword"
                    placeholder="كلمة المرور"
                    class="mb-0"
                    v-if="lang=='arabic'"
                />
                <!-- <div class="error h5 text-danger pt-1 pl-1" >
                      Field required 
                </div> -->
              </div>
              <div class="col-lg-12 mt-3" v-if="this.design.user_type=='Business'">
                <base-checkbox id="makegeneral" type="checkbox" class="mb-3" v-model="changemodel.user_type">
                  <span v-if="lang=='english'">Switch to general profile</span>
                  <span v-if="lang=='arabic'">تحويل حسابك لحساب مستخدم عام</span>
                </base-checkbox>
              </div>
              <div class="col-lg-12 text-center mt-4">
                  <base-button type="success" id="changepasswordbtn" @click="changepasswordfunction()" class="text-center"><span v-if="lang=='english'">Save Details</span><span v-if="lang=='arabic'">حفظ البيانات</span> </base-button>
              </div>
            </div>
          </div>
        </form>
      </template>

      <template slot="footer">
        <base-button type="seondary" @click="changepassword = false"><span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">اغلاق</span>
        </base-button>
      </template>
    </modal>
    <!-- Business Hours -->
    <modal :show.sync="businesshours">
          <h6 slot="header" class="modal-title" id="modal-title-default">Business Hours</h6>

          
          <template>
            <form @submit.prevent> 
              <div class="mt-3">
              <div class="row" >
                <div class="col-lg-4">
                    <p class="h5">Day</p>
                </div>
                <div class="col-lg-4">
                    <p class="h5">Opening Time</p>
                </div>
                <div class="col-lg-4">
                    <p class="h5">Closing Time</p>
                </div>
              </div>
              <div class="row mt-3" v-for="(hours) in businesshoursdata" :key="hours.day">
                <div class="col-lg-4">
                    <p class="mb-0">{{hours.day}}</p>
                </div>
                <div class="col-lg-4">
                    <p class="mb-0">{{hours.from}}</p>
                </div>
                <div class="col-lg-4">
                    <p class="mb-0">{{hours.to}}</p>
                </div>
              </div>
              </div>
            </form>
          </template>

          <template slot="footer">
              <base-button type="primary" id="updatebtn1" @click="businesshours = false"><span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">اغلاق</span>
              </base-button>
          </template>
    </modal>
    <!-- modal leisurehours -->
    <modal :show.sync="leisurehours">
          <h6 slot="header" class="modal-title" id="modal-title-default">Break Hours</h6>
                    <template>
                      <form @submit.prevent> 
                        <div class="mt-3">
                        <div class="row" >
                          <div class="col-lg-4">
                              <p class="h5">Day</p>
                          </div>
                          <div class="col-lg-4">
                              <p class="h5">From</p>
                          </div>
                          <div class="col-lg-4">
                              <p class="h5">To</p>
                          </div>
                        </div>
                        <div class="row mt-3" v-for="(leisure) in leisurehoursdata" :key="leisure.day">
                          <div class="col-lg-4">
                              <p class="mb-0">{{leisure.day}}</p>
                          </div>
                          <div class="col-lg-4">
                              <p class="mb-0">{{leisure.from}}</p>
                          </div>
                          <div class="col-lg-4">
                              <p class="mb-0">{{leisure.to}}</p>
                          </div>
                        </div>
                        </div>
                      </form>
                    </template>

          <template slot="footer">
              <base-button type="primary" id="updatebtn1" @click="leisurehours = false"><span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">اغلاق</span>
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
        <span v-if="lang=='english'">New projects</span>
        <span v-if="lang=='arabic'">مشاريع جديدة</span>
      </p>
      <template>
        <form @submit.prevent>
          <div class="row justify-content-center">
            <div class="col-lg-8 mb-3">
              <label class="form-control-label" v-if="lang=='english'">Project Title</label>
              <label class="form-control-label" v-if="lang=='arabic'">اسم المشروع</label>
              <base-input
                placeholder="Collection Title"
                v-model="collection.project_name"
                addon-left-icon="fa fa-commenting-o"
                class="form-control-alternative"
              />
            </div>
            <div class="col-lg-8">
              <label class="form-control-label" v-if="lang=='english'">Project Description</label>
              <label class="form-control-label" v-if="lang=='arabic'">وصف المشروع</label>
              <base-input
                placeholder="Enter description"
                addon-left-icon="fa fa-commenting"
                v-model="collection.project_description"
                class="form-control-alternative"
              />
            </div>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-lg-8">
              <base-button
                @click="saveprojects()"
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
          <span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">اغلاق</span>
        </base-button>
      </template>
    </modal>
    <!-- modal edit collection window -->
    <modal :show.sync="editcreatecollection">
      <p
        id="modal-title-default"
        slot="header"
        class="modal-title"
      >
        <span v-if="lang=='english'">New projects</span>
        <span v-if="lang=='arabic'">مشاريع جديدة</span>
      </p>
      <template>
        <form @submit.prevent>
          <div class="row justify-content-center">
            <div class="col-lg-8 mb-3">
              <label class="form-control-label" v-if="lang=='english'">Project Title</label>
              <label class="form-control-label" v-if="lang=='arabic'">اسم المشروع</label>
              <base-input
                placeholder="Collection Title"
                v-model="editcollection.project_name"
                addon-left-icon="fa fa-commenting-o"
                class="form-control-alternative"
              />
            </div>
            <div class="col-lg-8">
              <label class="form-control-label" v-if="lang=='english'">Project Description</label>
              <label class="form-control-label" v-if="lang=='arabic'">وصف المشروع</label>
              <base-input
                placeholder="Enter description"
                addon-left-icon="fa fa-commenting"
                v-model="editcollection.project_description"
                class="form-control-alternative"
              />
            </div>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-lg-8">
              <base-button
                @click="updateprojects()"
                id="editcollectionbtn"
                size="lg"
                type="success"
                icon="fa fa-plus"
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
          @click="editcreatecollection = false"
        >
          <span v-if="lang=='english'">Close</span>
          <span v-if="lang=='arabic'">اغلاق</span>
        </base-button>
      </template>
    </modal>
    <!-- modal share inventory -->
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
              <span v-if="lang=='english'">Close</span><span v-if="lang=='arabic'">اغلاق</span>
            </base-button>
        </template>
    </modal>
  </div>
</template>
<script>
  import axios from "axios";
  import VueSwal from 'vue-swal';
  import _ from 'lodash';
  import moment from 'moment';
  import VueFormWizard from 'vue-form-wizard'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  import VueTimepicker from 'vue2-timepicker';
  import Multiselect from 'vue-multiselect';
  import 'vue2-timepicker/dist/VueTimepicker.css'
  import VueGeolocation from 'vue-browser-geolocation';
  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  export default {
    name: 'Business',
     components: {VueTimepicker,Multiselect,VueGoogleAutocomplete},
    props:['id'],
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
            { network: 'email', name: 'Email', icon: ' fa fa-envelope', color: '#333333' },
            { network: 'facebook', name: 'Facebook', icon: 'fab fah  fa fa-facebook-f', color: '#1877f2' },
            { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah  fa fa-linkedin', color: '#007bb5' },
            // { network: 'odnoklassniki', name: 'Odnoklassniki', icon: 'fab fah  fa fa-odnoklassniki', color: '#ed812b' },
            { network: 'pinterest', name: 'Pinterest', icon: 'fab fah  fa fa-pinterest', color: '#bd081c' },
            // { network: 'reddit', name: 'Reddit', icon: 'fab fah  fa fa-reddit-alien', color: '#ff4500' },
            // { network: 'skype', name: 'Skype', icon: 'fab fah  fa fa-skype', color: '#00aff0' },
            { network: 'telegram', name: 'Telegram', icon: 'fab fah  fa fa-telegram', color: '#0088cc' },
            // { network: 'tumblr', name: 'Tumblr', icon: 'fab fah  fa fa-tumblr', color: '#35465c' },
            { network: 'twitter', name: 'Twitter', icon: 'fab fah  fa fa-twitter', color: '#1da1f2' },
            { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah  fa fa-whatsapp', color: '#25d366' }
          ],
        sharebtn:false,
        address:'',
        additem:false,
        edititem:false,
        editprofilenextbtn:"Next",
        editprofilebackbtn:"Back",
        lat:0,
        long:0,
        materialData:[],
        editprofile:false,
        changepassword:false,
        editprofile_user:false,
        username:false,
        usernamelength:false,
        specialcharacter:false,
        currentlocation:false,
        gpslink:'',
        selected:false,
        brands:[],
        countrydata:[],
        userData:[],
        tagData:[],
        item_mentions:[],
        checkvalue :false,
        lcheckvalue:false,
        loadingWizard: false,
        errorMsg: null,
        loadingWizard2: false,
        errorMsg2: null,
        loadingWizard1: false,
        errorMsg1: null,
        count: 0,
        count1: 0,
        uploadPercentage:0,
        imagearr:[],
        editimagearr:[],
        user_likes:[],
        lang:localStorage.getItem('lang'),
        business_hours:[{day:"Sun",from:'',to:''},{day:"Mon",from:'',to:''},{day:"Tue",from:'',to:''},{day:"Wed",from:'',to:''},{day:"Thu",from:'',to:''},{day:"Fri",from:'',to:''},{day:"Sat",from:'',to:''}],
        leisure_hours:[{day:"Sun",from:'',to:''},{day:"Mon",from:'',to:''},{day:"Tue",from:'',to:''},{day:"Wed",from:'',to:''},{day:"Thu",from:'',to:''},{day:"Fri",from:'',to:''},{day:"Sat",from:'',to:''}],
        selectedimage:'',
        changemodel:{
            id:'',
            cpassword:'',
            password:'',
            user_type:0,
        },
        model:{
           item_name:'',
           item_name_ar:'',
           item_description_ar:'',
           item_description:'',
           item_type:'Design',
           item_visibility:'Public',
           item_category:'',
           item_subcategory:'',
           project_id:'',
           item_space:'',
           item_brand:'',
           item_cost:'',
           item_theme_color:'',
           item_tags:[],
           optype:'Add',
           item_img:[],
           item_mentions:[],
           item_rate:'',
           status:'approved',
           created_by:localStorage.getItem('_id')
           },
           editmodals:{
           item_name:'',
           item_name_ar:'',
           item_description_ar:'',
           item_description:'',
           item_type:'Design',
           item_visibility:'Public',
           item_category:'',
           item_subcategory:'',
           project_id:'',
           item_space:'',
           item_brand:'',
           item_cost:'',
           item_theme_color:'',
           item_tags:[],
           optype:'Add',
           item_img:[],
           item_mentions:[],
           item_rate:'',
           status:'approved',
           created_by:localStorage.getItem('_id')
           },
        editmodel:{
            user_type : '',
            user_name : '',
            user_public_name : '',
            user_email : '',
            user_fcm : '',
            user_gid : '',
            user_fid : '',
            user_dp : '',
            user_password : '',
            user_permissions :[],
            user_phone : '',
            user_language : '',
            user_country : '',
            user_status : '',
            business_name_english : '',
            business_name_arabic  :'',
            business_category : '',
            business_subcategory : '',
            business_email : '',
            business_type : '',
            business_brand : '',
            business_brand_ar : '',
            business_space : '',
            business_space_ar : '',
            business_city : '',
            business_city_ar : '',
            business_hours : '',
            leisure_hours : '',
            location_lat : '',
            location_long : '',
            address : '',
            address_ar : '',
            logo : '',
            cover_image : '',
            deals_in:[],
            business_description_english : '',
            business_description_arabic : '',
            web_link : '',
            fb_link : '',
            instagram_link : '',
            youtube_link : '',
            twitter_link : '',
            ratings :'',
            business_featured : '',
            user_likes : [],
            gpslink:'',
           },
        collection:{
            project_name:'',
            project_description:'',
            collection_type:'',
            status:'approved',
            created_by:localStorage.getItem('_id')
         },
        editcollection:{
            project_id:'',
            project_name:'',
            project_description:'',
            collection_type:'',
            status:'approved',
            created_by:localStorage.getItem('_id')
         },
        project_id:'',
        design: [],
        subcategories:[],
        categories:[],
        businesscategories:[],
        businesssubcategories:[],
        businesscities:[],
        commentsdata: [],
        cover_image:'',
        portfolio:[],
        collectionData:[],
        addcollection:false,
        createcollection:false,
        editcreatecollection:false,
        deleteitem:false,
        businesshours:false,
        leisurehours:false,
        businesshoursdata:[],
        leisurehoursdata:[],
         statuses: {
         1: {id: 'pending', val: 'pending'},
         2: {id: 'approved',val: 'approved'}
        },
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
      this.$refs.address.focus();
      if(this.lang=='english'){
        this.editprofilenextbtn='Next';
        this.editprofilebackbtn='Back';
      }else{
        this.editprofilenextbtn='التالي';
        this.editprofilebackbtn='السابق';
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_materiallist',{"details" :{},"offset" :"0"})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.materialData=response.data.details;
         console.log(this.materialData);
        }
            
      })

        if(!localStorage.getItem('accessToken')){
          this.$router.push('/login');
       }
      //localStorage.setItem('user_id','3cexv96pk35tv1zj');
      const querystring = require('querystring');
      console.log(localStorage.getItem('user_id'))
      this.path=process.env.VUE_APP_API_ENDPOINT;
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_id',{"user_id":localStorage.getItem('user_id')},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.design=response.data.details[0];
        this.user_likes= this.design.user_likes;
        this.editmodel.address=this.design.address;
        this.changemodel.id=this.design._id;
        this.cover_image=this.design.cover_image;
        this.editmodel.user_email=this.design.user_email;
        this.editmodel.user_public_name=this.design.user_public_name;
        if(this.design.business_category){
          this.editmodel.business_category=this.design.business_category._id;  
          axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_subcategory',querystring.stringify({ business_category_oid:this.editmodel.business_category }),this.auth1).then(response => {
        console.log(response);
          if(response.data.details){
            this.businesssubcategories=response.data.details;
            //this.model.category_name=response.data.subcategory_data[0].category_name;
            }
                
          })
        }
        if(this.design.deals_in){
          for (var i = 0; i < this.design.deals_in.length; i++) {
            this.editmodel.deals_in.push({"item_name":this.design.deals_in[i]});
          }
          //this.editmodel.deals_in=this.design.deals_in;  
        }
        if(this.design.user_country){
          this.editmodel.user_country=this.design.user_country;  
        }
        if(this.design.business_city){
          this.editmodel.business_city=this.design.business_city;  
        }
        if(this.design.business_description_english){
          this.editmodel.business_description_english=this.design.business_description_english;  
        }
        if(this.design.business_description_arabic){
          this.editmodel.business_description_arabic=this.design.business_description_arabic;  
        }
        if(this.design.business_email){
          this.editmodel.business_email=this.design.business_email;  
        }
        if(this.design.business_hours){
          this.business_hours=JSON.parse(this.design.business_hours);  
        }
        if(this.design.leisure_hours){
          this.leisure_hours=JSON.parse(this.design.leisure_hours);  
        }
        if(this.design.business_name_english){
          this.editmodel.business_name_english=this.design.business_name_english;  
        }
        if(this.design.business_name_arabic){
          this.editmodel.business_name_arabic=this.design.business_name_arabic;  
        }
        if(this.design.business_subcategory){
          this.editmodel.business_subcategory=this.design.business_subcategory._id;  
        }
        if(this.design.cover_image){
          this.editmodel.cover_image=this.design.cover_image;  
        }
        if(this.design.fb_link){
          this.editmodel.fb_link=this.design.fb_link;  
        }
        if(this.design.instagram_link){
          this.editmodel.instagram_link=this.design.instagram_link;  
        }
        if(this.design.location_lat){
          this.editmodel.location_lat=this.design.location_lat;  
        }
        if(this.design.location_long){
          this.editmodel.location_long=this.design.location_long;  
        }
        if(this.design.logo){
          this.editmodel.logo=this.design.logo;  
        }
        if(this.design.ratings){
          this.editmodel.ratings=this.design.ratings;  
        }
        if(this.design.twitter_link){
          this.editmodel.twitter_link=this.design.twitter_link;  
        }
        if(this.design.user_id){
          this.editmodel.user_id=this.design.user_id;  
        }
        if(this.design.user_likes){
          this.editmodel.user_likes=this.design.user_likes;  
        }
        if(this.design.user_name){
          this.editmodel.user_name=this.design.user_name;  
        }
        if(this.design.user_public_name){
          this.editmodel.user_public_name=this.design.user_public_name;  
        }
        if(this.design.user_permissions){
          this.editmodel.user_permissions=this.design.user_permissions;  
        }
        if(this.design.user_phone){
          this.editmodel.user_phone=this.design.user_phone;  
        }
        if(this.design.user_reviews){
          this.editmodel.user_reviews=this.design.user_reviews;  
        }
        if(this.design.user_status){
          this.editmodel.user_status=this.design.user_status;  
        }
        if(this.design.user_type){
          this.editmodel.user_type=this.design.user_type;  
        }
        if(this.design.web_link){
          this.editmodel.web_link=this.design.web_link;  
        }
        if(this.design._id){
          this.editmodel._id=this.design._id;  
        }

       axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_businessuser_all',{ "details" :{},"offset" : "0"},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        let userData=response.data.details;
        for (var i = 0; i < userData.length; i++) {
            if(userData[i].business_name_english){
                this.userData.push({"_id":userData[i]._id,"business_name_english":userData[i].business_name_english});
            }
        }
        console.log(this.userData);
        }
            
      })
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_country',{ "details" :{"status": "approved",},"offset" : "0"},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.countrydata=response.data.details;
        console.log(this.countrydata);
        }
            
      })
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_tag_all',{},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.tagData=response.data.details;
        //this.userData=this.tagData;
        }
            
      })

     axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_project_by_user',{"created_by":this.design._id,"status" :"approved"},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.collectionData=response.data.details;
        let portfolio =  _.map(this.collectionData, projects => (projects.project_items));
        for (var i = 0; i < portfolio.length; i++) {
            for (var j = 0; j < portfolio[i].length; j++) {
            this.portfolio.push(portfolio[i][j])
        }
        }
        console.log(this.portfolio);
        }
            
      })
        //this.commentsdata=response.data.details[0].user_reviews;
        if(this.design.user_reviews){
          let j=0;
        for (let i = 0; i < this.design.user_reviews.length; i++) {

            axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_oid',{"user_oid":response.data.details[0].user_reviews[i].comment_by},this.auth).then(response1 => {
            console.log(response1);
            if(response1.data.details){
              
              console.log(j)
              console.log(this.design.user_reviews[j]);
              console.log(response.data.details[0].user_reviews[i].rating);
              var pair = {user_dp: response1.data.details[0].user_dp,user_name:response1.data.details[0].user_name,comment:this.design.user_reviews[j].comment,rating:this.design.user_reviews[j].rating};
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

      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_category',{"status":"approved"})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businesscategories=response.data.details;
        }
            
      })

      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_filter_all',{ "filters" :{ "filter_name":"city"}})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businesscities=response.data.details[0].filter_values;
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
    },

    methods: {
      getAddressData: function (addressData, placeResultData, id) {
            this.address = addressData;
            let place=document.getElementById("map").value;
            console.log(this.address);
            this.editmodel.address=place;
            this.editmodel.user_country=this.address.country;
      },
      addTag (newTag) {
        axios
          .post(process.env.VUE_APP_API_ENDPOINT+'create_tag',{"tag":newTag})
          .then(response => {
            console.log(response);
            let ref=this;
            if(response.data.details){
                
               axios
                  .post(process.env.VUE_APP_API_ENDPOINT+'read_tag_all',{},ref.auth)
                  .then(response => {
                    console.log(response);
                    if(response.data.details){
                     ref.tagData=response.data.details;
                    }
                        
                  })
                  ref.model.item_tags.push(response.data.details);

            }
                
          })
       },
       closetag(tag){
        console.log("close",tag);

       },
       adduser (newTag) {
        const tag = {
          name: newTag,
          // code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        }
        
       },
       deleteimage(index){
           this.model.item_img.splice(index,1);
       },
       editdeleteimage(index){
           this.editmodals.item_img.splice(index,1);
       },
       setLoading: function(value) {
           this.loadingWizard = value
       },
       setLoading2: function(value) {
           this.loadingWizard2 = value
       },
       handleValidation2: function(isValid, tabIndex){
          console.log('Tab: '+tabIndex+ ' valid: '+isValid)
       },
       handleValidation: function(isValid, tabIndex){
          console.log('Tab: '+tabIndex+ ' valid: '+isValid)
       },
       handleErrorMessage: function(errorMsg){
         this.errorMsg = errorMsg
       },
       handleErrorMessage2: function(errorMsg){
         this.errorMsg2 = errorMsg
       },
       validateAsyncStep1:function() {
         return new Promise((resolve, reject) => {
           setTimeout(() => {
             if(!this.editmodel.user_name || !this.editmodel.business_email || !this.editmodel.business_name_english){
              this.count++;
                if(this.lang=='arabic'){
                  reject('املأ الكل * الحقل المطلوب')
                }else{
                  reject('Fill all * required field')
                }
                
             }else{
              this.count = 0;
              resolve(true)
             }   
           }, 1000)
         })
        },
        validateAsyncStep2:function() {
         return new Promise((resolve, reject) => {
           setTimeout(() => {
              if(!this.editmodel.business_category){
              this.count++;
               if(this.lang=='arabic'){
                  reject('فئة العمل مطلوبة')
                }else{
                  reject('Business category is required')
                }
                
             }else{
              this.count = 0
              resolve(true)
             }   
           }, 1000)
         })
        },
       setLoading1: function(value) {
           this.loadingWizard1 = value
       },
       handleValidation1: function(isValid, tabIndex){
          console.log('Tab: '+tabIndex+ ' valid: '+isValid)
       },
       handleErrorMessage1: function(errorMsg){
         this.errorMsg1 = errorMsg
       },
       validateitemStep1:function() {
         return new Promise((resolve, reject) => {
           setTimeout(() => {
              if(this.model.item_img.length ==0){
              this.count1++;
              if(this.lang=='arabic'){
                  reject('يجب تحميل صورة واحدة على الأقل')
                }else{
                  reject('One image required')
                }
                
             }else{
              this.count1 = 0
              resolve(true)
             }   
           }, 1000)
         })
        },
        validateitemStep2:function() {
         return new Promise((resolve, reject) => {
           setTimeout(() => {
              if(!this.model.project_id){
              this.count1++;
              if(this.lang=='arabic'){
                  reject('الرجاء تحديد المشروع')
                }else{
                  reject('Please select project')
                }
                
             }else{
              this.count1 = 0
              resolve(true)
             }   
           }, 1000)
         })
        },
        validateitemStep3:function() {
         return new Promise((resolve, reject) => {
           setTimeout(() => {
              if(!this.model.item_name || !this.model.item_category){
              this.count1++;
               if(this.lang=='arabic'){
                  reject('مطلوب عنوان العنصر والفئة')
                }else{
                  reject('Item title and category are required')
                }
                
             }else{
              this.count1 = 0
                resolve(true)
             }   
           }, 1000)
         })
        },

        validateitemStep12:function() {
         return new Promise((resolve, reject) => {
           setTimeout(() => {
              if(!this.editmodals.item_img){
              this.count2++;
              if(this.lang=='arabic'){
                  reject('مطلوب صورة واحدة')
                }else{
                  reject('One image required')
                }
             }else{
              this.count2 = 0
              resolve(true)
             }   
           }, 1000)
         })
        },
        validateitemStep22:function() {
         return new Promise((resolve, reject) => {
           setTimeout(() => {
              if(!this.editmodals.project_id){
              this.count2++;
               if(this.lang=='arabic'){
                  reject('الرجاء تحديد المشروع')
                }else{
                  reject('Please select project')
                }
                
             }else{
              this.count2 = 0
              resolve(true)
             }   
           }, 1000)
         })
        },
        validateitemStep32:function() {
         return new Promise((resolve, reject) => {
           setTimeout(() => {
              if(!this.editmodals.item_name || !this.editmodals.item_category){
              this.count2++;
              if(this.lang=='arabic'){
                  reject('مطلوب اسم العنصر والفئة')
                }else{
                  reject('Item name and category is required')
                }
             }else{
              this.count2 = 0
                resolve(true)
             }   
           }, 1000)
         })
        },
    getalldata(){
      console.log(localStorage.getItem('user_id'))
      this.path=process.env.VUE_APP_API_ENDPOINT;
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_id',{"user_id":localStorage.getItem('user_id')},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.design=response.data.details[0];
        this.cover_image=this.design.cover_image;
        this.editmodel.user_email=this.design.user_email;

     axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_project_by_user',{"created_by":this.design._id,"status" :"approved"},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
            this.portfolio=[];
        this.collectionData=response.data.details;
        let portfolio =  _.map(this.collectionData, projects => (projects.project_items));
        for (var i = 0; i < portfolio.length; i++) {
            for (var j = 0; j < portfolio[i].length; j++) {
            this.portfolio.push(portfolio[i][j])
        }
        }
        console.log(this.portfolio);
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
        //this.commentsdata=response.data.details[0].user_reviews;
        if(this.design.user_reviews){
          let j=0;
        for (let i = 0; i < this.design.user_reviews.length; i++) {

            axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_oid',{"user_oid":response.data.details[0].user_reviews[i].comment_by},this.auth).then(response1 => {
            console.log(response1);
            if(response1.data.details){
              
              console.log(j)
              console.log(this.design.user_reviews[j]);
              console.log(response.data.details[0].user_reviews[i].rating);
              var pair = {user_dp: response1.data.details[0].user_dp,user_name:response1.data.details[0].user_name,comment:this.design.user_reviews[j].comment,rating:this.design.user_reviews[j].rating};
              this.commentsdata.push(pair);
              j++;

             }
            })
          
          }
          console.log(this.commentsdata);
         }

       }
      })
    },
    checktime(start_time,end_time,type)
    {
      // console.log(start_time);
      let start_time1=start_time.hh+":"+start_time.mm+" "+start_time.A;
      let end_time1=end_time.hh+":"+end_time.mm+" "+end_time.A;
        var startTime = moment(start_time1, "HH:mm a");
        var endTime = moment(end_time1, "HH:mm a");
        if (endTime.hour() < startTime.hour())
        {
            console.log("Batch start time can't be greater than batch end time");
            if(type=='edit'){
              document.getElementById("edittimev").innerHTML="Batch start time can't be greater than batch end time";
            }else{
              document.getElementById("timev").innerHTML="Batch start time can't be greater than batch end time";
            }
            
            
        }
        else if (endTime.hour() == startTime.hour() && endTime.minute() <= startTime.minute())
        {
            console.log("Batch start time can't be equal or greater than batch end time");
             if(type=='edit'){
            document.getElementById("edittimev").innerHTML="Batch start time can't be equal or greater than batch end time";
            }else{
            document.getElementById("timev").innerHTML="Batch start time can't be equal or greater than batch end time";
           }
        }else{
           if(type=='edit'){
              document.getElementById("edittimev").innerHTML="";
            }else{
              document.getElementById("timev").innerHTML="";
            }

        }
        return false;
    },
    sameastime(){
       console.log('reach same as'); 
       console.log(this.business_hours);
      let start_time=this.business_hours[0].from
      console.log(start_time);
      let end_time=this.business_hours[0].to;
      console.log(end_time);
      var inputElements = document.getElementById('sameas');
      console.log(inputElements.checked);
      if (inputElements.checked) {
        for (var i = 0; i < this.business_hours.length; i++) {
          this.business_hours[i].from=start_time;
          this.business_hours[i].to=end_time;
          console.log(this.business_hours[i]);
        }
       }

      // console.log(this.days);
      
    },
    selectday(value){
      const index = this.days.map(e => e.day).indexOf(value);
      // console.log(index);
      if(index==-1){
        document.getElementById(value).classList.add('active');
        this.days.push({day:value,start_time:{hh:"",mm:"",A:""},end_time:{hh:"",mm:"",A:""}});
        // console.log(this.days);
      }else{
        this.days.splice(index,1);
        document.getElementById(value).classList.remove('active');
        // console.log(this.days);
      }
      
    },
    removeday(index){
      document.getElementById(this.days[index].day).classList.remove('active');
      this.days.splice(index,1);
      // console.log(this.days);
    }, 
    lchecktime(start_time,end_time,type)
    {
      // console.log(start_time);
      let start_time1=start_time.hh+":"+start_time.mm+" "+start_time.A;
      let end_time1=end_time.hh+":"+end_time.mm+" "+end_time.A;
        var startTime = moment(start_time1, "HH:mm a");
        var endTime = moment(end_time1, "HH:mm a");
        if (endTime.hour() < startTime.hour())
        {
            console.log("Batch start time can't be greater than batch end time");
            if(type=='edit'){
              document.getElementById("ledittimev").innerHTML="Batch start time can't be greater than batch end time";
            }else{
              document.getElementById("ltimev").innerHTML="Batch start time can't be greater than batch end time";
            }
            
            
        }
        else if (endTime.hour() == startTime.hour() && endTime.minute() <= startTime.minute())
        {
            console.log("Batch start time can't be equal or greater than batch end time");
             if(type=='edit'){
            document.getElementById("ledittimev").innerHTML="Batch start time can't be equal or greater than batch end time";
            }else{
            document.getElementById("ltimev").innerHTML="Batch start time can't be equal or greater than batch end time";
           }
        }else{
           if(type=='edit'){
              document.getElementById("ledittimev").innerHTML="";
            }else{
              document.getElementById("ltimev").innerHTML="";
            }

        }
        return false;
    },
    lsameastime(){
      // console.log('reach same as');
      // console.log(this.days);
      let start_time=this.leisure_hours[0].from;
      let end_time=this.leisure_hours[0].to;
      var inputElements = document.getElementById('lsameas');
      if (inputElements.checked) {
        for (var i = 0; i < this.leisure_hours.length; i++) {
          this.leisure_hours[i].from=start_time;
          this.leisure_hours[i].to=end_time;
          console.log(this.leisure_hours[i]);
        }
       }

      // console.log(this.days);
      
    },
    lselectday(value){
      const index = this.ldays.map(e => e.day).indexOf(value);
      // console.log(index);
      if(index==-1){
        document.getElementById(value).classList.add('active');
        this.ldays.push({day:value,start_time:{hh:"",mm:"",A:""},end_time:{hh:"",mm:"",A:""}});
        // console.log(this.days);
      }else{
        this.ldays.splice(index,1);
        document.getElementById(value).classList.remove('active');
        // console.log(this.days);
      }
      
    },
    lremoveday(index){
      document.getElementById(this.ldays[index].day).classList.remove('active');
      this.ldays.splice(index,1);
      // console.log(this.days);
    }, 
    updatebusiness(){
      document.getElementById("saveuserbtn").innerHTML='Loading...';
      let lat='';
      let long='';
      let business_hours=this.business_hours;
      // for (var i = 0; i < this.business_hours.length; i++) {
      //     business_hours[i].from=this.business_hours[i].from.hh+':'+this.business_hours[i].from.mm+' '+this.business_hours[i].from.A;
      //     business_hours[i].to=this.business_hours[i].to.hh+':'+this.business_hours[i].to.mm+' '+this.business_hours[i].to.A;
      //     console.log(business_hours[i]);
      //   }
       let leisure_hours=this.leisure_hours;
      //  for (var i = 0; i < this.leisure_hours.length; i++) {
      //     leisure_hours[i].from=this.leisure_hours[i].from.hh+':'+this.leisure_hours[i].from.mm+' '+this.leisure_hours[i].from.A;
      //     leisure_hours[i].to=this.leisure_hours[i].to.hh+':'+this.leisure_hours[i].to.mm+' '+this.leisure_hours[i].to.A;
      //     console.log(leisure_hours[i]);
      //   }
        // business_hours=JSON.stringify(business_hours);
        // leisure_hours=JSON.stringify(leisure_hours);
        if(this.gpslink){
          let links=this.gpslink.split('@');
          if(links[1]){
            let latlong=links[1].split(',');
            lat=latlong[0];
            long=latlong[1];
            console.log(lat);
            console.log(long);
          }
          
        }
      const querystring = require('querystring');
      
            axios.post(process.env.VUE_APP_API_ENDPOINT+'update_business_profile',{ user_email:this.model.user_email,user_password:this.model.user_password,user_type:"Business",user_name:this.model.user_name,business_name_english:this.model.business_name_english,business_description_english:this.model.business_description_english,business_email:this.model.business_email,business_name_arabic:this.model.business_name_arabic,business_description_arabic:this.model.business_description_arabic,business_category:this.model.business_category,business_subcategory:this.model.business_subcategory,address:this.model.address,address_ar:this.model.address_ar,business_city:this.model.business_city,user_phone:this.model.user_phone,web_link:this.model.web_link,fb_link:this.model.fb_link,instagram_link:this.model.instagram_link,youtube_link:this.model.youtube_link,twitter_link:this.model.twitter_link,business_hours:business_hours,leisure_hours:leisure_hours,logo:this.model.logo,cover_image:this.model.cover_image,deals_in:this.model.deals_in,location_lat:lat,location_long:long},this.auth)
          .then(response => {
            
            console.log(response.data.user_details);
            if (this.selected) {
            let username=''; 
            let subject_body='New business user link';
            let html_body = '';

            axios.post(process.env.VUE_APP_API_ENDPOINT+'send_mail',{email:this.model.user_email,user_name:username,subject_body:subject_body,type:'newbusinessuserprofile',_id:response.data.user_details[0]._id},this.auth)
             .then(response => {
               console.log(response.data);
               })

              }
              document.getElementById("saveuserbtn").classList.remove('btn-primary');
              document.getElementById("saveuserbtn").classList.add('btn-success');
              document.getElementById("saveuserbtn").innerHTML='Updated';
              setTimeout(function(){
              document.getElementById("saveuserbtn").classList.remove('btn-success');
              document.getElementById("saveuserbtn").classList.add('btn-primary');
              document.getElementById("saveuserbtn").innerHTML="Update business";
              this.editprofile=false;
              window.location.reload()
            }, 2000);
            })
            

     },
     updateitem(){
      document.getElementById("edititem").innerHTML='Loading...';
      const querystring = require('querystring');
         let item_mentions='';
         let item_imgs='';
         let item_tags='';
         if(this.editmodals.item_mentions.length >0){
            for (var i = 0; i < this.editmodals.item_mentions.length; i++) {
                item_mentions+=this.editmodals.item_mentions[i]._id+',';
            }
            var item_mention = item_mentions.substring(0, item_mentions.length-1);
         }
         if(this.editmodals.item_img.length >0){
            for (var i = 0; i < this.editmodals.item_img.length; i++) {
                item_imgs+=this.editmodals.item_img[i]+',';
            }
            var item_img = item_imgs.substring(0, item_imgs.length-1);
         }
         if(this.editmodals.item_tags.length >0){
            for (var i = 0; i < this.editmodals.item_tags.length; i++) {
                item_tags+=this.editmodals.item_tags[i].tag+',';
            }
            var item_tag = item_tags.substring(0, item_tags.length-1);
         }
         console.log(item_tag);
         console.log(item_img);
         console.log(item_mention);
         let details={item_id:this.editmodals.item_id,item_name:this.editmodals.item_name,item_description:this.editmodals.item_description,item_name_ar:this.editmodals.item_name_ar,item_description_ar:this.editmodals.item_description_ar,item_type:this.editmodals.item_type,item_visibility:this.editmodals.item_visibility,item_category:this.editmodals.item_category,item_subcategory:this.editmodals.item_subcategory,item_space:this.editmodals.item_space,item_brand:this.editmodals.item_brand,item_cost:this.editmodals.item_cost,optype:'Add',created_by: this.editmodals.created_by,status:this.editmodals.status};
             if(item_mention){
               details.item_mentions=item_mention;
             }
             if(item_img){
               details.item_img=item_img;
             }
             if(item_tag){
               details.item_tags=item_tag;
             }

           axios.post(process.env.VUE_APP_API_ENDPOINT+'update_inventory',querystring.stringify(details),this.auth1)
          .then(response => {
            //item_tags:this.editmodals.item_tags,
            console.log(response);
            if(response.data.details){
            if(this.editmodals.project_id!=this.editmodals.project_id1){
                axios.post(process.env.VUE_APP_API_ENDPOINT+'update_project',querystring.stringify({project_id:this.editmodals.project_id1,user_oid :localStorage.getItem('_id'),created_by:localStorage.getItem('_id'),optype:"Remove",items:response.data.details._id}),this.auth1)
              .then(response => {
                console.log(response);
                })

            }
            
             axios.post(process.env.VUE_APP_API_ENDPOINT+'update_project',querystring.stringify({project_id:this.editmodals.project_id,user_oid :localStorage.getItem('_id'),created_by:localStorage.getItem('_id'),optype:"Add",items:response.data.details._id}),this.auth1)
                  .then(response => {
                    console.log(response);
                })
              
            
            }
            document.getElementById("edititem").classList.remove('btn-primary');
            document.getElementById("edititem").classList.add('btn-success');
            document.getElementById("edititem").innerHTML='Loading...';
            setTimeout(function(){
            document.getElementById("edititem").classList.remove('btn-success');
            document.getElementById("edititem").classList.add('btn-primary');
            document.getElementById("edititem").innerHTML="Saved";
            this.edititem=false;
            window.location.reload();
          }, 2000);
          })

     },
     changepasswordfunction(){
        const querystring = require('querystring');
        
        if(this.changemodel.user_type){

        this.changemodel.user_type="General";
        let details={ user_email:this.design.user_email,user_type:this.changemodel.user_type};
        if(!this.design.user_public_name){
             details.user_public_name=this.design.business_name_english;
        }
        if(!this.design.user_dp){
            details.user_dp=this.design.logo;
        }
        axios.post(process.env.VUE_APP_API_ENDPOINT+'update_business_profile',querystring.stringify(details),this.auth1)
          .then(response => {

          })
        }

        if(this.changemodel.password==this.changemodel.cpassword){
       
      document.getElementById("changepasswordbtn").innerHTML='Loading...';
      if(this.changemodel.password!=''){

        axios.post(process.env.VUE_APP_API_ENDPOINT+'changepassword',querystring.stringify({ id:this.changemodel.id,user_password:this.changemodel.password}),this.auth1)
          .then(response => {
              console.log(response.data.user_details);
              document.getElementById("changepasswordbtn").classList.remove('btn-primary');
              document.getElementById("changepasswordbtn").classList.add('btn-success');
              document.getElementById("changepasswordbtn").innerHTML='Updated';
              setTimeout(function(){
              document.getElementById("changepasswordbtn").classList.remove('btn-success');
              document.getElementById("changepasswordbtn").classList.add('btn-primary');
              document.getElementById("changepasswordbtn").innerHTML="Updated";
              this.changepassword=false;
              window.location.reload()
            }, 2000);
            })

         }else{
              document.getElementById("changepasswordbtn").classList.remove('btn-primary');
              document.getElementById("changepasswordbtn").classList.add('btn-success');
              document.getElementById("changepasswordbtn").innerHTML='Updated';
              setTimeout(function(){
              document.getElementById("changepasswordbtn").classList.remove('btn-success');
              document.getElementById("changepasswordbtn").classList.add('btn-primary');
              document.getElementById("changepasswordbtn").innerHTML="Updated";
              this.changepassword=false;
              window.location.reload()
            }, 2000);
         }
      
         }else{

            swal({
              title:'Password not matched!',
              text: 'Password and confirm password not matched',
              icon:'warning',
             }).then((result) => {
               
            })

         }

     },
     isValidusername(){
        const querystring = require('querystring');
        console.log(this.editmodel.user_name.length);
        if(this.editmodel.user_name < 4)
        {
          this.usernamelength=true;
          this.username=false;
           this.specialcharacter=false;
        }
        else if(/[$&+,:;=\\\\?@#|/'<>.^*() %!-]/.test(this.editmodel.user_name))
        {
         this.usernamelength=false;
         this.username=false;
         this.specialcharacter=true;
        }else{
        axios.post(process.env.VUE_APP_API_ENDPOINT+'search_business_user_name',{ user_name:this.editmodel.user_name },this.auth).then(response => {
          console.log(response);
          if(response.data.details){
            this.username=true;
            this.usernamelength=false;
            this.specialcharacter=false;
            //this.model.category_name=response.data.subcategory_data[0].category_name;
          }else{
            this.username=false;
            this.usernamelength=false;
            this.specialcharacter=false;
          }
        })
       }
        
     },
     uploadlogo: function(event) {
            this.uploadPercentage =0;
            console.log(event.target);
            // Reference to the DOM input element
            var input = event.target;
            console.log(input.files[0].size);
            if(input.files[0].size < 5000000){
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);

                this.selectedimage=input.files[0];
            }

            const fd= new FormData();
            fd.append('image',this.selectedimage,this.selectedimage.name);
            axios.post(process.env.VUE_APP_API_ENDPOINT+'image-upload',fd,{ headers: {'Content-Type': 'multipart/form-data'},onUploadProgress: function( progressEvent ) { this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) ); console.log(this.uploadPercentage)}.bind(this)})
            .then(response => {
              console.log(response);
              this.editmodel.logo=response.data.imageUrl;
            })

          }else{

            swal({
              title:'File to large!',
              text: 'Your file is larger than 5 MB. Please upload images which are less than 5 MB.',
              icon:'warning',
             }).then((result) => {
               
            })

          }

       },
       
       uploaddp: function(event) {
            this.uploadPercentage =0;
            console.log(event.target);
            // Reference to the DOM input element
            var input = event.target;
            console.log(input.files[0].size);
            if(input.files[0].size < 15000000){
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);

                this.selectedimage=input.files[0];
            }

            const fd= new FormData();
            fd.append('image',this.selectedimage,this.selectedimage.name);
            axios.post(process.env.VUE_APP_API_ENDPOINT+'image-upload',fd,{ headers: {'Content-Type': 'multipart/form-data'},onUploadProgress: function( progressEvent ) { this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) ); console.log(this.uploadPercentage)}.bind(this)})
            .then(response => {
              console.log(response);
              this.editmodel.user_dp=response.data.imageUrl;
            })

          }else{

            swal({
              title:'File to large!',
              text: 'Your file is larger than 15 MB. Please upload images which are less than 15 MB.',
              icon:'warning',
             }).then((result) => {
               
            })

          }

       },
     uploadcover: function(event) {
            this.uploadPercentage =0;
            console.log(event.target);
            // Reference to the DOM input element
            var input = event.target;
            console.log(input.files[0].size);
            if(input.files[0].size < 5000000){
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);

                this.selectedimage=input.files[0];
            }

            const fd= new FormData();
            fd.append('image',this.selectedimage,this.selectedimage.name);
            axios.post(process.env.VUE_APP_API_ENDPOINT+'image-upload',fd,{ headers: {'Content-Type': 'multipart/form-data'},onUploadProgress: function( progressEvent ) { this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) ); console.log(this.uploadPercentage)}.bind(this)})
            .then(response => {
              console.log(response);
              this.editmodel.cover_image=response.data.imageUrl;
            })

          }else{

            swal({
              title:'File to large!',
              text: 'Your file is larger than 5 MB. Please upload images which are less than 5 MB.',
              icon:'warning',
             }).then((result) => {
               
            })

          }

       },
      previewImage: function(event) {
            this.uploadPercentage =0;
            console.log(event.target);
            // Reference to the DOM input element
            var input = event.target;
            console.log(input.files[0].size);
            if(input.files[0].size < 5000000){
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);

                this.selectedimage=input.files[0];
            }

            const fd= new FormData();
            fd.append('image',this.selectedimage,this.selectedimage.name);
            axios.post(process.env.VUE_APP_API_ENDPOINT+'image-upload',fd,{ headers: {'Content-Type': 'multipart/form-data'},onUploadProgress: function( progressEvent ) { this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) ); console.log(this.uploadPercentage)}.bind(this)})
            .then(response => {
              console.log(response);
              this.model.item_img.push(response.data.imageUrl);
            })

          }else{

            swal({
              title:'File to large!',
              text: 'Your file is larger than 5 MB. Please upload images which are less than 5 MB.',
              icon:'warning',
             }).then((result) => {
               
            })

          }

    },
    async hadleimage(event,type,uploatype) {
            // Reference to the DOM input element
            console.log(event);
            this.uploadPercentage=0;
            if(uploatype=='file'){
              for( var i = 0; i < this.$refs.file.files.length; i++ ){
                  let file = this.$refs.file.files[i];
                  console.log(file);
                  await this.upload(file,type);
                  
                  
              }
            }

    },
    
    async addhadleimage(event,type,uploatype) {
            // Reference to the DOM input element
            console.log(event);
            console.log(type);
            console.log(this.$refs.file1.files);

            
            this.uploadPercentage=0;
            if(uploatype=='file'){
              for( var i = 0; i < this.$refs.file1.files.length; i++ ){
                  let file = this.$refs.file1.files[i];
                  console.log(file);
                  await this.upload(file,type);
                  
                  
              }
            }

    },
    upload(file,type){
      console.log(file);
      let fd = new FormData();
      fd.append('image',file,file.name);
      axios.post(process.env.VUE_APP_API_ENDPOINT+'image-upload',fd,{ headers: {'Content-Type': 'multipart/form-data'},onUploadProgress: function( progressEvent ) { this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) ); console.log(this.uploadPercentage)}.bind(this)}).then(response => {
        // console.log(response);
        this.imagearr.push(response.data.imageUrl);
        this.editimagearr=this.editmodals.item_img;
        this.editimagearr.push(response.data.imageUrl);
        // console.log(this.imagearr);
        if(type=='add'){
          this.model.item_img=this.imagearr;
          console.log(this.model.item_img);
        }
        else{
          this.editmodals.item_img=this.editimagearr;
          console.log(this.editmodals.item_img);
        }
        
     })

    },


    selectitem(id){
        if(id=='addproduct'){
           document.getElementById("adddesign").classList.remove('active');
          document.getElementById("addproduct").classList.add('active'); 
          this.model.item_type='Product';
         }else{
          document.getElementById("addproduct").classList.remove('active');
          document.getElementById("adddesign").classList.add('active');
          this.model.item_type='Design';
         }
          
     },
     selectitem1(id){
        if(id=='editaddproduct'){
          document.getElementById("editadddesign").classList.remove('active');
          document.getElementById("editaddproduct").classList.add('active'); 
          this.editmodals.item_type='Product';
         }else{
          document.getElementById("editaddproduct").classList.remove('active');
          document.getElementById("editadddesign").classList.add('active');
          this.editmodals.item_type='Design';
         }
          
     },
    updateuser(){

        const querystring = require('querystring');
            axios.post(process.env.VUE_APP_API_ENDPOINT+'update_business_profile',querystring.stringify({ user_email:this.editmodel.user_email,user_name:this.editmodel.user_name,user_public_name:this.editmodel.user_public_name,user_dp:this.editmodel.user_dp}),this.auth1)
          .then(response => {
            
            console.log(response.data.user_details);
            // if (this.selected) {
            // let username=''; 
            // let subject_body='New business user link';
            // let html_body = '';

            // axios.post(process.env.VUE_APP_API_ENDPOINT+'send_mail',{email:this.model.user_email,user_name:username,subject_body:subject_body,type:'newbusinessuserprofile',_id:response.data.user_details[0]._id},this.auth)
            //  .then(response => {
            //    console.log(response.data);
            //    })
            //   }
              document.getElementById("updateprofile_user").classList.remove('btn-primary');
              document.getElementById("updateprofile_user").classList.add('btn-success');
              document.getElementById("updateprofile_user").innerHTML='Loading...';
              setTimeout(function(){
              document.getElementById("updateprofile_user").classList.remove('btn-success');
              document.getElementById("updateprofile_user").classList.add('btn-primary');
              document.getElementById("updateprofile_user").innerHTML="Updated";
              this.editprofile_user=false;
              window.location.reload();
            }, 2000);
            })

       },
       getcurrentlocation(){
        var inputElements = document.getElementById('location');
        // console.log("hi",inputElements.checked);
        
        // if(inputElements.checked) {
          this.$getLocation({
            enableHighAccuracy: true, //defaults to false
            timeout: Infinity, //defaults to Infinity
            maximumAge: 0 //defaults to 0
            
          })
          .then(coordinates => {
            console.log(coordinates.lat);
            console.log(coordinates.lng);
            this.lat=coordinates.lat;
            this.long=coordinates.lng;
          })

        //}

       },
       onComplete: function(){
        console.log(this.model);
        if(this.additem){
         const querystring = require('querystring');
         let item_mentions='';
         let item_imgs='';
         let item_tags='';
         if(this.model.item_mentions.length >0){
            for (var i = 0; i < this.model.item_mentions.length; i++) {
                item_mentions+=this.model.item_mentions[i]._id+',';
            }
            var item_mention = item_mentions.substring(0, item_mentions.length-1);
         }
         if(this.model.item_img.length >0){
            for (var i = 0; i < this.model.item_img.length; i++) {
                item_imgs+=this.model.item_img[i]+',';
            }
            var item_img = item_imgs.substring(0, item_imgs.length-1);
         }
         if(this.model.item_tags.length >0){
            for (var i = 0; i < this.model.item_tags.length; i++) {
                item_tags+=this.model.item_tags[i].tag+',';
            }
            var item_tag = item_tags.substring(0, item_tags.length-1);
         }
         console.log(item_tag);
         console.log(item_img);
         console.log(item_mention);

         let details={item_name:this.model.item_name,item_description:this.model.item_description,item_name_ar:this.model.item_name_ar,item_description_ar:this.model.item_description_ar,item_type:this.model.item_type,item_visibility:this.model.item_visibility,item_category:this.model.item_category,item_space:this.model.item_space,item_brand:this.model.item_brand,item_cost:this.model.item_cost,optype:this.model.optype,created_by: this.model.created_by,status: this.model.status};
             if(item_mention){
               details.item_mentions=item_mention;
             }
             if(item_img){
               details.item_img=item_img;
             }
             if(item_tag){
               details.item_tags=item_tag;
             }
             if(this.model.item_subcategory){
                details.item_subcategory=this.model.item_subcategory;
             }

           axios.post(process.env.VUE_APP_API_ENDPOINT+'create_inventory',querystring.stringify(details),this.auth1)
          .then(response => {
            //item_tags:this.model.item_tags,
            console.log(response);
            if(response.data.details){

            axios.post(process.env.VUE_APP_API_ENDPOINT+'update_project',querystring.stringify({project_id:this.model.project_id,user_oid :localStorage.getItem('_id'),created_by:localStorage.getItem('_id'),optype:"Add",items:response.data.details._id}),this.auth1)
              .then(response => {
                console.log(response);
              })
            }
            document.getElementById("additem").classList.remove('btn-primary');
            document.getElementById("additem").classList.add('btn-success');
            document.getElementById("additem").innerHTML='Loading...';
            setTimeout(function(){
            document.getElementById("additem").classList.remove('btn-success');
            document.getElementById("additem").classList.add('btn-primary');
            document.getElementById("additem").innerHTML="Saved";
            this.additem=false;
            window.location.reload();
          }, 1000);
          })
       }
      if(this.editprofile){
         const querystring = require('querystring');
      let lat='';
      let long='';
      // for (var i = 0; i < this.business_hours.length; i++) {
      //   if(this.business_hours[i].from==undefined || this.business_hours[i].to==undefined)
      //     this.business_hours[i].from='';
      //     this.business_hours[i].to='';
      //     console.log(this.business_hours[i]);
      //   }
      let business_hours=this.business_hours;
      // for (var i = 0; i < this.business_hours.length; i++) {
      //     business_hours[i].from=this.business_hours[i].from.hh+':'+this.business_hours[i].from.mm+' '+this.business_hours[i].from.A;
      //     business_hours[i].to=this.business_hours[i].to.hh+':'+this.business_hours[i].to.mm+' '+this.business_hours[i].to.A;
      //     console.log(business_hours[i]);
      //   }
       
       // for (var i = 0; i < this.leisure_hours.length; i++) {
       //    leisure_hours[i].from=this.leisure_hours[i].from.hh+':'+this.leisure_hours[i].from.mm+' '+this.leisure_hours[i].from.A;
       //    leisure_hours[i].to=this.leisure_hours[i].to.hh+':'+this.leisure_hours[i].to.mm+' '+this.leisure_hours[i].to.A;
       //    console.log(leisure_hours[i]);
       //  }
       
       // for (var i = 0; i < this.leisure_hours.length; i++) {
       //  if(this.leisure_hours[i].from==undefined || this.leisure_hours[i].to==undefined)
       //    this.leisure_hours[i].from='';
       //    this.leisure_hours[i].to='';
       //    console.log(this.leisure_hours[i]);
       //  }
        let leisure_hours=this.leisure_hours;
      let deals_in =  _.map(this.editmodel.deals_in, deals => (deals.item_name));
      console.log();
        // business_hours=JSON.stringify(business_hours);
        // leisure_hours=JSON.stringify(leisure_hours);
        if(this.address){

            lat=this.address.latitude;
            long=this.address.longitude;
            console.log(lat);
            console.log(long);
          
        }else if(this.editmodel.gpslink){

          let links=this.editmodel.gpslink.split('@');
          if(links[1]){
            let latlong=links[1].split(',');
            lat=latlong[0];
            long=latlong[1];
            console.log(lat);
            console.log(long);
          }

        }else{
            lat=this.lat;
            long=this.long;
        }
        if(this.editmodel.twitter_link.includes('twitter.com/')){
          let twitter_link=this.editmodel.twitter_link.split('twitter.com/');
          this.editmodel.twitter_link=twitter_link[1];
        }
        if(this.editmodel.fb_link.includes('facebook.com/')){
          let fb_link=this.editmodel.fb_link.split('facebook.com/');
          this.editmodel.fb_link=fb_link[1];
        }
        if(this.editmodel.instagram_link.includes('instagram.com/')){
          let instagram_link=this.editmodel.instagram_link.split('instagram.com/');
          this.editmodel.instagram_link=instagram_link[1];
        }
        console.log(this.editmodel.twitter_link);
        console.log(this.editmodel.fb_link);
        console.log(this.editmodel.instagram_link);
     
            axios.post(process.env.VUE_APP_API_ENDPOINT+'update_business_profile',{ user_email:this.editmodel.user_email,user_type:"Business",user_name:this.editmodel.user_name,business_name_english:this.editmodel.business_name_english,business_description_english:this.editmodel.business_description_english,business_email:this.editmodel.business_email,business_name_arabic:this.editmodel.business_name_arabic,business_description_arabic:this.editmodel.business_description_arabic,business_category:this.editmodel.business_category,business_subcategory:this.editmodel.business_subcategory,address:this.editmodel.address,address_ar:this.editmodel.address_ar,business_city:this.editmodel.business_city,user_phone:this.editmodel.user_phone,web_link:this.editmodel.web_link,fb_link:this.editmodel.fb_link,instagram_link:this.editmodel.instagram_link,youtube_link:this.editmodel.youtube_link,twitter_link:this.editmodel.twitter_link,business_hours:business_hours,leisure_hours:leisure_hours,logo:this.editmodel.logo,cover_image:this.editmodel.cover_image,deals_in:deals_in,location_lat:lat,location_long:long,user_country:this.editmodel.user_country},this.auth)
          .then(response => {
            
            console.log(response.data.user_details);
            // if (this.selected) {
            // let username=''; 
            // let subject_body='New business user link';
            // let html_body = '';

            // axios.post(process.env.VUE_APP_API_ENDPOINT+'send_mail',{email:this.model.user_email,user_name:username,subject_body:subject_body,type:'newbusinessuserprofile',_id:response.data.user_details[0]._id},this.auth)
            //  .then(response => {
            //    console.log(response.data);
            //    })
            //   }
              document.getElementById("updateprofile").classList.remove('btn-primary');
              document.getElementById("updateprofile").classList.add('btn-success');
              document.getElementById("updateprofile").innerHTML='Loading...';
              setTimeout(function(){
              document.getElementById("updateprofile").classList.remove('btn-success');
              document.getElementById("updateprofile").classList.add('btn-primary');
              document.getElementById("updateprofile").innerHTML="Updated";
              this.editprofile=false;
              window.location.reload();
            }, 2000);
            })
         }

        },
        openadditem(row){
            console.log(row)
            this.additem=true;
        },
        openeditmodals(row){
            console.log(row)
            const querystring = require('querystring');
            let tags=[];
            this.editmodals=row;
            for (var i = 0; i < row.item_tags.length; i++) {
                tags.push({tag:row.item_tags[i]});
            }
            for (var i = 0; i < this.editmodals.item_mentions.length; i++) {
                axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_by_oid',querystring.stringify({ user_oid:this.editmodals.item_mentions[i]}),this.auth1).then(response => {
                    console.log(response);
                    if(response.data.details){
                      this.item_mentions.push(response.data.details[0]);
                    }
                        
                  })
            }
            console.log(this.item_mentions);
            this.editmodals.item_mentions=this.item_mentions;
            //this.editmodals.project_id=this.collectionData[0].project_id;
            for (var i = 0; i < this.collectionData.length; i++) {
                for (var j = 0; j < this.collectionData[i].project_items.length; j++) {
                    if(this.collectionData[i].project_items[j]._id==this.editmodals._id){
                        this.editmodals.project_id=this.collectionData[i].project_id;
                        this.editmodals.project_id1=this.collectionData[i].project_id;
                    }
                }
            }
            this.editmodals.item_tags=tags;
               axios.post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_subcategory',querystring.stringify({ inventory_category_oid:this.editmodals.item_category}),this.auth1).then(response => {
                console.log(response);
                if(response.data.details){
                this.subcategories=response.data.details;
                }
                    
              })
            console.log(this.editmodals);
            this.edititem=true;
        },
        openeditprofile(row){
        console.log(row)
        this.editprofile=true;
        },
        openeditprofile_user(row){
        console.log(row)
        this.editprofile_user=true;
        },
        openchangepassword(row){
        console.log(row)
        this.changepassword=true;
        },
       getbusinesssubcategories(event){
       const querystring = require('querystring');
       //this.filtercategorybusiness();
       axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_subcategory',querystring.stringify({ business_category_oid:this.editmodel.business_category }),this.auth1).then(response => {
        console.log(response);
        if(response.data.details){
        this.businesssubcategories=response.data.details;
        //this.model.category_name=response.data.subcategory_data[0].category_name;
        }
            
      })
      },
      openbusinesshours(row){
        console.log(row)
        this.businesshours=true;
        this.businesshoursdata=JSON.parse(row);
      },
      // opencollectionwindow: function(data) {
      //  console.log("collection window");
      //  if(localStorage.getItem('accessToken')){
      //  this.addcollection = true;
      //  this.items=data._id;
      //  }else{
      //     this.$router.push('/login');
      //  }
      // },
      createcollectionwindow: function() {
           console.log("collection window");
           this.createcollection = true;
           
      },
      editcreatecollectionwindow: function(row) {
           console.log(row);
           this.editcollection.project_id=row.project_id;
           this.editcollection.project_name=row.project_name;
           this.editcollection.project_description=row.project_description;
           this.editcreatecollection = true;
           
      },
    removeproject(row) {
      console.log(row);
      const querystring = require('querystring');
        swal({
            title: 'Are you sure?',
            text: "This action is not reversible.",
            icon: 'warning',
            buttons: {cancel: true,confirm: true,}
        }).then((result) => { // <--
          if (result) {
            console.log('result cloud',result)
            axios.post(process.env.VUE_APP_API_ENDPOINT+'delete_project',querystring.stringify({project_id:row.project_id,created_by: localStorage.getItem('_id')}),this.auth1)
          .then(response => {
            for (var i = 0; i < row.project_items.length; i++) {
                row.project_items[i];
                axios.post(process.env.VUE_APP_API_ENDPOINT+'delete_inventory',querystring.stringify({item_id:row.project_items[i].item_id,created_by:localStorage.getItem('_id')}),this.auth1).then(response => {

                })
            }
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
      saveprojects() {
      console.log(this.collection);
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'create_project',querystring.stringify({project_name:this.collection.project_name,project_description:this.collection.project_description,created_by: this.collection.created_by,status: this.collection.status}),this.auth1)
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
    updateprojects() {
      console.log(this.collection);
      const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'update_project',querystring.stringify({project_id:this.editcollection.project_id,project_name:this.editcollection.project_name,project_description:this.editcollection.project_description,created_by: this.editcollection.created_by,status: this.editcollection.status}),this.auth1)
      .then(response => {
        console.log(response);
        this.message=response.data.message;
        let ref=this;
        document.getElementById("editcollectionbtn").classList.remove('btn-primary');
        document.getElementById("editcollectionbtn").classList.add('btn-success');
        document.getElementById("editcollectionbtn").innerHTML='Update';
        setTimeout(function(){
        document.getElementById("editcollectionbtn").classList.remove('btn-success');
        document.getElementById("editcollectionbtn").classList.add('btn-primary');
        document.getElementById("editcollectionbtn").innerHTML="Updated";
        ref.editcreatecollection = false;
        ref.getalldata();
      }, 2000);
      })

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
              window.location.reload()
            })
            })
           }
        });
    },
    deleteDesign(row) {
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
    unsaveincollection(row) {
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
            axios.post(process.env.VUE_APP_API_ENDPOINT+'delete_inventory',querystring.stringify({item_id:row.item_id,created_by:localStorage.getItem('_id')}),this.auth1).then(response => {
                console.log(response);
                swal({
                  title:'Deleted!',
                  text: 'Your item has been deleted.',
                  icon:'success',
                 }).then((result) => {
                  console.log(result)
                   axios
                      .post(process.env.VUE_APP_API_ENDPOINT+'read_project_by_user',{"created_by":this.design._id,"status" :"approved"},this.auth)
                      .then(response => {
                        console.log(response);
                        if(response.data.details){
                            this.portfolio=[];
                        this.collectionData=response.data.details;
                        let portfolio =  _.map(this.collectionData, projects => (projects.project_items));
                        for (var i = 0; i < portfolio.length; i++) {
                            for (var j = 0; j < portfolio[i].length; j++) {
                            this.portfolio.push(portfolio[i][j])
                        }
                        }
                        console.log(this.portfolio);
                        }
                            
                      })
                })
             })
            
          }
        });

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
    getsubcategories(event){
       const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_subcategory',querystring.stringify({ inventory_category_oid:this.model.item_category}),this.auth1).then(response => {
        console.log(response);
        if(response.data.details){
        this.subcategories=response.data.details;
        //this.model.category_name=response.data.subcategory_data[0].category_name;
        }
            
      })
    },
    editgetsubcategories(event){
       const querystring = require('querystring');
       axios.post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_subcategory',querystring.stringify({ inventory_category_oid:this.editmodals.item_category}),this.auth1).then(response => {
        console.log(response);
        if(response.data.details){
        this.subcategories=response.data.details;
        //this.model.category_name=response.data.subcategory_data[0].category_name;
        }
            
      })
    },
    functionshare:function(row) {

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
    
  },
  };
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.pac-container {
    z-index: 10000 !important;
 }
.user-profile .section-shaped .shape-style-1.shape-primary {
    background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
    /*background-image: url("/img/theme/img-1-1200x1000.jpg"); 
    background-image: linear-gradient(150deg, #0000008c 15%, #585858ab 70%, #86868694 94%), url(/img/theme/img-1-1200x1000.jpg);*/
    background-size: cover;
}
.wizard-header {
  display: none;
}
.add-item.active {

}
.vue-form-wizard.md .wizard-icon-circle {
  width: 60px;
  height: 60px;
  font-size: 22px;
}
.vue-form-wizard .wizard-nav-pills>li>a {
  top: 7px;
}
.active .activemask {
    position: absolute;
    height: 100%;
    top: 0px;
    background-color: #5e72e447;
    left: 0;
    right: 0;
    border-radius: 12px;
}
.portfolio .rounded {
    border-radius: .5rem !important;
}
.portfolio a.bg-default:hover, a.bg-default:focus {
    background-color: #172b4d !important;
}
.wizard-tab-content .form-control {
    color: #4f5256;
}
.delete-image {
  position: absolute;
  right: 10px;
  top: -10px;
  background: #ec3b5b;
  height: 25px;
  width: 25px;
  border-radius: 15px;
}
.delete-image i {
  padding-top: 3px;
  padding-left: 6px;
}
.social-link .input-group-text {
  padding-right: 0px;
}
.detect_location {
  margin-top: -35px;
  margin-right: 7px;
}
</style>
