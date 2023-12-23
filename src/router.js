import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Forgotpassword from "./views/Forgotpassword.vue";
import Forgot_password from "./views/Forgot_password.vue";
import Newbusinessuser from "./views/Newbusinessuser.vue";
import Businesses from "./views/Businesses.vue";
import Business from "./views/Business.vue";
import Products from "./views/Products.vue";
import Editbusiness from "./views/Editbusiness.vue";
import Images from "./views/Images.vue";  
import Profile from "./views/Profile.vue";
import Design from "./views/Design.vue";
import Product from "./views/Product.vue";
import Collection from "./views/Collection.vue";
import Plans from "./views/Plans.vue";
import Blog from "./views/Blog.vue";
import Article from "./views/Article.vue";
import Items from "./views/Items.vue";
import Inventory from "./views/Inventory.vue";
import Project from "./views/Project.vue";
import Search from "./views/Search.vue";
import Smartplanner from "./views/Smartplanner.vue";
import Privacy from "./views/Privacy.vue";
import Termsofuse from "./views/Termsofuse.vue";
import Datadeletion from "./views/Datadeletion.vue";
import About from "./views/About.vue";
import Quoterequests from "./views/Quoterequests.vue";
import Fblogin from "./views/Fblogin.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login
      }
    },
    {
      path: "/fblogin",
      name: "fblogin",
      components: {
        default: Fblogin
      }
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/search/:id",
      name: "search",
      components: {
        header: AppHeader,
        default: Search,
        footer: AppFooter
      }
    },
    {
      path: "/businesses",
      name: "businesses",
      components: {
        header: AppHeader,
        default: Businesses,
        footer: AppFooter
      }
    },
    {
      path: "/business/:id",
      name: "business",
      components: {
        header: AppHeader,
        default: Business,
        footer: AppFooter
      }
    },
    {
      path: "/products",
      name: "products",
      components: {
        header: AppHeader,
        default: Products,
        footer: AppFooter
      }
    },
    {
      path: "/editbusiness",
      name: "editbusiness",
      components: {
        header: AppHeader,
        default: Editbusiness,
        footer: AppFooter
      }
    },
    {
      path: "/images",
      name: "images",
      components: {
        header: AppHeader,
        default: Images,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register
      }
    },
    {
      path: "/forgot_password",
      name: "forgotpassword",
      components: {
        header: AppHeader,
        default: Forgot_password,
      }
    },
    {
      path: "/forgotpassword/:id",
      name: "forgotpassword",
      components: {
        header: AppHeader,
        default: Forgotpassword,
      }
    },
    {
      path: "/newbusinessuser/:id",
      name: "newbusinessuser",
      components: {
        header: AppHeader,
        default: Newbusinessuser,
      }
    },
    {
      path: "/design/:id",
      name: "design",
      components: {
        header: AppHeader,
        default: Design,
      }
    },
    {
      path: "/product/:id",
      name: "product",
      components: {
        header: AppHeader,
        default: Product,
      }
    },
    {
      path: "/collection",
      name: "collection",
      components: {
        header: AppHeader,
        default: Collection,
        footer: AppFooter
      }
    },
    {
      path: "/plans",
      name: "plans",
      components: {
        header: AppHeader,
        default: Plans,
        footer: AppFooter
      }
    },
    {
      path: "/blog",
      name: "blog",
      components: {
        header: AppHeader,
        default: Blog,
        footer: AppFooter
      }
    },
    {
      path: "/article/:id",
      name: "article",
      components: {
        header: AppHeader,
        default: Article,
        footer: AppFooter
      }
    },
    {
      path: "/smartplanner",
      name: "smartplanner",
      components: {
        header: AppHeader,
        default: Smartplanner,
        footer: AppFooter
      }
    },
    {
      path: "/quoterequests",
      name: "quoterequests",
      components: {
        header: AppHeader,
        default: Quoterequests,
        footer: AppFooter
      }
    },
    {
      path: "/items/:id",
      name: "items",
      components: {
        header: AppHeader,
        default: Items,
        footer: AppFooter
      }
    },
    {
      path: "/inventory/:id",
      name: "inventory",
      components: {
        header: AppHeader,
        default: Inventory,
        footer: AppFooter
      }
    },
    {
      path: "/project/:id",
      name: "project",
      components: {
        header: AppHeader,
        default: Project,
        footer: AppFooter
      }
    },
    {
      path: "/Privacy",
      name: "privacy",
      components: {
        header: AppHeader,
        default: Privacy,
        footer: AppFooter
      }
    },
    {
      path: "/Datadeletion",
      name: "Data Deletion",
      components: {
        header: AppHeader,
        default: Datadeletion,
        footer: AppFooter
      }
    },
    {
      path: "/Termsofuse",
      name: "Terms of use",
      components: {
        header: AppHeader,
        default: Termsofuse,
        footer: AppFooter
      }
    },
    {
      path: "/About",
      name: "About Us",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
