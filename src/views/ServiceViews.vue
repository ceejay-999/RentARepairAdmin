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
  
  <div class="row">
    <div class="col-xl-8 col-md-12">
        <div class="card">
          <div class="card-body conl">
            <h5 class="card-title">Announcements</h5>
            <ContentLoader  class="con-loader1"
              width="900"
              height="126"
              primaryColor="#f3f3f3"
              secondaryColor="#cccccc">
              <rect x="0" y="20" rx="" ry="" width="445" height="25" />
              <rect x="0" y="50" rx="" ry="" width="445" height="25" />
              <rect x="0" y="80" rx="" ry="" width="445" height="25" />
            </ContentLoader>
            <div class="announce">
              <div class="card" v-for="t in announcements" v-bind:key="t.ann_id">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="t.ann_imgsrc" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{t.ann_description}}</h5>
                    <p class="card-text">{{t.ann_description}}</p>
                    <p class="card-text"><small class="text-muted">{{t.ann_created_at}}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
      </div>
    </div>
    <loading class="loadsec" v-model:active="isLoading"
                 :is-full-page="fullPage"/>
    <div class="col-xl-4 col-md-12">
      <div class="card">
        <div class="card-body conl">
          <div class="card-title">
            Technician Service Types  
          </div>
          <ContentLoader  class="con-loader"
            width="900"
            height="126"
            primaryColor="#f3f3f3"
            secondaryColor="#cccccc">
            <rect x="0" y="20" rx="" ry="" width="445" height="25" />
            <rect x="0" y="50" rx="" ry="" width="445" height="25" />
            <rect x="0" y="80" rx="" ry="" width="445" height="25" />
          </ContentLoader>
          <ul class="list-group list-group-flush techtypes">
            <li class="list-group-item" v-for="t in task_types" :key="t">{{t}}
              <span class="closeBtn" @click="deleteService(t)"></span>
            </li>
          </ul>
          <div class="row g-3 addservice">
            <div class="col-auto">
              <input type="text" class="form-control" v-model="addingService" id="AddService" placeholder="Add Services">
            </div>
            <div class="col-auto">
              <button @click="addService" class="btn btn-primary mb-3">Add</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="card-title">
            Booking Fee 
          </div> 
          <div class="row g-3">
            <div class="col-auto g-3">
              <label>Application Charge</label>
            </div>
            <div class="col-auto">
              <label class="result1">{{appcharge}}%</label>
              <input type="number" class="form-control booking1" placeholder="Input Application Charge" v-model="appcharge" >
            </div>
            <div class="col-auto g-3">
              <label>Base Charge</label>
            </div>
            <div class="col-auto">
              <label class="result2">{{basecharege}}%</label>
              <input type="number" class="form-control booking2" placeholder="Input Base Charge" v-model="basecharege" >
            </div>
            <div class="col-auto g-3">
              <label>Distance Charge</label>
            </div>
            <div class="col-auto">
              <label class="result3">{{distcharge}}%</label>
              <input type="number" class="form-control booking3" placeholder="Input Distance Charge" v-model="distcharge" >
            </div>
            <div class="col-auto g-3">
              <label>Vat Charge</label>
            </div>
            <div class="col-auto">
              <label class="result4">{{vatcharge}}%</label>
              <input type="number" class="form-control booking4" placeholder="Input Vat Charge" v-model="vatcharge" >
            </div>
            <button type="submit" class="btn btn-primary mb-3 sub" @click="editbookfee">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
 </SharedLayout>
</template>
<script>
import { local } from '../functions.js';
 import { axiosReq, removeFix } from '@/functions';
 import { ciapi } from '@/globals';
 import { ContentLoader } from 'vue-content-loader'
 import Loading from 'vue-loading-overlay';
