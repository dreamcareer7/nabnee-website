<template>
  <header class="header-global nav-lg" id="general-nav">
    <base-nav
      class="navbar-main headroom"
      transparent
      type=""
      effect="light"
      expand
      id="nav"
    >
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/home">
        <img src="/img/brand/blue.png" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <router-link to="/home">
            <img src="/img/brand/blue.png" alt="nabnee" />
          </router-link>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu" id="closebtn"> </close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <router-link to="/images" class="nav-link" title="Designs">
            <i class="fa fa-image d-md-none mr-2"></i>
            <span
              class="nav-link-inner--text"
              v-if="lang == 'english'"
              @click="closeMenu"
              >Designs
            </span>
            <span
              class="nav-link-inner--text"
              v-if="lang == 'arabic'"
              @click="closeMenu"
              >تصاميم</span
            >
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/products"
            class="nav-link"
            data-toggle="tooltip"
            title="Products"
          >
            <i class="ni ni-bag-17 d-md-none mr-2"></i>
            <span
              class="nav-link-inner--text"
              v-if="lang == 'english'"
              @click="closeMenu"
              >Products</span
            >
            <span
              class="nav-link-inner--text"
              v-if="lang == 'arabic'"
              @click="closeMenu"
              >تشطيبات</span
            >
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/businesses"
            class="nav-link"
            data-toggle="tooltip"
            title="Businesses"
          >
            <i class="fa fa-briefcase d-md-none mr-2"></i>
            <span
              class="nav-link-inner--text"
              v-if="lang == 'english'"
              @click="closeMenu"
              >Businesses</span
            >
            <span
              class="nav-link-inner--text"
              v-if="lang == 'arabic'"
              @click="closeMenu"
              >مكاتب ومحلات</span
            >
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/blog"
            class="nav-link"
            data-toggle="tooltip"
            title="Read nabnee blog"
          >
            <i class="ni ni-books d-md-none mr-2"></i>
            <span
              class="nav-link-inner--text"
              v-if="lang == 'english'"
              @click="closeMenu"
              >Blog</span
            >
            <span
              class="nav-link-inner--text"
              v-if="lang == 'arabic'"
              @click="closeMenu"
              >مدونة</span
            >
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav align-items-lg-center navbar-nav-hover ml-lg-auto">
        <base-dropdown tag="li" class="nav-item">
          <base-button
            slot="title"
            type="secondary"
            outline
            class="no-outline dropdown-toggle"
          >
            <span class="" v-if="lang == 'english'">EN</span>
            <span class="" v-if="lang == 'arabic'">AR</span>
          </base-button>
          <li>
            <a class="dropdown-item cursor-pointer">
              <div @click="changelanguage('arabic')">عربي</div>
            </a>
            <a class="dropdown-item cursor-pointer">
              <div @click="changelanguage('english')">English</div>
            </a>
          </li>
        </base-dropdown>
        <li class="nav-item">
          <form @submit.prevent="searchproduct" class="search-form">
            <div class="searchbar">
              <input
                v-if="lang == 'english'"
                class="search_input"
                type="text"
                @keyup.enter="searchproduct()"
                v-model="search"
                placeholder="Search... "
              />
              <input
                v-if="lang == 'arabic'"
                class="search_input"
                type="text"
                @keyup.enter="searchproduct()"
                v-model="search"
                placeholder="...بحث"
              />
              <a href="#" class="search_icon" @click="searchproduct()"
                ><i class="fa fa-search"></i
              ></a>
            </div>
          </form>
        </li>
        <router-link
          to="/smartplanner"
          data-toggle="tooltip"
          title="Smart Planner"
          class="btn btn-neutral btn-icon cursor-pointer"
        >
          <img
            src="/img/smart-planner.png"
            alt="Smart Planner"
            width="25px"
            height="20px"
          />
        </router-link>
        <base-dropdown tag="li" class="nav-item" v-if="accessToken">
          <a
            slot="title"
            href="#"
            class="btn btn-neutral btn-icon"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-single-02 mr-2"></i>
            <span class="nav-link-inner--text" v-if="lang == 'english'"
              >Profile</span
            >
            <span class="nav-link-inner--text" v-if="lang == 'arabic'"
              >الملف الشخصي</span
            >
          </a>
          <router-link
            to="/profile"
            class="dropdown-item"
            v-if="lang == 'english'"
            ><span @click="closeMenu">Profile</span></router-link
          >
          <router-link
            to="/profile"
            class="dropdown-item"
            v-if="lang == 'arabic'"
            ><span @click="closeMenu">الملف الشخصي</span></router-link
          >
          <router-link
            to="/collection"
            class="dropdown-item"
            v-if="lang == 'english'"
            ><span @click="closeMenu">Collections</span></router-link
          >
          <router-link
            to="/collection"
            class="dropdown-item"
            v-if="lang == 'arabic'"
            ><span @click="closeMenu">المجموعات</span></router-link
          >
          <router-link
            to="/plans"
            class="dropdown-item"
            v-if="lang == 'english'"
            ><span @click="closeMenu">Plans</span></router-link
          >
          <router-link to="/plans" class="dropdown-item" v-if="lang == 'arabic'"
            ><span @click="closeMenu">ملف الأسعار</span></router-link
          >
          <router-link
            to="/quoterequests"
            class="dropdown-item"
            v-if="lang == 'english' && type != 'General'"
            ><span @click="closeMenu">Quote Requests</span></router-link
          >
          <router-link
            to="/quoterequests"
            class="dropdown-item"
            v-if="lang == 'arabic' && type != 'General'"
            ><span @click="closeMenu">طلبات عروض الأسعار</span></router-link
          >
          <button
            class="dropdown-item cursor-pointer"
            v-if="lang == 'english'"
            @click="logoutu"
          >
            Logout
          </button>
          <button
            class="dropdown-item cursor-pointer"
            v-if="lang == 'arabic'"
            @click="logoutu"
          >
            تسجيل خروج
          </button>
        </base-dropdown>
        <a
          href="/login"
          class="btn btn-neutral btn-icon cursor-pointer"
          v-if="!accessToken && lang == 'english'"
          ><i class="ni ni-key-25 mr-2"></i> Login</a
        >
        <a
          href="/login"
          class="btn btn-neutral btn-icon cursor-pointer"
          v-if="!accessToken && lang == 'arabic'"
          ><i class="ni ni-key-25 mr-2"></i> تسجيل الدخول</a
        >
      </ul>
    </base-nav>
    <ul class="navbar-nav align-items-lg-center d-md-none d-flex bottom-menu">
      <li class="nav-item">
        <router-link
          to="/landing"
          class="nav-link"
          data-toggle="tooltip"
          title="Home"
        >
          <i class="fa fa-home d-md-none"></i>
          <span class="nav-link-inner--text" v-if="lang == 'english'"
            >Home</span
          >
          <span class="nav-link-inner--text" v-if="lang == 'arabic'"
            >الرئيسية</span
          >
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/images"
          class="nav-link"
          data-toggle="tooltip"
          title="Designs"
        >
          <i class="fa fa-image d-md-none"></i>
          <span class="nav-link-inner--text" v-if="lang == 'english'"
            >Designs</span
          >
          <span class="nav-link-inner--text" v-if="lang == 'arabic'"
            >تصاميم</span
          >
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/products"
          class="nav-link"
          data-toggle="tooltip"
          title="Products"
        >
          <i class="ni ni-bag-17 d-md-none"></i>
          <span class="nav-link-inner--text" v-if="lang == 'english'"
            >Products</span
          >
          <span class="nav-link-inner--text" v-if="lang == 'arabic'"
            >تشطيبات</span
          >
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/businesses"
          class="nav-link"
          data-toggle="tooltip"
          title="Businesses"
        >
          <i class="fa fa-briefcase d-md-none"></i>
          <span class="nav-link-inner--text" v-if="lang == 'english'"
            >Businesses</span
          >
          <span class="nav-link-inner--text" v-if="lang == 'arabic'"
            >مكاتب ومحلات</span
          >
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/blog"
          class="nav-link"
          data-toggle="tooltip"
          title="Read nabnee blog"
        >
          <i class="ni ni-books d-md-none"></i>
          <span class="nav-link-inner--text" v-if="lang == 'english'"
            >Blog</span
          >
          <span class="nav-link-inner--text" v-if="lang == 'arabic'"
            >مدونة</span
          >
        </router-link>
      </li>
    </ul>
  </header>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import NavbarToggleButton from "@/components/NavbarToggleButton";
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import { mapActions } from "vuex";

