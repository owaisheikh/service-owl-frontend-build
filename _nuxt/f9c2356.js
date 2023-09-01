(window.webpackJsonp=window.webpackJsonp||[]).push([[238,110,112,181,199,208],{1069:function(t,e,r){"use strict";r(969)},1070:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".nuxt-link-exact-active[data-v-307b00e7]{color:var(--primary-default-color)}.formWidth[data-v-307b00e7]{width:450px}@media only screen and (max-width:430px){.formWidth[data-v-307b00e7]{width:350px}}@media only screen and (max-width:320px){.formWidth[data-v-307b00e7]{width:300px}}",""]),n.locals={},t.exports=n},1140:function(t,e,r){"use strict";r.r(e);r(31),r(22),r(21),r(14),r(42),r(28),r(43);var n=r(2),o=r(16),c=(r(88),r(8),r(23)),l=r(698),d=r(844),f=r(789),m=r(700);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"Payment",components:{PackagesHeader:d.default,PaymentForm:f.default,BaseButton:m.default,PulseLoader:l.a},layout:"guest",middleware:"auth",data:function(){return{stripe:null,stripeError:null,card:null,canCharge:!1,loading:!1,applicationFee:0,initialLoading:!1}},computed:y(y({},Object(c.e)({currentPackage:function(t){return t.packages.current}})),{},{price:function(){return null!==this.currentPackage?this.currentPackage.price:0},userHasDefaultPaymentMethod:function(){return this.user.has_default_payment_method}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.initialLoading=!0,t.userHasDefaultPaymentMethod){e.next=11;break}return t.stripeError=null,e.next=6,Stripe("sk_test_51HbjAoDiTgMYksAx1UYqe3CvXzkJST7pVPDUPumLkvnnYkM7PKkJMpv4jMnmaDSp47jHiLstR9jVqorqoGrHsM6I00xuUNgsaj",{stripeAccount:t.stripeConnectAccountId});case 6:return t.stripe=e.sent,e.next=9,t.$axios.post("/transactions/setup-intent");case 9:r=e.sent,t.setupIntent=r.data.data;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t.showErrorToast(e.t0);case 16:return e.prev=16,t.initialLoading=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})))()},methods:y(y({},Object(c.b)({})),{},{setCard:function(t){this.card=t},setCanCharge:function(t){this.canCharge=t},showErrorToast:function(t){this.$toast.showMessage({title:"There was an error",message:t,type:"danger"})},submitPayment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.userHasDefaultPaymentMethod){e.next=17;break}return e.prev=1,t.loading=!0,e.next=5,t.$axios.post("/transactions/process-package-payment/".concat(t.currentPackage.uuid),{job_uuid:t.$route.params.uuid});case 5:e.sent.data.success&&(t.$toast.showMessage({title:"Success",message:"Your payment was processed successfully",type:"success"}),setTimeout((function(){var e=t.$route.params.uuid;t.$router.push({path:"/jobs/".concat(e,"/packages/success")})}),1e3)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t.showErrorToast("We were not able to process the payment");case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:e.next=45;break;case 17:return t.stripeError=null,t.loading=!0,e.prev=19,e.next=22,t.stripe.confirmCardSetup(t.setupIntent.client_secret,{payment_method:{card:t.card}});case 22:if(!(r=e.sent).error){e.next=28;break}t.stripeError=r.error.message,t.showErrorToast(t.stripeError),e.next=37;break;case 28:if("succeeded"!==r.setupIntent.status){e.next=37;break}return e.next=31,t.$axios.post("/transactions/update-default-payment-method",{payment_method_id:r.setupIntent.payment_method});case 31:if(!e.sent.data.success){e.next=37;break}return e.next=35,t.$axios.post("/transactions/process-package-payment/".concat(t.currentPackage.uuid),{job_uuid:t.$route.params.uuid});case 35:e.sent.data.success&&(t.$toast.showMessage({title:"Success",message:"Your payment was processed successfully",type:"success"}),setTimeout((function(){var e=t.$route.params.uuid;t.$router.push({path:"/jobs/".concat(e,"/packages/success")})}),1e3));case 37:e.next=42;break;case 39:e.prev=39,e.t1=e.catch(19),console.log(e.t1);case 42:return e.prev=42,t.loading=!1,e.finish(42);case 45:case"end":return e.stop()}}),e,null,[[1,9,12,15],[19,39,42,45]])})))()}})},x=(r(1069),r(5)),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.initialLoading?r("div",{staticClass:"h-screen flex justify-center items-center"},[r("PulseLoader",{attrs:{loading:!0,color:t.appBranding.primary,size:"12px"}})],1):r("div",{staticClass:"h-screen"},[r("PackagesHeader"),t._v(" "),r("div",{staticClass:"formWidth mx-auto my-8 mt-20"},[r("div",{staticClass:"heading-m-700 text-center mb-10"},[t._v("Package payment")]),t._v(" "),t.userHasDefaultPaymentMethod?[r("div",{staticClass:"space-y-4"},[r("BaseButton",{staticClass:"w-full",attrs:{text:"Confirm Payment $"+t.price,loading:t.loading},on:{click:t.submitPayment}})],1)]:[t.stripe?r("PaymentForm",{staticClass:"card",attrs:{stripe:t.stripe,error:t.stripeError},on:{card:t.setCard,canCharge:t.setCanCharge}}):t._e(),t._v(" "),r("BaseButton",{staticClass:"w-full",attrs:{text:"Confirm Payment $"+t.price,disabled:!t.canCharge,loading:t.loading},on:{click:t.submitPayment}})]],2)],1)}),[],!1,null,"307b00e7",null);e.default=component.exports},697:function(t,e,r){var content=r(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("3af0a2a6",content,!0,{sourceMap:!1})},698:function(t,e,r){"use strict";var n={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(r(701),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[r("div",{staticClass:"v-pulse v-pulse1",style:[t.spinnerStyle,t.spinnerDelay1]}),r("div",{staticClass:"v-pulse v-pulse2",style:[t.spinnerStyle,t.spinnerDelay2]}),r("div",{staticClass:"v-pulse v-pulse3",style:[t.spinnerStyle,t.spinnerDelay3]})])}),[],!1,null,null,null);e.a=component.exports},699:function(t,e,r){var content=r(707);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("8a3c3444",content,!0,{sourceMap:!1})},700:function(t,e,r){"use strict";r.r(e);var n={name:"BaseButton",components:{PulseLoader:r(698).a},props:{text:{type:String,default:""},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},btnStyle:{type:String,default:"primary"},size:{type:String,default:"medium"}},computed:{padding:function(){switch(this.size){case"small":return"px-4 py-1";case"thin":return"px-8 py-1";default:return"px-4 py-2"}},buttonType:function(){switch(this.btnStyle){case"primary":default:return"btn-primary";case"danger":return"btn-danger";case"outline":return"btn-outline";case"outline-danger":return"btn-outline-danger"}},hasLeftIcon:function(){return!!this.$slots.leftIcon},hasRightIcon:function(){return!!this.$slots.rightIcon},centerText:function(){return!1===this.hasLeftIcon&&!1===this.hasRightIcon?"justify-center items-center":"justify-between items-center"}},methods:{onClick:function(){this.$emit("click")},onMousedown:function(){this.$emit("mousedown")}}},o=(r(706),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{class:[t.buttonType,t.padding,t.centerText,{"cursor-not-allowed disabled":t.disabled}],attrs:{type:"button",disabled:t.disabled},on:{click:t.onClick,mousedown:t.onMousedown}},[t.loading?[r("PulseLoader",{attrs:{loading:!0,color:"primary"===t.btnStyle||"success"===t.btnStyle?"#ffffff":"#000000",size:"8px"}})]:[r("span",{staticClass:"mr-3 -ml-1"},[t._t("leftIcon")],2),t._v("\n    "+t._s(t.text)+"\n    "),r("span",{staticClass:"ml-3 -mr-1"},[t._t("rightIcon")],2)]],2)}),[],!1,null,"0266595c",null);e.default=component.exports},701:function(t,e,r){"use strict";r(697)},702:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),n.locals={},t.exports=n},703:function(t,e,r){var content=r(712);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("0539b552",content,!0,{sourceMap:!1})},705:function(t,e,r){"use strict";r.r(e);var n={name:"InputLabel",props:{text:{type:String,default:""}}},o=(r(711),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("label",{staticClass:"label"},[t._v(t._s(t.text))])}),[],!1,null,"6dd03c6e",null);e.default=component.exports},706:function(t,e,r){"use strict";r(699)},707:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".btn-primary[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;background-color:var(--primary-default-color);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.btn-primary[data-v-0266595c]:hover{background-color:var(--primary-dark-color)}.btn-outline[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:var(--primary-dark-color);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));color:var(--primary-dark-color);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.disabled[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;background-color:var(--primary-light-color);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.disabled[data-v-0266595c]:hover{background-color:var(--primary-light-color)}.btn-danger[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;--tw-bg-opacity:1;background-color:rgb(219 25 32 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.btn-danger[data-v-0266595c]:hover{--tw-bg-opacity:1;background-color:rgb(137 16 20 / var(--tw-bg-opacity))}.btn-outline-danger[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(137 16 20 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(137 16 20 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}",""]),n.locals={},t.exports=n},711:function(t,e,r){"use strict";r(703)},712:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".label[data-v-6dd03c6e]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:block;color:var(--primary-dark-color)}",""]),n.locals={},t.exports=n},749:function(t,e,r){var content=r(782);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("39871fd2",content,!0,{sourceMap:!1})},781:function(t,e,r){"use strict";r(749)},782:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".nuxt-link-exact-active[data-v-6ad2f9d9]{color:var(--primary-default-color)}.formWidth[data-v-6ad2f9d9]{width:450px}@media only screen and (max-width:430px){.formWidth[data-v-6ad2f9d9]{width:350px}}@media only screen and (max-width:320px){.formWidth[data-v-6ad2f9d9]{width:300px}}.text-input[data-v-6ad2f9d9]{font-family:Nunito;font-size:14px;font-weight:400;line-height:21px;margin-top:0.25rem;display:block;width:100%;border-width:1px;--tw-border-opacity:1;border-color:rgb(211 208 197 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:0.5rem;padding-bottom:0.5rem;outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.input-cont[data-v-6ad2f9d9]{border-radius:0.75rem;--tw-border-opacity:1;border-color:rgb(214 216 213 / var(--tw-border-opacity));padding-left:1rem;padding-right:1rem}",""]),n.locals={},t.exports=n},789:function(t,e,r){"use strict";r.r(e);r(31),r(22),r(21),r(14),r(42),r(28),r(43);var n=r(2),o=r(16),c=(r(8),r(23)),l=r(187);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"Payment",components:{InputLabel:r(705).default},layout:"guest",props:{stripe:{type:Object,required:!0},error:{type:String,required:!1,default:""}},data:function(){return{loading:!1,disabled:!1,cardNumber:null,isNumberFilled:!1,isExpiryFilled:!1,isCvcFilled:!1,expiryError:"",numberError:"",cvcError:""}},computed:{cardStyles:function(){return{base:{fontSize:"14px",paddingTop:"0.5rem",fontWeight:400,lineHeight:"21px",backgroundColor:"white",height:"100%"}}},canCharge:function(){return this.isNumberFilled&&this.isExpiryFilled&&this.isCvcFilled}},watch:{canCharge:function(t){this.$emit("canCharge",t)}},methods:f(f({},Object(c.b)({storeApplication:"applications/store"})),{},{createStripeCard:function(){var t=this,e=this.stripe.elements({fonts:[{cssSrc:"https://fonts.googleapis.com/css2?family=Work+Sans:wght@400"}],locale:"auto"}),r=this.$refs;this.cardNumber=e.create("cardNumber",{style:this.cardStyles}),this.cardNumber.mount(r.stripeCardNumber);var n=e.create("cardExpiry",{classes:this.cardClasses,style:this.cardStyles});n.mount(r.stripeCardExpiry);var o=e.create("cardCvc",{classes:this.cardClasses,style:this.cardStyles});o.mount(r.stripeCardCVC),this.cardNumber.on("change",this.handleNumberChange),this.cardNumber.on("blur",(function(e){return t.blurStripeE(r.stripeCardNumber,e)})),this.cardNumber.on("focus",(function(e){return t.focusStripeElement(r.stripeCardNumber,e)})),n.on("change",this.handleExpiryChange),n.on("blur",(function(e){return t.blurStripeE(r.stripeCardExpiry,e)})),n.on("focus",(function(e){return t.focusStripeElement(r.stripeCardExpiry,e)})),o.on("change",this.handleCvcChange),o.on("blur",(function(e){return t.blurStripeE(r.stripeCardCVC,e)})),o.on("focus",(function(e){return t.focusStripeElement(r.stripeCardCVC,e)}))},blurStripeE:function(t){t.parentNode.classList.remove("ring-2"),t.parentNode.classList.remove("ring-primary")},focusStripeElement:function(t){t.parentNode.classList.add("ring-2"),t.parentNode.classList.add("ring-primary")},handleNumberChange:function(t){var e=t.complete,r=t.error;this.isNumberFilled=e,this.numberError=r?r.message:"",this.$emit("card",this.cardNumber)},handleExpiryChange:function(t){var e=t.complete,r=t.error;this.isExpiryFilled=e,this.expiryError=r?r.message:""},handleCvcChange:function(t){var e=t.complete,r=t.error;this.isCvcFilled=e,this.cvcError=r?r.message:""},store:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,r=t.$route.params.locationUuid,e.next=5,t.storeApplication({application_type:l.a,locationUuid:r});case 5:t.$toast.showMessage({title:"Success",message:"Client application successfully sent.",type:"success"}),t.$router.push({path:"/applications/client/location/".concat(r,"/sent")}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t.$toast.showMessage({title:"Something went wrong",message:"Please check the form data.",type:"danger"});case 12:t.loading=!1;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.disabled=!0,e.next=3,t.createStripeCard();case 3:t.disabled=!1;case 4:case"end":return e.stop()}}),e)})))()}},h=(r(781),r(5)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"formWidth mx-auto my-8"},[r("div",{staticClass:"body-l-400 text-center mb-8"},[r("div",[r("div",{staticClass:"grid grid-cols-6 gap-x-4 gap-y-9"},[r("div",{staticClass:"col-span-6"},[r("InputLabel",{attrs:{text:"Card Number"}}),t._v(" "),r("div",{staticClass:"text-input input-cont"},[r("div",{ref:"stripeCardNumber",staticClass:"w-full"})]),t._v(" "),t.numberError?r("h4",{staticClass:"text-danger caption-s-500 mt-2"},[t._v(t._s(t.numberError))]):t._e()],1),t._v(" "),r("div",{staticClass:"col-span-3"},[r("InputLabel",{attrs:{text:"Expiration"}}),t._v(" "),r("div",{staticClass:"text-input input-cont"},[r("div",{ref:"stripeCardExpiry",staticClass:"w-full"})]),t._v(" "),t.expiryError?r("h4",{staticClass:"text-danger caption-s-500 mt-2"},[t._v(t._s(t.expiryError))]):t._e()],1),t._v(" "),r("div",{staticClass:"col-span-3"},[r("InputLabel",{attrs:{text:"CVC"}}),t._v(" "),r("div",{staticClass:"text-input input-cont"},[r("div",{ref:"stripeCardCVC",staticClass:"w-full"})]),t._v(" "),t.cvcError?r("h4",{staticClass:"text-danger caption-s-500 mt-2"},[t._v(t._s(t.cvcError))]):t._e()],1)]),t._v(" "),t.error?r("p",{staticClass:"text-danger caption-s-500 mt-2"},[t._v(t._s(t.error))]):t._e()])])])}),[],!1,null,"6ad2f9d9",null);e.default=component.exports},796:function(t,e,r){var content=r(826);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("219f82cf",content,!0,{sourceMap:!1})},825:function(t,e,r){"use strict";r(796)},826:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".nuxt-link-exact-active[data-v-294cde6e]{color:var(--primary-default-color)}",""]),n.locals={},t.exports=n},844:function(t,e,r){"use strict";r.r(e);var n={name:"PackagesHeader",components:{Logo:r(755).default}},o=(r(825),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"px-8 py-5 shadow flex flex-col items-center justify-between relative bg-white"},[r("Logo",{staticClass:"p-0 absolute left-1/4 top-0"}),t._v(" "),r("p",[t._v("Packages")])],1)}),[],!1,null,"294cde6e",null);e.default=component.exports},969:function(t,e,r){var content=r(1070);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("f3f8d4aa",content,!0,{sourceMap:!1})}}]);