import router from '../router';

 export default{
  name: "App",
  components: {
    ContentLoader,
    Loading
  },
  data() {
       return{
         task_types:[],
         announcements: [{
          title: "",
          description: "",
          imgsrc: "",
          actionurl: "",
          created:"",
         }],
         addingService: "",
         appconfield: "",
         baseconfield: "",
         distcharge: "",
         vatcharge: "",
         appcharge: "",
         basecharege: "",
         distcharge: "",
         vatcharge: "",
       }
     },
  mounted()
  { 
      axiosReq({
        method: 'post',
        url: ciapi +'admin/config?config_field=task__problems__&_batch=true&_like=true',
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
          }
      }).then(res=>{
        document.querySelector('.con-loader').style.display = "none"
        document.querySelector('.addservice').style.display = "flex";
        for(let r in res.data.result) 
        {this.task_types.push(res.data.result[r].config_value)}
        
      }),
      axiosReq({
        method: 'post',
        url: ciapi +'admin/announcements?_batch=true',
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
          }
      }).then(res=>{
        this.announcements = res.data.result;
        document.querySelector('.con-loader1').style.display = "none"
        document.querySelector('.announce').style.display = "unset"
      }),
      axiosReq({
        method: 'post',
        url: ciapi +'admin/config?config_field=fee&_like=true&_batch=true',
        headers:{
          PWAuth: local.get('user_token'),
          PWAuthUser: local.get('user_id')
        }
      }).then(res=>{
        res.data.result.forEach(el=>{
          if(el.config_field == "fee_app_charge")
          {
            this.appcharge = el.config_value;
          }
          if(el.config_field == "fee_base_charge")
          {
            this.basecharege = el.config_value;
          }
          if(el.config_field == "fee_distance_charge")
          {
            this.distcharge = el.config_value;
          }
          if(el.config_field == "fee_vat_charge")
          {
            this.vatcharge = el.config_value;
          }
        })
        console.log(res.data);

      })
  },
  methods: {
    deleteService(name){
      document.querySelector(".loadsec").style.display = "flex";
      document.querySelector(".loadsec").style.justifyConent = "center";
      name = name.replaceAll('_','%underscore%');
      name = name.replaceAll(' ','_');
      name = name.replaceAll('%underscore%','_');
      axiosReq({
        method: 'post', 
        url: ciapi +'/admin/config/delete?config_value='+name,
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
          },
      }).then(res=>{
        document.querySelector(".loadsec").style.display = "none !important";
        this.task_types.splice(this.task_types.indexOf(name),1);
        router.go(0);
        
      })
    },
    addService(){
      document.querySelector(".loadsec").style.display = "flex";
        document.querySelector(".loadsec").style.justifyConent = "center";
      const taskprob = this.task_types.length;

      if(this.task_types.includes(this.addingService)){
        alert("Service was already Exist!");
        document.querySelector(".loadsec").style.display = "none !important";
        router.go(0);
        return;
      }
      
      axiosReq({
            method: 'post',
            url: ciapi +'/admin/config/create',
            headers:{
                PWAuth: local.get('user_token'),
                PWAuthUser: local.get('user_id')
              },
            data:{field: 'task_problems_'+taskprob,
                  value: this.addingService
            }
          }).then(res=>{
            console.log(res.data);
            document.querySelector(".loadsec").style.display = "none !important";
            router.go(0);
            
          })
        
    },
    editbookfee(){
      if(document.querySelector('.sub').textContent == "Edit")
      {
        document.querySelector('.booking1').style.display = "block";
        document.querySelector('.booking2').style.display = "block";
        document.querySelector('.booking3').style.display = "block";
        document.querySelector('.booking4').style.display = "block";
        document.querySelector('.result1').style.display = "none";
        document.querySelector('.result2').style.display = "none";
        document.querySelector('.result3').style.display = "none";
        document.querySelector('.result4').style.display = "none";
        document.querySelector('.sub').textContent = "Update";
      }
      else
      {
        axiosReq({
          method: 'post',
          url: 'https://medicalcouriertransportation.com/rentarepair/api/admin/config/updatebatch',
          headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
          },
          data:{
            fee__app__charge:this.appcharge,
                fee__base__charge:this.basecharege,
                fee__distance__charge:this.distcharge,
                fee__vat__charge:this.vatcharge
          }
        }).then(res=>{
          document.querySelector('.booking1').style.display = "none";
          document.querySelector('.booking2').style.display = "none";
          document.querySelector('.booking3').style.display = "none";
          document.querySelector('.booking4').style.display = "none";
          document.querySelector('.result1').style.display = "block";
          document.querySelector('.result2').style.display = "block";
          document.querySelector('.result3').style.display = "block";
          document.querySelector('.result4').style.display = "block";
          document.querySelector('.sub').textContent = "Edit";
          console.log(res.data.result);
        });
      }
    }
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

.closeBtn::before,.closeBtn::after{
  position: absolute;
content: "";
width: 20px;
height: 3px;
background: #c00;
}
.closeBtn::before{
transform: rotate(45deg);
}
.closeBtn::after{
transform: rotate(-45deg);
}

.techtypes li{
position: relative;
}

.techtypes li span{
right: 20px;
position: absolute;
top: 50%;
transform: translateY(-50%);
}
.addservice{
display: none;
}
.announce{
display: none;
}
.conl{
  overflow: hidden !important;
}
.booking1{
  display:none;
}
.booking2{
  display:none;
}
.booking3{
  display:none;
}
.booking4{
  display:none;
}
.row .g-3{
  display: block;
}
.closeBtn{
  cursor: pointer;
}
</style>