export default {
  components: {
    FadeTransition,
    NavbarToggleButton,
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  data() {
    return {
      json: null,
      search: "",
      lang: localStorage.getItem("lang"),
      type: localStorage.getItem("user_type"),
      accessToken: localStorage.getItem("accessToken"),
      auth1: {
        headers: {
          "Content-Type": "application/json",
          Authorization: "ExamInsta#" + localStorage.getItem("accessToken"),
          _id: localStorage.getItem("_id"),
        },
      },
    };
  },
  created: function () {
    var _this = this;
    $.getJSON("https://geoip-db.com/json/", function (json) {
      _this.json = json;
      console.log(_this.json);
      localStorage.setItem("country_name", _this.json.country_name);
      if (localStorage.getItem("location_lat")) {
        localStorage.setItem("location_lat", _this.json.latitude);
        localStorage.setItem("location_long", _this.json.longitude);
      }
    });
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", function () {
        var navbar = document.getElementById("nav");
        var nav_classes = navbar.classList;
        //console.log(nav_classes);
        if (document.documentElement.scrollTop >= 50) {
          if (nav_classes.contains("headroom--not-top") === false) {
            nav_classes.toggle("headroom--not-top");
          }
        } else {
          if (nav_classes.contains("headroom--not-top") === true) {
            nav_classes.toggle("headroom--not-top");
          }
        }
      });
    });

    if (this.lang != "english" && this.lang != "arabic") {
      localStorage.setItem("lang", "arabic");
      this.lang = localStorage.getItem("lang");
    }
    var date = new Date();
    console.log(date);
    if (
      localStorage.getItem("expiry_date") <= date &&
      localStorage.getItem("expiry_date")
    ) {
      this.logout();
    }
  },
  methods: {
    ...mapActions(["logout"]),
    logoutu() {
      console.log(this.accessToken);
      this.logout();
    },
    searchproduct() {
      const path = "/search/" + this.search;
      if (this.$route.path !== path) this.$router.push(path);
      if (this.$route.path == path) window.location.reload();
    },
    changelanguage(lang) {
      console.log(lang);
      localStorage.setItem("lang", lang);
      window.location.reload();
    },
    closeMenu() {
      console.log("closeMenu");
      document.getElementById("closebtn").click();
    },
    closemenu1() {
      this.toggled = false;
      console.log("closeMenu");
      var elements = document.getElementsByClassName("navbar-collapse")[0].id;
      document.getElementById(elements).classList.remove("show");
      document.getElementById("menubtn").removeAttribute("aria-expanded");
    },
  },
};
</script>
<style>
.shrink {
  padding: 0.3rem;
  background: black;
}

