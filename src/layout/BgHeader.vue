<template>
  <header class="header-global nav-lg" id="profile-nav">
    <base-nav
      class="navbar-main headroom"
      transparent
      type=""
      effect="light"
      expand
      id="nav"
    >
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/home">
        <img src="/img/brand/white.png" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="#">
            <img src="/img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <router-link
            to="/images"
            class="nav-link text-white"
            data-toggle="tooltip"
            title="Designs"
          >
            <i class="fa fa-image d-md-none mr-2"></i>
            <span class="nav-link-inner--text" v-if="lang == 'english'"
              >Designs</span
            >
            <span class="nav-link-inner--text" v-if="lang == 'arabic'"
              >تصميمات</span
            >
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/products"
            class="nav-link text-white"
            data-toggle="tooltip"
            title="Products"
          >
            <i class="ni ni-bag-17 d-md-none mr-2"></i>
            <span class="nav-link-inner--text" v-if="lang == 'english'"
              >Products</span
            >
            <span class="nav-link-inner--text" v-if="lang == 'arabic'"
              >منتجات</span
            >
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/businesses"
            class="nav-link text-white"
            data-toggle="tooltip"
            title="Businesses"
          >
            <i class="fa fa-briefcase d-md-none mr-2"></i>
            <span class="nav-link-inner--text" v-if="lang == 'english'"
              >Businesses</span
            >
            <span class="nav-link-inner--text" v-if="lang == 'arabic'"
              >الأعمال</span
            >
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/blog"
            class="nav-link text-white"
            data-toggle="tooltip"
            title="Read nabnee blog"
          >
            <i class="fa fa-facebook-square d-md-none mr-2"></i>
            <span class="nav-link-inner--text" v-if="lang == 'english'"
              >Blog</span
            >
            <span class="nav-link-inner--text" v-if="lang == 'arabic'"
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
            <span class="text-white" v-if="lang == 'english'">EN</span>
            <span class="text-white" v-if="lang == 'arabic'">AR</span>
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
        <base-dropdown tag="li" class="nav-item ml-lg-4" v-if="accessToken">
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
            >Profile</router-link
          >
          <router-link
            to="/profile"
            class="dropdown-item"
            v-if="lang == 'arabic'"
            >الملف الشخصي</router-link
          >
          <router-link
            to="/collection"
            class="dropdown-item"
            v-if="lang == 'english'"
            >Collections</router-link
          >
          <router-link
            to="/collection"
            class="dropdown-item"
            v-if="lang == 'arabic'"
            >المجموعات</router-link
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
        <router-link
          to="/login"
          class="btn btn-neutral btn-icon cursor-pointer"
          v-if="!accessToken && lang == 'english'"
          ><i class="ni ni-key-25 mr-2"></i> Login</router-link
        >
        <router-link
          to="/login"
          class="btn btn-neutral btn-icon cursor-pointer"
          v-if="!accessToken && lang == 'arabic'"
          ><i class="ni ni-key-25 mr-2"></i> تسجيل الدخول</router-link
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
            >تصميمات</span
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
            >منتجات</span
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
            >الأعمال</span
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
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import { mapActions } from "vuex";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  data() {
    return {
      search: "",
      lang: localStorage.getItem("lang"),
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
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", function () {
        var navbar = document.getElementById("nav");
        var nav_classes = navbar.classList;
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
  height: 220px;
  overflow: hidden;
  display: block;
  border-radius: 0.25rem !important;
  margin-bottom: 15px;
}
.rtl {
  text-align: right;
}
.profile.profile-page .card-profile {
  margin-top: -250px;
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
  transform: scale(
    1.3
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
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
#app .form-control-alternative {
  border: 1px solid #e4e4e48f;
}
.profile-page .nav-pills .nav-link {
  color: #5ece89;
}
.profile-page .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #5ece89;
}
#profile-nav .headroom--not-top {
  position: fixed;
  background-color: #5ece89 !important;
}
#app .navbar-transparent .navbar-toggler-icon {
  background-image: url(/img/menu.png);
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
.bottom-menu .router-link-active {
  color: #5ece89;
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
@media (min-width: 1200px) {
  .nabnee .container {
    max-width: 1150px;
  }
  .navbar .container {
    max-width: 1150px;
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
  .img-big {
    height: auto !important;
  }
}
@media (min-width: 768px) {
}
</style>
