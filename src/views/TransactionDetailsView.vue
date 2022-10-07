<template>
    <SharedLayout>
    <div class="pagetitle">
      <h1>Transactions</h1>
      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">Invoice</h5>
              <button type="button" class="btn-close" @click="CloseModal" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Printinvoices :print-id="dataid"></Printinvoices>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ol class="breadcrumb">
          <RouterLink class="breadcrumb-item" to="/dashboard">Home</RouterLink>
          <li class="breadcrumb-item active">Transaction Details</li>

        </ol>
      </nav>
    </div><!-- End Page Title -->
    <div class="card">
      <button class="btn btn-primary" @click="exportTowExcel">Download Excel File</button>
    </div>
    <div class="card recent-sales overflow-auto">
      <loading class="loadsec" v-model:active="isLoading"
                 :is-full-page="fullPage"/>
        <div class="card-body">
          <h5 class="card-title">Transactions</h5>
          <div id="divRequest3">
            <table id="TransTable" class="display" width="100%">
                <thead>
                    <tr>
                        <th scope="col">Transaction #</th>
                        <th scope="col">Base Fee</th>
                        <th scope="col">Application Charge</th>
                        <th scope="col">Distance Charge</th>
                        <th scope="col">Distance km/m</th>
                        <th scope="col">Vat Charge</th>
                        <th scope="col">Total Fee</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th scope="col">Transaction #</th>
                        <th scope="col">Base Fee</th>
                        <th scope="col">Application Charge</th>
                        <th scope="col">Distance Charge</th>
                        <th scope="col">Distance km/m</th>
                        <th scope="col">Vat Charge</th>
                        <th scope="col">Total Fee</th>
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
  import Printinvoices from '../views/PrintInvoice.vue';
   import { ContentLoader } from 'vue-content-loader';
   import { elementLoad } from '@/functions';
   import Loading from 'vue-loading-overlay';
   import 'vue-loading-overlay/dist/vue-loading.css';
   import axios from 'axios';
   import { local } from '../functions.js';
   import router from '../router';
   import { read, utils, writeFile, writeFileXLSX } from 'xlsx';

   const value = ({
    name: "App",
    components: {
      ContentLoader,
      Loading,
      Printinvoices
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
           dataid: "",
           isLoading: false,
        fullPage: true,
         }
       },
       created()
       {
        console.log(this);
        $(document).ready(function () {
        if ($('#TransTable_wrapper').length == 1) {
          $('#TransTable').dataTable.destroy();
          $('#TransTable').clear();
        $('#divRequest3').empty().append('<table id="TransTable"><thead><tr><th scope="col">Transaction #</th><th scope="col">Base Fee</th><th scope="col">Application Charge</th><th scope="col">Distance Charge</th><th scope="col">Distance km/m</th><th scope="col">Vat Charge</th><th scope="col">Total Fee</th><th scope="col">Action</th></tr></thead><tfoot><tr><th scope="col">Transaction #</th><th scope="col">Base Fee</th><th scope="col">Application Charge</th><th scope="col">Distance Charge</th><th scope="col">Distance km/m</th><th scope="col">Vat Charge</th><th scope="col">Total Fee</th><th scope="col">Action</th></tr></tfoot></table>');
       }
        $('#TransTable').dataTable({
              ajax : {
                url: 'https://www.medicalcouriertransportation.com/rentarepair/api/transactions?_orderby=trans__created__at_DESC&_batch=true',
                dataSrc: 'result',
                headers: {
                    PWAuth: local.get('user_token'),
                    PWAuthUser: local.get('user_id')
                }
              },
              columns : [
                { data : "trans_id"},
                { data : "trans_basefee"},
                { data : "trans_appcharge"},
                { data : "trans_distcharge"},
                { data : "trans_distkm"},
                { data : "trans_vat"},
                { data : "trans_total"},
                { data : "trans_id",
                    render: function(data, type, row, meta){
                        return '<a class="PrintInvoice btn btn-outline-primary" type="button" data-value='+data+' data-bs-toggle="tooltip2" data-bs-placement="top" title="Print Invoice">Print</a>'
                    }
                },
              ],
          });
        });
        elementLoad('.PrintInvoice').then(()=>{
          document.querySelectorAll('.PrintInvoice').forEach(el=>{
            el.onclick = e=>{
              const dataelem = e.target.closest("[data-value]")
              this.printinvoice(dataelem.dataset.value);
            }
          })
        });
       },
       methods : {
        CloseModal(){
          document.querySelector(".modal").style.display = "none";
        },
        printinvoice(data){
          this.dataid = data;
          console.log(this);
          document.querySelector(".modal").style.display = "contents";
        },
        exportTowExcel(){
          const table = document.getElementById("TransTable");
        const wb = utils.table_to_book(table);
        writeFileXLSX(wb,"TransactionTable.xlsx");
      },
       }
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