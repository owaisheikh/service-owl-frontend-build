(window.webpackJsonp=window.webpackJsonp||[]).push([[20,110,112,169,172,173,199,257],{1017:function(t,e,n){"use strict";n.r(e);var r={name:"BaseToggle",props:{options:{type:Array,required:!0}},data:function(){return{optionSelected:1}},computed:{gridSize:function(){return this.options?"grid-cols-".concat(this.options.length):""}},methods:{toggle:function(t){this.$emit("input",t),this.optionSelected=t}}},o=(n(930),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-40 cursor-pointer text-center grid rounded-lg bg-white border border-[#D3D0C5]",class:t.gridSize},t._l(t.options,(function(option){return n("button",{key:option.id,staticClass:"py-2 px-4 z-10 body-m-400 first:rounded-l-lg last:rounded-r-lg",class:option.id===t.optionSelected?"bg-primary text-white":"bg-white text-black",on:{click:function(e){return e.preventDefault(),t.toggle(option.id)}}},[n("span",[t._v("\n      "+t._s(option.name)+"\n    ")])])})),0)}),[],!1,null,"f872e026",null);e.default=component.exports},1157:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(8),n(44)),l=n(700),c=n(728),d=n(715),f=n(1017),y={name:"ClockOutModal",components:{ValidationProvider:o.b,ValidationObserver:o.a,BaseButton:l.default,BaseTextArea:c.default,BaseInput:d.default,BaseToggle:f.default},props:{initialData:{type:Object,required:!0}},data:function(){return{clock_out_notes:"",distance:"",isSetToMiles:!1,loading:!1,toggleOptions:[{id:1,name:"km"},{id:2,name:"mi"}]}},computed:{miles:function(){return this.isSetToMiles?this.distance:.621371*this.distance}},methods:{changeDistanceUnity:function(t){this.isSetToMiles=2==t},handleClockOut:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.initialData&&e.initialData.functions&&e.initialData.functions.clockOut){n.next=2;break}return n.abrupt("return");case 2:return r=e.clock_out_notes,o=e.miles,e.loading=!0,l={},t&&(l=r?{clock_out_notes:r,miles:o}:{miles:o}),n.next=9,e.initialData.functions.clockOut(l);case 9:e.loading=!1,e.closeModal();case 11:case"end":return n.stop()}}),n)})))()},closeModal:function(){this.$modal.close()}}},m=n(5),component=Object(m.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal w-[550px] z-10"},[n("div",{staticClass:"py-8 px-6"},[n("ValidationObserver",{attrs:{tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[n("form",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex items-end justify-center pb-6 space-x-3"},[n("ValidationProvider",{staticClass:"w-full",attrs:{name:"Distance",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("BaseInput",{staticClass:"max-w-3/4",attrs:{label:"Amount of kilometers/ miles",type:"number",error:r.length>0?r[0]:""},model:{value:t.distance,callback:function(e){t.distance=e},expression:"distance"}})]}}],null,!0)}),t._v(" "),n("BaseToggle",{attrs:{options:t.toggleOptions},on:{input:t.changeDistanceUnity}})],1),t._v(" "),n("ValidationProvider",{staticClass:"w-full",attrs:{name:"Notes",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("BaseTextArea",{attrs:{label:"Clock out notes (Optional)",error:r.length>0?r[0]:""},model:{value:t.clock_out_notes,callback:function(e){t.clock_out_notes=e},expression:"clock_out_notes"}})]}}],null,!0)}),t._v(" "),n("div",{staticClass:"px-12 flex items-center justify-center space-x-5 pt-8"},[n("BaseButton",{staticClass:"w-full",attrs:{"btn-style":"outline",text:"Skip",loading:t.loading},on:{click:function(e){return t.handleClockOut(!1)}}}),t._v(" "),n("BaseButton",{staticClass:"w-full",attrs:{text:"Save",disabled:r,loading:t.loading},on:{click:function(e){return t.handleClockOut(!0)}}})],1)],1)]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports},697:function(t,e,n){var content=n(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("3af0a2a6",content,!0,{sourceMap:!1})},698:function(t,e,n){"use strict";var r={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(n(701),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-pulse v-pulse1",style:[t.spinnerStyle,t.spinnerDelay1]}),n("div",{staticClass:"v-pulse v-pulse2",style:[t.spinnerStyle,t.spinnerDelay2]}),n("div",{staticClass:"v-pulse v-pulse3",style:[t.spinnerStyle,t.spinnerDelay3]})])}),[],!1,null,null,null);e.a=component.exports},699:function(t,e,n){var content=n(707);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("8a3c3444",content,!0,{sourceMap:!1})},700:function(t,e,n){"use strict";n.r(e);var r={name:"BaseButton",components:{PulseLoader:n(698).a},props:{text:{type:String,default:""},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},btnStyle:{type:String,default:"primary"},size:{type:String,default:"medium"}},computed:{padding:function(){switch(this.size){case"small":return"px-4 py-1";case"thin":return"px-8 py-1";default:return"px-4 py-2"}},buttonType:function(){switch(this.btnStyle){case"primary":default:return"btn-primary";case"danger":return"btn-danger";case"outline":return"btn-outline";case"outline-danger":return"btn-outline-danger"}},hasLeftIcon:function(){return!!this.$slots.leftIcon},hasRightIcon:function(){return!!this.$slots.rightIcon},centerText:function(){return!1===this.hasLeftIcon&&!1===this.hasRightIcon?"justify-center items-center":"justify-between items-center"}},methods:{onClick:function(){this.$emit("click")},onMousedown:function(){this.$emit("mousedown")}}},o=(n(706),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:[t.buttonType,t.padding,t.centerText,{"cursor-not-allowed disabled":t.disabled}],attrs:{type:"button",disabled:t.disabled},on:{click:t.onClick,mousedown:t.onMousedown}},[t.loading?[n("PulseLoader",{attrs:{loading:!0,color:"primary"===t.btnStyle||"success"===t.btnStyle?"#ffffff":"#000000",size:"8px"}})]:[n("span",{staticClass:"mr-3 -ml-1"},[t._t("leftIcon")],2),t._v("\n    "+t._s(t.text)+"\n    "),n("span",{staticClass:"ml-3 -mr-1"},[t._t("rightIcon")],2)]],2)}),[],!1,null,"0266595c",null);e.default=component.exports},701:function(t,e,n){"use strict";n(697)},702:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),r.locals={},t.exports=r},703:function(t,e,n){var content=n(712);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("0539b552",content,!0,{sourceMap:!1})},705:function(t,e,n){"use strict";n.r(e);var r={name:"InputLabel",props:{text:{type:String,default:""}}},o=(n(711),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("label",{staticClass:"label"},[t._v(t._s(t.text))])}),[],!1,null,"6dd03c6e",null);e.default=component.exports},706:function(t,e,n){"use strict";n(699)},707:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".btn-primary[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;background-color:var(--primary-default-color);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.btn-primary[data-v-0266595c]:hover{background-color:var(--primary-dark-color)}.btn-outline[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:var(--primary-dark-color);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));color:var(--primary-dark-color);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.disabled[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;background-color:var(--primary-light-color);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.disabled[data-v-0266595c]:hover{background-color:var(--primary-light-color)}.btn-danger[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;border-color:transparent;--tw-bg-opacity:1;background-color:rgb(219 25 32 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}.btn-danger[data-v-0266595c]:hover{--tw-bg-opacity:1;background-color:rgb(137 16 20 / var(--tw-bg-opacity))}.btn-outline-danger[data-v-0266595c]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:flex;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(137 16 20 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(137 16 20 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1)}",""]),r.locals={},t.exports=r},711:function(t,e,n){"use strict";n(703)},712:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".label[data-v-6dd03c6e]{font-family:Nunito;font-size:14px;font-weight:700;line-height:21px;display:block;color:var(--primary-dark-color)}",""]),r.locals={},t.exports=r},713:function(t,e,n){var content=n(719);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("2e57506a",content,!0,{sourceMap:!1})},715:function(t,e,n){"use strict";n.r(e);var r={name:"BaseInput",components:{InputLabel:n(705).default},props:{disabled:{type:Boolean,default:!1},lowercase:{type:Boolean,default:!1},label:{type:String,default:""},type:{type:String,default:"text"},error:{type:String,default:""},value:{type:String,default:""},placeholder:{type:String,default:""}},computed:{hasLeftIcon:function(){return!!this.$slots.leftIcon},hasRightIcon:function(){return!!this.$slots.rightIcon},noIcon:function(){return!1===this.hasRightIcon&&!1===this.hasRightIcon?"px-4":null}},methods:{onInput:function(t){this.$emit("input",t.target.value)}}},o=(n(718),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("InputLabel",{attrs:{text:t.label}}),t._v(" "),n("div",{staticClass:"mt-1 relative"},[n("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[t._t("leftIcon")],2),t._v(" "),n("input",{staticClass:"input",class:[{"pl-10":t.hasLeftIcon,"pr-10":t.hasRightIcon,lowercase:t.lowercase},""!=t.error?"border-secondary":"border-secondary-dark focus:border-primary-dark",t.noIcon],attrs:{disabled:t.disabled,type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.onInput}}),t._v(" "),n("div",{staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},[t._t("rightIcon")],2)]),t._v(" "),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e()],1)}),[],!1,null,"6dbd0712",null);e.default=component.exports},717:function(t,e,n){var content=n(727);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("2c26c602",content,!0,{sourceMap:!1})},718:function(t,e,n){"use strict";n(713)},719:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".input[data-v-6dbd0712]{font-family:Nunito;font-size:14px;font-weight:400;line-height:21px;width:100%;border-width:1px;--tw-border-opacity:1;border-color:rgb(211 208 197 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:0.5rem;padding-bottom:0.5rem;outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1);border-radius:10px}.error[data-v-6dbd0712]{font-family:Nunito;font-size:12px;font-weight:600;line-height:18px;margin-top:0.5rem;--tw-text-opacity:1;color:rgb(219 25 32 / var(--tw-text-opacity))}input[type=date][data-v-6dbd0712]::-webkit-calendar-picker-indicator,input[type=date][data-v-6dbd0712]::-webkit-inner-spin-button{opacity:0}",""]),r.locals={},t.exports=r},726:function(t,e,n){"use strict";n(717)},727:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".textarea[data-v-6d546dd0]{font-family:Nunito;font-size:14px;font-weight:400;line-height:21px;width:100%;border-width:1px;--tw-border-opacity:1;border-color:rgb(211 208 197 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1);border-radius:10px}.error[data-v-6d546dd0]{font-family:Nunito;font-size:12px;font-weight:600;line-height:18px;margin-top:0.5rem;--tw-text-opacity:1;color:rgb(219 25 32 / var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},728:function(t,e,n){"use strict";n.r(e);var r={name:"BaseTextArea",components:{InputLabel:n(705).default},props:{label:{type:String,default:""},value:{type:String,default:""},resize:{type:String,default:"resize-none"},rows:{type:String,default:"3"},error:{type:String,default:""},placeholder:{type:String,default:""}},methods:{onInput:function(t){this.$emit("input",t.target.value)}}},o=(n(726),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("InputLabel",{attrs:{text:t.label}}),t._v(" "),n("textarea",{staticClass:"textarea mt-1",class:[t.resize,""!=t.error?"border-secondary":"focus:border-primary-dark"],attrs:{placeholder:t.placeholder,rows:t.rows},domProps:{value:t.value},on:{input:t.onInput}}),t._v(" "),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e()],1)}),[],!1,null,"6d546dd0",null);e.default=component.exports},867:function(t,e,n){var content=n(931);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("79bd4454",content,!0,{sourceMap:!1})},930:function(t,e,n){"use strict";n(867)},931:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".active[data-v-f872e026]{background-color:var(--primary-default-color);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}",""]),r.locals={},t.exports=r}}]);