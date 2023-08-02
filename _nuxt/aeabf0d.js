(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1036:function(e,t,r){"use strict";r(950)},1037:function(e,t,r){var n=r(50)((function(i){return i[1]}));n.push([e.i,".nuxt-link-exact-active[data-v-1e8d1dd4]{color:var(--primary-default-color)}.formWidth[data-v-1e8d1dd4]{width:450px}@media only screen and (max-width:430px){.formWidth[data-v-1e8d1dd4]{width:350px}}@media only screen and (max-width:320px){.formWidth[data-v-1e8d1dd4]{width:300px}}",""]),n.locals={},e.exports=n},1122:function(e,t,r){"use strict";r.r(t);r(31),r(22),r(42),r(43);var n=r(2),o=r(16),l=(r(8),r(88),r(14),r(27),r(33),r(63),r(89),r(21),r(28)),c=r(44),d=r(698),f=r(949),m=r(938),v=r(721),h=r(736),y=r(738),_=r(726),C=r(715),x=r(705),w=r(700),T=r(764),S=r(714);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k={name:"NewJobContract",components:{ValidationProvider:c.b,ValidationObserver:c.a,PulseLoader:d.a,DayItem:m.default,BaseTextArea:_.default,BaseCheckbox:y.default,CalendarIcon:v.default,BaseInput:C.default,InputLabel:x.default,BaseButton:w.default,BaseSelect:T.default,ServiceBadgeSelector:h.default},middleware:["auth"],data:function(){return{form:{type:null,start:null,end:null,special_instructions:"",job_service_details:[],service_id:null,required_days:{monday:{from:null,to:null},tuesday:{from:null,to:null},wednesday:{from:null,to:null},thursday:{from:null,to:null},friday:{from:null,to:null},saturday:{from:null,to:null},sunday:{from:null,to:null}}},days:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],serviceDetails:[],loading:!1,initialLoading:!1}},computed:j(j({},Object(l.e)({services:function(e){return e.services.items}})),{},{contractTypes:function(){var e=[];return this.appBranding.job_services.HOURLY_CONTRACT&&e.push({id:S.b,name:"Request hourly contract",description:""}),this.appBranding.job_services.SHORT_TERM_CONTRACT&&e.push({id:S.e,name:"Request short term",description:""}),this.appBranding.job_services.SALARY_CONTRACT&&e.push({id:S.c,name:"Request salary Contract",description:""}),e}}),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.user.is_approved||(e.$toast.showMessage({title:"Hey!",message:"Your account is not approved yet, you're not allowed to request casual shifts",type:"warning"}),setTimeout((function(){e.$router.push("/")}),1e3)),r=e.user.client.location.uuid,e.initialLoading=!0,t.next=6,e.getJobServiceDetails(r);case 6:n=t.sent,n.data.job_service_details.forEach((function(t){e.serviceDetails.push({id:t.id,name:t.name,icon_name:t.icon_name,checked:!1})})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e.displayToast("Something went wrong","We were not able to fetch data");case 14:return t.prev=14,e.initialLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})))()},methods:j(j({},Object(l.b)({getJobServiceDetails:"applications/getJobServiceDetails",createJob:"clients/createJob",getServices:"services/get"})),{},{onCheckboxChange:function(e,t){e&&!this.form.job_service_details.includes(t)?this.form.job_service_details.push(t):!e&&this.form.job_service_details.includes(t)&&(this.form.job_service_details=this.form.job_service_details.filter((function(e){return e!=t})))},onContractChange:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getServices({locationUuid:e.user.client.location.uuid,type:e.form.type});case 2:case"end":return t.stop()}}),t)})))()},onFromChange:function(e,t){this.form.required_days[e].from=t},onToChange:function(e,t){this.form.required_days[e].to=t},store:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.observer.validate();case 2:if(!t.sent){t.next=23;break}if(!e.canSubmit()){t.next=21;break}return t.prev=5,e.loading=!0,e.form.clientUuid=e.$auth.user.client.uuid,t.next=10,e.createJob(e.form);case 10:data=t.sent,e.$toast.showMessage({title:"Success",message:"Job request created successfully",type:"success"}),setTimeout((function(){e.$router.push("/jobs/".concat(data.uuid,"/payment"))}),800),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),e.$toast.showMessage({title:"Something went wrong",message:"Could not add job request",type:"danger"});case 18:return t.prev=18,e.loading=!1,t.finish(18);case 21:t.next=24;break;case 23:return t.abrupt("return",e.$toast.showMessage({title:"Something went wrong",message:"Please check the form for displayed errors",type:"danger"}));case 24:case"end":return t.stop()}}),t,null,[[5,15,18,21]])})))()},canSubmit:function(){return this.hasRequiredTime()?this.jobServiceDetailChecked()?this.validateDateRanges()?!!this.validateDayTimeRanges():(this.displayToast("Invalid Date time","The starting date can't be before today and must be before the end date"),!1):(this.displayToast("It must involve one task","Select at least one before submit"),!1):(this.displayToast("Request Time","You need to select your requested time"),!1)},hasRequiredTime:function(){var e=this.form.required_days;for(var t in e)if(e[t].from&&e[t].to)return!0;return!1},validateDateRanges:function(){var e=this.$moment(this.form.start),t=this.$moment(this.form.end),r=this.$moment().startOf("day");return e.isSameOrAfter(r)&&e.isBefore(t)},validateDayTimeRanges:function(){var e=this.form.required_days;for(var t in e)if(null!=e[t].from&&null!=e[t].from){var r=this.$moment(e[t].from,"HH:mm"),n=this.$moment(e[t].to,"HH:mm");if(!r.isBefore(n))return this.displayToast("Invalid Time","On the day ".concat(Object(f.a)(t)," the starting time is before the end time.")),!1}return!0},jobServiceDetailChecked:function(){return this.form.job_service_details.length>0},displayToast:function(title,e){this.$toast.showMessage({title:title,message:e,type:"danger"})}})},R=(r(1036),r(5)),component=Object(R.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.initialLoading?r("div",{staticClass:"h-screen flex justify-center items-center"},[r("PulseLoader",{attrs:{loading:!0,color:e.appBranding.primary,size:"12px"}})],1):r("div",[r("div",{staticClass:"formWidth mx-auto"},[r("div",{staticClass:"title-m-600 text-primary-dark my-4"},[e._v("Contract Information")]),e._v(" "),r("ValidationObserver",{ref:"observer",staticClass:"formWidth",attrs:{tag:"div"}},[r("form",{staticClass:"flex flex-col pb-10 space-y-8 justify-items-stretch",on:{submit:function(t){return t.preventDefault(),e.store.apply(null,arguments)}}},[r("ValidationProvider",{attrs:{name:"Service",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseSelect",{attrs:{label:"Contract Type",options:e.contractTypes,"show-description":!0,error:n.length>0?n[0]:""},on:{input:e.onContractChange},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})]}}],null,!1,3122858457)}),e._v(" "),r("ValidationProvider",{attrs:{name:"Service",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseSelect",{attrs:{label:"Service Type",options:null==e.form.type?[]:e.services,"show-description":!0,error:n.length>0?n[0]:""},model:{value:e.form.service_id,callback:function(t){e.$set(e.form,"service_id",t)},expression:"form.service_id"}})]}}],null,!1,1168687430)}),e._v(" "),r("div",{staticClass:"flex flex-col md:flex-row items-start justify-between space-x-0 md:space-x-4 space-y-4 md:space-y-0"},[r("ValidationProvider",{staticClass:"w-full",attrs:{rules:"required",name:"Starting Date",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseInput",{attrs:{label:"Starting Date",type:"date",error:n.length>0?n[0]:""},model:{value:e.form.start,callback:function(t){e.$set(e.form,"start",t)},expression:"form.start"}},[r("template",{slot:"leftIcon"},[r("CalendarIcon",{staticClass:"text-primary"})],1)],2)]}}],null,!1,2614267600)}),e._v(" "),r("ValidationProvider",{staticClass:"w-full",attrs:{rules:"required",name:"Ending Date",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseInput",{attrs:{label:"Ending Date",type:"date",error:n.length>0?n[0]:""},model:{value:e.form.end,callback:function(t){e.$set(e.form,"end",t)},expression:"form.end"}},[r("template",{slot:"leftIcon"},[r("CalendarIcon",{staticClass:"text-primary"})],1)],2)]}}],null,!1,3044491760)})],1),e._v(" "),r("div",[r("InputLabel",{staticClass:"mb-4",attrs:{text:"Days & Time Required"}}),e._v(" "),e._l(e.days,(function(t){return r("DayItem",{key:t,staticClass:"mb-3",attrs:{day:t,"value-from":e.form.required_days[t].from,"value-to":e.form.required_days[t].to},on:{fromChange:e.onFromChange,toChange:e.onToChange}})}))],2),e._v(" "),r("ValidationProvider",{staticClass:"w-full",attrs:{name:"Expectations",rules:"required|max:500",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseTextArea",{attrs:{label:"Expectations",error:n.length?n[0]:""},model:{value:e.form.special_instructions,callback:function(t){e.$set(e.form,"special_instructions",t)},expression:"form.special_instructions"}})]}}],null,!1,105857436)}),e._v(" "),r("ValidationProvider",{staticClass:"w-full",attrs:{name:"ServiceDetails",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",{staticClass:"body-m-700 text-primary-dark"},[e._v("Will involve the following:")]),e._v(" "),r("div",e._l(e.serviceDetails,(function(t){return r("BaseCheckbox",{key:t.id,staticClass:"mt-2",attrs:{label:t.name,"initial-value":t.checked},on:{input:function(r){return e.onCheckboxChange(r,t)}}},[r("template",{slot:"leftIcon"},[r("ServiceBadgeSelector",{staticClass:"pr-1",attrs:{name:t.name,"icon-name":t.icon_name}})],1)],2)})),1)]}}],null,!1,2316148834)}),e._v(" "),r("BaseButton",{staticClass:"w-48",attrs:{text:"Submit",disabled:e.disabled,loading:e.loading,type:"submit"}})],1)])],1)])}),[],!1,null,"1e8d1dd4",null);t.default=component.exports},714:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"e",(function(){return c})),r.d(t,"a",(function(){return d}));var n="SHIFT",o="HOURLY_CONTRACT",l="SALARY_CONTRACT",c="SHORT_TERM_CONTRACT",d="CONTRACT"},950:function(e,t,r){var content=r(1037);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("52912562",content,!0,{sourceMap:!1})}}]);