.navbar-brand img {
  height: 50px;
}

.img-big {
  height: 100% !important;
  width: auto;
  margin: auto;
}

.cursor-pointer {
  cursor: pointer;
}

.nav-lg .navbar-nav .nav-link {
  font-size: 1rem;
}

.inventory .card-body {
  padding: 0.5rem;
}

.btn.no-outline {
  border: 0;
}

.share-network a {
  padding: 4px 9px;
  border-radius: 5px;
  color: white !important;
}

.share-network a i {
  margin-right: 5px;
}

.share-network {
  display: flex;
  flex-wrap: wrap;
}

.search-bar .form-control {
  height: calc(2.55rem + 2px);
}

.searchbar {
  margin-bottom: auto;
  margin-top: auto;
  height: 43px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  border: 1px solid #e4e4e4;
}

.search_input {
  border: 0;
  outline: 0;
  background: none;
  width: 80%;
  padding: 1px 10px;
  line-height: 40px;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_input {
  transition: width 0.4s linear;
}

.searchbar:hover > .search_icon {
  color: #adb5bd;
}

.search_icon {
  height: 40px;
  width: 40px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #797979;
}

#app .section-shaped .shape.shape-skew + .shape-container {
  padding-top: 15rem;
  padding-bottom: 16rem;
}

