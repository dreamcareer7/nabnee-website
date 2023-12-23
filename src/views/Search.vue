<template>
    <div class="nabnee search">
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
        <div class="mt-0 pb-4 text-center portfolio">
            <div class="row">
              <tabs :fill="false" centered class="flex-column flex-md-row w-100">
                <tab-pane title="All">
                    <span slot="title" v-if="lang=='english'">
                        <i class="fa fa-search"></i>
                        All
                    </span>
                    <span slot="title" v-if="lang=='arabic'">
                        <i class="fa fa-search"></i>
                        الكل
                    </span>
                    <div class="container text-left">
                        <!-- <div class="row mt-2 mb-4" v-if="lang=='english'">
                          <div class="col-lg-6">
                            <h4 class="mt-1 text-left">Filter Results</h4>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              v-model="modals.item_category"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="getsubcategoriesproduct($event)"
                            >
                              <option
                                value=""
                              >
                                Category
                              </option>
                              <option value="">
                                Select Category
                              </option>
                              <option  v-for="category in categories" :key="category._id" :value="category._id">
                                {{category.inventory_category_name}}
                              </option>
                              
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              addon-left-icon="ni ni-bullet-list-67"
                              v-model="modals.item_subcategory"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterproduct()"
                            >
                              <option
                                value=""
                              >
                                Sub-category
                              </option>
                              <option  v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id">
                                {{subcategory.inventory_subcategory_name}}
                              </option>
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              addon-left-icon="ni ni-bullet-list-67"
                              v-model="modals.item_brand"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterbrandproduct()"
                            >
                              <option
                                value=""
                              >
                                Brand
                              </option>
                              <option  v-for="brand in brands" :key="brand.value_en"  :value="brand.value_en">
                                {{brand.value_en}}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="row mt-2 mb-4" v-if="lang=='arabic'">
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              v-model="modals.item_category"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="getsubcategoriesproduct($event)"
                            >
                              <option
                                value=""
                              >
                                الفئة
                              </option>
                              <option value="">
                                اختر الفئة
                              </option>
                              <option  v-for="category in categories" :key="category._id" :value="category._id">
                                {{category.inventory_category_name_ar}}
                              </option>
                              
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              addon-left-icon="ni ni-bullet-list-67"
                              v-model="modals.item_subcategory"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterproduct()"
                            >
                              <option
                                value=""
                              >
                                تصنيف فرعي
                              </option>
                              <option  v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id">
                                {{subcategory.inventory_subcategory_name_ar}}
                              </option>
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              addon-left-icon="ni ni-bullet-list-67"
                              v-model="modals.item_brand"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterbrandproduct()"
                            >
                              <option
                                value=""
                              >
                                الماركة
                              </option>
                              <option  v-for="brand in brands" :key="brand.value_en"  :value="brand.value_en">
                                {{brand.value_ar}}
                              </option>
                            </select>
                          </div>
                          <div class="col-lg-6">
                            <h4 class="mt-1 text-right">تصفية النتائج</h4>
                          </div>
                        </div> -->
                        <div class="rounded" v-if="lang=='english'">
                            <h4 class="py-2 px-3"><span class="font-weight-bold">{{productData.length}}</span> product<span v-if="productData.length > 1">s</span>, <span class="font-weight-bold">{{designData.length}}</span> design<span v-if="designData.length > 1">s</span> and <span class="font-weight-bold">{{businessData.length}}</span> business<span v-if="businessData.length > 1">es</span> found for <span class="font-weight-bold">{{ $route.params.id }}</span></h4>
                        </div>
                        <div class="rounded arabic" v-if="lang=='arabic'">
                            <h4 class="py-2 px-3"><span class="font-weight-bold">{{productData.length}}</span> المنتج, <span class="font-weight-bold">{{designData.length}}</span> تصميم و <span class="font-weight-bold">{{businessData.length}}</span> وجدت الأعمال ل <span class="font-weight-bold">{{ $route.params.id }}</span></h4>
                        </div>
                        <div class="row px-3">
                          <div class="col-lg-1">
                            <base-button size="sm" id="country" type="success" @click="removecountry()">
                              <span>{{company_name}}</span>
                              <i class="fa fa-times"></i>
                            </base-button>
                          </div>
                        </div>
                        <div class="mt-3 row px-3">
                          <div class="col-lg-12 mb-3" v-if="productData.length >0">Products</div>
                          <div class="col-lg-3 mb-4" v-for="product in productData" :key="product._id">
                              <card class="border" hover shadow body-classes="py-4">
                                  <router-link v-if="product.item_type=='Design'" :to="'/design/'+product.item_id">
                                    <img v-if="product.item_img" :src="product.item_img[0]" class="img-fluid shadow card-img-top mb-4">
                                  </router-link>
                                  <router-link v-if="product.item_type!='Design'" :to="'/product/'+product.item_id">
                                    <img v-if="product.item_img" :src="product.item_img[0]" class="img-fluid shadow card-img-top mb-4">
                                  </router-link>
                                  <router-link v-if="product.item_type=='Design'" :to="'/design/'+product.item_id" class="h6">
                                    <span v-if="product.item_name">
                                      <span v-if="lang=='english'">{{product.item_name}}</span>
                                      <span v-if="lang=='arabic'" class="text-right">{{product.item_name_ar}}</span>
                                    </span>
                                  </router-link>
                                  <div v-if="lang=='english'">
                                    <router-link v-if="product.item_type!='Design'" :to="'/product/'+product.item_id" class="h6">
                                      <span v-if="product.item_name">
                                        <span>{{product.item_name}}</span>
                                      </span>
                                    </router-link>
                                    <p class="description business_description mt-2" v-if="product.item_description">
                                      <span>{{product.item_description}}</span>
                                    </p>
                                  </div>
                                  <div v-if="lang=='arabic'" class="arabic">
                                    <router-link v-if="product.item_type!='Design'" :to="'/product/'+product.item_id" class="h6 text-right d-block">
                                      <span v-if="product.item_name">
                                        <span v-if="lang=='arabic'">{{product.item_name_ar}}</span>
                                      </span>
                                    </router-link>
                                    <p class="description business_description mt-2 text-right" v-if="product.item_description">
                                      <span v-if="lang=='arabic'">{{product.item_description_ar}}</span>
                                    </p>
                                  </div>
                                  <div class="mt-4">
                                      <!-- <div class="float-left"> -->
                                           <!-- <base-button @click="unsaveincollection(product)" size="sm" type="danger" outline class="no-outline">
                                              <i class="fa fa-trash mr-2"></i>Remove
                                          </base-button> -->
                                      <!--     <base-button  size="sm" type="primary" class="">
                                             <i class="fa fa-plus mr-1"></i> Save
                                          </base-button>
                                      </div> -->
                                      <!-- <div class="float-right">
                                           <base-button type="primary" outline v-if="!likeexist(product.item_id)" class="no-outline" size="sm" icon="ni ni-favourite-28" @click="likeitem(product)"> {{product.item_likes}}</base-button>
                                          <base-button outline type="success" v-if="likeexist(product.item_id)" class="no-outline" size="sm" @click="unlikeitem(product)" icon="ni ni-favourite-28">{{product.item_likes}}</base-button>
                                           <base-button outline type="primary" size="sm" icon="fa fa-share" class="no-outline" @click="functionshare(product)"></base-button>
                                      </div> -->
                                  </div>
                              </card>
                          </div>
                        </div>
                        <div class="mt-3 row px-3">
                          <div class="col-lg-12 mb-3" v-if="designData.length > 0">Designs</div>
                          <div class="col-lg-3 mb-4" v-for="design in designData" :key="design._id">
                              <card class="border" hover shadow body-classes="py-4">
                                  <router-link v-if="design.item_type=='Design'" :to="'/design/'+design.item_id">
                                    <img v-if="design.item_img" :src="design.item_img[0]" class="img-fluid shadow card-img-top mb-4">
                                  </router-link>
                                  <router-link v-if="design.item_type!='Design'" :to="'/product/'+design.item_id">
                                    <img v-if="design.item_img" :src="design.item_img[0]" class="img-fluid shadow card-img-top mb-4">
                                  </router-link>
                                  <router-link v-if="design.item_type=='Design'" :to="'/design/'+design.item_id"  class="h6"><span v-if="design.item_name">{{design.item_name}}</span></router-link>
                                  <router-link v-if="design.item_type!='Design'" :to="'/product/'+design.item_id" class="h6"><span v-if="design.item_name">{{design.item_name}}</span></router-link>
                                  <p class="description business_description mt-2" v-if="design.item_description">{{design.item_description}}</p>
                                  <div class="mt-4">
                                      <!-- <div class="float-left">
                                           <base-button @click="unsaveincollection(design)" size="sm" type="danger" outline class="no-outline">
                                              <i class="fa fa-trash mr-2"></i>Remove
                                          </base-button>
                                          <base-button  size="sm" type="primary" class="">
                                             <i class="fa fa-plus mr-1"></i> Save
                                          </base-button>
                                      </div> -->
                                      <!-- <div class="float-right">
                                           <base-button type="primary" outline v-if="!likeexist(design.item_id)" class="no-outline" size="sm" icon="ni ni-favourite-28" @click="likeitem(design)"> {{design.item_likes}}</base-button>
                                          <base-button outline type="success" v-if="likeexist(design.item_id)" class="no-outline" size="sm" @click="unlikeitem(design)" icon="ni ni-favourite-28">{{design.item_likes}}</base-button>
                                           <base-button outline type="primary" size="sm" icon="fa fa-share" class="no-outline" @click="functionshare(design)"></base-button>
                                      </div> -->
                                  </div>
                              </card>
                          </div>
                        </div>
                        <div class="mt-3 row px-3">
                          <div class="col-lg-12 mb-1 mt-2" v-if="businessData.length > 0">Businesses</div>
                          <div class="col-lg-2 mb-4" v-for="business in businessData" :key="business._id">
                              <div class="py-4 text-center">
                                  <!-- <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                  </icon> -->
                                  <router-link :to="'/business/'+business.user_id" class="d-block text-center"><img v-lazy="business.logo" class="img-thumbnail img-fluid round mb-4"></router-link>
                                  <router-link :to="'/business/'+business.user_id" class="h6 description d-block text-center">{{business.business_name_english}}</router-link>
                                  <!-- <a class="btn mt-4 btn-success btn-sm" :href='"telto:"+business.user_phone' target="_blank"><i class="fa fa-phone mr-2"></i>Call</a>
                                  <a type="" class="btn mt-4 btn-success btn-sm" :href='"mailto:"+business.user_email' target="_blank"><i class="fa fa-envelope mr-2"></i>Email</a> -->
                              </div>
                          </div>
                        </div>
                    </div>
                    <!-- no result found -->
                    <!-- <div class="row justify-content-center">
                      <div class="col-lg-8" v-if="productData.length==0">
                        <div class="p-5 no-result">
                          <img src="/img/theme/empty_result.png" class="img-fluid">
                          <p class="font-weight-400" v-if="lang=='english'">No result found for this query...</p>
                          <p class="font-weight-400" v-if="lang=='arabic'">... لم يتم العثور على نتيجة لهذا الاستعلام</p>
                        </div>
                      </div>
                    </div> -->
                </tab-pane>

                <tab-pane title="Collections">
                    <span slot="title" v-if="lang=='english'">
                        <i class="ni ni-folder-17"></i>
                        Products
                    </span>
                    <span slot="title" v-if="lang=='arabic'">
                        <i class="ni ni-folder-17"></i>
                        منتجات
                    </span>
                    <div class="container">
                        <div class="row mt-2 mb-4" v-if="lang=='english'">
                          <div class="col-lg-6">
                            <h4 class="mt-1 text-left">Filter Results</h4>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              v-model="modals.item_category"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="getsubcategoriesproduct($event)"
                            >
                              <option
                                value=""
                              >
                                Category
                              </option>
                              <option  v-for="category in categories" :key="category._id" :value="category._id">
                                {{category.inventory_category_name}}
                              </option>
                              
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              addon-left-icon="ni ni-bullet-list-67"
                              v-model="modals.item_subcategory"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterproduct()"
                            >
                              <option
                                value=""
                              >
                                Sub-category
                              </option>
                              <option  v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id">
                                {{subcategory.inventory_subcategory_name}}
                              </option>
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              addon-left-icon="ni ni-bullet-list-67"
                              v-model="modals.item_brand"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterbrandproduct()"
                            >
                              <option
                                value=""
                              >
                                Brand
                              </option>
                              <option  v-for="brand in brands" :key="brand.value_en"  :value="brand.value_en">
                                {{brand.value_en}}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="row mt-2 mb-4" v-if="lang=='arabic'">
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              v-model="modals.item_category"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="getsubcategoriesproduct($event)"
                            >
                              <option
                                value=""
                              >
                                الفئة
                              </option>
                              <option  v-for="category in categories" :key="category._id" :value="category._id">
                                {{category.inventory_category_name_ar}}
                              </option>
                              
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              addon-left-icon="ni ni-bullet-list-67"
                              v-model="modals.item_subcategory"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterproduct()"
                            >
                              <option
                                value=""
                              >
                                تصنيف فرعي
                              </option>
                              <option  v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id">
                                {{subcategory.inventory_subcategory_name_ar}}
                              </option>
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              addon-left-icon="ni ni-bullet-list-67"
                              v-model="modals.item_brand"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterbrandproduct()"
                            >
                              <option
                                value=""
                              >
                                الماركة
                              </option>
                              <option  v-for="brand in brands" :key="brand.value_en"  :value="brand.value_en">
                                {{brand.value_ar}}
                              </option>
                            </select>
                          </div>
                          <div class="col-lg-6">
                            <h4 class="mt-1 text-right">تصفية النتائج</h4>
                          </div>
                        </div>
                        <div class="rounded" v-if="lang=='english'">
                            <h4 class="py-2"><span class="font-weight-bold">{{productData.length}}</span> results found for <span class="font-weight-bold">{{ $route.params.id }}</span></h4>
                        </div>
                        <div class="rounded arabic" v-if="lang=='arabic'">
                            <h4 class="py-2"><span class="font-weight-bold">{{productData.length}} </span> <span>النتائج التي تم العثور عليها ل </span><span class="font-weight-bold">{{ $route.params.id }}</span></h4>
                        </div>
                        <div class="mt-3 row px-3">
                            <div class="col-lg-4 mb-4" v-for="product in productData" :key="product._id">
                                <card class="border" hover shadow body-classes="py-4">
                                    <router-link v-if="product.item_type=='Design'" :to="'/design/'+product.item_id">
                                      <img v-if="product.item_img" :src="product.item_img[0]" class="img-fluid shadow card-img-top mb-4">
                                    </router-link>
                                    <router-link v-if="product.item_type!='Design'" :to="'/product/'+product.item_id">
                                      <img v-if="product.item_img" :src="product.item_img[0]" class="img-fluid shadow card-img-top mb-4">
                                    </router-link>
                                    <router-link v-if="product.item_type=='Design'" :to="'/design/'+product.item_id"  class="h6"><span v-if="product.item_name">{{product.item_name}}</span></router-link>
                                    <router-link v-if="product.item_type!='Design'" :to="'/product/'+product.item_id" class="h6"><span v-if="product.item_name">{{product.item_name}}</span></router-link>
                                    <p class="description business_description mt-2" v-if="product.item_description">{{product.item_description}}</p>
                                    <div class="mt-4">
                                        <!-- <div class="float-left"> -->
                                             <!-- <base-button @click="unsaveincollection(product)" size="sm" type="danger" outline class="no-outline">
                                                <i class="fa fa-trash mr-2"></i>Remove
                                            </base-button> -->
                                        <!--     <base-button  size="sm" type="primary" class="">
                                               <i class="fa fa-plus mr-1"></i> Save
                                            </base-button>
                                        </div> -->
                                        <!-- <div class="float-right">
                                             <base-button type="primary" outline v-if="!likeexist(product.item_id)" class="no-outline" size="sm" icon="ni ni-favourite-28" @click="likeitem(product)"> {{product.item_likes}}</base-button>
                                            <base-button outline type="success" v-if="likeexist(product.item_id)" class="no-outline" size="sm" @click="unlikeitem(product)" icon="ni ni-favourite-28">{{product.item_likes}}</base-button>
                                             <base-button outline type="primary" size="sm" icon="fa fa-share" class="no-outline" @click="functionshare(product)"></base-button>
                                        </div> -->
                                    </div>
                                </card>
                            </div>
                        </div>
                    </div>
                    <!-- no result found -->
                    <div class="row justify-content-center">
                      <div class="col-lg-8" v-if="productData.length==0">
                        <div class="p-5 no-result">
                          <img src="/img/theme/empty_result.png" class="img-fluid">
                          <p class="font-weight-400" v-if="lang=='english'">No result found for this query...</p>
                          <p class="font-weight-400" v-if="lang=='arabic'">... لم يتم العثور على نتيجة لهذا الاستعلام</p>
                        </div>
                      </div>
                    </div>
                </tab-pane>

                <tab-pane title="Portfolio">
                    <span slot="title" v-if="lang=='english'">
                        <i class="ni ni-building mr-2"></i>
                        Designs
                    </span>
                    <span slot="title" v-if="lang=='arabic'">
                        <i class="ni ni-building mr-2"></i>
                        تصميمات
                    </span>
                    <div class="container">
                        <div class="row mt-2 mb-4" v-if="lang=='english'">
                          <div class="col-lg-8">
                              <h4 class="mt-1 text-left">Filter Results</h4>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              v-model="modals.item_category"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="getsubcategoriesdesign($event)"
                            >
                              <option
                                value=""
                              >
                                Category
                              </option>
                              <option  v-for="category in categories" :key="category._id" :value="category._id">
                                {{category.inventory_category_name}}
                              </option>
                              
                            </select>
                          </div>
                          <div class="col-lg-2">
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
                              <option  v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id">
                                {{subcategory.inventory_subcategory_name}}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="row mt-2 mb-4" v-if="lang=='arabic'">
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              v-model="modals.item_category"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="getsubcategoriesdesign($event)"
                            >
                              <option
                                value=""
                              >
                                الفئة
                              </option>
                              <option  v-for="category in categories" :key="category._id" :value="category._id">
                                {{category.inventory_category_name_ar}}
                              </option>
                              
                            </select>
                          </div>
                          <div class="col-lg-2">
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
                              <option v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id">
                                {{subcategory.inventory_subcategory_name_ar}}
                              </option>
                            </select>
                          </div>
                          <div class="col-lg-8">
                              <h4 class="mt-1 text-right">تصفية النتائج</h4>
                          </div>
                        </div>
                        <h4 class="py-2" v-if="lang=='english'"><span class="font-weight-bold">{{designData.length}}</span> results found for <span class="font-weight-bold">{{ $route.params.id }}</span></h4>
                        <h4 class="py-2 arabic" v-if="lang=='arabic'"><span class="font-weight-bold">{{designData.length}}</span> النتائج التي تم العثور عليها ل <span class="font-weight-bold">{{ $route.params.id }}</span></h4>
                        <div class="col-lg-4 mb-4" v-for="design in designData" :key="design._id">
                            <card class="border" hover shadow body-classes="py-4">
                                <router-link v-if="design.item_type=='Design'" :to="'/design/'+design.item_id">
                                  <img v-if="design.item_img" :src="design.item_img[0]" class="img-fluid shadow card-img-top mb-4">
                                </router-link>
                                <router-link v-if="design.item_type!='Design'" :to="'/product/'+design.item_id">
                                  <img v-if="design.item_img" :src="design.item_img[0]" class="img-fluid shadow card-img-top mb-4">
                                </router-link>
                                <router-link v-if="design.item_type=='Design'" :to="'/design/'+design.item_id"  class="h6"><span v-if="design.item_name">{{design.item_name}}</span></router-link>
                                <router-link v-if="design.item_type!='Design'" :to="'/product/'+design.item_id" class="h6"><span v-if="design.item_name">{{design.item_name}}</span></router-link>
                                <p class="description business_description mt-2" v-if="design.item_description">{{design.item_description}}</p>
                                <div class="mt-4">
                                    <!-- <div class="float-left">
                                         <base-button @click="unsaveincollection(design)" size="sm" type="danger" outline class="no-outline">
                                            <i class="fa fa-trash mr-2"></i>Remove
                                        </base-button>
                                        <base-button  size="sm" type="primary" class="">
                                           <i class="fa fa-plus mr-1"></i> Save
                                        </base-button>
                                    </div> -->
                                    <!-- <div class="float-right">
                                         <base-button type="primary" outline v-if="!likeexist(design.item_id)" class="no-outline" size="sm" icon="ni ni-favourite-28" @click="likeitem(design)"> {{design.item_likes}}</base-button>
                                        <base-button outline type="success" v-if="likeexist(design.item_id)" class="no-outline" size="sm" @click="unlikeitem(design)" icon="ni ni-favourite-28">{{design.item_likes}}</base-button>
                                         <base-button outline type="primary" size="sm" icon="fa fa-share" class="no-outline" @click="functionshare(design)"></base-button>
                                    </div> -->
                                </div>
                            </card>
                        </div>
                    </div>
                    <!-- no result found -->
                    <div class="row justify-content-center">
                      <div class="col-lg-8" v-if="designData.length==0">
                        <div class="p-5 no-result">
                          <img src="/img/theme/empty_result.png" class="img-fluid">
                          <p class="font-weight-400" v-if="lang=='english'">No result found for this query...</p>
                          <p class="font-weight-400" v-if="lang=='arabic'">... لم يتم العثور على نتيجة لهذا الاستعلام</p>
                        </div>
                      </div>
                    </div>
                </tab-pane>

                <tab-pane title="Business">
                    <span slot="title">
                        <i class="ni ni-building mr-2"></i>
                        Business
                    </span>
                    <div class="container">
                      <div class="row mt-2 mb-3" v-if="lang=='english'">
                          <div class="col-lg-4">
                              <h4 class="mt-1 text-left">Filter Results</h4>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              v-model="modals.business_city"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filtercitybusiness($event)"
                            >
                              <option
                                value=""
                              >
                                City
                              </option>
                              <option  v-for="city in businesscities" :key="city.value_en" :value="city.value_en">
                                {{city.value_en}}
                              </option>
                              
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              v-model="modals.business_category"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="getsubcategoriesbusiness($event)"
                            >
                              <option
                                value=""
                              >
                                Category
                              </option>
                              <option  v-for="category in businesscategories" :key="category._id" :value="category._id">
                                {{category.business_category_name}}
                              </option>
                              
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              addon-left-icon="ni ni-bullet-list-67"
                              v-model="modals.business_subcategory"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterbusiness()"
                            >
                              <option
                                value=""
                              >
                                Sub-category
                              </option>
                              <option  v-for="subcategory in businesssubcategories" :key="subcategory._id" :value="subcategory._id">
                                {{subcategory.business_subcategory_name}}
                              </option>
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select 
                              aria-describedby="addon-right addon-left"
                              v-model="distance"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterdistancebusiness()"
                            >
                              <option
                                value=""
                              >
                                Distance
                              </option>
                              <option>
                                2 km
                              </option>
                              <option>
                                5 km
                              </option>
                              <option>
                                10 km
                              </option>
                              <option>
                                2o km
                              </option>
                              <option>
                                50 km
                              </option>
                              <option>
                                100 km
                              </option>
                            </select>
                          </div>
                      </div>
                      <div class="row mt-2 mb-4" v-if="lang=='arabic'">
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              v-model="modals.business_city"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filtercitybusiness($event)"
                            >
                              <option
                                value=""
                              >
                                مدينة
                              </option>
                              <option  v-for="city in businesscities" :key="city.value_en" :value="city.value_en">
                                {{city.value_ar}}
                              </option>
                              
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              v-model="modals.business_category"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="getsubcategoriesbusiness($event)"
                            >
                              <option
                                value=""
                              >
                                الفئة
                              </option>
                              <option  v-for="category in businesscategories" :key="category._id" :value="category._id">
                                {{category.business_category_name_ar}}
                              </option>
                              
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select
                              aria-describedby="addon-right addon-left"
                              addon-left-icon="ni ni-bullet-list-67"
                              v-model="modals.business_subcategory"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterbusiness()"
                            >
                              <option
                                value=""
                              >
                                تصنيف فرعي
                              </option>
                              <option  v-for="subcategory in businesssubcategories" :key="subcategory._id" :value="subcategory._id">
                                {{subcategory.business_subcategory_name_ar}}
                              </option>
                            </select>
                          </div>
                          <div class="col-lg-2">
                            <select 
                              aria-describedby="addon-right addon-left"
                              v-model="distance"
                              addon-left-icon="ni ni-bullet-list-67"
                              class="form-control form-control-alternative"
                              autocomplete="off"
                              @change="filterdistancebusiness()"
                            >
                              <option
                                value=""
                              >
                                مسافة
                              </option>
                              <option>
                                2 km
                              </option>
                              <option>
                                5 km
                              </option>
                              <option>
                                10 km
                              </option>
                              <option>
                                2o km
                              </option>
                              <option>
                                50 km
                              </option>
                              <option>
                                100 km
                              </option>
                            </select>
                          </div>
                          <div class="col-lg-4">
                              <h4 class="mt-1 text-right">تصفية النتائج</h4>
                          </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-1">
                          <base-button size="sm" id="country" type="success" @click="removecountry()">
                            <span>{{company_name}}</span>
                            <i class="fa fa-times"></i>
                          </base-button>
                        </div>
                      </div>
                      <h4 class="py-2" v-if="lang=='english'"><span class="font-weight-bold">{{businessData.length}}</span> results found for <span class="font-weight-bold">{{ $route.params.id }}</span></h4>
                      <h4 class="py-2 arabic" v-if="lang=='arabic'"><span class="font-weight-bold">{{businessData.length}}</span> النتائج التي تم العثور عليها ل <span class="font-weight-bold">{{ $route.params.id }}</span></h4>
                      <div class="mt-3 row px-3">
                          <div class="col-lg-4 mb-4" v-for="business in businessData" :key="business._id">
                              <card class="border" hover shadow body-classes="py-4 text-left">
                                  <!-- <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                  </icon> -->
                                  <router-link :to="'/business/'+business.user_id"><img v-lazy="business.cover_image" class="img-fluid rounded shadow card-img-top mb-4"></router-link>
                                  <router-link :to="'/business/'+business.user_id" class="h6">{{business.business_name_english}}</router-link>
                                  <p class="business_description description mt-3">{{business.business_description_english}}</p>
                                  <!-- <div>
                                      <badge type="success" rounded>business</badge>
                                      <badge type="success" rounded>vision</badge>
                                      <badge type="success" rounded>success</badge>
                                  </div> -->
                                  <a class="btn mt-2 btn-success btn-sm" :href='"telto:"+business.user_phone' target="_blank"><i class="fa fa-phone mr-2"></i>Call</a>
                                  <a type="" class="btn mt-2 btn-success btn-sm" :href='"mailto:"+business.user_email' target="_blank"><i class="fa fa-envelope mr-2"></i>Email</a>
                                  <a type="" class="btn mt-2 btn-success btn-sm" :href='"https://www.google.com/maps/search/?api=1&query="+business.location_lat+","+business.location_long' target="_blank"><i class="fa fa-map-marker mr-2"></i>Map</a>
                              </card>
                          </div>
                      </div>
                    </div>
                    <!-- no result found -->
                    <div class="row justify-content-center">
                      <div class="col-lg-8" v-if="businessData.length==0">
                        <div class="p-5 no-result">
                          <img src="/img/theme/empty_result.png" class="img-fluid">
                          <p class="font-weight-400" v-if="lang=='english'">No result found for this query...</p>
                          <p class="font-weight-400" v-if="lang=='arabic'">... لم يتم العثور على نتيجة لهذا الاستعلام</p>
                        </div>
                      </div>
                    </div>
                </tab-pane>
              </tabs>
            </div>
        </div>
        

    </div>
