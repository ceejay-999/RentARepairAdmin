<template>
    <SharedLayout>
    <div class="pagetitle">
      <h1>Services</h1>
      <nav>
        <ol class="breadcrumb">
          <RouterLink class="breadcrumb-item" to="/dashboard">Home</RouterLink>
          <li class="breadcrumb-item active">Service</li>

        </ol>
      </nav>
    </div><!-- End Page Title -->
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">RideSharer</h5>
          <div id="divRequest5">
            <table id="servicestable1" class="table tableborderless datatable" width="100%">
              <thead>
                    <tr>
                        <th scope="col">Services</th>
                        <th scope="col">Action</th>
                    </tr>
              </thead>
                <tfoot>
                    <tr>
                        <th scope="col">Services</th>
                        <th scope="col">Action</th>
                    </tr>
                </tfoot>
            </table>
          </div>
        </div>
    </div>
   </SharedLayout>
</template>
<script>
  import { local } from '../functions.js';
   import { axiosReq,removeFix } from '@/functions';
   import { ciapi } from '@/globals';
   import { ContentLoader } from 'vue-content-loader'

   export default{
    name: "App",
    components: {
      ContentLoader,
    },
    data() {
         return{
           objects: [{
              Id: 0,
              username: "",
              firstname: "",
              lastname: "",
              email: "",
              status: "",
           }],
           technicians: 0,
           isLoading: false,
        fullPage: true
         }
       },
       created()
       {
        axiosReq({
          method: 'post',
          url: ciapi +'admin/config?config_field=task__problem__types',
          headers:{
              PWAuth: local.get('user_token'),
              PWAuthUser: local.get('user_id')
        }
          }).catch(err=>{
          console.log(err.response)})
          .then(res=>{
              if(res.data.success)
              {
                
                for(let data in res.data.result)
                {
                  
                  this.objects.push(removeFix(res.data.result[data]));
                }
              }
              else
              {
                console.log("something went wrong");
              }
          })
        // $(document).ready(function () {
        // if ($('#towingtable1_wrapper').length == 1) {
        //     $('#divRequest6').empty().append('<table id="towingtable1"><thead><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></thead><tfoot><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></tfoot></table>');
        // }
        //     $('#towingtable1').DataTable({
        //     ajax : {
        //       url : 'https://www.medicalcouriertransportation.com/rentarepair/api/admin/config?config_field=task__problem__types',
        //       dataSrc : "result",
        //     },
        //     columns : [
        //       { data : "task__problem__types" },
        //       { data : null, className: "center d-flex flex-nowrap", defaultContent: '<a class="btn btn-primary btn-sm" href="javascript:;">Approve</a><a class="btn btn-danger btn-sm me-1 ms-1" href="javascript:;">Block</a><a class="btn btn-warning btn-sm" href="javascript:;">Edit</a>'},
        //     ]
        //     });
        //     console.log(data);
        //   });
       }
  }
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
</style>