.inventory-thumbnail {
  height: 250px;
  overflow: hidden;
  display: block;
  border-radius: 0.25rem !important;
  margin-bottom: 15px;
}

.rtl {
  text-align: right;
}

.profile.profile-page .card-profile {
  margin-top: -150px;
}

.profile-page.profile .card-profile .card-profile-image img {
  transform: translate(-50%, -55%);
}

.profile-page.profile .card-profile .card-profile-image img:hover {
  transform: translate(-50%, -58%);
}

.gallery-navigation {
  position: absolute;
  top: 50%;
  background-color: #00000040;
  width: 30px;
  height: 40px;
  transition: transform 0.5s;
}

.gallery-navigation:hover {
  transform: scale(1.3);
  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.gallery-navigation .fa {
  color: white;
}

.gallery-navigation.right-nav {
  right: 0;
  border-radius: 30px 0px 0px 30px;
}

.gallery-navigation.left-nav {
  left: 0;
  border-radius: 0px 30px 30px 0;
}

.gallery-navigation.left-nav .fa-2x {
  font-size: 1.5em;
  margin-top: 8px;
  padding-left: 3px;
}

.gallery-navigation.right-nav .fa-2x {
  font-size: 1.5em;
  margin-top: 8px;
  padding-left: 10px;
}

#general-nav .headroom--not-top {
  position: fixed;
  background-color: white !important;
}

#app .form-control-alternative {
  border: 1px solid #e4e4e48f;
}

#app .navbar-transparent .navbar-toggler-icon {
  background-image: url(/img/menu.png);
}

#app .navbar-toggler-icon {
  width: 1.1em;
  height: 1.1em;
}

.div-shimmer {
  display: inline-flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 15px;
  vertical-align: top;
}

.shine {
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 180px;
  display: inline-block;
  position: relative;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
}

.box-shimmer {
  height: 150px;
  border-radius: 5px;
}

.circle-shimmer {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.circle-shimmer.icon-shimmer {
  height: 30px;
  width: 30px;
}

span.line-shimmer {
  height: 10px;
  margin-top: 10px;
  width: 200px;
  border-radius: 5px;
}

span.photo-shimmer {
  display: block !important;
  height: 180px;
  border-radius: 5px;
}

.bottom-menu {
  background-color: white;
  text-align: center;
  position: fixed;
  bottom: 0px;
  z-index: 99;
  box-shadow: 0 1px 10px rgba(130, 130, 134, 0.1);
  left: 0;
  right: 0;
  justify-content: space-between;
}

.navbar-nav.bottom-menu .nav-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: normal;
  font-size: 15px;
}

.bottom-menu .nav-link .nav-link-inner--text {
  font-size: 0.8rem;
  margin-left: 0 !important;
  padding-top: 5px;
}

.bottom-menu.navbar-nav {
  flex-direction: row;
}

.bottom-menu li {
  flex: 1 0 20%;
}

