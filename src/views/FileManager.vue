<template>
    <div class="filemanager" >
        <div class="fileview">
            <div class="fileitem" v-for="f in files" :key="f">
                <div class="filedisp" @click="fileToView = f">
                    <img v-if="fileType(f) == 'image'" :src="cifile+f">
                    <div class="videothumb" v-if="fileType(f) == 'video'"></div>
                    <div class="docthumb" v-if="fileType(f) == 'document'"></div>
                </div>
                <p>{{f}}</p>
            </div>
            <div class="fileupload" @drop="dropFile" @dragover="dragOver" @dragleave="dragLeave">Drop a file or Click in this box to Upload
                <label for="uploadFile" id="uploadFileLabel"></label>
                <input id="uploadFile" @change="uploadFile" hidden type="file">
            </div>
        </div>
        <div class="fileviewpanel" v-if="fileToView != ''">
            <div class="fileviewer">
                <img v-if="fileType(fileToView) == 'image'" :src="cifile+fileToView">
                <video class="videothumb" v-if="fileType(fileToView) == 'video'" :src="cifile+fileToView"></video>
                <div class="docthumb" v-if="fileType(fileToView) == 'document'">No Preview Available</div>
            </div>
            <h3>{{fileToView}}</h3>
            <button @click="chooseFile(fileToView)">Choose {{fileType(fileToView).charAt(0).toUpperCase() + fileType(fileToView).substring(1)}}</button>
            <button @click="deleteFile(fileToView)">Delete {{fileType(fileToView).charAt(0).toUpperCase() + fileType(fileToView).substring(1)}}</button>
        </div>
    </div>
</template>




<script>
import {local, axiosReq} from '@/functions'
import {ciapi} from '@/globals'

const cifile = ciapi.replaceAll('api/','uploads/');

export default({
    data(){
        return {
            files:[],
            cifile,
            fileToView: ''
        }
    },
    mounted(){
        axiosReq({
            methods:'post',
            url: ciapi+'admin/uploads',
            headers: {
                PWAuth: local.get('user_token'),
                PWAuthUser: local.get('user_id')
            },
        }).then(res=>{
            this.files = res.data.files;
        })
    },
    methods:{
        fileType(filename){
            let fileSplit = filename.toLowerCase().split('.');
            let ext = fileSplit[fileSplit.length - 1];
            let image = ['gif','png','jpg','jpeg'];
            let video = ['mp4','webm','ogv'];
            let doc = ['doc','docx','xls','xlsx','csv','pdf'];
            if(image.includes(ext)) return 'image'; 
            if(video.includes(ext)) return 'video';
            if(doc.includes(ext)) return 'document';
            return '';
        },
        deleteFile(filename){
            axiosReq({
                method:'post',
                url: ciapi+'admin/deletefile?file='+filename,
                headers: {
                    PWAuth: local.get('user_token'),
                    PWAuthUser: local.get('user_id')
                },
            }).then(res=>{
                console.log(res.data);
                this.files.splice(this.files.indexOf(filename),1);
                this.fileToView = '';
            });
        },
        chooseFile(filename){
            this.$emit('chosenFile',filename);
            this.$emit('chosenFileLink',cifile+filename);
        },
        uploadFile(){
            if( document.getElementById("uploadFile").files.length == 0 ){
                alert("no files selected");
                return;
            }

            axiosReq({
                method:'post',
                url: ciapi+'admin/uploadfile',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    PWAuth: local.get('user_token'),
                    PWAuthUser: local.get('user_id')
                },
                data: {file:document.getElementById("uploadFile").files[0]}    
            }).then(res=>{
                console.log(res.data);
                if(!res.data.success){
                    alert('Error Uploading File!');
                }
                this.files.push(res.data.file_name);
            })
        },
        dropFile(e){
            e.preventDefault();

            axiosReq({
                method:'post',
                url: ciapi+'admin/uploadfile',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    PWAuth: local.get('user_token'),
                    PWAuthUser: local.get('user_id')
                },
                data: {file:e.dataTransfer.files[0]}    
            }).then(res=>{
                if(!res.data.success){
                    alert('Error Uploading File!');
                }
                this.files.push(res.data.file_name);
            })
        },
        dragOver(e){
            e.preventDefault();
            document.querySelector('.fileupload').classList.add('dragover');
        },
        dragLeave(e){
            e.preventDefault();
            document.querySelector('.fileupload').classList.remove('dragover');
        }
    }

})

</script>

<style scoped>
*{padding:0;margin:0;box-sizing: border-box;}
.filemanager{display: flex;}

.fileview{display: flex;gap:10px;flex-wrap:wrap;width: calc(100% - 400px);}
.fileitem{width: 150px;}
.filedisp{width: 150px;height: 150px;border:1px solid #ccc;transition: 0.15s;margin: 0 0 5px;}
.filedisp:hover{filter:brightness(50%)}
.filedisp:active{filter:brightness(200%)}
.fileitem img{width: 150px;height: 150px;object-fit: cover;}
.fileitem p{white-space:pre;overflow:hidden;text-overflow: ellipsis;}
.fileupload{position:relative;border:5px dashed #ccc;width: 100%;height: 150px;display: flex;justify-content: center;align-items: center;transition: 0.2s;margin:20px 0 0}
.fileupload:hover,.fileupload.dragover{border:5px dashed #444;}
.fileupload:active{border:5px dashed #b7170b}
#uploadFileLabel{width: 100%;height: 100%;position: absolute;}

.fileviewpanel{width: 400px;box-shadow:0 0 10px #555;padding: 20px;}
.fileviewer{border:1px solid #ccc;margin:0 0 10px}
.fileviewpanel img,.fileviewpanel video{width: 100%;height:300px;object-fit: contain;}
.fileviewpanel h3{margin:0 0 10px}
.fileviewpanel button{display: block;margin:0 0 5px;width:100%}

</style>