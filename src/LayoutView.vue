<template>
  <loading class="loadsec" v-model:active="isLoading"
                 :is-full-page="fullPage"/>
<header id="header" class="header fixed-top d-flex align-items-center">

<div class="d-flex align-items-center justify-content-between">
  <RouterLink class="logo d-flex align-items-center" to="/dashboard">
    <span class="d-none d-lg-block">Rent A Repair</span>
  </RouterLink>
  <i class="bi bi-list toggle-sidebar-btn"></i>
</div><!-- End Logo -->

<div class="search-bar">
  <form class="search-form d-flex align-items-center" method="POST" action="#">
    <input type="text" name="query" placeholder="Search" title="Enter search keyword">
    <button type="submit" title="Search"><i class="bi bi-search"></i></button>
  </form>
</div><!-- End Search Bar -->

<nav class="header-nav ms-auto">
  <ul class="d-flex align-items-center">

    <li class="nav-item d-block d-lg-none">
      <a class="nav-link nav-icon search-bar-toggle " href="#">
        <i class="bi bi-search"></i>
      </a>
    </li><!-- End Search Icon-->

  </ul>
</nav><!-- End Icons Navigation -->

</header><!-- End Header -->

<!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">

<ul class="sidebar-nav" id="sidebar-nav">

  <li class="nav-item">
    <RouterLink class="nav-link" to="/dashboard">
      <i class="bi bi-grid"></i>
      <span>Dashboard</span>
    </RouterLink>
  </li><!-- End Dashboard Nav -->
  <li class="nav-heading">Management</li>
  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
      <i class="bi bi-menu-button-wide"></i><span>Employee</span><i class="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <RouterLink to="/technician">
          <i class="bi bi-circle"></i><span>Technicians</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/ridesharer">
          <i class="bi bi-circle"></i><span>Ride Sharer</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/towing">
          <i class="bi bi-circle"></i><span>Towing Company</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/delivery">
          <i class="bi bi-circle"></i><span>Delivery</span>
        </RouterLink>
      </li>
      
    </ul>
  </li><!-- End Components Nav -->
  <li class="nav-item">
    <RouterLink class="nav-link collapsed" to="/service">
      <i class="bi bi-nut"></i>
      <span>App Configuration</span>
    </RouterLink>
  </li><!-- End Profile Page Nav -->
  <li class="nav-item">
    <RouterLink class="nav-link collapsed" to="/transaction">
      <i class="bi bi-nut"></i>
      <span>Transaction History</span>
    </RouterLink>
  </li><!-- End Profile Page Nav -->
  <li class="nav-item">
    <a class="nav-link collapsed log" @click="LogoutAdmin">
      <i class="bi bi-box-arrow-in-right"></i>
      <span>Logout</span>
    </a>
  </li><!-- End Login Page Nav -->
</ul>

</aside><!-- End Sidebar-->
<main id="main" class="main">
    <slot />
</main>

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>
<script>
  import '../src/assets/boots.js';
  import { axiosReq, removeFix } from '@/functions';
  import { ciapi } from '@/globals';
  import { local } from '@/functions.js';
  import Loading from 'vue-loading-overlay';
  import router from '@/router';

  export default {
    components: {
    Loading
   },
    created(){
      function elementLoad(selector){
      return new Promise(resolve=>{
          var check = setInterval(function(){
              if(document.querySelector(selector) != null){
                  clearInterval(check);
                  resolve(document.querySelector(selector));
              }
          });
      })

    }

    elementLoad('.toggle-sidebar-btn').then(()=>{
      document.querySelector('.toggle-sidebar-btn').onclick= ()=> document.body.classList.toggle('toggle-sidebar');
    });
    elementLoad('.search-bar-toggle').then(()=>{
      document.querySelector('.search-bar-toggle').onclick= ()=> document.querySelector('.search-bar').classList.toggle('search-bar-show');
    });

  },
  methods: {
    LogoutAdmin()
    {
      document.querySelector(".loadsec").style.display = "flex";
        document.querySelector(".loadsec").style.justifyConent = "center";
      axiosReq({
          method:'post',
          url: ciapi+'admin/logout'.toLowerCase(),
          headers:{
              PWAuth: local.get('user_token'),
              PWAuthUser: local.get('user_id')
          }
      }).catch(()=>{
          openToast('Something went wrong...', 'danger');
      }).then(()=>{
              localStorage.clear();
              document.querySelector(".loadsec").style.display = "none !important";
              window.localStorage.clear();
              router.replace('/login');
      });
    }
  }
}
</script>
<style scoped>
@import '../src/assets/style.css';
@import '../src/assets/bootstrap-icons/bootstrap-icons.css';

.log{
  cursor: pointer;
}
</style>