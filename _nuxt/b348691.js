(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{972:function(e,t,n){"use strict";n.r(t);var c={name:"ExperienceCard",props:{experience:{type:Object,default:function(){}}}},d=n(5),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"border rounded-lg p-4 mb-4 w-2/2 md:w-1/2"},[n("div",{staticClass:"flex items-center space-x-2"},[n("div",{staticClass:"body-l-700 capitalize"},[e._v(e._s(e.experience.title))]),e._v(" "),n("div",{staticClass:"badge"},[e._v("\n      "+e._s(e.$moment(e.experience.start_date).format("MMM YYYY"))+" -\n      "+e._s(e.experience.end_date?e.$moment(e.experience.end_date).format("MMM YYYY"):"present")+"\n    ")])]),e._v(" "),n("div",{staticClass:"body-m-400 mb-4"},[e._v(e._s(e.experience.address))]),e._v(" "),n("div",{staticClass:"body-m-700 mb-4"},[e._v("\n    Frequency: "),n("span",{staticClass:"body-m-400"},[e._v(e._s(e.experience.frequency))])]),e._v(" "),n("div",{staticClass:"body-m-700 mb-4 flex space-x-1 flex-wrap w-full"},[e._v("\n    Children:\n    "),e._l(e.experience.stages,(function(t){return n("div",{key:t.id,staticClass:"body-m-400 ml-1 flex space-x-2"},[t.quantity>0?n("div",{staticClass:"flex items-center flex-shrink-0"},[e._v("\n        "+e._s(t.quantity)+" "+e._s(t.name)+",\n      ")]):e._e()])}))],2),e._v(" "),n("div",{staticClass:"body-m-700"},[e._v("\n    Comments: "),n("span",{staticClass:"body-m-400"},[e._v(e._s(e.experience.comments))])])])}),[],!1,null,null,null);t.default=component.exports}}]);