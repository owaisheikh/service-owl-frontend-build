(window.webpackJsonp=window.webpackJsonp||[]).push([[260,203,261],{714:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return l}));var r="SHIFT",c="HOURLY_CONTRACT",d="SALARY_CONTRACT",o="SHORT_TERM_CONTRACT",l="CONTRACT"},726:function(e,t,n){var content=n(740);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("3077b034",content,!0,{sourceMap:!1})},739:function(e,t,n){"use strict";n(726)},740:function(e,t,n){var r=n(50)((function(i){return i[1]}));r.push([e.i,".badge[data-v-8a5d7fbc]{display:inline-block;border-radius:0.75rem;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem}",""]),r.locals={},e.exports=r},744:function(e,t,n){"use strict";n.r(t);var r={name:"Status",props:{status:{type:String,default:"PENDING"},isCancelBadge:{type:Boolean,default:!1}},computed:{statusColor:function(){switch(this.status){case"ASSIGNED":return"bg-assigned";case"CANCELED":return this.isCancelBadge?"bg-canceled  uppercase text-secondary-dark font-bold":"bg-canceled";case"IN_PROGRESS":return"bg-inProgress";case"COMPLETED":return"bg-completed text-white";default:return"bg-pending"}},statusName:function(){switch(this.status){case"ASSIGNED":return"Assigned";case"CANCELED":return"Canceled";case"IN_PROGRESS":return"In progress";case"COMPLETED":return"Completed";default:return"Pending"}}}},c=(n(739),n(5)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"badge",class:e.statusColor},[e._v(e._s(e.statusName))])}),[],!1,null,"8a5d7fbc",null);t.default=component.exports}}]);