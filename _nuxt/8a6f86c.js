(window.webpackJsonp=window.webpackJsonp||[]).push([[60,33,59,200],{697:function(t,e,n){var content=n(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("3af0a2a6",content,!0,{sourceMap:!1})},698:function(t,e,n){"use strict";var r={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(n(701),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-pulse v-pulse1",style:[t.spinnerStyle,t.spinnerDelay1]}),n("div",{staticClass:"v-pulse v-pulse2",style:[t.spinnerStyle,t.spinnerDelay2]}),n("div",{staticClass:"v-pulse v-pulse3",style:[t.spinnerStyle,t.spinnerDelay3]})])}),[],!1,null,null,null);e.a=component.exports},701:function(t,e,n){"use strict";n(697)},702:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),r.locals={},t.exports=r},704:function(t,e,n){"use strict";var r=n(18),o=n(11),c=n(7),l=n(147),f=n(25),m=n(19),d=n(431),y=n(60),h=n(106),v=n(430),x=n(9),w=n(107).f,j=n(52).f,I=n(24).f,_=n(710),C=n(708).trim,O="Number",N=o.Number,S=N.prototype,E=o.TypeError,k=c("".slice),D=c("".charCodeAt),J=function(t){var e=v(t,"number");return"bigint"==typeof e?e:P(e)},P=function(t){var e,n,r,o,c,l,f,code,m=v(t,"number");if(h(m))throw E("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=C(m),43===(e=D(m,0))||45===e){if(88===(n=D(m,2))||120===n)return NaN}else if(48===e){switch(D(m,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+m}for(l=(c=k(m,2)).length,f=0;f<l;f++)if((code=D(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+m};if(l(O,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var L,T=function(t){var e=arguments.length<1?0:N(J(t)),n=this;return y(S,n)&&x((function(){_(n)}))?d(Object(e),n,T):e},$=r?w(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;$.length>A;A++)m(N,L=$[A])&&!m(T,L)&&I(T,L,j(N,L));T.prototype=S,S.constructor=T,f(o,O,T,{constructor:!0})}},708:function(t,e,n){var r=n(7),o=n(39),c=n(20),l=n(709),f=r("".replace),m="["+l+"]",d=RegExp("^"+m+m+"*"),y=RegExp(m+m+"*$"),h=function(t){return function(e){var n=c(o(e));return 1&t&&(n=f(n,d,"")),2&t&&(n=f(n,y,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},709:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},710:function(t,e,n){var r=n(7);t.exports=r(1..valueOf)},720:function(t,e,n){"use strict";n.r(e);n(704);var r={name:"JobTypeBadge",props:{type:{type:String,required:!0},price:{type:Number,default:null}},computed:{hasLeftIcon:function(){return!!this.$slots.leftIcon}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-1 px-2 bg-black-light-5 rounded-md flex items-center justify-center"},[t._t("leftIcon"),t._v(" "),n("span",{staticClass:"body-m-400",class:t.hasLeftIcon?"pl-2":""},[t._v(t._s(t.type))]),t._v(" "),t.price?n("span",{staticClass:"body-m-600 pl-1"},[t._v(" "+t._s(" - $ "+t.price))]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},896:function(t,e,n){"use strict";n.r(e);n(53);var r={name:"ClientIncompleteItem",components:{JobTypeBadge:n(720).default},props:{job:{type:Object,required:!0}},computed:{nanny:function(){return this.job.nanny},shift:function(){return this.job.shift},contract:function(){return this.job.contract},jobIsContract:function(){return null!==this.job.contract&&void 0!==this.job.contract},truncatedShiftNotes:function(){return this.shift&&this.shift.notes?this.shift.notes.length>50?this.shift.notes.slice(0,50)+"...":this.shift.notes:""},truncatedContractNotes:function(){return this.contract&&this.contract.notes?this.contract.notes.length>50?this.contract.notes.slice(0,50)+"...":this.contract.notes:""},service:function(){return this.job.service?this.job.service:null}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col md:flex-row items-start justify-between bg-white py-5 px-6 mb-4 border border-[#D3D0C5] rounded-md space-y-4 md:space-y-0"},[n("div",{staticClass:"space-y-2"},[n("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center justify-start space-x-0 md:space-x-5 space-y-3 md:space-y-0"},[n("span",{staticClass:"body-l-400"},[t._v(t._s(t.shift?t.shift.parsed_time:""))]),t._v(" "),n("JobTypeBadge",{attrs:{type:t.service?t.service.name:""}})],1),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center justify-start space-y-2 md:space-y-0 space-x-2"})])])}),[],!1,null,null,null);e.default=component.exports},998:function(t,e,n){"use strict";n.r(e);n(31),n(22),n(21),n(14),n(42),n(28),n(43);var r=n(2),o=n(16),c=(n(8),n(23)),l=n(698),f=n(896),m=n(746),d=n(70);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"ClientIncompleteJobsList",components:{ClientIncompleteItem:f.default,PulseLoader:l.a,EmptyList:m.default},data:function(){return{loading:!1}},computed:h({},Object(c.e)({incompleteJobs:function(t){return t.incompleteJobs.items}})),mounted:function(){this.fetchClientIncompleteJobs()},methods:h(h({},Object(c.b)({getIncompleteJobs:"incompleteJobs/getClientIncompleteJobs"})),{},{fetchClientIncompleteJobs:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$auth.user.client){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t.loading=!0,n={clientUuid:t.$auth.user.client.uuid,status:d.f},e.next=7,t.getIncompleteJobs(n);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t.$toast.showMessage({title:"Something went wrong",message:"Sorry something went wrong when we were pulling jobs data.",type:"danger"});case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))()}})},x=n(5),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("div",{staticClass:"w-full flex h-screen pt-20 justify-center items-center px-2"},[n("PulseLoader",{attrs:{loading:!0,color:t.appBranding.primary,size:"12px"}})],1):n("div",{staticClass:"px-4 md:px-12 py-8"},[n("h1",{staticClass:"text-lg heading-m-700 pb-10"},[t._v("Incomplete Jobs")]),t._v(" "),n("div",{staticClass:"flex flex-col pb-8"},[0===t.incompleteJobs.length?n("EmptyList"):t._l(t.incompleteJobs,(function(t){return n("ClientIncompleteItem",{key:t.id,attrs:{job:t}})}))],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);