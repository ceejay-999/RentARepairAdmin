<template>
  <SharedLayout>
    <div class="modal modal2 modal-xl" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Photo</h5>
            <button type="button" @click="CloseModal()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="container">
            <Filemanager
              @chosen-file-link = "photoChosen">
            </Filemanager>
          </div>
        </div>
      </div>
    </div>
  <div class="pagetitle">
    <h1>Services</h1>
    <nav>
      <ol class="breadcrumb">
        <RouterLink class="breadcrumb-item" to="/dashboard">Home</RouterLink>
        <li class="breadcrumb-item active">Service</li>

      </ol>
    </nav>
  </div><!-- End Page Title -->
  <div class="modal modal1" tabindex="-1">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit Announcement</h5>
        <button type="button" @click="CloseModal()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <button type="button" @click="photoChoose" class="btn btn-outline-secondary">Choose Photo</button>
        <img :src="imgLink1" />
        <label>Title</label>
        <input type="text" class="form-control" v-model="AnnTitleEdit" id="AddService" placeholder="Title">
        <label>Description</label>
        <textarea class="form-control" v-model="AnnDescEdit" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" @click="CloseModal()" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" @click="SaveEdit()" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
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
                    <h5 class="card-title">{{t.ann_title}}</h5>
                    <p class="card-text">{{t.ann_description}}</p>
                    <p class="card-text"><small class="text-muted">{{t.ann_created_at}}</small></p>
                    <button @click="AnnounceEdit(t)" class="btn btn-warning">Edit</button>
                    <button @click="AnnounceDelete(t)" class="btn btn-primary">Delete</button>
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
            Add Announcements  
          </div>
          <div class="row g-3 addservice">
            <button type="button" @click="photoChoose" class="btn btn-outline-secondary">Choose Photo</button>
            <img :src="imgLink" />
              <input type="text" class="form-control" v-model="AnnTitle" id="AddService" placeholder="Title">
              <textarea class="form-control" v-model="AnnDesc" id="exampleFormControlTextarea1" rows="3"></textarea>
              <button @click="notifannounce(6)" class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
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
              <span class="closeBtn" @click="promptExample3(t)"></span>
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
            Booking Fee Technician 
          </div> 
          <div class="row g-3">
            <div class="col-auto g-3">
              <label>Application Charge</label>
            </div>
            <div class="col-auto">
              <label class="techresult1">{{techappcharge}}%</label>
              <input type="number" class="form-control techbooking1" placeholder="Input Application Charge" v-model="techappcharge" >
            </div>
            <div class="col-auto g-3">
              <label>Base Charge</label>
            </div>
            <div class="col-auto">
              <label class="techresult2">{{techbasecharege}}%</label>
              <input type="number" class="form-control techbooking2" placeholder="Input Base Charge" v-model="techbasecharege" >
            </div>
            <div class="col-auto g-3">
              <label>Distance Charge</label>
            </div>
            <div class="col-auto">
              <label class="techresult3">{{techdistcharge}}%</label>
              <input type="number" class="form-control techbooking3" placeholder="Input Distance Charge" v-model="techdistcharge" >
            </div>
            <div class="col-auto g-3">
              <label>Vat Charge</label>
            </div>
            <div class="col-auto">
              <label class="techresult4">{{vatcharge}}%</label>
              <input type="number" class="form-control techbooking4" placeholder="Input Vat Charge" v-model="vatcharge" >
            </div>
            <button type="submit" class="btn btn-primary mb-3 tsub" @click="editbookfeetech">Edit</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="card-title">
            Booking Fee Ride Sharer 
          </div> 
          <div class="row g-3">
            <div class="col-auto g-3">
              <label>Application Charge</label>
            </div>
            <div class="col-auto">
              <label class="rideresult1">{{rideappcharge}}%</label>
              <input type="number" class="form-control ridebooking1" placeholder="Input Application Charge" v-model="rideappcharge" >
            </div>
            <div class="col-auto g-3">
              <label>Base Charge</label>
            </div>
            <div class="col-auto">
              <label class="rideresult2">{{ridebasecharege}}%</label>
              <input type="number" class="form-control ridebooking2" placeholder="Input Base Charge" v-model="ridebasecharege" >
            </div>
            <div class="col-auto g-3">
              <label>Distance Charge</label>
            </div>
            <div class="col-auto">
              <label class="rideresult3">{{ridedistcharge}}%</label>
              <input type="number" class="form-control ridebooking3" placeholder="Input Distance Charge" v-model="ridedistcharge" >
            </div>
            <div class="col-auto g-3">
              <label>Vat Charge</label>
            </div>
            <div class="col-auto">
              <label class="rideresult4">{{vatcharge}}%</label>
              <input type="number" class="form-control ridebooking4" placeholder="Input Vat Charge" v-model="vatcharge" >
            </div>
            <button type="submit" class="btn btn-primary mb-3 rsub" @click="editbookfeeride">Edit</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="card-title">
            Booking Fee Towing 
          </div> 
          <div class="row g-3">
            <div class="col-auto g-3">
              <label>Application Charge</label>
            </div>
            <div class="col-auto">
              <label class="towresult1">{{towappcharge}}%</label>
              <input type="number" class="form-control towbooking1" placeholder="Input Application Charge" v-model="towappcharge" >
            </div>
            <div class="col-auto g-3">
              <label>Base Charge</label>
            </div>
            <div class="col-auto">
              <label class="towresult2">{{towbasecharege}}%</label>
              <input type="number" class="form-control towbooking2" placeholder="Input Base Charge" v-model="towbasecharege" >
            </div>
            <div class="col-auto g-3">
              <label>Distance Charge</label>
            </div>
            <div class="col-auto">
              <label class="towresult3">{{towdistcharge}}%</label>
              <input type="number" class="form-control towbooking3" placeholder="Input Distance Charge" v-model="towdistcharge" >
            </div>
            <div class="col-auto g-3">
              <label>Vat Charge</label>
            </div>
            <div class="col-auto">
              <label class="towresult4">{{vatcharge}}%</label>
              <input type="number" class="form-control towbooking4" placeholder="Input Vat Charge" v-model="vatcharge" >
            </div>
            <button type="submit" class="btn btn-primary mb-3 twsub" @click="editbookfeetow">Edit</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="card-title">
            Booking Fee Delivery 
          </div> 
          <div class="row g-3">
            <div class="col-auto g-3">
              <label>Application Charge</label>
            </div>
            <div class="col-auto">
              <label class="delresult1">{{deliveryappcharge}}%</label>
              <input type="number" class="form-control delbooking1" placeholder="Input Application Charge" v-model="deliveryappcharge" >
            </div>
            <div class="col-auto g-3">
              <label>Base Charge</label>
            </div>
            <div class="col-auto">
              <label class="delresult2">{{deliverybasecharege}}%</label>
              <input type="number" class="form-control delbooking2" placeholder="Input Base Charge" v-model="deliverybasecharege" >
            </div>
            <div class="col-auto g-3">
              <label>Distance Charge</label>
            </div>
            <div class="col-auto">
              <label class="delresult3">{{deliverydistcharge}}%</label>
              <input type="number" class="form-control delbooking3" placeholder="Input Distance Charge" v-model="deliverydistcharge" >
            </div>
            <div class="col-auto g-3">
              <label>Vat Charge</label>
            </div>
            <div class="col-auto">
              <label class="delresult4">{{vatcharge}}%</label>
              <input type="number" class="form-control delbooking4" placeholder="Input Vat Charge" v-model="vatcharge" >
            </div>
            <button type="submit" class="btn btn-primary mb-3 dsub" @click="editbookfeedelivery">Edit</button>
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
import Filemanager from './FileManager.vue';

 export default{
  name: "App",
  components: {
    ContentLoader,
    Loading,
    Filemanager,
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
         vatcharge: "",
         techappcharge: "",
         techbasecharege: "",
         techdistcharge: "",
         rideappcharge: "",
         ridebasecharege: "",
         ridedistcharge: "",
         towvatcharge: "",
         towappcharge: "",
         towbasecharege: "",
         towdistcharge: "",
         deliveryappcharge: "",
         deliverybasecharege: "",
         deliverydistcharge: "",
         AnnTitle: "",
         AnnDesc: "",
         previewImage: null,
         AnnTitleEdit: "",
         AnnDescEdit: "",
         AnnIDEdit: "",
         imgLink:"",
         imgLink1:""
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
        console.log(res.data);
        res.data.result.forEach(el=>{
          if(el.config_field == "fee_technician_app_charge")
          {
            this.techappcharge = el.config_value;
          }
          if(el.config_field == "fee_technician_base_charge")
          {
            this.techbasecharege = el.config_value;
          }
          if(el.config_field == "fee_technician_distance_charge")
          {
            this.techdistcharge = el.config_value;
          }
          if(el.config_field == "fee_vat_charge")
          {
            this.vatcharge = el.config_value;
          }
          if(el.config_field == "fee_ridesharer_app_charge")
          {
            this.rideappcharge = el.config_value;
          }
          if(el.config_field == "fee_ridesharer_base_charge")
          {
            this.ridebasecharege = el.config_value;
          }
          if(el.config_field == "fee_ridesharer_dist_charge")
          {
            this.ridedistcharge = el.config_value;
          }
          if(el.config_field == "fee_towing_app_charge")
          {
            this.towappcharge = el.config_value;
          }
          if(el.config_field == "fee_towing_base_charge")
          {
            this.towbasecharege = el.config_value;
          }
          if(el.config_field == "fee_towing_dist_charge")
          {
            this.towdistcharge = el.config_value;
          }
          if(el.config_field == "fee_delivery_app_charge")
          {
            this.deliveryappcharge = el.config_value;
          }
          if(el.config_field == "fee_delivery_base_charge")
          {
            this.deliverybasecharege = el.config_value;
          }
          if(el.config_field == "fee_delivery_dist_charge")
          {
            this.deliverydistcharge = el.config_value;
          }
        })
        console.log(res.data);

      })
  },
  methods: {
    photoChoose(){
      document.querySelector(".modal2").style.display = "block";
    },
    photoChosen(res){
      document.querySelector(".modal2").style.display = "none";
      if(document.querySelector(".modal1").style.display == "block")
      {
        this.imgLink1 = res;
      }
      else
      {
        this.imgLink = res;
      }

    },
    SaveEdit(){
      document.querySelector(".loadsec").style.display = "flex";
      document.querySelector(".loadsec").style.justifyConent = "center";
      if(this.imgLink1.length == 0)
      {
        console.log(this.imgLink1);
        this.imgLink1 = "https://medicalcouriertransportation.com/rentarepair/uploads/default.jpg";
        console.log(this.imgLink1);
      }
      console.log(this.imgLink1);

      axiosReq({
        method: 'post', 
        url: ciapi +'/admin/announcements/update?ann_id=' + this.AnnIDEdit,
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
          },
        data: {
          title: this.AnnTitleEdit,
          description: this.AnnDescEdit,
          imgsrc: this.imgLink1
        }
      }).then(res=>{
        document.querySelector(".loadsec").style.display = "none !important";
        router.go(0);
        
      })
    },
    CloseModal(){
      document.querySelector(".modal1").style.display = "none";
      document.querySelector(".modal2").style.display = "none";
      this.AnnDescEdit = "";
      this.AnnTitleEdit = "";
    },
    AnnounceEdit(data){
      document.querySelector(".modal1").style.display = "block";
      this.AnnDescEdit = data.ann_description;
      this.AnnTitleEdit = data.ann_title;
      this.AnnIDEdit = data.ann_id;
    },
    AnnounceDelete(data){
      console.log(data);
      if(confirm("Do you really want to delete?")){
        document.querySelector(".loadsec").style.display = "flex";
            document.querySelector(".loadsec").style.justifyConent = "center";
            axiosReq({
              method: 'post', 
              url: ciapi +'/admin/announcements/delete?ann_id=' + data.ann_id,
              headers:{
                  PWAuth: local.get('user_token'),
                  PWAuthUser: local.get('user_id')
                },
    
            }).then(res=>{
              document.querySelector(".loadsec").style.display = "none !important";
              console.log(res.data);
              router.go(0);
              
            })
      }
    },
    notifannounce(action){
      if(action == 1)
      {
        axiosReq({
            method: 'post',
            url: ciapi +'/admin/announcements/create',
            headers:{
                PWAuth: local.get('user_token'),
                PWAuthUser: local.get('user_id')
              },
            data:{title: "New Car Service Added to Rent A Repair",
                  description: "The "+ this.addingService + " was added to the car service. You can now have this service to your car.",
                  imgsrc: this.imgLink
            }
          }).then(res=>{
            console.log(res.data);
            document.querySelector(".loadsec").style.display = "none !important";
            router.go(0);
            
          })
      }
      else if(action == 2){
        axiosReq({
            method: 'post',
            url: ciapi +'/admin/announcements/create',
            headers:{
                PWAuth: local.get('user_token'),
                PWAuthUser: local.get('user_id')
              },
            data:{title: "Updated new Booking Fee for Technician",
                  description: "The new Booking fee for techinician is Application Charge = "+this.techappcharge+" Base Charge = "+this.techbasecharege+" Distance Charge = "+this.techdistcharge+" Vat charge = "+this.vatcharge
            }
          }).then(res=>{
            console.log(res.data);
            document.querySelector(".loadsec").style.display = "none !important";
            // router.go(0);
            
          })
      }
      else if(action == 3)
      {
        axiosReq({
            method: 'post',
            url: ciapi +'/admin/announcements/create',
            headers:{
                PWAuth: local.get('user_token'),
                PWAuthUser: local.get('user_id')
              },
            data:{title: "Updated new Booking Fee for Ride Sharer",
                  description: "The new Booking fee for Ride Sharer is Application Charge = "+this.rideappcharge+" Base Charge = "+this.ridebasecharege+" Distance Charge = "+this.ridedistcharge+" Vat charge = "+this.vatcharge
            }
          }).then(res=>{
            console.log(res.data);
            document.querySelector(".loadsec").style.display = "none !important";
            // router.go(0);
            
          })
      }
      else if(action == 4)
      {
        axiosReq({
            method: 'post',
            url: ciapi +'/admin/announcements/create',
            headers:{
                PWAuth: local.get('user_token'),
                PWAuthUser: local.get('user_id')
              },
            data:{title: "Updated new Booking Fee for Towing",
                  description: "The new Booking fee for Towing is Application Charge = "+this.towappcharge+" Base Charge = "+this.towbasecharege+" Distance Charge = "+this.towdistcharge+" Vat charge = "+this.vatcharge
            }
          }).then(res=>{
            console.log(res.data);
            document.querySelector(".loadsec").style.display = "none !important";
            // router.go(0);
            
          })
      }
      else if(action == 5)
      {
        axiosReq({
            method: 'post',
            url: ciapi +'/admin/announcements/create',
            headers:{
                PWAuth: local.get('user_token'),
                PWAuthUser: local.get('user_id')
              },
            data:{title: "Updated new Booking Fee for Delivery",
                  description: "The new Booking fee for Delivery is Application Charge = "+this.deliveryappcharge+" Base Charge = "+this.deliverybasecharege+" Distance Charge = "+this.deliverydistcharge+" Vat charge = "+this.vatcharge
            }
          }).then(res=>{
            console.log(res.data);
            document.querySelector(".loadsec").style.display = "none !important";
            // router.go(0);
            
          })
      }
      else
      {
        if(this.imgLink.length == 0)
        {
           this.imgLink = "https://medicalcouriertransportation.com/rentarepair/uploads/default.jpg";
        }
        console.log('img: '+this.imgLink.length);

        document.querySelector(".loadsec").style.display = "flex";
            document.querySelector(".loadsec").style.justifyConent = "center";
        axiosReq({
            method: 'post',
            url: ciapi +'/admin/announcements/create',
            headers:{
                PWAuth: local.get('user_token'),
                PWAuthUser: local.get('user_id')
              },
            data:{title: this.AnnTitle,
                  description: this.AnnDesc,
                  imgsrc: this.imgLink,
            }
          }).then(res=>{
            console.log(res.data);
            router.go(0);
            
          })
      }
    },
    promptExample3(name) {
      if(confirm("Do you really want to delete?")){
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
      }
    },
    addService(){
      document.querySelector(".loadsec").style.display = "flex";
        document.querySelector(".loadsec").style.justifyConent = "center";
      const taskprob = this.task_types.length + 1;
      console.log(taskprob);

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
            data:{field: 'task_problems',
                  value: this.addingService
            }
          }).then(res=>{
            console.log(res.data);
            document.querySelector(".loadsec").style.display = "none !important";
            this.notifannounce(1);
            
          })
        
    },
    editbookfeetech(){
      if(document.querySelector('.tsub').textContent == "Edit")
      {
        document.querySelector('.techbooking1').style.display = "block";
        document.querySelector('.techbooking2').style.display = "block";
        document.querySelector('.techbooking3').style.display = "block";
        document.querySelector('.techbooking4').style.display = "block";
        document.querySelector('.techresult1').style.display = "none";
        document.querySelector('.techresult2').style.display = "none";
        document.querySelector('.techresult3').style.display = "none";
        document.querySelector('.techresult4').style.display = "none";
        document.querySelector('.tsub').textContent = "Update";
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
            fee__technician__app__charge:this.techappcharge,
                fee__technician__base__charge:this.techbasecharege,
                fee__technician__distance__charge:this.techdistcharge,
                fee__vat__charge:this.vatcharge
          }
        }).then(res=>{
          document.querySelector('.techbooking1').style.display = "none";
          document.querySelector('.techbooking2').style.display = "none";
          document.querySelector('.techbooking3').style.display = "none";
          document.querySelector('.techbooking4').style.display = "none";
          document.querySelector('.techresult1').style.display = "block";
          document.querySelector('.techresult2').style.display = "block";
          document.querySelector('.techresult3').style.display = "block";
          document.querySelector('.techresult4').style.display = "block";
          document.querySelector('.tsub').textContent = "Edit";
          this.notifannounce(2);
          console.log(res.data.result);
        });
      }
    },
    editbookfeeride(){
      if(document.querySelector('.rsub').textContent == "Edit")
      {
        document.querySelector('.ridebooking1').style.display = "block";
        document.querySelector('.ridebooking2').style.display = "block";
        document.querySelector('.ridebooking3').style.display = "block";
        document.querySelector('.ridebooking4').style.display = "block";
        document.querySelector('.rideresult1').style.display = "none";
        document.querySelector('.rideresult2').style.display = "none";
        document.querySelector('.rideresult3').style.display = "none";
        document.querySelector('.rideresult4').style.display = "none";
        document.querySelector('.rsub').textContent = "Update";
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
            fee__ridesharer__app__charge:this.rideappcharge,
                fee__ridesharer__base__charge:this.ridebasecharege,
                fee__ridesharer__dist__charge:this.ridedistcharge,
                fee__vat__charge:this.vatcharge
          }
        }).then(res=>{
          document.querySelector('.ridebooking1').style.display = "none";
          document.querySelector('.ridebooking2').style.display = "none";
          document.querySelector('.ridebooking3').style.display = "none";
          document.querySelector('.ridebooking4').style.display = "none";
          document.querySelector('.rideresult1').style.display = "block";
          document.querySelector('.rideresult2').style.display = "block";
          document.querySelector('.rideresult3').style.display = "block";
          document.querySelector('.rideresult4').style.display = "block";
          document.querySelector('.rsub').textContent = "Edit";
          this.notifannounce(4);
          console.log(res.data.result);
        });
      }
    },
    editbookfeetow(){
      if(document.querySelector('.twsub').textContent == "Edit")
      {
        document.querySelector('.towbooking1').style.display = "block";
        document.querySelector('.towbooking2').style.display = "block";
        document.querySelector('.towbooking3').style.display = "block";
        document.querySelector('.towbooking4').style.display = "block";
        document.querySelector('.towresult1').style.display = "none";
        document.querySelector('.towresult2').style.display = "none";
        document.querySelector('.towresult3').style.display = "none";
        document.querySelector('.towresult4').style.display = "none";
        document.querySelector('.twsub').textContent = "Update";
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
            fee__towing__app__charge:this.towappcharge,
                fee__towing__base__charge:this.towbasecharege,
                fee__towing__dist__charge:this.towdistcharge,
                fee__vat__charge:this.vatcharge
          }
        }).then(res=>{
          document.querySelector('.towbooking1').style.display = "none";
          document.querySelector('.towbooking2').style.display = "none";
          document.querySelector('.towbooking3').style.display = "none";
          document.querySelector('.towbooking4').style.display = "none";
          document.querySelector('.towresult1').style.display = "block";
          document.querySelector('.towresult2').style.display = "block";
          document.querySelector('.towresult3').style.display = "block";
          document.querySelector('.towresult4').style.display = "block";
          document.querySelector('.twsub').textContent = "Edit";
          console.log(res.data.result);
        });
      }
    },
    editbookfeedelivery(){
      if(document.querySelector('.dsub').textContent == "Edit")
      {
        document.querySelector('.delbooking1').style.display = "block";
        document.querySelector('.delbooking2').style.display = "block";
        document.querySelector('.delbooking3').style.display = "block";
        document.querySelector('.delbooking4').style.display = "block";
        document.querySelector('.delresult1').style.display = "none";
        document.querySelector('.delresult2').style.display = "none";
        document.querySelector('.delresult3').style.display = "none";
        document.querySelector('.delresult4').style.display = "none";
        document.querySelector('.dsub').textContent = "Update";
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
            fee__app__charge:this.deliveryappcharge,
                fee__base__charge:this.deliverybasecharege,
                fee__dist__charge:this.deliverydistcharge,
                fee__vat__charge:this.vatcharge
          }
        }).then(res=>{
          document.querySelector('.delbooking1').style.display = "none";
          document.querySelector('.delbooking2').style.display = "none";
          document.querySelector('.delbooking3').style.display = "none";
          document.querySelector('.delbooking4').style.display = "none";
          document.querySelector('.delresult1').style.display = "block";
          document.querySelector('.delresult2').style.display = "block";
          document.querySelector('.delresult3').style.display = "block";
          document.querySelector('.delresult4').style.display = "block";
          document.querySelector('.dsub').textContent = "Edit";
          this.notifannounce(5);
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
.announce img{
  max-height: 200px;
  height: 100%;
  width: 100%;
}
.conl{
  overflow: hidden !important;
}
.techbooking1{
  display:none;
}
.techbooking2{
  display:none;
}
.techbooking3{
  display:none;
}
.techbooking4{
  display:none;
}
.ridebooking1{
  display:none;
}
.ridebooking2{
  display:none;
}
.ridebooking3{
  display:none;
}
.ridebooking4{
  display:none;
}
.towbooking1{
  display:none;
}
.towbooking2{
  display:none;
}
.towbooking3{
  display:none;
}
.towbooking4{
  display:none;
}
.delbooking1{
  display:none;
}
.delbooking2{
  display:none;
}
.delbooking3{
  display:none;
}
.delbooking4{
  display:none;
}
.row .g-3{
  display: block;
}
.closeBtn{
  cursor: pointer;
}
.uploading-image{
     display:flex;
     max-width: 200px;
     width: 100%;
     max-height: 200px;
     height: 100%;
}
.imges{
  margin: 29px 0;
}
.modal{
  margin: 165px auto;
}
.modal2{
  z-index: 99999;
}
.modal1 img{
  display: block;
  max-width: 300px;
  width: 100%;
  max-height: 300px;
  height: 100%;
}
</style>