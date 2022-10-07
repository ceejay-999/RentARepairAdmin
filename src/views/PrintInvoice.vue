<template>
    <div class="printinvoice">
        <div class="printview">
            <div class="content">
                <img src="data:image/png;base64,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" alt="" />
                <h1>Official Receipt</h1>
                <div class="col2">
                    <span>Customer: <span class="red">{{task.user_name}}</span></span>
                    <span>Date: <span class="red">{{dateFormat('%lm %d, %y (%h:%i%a)',task.created_at)}}</span></span>
                    <span>Transaction ID: <span class="red">{{printId}}</span></span>
                    <span>Service: <span class="red">{{task.service_type}}</span></span>
                </div>
                <div class="box">
                    <div class="boxcell" v-if="task.service_type == 'Technician'"><strong class="block">Car:</strong>{{car.brand}} {{car.model}} ({{car.plate_number}})</div>

                    <div class="boxcell" >
                        <strong class="block">
                            {{(task.service_type == 'Ride Sharer' || task.service_type == 'Delivery') ? 'From:' : 'Location: '}}
                        </strong>
                        {{task.customer_location}}
                        
                    </div>

                    <div class="boxcell" v-if="task.service_type == 'Ride Sharer' || task.service_type == 'Delivery'">
                        <strong class="block">To:</strong>
                        {{task.drop_location}}
                    </div>

                    <div class="boxcell" v-if="task.problems != '' && task.problems != null"><strong class="block">
                        {{(task.service_type != 'Delivery') ? 'Problems' : 'Fragile'}}</strong>{{task.problems}}</div>
                    <div class="boxcell" v-if="task.description != '' && task.description != null"><strong class="block">More Information:</strong>
                        {{task.description}}
                    </div>
                    <div class="boxcell">
                        <strong class="block">Payment Breakdown:</strong>
                        <div class="col2price">
                            <span>Distance Fee</span>
                            <span>${{transaction.distcharge}}</span>
                            <span>Booking Fee</span>
                            <span>${{toDecimal(transaction.distcharge * transaction.appcharge)}}</span>
                            <span>VAT Fee</span>
                            <span>${{toDecimal(
                                (parseFloat(transaction.distcharge) + 
                                (transaction.distcharge * transaction.appcharge)) *
                                parseFloat(transaction.vat)
                                )}}</span>
                            <span><strong>Total</strong></span>
                            <span><strong>${{toDecimal(transaction.total)}}</strong></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="printbottom">
            <button class="printbutton" disabled @click="printToPDF">Print</button>
        </div>
        
    </div>
</template>




<script>
const ciapi = 'https://www.medicalcouriertransportation.com/rentarepair/api/';

//--- DELETE ALL CODE BEFORE THIS ---
//import {ciapi} from '@/js/globals'
import {axiosReq,removeFix,dateFormat,local} from '../functions';

