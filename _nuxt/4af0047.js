(window.webpackJsonp=window.webpackJsonp||[]).push([[99,100,110,125,167,197],{697:function(t,e,n){var content=n(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("3af0a2a6",content,!0,{sourceMap:!1})},698:function(t,e,n){"use strict";var r={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(n(701),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-pulse v-pulse1",style:[t.spinnerStyle,t.spinnerDelay1]}),n("div",{staticClass:"v-pulse v-pulse2",style:[t.spinnerStyle,t.spinnerDelay2]}),n("div",{staticClass:"v-pulse v-pulse3",style:[t.spinnerStyle,t.spinnerDelay3]})])}),[],!1,null,null,null);e.a=component.exports},699:function(t,e,n){var content=n(707);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("8a3c3444",content,!0,{sourceMap:!1})},700:function(t,e,n){"use strict";n.r(e);var r={name:"BaseButton",components:{PulseLoader:n(698).a},props:{text:{type:String,default:""},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},btnStyle:{type:String,default:"primary"},size:{type:String,default:"medium"}},computed:{padding:function(){switch(this.size){case"small":return"px-4 py-1";case"thin":return"px-8 py-1";default:return"px-4 py-2"}},buttonType:function(){switch(this.btnStyle){case"primary":default:return"btn-primary";case"danger":return"btn-danger";case"outline":return"btn-outline";case"outline-danger":return"btn-outline-danger"}},hasLeftIcon:function(){return!!this.$slots.leftIcon},hasRightIcon:function(){return!!this.$slots.rightIcon},centerText:function(){return!1===this.hasLeftIcon&&!1===this.hasRightIcon?"justify-center items-center":"justify-between items-center"}},methods:{onClick:function(){this.$emit("click")},onMousedown:function(){this.$emit("mousedown")}}},o=(n(706),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:[t.buttonType,t.padding,t.centerText,{"cursor-not-allowed disabled":t.disabled}],attrs:{type:"button",disabled:t.disabled},on:{click:t.onClick,mousedown:t.onMousedown}},[t.loading?[n("PulseLoader",{attrs:{loading:!0,color:"primary"===t.btnStyle||"success"===t.btnStyle?"#ffffff":"#000000",size:"8px"}})]:[n("span",{staticClass:"mr-3 -ml-1"},[t._t("leftIcon")],2),t._v("\n    "+t._s(t.text)+"\n    "),n("span",{staticClass:"ml-3 -mr-1"},[t._t("rightIcon")],2)]],2)}),[],!1,null,"0266595c",null);e.default=component.exports},701:function(t,e,n){"use strict";n(697)},702:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),r.locals={},t.exports=r},703:function(t,e,n){var content=n(712);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("0539b552",content,!0,{sourceMap:!1})},705:function(t,e,n){"use strict";n.r(e);var r={name:"InputLabel",props:{text:{type:String,default:""}}},o=(n(711),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("label",{staticClass:"label"},[t._v(t._s(t.text))])}),[],!1,null,"6dd03c6e",null);e.default=component.exports},706:function(t,e,n){"use strict";n(699)},707:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".btn-primary[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;background-color:var(--primary-default-color);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.btn-primary[data-v-0266595c]:hover{background-color:var(--primary-dark-color)}.btn-outline[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:var(--primary-dark-color);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));color:var(--primary-dark-color);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.disabled[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;background-color:var(--primary-light-color);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.disabled[data-v-0266595c]:hover{background-color:var(--primary-light-color)}.btn-danger[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;--tw-bg-opacity:1;background-color:rgb(219 25 32 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.btn-danger[data-v-0266595c]:hover{--tw-bg-opacity:1;background-color:rgb(137 16 20 / var(--tw-bg-opacity))}.btn-outline-danger[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(137 16 20 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(137 16 20 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}",""]),r.locals={},t.exports=r},711:function(t,e,n){"use strict";n(703)},712:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".label[data-v-6dd03c6e]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:block;color:var(--primary-dark-color)}",""]),r.locals={},t.exports=r},713:function(t,e,n){var content=n(719);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("2e57506a",content,!0,{sourceMap:!1})},715:function(t,e,n){"use strict";n.r(e);var r={name:"BaseInput",components:{InputLabel:n(705).default},props:{disabled:{type:Boolean,default:!1},lowercase:{type:Boolean,default:!1},label:{type:String,default:""},type:{type:String,default:"text"},error:{type:String,default:""},value:{type:String,default:""},placeholder:{type:String,default:""}},computed:{hasLeftIcon:function(){return!!this.$slots.leftIcon},hasRightIcon:function(){return!!this.$slots.rightIcon},noIcon:function(){return!1===this.hasRightIcon&&!1===this.hasRightIcon?"px-4":null}},methods:{onInput:function(t){this.$emit("input",t.target.value)}}},o=(n(718),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("InputLabel",{attrs:{text:t.label}}),t._v(" "),n("div",{staticClass:"mt-1 relative"},[n("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[t._t("leftIcon")],2),t._v(" "),n("input",{staticClass:"input",class:[{"pl-10":t.hasLeftIcon,"pr-10":t.hasRightIcon,lowercase:t.lowercase},""!=t.error?"border-secondary":"border-secondary-dark focus:border-primary-dark",t.noIcon],attrs:{disabled:t.disabled,type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.onInput}}),t._v(" "),n("div",{staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},[t._t("rightIcon")],2)]),t._v(" "),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e()],1)}),[],!1,null,"6dbd0712",null);e.default=component.exports},718:function(t,e,n){"use strict";n(713)},719:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".input[data-v-6dbd0712]{font-family:Nunito;font-size:14px;font-weight:400;line-height:21px;width:100%;border-width:1px;--tw-border-opacity:1;border-color:rgb(211 208 197 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:0.5rem;padding-bottom:0.5rem;outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1);border-radius:10px}.error[data-v-6dbd0712]{font-family:Nunito;font-size:12px;font-weight:600;line-height:18px;margin-top:0.5rem;--tw-text-opacity:1;color:rgb(219 25 32 / var(--tw-text-opacity))}input[type=date][data-v-6dbd0712]::-webkit-calendar-picker-indicator,input[type=date][data-v-6dbd0712]::-webkit-inner-spin-button{opacity:0}",""]),r.locals={},t.exports=r},731:function(t,e,n){"use strict";n.r(e);var r={name:"CheckIcon",props:{mycolor:{type:String,default:"fill-primary"}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"h-5 w-5",class:t.mycolor,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},793:function(t,e,n){var content=n(822);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("15d6e096",content,!0,{sourceMap:!1})},821:function(t,e,n){"use strict";n(793)},822:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".w-40[data-v-93bd881e]{width:6rem}",""]),r.locals={},t.exports=r},832:function(t,e,n){"use strict";n.r(e);var r=n(731),o=n(715),l={name:"DayItem",components:{CheckIcon:r.default,BaseInput:o.default},props:{day:{type:String,default:"Monday"},data:{type:Object,required:!0},showBorderTop:{type:Boolean,default:!0}},data:function(){return{from:null,to:null,disabled:!0}},mounted:function(){this.data?null===this.data.from&&null===this.data.to?this.disabled=!0:(null!==this.data.from&&(this.from=this.data.from),null!==this.data.to&&(this.to=this.data.to)):this.disabled=!1},methods:{select:function(){this.disabled=!this.disabled,this.disabled?(this.from="00:00",this.to="23:59"):(this.from=null,this.to=null),this.$emit("fromChange",this.day,this.from),this.$emit("toChange",this.day,this.to)},fromChange:function(){this.$emit("fromChange",this.day,this.from)},toChange:function(){this.$emit("toChange",this.day,this.to)}}},c=(n(821),n(5)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-3 gap-4 p-8 mb-4",class:{"border-t border-[#D3D0C5]":t.showBorderTop}},[n("div",{staticClass:"flex items-center justify-start space-x-2 col-span-3 md:col-span-1"},[n("div",{staticClass:"cursor-pointer flex items-center justify-center border border-1 rounded p-0.5 text-white h-4 w-4",class:t.disabled?"bg-primary border-transparent":"",on:{click:t.select}},[n("CheckIcon")],1),t._v(" "),n("span",{staticClass:"body-l-600 capitalize"},[t._v(t._s(t.day))])]),t._v(" "),n("div",{staticClass:"col-span-3 md:col-span-2 flex flex-col md:flex-row md:items-start justify-start md:justify-end space-x-0 md:space-x-4 space-y-3 md:space-y-0"},[n("BaseInput",{attrs:{type:"time",disabled:!t.disabled},on:{input:t.fromChange},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),t._v(" "),n("BaseInput",{attrs:{type:"time",disabled:!t.disabled},on:{input:t.toChange},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)])}),[],!1,null,"93bd881e",null);e.default=component.exports},881:function(t,e,n){"use strict";n.r(e);n(31),n(22),n(21),n(14),n(42),n(27),n(43);var r=n(2),o=n(16),l=(n(8),n(751)),c=n(28),d=n(698),f=n(700),y=n(832);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{PulseLoader:d.a,BaseButton:f.default,DayItem:y.default},props:{showHeading:{type:Boolean,default:!1}},data:function(){return{loading:!1,storeLoading:!1,days:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],availability:null}},computed:m({},Object(c.c)({profile:"users/profile"})),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchProfile();case 2:case"end":return e.stop()}}),e)})))()},methods:m(m({},Object(c.b)({getProfile:"users/getProfile",updateNannyAvailability:"users/updateNannyAvailability"})),{},{fetchProfile:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.getProfile(t.$auth.user.uuid);case 4:t.availability=JSON.parse(JSON.stringify(t.profile.nanny.application.available_days)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast.showMessage({title:"Something went wrong",message:"There was an error while getting your profile.",type:"danger"});case 10:return e.prev=10,t.loading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()},onFromChange:Object(l.debounce)(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===this.availability[e]&&(this.availability[e]={},this.availability[e].from=null,this.availability[e].to=null),this.availability[e].from=n;case 2:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}(),500),onToChange:Object(l.debounce)(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===this.availability[e]&&(this.availability[e]={},this.availability[e].from=null,this.availability[e].to=null),this.availability[e].to=n;case 2:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}(),500),store:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.storeLoading=!0,e.next=4,t.updateNannyAvailability({nannyUuid:t.$auth.user.nanny.uuid,availability:t.availability});case 4:t.$toast.showMessage({title:"Available hours updated successfully",type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast.showMessage({title:"Something went wrong",message:"There was an error while getting your profile.",type:"danger"});case 10:return e.prev=10,t.storeLoading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}})},w=v,x=n(5),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",{staticClass:"w-full flex h-full justify-center items-center px-2"},[n("PulseLoader",{attrs:{loading:!0,color:t.appBranding.primary,size:"12px"}})],1):n("div",{staticClass:"w-fit bg-white rounded-md border"},[t.showHeading?n("h3",{staticClass:"title-l-600 px-10 pt-10"},[t._v("Recurring Availability")]):t._e(),t._v(" "),null!==t.availability?n("div",{staticClass:"my-8 w-auto md:w-128"},[t.showHeading?t._l(t.days,(function(e){return n("DayItem",{key:e,staticClass:"mb-3",attrs:{day:e,data:t.availability[e]},on:{fromChange:t.onFromChange,toChange:t.onToChange}})})):t._l(t.days,(function(e,r){return n("DayItem",{key:e,staticClass:"mb-3",attrs:{day:e,data:t.availability[e],"show-border-top":0!==r},on:{fromChange:t.onFromChange,toChange:t.onToChange}})})),t._v(" "),n("div",{staticClass:"flex justify-end px-8 pt-8 border-t border-[#D3D0C5]"},[n("BaseButton",{staticClass:"w-48",attrs:{text:"Save",type:"button",loading:t.storeLoading},on:{click:t.store}})],1)],2):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);