<template>
    <footer class="footer has-cards mb-4 mb-md-0">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-6 col-12 pr-1 text-center text-lg-left">
                    <div class="copyright d-inline">
                        &copy; {{year}}
                        <a href="#" class="text-default" target="_blank" rel="noopener">nabnee</a>
                    </div>
                    <a target="_blank" rel="noopener" href="https://twitter.com/nabneedotcom"
                       class="ml-3 btn  btn-icon-only btn-outline-info no-outline btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/nabneedotcom"
                       class="btn  btn-icon-only btn-outline-primary no-outline btn-round" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://instagram.com/nabnee"
                       class="btn  btn-icon-only btn-outline-danger no-outline btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://pl.pinterest.com/nabnee/"
                       class="btn  btn-icon-only btn-outline-danger no-outline btn-round" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-pinterest"></i>
                    </a>
                </div>
                <div class="col-md-6 col-12" v-if="lang=='english'">
                    <ul class="nav nav-footer justify-content-md-end justify-content-center">
                        <li class="nav-item">
                            <a href="/about" class="nav-link" rel="noopener">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="/datadeletion" class="nav-link" rel="noopener">Data Protection</a>
                        </li>
                        <li class="nav-item">
                            <a href="/termsofuse" class="nav-link" rel="noopener">Terms</a>
                        </li>
                        <li class="nav-item">
                            <a href="/privacy" class="nav-link" rel="noopener">Privacy Policy</a>
                        </li>
                        <li class="nav-item">
                            <a href="/blog" class="nav-link" rel="noopener">Blog</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-12" v-if="lang=='arabic'">
                    <ul class="nav nav-footer justify-content-md-end justify-content-center">
                        <li class="nav-item">
                            <a href="/about" class="nav-link" rel="noopener">عن نبني</a>
                        </li>
                        <li class="nav-item">
                            <a href="/datadeletion" class="nav-link" rel="noopener">حماية البيانات</a>
                        </li>
                        <li class="nav-item">
                            <a href="/termsofuse" class="nav-link" rel="noopener">شروط الاستخدام</a>
                        </li>
                        <li class="nav-item">
                            <a href="/privacy" class="nav-link" rel="noopener">سياسة الخصوصية</a>
                        </li>
                        <li class="nav-item">
                            <a href="/blog" class="nav-link" rel="noopener">مدونة</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
        year: new Date().getFullYear(),
        lang:localStorage.getItem('lang')
    }
  },
  mounted() {
      if(this.lang!='english' && this.lang!='arabic'){
         localStorage.setItem('lang', 'arabic');
         this.lang=localStorage.getItem('lang');
        }
       
    }
};
</script>
<style>
#app .footer.has-cards:before {
    transform: skew(0, 0deg);
    top: 485px;
}
#app .footer.has-cards {
    padding-top: 500px;
    margin-top: -400px;
    padding-bottom: 15px !important;
}
</style>
