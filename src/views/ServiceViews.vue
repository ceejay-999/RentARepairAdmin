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
          <div class="card-body">
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
            <ul>
              <li v-for="t in announcements" v-bind:key="t.ann_id">
                {{t.ann_title}}
              <div class="card announce">
                <card-body>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <!-- <img :src="t.ann_imgsrc" class="img-fluid rounded-start"> -->
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{{t.ann_title}}</h5>
                        <p class="card-text">{{t.ann_description}}</p>
                        <p class="card-text"><small class="text-muted">{{t.ann_created_at}}</small></p>
                      </div>
                    </div>
                  </div>
                </card-body>
              </div>
              </li>
            </ul>

          </div>
      </div>
    </div>
    <div class="col-xl-4 col-md-12">
      <div class="card">
        <div class="card-body">
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
              <input type="text" class="form-control" id="AddService" placeholder="Add Services">
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
          
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="card-title">
            Discounts 
          </div> 
          <form class="row g-3">
            <div class="col-auto">
              <input type="text" class="form-control" v-model="addingService" id="AddService" placeholder="Add Services">
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">Add</button>
            </div>
          </form>
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
import router from '../router';

 export default{
  name: "App",
  components: {
    ContentLoader,
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
        
      })  
      axiosReq({
        method: 'post',
        url: ciapi +'admin/announcements?_batch=true',
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
          }
      }).then(res=>{
        document.querySelector('.con-loader1').style.display = "none"
        document.querySelector('.announce').style.display = "flex";
        for(let r in res.data.result) 
        {this.announcements.push(res.data.result[r])}

        console.log(this.announcements)
      })
  },
  methods: {
    deleteService(name){
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
        this.task_types.splice(this.task_types.indexOf(name),1);
        
      })
    },
    addService(){
      const taskprob = this.task_types.length
      axiosReq({
        method: 'post',
        url: ciapi +'/admin/config/create',
        headers:{
            PWAuth: local.get('user_token'),
            PWAuthUser: local.get('user_id')
          },
        data:{feild: 'task_problems_'+taskprob,
              value: this.addingService
        }
      }).then(res=>{
        console.log(res.data);
        // router.go(0);
        
      })
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
</style>