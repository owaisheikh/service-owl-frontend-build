(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1112:function(e,t,n){"use strict";n.r(t);n(88);var l={components:{PulseLoader:n(698).a},layout:"guest",middleware:"auth",data:function(){return{loading:!0}},mounted:function(){var e=this;setTimeout((function(){e.loading=!1}),2e3)}},r=n(5),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",{staticClass:"w-full h-screen flex justify-center items-center py-4"},[n("PulseLoader",{attrs:{loading:!0,color:e.appBranding.primary,size:"12px"}})],1):n("div",{staticClass:"h-screen flex justify-center items-center"},[n("h2",{staticClass:"heading-l-400"},[e._v("Your account is inactive, kindly contact the agency for assistance.")])])}),[],!1,null,null,null);t.default=component.exports},697:function(e,t,n){var content=n(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("3af0a2a6",content,!0,{sourceMap:!1})},698:function(e,t,n){"use strict";var l={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},r=(n(701),n(5)),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-pulse v-pulse1",style:[e.spinnerStyle,e.spinnerDelay1]}),n("div",{staticClass:"v-pulse v-pulse2",style:[e.spinnerStyle,e.spinnerDelay2]}),n("div",{staticClass:"v-pulse v-pulse3",style:[e.spinnerStyle,e.spinnerDelay3]})])}),[],!1,null,null,null);t.a=component.exports},701:function(e,t,n){"use strict";n(697)},702:function(e,t,n){var l=n(50)((function(i){return i[1]}));l.push([e.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),l.locals={},e.exports=l}}]);