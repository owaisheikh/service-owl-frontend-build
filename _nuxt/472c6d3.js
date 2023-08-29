(window.webpackJsonp=window.webpackJsonp||[]).push([[49,86,90,118,192,201,203,257,260,261],{1101:function(t,e,n){"use strict";n.r(e);n(31),n(22),n(21),n(14),n(42),n(28),n(43);var r=n(2),c=n(16),o=(n(8),n(23)),l=n(108),d=n(787),f=n(744),h=n(722),v=n(109),C=n(70),m=n(714);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"ClientShiftDetailsModal",components:{AvatarImage:l.default,Status:f.default,ContractType:d.default,XIcon:v.default,ServicesBadges:h.default},props:{initialData:{type:Object,required:!0}},data:function(){return{nannyUuid:"",showNannySelect:!1,timerLoading:!1}},computed:y(y({},Object(o.e)({currentTrackingTime:function(t){return t.trackedTimes.current}})),{},{clockEnabled:function(){return!!this.initialData.data&&this.initialData.data.clockEnabled},jobIsAssigned:function(){return this.shift.job.status===C.a||this.shift.job.contract&&this.shift.job.status===C.g},job:function(){return this.initialData.shift.job},nanny:function(){return this.initialData.shift.job.nanny},client:function(){return this.initialData.shift.job.client},service:function(){return this.initialData.shift.job.service},shift:function(){return this.initialData.shift},services:function(){return this.initialData.shift.job.services},truncatedNotes:function(){return this.shift&&this.shift.notes&&this.shift.notes?this.shift.notes:""},isHourlyContract:function(){return this.shift.job.type===m.b},isShortTermContract:function(){return this.shift.job.type===m.e},jobStatus:function(){return this.isHourlyContract||this.isShortTermContract?this.shift.status:this.shift.job?this.shift.job.status:"No status"},borderTopColor:function(){switch(this.jobStatus){case C.a:return"bg-assigned";case C.d:return"bg-canceled";case C.g:return"bg-[#ACD2A4]";case C.e:return"bg-completed";case C.h:default:return"bg-pending"}}}),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.handleGetActualTimer();case 2:case"end":return e.stop()}}),e)})))()},methods:{handleClockIn:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.initialData&&t.initialData.functions&&t.initialData.functions.clockIn){e.next=2;break}return e.abrupt("return");case 2:t.initialData.functions.clockIn(),t.closeModal();case 4:case"end":return e.stop()}}),e)})))()},handleClockOut:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.initialData&&t.initialData.functions&&t.initialData.functions.clockOut){e.next=2;break}return e.abrupt("return");case 2:t.initialData.functions.clockOut(),t.closeModal();case 4:case"end":return e.stop()}}),e)})))()},handleGetActualTimer:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.initialData&&t.initialData.functions&&t.initialData.functions.getActualTrack){e.next=2;break}return e.abrupt("return");case 2:return t.timerLoading=!0,e.next=5,t.initialData.functions.getActualTrack();case 5:t.timerLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$modal.close()}}},j=n(5),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal w-[550px] z-10 relative"},[n("div",{class:[t.borderTopColor]+" h-2 rounded-t-lg"}),t._v(" "),n("div",{staticClass:"py-5 px-8 space-y-5"},[n("div",{staticClass:"flex justify-between items-center"},[n("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-5 space-y-2 md:space-y-0"},[n("AvatarImage",{attrs:{size:"xs",src:t.nanny.avatar}}),t._v(" "),n("h4",{staticClass:"title-l-600"},[t._v(t._s(t.nanny.full_name))]),t._v(" "),t.service?n("ContractType",{attrs:{type:t.service.name,rate:t.service.rate}}):t._e(),t._v(" "),n("div",{on:{click:function(e){return t.$router.push("/nanny/"+t.nanny.user_uuid)}}},[n("span",{staticClass:"link-m-600 text-[#5E45DF] cursor-pointer"},[t._v("View profile")])])],1),t._v(" "),n("button",{staticClass:"absolute right-8 top-10",on:{click:t.closeModal}},[n("XIcon")],1)]),t._v(" "),n("Status",{attrs:{status:t.jobStatus}}),t._v(" "),n("div",{staticClass:"grid grid-cols-2 gap-x-10 gap-y-6 mb-6 mt-3"},[t.shift&&t.shift.details_parsed_time?n("div",[n("span",{staticClass:"details-title"},[t._v("DAY & TIME")]),t._v(" "),n("p",{staticClass:"details"},[t._v(t._s(t.shift.details_parsed_time))])]):t._e(),t._v(" "),t.truncatedNotes?n("div",{staticClass:"break-words"},[n("span",{staticClass:"details-title"},[t._v("NOTES")]),t._v(" "),n("p",{staticClass:"details"},[t._v(t._s(t.truncatedNotes))])]):t._e(),t._v(" "),t.services&&t.services.length>0?n("div",[n("span",{staticClass:"details-title"},[t._v("SHIFT DETAILS")]),t._v(" "),n("ServicesBadges",{staticClass:"!justify-start",attrs:{services:t.services}})],1):t._e(),t._v(" "),t.client&&t.client.address?n("div",[n("span",{staticClass:"details-title"},[t._v("LOCATION")]),t._v(" "),n("p",{staticClass:"details"},[t._v(t._s(t.client.address))])]):t._e()])],1)])}),[],!1,null,null,null);e.default=component.exports},714:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return d}));var r="SHIFT",c="HOURLY_CONTRACT",o="SALARY_CONTRACT",l="SHORT_TERM_CONTRACT",d="CONTRACT"},721:function(t,e,n){"use strict";n.r(e);var r={name:"CalendarIcon"},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{fill:t.appBranding.primary,d:"M3.83327 15.2485L4.56432 15.0809L3.83327 15.2485ZM3.83327 9.35323L4.56432 9.52078L3.83327 9.35323ZM20.1667 9.35323L19.4357 9.52079L20.1667 9.35323ZM20.1667 15.2485L19.4357 15.0809L20.1667 15.2485ZM14.8801 20.6589L15.0552 21.3882L14.8801 20.6589ZM9.11986 20.6589L9.29493 19.9296L9.11986 20.6589ZM9.11985 3.94279L9.29493 4.67207L9.11985 3.94279ZM14.8801 3.94279L15.0552 3.21351L14.8801 3.94279ZM8.82008 3C8.82008 2.58579 8.48429 2.25 8.07008 2.25C7.65587 2.25 7.32008 2.58579 7.32008 3H8.82008ZM7.32008 5.51375C7.32008 5.92796 7.65587 6.26375 8.07008 6.26375C8.48429 6.26375 8.82008 5.92796 8.82008 5.51375H7.32008ZM16.6799 3C16.6799 2.58579 16.3441 2.25 15.9299 2.25C15.5157 2.25 15.1799 2.58579 15.1799 3H16.6799ZM15.1799 5.51375C15.1799 5.92796 15.5157 6.26375 15.9299 6.26375C16.3441 6.26375 16.6799 5.92796 16.6799 5.51375H15.1799ZM4.56432 15.0809C4.14523 13.2524 4.14523 11.3493 4.56432 9.52078L3.10223 9.18568C2.63259 11.2347 2.63259 13.367 3.10223 15.416L4.56432 15.0809ZM19.4357 9.52079C19.8548 11.3493 19.8548 13.2524 19.4357 15.0809L20.8978 15.416C21.3674 13.367 21.3674 11.2347 20.8978 9.18568L19.4357 9.52079ZM14.7051 19.9296C12.9258 20.3568 11.0742 20.3568 9.29493 19.9296L8.94478 21.3882C10.9542 21.8706 13.0458 21.8706 15.0552 21.3882L14.7051 19.9296ZM9.29493 4.67207C11.0742 4.24493 12.9258 4.24493 14.7051 4.67207L15.0552 3.21351C13.0458 2.73111 10.9542 2.73111 8.94478 3.21351L9.29493 4.67207ZM9.29493 19.9296C6.95607 19.3682 5.11769 17.4953 4.56432 15.0809L3.10223 15.416C3.77946 18.3708 6.03739 20.6902 8.94478 21.3882L9.29493 19.9296ZM15.0552 21.3882C17.9626 20.6902 20.2205 18.3708 20.8978 15.416L19.4357 15.0809C18.8823 17.4953 17.0439 19.3682 14.7051 19.9296L15.0552 21.3882ZM14.7051 4.67207C17.0439 5.23355 18.8823 7.10642 19.4357 9.52079L20.8978 9.18568C20.2205 6.23089 17.9626 3.91147 15.0552 3.21351L14.7051 4.67207ZM8.94478 3.21351C6.03739 3.91147 3.77946 6.23089 3.10223 9.18568L4.56432 9.52078C5.11769 7.10641 6.95607 5.23355 9.29493 4.67207L8.94478 3.21351ZM4.14016 9.02886H19.8598V7.52886H4.14016V9.02886ZM7.32008 3V5.51375H8.82008V3H7.32008ZM15.1799 3V5.51375H16.6799V3H15.1799Z"}})])}),[],!1,null,"4e4163a7",null);e.default=component.exports},722:function(t,e,n){"use strict";n.r(e);n(53);var r={name:"ServicesBadges",components:{ServiceBadgeSelector:n(736).default},props:{services:{type:Array,required:!0}},computed:{length:function(){return this.services?this.services.length:0},firstServices:function(){return this.length>3?this.services.slice(0,3):this.services}}},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-center"},[t._l(t.firstServices,(function(t){return n("ServiceBadgeSelector",{key:t.id,staticClass:"pr-1",attrs:{name:t.name,"icon-name":t.icon_name}})})),t._v(" "),t.length>3?n("div",{staticClass:"pl-2 body-m-700"},[t._v("+ "+t._s(t.length-3))]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},726:function(t,e,n){var content=n(740);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("3077b034",content,!0,{sourceMap:!1})},739:function(t,e,n){"use strict";n(726)},740:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".badge[data-v-8a5d7fbc]{display:inline-block;border-radius:0.75rem;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem}",""]),r.locals={},t.exports=r},744:function(t,e,n){"use strict";n.r(e);var r={name:"Status",props:{status:{type:String,default:"PENDING"},isCancelBadge:{type:Boolean,default:!1}},computed:{statusColor:function(){switch(this.status){case"ASSIGNED":return"bg-assigned";case"CANCELED":return this.isCancelBadge?"bg-canceled  uppercase text-secondary-dark font-bold":"bg-canceled";case"IN_PROGRESS":return"bg-inProgress";case"COMPLETED":return"bg-completed text-white";default:return"bg-pending"}},statusName:function(){switch(this.status){case"ASSIGNED":return"Assigned";case"CANCELED":return"Canceled";case"IN_PROGRESS":return"In progress";case"COMPLETED":return"Completed";default:return"Pending"}}}},c=(n(739),n(5)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"badge",class:t.statusColor},[t._v(t._s(t.statusName))])}),[],!1,null,"8a5d7fbc",null);e.default=component.exports},787:function(t,e,n){"use strict";n.r(e);var r={name:"ContractType",components:{CalendarIcon:n(721).default},props:{type:{type:String,default:"babysistter"},rate:{type:String,default:null}}},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded-lg bg-black-light-5 py-1 px-2 inline-block"},["babysistter"===t.type?n("div",{staticClass:"body-m-400 capitalize"},[t._v("👤 "+t._s(t.type)+" - $"+t._s(t.rate))]):n("div",{staticClass:"body-m-400 capitalize flex items-center"},[n("CalendarIcon"),t._v("\n    "+t._s(t.type)+" "+t._s(t.rate?" - "+t.rate:"")+"\n  ")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);