<template>
    <div class="logincard">
       <div class="leftcard">
           <img src="../assets/img/logo.png" />
       </div>                   
       <div class="rightcard">
           <h2>Admin Login</h2>
           <p>Welcome back Admin!</p>
           <div class="fgroup">
               <form @submit.prevent="" class="row g-4">
                   <div class="col-12">
                       <label>Username</label>
                       <div class="input-group">
                           <input v-model="username" type="text" class="form-control" placeholder="Enter Username">
                       </div>
                   </div>
   
                   <div class="col-12">
                       <label>Password</label>
                       <div class="input-group">
                           <input v-model="password" type="password" class="form-control" placeholder="Enter Password">
                       </div>
                   </div>
   
                   <div class="col-sm-6">
                       <div class="form-check">
                           <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                           <label class="form-check-label" for="inlineFormCheck">Remember me</label>
                       </div>
                   </div>
   
                   <div class="col-12">
                       <button @click="loginAdmin" @keypress.enter="loginAdmin" class="btn btn-primary px-4 float-end mt-4">login</button>
                   </div>
               </form>
           </div>
       </div>
    </div>
   </template>
   
   <script>
   import { local } from '../functions.js';
   import { useRoute, useRouter } from 'vue-router';
   import { axiosReq } from '@/functions';
   import { ciapi } from '@/globals';
   
   export default{
       name: 'App',
       data() {
         return{
           username: "",
           password: "",
           router: useRouter(),
         }
       },
       mounted(){
           local.setObject('AdminProfile',this.adminprofile);
       },
       methods: {
           loginAdmin(){
               axiosReq({
               method: 'post',
               url: ciapi +'admin/login' ,
               data: {username: this.username,password:this.password}
               }).catch(err=>{
               console.log(err.response);
               }).then(res=>{
                   console.log(res.data);
                   if(res.data.success)
                   {
                        local.set('user_id',res.data.admin_id);
                        local.set('user_token',res.data.token);
                        local.setObject('user_info', res.data.info);
                       this.$router.replace("/dashboard");
                       
                   }
                   else
                   {
                       console.log("Invalid Username or Password");
                   }
               });
               
           }
       }
   }
   </script>
   
   <style scoped>
   .leftcard{
       background-image: url("../assets/img/bg.jpg");
       background-size: cover;
       background-position: 100%;
       width: 100%;
       height: auto;
       padding: 12px;
       border-radius: 10px 0 0 10px;
       display: flex;
       align-items: center;
       justify-content: center;
   }
   .leftcard img{
       width: 200px;
   }
   .rightcard{
       background-color: #fff;
       width: 100%;
       height: auto;
       margin: 0 auto;
       padding: 12px;
       border-radius: 0px 10px 10px 0px;
   }
   .rightcard h2{
       font-size: 25pt;
       padding-top: 30px;
       text-align: center;
   }
   .rightcard p{
       margin: 0;
       text-align: center;
       padding: 0 20px 20px 20px;
       color: #6e6e6e;
   }
   .rightcard form{
       width: 100%;
   }
   .logincard{
       display: flex;
       justify-content: center;
       margin: 7% auto;
       width: 850px;
       height: 500px;
   }
   .fgroup{
       display: flex;
       justify-content: center;
       margin-top: 30px;
   }
   .row *{
       margin-top:  5px;
   }
   .btn-primary{
       --bs-btn-bg: #aa0927 !important;
       --bs-btn-border-color: #aa0927 !important;
   }
   .btn:hover{
       background-color: #A13838 !important;
       border-color: #A13838 !important;
   }
   .form-check-input:checked{
       background-color: #aa0927;
       border-color: #aa0927;
   }
   </style>