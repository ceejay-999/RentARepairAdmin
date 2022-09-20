<template>
    <SharedLayout>
    <div class="pagetitle">
      <h1>Delivery</h1>
      <nav>
        <ol class="breadcrumb">
          <RouterLink class="breadcrumb-item" to="/dashboard">Home</RouterLink>
          <li class="breadcrumb-item">Employee</li>
          <li class="breadcrumb-item active">Delivery</li>

        </ol>
      </nav>
    </div><!-- End Page Title -->
    <div class="card recent-sales overflow-auto">
      <loading class="loadsec" v-model:active="isLoading"
                 :is-full-page="fullPage"/>
        <div class="card-body">
          <h5 class="card-title">Towing Members</h5> 
          <div id="divRequest3">
            <table id="TowingTable" class="display" width="100%">
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
   </SharedLayout>
</template>

<script>
   import { ContentLoader } from 'vue-content-loader';
   import { elementLoad } from '@/functions';
   import Loading from 'vue-loading-overlay';
   import 'vue-loading-overlay/dist/vue-loading.css';
   import axios from 'axios';
   import { local } from '../functions.js';
   import router from '../router';

   const value = ({
    name: "App",
    components: {
      ContentLoader,
      Loading
    },
    data() {
         return{
           objectt: [{
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
       {$(document).ready(function () {
        if ($('#TowingTable_wrapper').length == 1) {
          $('#TowingTable').dataTable.destroy();
          $('#TowingTable').clear();
        $('#divRequest3').empty().append('<table id="TowingTable"><thead><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></thead><tfoot><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Firstname</th><th scope="col">Lastname</th><th scope="col">Email</th><th scope="col">Action</th></tr></tfoot></table>');
       }
        $('#TowingTable').dataTable({
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
                  return '<a data-value='+data+' class="blockMetech"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>'
                }
                else if(statusword == "Block")
                {
                  return '<a data-value='+data+' class="unblockMetech"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"/></svg></a>'
                }
                else if( statusword == "Pending" || statusword == "NotVerified")
                {
                  return '<a data-value='+data+' class="logMetech"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/></svg></a>&nbsp&nbsp<a class="ic"><svg data-value='+data+' class="blockMetech" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>&nbsp&nbsp<a class="ic"><svg data-value='+data+' class="denyMetech" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></a>'
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
          });
       },
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
          value = 3;
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
  });

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
</style>