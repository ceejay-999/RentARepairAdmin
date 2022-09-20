
<template>
 <SharedLayout>
    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <RouterLink class="breadcrumb-item" to="/dashboard">Home</RouterLink>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section dashboard">
      <loading class="loadsec" v-model:active="isLoading"
                 :is-full-page="fullPage"/>
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-8">
          <div class="row">

            <!-- Sales Card -->
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <div class="content1">
                    <ContentLoader  class="con-loader"
                      width="176"
                      height="126"
                      primaryColor="#f3f3f3"
                      secondaryColor="#cccccc">
                      <rect x="0" y="20" rx="3" ry="3" width="145" height="25" />
                      <rect x="75" y="75" rx="3" ry="3" width="30" height="35" />
                      <circle cx="30" cy="90" r="30" />
                      </ContentLoader>
                  </div>
                  <div class="con-value1">
                    <h5 class="card-title">Technicians <span></span></h5>
                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{{technicians}}</h6>
                    </div>
                  </div>
                  </div>
                </div>

              </div>
            </div><!-- End Sales Card -->

            <!-- Revenue Card -->
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card revenue-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <div class="content2">
                    <ContentLoader  class="con-loader"
                      width="176"
                      height="126"
                      primaryColor="#f3f3f3"
                      secondaryColor="#cccccc">
                      <rect x="0" y="20" rx="3" ry="3" width="145" height="25" />
                      <rect x="75" y="75" rx="3" ry="3" width="30" height="35" />
                      <circle cx="30" cy="90" r="30" />
                      </ContentLoader>
                  </div>
                  <div class="con-value2">
                    <h5 class="card-title">RideSharer <span></span></h5>

                  <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i class="bi bi-people"></i>
                        </div>
                        <div class="ps-3">
                        <h6>{{ridesharer}}</h6>
                        </div>
                  </div>
                  </div>
                </div>

              </div>
            </div><!-- End Revenue Card -->

            <!-- Customers Card -->
            <div class="col-xxl-4 col-xl-12">

              <div class="card info-card customers-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <div class="content3">
                    <ContentLoader  class="con-loader"
                      width="176"
                      height="126"
                      primaryColor="#f3f3f3"
                      secondaryColor="#cccccc">
                      <rect x="0" y="20" rx="3" ry="3" width="145" height="25" />
                      <rect x="75" y="75" rx="3" ry="3" width="30" height="35" />
                      <circle cx="30" cy="90" r="30" />
                      </ContentLoader>
                  </div>
                  <div class="con-value3">
                    <h5 class="card-title">Towing <span></span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{{towtruck}}</h6>
                    </div>
                  </div>
                  </div>

                </div>
              </div>

            </div><!-- End Customers Card -->
            <!-- Sales Card -->
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <div class="content4">
                    <ContentLoader  class="con-loader"
                      width="176"
                      height="126"
                      primaryColor="#f3f3f3"
                      secondaryColor="#cccccc">
                      <rect x="0" y="20" rx="3" ry="3" width="145" height="25" />
                      <rect x="75" y="75" rx="3" ry="3" width="30" height="35" />
                      <circle cx="30" cy="90" r="30" />
                      </ContentLoader>
                  </div>
                  <div class="con-value4">
                    <h5 class="card-title">Delivery <span></span></h5>
                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{{delivery}}</h6>
                    </div>
                  </div>
                  </div>
                </div>

              </div>
            </div><!-- End Sales Card -->

            <!-- Reports -->
            <div class="col-12">
              <div class="card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Reports <span>/Today</span></h5>

                  <!-- Line Chart -->
                  <div id="reportsChart"></div>
                  <!-- End Line Chart -->

                </div>

              </div>
            </div><!-- End Reports -->

            <!-- Recent Sales -->
            <div class="col-12">
              <div class="card recent-sales overflow-auto">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Technicians</h5>
                  <div id="divRequest1">
                    <table id="techniciantable" class="display" width="100%">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </tfoot>
                    </table>
                  </div>
                </div>

            </div>
            </div><!-- End Recent Sales -->
            <!-- Recent Sales -->
            <div class="col-12">
              <div class="card recent-sales overflow-auto">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Ride Sharer <span></span></h5> 
                  <div id="divRequest2">
                    <table id="ridesharerTable" class="table tableborderless datatable"  width="100%">
                    <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Username</th>
                              <th scope="col">Firstname</th>
                              <th scope="col">Lastname</th>
                              <th scope="col">Email</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                          </tr>
                      </thead>
                      <tfoot>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Username</th>
                              <th scope="col">Firstname</th>
                              <th scope="col">Lastname</th>
                              <th scope="col">Email</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                          </tr>
                      </tfoot>
                  </table>
                  </div>
                </div>

            </div>
            </div><!-- End Recent Sales -->
            <div class="col-12">
              <div class="card recent-sales overflow-auto">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>
                  <div class="card-body">
                  <h5 class="card-title">Towing Members</h5>               
                  <div id="divRequest3">
                    <table id="TowingTable" class="table tableborderless datatable" width="100%">
                    <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Username</th>
                              <th scope="col">Firstname</th>
                              <th scope="col">Lastname</th>
                              <th scope="col">Email</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                          </tr>
                      </thead>
                      <tfoot>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Username</th>
                              <th scope="col">Firstname</th>
                              <th scope="col">Lastname</th>
                              <th scope="col">Email</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                          </tr>
                      </tfoot>
                  </table>
                  </div>
                </div>
            </div>
            </div>
            <div class="col-12">
              <div class="card recent-sales overflow-auto">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Delivery<span></span></h5> 
                  <div id="divRequest2">
                    <table id="DeliveryTable" class="table tableborderless datatable"  width="100%">
                    <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Username</th>
                              <th scope="col">Firstname</th>
                              <th scope="col">Lastname</th>
                              <th scope="col">Email</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                          </tr>
                      </thead>
                      <tfoot>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Username</th>
                              <th scope="col">Firstname</th>
                              <th scope="col">Lastname</th>
                              <th scope="col">Email</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                          </tr>
                      </tfoot>
                  </table>
                  </div>
                </div>

            </div>
            </div>
            

          </div>
        </div><!-- End Left side columns -->

        <!-- Right side columns -->
        <div class="col-lg-4">

          

          <!-- Budget Report -->
          <div class="card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body pb-0">
              <h5 class="card-title">Budget Report <span>| This Month</span></h5>

              <div id="budgetChart" style="min-height: 400px;" class="echart"></div>


            </div>
          </div><!-- End Budget Report -->

          
          <!-- <div class="card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body pb-0">
              <h5 class="card-title">Website Traffic <span>| Today</span></h5>

              <div id="trafficChart" style="min-height: 400px;" class="echart"></div>

            </div>
          </div> -->

          <!-- News & Updates Traffic -->
          <div class="card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body pb-0">
              <h5 class="card-title">News &amp; Updates <span>| Today</span></h5>

              <div class="news">
                <div class="post-item clearfix">
                  <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                  <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                </div>

                <div class="post-item clearfix">
                  <h4><a href="#">Quidem autem et impedit</a></h4>
                  <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                </div>

                <div class="post-item clearfix">
                  <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                </div>

                <div class="post-item clearfix">
                  <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                  <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                </div>

                <div class="post-item clearfix">
                  <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                  <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                </div>

              </div><!-- End sidebar recent posts-->

            </div>
          </div><!-- End News & Updates -->

        </div><!-- End Right side columns -->

      </div>
    </section>

 </SharedLayout>
