(window.webpackJsonp=window.webpackJsonp||[]).push([[217,41,45,87,91,110,119,125,129,137,146,175,176],{1044:function(t,e,r){"use strict";r(954)},1045:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".nuxt-link-exact-active[data-v-6f2667eb]{color:var(--primary-default-color)}.formWidth[data-v-6f2667eb]{width:450px}@media only screen and (max-width:430px){.formWidth[data-v-6f2667eb]{width:350px}}@media only screen and (max-width:320px){.formWidth[data-v-6f2667eb]{width:300px}}",""]),n.locals={},t.exports=n},1129:function(t,e,r){"use strict";r.r(e);r(21),r(42),r(43);var n=r(2),o=r(16),c=(r(8),r(14),r(432),r(27),r(31),r(61),r(33),r(22),r(56),r(28)),l=r(759),d=r(789),f=r(786),h=r(883),m=r(757),v=r(41),y=r(714);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"Step2ClientApplication",components:{ServiceType:h.default,ApplicationHeader:l.default,ApplicationFooter:d.default,StepsNav:f.default,LeftChevronIcon:m.default},layout:"guest",data:function(){return{loading:!1,isCasualShift:!1,agency_name_local:"",fetched:0,services:[]}},computed:L(L({},Object(c.e)({clientApplication:function(t){return t.applications.client}})),{},{disabled:function(){return!this.isCasualShift&&!this.services.some((function(t){return 1==t.selected}))||!!this.isCasualShift&&!(this.services.find((function(t){return t.id===y.d})).subscriptions.some((function(t){return 1==t.selected}))||this.services.some((function(t){return 1==t.selected})))},shiftSubscriptions:function(){return this.services.find((function(s){return s.id===y.d})).subscriptions}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchShiftSubscriptions();case 2:case"end":return e.stop()}}),e)})))()},methods:L(L(L({},Object(c.d)({setClient:"applications/SET_CLIENT"})),Object(c.b)({storeApplication:"applications/store"})),{},{unselectAll:function(){this.services.forEach((function(t){t.subscriptions&&t.subscriptions.forEach((function(t){return t.selected=!1})),t.selected=!1})),this.isCasualShift=!1},select:function(t){var e=this;t.id===y.d?this.isCasualShift=!0:t.id!==y.b&&t.id!==y.c||(this.isCasualShift=!1),this.services.forEach((function(t){t.selected=!1,t.subscriptions&&t.subscriptions.length&&t.subscriptions.forEach((function(t){return t.selected=!1}))})),"Hunny Nanny Agency"!==this.agency_name_local?this.services.forEach((function(r){e.isCasualShift?e.services.find((function(t){return t.id===y.d})).subscriptions.forEach((function(e){e.id===t.id?e.selected=!0:e.selected=!1})):r.id==t.id?r.selected=!0:r.selected=!1})):this.services.forEach((function(e){e.id==t.id?e.selected=!0:e.selected=!1}))},store:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var form,r,n,o,c,l,d,f,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(form={},t.isCasualShift?"Hunny Nanny Agency"!==t.agency_name_local?(n=t.services.find((function(t){return t.id})),o=n.subscriptions.find((function(t){return!0===t.selected})),form.job_type=y.d,form.subscription_uuid="non-member"===o.id?null:o.id):(form.job_type=y.d,form.subscription_uuid=null):(r=t.services.find((function(t){return 1==t.selected})),form.job_type=r.id),t.setClient(form),c=t.$route.params.locationUuid,form.job_type!=y.d){e.next=20;break}return e.prev=5,t.loading=!0,e.next=9,t.storeApplication({application_type:v.b,locationUuid:c});case 9:t.isAgencyHunnyNanny||"AMP Agency"==t.agency_name?t.$router.push({path:"/applications/client/location/".concat(c,"/sent")}):t.$router.push({path:"/applications/client/location/".concat(c,"/payment")}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t.$toast.showMessage({title:"Something went wrong",message:null!==(l=null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d||null===(f=d.data)||void 0===f?void 0:f.errors[Object.keys(null===e.t0||void 0===e.t0||null===(h=e.t0.response)||void 0===h||null===(m=h.data)||void 0===m?void 0:m.errors)[0]][0])&&void 0!==l?l:"Please check the form data.",type:"danger"});case 15:return e.prev=15,t.loading=!1,e.finish(15);case 18:e.next=21;break;case 20:t.$router.push({path:"/applications/client/location/".concat(c,"/step-3")});case 21:case"end":return e.stop()}}),e,null,[[5,12,15,18]])})))()},fetchShiftSubscriptions:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params.locationUuid,e.prev=1,e.next=4,t.$axios.get("/location/".concat(t.$route.params.locationUuid));case 4:return n=e.sent,t.agency_name_local=n.data.data.agency_name,o=n.data.data.agency.agency_package.package_options.service_types,c="Hunny Nanny Agency"==t.agency_name_local,t.services=[],o.SHIFT&&t.services.push({id:y.d,selected:!1,title:c?"Casual ($25-45/hour)":"Casual ($20-26/hour)",subtitle:c?"Sitter cost for 1 child: $18.00/hour. For 2 children: $19.00/hour. For 3 children: $20/hour. There will be $25 scheduling fee for per sit request and For extended period scheduling it will be $20/day":"As-needed weekday or evening childcare based on availability with a 3 hour minimum booking. ",icon:"ClockIcon",subscriptions:[]}),o.HOURLY_CONTRACT&&t.services.push({id:y.b,selected:!1,title:"Part-time ($24+/hour)",subtitle:"Consistent, contracted childcare with a minimum 16 hours per week.",icon:"CalendarIcon"}),o.SHORT_TERM_CONTRACT&&t.services.push({id:y.e,selected:!1,title:"Short-term ",subtitle:"Consistent, contracted childcare for less than a 3 month term.",icon:"NoteIcon"}),o.SALARY_CONTRACT&&t.services.push({id:y.c,selected:!1,title:c?"Full-Time":"Full-Time (18-20% of Nanny wages)",subtitle:c?"Referral based Nanny placements.":"Referral based Nanny placements minimum 35 hours per week.",icon:"NoteIcon"}),t.fetched=1,e.next=16,t.$axios.get("/location/".concat(r,"/shift-subscriptions"));case 16:l=e.sent,(d=t.services.find((function(t){return t.id===y.d}))).subscriptions=l.data.data.map((function(t){return{id:"".concat(t.uuid),selected:!1,title:t.name,subtitle:t.description,icon:"ClockIcon"}})),d.subscriptions.unshift({selected:!1,icon:"ClockIcon",title:"Non-Member",id:"non-member",subtitle:"A $20 booking fee will be charged each time a casual shift request is required"}),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),t.$toast.showMessage({title:"Something went wrong",message:"Error while fetching subscription types",type:"danger"});case 25:case"end":return e.stop()}}),e,null,[[1,22]])})))()}})},w=(r(1044),r(5)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-[90vh] overflow-scroll"},[r("ApplicationHeader"),t._v(" "),r("div",{staticClass:"flex flex-col items-center fade-in overflow-scroll"},[r("StepsNav",{attrs:{"current-step-index":2}})],1),t._v(" "),1==t.fetched?r("div",{staticClass:"formWidth mx-auto mb-20"},[t.isCasualShift&&"Hunny Nanny Agency"!=t.agency_name_local?r("form",{on:{submit:function(e){return e.preventDefault(),t.store.apply(null,arguments)}}},[r("div",{staticClass:"flex body-l-700 text-black-dark-1 mb-8"},[r("div",{staticClass:"cursor-pointer hover:text-primary",on:{click:t.unselectAll}},[r("LeftChevronIcon")],1),t._v(" "),r("span",[t._v(" What type of casual shift subscription would you like to subscribe? ")])]),t._v(" "),t._l(t.shiftSubscriptions,(function(e){return r("div",{key:e.id},[r("ServiceType",{attrs:{service:e},on:{onClick:t.select}})],1)})),t._v(" "),r("ApplicationFooter",{attrs:{step:2,disabled:t.disabled,loading:t.loading}})],2):r("form",{on:{submit:function(e){return e.preventDefault(),t.store.apply(null,arguments)}}},[r("div",{staticClass:"body-l-700 text-black-dark-1 mb-2"},[t._v("What type of service would you like to request?")]),t._v(" "),r("h4",{staticClass:"mb-8 text-black-light-2 text-sm"},[t._v("You can choose more than one")]),t._v(" "),r("div",t._l(t.services,(function(e){return r("div",{key:e.id},[r("ServiceType",{attrs:{service:e},on:{onClick:t.select}})],1)})),0),t._v(" "),r("ApplicationFooter",{attrs:{step:2,disabled:t.disabled,loading:t.loading}})],1)]):t._e()],1)}),[],!1,null,"6f2667eb",null);e.default=component.exports},697:function(t,e,r){var content=r(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("3af0a2a6",content,!0,{sourceMap:!1})},698:function(t,e,r){"use strict";var n={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(r(701),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[r("div",{staticClass:"v-pulse v-pulse1",style:[t.spinnerStyle,t.spinnerDelay1]}),r("div",{staticClass:"v-pulse v-pulse2",style:[t.spinnerStyle,t.spinnerDelay2]}),r("div",{staticClass:"v-pulse v-pulse3",style:[t.spinnerStyle,t.spinnerDelay3]})])}),[],!1,null,null,null);e.a=component.exports},699:function(t,e,r){var content=r(707);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("8a3c3444",content,!0,{sourceMap:!1})},700:function(t,e,r){"use strict";r.r(e);var n={name:"BaseButton",components:{PulseLoader:r(698).a},props:{text:{type:String,default:""},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},btnStyle:{type:String,default:"primary"},size:{type:String,default:"medium"}},computed:{padding:function(){switch(this.size){case"small":return"px-4 py-1";case"thin":return"px-8 py-1";default:return"px-4 py-2"}},buttonType:function(){switch(this.btnStyle){case"primary":default:return"btn-primary";case"danger":return"btn-danger";case"outline":return"btn-outline";case"outline-danger":return"btn-outline-danger"}},hasLeftIcon:function(){return!!this.$slots.leftIcon},hasRightIcon:function(){return!!this.$slots.rightIcon},centerText:function(){return!1===this.hasLeftIcon&&!1===this.hasRightIcon?"justify-center items-center":"justify-between items-center"}},methods:{onClick:function(){this.$emit("click")},onMousedown:function(){this.$emit("mousedown")}}},o=(r(706),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{class:[t.buttonType,t.padding,t.centerText,{"cursor-not-allowed disabled":t.disabled}],attrs:{type:"button",disabled:t.disabled},on:{click:t.onClick,mousedown:t.onMousedown}},[t.loading?[r("PulseLoader",{attrs:{loading:!0,color:"primary"===t.btnStyle||"success"===t.btnStyle?"#ffffff":"#000000",size:"8px"}})]:[r("span",{staticClass:"mr-3 -ml-1"},[t._t("leftIcon")],2),t._v("\n    "+t._s(t.text)+"\n    "),r("span",{staticClass:"ml-3 -mr-1"},[t._t("rightIcon")],2)]],2)}),[],!1,null,"0266595c",null);e.default=component.exports},701:function(t,e,r){"use strict";r(697)},702:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),n.locals={},t.exports=n},704:function(t,e,r){"use strict";var n=r(18),o=r(11),c=r(7),l=r(147),d=r(24),f=r(19),h=r(431),m=r(60),v=r(106),y=r(430),C=r(9),L=r(107).f,x=r(52).f,w=r(23).f,_=r(710),M=r(708).trim,k="Number",Z=o.Number,S=Z.prototype,A=o.TypeError,O=c("".slice),I=c("".charCodeAt),N=function(t){var e=y(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,r,n,o,c,l,d,code,f=y(t,"number");if(v(f))throw A("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=M(f),43===(e=I(f,0))||45===e){if(88===(r=I(f,2))||120===r)return NaN}else if(48===e){switch(I(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=O(f,2)).length,d=0;d<l;d++)if((code=I(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(l(k,!Z(" 0o1")||!Z("0b1")||Z("+0x1"))){for(var E,T=function(t){var e=arguments.length<1?0:Z(N(t)),r=this;return m(S,r)&&C((function(){_(r)}))?h(Object(e),r,T):e},$=n?L(Z):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;$.length>D;D++)f(Z,E=$[D])&&!f(T,E)&&w(T,E,x(Z,E));T.prototype=S,S.constructor=T,d(o,k,T,{constructor:!0})}},706:function(t,e,r){"use strict";r(699)},707:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".btn-primary[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;background-color:var(--primary-default-color);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.btn-primary[data-v-0266595c]:hover{background-color:var(--primary-dark-color)}.btn-outline[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:var(--primary-dark-color);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));color:var(--primary-dark-color);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.disabled[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;background-color:var(--primary-light-color);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.disabled[data-v-0266595c]:hover{background-color:var(--primary-light-color)}.btn-danger[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;--tw-bg-opacity:1;background-color:rgb(219 25 32 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.btn-danger[data-v-0266595c]:hover{--tw-bg-opacity:1;background-color:rgb(137 16 20 / var(--tw-bg-opacity))}.btn-outline-danger[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(137 16 20 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(137 16 20 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}",""]),n.locals={},t.exports=n},708:function(t,e,r){var n=r(7),o=r(39),c=r(20),l=r(709),d=n("".replace),f="["+l+"]",h=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),v=function(t){return function(e){var r=c(o(e));return 1&t&&(r=d(r,h,"")),2&t&&(r=d(r,m,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},709:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},710:function(t,e,r){var n=r(7);t.exports=n(1..valueOf)},714:function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c})),r.d(e,"e",(function(){return l})),r.d(e,"a",(function(){return d}));var n="SHIFT",o="HOURLY_CONTRACT",c="SALARY_CONTRACT",l="SHORT_TERM_CONTRACT",d="CONTRACT"},721:function(t,e,r){"use strict";r.r(e);var n={name:"CalendarIcon"},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{fill:t.appBranding.primary,d:"M3.83327 15.2485L4.56432 15.0809L3.83327 15.2485ZM3.83327 9.35323L4.56432 9.52078L3.83327 9.35323ZM20.1667 9.35323L19.4357 9.52079L20.1667 9.35323ZM20.1667 15.2485L19.4357 15.0809L20.1667 15.2485ZM14.8801 20.6589L15.0552 21.3882L14.8801 20.6589ZM9.11986 20.6589L9.29493 19.9296L9.11986 20.6589ZM9.11985 3.94279L9.29493 4.67207L9.11985 3.94279ZM14.8801 3.94279L15.0552 3.21351L14.8801 3.94279ZM8.82008 3C8.82008 2.58579 8.48429 2.25 8.07008 2.25C7.65587 2.25 7.32008 2.58579 7.32008 3H8.82008ZM7.32008 5.51375C7.32008 5.92796 7.65587 6.26375 8.07008 6.26375C8.48429 6.26375 8.82008 5.92796 8.82008 5.51375H7.32008ZM16.6799 3C16.6799 2.58579 16.3441 2.25 15.9299 2.25C15.5157 2.25 15.1799 2.58579 15.1799 3H16.6799ZM15.1799 5.51375C15.1799 5.92796 15.5157 6.26375 15.9299 6.26375C16.3441 6.26375 16.6799 5.92796 16.6799 5.51375H15.1799ZM4.56432 15.0809C4.14523 13.2524 4.14523 11.3493 4.56432 9.52078L3.10223 9.18568C2.63259 11.2347 2.63259 13.367 3.10223 15.416L4.56432 15.0809ZM19.4357 9.52079C19.8548 11.3493 19.8548 13.2524 19.4357 15.0809L20.8978 15.416C21.3674 13.367 21.3674 11.2347 20.8978 9.18568L19.4357 9.52079ZM14.7051 19.9296C12.9258 20.3568 11.0742 20.3568 9.29493 19.9296L8.94478 21.3882C10.9542 21.8706 13.0458 21.8706 15.0552 21.3882L14.7051 19.9296ZM9.29493 4.67207C11.0742 4.24493 12.9258 4.24493 14.7051 4.67207L15.0552 3.21351C13.0458 2.73111 10.9542 2.73111 8.94478 3.21351L9.29493 4.67207ZM9.29493 19.9296C6.95607 19.3682 5.11769 17.4953 4.56432 15.0809L3.10223 15.416C3.77946 18.3708 6.03739 20.6902 8.94478 21.3882L9.29493 19.9296ZM15.0552 21.3882C17.9626 20.6902 20.2205 18.3708 20.8978 15.416L19.4357 15.0809C18.8823 17.4953 17.0439 19.3682 14.7051 19.9296L15.0552 21.3882ZM14.7051 4.67207C17.0439 5.23355 18.8823 7.10642 19.4357 9.52079L20.8978 9.18568C20.2205 6.23089 17.9626 3.91147 15.0552 3.21351L14.7051 4.67207ZM8.94478 3.21351C6.03739 3.91147 3.77946 6.23089 3.10223 9.18568L4.56432 9.52078C5.11769 7.10641 6.95607 5.23355 9.29493 4.67207L8.94478 3.21351ZM4.14016 9.02886H19.8598V7.52886H4.14016V9.02886ZM7.32008 3V5.51375H8.82008V3H7.32008ZM15.1799 3V5.51375H16.6799V3H15.1799Z"}})])}),[],!1,null,"4e4163a7",null);e.default=component.exports},731:function(t,e,r){"use strict";r.r(e);var n={name:"CheckIcon",props:{mycolor:{type:String,default:"fill-primary"}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"h-5 w-5",class:t.mycolor,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},734:function(t,e,r){var content=r(753);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("0cb62ab4",content,!0,{sourceMap:!1})},749:function(t,e,r){var content=r(783);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("d16febae",content,!0,{sourceMap:!1})},750:function(t,e,r){var content=r(785);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("7d6b2542",content,!0,{sourceMap:!1})},752:function(t,e,r){"use strict";r(734)},753:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".nuxt-link-exact-active[data-v-634bc2de]{color:var(--primary-default-color)}",""]),n.locals={},t.exports=n},757:function(t,e,r){"use strict";r.r(e);r(704);var n={name:"LeftChevronIcon",props:{size:{type:[String,Number],default:"24"}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:t.size,height:t.size,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"fill-primary-light-2",attrs:{d:"M9.5 12L8.96967 11.4697C8.82902 11.6103 8.75 11.8011 8.75 12C8.75 12.1989 8.82902 12.3897 8.96967 12.5303L9.5 12ZM13.9697 17.5303C14.2626 17.8232 14.7374 17.8232 15.0303 17.5303C15.3232 17.2374 15.3232 16.7626 15.0303 16.4697L13.9697 17.5303ZM15.0303 7.53033C15.3232 7.23744 15.3232 6.76256 15.0303 6.46967C14.7374 6.17678 14.2626 6.17678 13.9697 6.46967L15.0303 7.53033ZM8.96967 12.5303L13.9697 17.5303L15.0303 16.4697L10.0303 11.4697L8.96967 12.5303ZM10.0303 12.5303L15.0303 7.53033L13.9697 6.46967L8.96967 11.4697L10.0303 12.5303Z"}})])}),[],!1,null,null,null);e.default=component.exports},759:function(t,e,r){"use strict";r.r(e);var n={name:"ApplicationHeader",components:{Logo:r(754).default}},o=(r(752),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"px-8 py-5 shadow flex flex-col items-center justify-between relative bg-white"},[r("Logo",{staticClass:"p-0 absolute left-1/4 top-0"}),t._v(" "),r("p",[t._v("Application")])],1)}),[],!1,null,"634bc2de",null);e.default=component.exports},779:function(t,e,r){"use strict";r.r(e);var n={name:"ClockIcon"},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"fill-primary",attrs:{d:"M2.8876 10.033L3.37438 9.91886L2.8876 10.033ZM2.8876 5.96695L3.37438 6.08114L2.8876 5.96695ZM14.4171 5.96696L13.9303 6.08114L14.4171 5.96696ZM14.4171 10.033L13.9303 9.91886L14.4171 10.033ZM10.6854 13.7648L10.7996 14.2515L10.6854 13.7648ZM6.6193 13.7647L6.73349 13.278L6.6193 13.7647ZM6.6193 2.23525L6.73348 2.72204L6.6193 2.23525ZM10.6854 2.23525L10.7996 1.74846L10.6854 2.23525ZM3.37438 9.91886C3.07833 8.65675 3.07833 7.34325 3.37438 6.08114L2.40081 5.85277C2.06952 7.26509 2.06952 8.73491 2.40081 10.1472L3.37438 9.91886ZM13.9303 6.08114C14.2264 7.34325 14.2264 8.65675 13.9303 9.91886L14.9039 10.1472C15.2352 8.73491 15.2352 7.26509 14.9039 5.85277L13.9303 6.08114ZM10.5712 13.278C9.30909 13.574 7.9956 13.574 6.73349 13.278L6.50512 14.2515C7.91743 14.5828 9.38725 14.5828 10.7996 14.2515L10.5712 13.278ZM6.73348 2.72204C7.9956 2.42599 9.30909 2.42599 10.5712 2.72204L10.7996 1.74846C9.38726 1.41718 7.91743 1.41718 6.50511 1.74846L6.73348 2.72204ZM6.73349 13.278C5.06675 12.887 3.76535 11.5856 3.37438 9.91886L2.40081 10.1472C2.87851 12.1837 4.46862 13.7738 6.50512 14.2515L6.73349 13.278ZM10.7996 14.2515C12.8361 13.7738 14.4262 12.1837 14.9039 10.1472L13.9303 9.91886C13.5393 11.5856 12.2379 12.887 10.5712 13.278L10.7996 14.2515ZM10.5712 2.72204C12.2379 3.113 13.5393 4.4144 13.9303 6.08114L14.9039 5.85277C14.4262 3.81628 12.8361 2.22616 10.7996 1.74846L10.5712 2.72204ZM6.50511 1.74846C4.46862 2.22616 2.87851 3.81627 2.40081 5.85277L3.37438 6.08114C3.76535 4.4144 5.06675 3.113 6.73348 2.72204L6.50511 1.74846Z"}}),t._v(" "),r("path",{staticClass:"fill-primary",attrs:{d:"M10.0507 10.0885C10.2837 10.2368 10.5928 10.1681 10.741 9.93507C10.8892 9.70209 10.8205 9.39305 10.5876 9.24482L10.0507 10.0885ZM8.42676 8.4626H7.92676C7.92676 8.63356 8.01411 8.79267 8.15835 8.88445L8.42676 8.4626ZM8.92676 6C8.92676 5.72386 8.7029 5.5 8.42676 5.5C8.15062 5.5 7.92676 5.72386 7.92676 6H8.92676ZM10.5876 9.24482L8.69517 8.04075L8.15835 8.88445L10.0507 10.0885L10.5876 9.24482ZM8.92676 8.4626V6H7.92676V8.4626H8.92676Z"}})])}),[],!1,null,"41811c7a",null);e.default=component.exports},782:function(t,e,r){"use strict";r(749)},783:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".nuxt-link-exact-active[data-v-75383189]{color:var(--primary-default-color)}",""]),n.locals={},t.exports=n},784:function(t,e,r){"use strict";r(750)},785:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".nuxt-link-exact-active[data-v-7139f03d]{color:var(--primary-default-color)}.formWidth[data-v-7139f03d]{width:450px}@media only screen and (max-width:430px){.formWidth[data-v-7139f03d]{width:350px}}@media only screen and (max-width:320px){.formWidth[data-v-7139f03d]{width:300px}}",""]),n.locals={},t.exports=n},786:function(t,e,r){"use strict";r.r(e);r(704);var n={name:"ProgressDotsStep1"},o=r(5),c={name:"ProgressDotsStep2"},l={name:"ProgressDotsStep3"},d={name:"StepsNav",components:{ProgressDotsStep1:Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"102",height:"27",viewBox:"0 0 102 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M26 14L101 14",stroke:"#D3D0C5"}}),t._v(" "),r("circle",{staticClass:"stroke-primary",attrs:{cx:"13.0636",cy:"13.5004",r:"11.9352",transform:"rotate(-90 13.0636 13.5004)","stroke-width":"1.5"}}),t._v(" "),r("circle",{attrs:{cx:"53.4393",cy:"13.5007",r:"8.56085",transform:"rotate(-90 53.4393 13.5007)",fill:"#FAFAFA",stroke:"#D3D0C5"}}),t._v(" "),r("circle",{attrs:{cx:"92.4393",cy:"13.5007",r:"8.56085",transform:"rotate(-90 92.4393 13.5007)",fill:"#FAFAFA",stroke:"#D3D0C5"}})])}),[],!1,null,"b117676c",null).exports,ProgressDotsStep2:Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"95",height:"25",viewBox:"0 0 95 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M19 13L94 13",stroke:"#D3D0C5"}}),t._v(" "),r("circle",{staticClass:"stroke-primary",attrs:{cx:"48.5",cy:"12.5",r:"11.75",transform:"rotate(-90 48.5 12.5)",fill:"#FAFAFA","stroke-width":"1.5"}}),t._v(" "),r("circle",{staticClass:"fill-primary",attrs:{cx:"10.0608",cy:"12.6892",r:"9.06085",transform:"rotate(-90 10.0608 12.6892)"}}),t._v(" "),r("circle",{attrs:{cx:"85.9393",cy:"12.6892",r:"8.56085",transform:"rotate(-90 85.9393 12.6892)",fill:"#FAFAFA",stroke:"#D3D0C5"}}),t._v(" "),r("path",{attrs:{d:"M8.12573 16.1703L7.69296 16.5413C7.80125 16.6676 7.95934 16.7403 8.12573 16.7403C8.29213 16.7403 8.45022 16.6676 8.55851 16.5413L8.12573 16.1703ZM15.0728 8.94126C15.2777 8.70225 15.25 8.34241 15.011 8.13754C14.772 7.93267 14.4121 7.96035 14.2072 8.19936L15.0728 8.94126ZM5.9528 12.7594C5.74793 12.5203 5.38808 12.4927 5.14907 12.6975C4.91005 12.9024 4.88237 13.2622 5.08724 13.5013L5.9528 12.7594ZM8.55851 16.5413L15.0728 8.94126L14.2072 8.19936L7.69296 15.7994L8.55851 16.5413ZM8.55851 15.7994L5.9528 12.7594L5.08724 13.5013L7.69296 16.5413L8.55851 15.7994Z",fill:"white"}})])}),[],!1,null,"0614f824",null).exports,ProgressDotsStep3:Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"94",height:"25",viewBox:"0 0 94 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M19 13L94 13",stroke:"#D3D0C5"}}),t._v(" "),r("circle",{staticClass:"stroke-primary",attrs:{cx:"81.5",cy:"12.5",r:"11.75",transform:"rotate(-90 81.5 12.5)",fill:"#FAFAFA","stroke-width":"1.5"}}),t._v(" "),r("circle",{staticClass:"fill-primary",attrs:{cx:"10.0608",cy:"12.6892",r:"9.06085",transform:"rotate(-90 10.0608 12.6892)"}}),t._v(" "),r("path",{attrs:{d:"M8.12573 16.1703L7.69296 16.5413C7.80125 16.6676 7.95934 16.7403 8.12573 16.7403C8.29213 16.7403 8.45022 16.6676 8.55851 16.5413L8.12573 16.1703ZM15.0728 8.94126C15.2777 8.70225 15.25 8.34241 15.011 8.13754C14.772 7.93267 14.4121 7.96035 14.2072 8.19936L15.0728 8.94126ZM5.9528 12.7594C5.74793 12.5203 5.38808 12.4927 5.14907 12.6975C4.91005 12.9024 4.88237 13.2622 5.08724 13.5013L5.9528 12.7594ZM8.55851 16.5413L15.0728 8.94126L14.2072 8.19936L7.69296 15.7994L8.55851 16.5413ZM8.55851 15.7994L5.9528 12.7594L5.08724 13.5013L7.69296 16.5413L8.55851 15.7994Z",fill:"white"}}),t._v(" "),r("circle",{staticClass:"fill-primary",attrs:{cx:"44.1009",cy:"12.6892",r:"9.06085",transform:"rotate(-90 44.1009 12.6892)"}}),t._v(" "),r("path",{attrs:{d:"M42.1658 16.1703L41.733 16.5413C41.8413 16.6676 41.9994 16.7403 42.1658 16.7403C42.3322 16.7403 42.4903 16.6676 42.5985 16.5413L42.1658 16.1703ZM49.1128 8.94126C49.3177 8.70225 49.29 8.34241 49.051 8.13754C48.812 7.93267 48.4522 7.96035 48.2473 8.19936L49.1128 8.94126ZM39.9928 12.7594C39.788 12.5203 39.4281 12.4927 39.1891 12.6975C38.9501 12.9024 38.9224 13.2622 39.1273 13.5013L39.9928 12.7594ZM42.5985 16.5413L49.1128 8.94126L48.2473 8.19936L41.733 15.7994L42.5985 16.5413ZM42.5985 15.7994L39.9928 12.7594L39.1273 13.5013L41.733 16.5413L42.5985 15.7994Z",fill:"white"}})])}),[],!1,null,"5c620e0b",null).exports},props:{currentStepIndex:{type:Number,default:1},applicationType:{type:String,default:"nanny"}},data:function(){return{clientSteps:{1:"Family Information",2:"Services",3:"Contract Information"},nannySteps:{1:"Personal Information",2:"Services",3:"Experiences & References"}}},methods:{selectStep:function(t){this.stepSelected=t}}},f=(r(784),Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex formWidth items-center justify-between w-full mt-10 mb-10"},[r("h1",[t._v(t._s("nanny"==t.applicationType?t.nannySteps[t.currentStepIndex]:t.clientSteps[t.currentStepIndex]))]),t._v(" "),r("div",[r("ProgressDotsStep"+t.currentStepIndex,{tag:"component"})],1)])}),[],!1,null,"7139f03d",null));e.default=f.exports},789:function(t,e,r){"use strict";r.r(e);r(704);var n={name:"ApplicationFooter",components:{BaseButton:r(700).default},props:{step:{type:Number,default:1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{text:function(){return 1==this.step||2==this.step?"Continue":"Submit"}},methods:{back:function(){this.$router.push({path:"step-".concat(this.step-1)})},onClick:function(){this.$emit("onSubmit")}}},o=(r(782),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"pr-8 md:pr-40 px-8 py-5 shadow flex space-x-2 items-center justify-end fixed left-0 bottom-0 w-full bg-white border-t",style:t.agencyBrandingColorStyle},[1!=t.step?r("BaseButton",{staticClass:"w-48 flex-shrink-0",attrs:{text:"Back to Step "+(t.step-1),"btn-style":"outline"},on:{click:t.back}}):t._e(),t._v(" "),r("BaseButton",{staticClass:"w-48",attrs:{text:t.text,disabled:t.disabled,loading:t.loading,type:"submit"},on:{click:t.onClick}})],1)}),[],!1,null,"75383189",null);e.default=component.exports},796:function(t,e,r){"use strict";r.r(e);var n={name:"NoteIcon"},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"fill-primary",attrs:{d:"M3.35288 15.3117L4.08229 15.1372L3.35288 15.3117ZM3.35288 9.33297L4.08229 9.50752L3.35288 9.33297ZM20.6471 9.33298L19.9177 9.50752L20.6471 9.33298ZM20.6471 15.3117L19.9177 15.1372L20.6471 15.3117ZM15.0496 20.7988L14.8815 20.0679L15.0496 20.7988ZM8.95044 20.7988L8.78237 21.5297L8.95044 20.7988ZM8.95043 3.84591L9.1185 4.57684L8.95043 3.84591ZM15.0496 3.84591L14.8815 4.57684L15.0496 3.84591ZM4.08229 15.1372C3.63924 13.2857 3.63924 11.359 4.08229 9.50752L2.62347 9.15843C2.12551 11.2394 2.12551 13.4053 2.62347 15.4863L4.08229 15.1372ZM19.9177 9.50752C20.3608 11.359 20.3608 13.2857 19.9177 15.1372L21.3765 15.4863C21.8745 13.4053 21.8745 11.2394 21.3765 9.15844L19.9177 9.50752ZM14.8815 20.0679C12.9863 20.5036 11.0137 20.5036 9.1185 20.0679L8.78237 21.5297C10.8988 22.0164 13.1012 22.0164 15.2176 21.5297L14.8815 20.0679ZM9.1185 4.57684C11.0137 4.14105 12.9863 4.14105 14.8815 4.57684L15.2176 3.11498C13.1012 2.62834 10.8988 2.62834 8.78237 3.11499L9.1185 4.57684ZM9.1185 20.0679C6.61229 19.4916 4.66599 17.5765 4.08229 15.1372L2.62347 15.4863C3.34276 18.4922 5.73374 20.8287 8.78237 21.5297L9.1185 20.0679ZM15.2176 21.5297C18.2663 20.8287 20.6572 18.4922 21.3765 15.4863L19.9177 15.1372C19.334 17.5765 17.3877 19.4916 14.8815 20.0679L15.2176 21.5297ZM14.8815 4.57684C17.3877 5.15311 19.334 7.06823 19.9177 9.50752L21.3765 9.15844C20.6572 6.15253 18.2663 3.81598 15.2176 3.11498L14.8815 4.57684ZM8.78237 3.11499C5.73373 3.81598 3.34276 6.15252 2.62347 9.15843L4.08229 9.50752C4.66599 7.06823 6.61228 5.15311 9.1185 4.57684L8.78237 3.11499ZM14.8305 21.5C14.8305 20.0363 14.8322 19.0154 14.9378 18.2451C15.0403 17.498 15.2278 17.0993 15.5196 16.8132L14.4696 15.742C13.8474 16.352 13.5778 17.1223 13.4518 18.0413C13.3289 18.9372 13.3305 20.0795 13.3305 21.5H14.8305ZM20.3222 14.6316C18.8718 14.6316 17.7101 14.63 16.7998 14.75C15.8695 14.8726 15.0897 15.1341 14.4696 15.742L15.5196 16.8132C15.8135 16.5251 16.2264 16.3385 16.9958 16.2371C17.7852 16.1331 18.8302 16.1316 20.3222 16.1316V14.6316Z"}}),t._v(" "),r("path",{staticClass:"fill-primary",attrs:{d:"M9 8.75C8.58579 8.75 8.25 9.08579 8.25 9.5C8.25 9.91421 8.58579 10.25 9 10.25V8.75ZM12 10.25C12.4142 10.25 12.75 9.91421 12.75 9.5C12.75 9.08579 12.4142 8.75 12 8.75V10.25ZM9 11.75C8.58579 11.75 8.25 12.0858 8.25 12.5C8.25 12.9142 8.58579 13.25 9 13.25V11.75ZM14 13.25C14.4142 13.25 14.75 12.9142 14.75 12.5C14.75 12.0858 14.4142 11.75 14 11.75V13.25ZM9 10.25H12V8.75H9V10.25ZM9 13.25H14V11.75H9V13.25Z"}})])}),[],!1,null,null,null);e.default=component.exports},806:function(t,e,r){var content=r(849);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("a3516e54",content,!0,{sourceMap:!1})},848:function(t,e,r){"use strict";r(806)},849:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".selected[data-v-ce525156]{border-width:2px;border-color:var(--primary-default-color)}",""]),n.locals={},t.exports=n},883:function(t,e,r){"use strict";r.r(e);var n=r(779),o=r(721),c=r(796),l=r(731),d={name:"ServiceType",components:{ClockIcon:n.default,CalendarIcon:o.default,NoteIcon:c.default,CheckIcon:l.default},props:{service:{type:Object,default:function(){}}}},f=(r(848),r(5)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rounded-xl bg-white p-4 shadow-md mb-10 border-2 border-transparent cursor-pointer",class:t.service.selected?"border-primary border-2":"",on:{click:function(e){return t.$emit("onClick",t.service)}}},[r("div",{staticClass:"flex items-center justify-between mb-3"},[r("div",{staticClass:"flex items-center justify-between space-x-2"},[r(t.service.icon,{tag:"component",staticClass:"text-primary w-7 h-7"}),t._v(" "),r("div",{staticClass:"title-m-700"},[t._v(t._s(t.service.title))])],1),t._v(" "),t.service.selected?r("div",{staticClass:"bg-primary p-1 rounded-full flex items-center justify-center"},[r("CheckIcon",{staticClass:"h-4 w-4",attrs:{mycolor:"fill-white"}})],1):t._e()]),t._v(" "),r("div",{staticClass:"body-m-400"},[t._v(t._s(t.service.subtitle))])])}),[],!1,null,"ce525156",null);e.default=component.exports},954:function(t,e,r){var content=r(1045);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("468f37a8",content,!0,{sourceMap:!1})}}]);