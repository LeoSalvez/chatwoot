(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1592:function(t,e,a){"use strict";var n=a(252),r={__name:"BackButton",props:{backUrl:{type:[String,Object],default:""},buttonLabel:{type:String,default:""},compact:{type:Boolean,default:!1}},setup:function(t){var e=t,a=e.compact?"text-sm text-slate-600 dark:text-slate-300":"text-base text-woot-500 dark:text-woot-500";return{__sfc:!0,props:e,goBack:function(){""!==e.backUrl?n.a.push(e.backUrl):n.a.go(-1)},buttonStyleClass:a}}},s=a(8),i=Object(s.a)(r,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e("button",{staticClass:"flex items-center p-0 font-normal cursor-pointer",class:a.buttonStyleClass,on:{"!click":function(t){return a.goBack.apply(null,arguments)}}},[e("fluent-icon",{staticClass:"-ml-1",attrs:{icon:"chevron-left"}}),t._v("\n  "+t._s(t.buttonLabel||t.$t("GENERAL_SETTINGS.BACK"))+"\n")],1)}),[],!1,null,null,null);e.a=i.exports},1593:function(t,e,a){"use strict";var n=a(199),r=a(5),s={__name:"CustomBrandPolicyWrapper",props:{showOnCustomBrandedInstance:{type:Boolean,default:!0}},setup:function(t){var e=t,a=Object(n.c)(),s=a["globalConfig/isACustomBrandedInstance"],i=Object(r.computed)((function(){return e.showOnCustomBrandedInstance||!s.value}));return{__sfc:!0,props:e,getters:a,isACustomBrandedInstance:s,shouldShowContent:i}}},i=a(8),o=Object(i.a)(s,(function(){var t=this,e=t._self._c;return t._self._setupProxy.shouldShowContent?e("div",[t._t("default")],2):t._e()}),[],!1,null,null,null).exports,l={agent_bots:"https://chwt.app/hc/agent-bots",agents:"https://chwt.app/hc/agents",audit_logs:"https://chwt.app/hc/audit-logs",campaigns:"https://chwt.app/hc/campaigns",canned_responses:"https://chwt.app/hc/canned",channel_email:"https://chwt.app/hc/email",channel_facebook:"https://chwt.app/hc/fb",custom_attributes:"https://chwt.app/hc/custom-attributes",dashboard_apps:"https://chwt.app/hc/dashboard-apps",help_center:"https://chwt.app/hc/help-center",inboxes:"https://chwt.app/hc/inboxes",integrations:"https://chwt.app/hc/integrations",labels:"https://chwt.app/hc/labels",macros:"https://chwt.app/hc/macros",message_reply_to:"https://chwt.app/hc/reply-to",reports:"https://chwt.app/hc/reports",sla:"https://chwt.app/hc/sla",captain:"https://chwt.app/hc/captain",team_management:"https://chwt.app/hc/teams",webhook:"https://chwt.app/hc/webhooks"};var u=a(1592),c={__name:"BaseSettingsHeader",props:{title:{type:String,required:!0},description:{type:String,required:!0},iconName:{type:String,default:""},linkText:{type:String,default:""},featureName:{type:String,default:""},backButtonLabel:{type:String,default:""}},setup:function(t){var e;return{__sfc:!0,props:t,helpURL:(e=t.featureName,l[e]),openInNewTab:function(t){t&&window.open(t,"_blank","noopener noreferrer")},CustomBrandPolicyWrapper:o,BackButton:u.a}}},p=Object(i.a)(c,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e("div",{staticClass:"flex flex-col items-start w-full gap-2 pt-4"},[t.backButtonLabel?e(a.BackButton,{attrs:{compact:"","button-label":t.backButtonLabel}}):t._e(),t._v(" "),e("div",{staticClass:"flex items-center justify-between w-full gap-4"},[e("div",{staticClass:"flex items-center gap-3"},[t.iconName?e("div",{staticClass:"flex items-center w-10 h-10 p-1 rounded-full bg-woot-25/60 dark:bg-woot-900/60"},[e("div",{staticClass:"flex items-center justify-center w-full h-full rounded-full bg-woot-75/70 dark:bg-woot-800/40"},[e("fluent-icon",{staticClass:"flex-shrink-0 text-woot-500 dark:text-woot-500",attrs:{size:"14",icon:t.iconName,type:"outline"}})],1)]):t._e(),t._v(" "),e("h1",{staticClass:"text-2xl font-semibold font-interDisplay tracking-[0.3px] text-slate-900 dark:text-slate-25"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),e("div",{staticClass:"hidden gap-2 sm:flex"},[t._t("actions")],2)]),t._v(" "),e("div",{staticClass:"flex flex-col gap-3 text-slate-600 dark:text-slate-300 w-full"},[e("p",{staticClass:"mb-0 text-base font-normal line-clamp-5 sm:line-clamp-none max-w-3xl tracking-[-0.1px]"},[t._t("description",(function(){return[t._v(t._s(t.description))]}))],2),t._v(" "),e(a.CustomBrandPolicyWrapper,{attrs:{"show-on-custom-branded-instance":!1}},[a.helpURL&&t.linkText?e("a",{staticClass:"sm:inline-flex hidden gap-1 w-fit items-center text-woot-500 dark:text-woot-500 text-sm font-medium hover:underline",attrs:{href:a.helpURL,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.linkText)+"\n        "),e("fluent-icon",{staticClass:"flex-shrink-0 text-woot-500 dark:text-woot-500",attrs:{size:"16",icon:"chevron-right",type:"outline"}})],1):t._e()])],1),t._v(" "),e("div",{staticClass:"flex items-start justify-start w-full gap-3 sm:hidden flex-wrap"},[t._t("actions"),t._v(" "),e(a.CustomBrandPolicyWrapper,{attrs:{"show-on-custom-branded-instance":!1}},[a.helpURL&&t.linkText?e("woot-button",{staticClass:"flex-row-reverse rounded-md min-w-0 !bg-slate-50 !text-slate-900 dark:!text-white dark:!bg-slate-800",attrs:{"color-scheme":"secondary",icon:"arrow-outwards"},on:{click:function(t){return a.openInNewTab(a.helpURL)}}},[t._v("\n        "+t._s(t.linkText)+"\n      ")]):t._e()],1)],2)],1)}),[],!1,null,null,null);e.a=p.exports},1595:function(t,e,a){"use strict";var n={__name:"SettingsLayout",props:{isLoading:{type:Boolean,default:!1},noRecordsFound:{type:Boolean,default:!1},loadingMessage:{type:String,default:""},noRecordsMessage:{type:String,default:""}},setup:function(t){return{__sfc:!0}}},r=a(8),s=Object(r.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex flex-col w-full h-full gap-10 font-inter"},[t._t("header"),t._v(" "),e("div",[t._t("preBody"),t._v(" "),t.isLoading?t._t("loading",(function(){return[e("woot-loading-state",{attrs:{message:t.loadingMessage}})]})):t.noRecordsFound?e("p",{staticClass:"flex-1 text-slate-700 dark:text-slate-100 flex items-center justify-center text-base"},[t._v("\n      "+t._s(t.noRecordsMessage)+"\n    ")]):t._t("body"),t._v(" "),t._t("default")],2)],2)}),[],!1,null,null,null);e.a=s.exports},1920:function(t,e,a){var n=a(65),r=a(2090);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var s={insert:"head",singleton:!1};n(r,s);t.exports=r.locals||{}},1921:function(t,e,a){var n=a(65),r=a(2092);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var s={insert:"head",singleton:!1};n(r,s);t.exports=r.locals||{}},1922:function(t,e,a){var n=a(65),r=a(2094);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var s={insert:"head",singleton:!1};n(r,s);t.exports=r.locals||{}},2089:function(t,e,a){"use strict";a(1920)},2090:function(t,e,a){(e=a(66)(!0)).push([t.i,".key-value[data-v-2a0cc54b]{padding:0 var(--space-small) var(--space-small) 0;font-family:monospace}.multiselect--wrap[data-v-2a0cc54b]{margin-bottom:var(--space-normal)}.multiselect--wrap .error-message[data-v-2a0cc54b]{color:var(--r-400);font-size:var(--font-size-small);font-weight:var(--font-weight-normal)}.multiselect--wrap .invalid[data-v-2a0cc54b] .multiselect__tags{border:1px solid var(--r-400)}[data-v-2a0cc54b] .multiselect{margin-bottom:0}[data-v-2a0cc54b] .multiselect__content-wrapper{display:none}[data-v-2a0cc54b] .multiselect--active .multiselect__tags{border-radius:var(--border-radius-normal)}","",{version:3,sources:["/home/leonardo/chatwoot/app/javascript/dashboard/routes/dashboard/settings/attributes/AddAttribute.vue"],names:[],mappings:"AACA,4BACE,iDAAA,CACA,qBAAA,CAGF,oCACE,iCAAA,CAEA,mDACE,kBAAA,CACA,gCAAA,CACA,qCAAA,CAKE,gEACE,6BAAA,CAON,+BACE,eAAA,CAGF,gDACE,YAAA,CAGF,0DACE,yCAAA",file:"AddAttribute.vue",sourcesContent:["\n.key-value {\n  padding: 0 var(--space-small) var(--space-small) 0;\n  font-family: monospace;\n}\n\n.multiselect--wrap {\n  margin-bottom: var(--space-normal);\n\n  .error-message {\n    color: var(--r-400);\n    font-size: var(--font-size-small);\n    font-weight: var(--font-weight-normal);\n  }\n\n  .invalid {\n    ::v-deep {\n      .multiselect__tags {\n        border: 1px solid var(--r-400);\n      }\n    }\n  }\n}\n\n::v-deep {\n  .multiselect {\n    margin-bottom: 0;\n  }\n\n  .multiselect__content-wrapper {\n    display: none;\n  }\n\n  .multiselect--active .multiselect__tags {\n    border-radius: var(--border-radius-normal);\n  }\n}\n"]}]),t.exports=e},2091:function(t,e,a){"use strict";a(1921)},2092:function(t,e,a){(e=a(66)(!0)).push([t.i,".key-value[data-v-7404e77e]{padding:0 var(--space-small) var(--space-small) 0;font-family:monospace}.multiselect--wrap[data-v-7404e77e]{margin-bottom:var(--space-normal)}.multiselect--wrap .error-message[data-v-7404e77e]{color:var(--r-400);font-size:var(--font-size-small);font-weight:var(--font-weight-normal)}.multiselect--wrap .invalid[data-v-7404e77e] .multiselect__tags{border:1px solid var(--r-400)}[data-v-7404e77e] .multiselect{margin-bottom:0}[data-v-7404e77e] .multiselect__content-wrapper{display:none}[data-v-7404e77e] .multiselect--active .multiselect__tags{border-radius:var(--border-radius-normal)}","",{version:3,sources:["/home/leonardo/chatwoot/app/javascript/dashboard/routes/dashboard/settings/attributes/EditAttribute.vue"],names:[],mappings:"AACA,4BACE,iDAAA,CACA,qBAAA,CAEF,oCACE,iCAAA,CACA,mDACE,kBAAA,CACA,gCAAA,CACA,qCAAA,CAIE,gEACE,6BAAA,CAMN,+BACE,eAAA,CAEF,gDACE,YAAA,CAEF,0DACE,yCAAA",file:"EditAttribute.vue",sourcesContent:["\n.key-value {\n  padding: 0 var(--space-small) var(--space-small) 0;\n  font-family: monospace;\n}\n.multiselect--wrap {\n  margin-bottom: var(--space-normal);\n  .error-message {\n    color: var(--r-400);\n    font-size: var(--font-size-small);\n    font-weight: var(--font-weight-normal);\n  }\n  .invalid {\n    ::v-deep {\n      .multiselect__tags {\n        border: 1px solid var(--r-400);\n      }\n    }\n  }\n}\n::v-deep {\n  .multiselect {\n    margin-bottom: 0;\n  }\n  .multiselect__content-wrapper {\n    display: none;\n  }\n  .multiselect--active .multiselect__tags {\n    border-radius: var(--border-radius-normal);\n  }\n}\n"]}]),t.exports=e},2093:function(t,e,a){"use strict";a(1922)},2094:function(t,e,a){(e=a(66)(!0)).push([t.i,".attribute-key[data-v-731d7264]{font-family:monospace}","",{version:3,sources:["/home/leonardo/chatwoot/app/javascript/dashboard/routes/dashboard/settings/attributes/CustomAttribute.vue"],names:[],mappings:"AACA,gCACE,qBAAA",file:"CustomAttribute.vue",sourcesContent:["\n.attribute-key {\n  font-family: monospace;\n}\n"]}]),t.exports=e},2475:function(t,e,a){"use strict";a.r(e);var n=a(5),r=a(1593),s=(a(33),a(51),a(14),a(9),a(20),a(83),a(44),a(10),a(32),a(143),a(364),a(54),a(24),a(21),a(29),a(23),a(30),a(22),a(118)),i=a(58),o=a(38),l=a(64),u=a(330),c=[{id:0,option:"Conversation"},{id:1,option:"Contact"}],p=[{id:0,option:"Text"},{id:1,option:"Number"},{id:4,option:"Link"},{id:5,option:"Date"},{id:6,option:"List"},{id:7,option:"Checkbox"}];function d(t,e,a,n,r,s,i){try{var o=t[s](i),l=o.value}catch(u){return void a(u)}o.done?e(l):Promise.resolve(l).then(n,r)}function T(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?T(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var _={props:{onClose:{type:Function,default:function(){}},selectedAttributeModelTab:{type:Number,default:0}},setup:function(){return{v$:Object(s.a)()}},data:function(){return{displayName:"",description:"",attributeModel:this.selectedAttributeModelTab||0,attributeType:0,attributeKey:"",regexPattern:null,regexCue:null,regexEnabled:!1,models:c,types:p,values:[],options:[],show:!0,isTouched:!1}},computed:v(v({},Object(o.mapGetters)({uiFlags:"getUIFlags"})),{},{isMultiselectInvalid:function(){return this.isTouched&&0===this.values.length},isTagInputInvalid:function(){return this.isAttributeTypeList&&0===this.values.length},attributeListValues:function(){return this.values.map((function(t){return t.name}))},isButtonDisabled:function(){return this.v$.displayName.$invalid||this.v$.description.$invalid||this.uiFlags.isCreating||this.isTagInputInvalid},keyErrorMessage:function(){return this.v$.attributeKey.isKey?this.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.ERROR"):this.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.IN_VALID")},isAttributeTypeList:function(){return 6===this.attributeType},isAttributeTypeText:function(){return 0===this.attributeType},isRegexEnabled:function(){return this.regexEnabled}}),validations:{displayName:{required:i.f,minLength:Object(i.d)(1)},description:{required:i.f},attributeModel:{required:i.f},attributeType:{required:i.f},attributeKey:{required:i.f,isKey:function(t){return!(t.indexOf(" ")>=0)}}},methods:{addTagValue:function(t){var e={name:t};this.values.push(e),this.$refs.tagInput.$el.focus()},onTouch:function(){this.isTouched=!0},onDisplayNameChange:function(){this.attributeKey=Object(u.a)(this.displayName)},toggleRegexEnabled:function(){this.regexEnabled=!this.regexEnabled},addAttributes:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.v$.$touch(),!e.v$.$invalid){t.next=3;break}return t.abrupt("return");case 3:return e.regexEnabled||(e.regexPattern=null,e.regexCue=null),t.prev=4,t.next=7,e.$store.dispatch("attributes/create",{attribute_display_name:e.displayName,attribute_description:e.description,attribute_model:e.attributeModel,attribute_display_type:e.attributeType,attribute_key:e.attributeKey,attribute_values:e.attributeListValues,regex_pattern:e.regexPattern?new RegExp(e.regexPattern).toString():null,regex_cue:e.regexCue});case 7:e.alertMessage=e.$t("ATTRIBUTES_MGMT.ADD.API.SUCCESS_MESSAGE"),e.onClose(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),a=null===t.t0||void 0===t.t0?void 0:t.t0.message,e.alertMessage=a||e.$t("ATTRIBUTES_MGMT.ADD.API.ERROR_MESSAGE");case 15:return t.prev=15,Object(l.a)(e.alertMessage),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[4,11,15,18]])})),function(){var e=this,a=arguments;return new Promise((function(n,r){var s=t.apply(e,a);function i(t){d(s,n,r,i,o,"next",t)}function o(t){d(s,n,r,i,o,"throw",t)}i(void 0)}))})()}}},f=_,m=(a(2089),a(8)),A=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("woot-modal",{attrs:{show:t.show,"on-close":t.onClose},on:{"update:show":function(e){t.show=e}}},[e("div",{staticClass:"flex flex-col h-auto overflow-auto"},[e("woot-modal-header",{attrs:{"header-title":t.$t("ATTRIBUTES_MGMT.ADD.TITLE")}}),t._v(" "),e("form",{staticClass:"flex w-full",on:{submit:function(e){return e.preventDefault(),t.addAttributes.apply(null,arguments)}}},[e("div",{staticClass:"w-full"},[e("label",{class:{error:t.v$.attributeModel.$error}},[t._v("\n          "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.MODEL.LABEL"))+"\n          "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.attributeModel,expression:"attributeModel"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.attributeModel=e.target.multiple?a:a[0]}}},t._l(t.models,(function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v("\n              "+t._s(a.option)+"\n            ")])})),0),t._v(" "),t.v$.attributeModel.$error?e("span",{staticClass:"message"},[t._v("\n            "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.MODEL.ERROR"))+"\n          ")]):t._e()]),t._v(" "),e("woot-input",{class:{error:t.v$.displayName.$error},attrs:{label:t.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.LABEL"),type:"text",error:t.v$.displayName.$error?t.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.ERROR"):"",placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.PLACEHOLDER")},on:{input:t.onDisplayNameChange,blur:t.v$.displayName.$touch},model:{value:t.displayName,callback:function(e){t.displayName=e},expression:"displayName"}}),t._v(" "),e("woot-input",{class:{error:t.v$.attributeKey.$error},attrs:{label:t.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.LABEL"),type:"text",error:t.v$.attributeKey.$error?t.keyErrorMessage:"",placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.PLACEHOLDER")},on:{blur:t.v$.attributeKey.$touch},model:{value:t.attributeKey,callback:function(e){t.attributeKey=e},expression:"attributeKey"}}),t._v(" "),e("label",{class:{error:t.v$.description.$error}},[t._v("\n          "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.LABEL"))+"\n          "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{rows:"3",type:"text",placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.PLACEHOLDER")},domProps:{value:t.description},on:{blur:t.v$.description.$touch,input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),t.v$.description.$error?e("span",{staticClass:"message"},[t._v("\n            "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.ERROR"))+"\n          ")]):t._e()]),t._v(" "),e("label",{class:{error:t.v$.attributeType.$error}},[t._v("\n          "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LABEL"))+"\n          "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.attributeType,expression:"attributeType"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.attributeType=e.target.multiple?a:a[0]}}},t._l(t.types,(function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v("\n              "+t._s(a.option)+"\n            ")])})),0),t._v(" "),t.v$.attributeType.$error?e("span",{staticClass:"message"},[t._v("\n            "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.ERROR"))+"\n          ")]):t._e()]),t._v(" "),t.isAttributeTypeList?e("div",{staticClass:"multiselect--wrap"},[e("label",[t._v("\n            "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LIST.LABEL"))+"\n          ")]),t._v(" "),e("multiselect",{ref:"tagInput",class:{invalid:t.isMultiselectInvalid},attrs:{placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LIST.PLACEHOLDER"),label:"name","track-by":"name",options:t.options,multiple:"",taggable:""},on:{close:t.onTouch,tag:t.addTagValue},model:{value:t.values,callback:function(e){t.values=e},expression:"values"}}),t._v(" "),e("label",{directives:[{name:"show",rawName:"v-show",value:t.isMultiselectInvalid,expression:"isMultiselectInvalid"}],staticClass:"error-message"},[t._v("\n            "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LIST.ERROR"))+"\n          ")])],1):t._e(),t._v(" "),t.isAttributeTypeText?e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.regexEnabled,expression:"regexEnabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.regexEnabled)?t._i(t.regexEnabled,null)>-1:t.regexEnabled},on:{input:t.toggleRegexEnabled,change:function(e){var a=t.regexEnabled,n=e.target,r=!!n.checked;if(Array.isArray(a)){var s=t._i(a,null);n.checked?s<0&&(t.regexEnabled=a.concat([null])):s>-1&&(t.regexEnabled=a.slice(0,s).concat(a.slice(s+1)))}else t.regexEnabled=r}}}),t._v("\n          "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.ENABLE_REGEX.LABEL"))+"\n        ")]):t._e(),t._v(" "),t.isAttributeTypeText&&t.isRegexEnabled?e("woot-input",{attrs:{label:t.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_PATTERN.LABEL"),type:"text",placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_PATTERN.PLACEHOLDER")},model:{value:t.regexPattern,callback:function(e){t.regexPattern=e},expression:"regexPattern"}}):t._e(),t._v(" "),t.isAttributeTypeText&&t.isRegexEnabled?e("woot-input",{attrs:{label:t.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_CUE.LABEL"),type:"text",placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_CUE.PLACEHOLDER")},model:{value:t.regexCue,callback:function(e){t.regexCue=e},expression:"regexCue"}}):t._e(),t._v(" "),e("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[e("woot-submit-button",{attrs:{disabled:t.isButtonDisabled,"button-text":t.$t("ATTRIBUTES_MGMT.ADD.SUBMIT")}}),t._v(" "),e("button",{staticClass:"button clear",on:{click:function(e){return e.preventDefault(),t.onClose.apply(null,arguments)}}},[t._v("\n            "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.CANCEL_BUTTON_TEXT"))+"\n          ")])],1)],1)])],1)])}),[],!1,null,"2a0cc54b",null),E=A.exports,h=(a(41),a(142),a(218));function g(t,e,a,n,r,s,i){try{var o=t[s](i),l=o.value}catch(u){return void a(u)}o.done?e(l):Promise.resolve(l).then(n,r)}var y={components:{},props:{selectedAttribute:{type:Object,default:function(){}},isUpdating:{type:Boolean,default:!1}},setup:function(){return{v$:Object(s.a)()}},data:function(){return{displayName:"",description:"",attributeType:0,regexPattern:null,regexCue:null,regexEnabled:!1,types:p,show:!0,attributeKey:"",values:[],options:[],isTouched:!0}},validations:{displayName:{required:i.f},attributeType:{required:i.f},description:{required:i.f,minLength:Object(i.d)(1)},attributeKey:{required:i.f,isKey:function(t){return!(t.indexOf(" ")>=0)}}},computed:{setAttributeListValue:function(){return this.selectedAttribute.attribute_values.map((function(t){return{name:t}}))},updatedAttributeListValues:function(){return this.values.map((function(t){return t.name}))},isButtonDisabled:function(){return this.v$.description.$invalid||this.isMultiselectInvalid},isMultiselectInvalid:function(){return this.isAttributeTypeList&&this.isTouched&&0===this.values.length},pageTitle:function(){return"".concat(this.$t("ATTRIBUTES_MGMT.EDIT.TITLE")," - ").concat(this.selectedAttribute.attribute_display_name)},selectedAttributeType:function(){var t=this;return this.types.find((function(e){return e.option.toLowerCase()===t.selectedAttribute.attribute_display_type})).id},keyErrorMessage:function(){return this.v$.attributeKey.isKey?this.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.ERROR"):this.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.IN_VALID")},isAttributeTypeList:function(){return 6===this.attributeType},isAttributeTypeText:function(){return 0===this.attributeType},isRegexEnabled:function(){return this.regexEnabled}},mounted:function(){this.setFormValues()},methods:{onClose:function(){this.$emit("onClose")},addTagValue:function(t){var e={name:t};this.values.push(e),this.$refs.tagInput.$el.focus()},setFormValues:function(){var t=this.selectedAttribute.regex_pattern?Object(h.a)(this.selectedAttribute.regex_pattern).source:null;this.displayName=this.selectedAttribute.attribute_display_name,this.description=this.selectedAttribute.attribute_description,this.attributeType=this.selectedAttributeType,this.attributeKey=this.selectedAttribute.attribute_key,this.regexPattern=t,this.regexCue=this.selectedAttribute.regex_cue,this.regexEnabled=null!=t,this.values=this.setAttributeListValue},editAttributes:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.v$.$touch(),!e.v$.$invalid){t.next=3;break}return t.abrupt("return");case 3:return e.regexEnabled||(e.regexPattern=null,e.regexCue=null),t.prev=4,t.next=7,e.$store.dispatch("attributes/update",{id:e.selectedAttribute.id,attribute_description:e.description,attribute_display_name:e.displayName,attribute_values:e.updatedAttributeListValues,regex_pattern:e.regexPattern?new RegExp(e.regexPattern).toString():null,regex_cue:e.regexCue});case 7:e.alertMessage=e.$t("ATTRIBUTES_MGMT.EDIT.API.SUCCESS_MESSAGE"),e.onClose(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),a=null===t.t0||void 0===t.t0?void 0:t.t0.message,e.alertMessage=a||e.$t("ATTRIBUTES_MGMT.EDIT.API.ERROR_MESSAGE");case 15:return t.prev=15,Object(l.a)(e.alertMessage),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[4,11,15,18]])})),function(){var e=this,a=arguments;return new Promise((function(n,r){var s=t.apply(e,a);function i(t){g(s,n,r,i,o,"next",t)}function o(t){g(s,n,r,i,o,"throw",t)}i(void 0)}))})()},toggleRegexEnabled:function(){this.regexEnabled=!this.regexEnabled}}},x=y,M=(a(2091),Object(m.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col h-auto overflow-auto"},[e("woot-modal-header",{attrs:{"header-title":t.pageTitle}}),t._v(" "),e("form",{staticClass:"flex flex-col w-full",on:{submit:function(e){return e.preventDefault(),t.editAttributes.apply(null,arguments)}}},[e("div",{staticClass:"w-full"},[e("woot-input",{class:{error:t.v$.displayName.$error},attrs:{label:t.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.LABEL"),type:"text",error:t.v$.displayName.$error?t.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.ERROR"):"",placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.PLACEHOLDER")},on:{blur:t.v$.displayName.$touch},model:{value:t.displayName,callback:function(e){t.displayName="string"===typeof e?e.trim():e},expression:"displayName"}}),t._v(" "),e("woot-input",{class:{error:t.v$.attributeKey.$error},attrs:{label:t.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.LABEL"),type:"text",error:t.v$.attributeKey.$error?t.keyErrorMessage:"",placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.PLACEHOLDER"),readonly:""},on:{blur:t.v$.attributeKey.$touch},model:{value:t.attributeKey,callback:function(e){t.attributeKey="string"===typeof e?e.trim():e},expression:"attributeKey"}}),t._v(" "),e("label",{class:{error:t.v$.description.$error}},[t._v("\n        "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.LABEL"))+"\n        "),e("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.description,expression:"description",modifiers:{trim:!0}}],attrs:{rows:"5",type:"text",placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.PLACEHOLDER")},domProps:{value:t.description},on:{blur:[t.v$.description.$touch,function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||(t.description=e.target.value.trim())}}}),t._v(" "),t.v$.description.$error?e("span",{staticClass:"message"},[t._v("\n          "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.ERROR"))+"\n        ")]):t._e()]),t._v(" "),e("label",{class:{error:t.v$.attributeType.$error}},[t._v("\n        "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LABEL"))+"\n        "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.attributeType,expression:"attributeType"}],attrs:{disabled:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.attributeType=e.target.multiple?a:a[0]}}},t._l(t.types,(function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v("\n            "+t._s(a.option)+"\n          ")])})),0),t._v(" "),t.v$.attributeType.$error?e("span",{staticClass:"message"},[t._v("\n          "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.ERROR"))+"\n        ")]):t._e()]),t._v(" "),t.isAttributeTypeList?e("div",{staticClass:"multiselect--wrap"},[e("label",[t._v("\n          "+t._s(t.$t("ATTRIBUTES_MGMT.EDIT.TYPE.LIST.LABEL"))+"\n        ")]),t._v(" "),e("multiselect",{ref:"tagInput",class:{invalid:t.isMultiselectInvalid},attrs:{placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LIST.PLACEHOLDER"),label:"name","track-by":"name",options:t.options,multiple:"",taggable:""},on:{tag:t.addTagValue},model:{value:t.values,callback:function(e){t.values=e},expression:"values"}}),t._v(" "),e("label",{directives:[{name:"show",rawName:"v-show",value:t.isMultiselectInvalid,expression:"isMultiselectInvalid"}],staticClass:"error-message"},[t._v("\n          "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LIST.ERROR"))+"\n        ")])],1):t._e(),t._v(" "),t.isAttributeTypeText?e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.regexEnabled,expression:"regexEnabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.regexEnabled)?t._i(t.regexEnabled,null)>-1:t.regexEnabled},on:{input:t.toggleRegexEnabled,change:function(e){var a=t.regexEnabled,n=e.target,r=!!n.checked;if(Array.isArray(a)){var s=t._i(a,null);n.checked?s<0&&(t.regexEnabled=a.concat([null])):s>-1&&(t.regexEnabled=a.slice(0,s).concat(a.slice(s+1)))}else t.regexEnabled=r}}}),t._v("\n        "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.FORM.ENABLE_REGEX.LABEL"))+"\n      ")]):t._e(),t._v(" "),t.isAttributeTypeText&&t.isRegexEnabled?e("woot-input",{attrs:{label:t.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_PATTERN.LABEL"),type:"text",placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_PATTERN.PLACEHOLDER")},model:{value:t.regexPattern,callback:function(e){t.regexPattern=e},expression:"regexPattern"}}):t._e(),t._v(" "),t.isAttributeTypeText&&t.isRegexEnabled?e("woot-input",{attrs:{label:t.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_CUE.LABEL"),type:"text",placeholder:t.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_CUE.PLACEHOLDER")},model:{value:t.regexCue,callback:function(e){t.regexCue=e},expression:"regexCue"}}):t._e()],1),t._v(" "),e("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[e("woot-button",{attrs:{"is-loading":t.isUpdating,disabled:t.isButtonDisabled}},[t._v("\n        "+t._s(t.$t("ATTRIBUTES_MGMT.EDIT.UPDATE_BUTTON_TEXT"))+"\n      ")]),t._v(" "),e("woot-button",{attrs:{variant:"clear"},on:{click:function(e){return e.preventDefault(),t.onClose.apply(null,arguments)}}},[t._v("\n        "+t._s(t.$t("ATTRIBUTES_MGMT.ADD.CANCEL_BUTTON_TEXT"))+"\n      ")])],1)])],1)}),[],!1,null,"7404e77e",null)),R=M.exports,C=a(199),w=a(363);function D(t,e,a,n,r,s,i){try{var o=t[s](i),l=o.value}catch(u){return void a(u)}o.done?e(l):Promise.resolve(l).then(n,r)}var O={__name:"CustomAttribute",props:{attributeModel:{type:String,default:"conversation_attribute"}},setup:function(t){var e=t,a=Object(w.a)().t,r=Object(n.ref)(!1),s=Object(n.ref)(!1),i=Object(n.ref)({}),o=Object(C.c)(),u=Object(C.b)(),c=Object(n.computed)((function(){return o["attributes/getAttributesByModel"].value(e.attributeModel)})),p=Object(n.computed)((function(){return o["attributes/getUIFlags"].value})),d=Object(n.computed)((function(){return i.value.attribute_display_name})),T=Object(n.computed)((function(){return"".concat(a("ATTRIBUTES_MGMT.DELETE.CONFIRM.YES")," ").concat(d.value)})),v=Object(n.computed)((function(){return a("ATTRIBUTES_MGMT.DELETE.CONFIRM.NO")})),b=Object(n.computed)((function(){return a("ATTRIBUTES_MGMT.DELETE.CONFIRM.TITLE",{attributeName:d.value})})),_=Object(n.computed)((function(){return"".concat(a("ATTRIBUTES_MGMT.DELETE.CONFIRM.PLACE_HOLDER",{attributeName:d.value}))})),f=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){var n,r,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.prev=1,t.next=4,u.dispatch("attributes/delete",n);case 4:Object(l.a)(a("ATTRIBUTES_MGMT.DELETE.API.SUCCESS_MESSAGE")),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),s=(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r?void 0:r.message)||a("ATTRIBUTES_MGMT.DELETE.API.ERROR_MESSAGE"),Object(l.a)(s);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})),function(){var e=this,a=arguments;return new Promise((function(n,r){var s=t.apply(e,a);function i(t){D(s,n,r,i,o,"next",t)}function o(t){D(s,n,r,i,o,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}(),m=function(){s.value=!1,i.value={}};return{__sfc:!0,props:e,t:a,showEditPopup:r,showDeletePopup:s,selectedAttribute:i,getters:o,store:u,attributes:c,uiFlags:p,attributeDisplayName:d,deleteConfirmText:T,deleteRejectText:v,confirmDeleteTitle:b,confirmPlaceHolderText:_,deleteAttributes:f,openEditPopup:function(t){r.value=!0,i.value=t},hideEditPopup:function(){r.value=!1},closeDelete:m,confirmDeletion:function(){f(i.value),m()},openDelete:function(t){s.value=!0,i.value=t},EditAttribute:R}}},S=O,B=(a(2093),Object(m.a)(S,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e("div",{staticClass:"flex flex-col"},[e("table",{staticClass:"min-w-full overflow-x-auto"},[e("thead",t._l(t.$t("ATTRIBUTES_MGMT.LIST.TABLE_HEADER"),(function(a){return e("th",{key:a,staticClass:"py-4 ltr:pr-4 rtl:pl-4 text-left font-semibold text-slate-700 dark:text-slate-300"},[t._v("\n        "+t._s(a)+"\n      ")])})),0),t._v(" "),e("tbody",{staticClass:"divide-y divide-slate-25 dark:divide-slate-800 flex-1 text-slate-700 dark:text-slate-100"},t._l(a.attributes,(function(n){return e("tr",{key:n.attribute_key},[e("td",{staticClass:"py-4 ltr:pr-4 rtl:pl-4 overflow-hidden whitespace-nowrap text-ellipsis"},[t._v("\n          "+t._s(n.attribute_display_name)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 ltr:pr-4 rtl:pl-4"},[t._v("\n          "+t._s(n.attribute_description)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 ltr:pr-4 rtl:pl-4 overflow-hidden whitespace-nowrap text-ellipsis"},[t._v("\n          "+t._s(n.attribute_display_type)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 ltr:pr-4 rtl:pl-4 attribute-key overflow-hidden whitespace-nowrap text-ellipsis"},[t._v("\n          "+t._s(n.attribute_key)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 min-w-xs"},[e("div",{staticClass:"flex gap-1"},[e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("ATTRIBUTES_MGMT.LIST.BUTTONS.EDIT"),expression:"$t('ATTRIBUTES_MGMT.LIST.BUTTONS.EDIT')",modifiers:{top:!0}}],attrs:{variant:"smooth",size:"tiny","color-scheme":"secondary","class-names":"grey-btn",icon:"edit"},on:{click:function(t){return a.openEditPopup(n)}}}),t._v(" "),e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("ATTRIBUTES_MGMT.LIST.BUTTONS.DELETE"),expression:"$t('ATTRIBUTES_MGMT.LIST.BUTTONS.DELETE')",modifiers:{top:!0}}],attrs:{variant:"smooth","color-scheme":"alert",size:"tiny",icon:"dismiss-circle","class-names":"grey-btn"},on:{click:function(t){return a.openDelete(n)}}})],1)])])})),0)]),t._v(" "),e("woot-modal",{attrs:{show:a.showEditPopup,"on-close":a.hideEditPopup},on:{"update:show":function(t){a.showEditPopup=t}}},[e(a.EditAttribute,{attrs:{"selected-attribute":a.selectedAttribute,"is-updating":a.uiFlags.isUpdating},on:{onClose:a.hideEditPopup}})],1),t._v(" "),a.showDeletePopup?e("woot-confirm-delete-modal",{attrs:{show:a.showDeletePopup,title:a.confirmDeleteTitle,message:t.$t("ATTRIBUTES_MGMT.DELETE.CONFIRM.MESSAGE"),"confirm-text":a.deleteConfirmText,"reject-text":a.deleteRejectText,"confirm-value":a.selectedAttribute.attribute_display_name,"confirm-place-holder-text":a.confirmPlaceHolderText},on:{"update:show":function(t){a.showDeletePopup=t},onConfirm:a.confirmDeletion,onClose:a.closeDelete}}):t._e()],1)}),[],!1,null,"731d7264",null).exports),I=a(1595),$={__name:"Index",setup:function(t){var e=Object(w.a)().t,a=Object(C.c)(),s=Object(C.b)(),i=Object(n.ref)(!1),o=Object(n.ref)(0),l=Object(n.computed)((function(){return a["attributes/getUIFlags"].value})),u=Object(n.computed)((function(){return[{key:0,name:e("ATTRIBUTES_MGMT.TABS.CONVERSATION")},{key:1,name:e("ATTRIBUTES_MGMT.TABS.CONTACT")}]}));Object(n.onMounted)((function(){s.dispatch("attributes/get")}));var c=Object(n.computed)((function(){return o.value?"contact_attribute":"conversation_attribute"})),p=Object(n.computed)((function(){return a["attributes/getAttributesByModel"].value(c.value)}));return{__sfc:!0,t:e,getters:a,store:s,showAddPopup:i,selectedTabIndex:o,uiFlags:l,openAddPopup:function(){i.value=!0},hideAddPopup:function(){i.value=!1},tabs:u,attributeModel:c,attributes:p,onClickTabChange:function(t){o.value=t},BaseSettingsHeader:r.a,AddAttribute:E,CustomAttribute:B,SettingsLayout:I.a}}},L=Object(m.a)($,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e(a.SettingsLayout,{attrs:{"is-loading":a.uiFlags.isFetching,"loading-message":t.$t("ATTRIBUTES_MGMT.LOADING"),"no-records-found":!a.attributes.length,"no-records-message":t.$t("ATTRIBUTES_MGMT.LIST.EMPTY_RESULT.404")},scopedSlots:t._u([{key:"header",fn:function(){return[e(a.BaseSettingsHeader,{attrs:{title:t.$t("ATTRIBUTES_MGMT.HEADER"),description:t.$t("ATTRIBUTES_MGMT.DESCRIPTION"),"link-text":t.$t("ATTRIBUTES_MGMT.LEARN_MORE"),"feature-name":"custom_attributes"},scopedSlots:t._u([{key:"actions",fn:function(){return[e("woot-button",{staticClass:"button nice rounded-md",attrs:{icon:"add-circle"},on:{click:a.openAddPopup}},[t._v("\n          "+t._s(t.$t("ATTRIBUTES_MGMT.HEADER_BTN_TXT"))+"\n        ")])]},proxy:!0}])})]},proxy:!0},{key:"preBody",fn:function(){return[e("woot-tabs",{staticClass:"font-medium [&_.tabs]:p-0 mb-4",attrs:{index:a.selectedTabIndex},on:{change:a.onClickTabChange}},t._l(a.tabs,(function(t){return e("woot-tabs-item",{key:t.key,attrs:{name:t.name,"show-badge":!1}})})),1)]},proxy:!0},{key:"body",fn:function(){return[e(a.CustomAttribute,{key:a.attributeModel,attrs:{"attribute-model":a.attributeModel}})]},proxy:!0}])},[t._v(" "),t._v(" "),t._v(" "),a.showAddPopup?e("woot-modal",{attrs:{show:a.showAddPopup,"on-close":a.hideAddPopup},on:{"update:show":function(t){a.showAddPopup=t}}},[e(a.AddAttribute,{attrs:{"on-close":a.hideAddPopup,"selected-attribute-model-tab":a.selectedTabIndex}})],1):t._e()],1)}),[],!1,null,null,null);e.default=L.exports}}]);
//# sourceMappingURL=52-4248937ed1ffb84b4e89.chunk.js.map