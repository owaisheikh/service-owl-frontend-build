(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1008:function(e,t,r){"use strict";r.r(t);r(31),r(22),r(42),r(43);var n=r(2),o=r(16),l=(r(14),r(27),r(21),r(432),r(8),r(44)),c=r(28),d=r(700),f=r(715),m=r(755),h=r(726),v=r(837),_=r(885),y=r(797),w=r(869),x=r(816);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k={name:"ClientProfile",components:{BaseButton:d.default,BaseInput:f.default,PhoneInput:m.default,BaseTextArea:h.default,Parents:_.default,Children:v.default,ValidationProvider:l.b,ValidationObserver:l.a,ImagePicker:y.default,RadioButtonGroup:w.default,RatingBar:x.default},data:function(){return{loading:!1,imageUrl:"",address:"",form:{family_name:"",email:"",phone:"",address:"",zip_code:"",children:[],parents:[],nanny_characteristics:"",emergency_contacts:[],avatar:null,pets_description:"",covid_caution_level:1},updating:!1,loadingChildren:!0,loadingParents:!0,loadingEmergencyContacts:!0,originalChildrenIds:[],deletedChildrenIds:[],originalParentsIds:[],deletedParentsIds:[],originalEmergencyContactIds:[],deletedEmergencyContactIds:[],has_pets:!1,hasPetsValues:[{label:"Yes",key:!0},{label:"No",key:!1}]}},computed:I({},Object(c.c)({profile:"users/profile"})),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.fetchProfile();case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},methods:I(I(I({},Object(c.b)({getProfile:"users/getProfile",updateClientApplication:"applications/updateClientApplication"})),Object(c.d)({setProfile:"users/SET_PROFILE"})),{},{setValue:function(e){this.form.covid_caution_level=e},populateClient:function(){var e,t,r,n=this;this.form.avatar_updated=!1,this.imageUrl=this.profile.avatar?this.profile.avatar:void 0,this.form.email=this.profile.email,this.form.phone=this.profile.phone,this.form.address=this.profile.address,this.form.zip_code=this.profile.zip_code,this.form.family_name=this.profile.client.family_name;var o=this.profile.client.application;this.form.nanny_characteristics=o.nanny_characteristics,this.form.covid_caution_level=o.covid_caution_level?o.covid_caution_level:1,this.has_pets=!!o.pets_description,this.form.pets_description=o.pets_description?o.pets_description:"",this.loadingChildren=!0,this.form.children=[],null!==(e=o.children)&&void 0!==e&&e.length?o.children.forEach((function(e){n.form.children.push(I(I({},e),{},{has_special_considerations:null!=e.special_considerations})),n.originalChildrenIds.push(e.id)})):this.form.children.push({full_name:"",birth_date:null,has_special_considerations:null,interests:"",special_considerations:""}),this.loadingChildren=!1,this.loadingParents=!0,this.form.parents=[],null!==(t=o.family_members)&&void 0!==t&&t.length?o.family_members.forEach((function(e){n.form.parents.push(I({},e)),n.originalParentsIds.push(e.id)})):this.form.parents.push({name:"",email:"",phone:"",relationship:""}),this.loadingParents=!1,this.loadingEmergencyContacts=!0,this.form.emergency_contacts=[],null!==(r=o.emergency_contacts)&&void 0!==r&&r.length?o.emergency_contacts.forEach((function(e){n.form.emergency_contacts.push(I({},e)),n.originalEmergencyContactIds.push(e.id)})):this.form.emergency_contacts.push({full_name:"",relation:"",phone:""}),this.loadingEmergencyContacts=!1},onImageSelected:function(e){this.form.avatar_updated=!0,this.form.avatar=e},onRemoveImageSelected:function(){this.form.avatar_updated=!0,this.form.avatar=null},setChildren:function(e){this.form.children=e},setParents:function(e){this.form.parents=e},updateClient:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.form.deletedChildrenIds=e.originalChildrenIds.filter((function(t){return!e.form.children.find((function(e){return e.id===t}))})),e.form.deletedParentsIds=e.originalParentsIds.filter((function(t){return!e.form.parents.find((function(e){return e.id===t}))})),e.form.deletedEmergencyContactIds=e.originalEmergencyContactIds.filter((function(t){return!e.form.emergency_contacts.find((function(e){return e.id===t}))})),t.prev=3,e.has_pets||(e.form.pets_description=""),e.form.locationUuid=e.locationUuid,e.updating=!0,t.next=9,e.updateClientApplication(e.form);case 9:r=t.sent,e.$toast.showMessage({title:"Profile successfully updated",type:"success"}),e.setProfile(r),e.populateClient(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(3),e.$toast.showMessage({title:"Something went wrong",message:"There was an error while updating your profile.",type:"danger"});case 18:return t.prev=18,e.updating=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[3,15,18,21]])})))()},store:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.observer.validate();case 2:if(!t.sent){t.next=7;break}e.updateClient(),t.next=8;break;case 7:return t.abrupt("return",e.$toast.showMessage({title:"Something went wrong",message:"Please check the form for displayed errors",type:"danger"}));case 8:case"end":return t.stop()}}),t)})))()},fetchProfile:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getProfile(e.$auth.user.uuid);case 3:e.populateClient(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.$toast.showMessage({title:"Something went wrong",message:"There was an error while getting your profile.",type:"danger"});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}})},P=(r(914),r(5)),component=Object(P.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"py-12 px-4 md:px-16"},[e._m(0),e._v(" "),e.loading?e._e():r("div",{staticClass:"p-4 md:p-6 mt-6 rounded-lg shadow-lg bg-white max-w-[100%] md:max-w-[490px]"},[r("ValidationObserver",{ref:"observer",attrs:{tag:"div"}},[r("form",{staticClass:"flex flex-col pb-10 space-y-8 justify-items-stretch",on:{submit:function(t){return t.preventDefault(),e.updateClient.apply(null,arguments)}}},[r("div",{staticClass:"w-full flex flex-col items-start"},[r("ImagePicker",{attrs:{"image-url":e.imageUrl},on:{"image-selected":e.onImageSelected,"remove-selected-image":e.onRemoveImageSelected}})],1),e._v(" "),r("ValidationProvider",{staticClass:"w-full",attrs:{name:"Family name",rules:"required",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseInput",{attrs:{label:"Family name",placeholder:"e.g “Simpsons”",error:n.length>0?n[0]:""},model:{value:e.form.family_name,callback:function(t){e.$set(e.form,"family_name",t)},expression:"form.family_name"}})]}}],null,!1,277059979)}),e._v(" "),e.loadingParents?e._e():r("Parents",{attrs:{parents:e.form.parents},on:{update:e.setParents}}),e._v(" "),r("BaseInput",{attrs:{value:e.form.email,disabled:!0,label:"Email"}}),e._v(" "),r("ValidationProvider",{staticClass:"w-full",attrs:{name:"Phone",rules:"required",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("PhoneInput",{attrs:{label:"Phone",error:n.length>0?n[0]:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})]}}],null,!1,1369833443)}),e._v(" "),r("ValidationProvider",{staticClass:"w-full",attrs:{name:"Address",rules:"required",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseInput",{attrs:{label:"Address",error:n.length>0?n[0]:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})]}}],null,!1,2493303178)}),e._v(" "),r("ValidationProvider",{staticClass:"w-full",attrs:{name:"zip_code",rules:"required|numeric|max:6",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseInput",{attrs:{label:"Zip Code",error:n.length>0?n[0]:""},model:{value:e.form.zip_code,callback:function(t){e.$set(e.form,"zip_code",t)},expression:"form.zip_code"}})]}}],null,!1,2600012565)}),e._v(" "),e.loadingChildren?e._e():r("Children",{attrs:{children:e.form.children},on:{update:e.setChildren}}),e._v(" "),r("ValidationProvider",{staticClass:"w-full",attrs:{name:"Pets",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("RadioButtonGroup",{attrs:{label:"Do you have any pets?",values:e.hasPetsValues,"selected-value":!!e.has_pets,"group-name":"Pets",error:n.length>0?n[0]:""},model:{value:e.has_pets,callback:function(t){e.has_pets=t},expression:"has_pets"}})]}}],null,!1,531225068)}),e._v(" "),e.has_pets?r("ValidationProvider",{staticClass:"w-full",attrs:{name:"Pets description",rules:e.has_pets?"required":"",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseInput",{attrs:{label:"Basic Information",error:n.length>0?n[0]:""},model:{value:e.form.pets_description,callback:function(t){e.$set(e.form,"pets_description",t)},expression:"form.pets_description"}})]}}],null,!1,808156439)}):e._e(),e._v(" "),r("ValidationProvider",{staticClass:"w-full",attrs:{name:"Ideal Nanny Characteristics",rules:"required|max:500",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseTextArea",{attrs:{label:"Ideal Nanny Characteristics",error:n.length?n[0]:""},model:{value:e.form.nanny_characteristics,callback:function(t){e.$set(e.form,"nanny_characteristics",t)},expression:"form.nanny_characteristics"}})]}}],null,!1,24863106)}),e._v(" "),r("ValidationProvider",{staticClass:"w-full mt-4",attrs:{name:"COVID Caution Level",rules:"required",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("RatingBar",{attrs:{label:"COVID Caution Level",error:n.length>0?n[0]:""},on:{onClick:e.setValue},model:{value:e.form.covid_caution_level,callback:function(t){e.$set(e.form,"covid_caution_level",t)},expression:"form.covid_caution_level"}}),e._v(" "),r("p",{staticClass:"mt-16 body-s-400 text-black-light-1"},[e._v("\n            1 - likely unvaccinated, being aware, but also moving along with your regular life or\n          ")]),e._v(" "),r("p",{staticClass:"mt-2 body-s-400 text-black-light-1"},[e._v("\n            5 - likely double vaccinated or wishing to be, following all mandates, still masking, etc.\n          ")])]}}],null,!1,3859184078)}),e._v(" "),r("div",[r("div",{staticClass:"body-l-700 text-black-light-2 mb-4"},[e._v("Emergency Contact")]),e._v(" "),e.loadingEmergencyContacts?e._e():r("div",{staticClass:"flex items-start justify-between space-x-4 mb-4"},[r("ValidationProvider",{staticClass:"w-full",attrs:{name:"Emergency Contact Full Name",rules:"required",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseInput",{attrs:{label:"Full Name",error:n.length>0?n[0]:""},model:{value:e.form.emergency_contacts[0].full_name,callback:function(t){e.$set(e.form.emergency_contacts[0],"full_name",t)},expression:"form.emergency_contacts[0].full_name"}})]}}],null,!1,2859538952)}),e._v(" "),r("ValidationProvider",{staticClass:"w-full",attrs:{name:"Emergency Contact Relation",rules:"required",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("BaseInput",{attrs:{label:"Relation",error:n.length>0?n[0]:""},model:{value:e.form.emergency_contacts[0].relation,callback:function(t){e.$set(e.form.emergency_contacts[0],"relation",t)},expression:"form.emergency_contacts[0].relation"}})]}}],null,!1,3744258167)})],1),e._v(" "),e.loadingEmergencyContacts?e._e():r("ValidationProvider",{staticClass:"w-full",attrs:{name:"Emergency Contact Phone",rules:"required",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("PhoneInput",{attrs:{label:"Phone",error:n.length>0?n[0]:""},model:{value:e.form.emergency_contacts[0].phone,callback:function(t){e.$set(e.form.emergency_contacts[0],"phone",t)},expression:"form.emergency_contacts[0].phone"}})]}}],null,!1,1238422302)})],1),e._v(" "),r("BaseButton",{staticClass:"submit-btn",attrs:{text:"Save",disabled:e.disabled||e.updating,loading:e.updating},on:{click:e.store}})],1)])],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-row items-center justify-start space-x-8"},[r("h3",{staticClass:"title-l-600"},[e._v("Family Information")])])}],!1,null,"5f6539cc",null);t.default=component.exports},717:function(e,t,r){var content=r(728);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("2c26c602",content,!0,{sourceMap:!1})},726:function(e,t,r){"use strict";r.r(t);var n={name:"BaseTextArea",components:{InputLabel:r(705).default},props:{label:{type:String,default:""},value:{type:String,default:""},resize:{type:String,default:"resize-none"},rows:{type:String,default:"3"},error:{type:String,default:""},placeholder:{type:String,default:""}},methods:{onInput:function(e){this.$emit("input",e.target.value)}}},o=(r(727),r(5)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-full"},[r("InputLabel",{attrs:{text:e.label}}),e._v(" "),r("textarea",{staticClass:"textarea mt-1",class:[e.resize,""!=e.error?"border-secondary":"focus:border-primary-dark"],attrs:{placeholder:e.placeholder,rows:e.rows},domProps:{value:e.value},on:{input:e.onInput}}),e._v(" "),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()],1)}),[],!1,null,"6d546dd0",null);t.default=component.exports},727:function(e,t,r){"use strict";r(717)},728:function(e,t,r){var n=r(50)((function(i){return i[1]}));n.push([e.i,".textarea[data-v-6d546dd0]{font-family:Nunito;font-size:14px;font-weight:400;line-height:21px;width:100%;border-width:1px;--tw-border-opacity:1;border-color:rgb(211 208 197 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 1, 1);border-radius:10px}.error[data-v-6d546dd0]{font-family:Nunito;font-size:12px;font-weight:600;line-height:18px;margin-top:0.5rem;--tw-text-opacity:1;color:rgb(219 25 32 / var(--tw-text-opacity))}",""]),n.locals={},e.exports=n},776:function(e,t,r){var content=r(804);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("30f5644c",content,!0,{sourceMap:!1})},797:function(e,t,r){"use strict";r.r(t);r(14),r(40),r(32);var n=r(700),o=r(705),l=r(108),c={components:{BaseButton:n.default,InputLabel:o.default,AvatarImage:l.default},props:{imageUrl:{type:String,default:"/img/user-default.jpeg"}},data:function(){return{imageSrc:void 0}},mounted:function(){this.imageSrc=this.imageUrl},methods:{openUploadImageModal:function(){var e=this;this.$modal.open({component:function(){return Promise.all([r.e(27),r.e(24)]).then(r.bind(null,1160))},title:"Upload Profile Image",initialData:{methods:{imageSelectedCallback:function(t){e.imageSrc=t,e.$emit("image-selected",t)}}}})},removeSelectedImage:function(){this.imageSrc=void 0,this.$emit("remove-selected-image")}}},d=r(5),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("InputLabel",{attrs:{text:"Profile picture"}}),e._v(" "),r("div",{staticClass:"w-full flex flex-row items-center justify-start"},[r("AvatarImage",{staticClass:"mt-4",attrs:{src:e.imageSrc,size:"medium"}}),e._v(" "),r("div",{staticClass:"w-1/2 mt-4 ml-5 space-y-3"},[r("BaseButton",{attrs:{size:"small",text:"Change"},on:{click:e.openUploadImageModal}}),e._v(" "),r("BaseButton",{attrs:{size:"small","btn-style":"outline",text:"Remove"},on:{click:e.removeSelectedImage}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},803:function(e,t,r){"use strict";r(776)},804:function(e,t,r){var n=r(50)((function(i){return i[1]}));n.push([e.i,".error[data-v-118cde5e]{font-family:Nunito;font-size:12px;font-weight:600;line-height:18px;margin-top:0.5rem;--tw-text-opacity:1;color:rgb(219 25 32 / var(--tw-text-opacity))}",""]),n.locals={},e.exports=n},816:function(e,t,r){"use strict";r.r(t);r(704);var n={name:"RatingBar",components:{InputLabel:r(705).default},props:{label:{type:String,default:"COVID Caution Level"},error:{type:String,default:""},value:{type:Number,default:1},showDot:{type:Boolean,default:!0},barColor:{type:String,default:"bg-primary-light-1"},height:{type:String,default:"h-1"}},computed:{width:function(){switch(this.value){case 1:return"w-0";case 2:return"w-1/4";case 3:return"w-2/4";case 4:return"w-3/4";case 5:return"w-full";default:return"hidden"}},position:function(){var e="transform -translate-x-1/2 -translate-y-2/3";switch(this.value){case 1:default:return"left-0 "+e;case 2:return"left-1/4 "+e;case 3:return"left-2/4 "+e;case 4:return"left-3/4 "+e;case 5:return"right-0 transform translate-x-1/2 -translate-y-2/3"}}},methods:{onClick:function(e){this.$emit("onClick",parseInt(e.target.id))}}},o=(r(803),r(5)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("InputLabel",{attrs:{text:e.label}}),e._v(" "),r("div",{staticClass:"mt-1 relative"},[r("div",{staticClass:"w-full bg-black-light-4 rounded-full my-4 relative",class:[e.height]},[r("div",{staticClass:"rounded-full",class:[e.width,e.height,e.barColor]}),e._v(" "),e.showDot?r("div",{staticClass:"bg-primary rounded-full h-4 w-4 absolute",class:e.position}):e._e(),e._v(" "),r("div",{staticClass:"body-m-400 mt-2 text-center px-4 pt-10 absolute transform -translate-x-1/2 -translate-y-1/2 left-0",class:e.showDot?"petsDescription":"",attrs:{id:"1"},on:{click:e.onClick}},[e._v("\n        1\n      ")]),e._v(" "),r("div",{staticClass:"body-m-400 mt-2 text-center px-4 pt-10 absolute transform -translate-x-1/2 -translate-y-1/2 left-1/4",class:e.showDot?"petsDescription":"",attrs:{id:"2"},on:{click:e.onClick}},[e._v("\n        2\n      ")]),e._v(" "),r("div",{staticClass:"body-m-400 mt-2 text-center px-4 pt-10 absolute transform -translate-x-1/2 -translate-y-1/2 left-2/4",class:e.showDot?"petsDescription":"",attrs:{id:"3"},on:{click:e.onClick}},[e._v("\n        3\n      ")]),e._v(" "),r("div",{staticClass:"body-m-400 mt-2 text-center px-4 pt-10 absolute transform -translate-x-1/2 -translate-y-1/2 left-3/4",class:e.showDot?"petsDescription":"",attrs:{id:"4"},on:{click:e.onClick}},[e._v("\n        4\n      ")]),e._v(" "),r("div",{staticClass:"body-m-400 mt-2 text-center px-4 pt-10 absolute right-0 transform translate-x-1/2 -translate-y-1/2",class:e.showDot?"petsDescription":"",attrs:{id:"5"},on:{click:e.onClick}},[e._v("\n        5\n      ")])])]),e._v(" "),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()],1)}),[],!1,null,"118cde5e",null);t.default=component.exports},837:function(e,t,r){"use strict";r.r(t);r(189);var n=r(772),o=r(700),l=r(746),c=r(884),d={name:"Children",components:{BaseButton:o.default,PlusIcon:l.default,ChildInformation:c.default,TrashIcon:n.default},props:{children:{type:Array,default:function(){return[]}}},data:function(){return{childrenInfo:[]}},computed:{showTrashIcon:function(){return this.children.length>1}},mounted:function(){this.childrenInfo=this.children},methods:{addChild:function(){this.childrenInfo.push({full_name:"",birth_date:null,has_special_considerations:!1,interests:"",special_considerations:""})},setName:function(e){this.childrenInfo[e.index].full_name=e.full_name,this.$emit("update",this.childrenInfo)},setHasSpecialConsiderations:function(e){this.childrenInfo[e.index].has_special_considerations=e.has_special_considerations,this.$emit("update",this.childrenInfo)},setSpecialConsiderations:function(e){this.childrenInfo[e.index].special_considerations=e.special_considerations,this.$emit("update",this.childrenInfo)},setInterests:function(e){this.childrenInfo[e.index].interests=e.interests,this.$emit("update",this.childrenInfo)},setBirthDate:function(e){this.childrenInfo[e.index].birth_date=e.birthDate,this.$emit("update",this.childrenInfo)},removeRow:function(e){this.childrenInfo.splice(e,1),this.$emit("update",this.childrenInfo)}}},f=r(5),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"body-l-700 text-black-light-2 mb-4"},[e._v("Children")]),e._v(" "),e._l(e.childrenInfo,(function(t,n){return r("div",{key:n,staticClass:"bg-black-light-4 px-4 py-5 rounded-lg mb-4",attrs:{row:t}},[r("ChildInformation",{attrs:{child:t,index:n},on:{inputName:e.setName,inputHasSpecialConsiderations:e.setHasSpecialConsiderations,inputSpecialConsiderations:e.setSpecialConsiderations,inputInterests:e.setInterests,inputBirthDate:e.setBirthDate}}),e._v(" "),e.showTrashIcon?r("div",{staticClass:"flex-shrink-0 cursor-pointer mt-4",on:{click:function(t){return e.removeRow(n)}}},[r("TrashIcon")],1):e._e()],1)})),e._v(" "),r("BaseButton",{attrs:{size:"small","btn-style":"outline",text:"Add Child"},on:{click:e.addChild}},[r("template",{slot:"leftIcon"},[r("PlusIcon")],1)],2)],2)}),[],!1,null,null,null);t.default=component.exports},857:function(e,t,r){var content=r(915);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("18fcb89a",content,!0,{sourceMap:!1})},914:function(e,t,r){"use strict";r(857)},915:function(e,t,r){var n=r(50)((function(i){return i[1]}));n.push([e.i,".form-width[data-v-5f6539cc]{max-width:490px}.submit-btn[data-v-5f6539cc]{width:160px;margin-left:auto}",""]),n.locals={},e.exports=n}}]);