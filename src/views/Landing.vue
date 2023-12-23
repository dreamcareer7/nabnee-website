<template>
    <div class="nabnee home">
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew bg-white">
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
                                <h1 class="mb-4 display-3" v-if="lang=='english'">Find inspirational design ideas, Designers
                                    <span>and Finishing Suppliers for your home</span>
                                </h1>
                                <h1 class="arabic mb-4 display-3" v-if="lang=='arabic'">اكتشفوا تصاميم ملهمة, مكاتب تصميم,
                                    <span>ومحلات تشطيبات لتصميم وبناء بيتكم</span>
                                </h1>
                                <!-- <p class="lead text-white">The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p> -->
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
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200 inventory">
            <div class="container">
                <div class="row justify-content-center" v-if="inventoryexists">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 border-0 mb-2 mt-2 mb-md-4 col-sm-6" v-for="(products,index) in productData" :key="index">
                                <card class="border-0" shadow body-classes="pt-2 pb-1 h-100" v-if="products.created_by!=null">
                                    <!-- <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon> -->
                                    <router-link :to="'/product/'+products.item_id" v-if="products.item_type!='Design'" class="inventory-thumbnail img-zoom">    
                                        <img v-if="products.item_img.length > 0" :src="products.item_img[0]" class="img-fluid rounded shadow img-big d-block" :alt="products.item_name">
                                        <img v-if="products.item_img.length==0" src="img/pattern.jpg" class="img-fluid rounded shadow card-img-top image-shimmer" :alt="products.item_name">
                                    </router-link>
                                    <router-link :to="'/design/'+products.item_id" v-if="products.item_type=='Design'" class="inventory-thumbnail img-zoom"> <img v-if="products.item_img.length>0" v-lazy="products.item_img[0]" class="img-fluid rounded shadow img-big d-block" :alt="products.item_name">
                                        <img v-if="products.item_img.length==0" src="img/pattern.jpg" class="img-fluid rounded shadow card-img-top image-shimmer img-zoom" :alt="products.item_name">
                                    </router-link>
                                    <div v-if="lang=='english'">
                                        <h6 class="text-default px-2">{{products.item_name}}</h6>
                                        <p v-if="products.item_description" class="description business_description px-2">{{products.item_description}}</p>
                                    </div>
                                    <div v-if="lang=='arabic'">
                                        <h6 class="text-default px-2 text-right">
                                            <span>{{products.item_name_ar}}</span>
                                            <span v-if="!products.item_name_ar">{{products.item_name}}</span>
                                        </h6>
                                        <p v-if="products.item_description" class="description business_description px-2 text-right">
                                            <span>{{products.item_description_ar}}</span>
                                            <span v-if="!products.item_name_ar">{{products.item_description}}</span>
                                        </p>
                                    </div>
                                    <div class="mt-4 px-2 pb-3 overflow-hidden">
                                        <div class="float-left w-50" v-if="lang=='english'">
                                            <base-button size="sm" type="secondary" outline class="" v-if="!itemexist(products._id)" @click="opencollectionwindow(products)">
                                               <i class="fa fa-bookmark mr-1"></i> Save
                                            </base-button>
                                            <base-button  size="sm" type="success" class="" v-if="itemexist(products._id)" @click="opencollectionwindow(products)">
                                               <i class="fa fa-check mr-1"></i> Saved
                                            </base-button>
                                        </div>
                                        <div class="float-left w-50" v-if="lang=='arabic'">
                                            <base-button size="sm" type="secondary" outline class="" v-if="!itemexist(products._id)" @click="opencollectionwindow(products)">
                                               <i class="fa fa-bookmark mr-1"></i> حفظ
                                            </base-button>
                                            <base-button  size="sm" type="success" class="" v-if="itemexist(products._id)" @click="opencollectionwindow(products)">
                                               <i class="fa fa-check mr-1"></i> تم الحفظ
                                            </base-button>
                                        </div>
                                        <div class="w-50 float-right">
                                            <div class="float-right">
                                                 <base-button type="success" outline v-if="!likeexist(products.item_id)" size="sm" icon="fa fa-heart-o fa-15x" class="no-outline" @click="likeitem(products)"> {{products.item_likes}}</base-button>
                                                 <base-button type="success" outline v-if="likeexist(products.item_id)" size="sm" class="no-outline" @click="unlikeitem(products)" icon="fa fa-heart fa-15x">{{products.item_likes}}</base-button>
                                                 <base-button type="success" outline size="sm" @click="functionshare(products)" class="no-outline" icon="fa fa-share-alt fa-15x"></base-button>
                                                 </div>
                                        </div>
                                    </div>
                                    <!-- <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button> -->
                                </card>
                            </div>
                            <!-- <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-4">
                                   
                                    <img v-lazy="'img/theme/img-1-1200x1000.jpg'" class="img-fluid rounded shadow card-img-top mb-4">
                                    <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.</p>
                                    <div class="mt-4">
                                        <div class="float-left">
                                            <base-button tag="a" size="sm" href="#" type="warning" class="">
                                               <i class="fa fa-plus mr-1"></i> Save
                                            </base-button>
                                        </div>
                                        <div class="float-right">
                                             <base-button type="warning" size="sm" icon="ni ni-favourite-28"></base-button>
                                             <base-button type="warning" size="sm" icon="fa fa-share"></base-button>
                                        </div>
                                    </div>
                                   
                                </card>
                            </div> -->

                        </div>
                    </div>
                    <div class="container text-center">
                      <base-button type="success" v-if="loadmorefound" @click="loadmore()">
                        Load More
                      </base-button>
                    </div>
                </div>
                <div class="row justify-content-center" v-if="!inventoryexists">
                    <div class="col-lg-4">
                        <div class="card border-0 shadow">
                           <div class="card-body pt-2 pb-3">
                                <span class="photo-shimmer shine mb-3">
                                    
                                </span>
                                <div class="row">
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-11 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-0 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card border-0 shadow">
                           <div class="card-body pt-2 pb-3">
                                <span class="photo-shimmer shine mb-3">
                                    
                                </span>
                                <div class="row">
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-11 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-0 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card border-0 shadow">
                           <div class="card-body pt-2 pb-3">
                                <span class="photo-shimmer shine mb-3">
                                    
                                </span>
                                <div class="row">
                                    <div class="col-md-1 mt-1 mb-1">
                                        <span class="circle-shimmer shine"></span>
                                    </div>
                                    <div class="col-md-11 mt-1 mb-1">
                                        <div class="div-shimmer w-100 mt-0 pr-4">
                                          <span class="line-shimmer w-100 shine"></span>
                                          <span class="line-shimmer w-100 shine"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/theme/promo-1.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="success" shadow
                                  rounded></icon>
                            <h3>Awesome features</h3>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                        <h6 class="mb-0">Carefully crafted components</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-html5"></badge>
                                        <h6 class="mb-0">Amazing page examples</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                        <h6 class="mb-0">Super friendly support team</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="'img/theme/img-1-1200x1000.jpg'" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h4 class="display-3 font-weight-bold text-white">Design System</h4>
                                <p class="lead text-italic text-white">The Arctic Ocean freezes every winter and much of
                                    the sea-ice then thaws every summer, and that process will continue whatever
                                    happens.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded></icon>

                            <h3>Our customers</h3>
                            <p class="lead">Don't let your uses guess by attaching tooltips and popoves to any element.
                                Just make sure you enable them first via JavaScript.</p>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <a href="#" class="font-weight-bold text-warning mt-5">A beautiful UI Kit for impactful
                                websites</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/ill/ill-2.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Modern Interface</h4>
                                <p class="text-white">The Arctic Ocean freezes every winter and much of the sea-ice then
                                    thaws every summer, and that process will continue whatever happens.</p>
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">Awesome Support</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    <a href="#" class="text-success">Learn more</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-active-40" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">Modular Components</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    <a href="#" class="text-warning">Learn more</a>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">The amazing Team</h2>
                        <p class="lead text-muted">According to the National Oceanic and Atmospheric Administration,
                            Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-1-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Ryan Tompson</span>
                                    <small class="h6 text-muted">Web Developer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="warning" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="warning" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="warning" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-2-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Romina Hadid</span>
                                    <small class="h6 text-muted">Marketing Strategist</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-3-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Alexander Smith</span>
                                    <small class="h6 text-muted">UI/UX Designer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="info" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="info" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="info" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-4-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">John Doe</span>
                                    <small class="h6 text-muted">Founder and CEO</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="success" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="success" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="success" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="warning"
                      no-body
                      shadow-size="lg"
                      class="border-0">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">We made website building easier for you.</h3>
                                <p class="lead text-white mt-3">I will be the leader of a company that ends up being
                                    worth billions of dollars, because I got the answers. I understand culture.</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="https://www.creative-tim.com/product/vue-argon-design-system"
                                             type="white" block size="lg">
                                    Download Vue
                                </base-button>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Build something</h2>
                        <p class="lead text-white">According to the National Oceanic and Atmospheric Administration,
                            Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent
                            tihs year down to low ice.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Building tools</h5>
                        <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Grow your market</h5>
                        <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Launch time</h5>
                        <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Want to work with us?</h4>
                            <p class="mt-0">Your project is very important to us.</p>
                            <base-input class="mt-5"
                                        alternative
                                        placeholder="Your name"
                                        addon-left-icon="ni ni-user-run">
                            </base-input>
                            <base-input alternative
                                        placeholder="Email address"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Type a message..."></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">
                                Send Message
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- <section class="section section-lg">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="display-3">Do you love this awesome
                            <span class="text-success">Design System for Bootstrap 4?</span>
                        </h2>
                        <p class="lead">Cause if you do, it can be yours for FREE. Hit the button below to navigate to
                            Nabnee where you can find the Design System in HTML. Start a new project or give an
                            old Bootstrap project a new look!</p>
                        <div class="btn-wrapper">
                            <a href="#"
                               class="btn btn-primary mb-3 mb-sm-0">Download App</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- modal  collection window -->
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
                        icon="fa fa-save"
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
                    type="primary"
                    icon="fa fa-plus"
                    class="float-center"
                    block
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
                  Close
                </base-button>
            </template>
        </modal>

        <modal :show.sync="hometab">
            <p
            id="modal-title-default"
            slot="header"
            class="modal-title"
            >
               <span v-if="lang=='english'">Download the app</span>
               <span v-if="lang=='arabic'">تحميل التطبيق</span>
            </p>
            <template>
                <div class="share-network">
                  <h4 class="text-center font-weight-bold" v-if="lang=='english'">Never miss a last minute update. Download the app now.</h4>
                  <h4 class="text-center font-weight-bold arabic" v-if="lang=='arabic'">لا تفوت تحديث اللحظة الأخيرة. حمل التطبيق الآن.</h4>
                  <a href="https://play.google.com/store/apps/details?id=com.nabnee.app" class="m-auto" target="_blank"><img src="img/theme/playstore.png" class="img-fluid mt-3 mx-auto" style="max-width: 200px;" alt="Download nabnee app from google playstore"></a>
                </div>
            </template>

            <template slot="footer">
                <base-button
                  type="link"
                  class="ml-auto mt--3"
                  @click="hometab = false"
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
  import _ from 'lodash';
  export default {
    name: 'tables',
    //components:{Model},
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
            hashtags: 'nabnee,nabneedotcom',
            twitterUser: 'nabneedotcom'
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
        search:'',
        searchData:[],
        categories: [],
        metaData:[],
        deleteitem:false,
        sharebtn:false,
        hometab : false,
        loadmorefound:1,
        subcategories:[],
        inventoryexists:0,
        user_likes:[],
        brands:[],
        saveditems:[],
        productData: [],
        collectionData:[],
        reportedcaption: [],
        collection_id:'',
        offset:0,
        u_offset:0,
        r_offset:0,
        addcollection:false,
        createcollection:false,
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
         status:''
         },
         lang:localStorage.getItem('lang'),
         collection:{
            collection_name:'',
            collection_description:'',
            collection_type:'',
            status:'approved',
            created_by:localStorage.getItem('_id')
         },
         model:{item_name:'',
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
               status:''
               },
        status:{
         0: {val: 'approved'},
         1: {val: 'rejected'},
         2: {val: 'pending'},
         3: {val: 'suspended'}
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
      console.log(localStorage.getItem('hometab'));
      if(localStorage.getItem('hometab')==null){
         this.hometab=true;
         localStorage.setItem('hometab',false); 
      }
      
      if(this.lang!='english' && this.lang!='arabic'){
           localStorage.setItem('lang', 'arabic');
           this.lang=localStorage.getItem('lang');
      }
      
      this.path=process.env.VUE_APP_API_ENDPOINT;
      const querystring = require('querystring');
      console.log(this.auth);
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{"status":"approved","item_visibility":"Public"},"offset" :"0"},this.auth)
      .then(response => {
        console.log(response);
        if(response.data.details){
            this.inventoryexists=1;
        this.productData=response.data.details;
          if(response.data.details.length < 30){
               this.loadmorefound=0; 
            }
        }else{
            this.loadmorefound=0; 
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
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_category',{"status":"approved"})
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.categories=response.data.details;
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
      .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_filter_all',{ "filters" :{ "filter_name":"brand"}})
      .then(response => {
        console.log(response);
        if(response.data.details){
           this.brands=response.data.details[0].filter_values;
        }  
      })

      // read meta api call
      axios
      .post(process.env.VUE_APP_API_ENDPOINT+'read_metadata',{ "details" :{"page_url":'/'},"offset":"0"},this.authjson)
      .then(response => {
        console.log(response);
        if(response.data.details){
        this.metaData=response.data.details[0];
          
        }else{
          this.metaData={};
        }
      })
    },
    methods: {
      getalldata(){
        const querystring = require('querystring');
        console.log(this.auth);
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{"status":"approved","item_visibility":"Public"},"offset" :"0"},this.auth)
        .then(response => {
          console.log(response);
          if(response.data.details){
          this.productData=response.data.details;
          this.inventoryexists=1;
           if(response.data.details.length < 30){
                 this.loadmorefound=0; 
              }
          }else{
              this.loadmorefound=0; 
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
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_category',{"status":"approved"})
        .then(response => {
          console.log(response);
          if(response.data.details){
          this.categories=response.data.details;
          this.inventoryexists=0;
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
              axios
                    .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{},"offset" :"0"},this.auth)
                    .then(response => {
                      console.log(response);
                      if(response.data.details){
                      this.productData=response.data.details;
                      this.inventoryexists=1;
                       if(response.data.details.length < 30){
                             this.loadmorefound=0; 
                          }
                      }else{
                          this.loadmorefound=0; 
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
               //this.getalldata()
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
              axios
                    .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{},"offset" :"0"},this.auth)
                    .then(response => {
                      console.log(response);
                      if(response.data.details){
                      this.productData=response.data.details;
                      this.inventoryexists=1;
                       if(response.data.details.length < 30){
                             this.loadmorefound=0; 
                          }
                      }else{
                          this.loadmorefound=0; 
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
               //this.getalldata();
              })
          }else{
            localStorage.setItem('url',window.location.pathname);
            this.$router.push('/login');
          }
        },
      deleteproduct(row) {
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
              let ref=this;
              console.log(response);
              swal({
                title:'Deleted!',
                text: 'Your file has been deleted.',
                icon:'success',
               }).then((result) => {
                console.log(result)
                ref.getalldata();
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
      openproduct: function(tcdata) {
        const querystring = require('querystring');
         console.log(tcdata);
         this.modals.editproduct = true;
         this.modals.item_name=tcdata.item_name;
         this.modals.item_name_ar=tcdata.item_name_ar;
         this.modals.item_description_ar=tcdata.item_description_ar;
         this.modals.item_description=tcdata.item_description;
         this.modals.item_visibility=tcdata.item_visibility;
         this.modals.item_category=tcdata.item_category._id+'#'+tcdata.item_category.inventory_category_name;
         this.modals.item_space=tcdata.item_space;
         this.modals.item_brand=tcdata.item_brand;
         this.modals.item_cost=tcdata.item_cost; 
         this.modals.item_theme_color=tcdata.item_theme_color;
         if(tcdata.item_tags.length>0){
          this.modals.item_tags=tcdata.item_tags.toString();
         }
         this.modals.item_img=tcdata.item_img;
         this.modals.item_mentions=tcdata.item_mentions;
         this.modals.created_by=tcdata.created_by._id;
         this.modals.status=tcdata.status;
         this.modals.item_id=tcdata.item_id;

         console.log(this.modals);

      },
      getsubcategories(event){
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
        savecollection() {
        console.log(this.collection);
        const querystring = require('querystring');
         axios.post(process.env.VUE_APP_API_ENDPOINT+'create_collection',querystring.stringify({collection_name:this.collection.collection_name,collection_description:this.collection.collection_description,created_by: this.collection.created_by,status: this.collection.status}),this.auth1)
        .then(response => {
          let ref=this;
          console.log(response);
          ref.message=response.data.message;
          document.getElementById("savecollectionbtn").classList.remove('btn-primary');
          document.getElementById("savecollectionbtn").classList.add('btn-success');
          document.getElementById("savecollectionbtn").innerHTML=ref.message;
          //ref.addcollection = true;
          setTimeout(function(){
          document.getElementById("savecollectionbtn").classList.remove('btn-success');
          document.getElementById("savecollectionbtn").classList.add('btn-primary');
          document.getElementById("savecollectionbtn").innerHTML="Save";
          ref.createcollection =false;
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

      previouspage(){

        console.log(this.auth);
        if(this.offset>=0){
        --this.offset;
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{"status":"approved","item_visibility":"Public"},"offset" :this.offset})
        .then(response => {
          console.log(response);
          if(response.data.details){
          this.productData=response.data.details;
          }      
        })
      }

      },
      gotopage(){

        const querystring = require('querystring');
        console.log(this.auth);
        if(document.getElementById("page_no").value){
        this.offset=document.getElementById("page_no").value;
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{"status":"approved","item_visibility":"Public"},"offset" :this.offset})
        .then(response => {
          console.log(response);
          if(response.data.details){
          this.productData=response.data.details;
          }      
        })

        }

      },
      nextpage(){
        this.offset=this.offset+1;
        const querystring = require('querystring');
        console.log(this.auth);
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{"status":"approved","item_visibility":"Public"},"offset" :this.offset})
        .then(response => {
          console.log(response);
          if(response.data.details){
          this.productData=response.data.details;
          }      
        })
      },
      loadmore(){
        this.offset=this.offset+1;
        const querystring = require('querystring');
        console.log(this.auth);
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{"status":"approved","item_visibility":"Public"},"offset" :this.offset.toString()})
        .then(response => {
          console.log(response);
          if(response.data.details){
              for (var i = 0; i < response.data.details.length; i++) {
                  this.productData.push(response.data.details[i]);
              }
          // this.productData.push(response.data.details);
              if(response.data.details.length < 30){
                 this.loadmorefound=0; 
              }
          }else{
              this.loadmorefound=0;
          }      
        })
      },
      searchproduct() {
        const querystring = require('querystring');
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"details" :{ "status":"approved","item_visibility":"Public"},"offset" :"0","item_name":this.search})
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
      filterproduct() {
        const querystring = require('querystring');
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"offset":"0","details":{"item_type":"Product","status":"approved","item_visibility":"Public","item_category":this.modals.item_category,"item_subcategory":this.modals.item_subcategory}})
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
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"offset":"0","details":{"item_type":"Product","status":"approved","item_visibility":"Public","item_category":this.modals.item_category}})
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
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"offset":"0","details":{"item_type":"Product","status":"approved","item_visibility":"Public","item_brand":this.modals.item_brand}})
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
      cleardata() {
        const querystring = require('querystring');
        axios
        .post(process.env.VUE_APP_API_ENDPOINT+'read_inventory_all',{"offset":"0","details":{"item_type":"Product","status":"approved","item_visibility":"Public"}})
        .then(response => {
          console.log(response);
          if(response.data.details){
          this.productData=response.data.details;
          this.modals.item_category='';
          this.modals.item_subcategory='';
          this.modals.item_brand='';
          this.subcategories=[];
          this.deleteitem=false;
          }
              
        })
      },
    },
    metaInfo() {
      return {
        title: this.metaData.meta_title,
        titleTemplate: '%s | nabnee',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          {
            vmid: 'description', name: 'description', content: this.metaData.meta_description,
          },
          {
            property: 'og:title',
            content: this.metaData.og_title,
            // template: '%s - My page',
            template: chunk => `${chunk} - nabnee`,
            vmid: 'og:title'
          },
          {
            property: 'og:description',
            content: this.metaData.og_description,
            vmid: 'og:description'
          },
          {
            property: 'og:image',
            content: this.metaData.og_image,
            vmid: 'og:image'
          },
          {
            property: 'og:type',
            content: this.metaData.og_type,
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
.home .shape-style-1.shape-default {
    background: white !important;
    background-image: none;
}
/*.home .shape-style-1.shape-default {
    background-image: linear-gradient(87deg, #2dce89b5 0, #2dceccd6 100%),url(https://nabnee.s3.me-south-1.amazonaws.com/home_banner.jpg) !important;
    background-size: cover !important;
}*/
</style>