</template>
<script>
  import { local } from '../functions.js';
  import { elementLoad } from '@/functions';
  import axios from 'axios';
  import { ContentLoader } from 'vue-content-loader';
  import router from '../router';
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  const value = ({
    name: "App",
    components: {
      ContentLoader,
      Loading
    },
    data() {
      return{
        technicians: 0,
        ridesharer: 0,
        towtruck: 0,
        delivery: 0,
        isLoading: false,
        fullPage: true
      }
    },
    mounted(){
      axios({
        method: 'post',
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
        },
        url: 'https://www.medicalcouriertransportation.com/rentarepair/api/users?user_role=technician&_batch=true',
        }).catch(()=>{
          console.log(res);
        }).then(res=>{
          if(res.data.success)
          {
            this.technicians = Object.keys(res.data.result).length;
            document.querySelector('.content1').style.display = "none";
            document.querySelector('.con-value1').style.display = "block";
          }
        });
        axios({
        method: 'post',
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
        },
        url: 'https://www.medicalcouriertransportation.com/rentarepair/api/users?user_role=ride_sharer&_batch=true',
        }).catch(()=>{
          console.log(res);
        }).then(res=>{
          if(res.data.success)
          {
            this.ridesharer = Object.keys(res.data.result).length;
            document.querySelector('.content2').style.display = "none";
            document.querySelector('.con-value2').style.display = "block";
          }
        });
        axios({
        method: 'post',
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
        },
        url: 'https://www.medicalcouriertransportation.com/rentarepair/api/users?user_role=delivery&_batch=true',
        }).catch(()=>{
          console.log(res);
        }).then(res=>{
          if(res.data.success)
          {
            this.delivery = Object.keys(res.data.result).length;
            document.querySelector('.content4').style.display = "none";
            document.querySelector('.con-value4').style.display = "block";
          }
        });
        axios({
        method: 'post',
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
        },
        url: 'https://www.medicalcouriertransportation.com/rentarepair/api/users?user_role=tow_truck_operator&_batch=true',
        }).catch(()=>{
          console.log(res);
        }).then(res=>{
          if(res.data.success)
          {
            this.towtruck = Object.keys(res.data.result).length;
            document.querySelector('.content3').style.display = "none";
            document.querySelector('.con-value3').style.display = "block";
          }
        });
      $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip(); 
        $('[data-toggle="tooltip1"]').tooltip(); 
        if ($('#techniciantable_wrapper').length == 1) {
          $('#techniciantable').dataTable.destroy();
          $('#techniciantable').clear();
          $('#divRequest1').empty().append('<table id="techniciantable"><thead><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></thead><tfoot><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></tfoot></table>');
        }//end of if statement
        $('#techniciantable').dataTable({
          ajax : {
            url: 'https://www.medicalcouriertransportation.com/rentarepair/api/users?user_role=technician&_batch=true',
            dataSrc: 'result'
          },
          columns : [
            { data : "user_id" },
            { data : "user_username" },
            { data : "user_firstname"},
            { data : "user_lastname"},
            { data : "user_email"},
            { data : "user_isdeactivated",
              render: function(data){
                var statusword = "";
                var statusclass = "";
                switch(data){
                  case '1':
                      statusword = 'Block';
                      statusclass = 'info';
                      break;
                  case '4':
                      statusword = 'Pending';
                      statusclass = 'warning';
                      break;
                  case '0':
                      statusword = 'Approved';
                      statusclass = 'success';
                      break;
                  case '2':
                      statusword = 'Not Verified';
                      statusclass = 'danger';
                      break;
                  case '3':
                      statusword = 'Denied';
                      statusclass = 'primary';
                      break;
                  default:
                    break;
                }
                return '<span class="p-1 mb-1 bg-'+ statusclass + '">' + statusword + '</span>'
              }
            },
            { data : "user_id",
              render: function(data, type, row, meta){
                var statusword;
                switch(row.user_isdeactivated){
                  case '1':
                      statusword = 'Block';
                      break;
                  case '4':
                      statusword = 'Pending';
                      break;
                  case '0':
                      statusword = 'Approved';
                      break;
                  case '2':
                      statusword = 'NotVerified';
                      break;
                  case '3':
                      statusword = 'Denied';
                      break;
                  default:
                    break;
                }
                if(statusword == "Denied" || statusword == "Approved")
                {
                  return '<a class="blockMetech1" data-value='+data+' data-bs-toggle="tooltip" data-bs-placement="top" title="Block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>'
                }
                else if(statusword == "Block")
                {
                  return '<a class="unblockMetech1" data-value='+data+' data-bs-toggle="tooltip1" data-bs-placement="top" title="Unblock"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"/></svg></a>'
                }
                else if( statusword == "Pending" || statusword == "NotVerified")
                {
                  return '<a class="logMetech1" data-value='+data+' data-bs-toggle="tooltip2" data-bs-placement="top" title="Approve"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/></svg></a>&nbsp&nbsp<a class="ic" data-bs-toggle="tooltip3" data-bs-placement="top" title="Block"><svg data-value='+data+' class="blockMetech" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>&nbsp&nbsp<a class="ic" data-bs-toggle="tooltip4" data-bs-placement="top" title="Deny"><svg data-value='+data+' class="denyMetech" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></a>'
                }
              }
            },
          ],
        });//end of technician datatable statement
        //Jquery Action methods for technicians
        elementLoad('.logMetech1').then(()=>{
          document.querySelectorAll('.logMetech1').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,1); //(data, role, action) 
            }
          })
        });
        elementLoad('.blockMetech1').then(()=>{
          document.querySelectorAll('.blockMetech1').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,2); //(data, role, action) 
            }
          })
        });
        elementLoad('.unblockMetech1').then(()=>{
          document.querySelectorAll('.unblockMetech1').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,4); //(data, role, action) 
            }
          })
        });
        elementLoad('.denyMetech1').then(()=>{
          document.querySelectorAll('.denyMetech1').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,3); //(data, role, action)  
            }
          })
        });//Jquery End of Action Methods for technicians
        
      if ($('#ridesharerTable_wrapper').length == 1) 
      {
        $('#ridesharerTable').dataTable.destroy();
          $('#ridesharerTable').clear();
          $('#divRequest2').empty().append('<table id="ridesharerTable"><thead><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></thead><tfoot><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></tfoot></table>');
      }
        $('#ridesharerTable').dataTable({
              ajax : {
                url: 'https://www.medicalcouriertransportation.com/rentarepair/api/users?user_role=ride_sharer&_batch=true',
                dataSrc: 'result'
              },
              columns : [
                { data : "user_id" },
                { data : "user_username" },
                { data : "user_firstname"},
                { data : "user_lastname"},
                { data : "user_email"},
                { data : "user_isdeactivated",
              render: function(data){
                var statusword = "";
                var statusclass = "";
                switch(data){
                  case '1':
                      statusword = 'Block';
                      statusclass = 'info';
                      break;
                  case '4':
                      statusword = 'Pending';
                      statusclass = 'warning';
                      break;
                  case '0':
                      statusword = 'Approved';
                      statusclass = 'success';
                      break;
                  case '2':
                      statusword = 'Not Verified';
                      statusclass = 'danger';
                      break;
                  case '3':
                      statusword = 'Denied';
                      statusclass = 'primary';
                      break;
                  default:
                    break;
                }
                return '<span class="p-1 mb-1 bg-'+ statusclass + '">' + statusword + '</span>'
              }
            },
            { data : "user_id",
              render: function(data, type, row, meta){
                var statusword;
                switch(row.user_isdeactivated){
                  case '1':
                      statusword = 'Block';
                      break;
                  case '4':
                      statusword = 'Pending';
                      break;
                  case '0':
                      statusword = 'Approved';
                      break;
                  case '2':
                      statusword = 'NotVerified';
                      break;
                  case '3':
                      statusword = 'Denied';
                      break;
                  default:
                    break;
                }
                if(statusword == "Denied" || statusword == "Approved")
                {
                  return '<a class="blockMetech1" data-value='+data+' data-bs-toggle="tooltip" data-bs-placement="top" title="Block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>'
                }
                else if(statusword == "Block")
                {
                  return '<a class="unblockMetech1" data-value='+data+' data-bs-toggle="tooltip1" data-bs-placement="top" title="Unblock"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"/></svg></a>'
                }
                else if( statusword == "Pending" || statusword == "NotVerified")
                {
                  return '<a class="logMetech1" data-value='+data+' data-bs-toggle="tooltip2" data-bs-placement="top" title="Approve"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/></svg></a>&nbsp&nbsp<a class="ic" data-bs-toggle="tooltip3" data-bs-placement="top" title="Block"><svg data-value='+data+' class="blockMetech" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>&nbsp&nbsp<a class="ic" data-bs-toggle="tooltip4" data-bs-placement="top" title="Deny"><svg data-value='+data+' class="denyMetech" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></a>'
                }
              }
            },
              ],
          });
          elementLoad('.logMetech').then(()=>{
          document.querySelectorAll('.logMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,1); //(data, role, action) 
            }
          })
        });
        elementLoad('.blockMetech').then(()=>{
          document.querySelectorAll('.blockMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,2); //(data, role, action) 
            }
          })
        });
        elementLoad('.unblockMetech').then(()=>{
          document.querySelectorAll('.unblockMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,4); //(data, role, action) 
            }
          })
        });
        elementLoad('.denyMetech').then(()=>{
          document.querySelectorAll('.denyMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,3); //(data, role, action)  
            }
          })
        });//Jquery End of Action Methods for technicians
        if ($('#TowingTable_wrapper').length == 1) {
          $('#TowingTable').dataTable.destroy();
          $('#TowingTable').clear();
        $('#divRequest3').empty().append('<table id="TowingTable"><thead><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></thead><tfoot><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></tfoot></table>');
       }
        $('#TowingTable').dataTable({
              ajax : {
                url: 'https://www.medicalcouriertransportation.com/rentarepair/api/users?user_role=tow_truck_operator&_batch=true',
                dataSrc: 'result'
              },
              columns : [
                { data : "user_id" },
                { data : "user_username" },
                { data : "user_firstname"},
                { data : "user_lastname"},
                { data : "user_email"},
                { data : "user_isdeactivated",
              render: function(data){
                var statusword = "";
                var statusclass = "";
                switch(data){
                  case '1':
                      statusword = 'Block';
                      statusclass = 'info';
                      break;
                  case '4':
                      statusword = 'Pending';
                      statusclass = 'warning';
                      break;
                  case '0':
                      statusword = 'Approved';
                      statusclass = 'success';
                      break;
                  case '2':
                      statusword = 'Not Verified';
                      statusclass = 'danger';
                      break;
                  case '3':
                      statusword = 'Denied';
                      statusclass = 'primary';
                      break;
                  default:
                    break;
                }
                return '<span class="p-1 mb-1 bg-'+statusclass+'">' + statusword + '</span>'
              }
            },
            { data : "user_id",
              render: function(data, type, row, meta){
                var statusword;
                switch(row.user_isdeactivated){
                  case '1':
                      statusword = 'Block';
                      break;
                  case '4':
                      statusword = 'Pending';
                      break;
                  case '0':
                      statusword = 'Approved';
                      break;
                  case '2':
                      statusword = 'NotVerified';
                      break;
                  case '3':
                      statusword = 'Denied';
                      break;
                  default:
                    break;
                }
                if(statusword == "Denied" || statusword == "Approved")
                {
                  return '<a class="blockMetech1" data-value='+data+' data-bs-toggle="tooltip" data-bs-placement="top" title="Block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>'
                }
                else if(statusword == "Block")
                {
                  return '<a class="unblockMetech1" data-value='+data+' data-bs-toggle="tooltip1" data-bs-placement="top" title="Unblock"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"/></svg></a>'
                }
                else if( statusword == "Pending" || statusword == "NotVerified")
                {
                  return '<a class="logMetech1" data-value='+data+' data-bs-toggle="tooltip2" data-bs-placement="top" title="Approve"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/></svg></a>&nbsp&nbsp<a class="ic" data-bs-toggle="tooltip3" data-bs-placement="top" title="Block"><svg data-value='+data+' class="blockMetech" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>&nbsp&nbsp<a class="ic" data-bs-toggle="tooltip4" data-bs-placement="top" title="Deny"><svg data-value='+data+' class="denyMetech" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></a>'
                }
              }
            },
              ],
          });
          elementLoad('.logMetech').then(()=>{
          document.querySelectorAll('.logMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,1); //(data, role, action) 
            }
          })
        });
        elementLoad('.blockMetech').then(()=>{
          document.querySelectorAll('.blockMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,2); //(data, role, action) 
            }
          })
        });
        elementLoad('.unblockMetech').then(()=>{
          document.querySelectorAll('.unblockMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,4); //(data, role, action) 
            }
          })
        });
        elementLoad('.denyMetech').then(()=>{
          document.querySelectorAll('.denyMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,3); //(data, role, action)  
            }
          })
        });//Jquery End of Action Methods for technicians

        if ($('#DeliveryTable_wrapper').length == 1) {
          $('#DeliveryTable').dataTable.destroy();
          $('#DeliveryTable').clear();
        $('#divRequest3').empty().append('<table id="DeliveryTable"><thead><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></thead><tfoot><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></tfoot></table>');
       }
        $('#DeliveryTable').dataTable({
              ajax : {
                url: 'https://www.medicalcouriertransportation.com/rentarepair/api/users?user_role=delivery&_batch=true',
                dataSrc: 'result'
              },
              columns : [
                { data : "user_id" },
                { data : "user_username" },
                { data : "user_firstname"},
                { data : "user_lastname"},
                { data : "user_email"},
                { data : "user_isdeactivated",
              render: function(data){
                var statusword = "";
                var statusclass = "";
                switch(data){
                  case '1':
                      statusword = 'Block';
                      statusclass = 'info';
                      break;
                  case '4':
                      statusword = 'Pending';
                      statusclass = 'warning';
                      break;
                  case '0':
                      statusword = 'Approved';
                      statusclass = 'success';
                      break;
                  case '2':
                      statusword = 'Not Verified';
                      statusclass = 'danger';
                      break;
                  case '3':
                      statusword = 'Denied';
                      statusclass = 'primary';
                      break;
                  default:
                    break;
                }
                return '<span class="p-1 mb-1 bg-'+ statusclass + '">' + statusword + '</span>'
              }
            },
            { data : "user_id",
              render: function(data, type, row, meta){
                var statusword;
                switch(row.user_isdeactivated){
                  case '1':
                      statusword = 'Block';
                      break;
                  case '4':
                      statusword = 'Pending';
                      break;
                  case '0':
                      statusword = 'Approved';
                      break;
                  case '2':
                      statusword = 'NotVerified';
                      break;
                  case '3':
                      statusword = 'Denied';
                      break;
                  default:
                    break;
                }
                if(statusword == "Denied" || statusword == "Approved")
                {
                  return '<a class="blockMetech1" data-value='+data+' data-bs-toggle="tooltip" data-bs-placement="top" title="Block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>'
                }
                else if(statusword == "Block")
                {
                  return '<a class="unblockMetech1" data-value='+data+' data-bs-toggle="tooltip1" data-bs-placement="top" title="Unblock"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"/></svg></a>'
                }
                else if( statusword == "Pending" || statusword == "NotVerified")
                {
                  return '<a class="logMetech1" data-value='+data+' data-bs-toggle="tooltip2" data-bs-placement="top" title="Approve"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/></svg></a>&nbsp&nbsp<a class="ic" data-bs-toggle="tooltip3" data-bs-placement="top" title="Block"><svg data-value='+data+' class="blockMetech" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>&nbsp&nbsp<a class="ic" data-bs-toggle="tooltip4" data-bs-placement="top" title="Deny"><svg data-value='+data+' class="denyMetech" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></a>'
                }
              }
            },
              ],
          });
          elementLoad('.logMetech').then(()=>{
          document.querySelectorAll('.logMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,1); //(data, role, action) 
            }
          })
        });
        elementLoad('.blockMetech').then(()=>{
          document.querySelectorAll('.blockMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,2); //(data, role, action) 
            }
          })
        });
        elementLoad('.unblockMetech').then(()=>{
          document.querySelectorAll('.unblockMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,4); //(data, role, action) 
            }
          })
        });
        elementLoad('.denyMetech').then(()=>{
          document.querySelectorAll('.denyMetech').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              value.methods.approveEmp(dataelem.dataset.value,3); //(data, role, action)  
            }
          })
        });//Jquery End of Action Methods for technicians

      });//end of document ready function

    },//end of mounted
    methods : {
      approveEmp(empID, action){
        document.querySelector(".loadsec").style.display = "flex";
        document.querySelector(".loadsec").style.justifyConent = "center";
        let value = 0;
        if(action == 1) // approve
        {
          value = 0;
          console.log(value);
        }
        else if(action == 2) // block
        {
          value = 1;
          console.log(value);
        }
        else if(action == 3) // decline
        {
          value = 3
          console.log(value);
        }
        else if(action == 4) // unblock
        {
          value = 4;
          console.log(value);
        }
        let val = new FormData();
        val.append('isdeactivated',value);
        console.log(value);
        axios({
        method: 'post',
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
        },
        url: 'https://www.medicalcouriertransportation.com/rentarepair/api/users/update?user_id='+empID,
        data: val
        }).catch(()=>{
          console.log(res);
        }).then(res=>{
          console.log(res.data);
          document.querySelector(".loadsec").style.display = "none !important";
          router.go(0);
        });

      },//End of Function approveEmp
      onCancel() {
              console.log('User cancelled the loader.')
            } 
    },//End of Methods


  });//end of value export
  export default value;

</script>
<style scoped>
@import '../../src/assets/style.css';
@import '../../src/assets/bootstrap-icons/bootstrap-icons.css';

.content1{
  height: 130px;
}
.con-value1{
  display: none;
}
.content2{
  height: 130px;
}
.con-value2{
  display: none;
}
.content3{
  height: 130px;
}
.con-value3{
  display: none;
}
.content4{
  height: 130px;
}
.con-value4{
  display: none;
}
.content5{
  height: 130px;
}
.con-value5{
  display: none;
}
.content6{
  height: 130px;
}
.con-value6{
  display: none;
}


</style>