.bottom-menu .nav-link.router-link-active {
  color: #5ece89 !important;
}

.profile .section-profile-cover {
  height: 450px;
}

.logo-shimmer {
  width: 160px;
  height: 160px;
  margin: auto;
  display: block;
}

.profile-page .logo-shimmer {
  transform: translate(0%, -55%);
}

.img-zoom img {
  transition: transform 0.5s ease;
}

.img-zoom img:hover {
  transform: scale3d(1.1, 1.1, 1);
}

.vue-star-rating-star {
  vertical-align: top;
}

.profile .fa-small {
  font-size: 0.7rem;
  vertical-align: top;
  margin-top: 7px;
}

.fa-15x {
  font-size: 1.5em !important;
}

@-webkit-keyframes rotation {
  0%,
  40% {
    -webkit-transform: rotate(0deg);
  }

  60%,
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes rotation {
  0%,
  40% {
    transform: rotate(0deg);
  }

  60%,
  100% {
    transform: rotate(360deg);
  }
}

.rotate-animate {
  -webkit-animation: rotation 5s infinite linear;
  animation: rotation 5s infinite linear;
}

@-webkit-keyframes placeholderShimmer {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}

.text-sentance:first-letter {
  text-transform: capitalize;
}

span.badge.badge-floating.badge-md.border-white.badge-circle.badge-danger.badge-pill {
  position: absolute;
  right: -15px;
  top: -27%;
  border: 4px solid;
  width: 20px;
  height: 20px;
  margin-left: 0.5rem;
  margin-right: 0.1rem;
  background-color: #f80031;
  color: white;
  border-radius: 50%;
  padding: 0.7em 0.7em;
}

@media (min-width: 1200px) {
  .nabnee .container {
    max-width: 1150px;
  }

  .navbar .container {
    max-width: 1150px;
  }

  .h-md-100vh {
    height: 100vh !important;
  }
}

@media (max-width: 468px) {
  .section-shaped .display-3 {
    font-size: 2rem;
  }

  .section-shaped .display-3 span {
    display: inline;
  }

  #app .section-shaped .shape.shape-skew + .shape-container {
    padding-top: 13rem;
    padding-bottom: 13rem;
  }
}

@media (max-width: 768px) {
  .searchbar {
    width: 100%;
  }

  .search_input {
    width: 80%;
  }

  .search-form {
    width: 90%;
  }

  .mt--200 {
    margin-top: -280px !important;
  }

  .design-page.h-100vh {
    height: auto !important;
    padding-bottom: 60px;
  }

  .design-page .showcase {
    height: auto;
  }

  .img-big {
    height: auto !important;
  }

  .navbar-nav .nav-link .nav-link-inner--text {
    display: inline-block;
    width: 85%;
  }

  .inventory-thumbnail {
    max-height: 250px;
    height: auto;
  }
}

@media (max-width: 580px) {
  .inventory-thumbnail {
    height: auto;
    max-height: initial;
  }
}

@media (min-width: 768px) {
  #app .navbar-transparent .navbar-nav .nav-link {
    color: rgb(50 50 93);
    padding-right: 0px;
  }

  #app .navbar-transparent .navbar-nav .nav-link:hover,
  .navbar-transparent .navbar-nav .nav-link:focus {
    color: rgb(50 50 93 / 60%);
  }

  #app .navbar-transparent .navbar-nav .nav-link.active {
    color: rgb(44 63 76);
  }

  .sub-images:nth-child(3n + 1) {
    padding-right: 3px;
  }

  .sub-images:nth-child(3n + 2) {
    padding-right: 10px;
    padding-left: 10px;
  }

  .sub-images:nth-child(3n + 0) {
    padding-left: 3px;
  }

  .hover-zoom {
    transition: transform 0.5s;
  }

  .hover-zoom:hover {
    transform: scale(1.1);
  }

  .inventory-thumbnail img {
  }
}
</style>