export default({
    props:["printId"],
    data(){
        return {
            transaction:{
                distcharge:0,
                total:0,
                vat:0,
                appcharge:0,
                total: 0    
            },
            task:{
                user_name: '',
                created_at:'2001-01-01 00:00:00'
            },
            car:{brand:'',model:'',plate_number:''},
            loaded:0
        }
    },
    watch:{
        loaded(to){
            if((to >= 3 && this.task.service_type == 'Technician') ||
            (to >= 2 && this.task.service_type != 'Technician')){
                document.querySelector('.printview').classList.add('loaded');
                document.querySelector('.printbutton').removeAttribute('disabled');
            }
        },
        printId(to){
            console.log(to);
            this.loadTransaction();
        }
    },
    mounted(){
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.1/html2pdf.bundle.min.js';
        document.body.appendChild(script);
    },
    methods:{
        dateFormat,
        toDecimal(value){
            value = parseFloat(value);
            return value.toFixed(2);
        },
        printToPDF(){
            let opt = {
                margin: [10,10,10,10],
                filename: `rentarepair-invoice_${this.task.id}.pdf`,
                image: { type: 'jpeg', quality: 2 },
                html2canvas: {
                    dpi: 300,
                    scale:2,
                    letterRendering: true,
                    useCORS: true
                },
                jsPDF: { unit: 'mm', orientation: 'portrait',format:'letter'},
                pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
            };
            try{
                html2pdf(document.querySelector('.content'),opt).save()
            }catch(e){
                console.log('printed');
            }
        },

        loadTransaction(){
            document.querySelector('.printview').classList.remove('loaded');
            this.loaded = 0;
            document.querySelector('.printbutton').setAttribute('disabled','');

            axiosReq({
                method:'post',
                url: ciapi+'task?task_id='+this.printId,
                headers:{
                    PWAuth: '6ed6e4f49cb32fda9284b11960167fed',
                    PWAuthUser: 1000
                }
            }).then(res=>{
                this.task = removeFix(res.data.result,'task_');
                this.loaded++;
                if(this.task.service_type == 'Technician'){
                    let problemsArr = local.objectify(this.task.problems);
                    let problemString = '';
                    problemsArr.forEach((el,i)=>{
                        if(i == problemsArr.length - 1) problemString = problemString + el;
                        else problemString = problemString + el + ', ';
                    });
                    this.task.problems = problemString;

                    axiosReq({
                        method:'post',
                        url: ciapi+'cars?car_id='+this.task.car_id,
                        headers:{
                            PWAuth: '6ed6e4f49cb32fda9284b11960167fed',
                            PWAuthUser: 1000
                        }
                    }).then(res=>{
                        this.car = removeFix(res.data.result,'car_');
                        this.loaded++;
                    });
                }

                
            });

            axiosReq({
                method:'post',
                url: ciapi+'transactions?trans_id='+this.printId,
                headers:{
                    PWAuth: '6ed6e4f49cb32fda9284b11960167fed',
                    PWAuthUser: 1000
                }
            }).then(res=>{
                this.transaction = removeFix(res.data.result,'trans_');
                this.loaded++;
            });
        }
    }

})

</script>

<style scoped>
*{margin:0;padding:0;box-sizing: border-box;}

.printinvoice{border:1px solid #ccc;max-width: 1000px;border-radius: 0 0 20px 20px}

.printview{max-height: 500px;overflow: scroll;padding: 20px;background: #ddd;filter: blur(5px);transition: 0.4s;}
.printview.loaded{filter:blur(0px)}


.content{font-family: sans-serif;padding: 20px;width: 700px;margin: 0 auto;z-index: -1;background: #fff;}
.content h1{font-size: 20px;text-align: center;color:#b7170b;margin:0 0 20px;padding: 10px;}
.content .col2{display: grid;grid-template-columns: 1fr 1fr;}
.content .col2 span {font-weight: 700;margin: 10px 0;}
.content .col2price{display: grid;grid-template-columns: 1fr 2fr;row-gap: 5px;}
.content .col2price span:nth-of-type(even){quotes: none;color:#b7170b;text-align: right;}
.content .col2price span{padding: 5px 0 0;}
.content .col2price span:last-of-type{border-top: 2px solid #000;padding: 5px 0 0;}
.content .red{color:#b7170b;}
.content img{width: 200px;display: block;margin: 0 auto;}
.content .box{border:3px solid #aaa;margin: 20px 0;}
.content .boxcell{padding: 15px;}
.content .boxcell:not(:last-child){border-bottom:3px solid #aaa}
.content .block{display: block;margin:0 0 5px}
.content .block:not(:first-child){margin:10px 0 5px}

.printbottom{padding:20px;border-top:1px solid #ccc}
.printbottom button:disabled{background:#c88e89;}
.printbottom button{display: block;background:#b7170b;color:#fff;padding: 10px;border:none;border-radius: 10px;transition: 0.4s;}
.printbottom button:not(:disabled):hover{background:#6f110b;}
.printbottom button:not(:disabled):active{background:#222;}

</style>