</template>

<script>
  import axios from "axios";
  import VueSwal from 'vue-swal';
  import _ from 'lodash';
  import moment from 'moment';
  import VueGeolocation from 'vue-browser-geolocation';
  export default {
    name: 'Search',
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
        company_name:localStorage.getItem('country_name'),
        sharebtn:false,
        additem:false,
        editprofile:false,
        lat:0,
        lng:0,
        editprofile_user:false,
        username:false,
        usernamelength:false,
        specialcharacter:false,
        gpslink:'',
        selected:false,
        brands:[],
        userData:[],
        tagData:[],
        checkvalue :false,
        lcheckvalue:false,
        loadingWizard: false,
        errorMsg: null,
        loadingWizard1: false,
        errorMsg1: null,
        count: 0,
        count1: 0,
        distance:'',
        cities:[],
        imagearr:[],
        user_likes:[],
        lang:localStorage.getItem('lang'),
        business_hours:[{day:"Mon",from:'',to:''},{day:"Tue",from:'',to:''},{day:"Wed",from:'',to:''},{day:"Thu",from:'',to:''},{day:"Fri",from:'',to:''},{day:"Sat",from:'',to:''},{day:"Sun",from:'',to:''}],
        leisure_hours:[{day:"Mon",from:'',to:''},{day:"Tue",from:'',to:''},{day:"Wed",from:'',to:''},{day:"Thu",from:'',to:''},{day:"Fri",from:'',to:''},{day:"Sat",from:'',to:''},{day:"Sun",from:'',to:''}],
        selectedimage:'',
        modals:{
         editproduct:false,
         stats:false,
         item_name:'',
         item_name_ar:'',
         item_description_ar:'',
         item_description:'',
         item_type:'product',
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
         status:'',
         business_category:'',
         business_subcategory:'',
         business_city:'',
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
        designData:[],
        productData:[],
        businessData:[],
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
        
      //localStorage.setItem('user_id','3cexv96pk35tv1zj');
      const querystring = require('querystring');
      console.log(localStorage.getItem('user_id'))
      this.path=process.env.VUE_APP_API_ENDPOINT;
      let details={"details" :{ "item_type":"Design"},"offset" :"0","search_term":this.$route.params.id,"search_term":this.$route.params.id,"search_type":"search_product"}
      if(this.lang=='english'){
         details.item_name=this.$route.params.id;
      }
      if(this.lang=='arabic'){
         details.item_name_ar=this.$route.params.id;
      }
      
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',details,this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
          this.designData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.designData=[];
          this.deleteitem=true;
        }   
      })

      let pdetails={"details" :{ "item_type":"Product"},"offset" :"0","search_term":this.$route.params.id,"search_type":"search_product"};
      if(this.lang=='english'){
         pdetails.item_name=this.$route.params.id;
      }
      if(this.lang=='arabic'){
         pdetails.item_name_ar=this.$route.params.id;
      }

      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',pdetails,this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.productData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.productData=[];
          this.deleteitem=true;
        }   
      })
      let bdetails={"details" :{"user_type":"Business","user_status":"approved"},"search_term":this.$route.params.id,"search_type":"search_business","offset":"0"};
      if(this.lang=='english'){
         bdetails.business_name_english=this.$route.params.id;
      }
      if(this.lang=='arabic'){
         bdetails.business_name_arabic=this.$route.params.id;
      }
      if(this.company_name!=""){
        bdetails.details.user_country=this.company_name;
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails,this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.businessData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.businessData=[];
          this.deleteitem=true;
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
    removecountry(){
      this.company_name="";
      document.getElementById("country").classList.add('d-none');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      let bdetails={"details" :{ "user_type":"Business"},"offset" :"0"};
      if(this.company_name!=""){
        
        document.getElementById("country").classList.remove('d-none');
        
        bdetails.details.user_country=this.company_name;
      }
      if(this.$route.params.id){
        bdetails.search_term=this.$route.params.id;
        bdetails.business_name_english=this.$route.params.id;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        bdetails.details.business_category=this.modals.business_category;
      }
      if(this.modals.business_subcategory){
        bdetails.details.business_subcategory=this.modals.business_subcategory;
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.businessData=response.data.details;
        }
            
      })
     }
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
    getsubcategoriesproduct(event){
       const querystring = require('querystring');
       this.filtercategoryproduct();
       axios.post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_subcategory',querystring.stringify({ inventory_category_oid:this.modals.item_category }),this.auth1).then(response => {
        console.log(response);
        if(response.data.details){
        this.subcategories=response.data.details;
        //this.model.category_name=response.data.subcategory_data[0].category_name;
        }
            
      })
      },
     searchproduct() {
      const querystring = require('querystring');
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{ "item_type":"Product"},"offset" :"0","item_name":this.search})
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.searchData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.productData=[];
          this.deleteitem=true;
        }   
      })
    },
    filterproduct() {
      const querystring = require('querystring');
      let bdetails={"offset":"0","details":{"item_type":"Product"},"item_name":this.$route.params.id,"search_term":this.$route.params.id,"search_type":"search_product"};
      if(this.$route.params.id){
        bdetails.item_name=this.$route.params.id;
        bdetails.search_term=this.$route.params.id;
      }
      if(this.modals.item_category){
        bdetails.details.item_category=this.modals.item_category;
      }
      if(this.modals.item_subcategory){
        bdetails.details.item_subcategory=this.modals.item_subcategory;
      }
      if(this.modals.item_brand){
         bdetails.details.item_brand=this.modals.item_brand;
        
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.productData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.productData=[];
          this.deleteitem=true;
        }
            
      })
    },
    filtercategoryproduct() {
      const querystring = require('querystring');
      let bdetails={"offset":"0","details":{"item_type":"Product"},"item_name":this.$route.params.id,"search_term":this.$route.params.id,"search_type":"search_product"};
      if(this.$route.params.id){
        bdetails.item_name=this.$route.params.id;
        bdetails.search_term=this.$route.params.id;
      }
      console.log(this.modals.item_category);
      if(this.modals.item_category){
        bdetails.details.item_category=this.modals.item_category;
      }
      if(this.modals.item_subcategory){
        bdetails.details.item_subcategory=this.modals.item_subcategory;
      }
      if(this.modals.item_brand){
         bdetails.details.item_brand=this.modals.item_brand;
        
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.productData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.productData=[];
          this.deleteitem=true;
        }
            
      })
    },
    filterbrandproduct() {
      console.log(this.modals.item_brand);
      const querystring = require('querystring');
      let bdetails={"offset":"0","details":{"item_type":"Product"},"item_name":this.$route.params.id,"search_term":this.$route.params.id,"search_type":"search_product"};
      if(this.$route.params.id){
        bdetails.item_name=this.$route.params.id;
        bdetails.search_term=this.$route.params.id;
      }
      if(this.modals.item_category){
        bdetails.details.item_category=this.modals.item_category;
      }
      if(this.modals.item_subcategory){
        bdetails.details.item_subcategory=this.modals.item_subcategory;
      }
      if(this.modals.item_brand){
         bdetails.details.item_brand=this.modals.item_brand;
        
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.productData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.productData=[];
          this.deleteitem=true;
        }
            
      })
    },
    getsubcategoriesdesign(event){
       const querystring = require('querystring');
       this.filtercategoryDesign();
       axios.post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_subcategory',querystring.stringify({ inventory_category_oid:this.modals.item_category }),this.auth1).then(response => {
        console.log(response);
        if(response.data.details){
        this.subcategories=response.data.details;
        //this.model.category_name=response.data.subcategory_data[0].category_name;
        }
            
      })
      },
     filterDesign() {
      const querystring = require('querystring');

      let bdetails={"offset":"0","details":{"item_type":"Design"},"item_name":this.$route.params.id,"search_term":this.$route.params.id,"search_type":"search_design"};
      if(this.$route.params.id){
        bdetails.item_name=this.$route.params.id;
        bdetails.search_term=this.$route.params.id;
      }
      if(this.modals.item_category){
        bdetails.details.item_category=this.modals.item_category;
      }
      if(this.modals.item_subcategory){
        bdetails.details.item_subcategory=this.modals.item_subcategory;
      }
      if(this.modals.item_brand){
         bdetails.details.item_brand=this.modals.item_brand;
        
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.designData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.designData=[];
          this.deleteitem=true;
        }
            
      })
    },
    filtercategoryDesign() {
      const querystring = require('querystring');
      let bdetails={"offset":"0","details":{"item_type":"Design"},"item_name":this.$route.params.id,"search_term":this.$route.params.id,"search_type":"search_design"};
      if(this.$route.params.id){
        bdetails.item_name=this.$route.params.id;
        bdetails.search_term=this.$route.params.id;
      }
      if(this.modals.item_category){
        bdetails.details.item_category=this.modals.item_category;
      }
      if(this.modals.item_subcategory){
        bdetails.details.item_subcategory=this.modals.item_subcategory;
      }
      if(this.modals.item_brand){
         bdetails.details.item_brand=this.modals.item_brand;
        
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.designData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.designData=[];
          this.deleteitem=true;
        }
            
      })
    },
    getsubcategoriesbusiness(event){
       const querystring = require('querystring');
       this.filtercategorybusiness();
       axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_subcategory',querystring.stringify({ business_category_oid:this.modals.business_category }),this.auth1).then(response => {
        console.log(response);
        if(response.data.details){
        this.businesssubcategories=response.data.details;
        //this.model.category_name=response.data.subcategory_data[0].category_name;
        }
            
      })
    },
    getbusinesssubcategories(event){
     const querystring = require('querystring');
     axios.post(process.env.VUE_APP_API_ENDPOINT+'read_business_subcategory',querystring.stringify({ business_category_oid:this.model.business_category }),this.auth1).then(response => {
      console.log(response);
      if(response.data.details){
      this.businesssubcategories=response.data.details;
      //this.model.category_name=response.data.subcategory_data[0].category_name;
      }
          
    })
    },
    filterbusiness() {
      const querystring = require('querystring');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      let bdetails={"offset":"0","details":{"user_type":"Business"},"search_term":this.$route.params.id,"business_name_english":this.$route.params.id,"search_type":"search_business"};
      if(this.$route.params.id){
        bdetails.search_term=this.$route.params.id;
        bdetails.business_name_english=this.$route.params.id;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        bdetails.details.business_category=this.modals.business_category;
      }
      if(this.modals.business_subcategory){
        bdetails.details.business_subcategory=this.modals.business_subcategory;
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.businessData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.businessData=[];
          this.deleteitem=true;
        }
            
      })
     }
    },
    filtercategorybusiness() {
      const querystring = require('querystring');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      let bdetails={"offset":"0","details":{"user_type":"Business"},"search_term":this.$route.params.id,"business_name_english":this.$route.params.id,"search_type":"search_business"};
      if(this.$route.params.id){
        bdetails.search_term=this.$route.params.id;
        bdetails.business_name_english=this.$route.params.id;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        bdetails.details.business_category=this.modals.business_category;
      }
      if(this.modals.business_subcategory){
        bdetails.details.business_subcategory=this.modals.business_subcategory;
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
        this.businessData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.businessData=[];
          this.deleteitem=true;
        }
            
      })
     }
    },
    filtercitybusiness() {
      console.log(this.modals.item_brand);
      const querystring = require('querystring');
      if(this.distance){
         this.filterdistancebusiness();
      }else{
      let bdetails={"offset":"0","details":{"user_type":"Business"},"search_term":this.$route.params.id,"business_name_english":this.$route.params.id,"search_type":"search_business"};
      if(this.$route.params.id){
        bdetails.search_term=this.$route.params.id;
        bdetails.business_name_english=this.$route.params.id;
        bdetails.search_type="search_business";
        
      }
      if(this.company_name!=""){
            bdetails.details.user_country=this.company_name;
      }
      if(this.modals.business_city){
        bdetails.details.business_city=this.modals.business_city;
      }
      if(this.modals.business_category){
        bdetails.details.business_category=this.modals.business_category;
      }
      if(this.modals.business_subcategory){
        bdetails.details.business_subcategory=this.modals.business_subcategory;
      }
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
      .then(response => {
        console.log(response);
        if(response.data.details){
          this.deleteitem=false;
          this.businessData=response.data.details;
        }else if(response.data.message=="Data not found"){
          this.businessData=[];
          this.deleteitem=true;
        }
            
      })
     }
    },
    filterdistancebusiness() {
        this.$getLocation({
            enableHighAccuracy: true, //defaults to false
            timeout: Infinity, //defaults to Infinity
            maximumAge: 0 //defaults to 0
            
        })
          .then(coordinates => {
            console.log(coordinates.lat);
            console.log(coordinates.lng);
            this.lat=coordinates.lat;
            this.lng=coordinates.lng;
              console.log(this.distance);
              const querystring = require('querystring');
              let bdetails={"offset":"0","details":{"user_type":"Business"},"distance" : this.distance,"lat" : this.lat,"long" : this.lng,"search_term":this.$route.params.id,"business_name_english":this.$route.params.id,"search_type":"search_business"};
              if(this.$route.params.id){
                bdetails.search_term=this.$route.params.id;
                bdetails.business_name_english=this.$route.params.id;
                bdetails.search_type="search_business";
                
              }
              if(this.company_name!=""){
                    bdetails.details.user_country=this.company_name;
              }
              if(this.modals.business_city){
                bdetails.details.business_city=this.modals.business_city;
              }
              if(this.modals.business_category){
                bdetails.details.business_category=this.modals.business_category;
              }
              if(this.modals.business_subcategory){
                bdetails.details.business_subcategory=this.modals.business_subcategory;
              }
              axios
              .post(process.env.VUE_APP_API_ENDPOINT+'read_business_all',bdetails)
              .then(response => {
                console.log(response);
                let businessdata=[];
                if(response.data.details){
                    for (var i = 0; i < response.data.details.length; i++) {
                        response.data.details[i]
                        businessdata.push(response.data.details[i].businessData);
                    }
                  this.deleteitem=false;
                  this.businessData=businessdata;
                }else if(response.data.message=="Data not found"){
                  this.businessData=[];
                  this.deleteitem=true;
                }
                    
              })
          });
    },
    functionshare:function(row) {

        axios.post('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDGuJpq1O1wrigLq-ScHPoz3UnXhQQbv5E',{'longDynamicLink': 'https://nabnee.page.link/?link=https://nabnee.com/inventory/'+row.item_id+'&apn=com.nabnee.app&st=Nabnee&utm_source=AndroidApp'},this.auth)
      .then(response => {
            console.log(response);
      })
        this.sharing.url= 'https://nabnee.page.link/?link=https://nabnee.com/inventory/'+row.item_id+'&apn=com.nabnee.app&st=Nabnee&utm_source=AndroidApp',
        this.sharing.title= "Check this out... product",
        this.sharing.description= "",
        this.sharing.quote= "",
        this.sharing.hashtags= '',
        this.sharebtn = true;
    },
    
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
.search .shape-style-1.shape-default {
    background-image: linear-gradient(87deg, #2dce89b5 0, #2dceccd6 100%),url(https://nabnee.s3.me-south-1.amazonaws.com/home_banner.jpg) !important;
    background-size: cover !important;
}
.search .nav {
  border-bottom: 0.0625rem solid #e9ecef;
}
.search .nav-pills .nav-link.active {
  background: none;
  color: #2dce89;
  border-bottom: 3px solid #2dce89;
  border-radius: 0;
}
.search .nav-pills .nav-link {
  box-shadow: none;
  color: #2dce89;
}
.arabic {
  direction: rtl;
}
</style>
