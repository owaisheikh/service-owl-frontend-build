(window.webpackJsonp=window.webpackJsonp||[]).push([[53,32,52,67,134,159,198,202,204],{1e3:function(t,e,n){"use strict";n.r(e);n(31),n(22),n(21),n(14),n(42),n(27),n(43);var r=n(2),c=n(16),l=(n(8),n(28)),o=n(698),f=n(744),d=n(898),C=n(763);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"ClientCanceledList",components:{PulseLoader:o.a,EmptyList:f.default,ClientCanceledItem:d.default},data:function(){return{loading:!1}},computed:v({},Object(l.e)({canceled:function(t){return t.canceled.items}})),mounted:function(){this.fetchClientCanceled()},methods:v(v({},Object(l.b)({getCanceled:"canceled/getClientCanceled"})),{},{fetchClientCanceled:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$auth.user.client){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t.loading=!0,n={clientUuid:t.$auth.user.client.uuid,statusFilter:C.b},e.next=7,t.getCanceled(n);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t.$toast.showMessage({title:"Something went wrong",message:"Sorry something went wrong when we were pulling jobs data.",type:"danger"});case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))()}})},h=n(5),component=Object(h.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("div",{staticClass:"w-full flex h-screen pt-20 justify-center items-center px-2"},[n("PulseLoader",{attrs:{loading:!0,color:t.appBranding.primary,size:"12px"}})],1):n("div",{staticClass:"px-4 md:px-12 py-10"},[n("div",{staticClass:"flex flex-col pb-8"},[0===t.canceled.length?n("EmptyList",{attrs:{"is-contract":!1}}):t._l(t.canceled,(function(t){return n("ClientCanceledItem",{key:t.id,attrs:{job:t}})}))],2)])])}),[],!1,null,null,null);e.default=component.exports},697:function(t,e,n){var content=n(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("3af0a2a6",content,!0,{sourceMap:!1})},698:function(t,e,n){"use strict";var r={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},c=(n(701),n(5)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-pulse v-pulse1",style:[t.spinnerStyle,t.spinnerDelay1]}),n("div",{staticClass:"v-pulse v-pulse2",style:[t.spinnerStyle,t.spinnerDelay2]}),n("div",{staticClass:"v-pulse v-pulse3",style:[t.spinnerStyle,t.spinnerDelay3]})])}),[],!1,null,null,null);e.a=component.exports},701:function(t,e,n){"use strict";n(697)},702:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),r.locals={},t.exports=r},704:function(t,e,n){"use strict";var r=n(18),c=n(11),l=n(7),o=n(147),f=n(24),d=n(19),C=n(431),m=n(60),v=n(106),y=n(430),h=n(9),L=n(107).f,_=n(52).f,M=n(23).f,x=n(710),S=n(708).trim,w="Number",E=c.Number,j=E.prototype,O=c.TypeError,I=l("".slice),N=l("".charCodeAt),Z=function(t){var e=y(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,n,r,c,l,o,f,code,d=y(t,"number");if(v(d))throw O("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=S(d),43===(e=N(d,0))||45===e){if(88===(n=N(d,2))||120===n)return NaN}else if(48===e){switch(N(d,1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+d}for(o=(l=I(d,2)).length,f=0;f<o;f++)if((code=N(l,f))<48||code>c)return NaN;return parseInt(l,r)}return+d};if(o(w,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var D,A=function(t){var e=arguments.length<1?0:E(Z(t)),n=this;return m(j,n)&&h((function(){x(n)}))?C(Object(e),n,A):e},P=r?L(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;P.length>R;R++)d(E,D=P[R])&&!d(A,D)&&M(A,D,_(E,D));A.prototype=j,j.constructor=A,f(c,w,A,{constructor:!0})}},708:function(t,e,n){var r=n(7),c=n(39),l=n(20),o=n(709),f=r("".replace),d="["+o+"]",C=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t){return function(e){var n=l(c(e));return 1&t&&(n=f(n,C,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},709:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},710:function(t,e,n){var r=n(7);t.exports=r(1..valueOf)},714:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return f}));var r="SHIFT",c="HOURLY_CONTRACT",l="SALARY_CONTRACT",o="SHORT_TERM_CONTRACT",f="CONTRACT"},720:function(t,e,n){"use strict";n.r(e);n(704);var r={name:"JobTypeBadge",props:{type:{type:String,required:!0},price:{type:Number,default:null}},computed:{hasLeftIcon:function(){return!!this.$slots.leftIcon}}},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-1 px-2 bg-black-light-5 rounded-md flex items-center justify-center"},[t._t("leftIcon"),t._v(" "),n("span",{staticClass:"body-m-400",class:t.hasLeftIcon?"pl-2":""},[t._v(t._s(t.type))]),t._v(" "),t.price?n("span",{staticClass:"body-m-600 pl-1"},[t._v(" "+t._s(" - $ "+t.price))]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},722:function(t,e,n){"use strict";n.r(e);n(53);var r={name:"ServicesBadges",components:{ServiceBadgeSelector:n(736).default},props:{services:{type:Array,required:!0}},computed:{length:function(){return this.services?this.services.length:0},firstServices:function(){return this.length>3?this.services.slice(0,3):this.services}}},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-center"},[t._l(t.firstServices,(function(t){return n("ServiceBadgeSelector",{key:t.id,staticClass:"pr-1",attrs:{name:t.name,"icon-name":t.icon_name}})})),t._v(" "),t.length>3?n("div",{staticClass:"pl-2 body-m-700"},[t._v("+ "+t._s(t.length-3))]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},730:function(t,e,n){var content=n(743);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("3077b034",content,!0,{sourceMap:!1})},732:function(t,e,n){"use strict";n.r(e);var r={name:"HourlyContractIcon"},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M2.23525 10.033L2.72204 9.91886L2.23525 10.033ZM2.23525 5.96695L2.72204 6.08114L2.23525 5.96695ZM13.7647 5.96696L13.278 6.08114L13.7647 5.96696ZM13.7647 10.033L13.278 9.91886L13.7647 10.033ZM10.033 13.7648L10.1472 14.2515L10.033 13.7648ZM5.96696 13.7647L6.08114 13.278L5.96696 13.7647ZM5.96696 2.23525L6.08114 2.72204L5.96696 2.23525ZM10.033 2.23525L10.1472 1.74846L10.033 2.23525ZM2.72204 9.91886C2.42599 8.65675 2.42599 7.34325 2.72204 6.08114L1.74846 5.85277C1.41718 7.26509 1.41718 8.73491 1.74846 10.1472L2.72204 9.91886ZM13.278 6.08114C13.574 7.34325 13.574 8.65675 13.278 9.91886L14.2515 10.1472C14.5828 8.73491 14.5828 7.26509 14.2515 5.85277L13.278 6.08114ZM9.91886 13.278C8.65675 13.574 7.34325 13.574 6.08114 13.278L5.85277 14.2515C7.26509 14.5828 8.73491 14.5828 10.1472 14.2515L9.91886 13.278ZM6.08114 2.72204C7.34325 2.42599 8.65675 2.42599 9.91886 2.72204L10.1472 1.74846C8.73491 1.41718 7.26509 1.41718 5.85277 1.74846L6.08114 2.72204ZM6.08114 13.278C4.41441 12.887 3.113 11.5856 2.72204 9.91886L1.74846 10.1472C2.22616 12.1837 3.81628 13.7738 5.85277 14.2515L6.08114 13.278ZM10.1472 14.2515C12.1837 13.7738 13.7738 12.1837 14.2515 10.1472L13.278 9.91886C12.887 11.5856 11.5856 12.887 9.91886 13.278L10.1472 14.2515ZM9.91886 2.72204C11.5856 3.113 12.887 4.4144 13.278 6.08114L14.2515 5.85277C13.7738 3.81628 12.1837 2.22616 10.1472 1.74846L9.91886 2.72204ZM5.85277 1.74846C3.81627 2.22616 2.22616 3.81627 1.74846 5.85277L2.72204 6.08114C3.113 4.4144 4.4144 3.113 6.08114 2.72204L5.85277 1.74846Z",fill:"#1C1D1B"}}),t._v(" "),n("path",{attrs:{d:"M9.3984 10.0885C9.63138 10.2368 9.94042 10.1681 10.0887 9.93507C10.2369 9.70209 10.1682 9.39305 9.93522 9.24482L9.3984 10.0885ZM7.77441 8.4626H7.27441C7.27441 8.63356 7.36176 8.79267 7.50601 8.88445L7.77441 8.4626ZM8.27441 6C8.27441 5.72386 8.05056 5.5 7.77441 5.5C7.49827 5.5 7.27441 5.72386 7.27441 6H8.27441ZM9.93522 9.24482L8.04282 8.04075L7.50601 8.88445L9.3984 10.0885L9.93522 9.24482ZM8.27441 8.4626V6H7.27441V8.4626H8.27441Z",fill:"#1C1D1B"}})])}),[],!1,null,null,null);e.default=component.exports},733:function(t,e,n){"use strict";n.r(e);var r={name:"SalaryContractIcon"},c=n(5),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2.55568 10.6657L3.04304 10.554L2.55568 10.6657ZM2.55568 6.73549L3.04304 6.84719L2.55568 6.73549ZM13.4446 6.73549L12.9573 6.84719L13.4446 6.73549ZM13.4446 10.6657L12.9573 10.554L13.4446 10.6657ZM9.92026 14.2726L10.037 14.7588L9.92026 14.2726ZM6.08007 14.2726L6.19678 13.7864L6.08007 14.2726ZM6.08007 3.12853L6.19678 3.61472L6.08007 3.12853ZM9.92026 3.12853L10.037 2.64234L9.92026 3.12853ZM5.88022 2.5C5.88022 2.22386 5.65636 2 5.38022 2C5.10407 2 4.88022 2.22386 4.88022 2.5H5.88022ZM4.88022 4.17583C4.88022 4.45197 5.10407 4.67583 5.38022 4.67583C5.65636 4.67583 5.88022 4.45197 5.88022 4.17583H4.88022ZM11.1201 2.5C11.1201 2.22386 10.8963 2 10.6201 2C10.344 2 10.1201 2.22386 10.1201 2.5H11.1201ZM10.1201 4.17583C10.1201 4.45197 10.344 4.67583 10.6201 4.67583C10.8963 4.67583 11.1201 4.45197 11.1201 4.17583H10.1201ZM3.04304 10.554C2.76365 9.33495 2.76365 8.06619 3.04304 6.84719L2.06832 6.62378C1.75522 7.98981 1.75522 9.41133 2.06832 10.7774L3.04304 10.554ZM12.9573 6.84719C13.2367 8.06619 13.2367 9.33495 12.9573 10.554L13.932 10.7774C14.2451 9.41133 14.2451 7.98981 13.932 6.62379L12.9573 6.84719ZM9.80354 13.7864C8.61734 14.0712 7.38299 14.0712 6.19678 13.7864L5.96335 14.7588C7.303 15.0804 8.69733 15.0804 10.037 14.7588L9.80354 13.7864ZM6.19678 3.61472C7.38299 3.32995 8.61734 3.32995 9.80355 3.61472L10.037 2.64234C8.69733 2.32074 7.303 2.32074 5.96335 2.64234L6.19678 3.61472ZM6.19678 13.7864C4.63754 13.4121 3.41195 12.1635 3.04304 10.554L2.06832 10.7774C2.5198 12.7472 4.02509 14.2935 5.96335 14.7588L6.19678 13.7864ZM10.037 14.7588C11.9752 14.2935 13.4805 12.7472 13.932 10.7774L12.9573 10.554C12.5884 12.1635 11.3628 13.4121 9.80354 13.7864L10.037 14.7588ZM9.80355 3.61472C11.3628 3.98903 12.5884 5.23761 12.9573 6.84719L13.932 6.62379C13.4805 4.65393 11.9752 3.10765 10.037 2.64234L9.80355 3.61472ZM5.96335 2.64234C4.02509 3.10765 2.5198 4.65392 2.06832 6.62378L3.04304 6.84719C3.41195 5.23761 4.63754 3.98903 6.19678 3.61472L5.96335 2.64234ZM2.76027 6.51924H13.2401V5.51924H2.76027V6.51924ZM4.88022 2.5V4.17583H5.88022V2.5H4.88022ZM10.1201 2.5V4.17583H11.1201V2.5H10.1201Z",fill:"#1C1D1B"}})])}),[],!1,null,null,null);e.default=component.exports},742:function(t,e,n){"use strict";n(730)},743:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".badge[data-v-8a5d7fbc]{display:inline-block;border-radius:0.75rem;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem}",""]),r.locals={},t.exports=r},745:function(t,e,n){"use strict";n.r(e);var r={name:"Status",props:{status:{type:String,default:"PENDING"},isCancelBadge:{type:Boolean,default:!1}},computed:{statusColor:function(){switch(this.status){case"ASSIGNED":return"bg-assigned";case"CANCELED":return this.isCancelBadge?"bg-canceled  uppercase text-secondary-dark font-bold":"bg-canceled";case"IN_PROGRESS":return"bg-inProgress";case"COMPLETED":return"bg-completed text-white";default:return"bg-pending"}},statusName:function(){switch(this.status){case"ASSIGNED":return"Assigned";case"CANCELED":return"Canceled";case"IN_PROGRESS":return"In progress";case"COMPLETED":return"Completed";default:return"Pending"}}}},c=(n(742),n(5)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"badge",class:t.statusColor},[t._v(t._s(t.statusName))])}),[],!1,null,"8a5d7fbc",null);e.default=component.exports},763:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return C})),n.d(e,"b",(function(){return m}));var r="ACTIVE",c="PENDING",l="SALARY",o="COMPLETED",f="INCOMPLETE",d="IN_PROGRESS",C="CONTRACT",m="CANCELED"},898:function(t,e,n){"use strict";n.r(e);var r=n(720),c=n(722),l=n(733),o=n(732),f=n(745),d=n(714),C={name:"ClientCancelItem",components:{JobTypeBadge:r.default,SalaryContractIcon:l.default,ServicesBadges:c.default,HourlyContractIcon:o.default,Status:f.default},props:{job:{type:Object,required:!0}},computed:{nanny:function(){return this.job.nanny},status:function(){return this.job.status},contract:function(){return this.job?this.job.contract:null},service:function(){return this.job?this.job.service:null},shift:function(){return this.job?this.job.shift:null},isHourlyContract:function(){return this.job.type===d.b},isSalaryContract:function(){return this.job.type===d.c},isShortTermContract:function(){return this.job.type===d.e}},methods:{}},m=n(5),component=Object(m.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col relative md:flex-row items-start justify-between bg-white py-5 px-6 mb-4 border border-danger-red rounded-md space-y-4 md:space-y-0"},[n("div",{staticClass:"space-y-3"},[n("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center justify-start space-x-0 md:space-x-5 space-y-2 md:space-y-0"},[n("span",{staticClass:"body-l-700"},[t._v(t._s(t.nanny?t.nanny.full_name:"No nanny assigned"))]),t._v(" "),t.shift?n("span",{staticClass:"body-l-400"},[t._v(t._s(t.shift?t.shift.parsed_time:""))]):n("span",{staticClass:"body-l-400"},[t._v(t._s(t.contract?t.contract.parsed_start_time:""))]),t._v(" "),n("JobTypeBadge",{attrs:{type:t.service?t.service.name:"",price:t.service?t.service.rate:"Not available"}},[t.isHourlyContract||t.isShortTermContract?n("HourlyContractIcon",{attrs:{slot:"leftIcon"},slot:"leftIcon"}):t.isSalaryContract?n("SalaryContractIcon",{attrs:{slot:"leftIcon"},slot:"leftIcon"}):t._e()],1)],1),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center justify-start space-y-2 md:space-y-0"},[t.job.services&&t.job.services.length>0?n("ServicesBadges",{staticClass:"pr-6",attrs:{services:t.job.services}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center justify-center space-x-0 md:space-x-2 space-y-2 md:space-y-0 h-full pt-2"},[n("Status",{attrs:{status:t.status,isCancelBadge:!0}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);