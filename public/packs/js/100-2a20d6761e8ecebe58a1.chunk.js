(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1592:function(t,e,a){"use strict";var n=a(252),s={__name:"BackButton",props:{backUrl:{type:[String,Object],default:""},buttonLabel:{type:String,default:""},compact:{type:Boolean,default:!1}},setup:function(t){var e=t,a=e.compact?"text-sm text-slate-600 dark:text-slate-300":"text-base text-woot-500 dark:text-woot-500";return{__sfc:!0,props:e,goBack:function(){""!==e.backUrl?n.a.push(e.backUrl):n.a.go(-1)},buttonStyleClass:a}}},o=a(8),r=Object(o.a)(s,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e("button",{staticClass:"flex items-center p-0 font-normal cursor-pointer",class:a.buttonStyleClass,on:{"!click":function(t){return a.goBack.apply(null,arguments)}}},[e("fluent-icon",{staticClass:"-ml-1",attrs:{icon:"chevron-left"}}),t._v("\n  "+t._s(t.buttonLabel||t.$t("GENERAL_SETTINGS.BACK"))+"\n")],1)}),[],!1,null,null,null);e.a=r.exports},1593:function(t,e,a){"use strict";var n=a(199),s=a(5),o={__name:"CustomBrandPolicyWrapper",props:{showOnCustomBrandedInstance:{type:Boolean,default:!0}},setup:function(t){var e=t,a=Object(n.c)(),o=a["globalConfig/isACustomBrandedInstance"],r=Object(s.computed)((function(){return e.showOnCustomBrandedInstance||!o.value}));return{__sfc:!0,props:e,getters:a,isACustomBrandedInstance:o,shouldShowContent:r}}},r=a(8),i=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t._self._setupProxy.shouldShowContent?e("div",[t._t("default")],2):t._e()}),[],!1,null,null,null).exports,l={agent_bots:"https://chwt.app/hc/agent-bots",agents:"https://chwt.app/hc/agents",audit_logs:"https://chwt.app/hc/audit-logs",campaigns:"https://chwt.app/hc/campaigns",canned_responses:"https://chwt.app/hc/canned",channel_email:"https://chwt.app/hc/email",channel_facebook:"https://chwt.app/hc/fb",custom_attributes:"https://chwt.app/hc/custom-attributes",dashboard_apps:"https://chwt.app/hc/dashboard-apps",help_center:"https://chwt.app/hc/help-center",inboxes:"https://chwt.app/hc/inboxes",integrations:"https://chwt.app/hc/integrations",labels:"https://chwt.app/hc/labels",macros:"https://chwt.app/hc/macros",message_reply_to:"https://chwt.app/hc/reply-to",reports:"https://chwt.app/hc/reports",sla:"https://chwt.app/hc/sla",captain:"https://chwt.app/hc/captain",team_management:"https://chwt.app/hc/teams",webhook:"https://chwt.app/hc/webhooks"};var p=a(1592),c={__name:"BaseSettingsHeader",props:{title:{type:String,required:!0},description:{type:String,required:!0},iconName:{type:String,default:""},linkText:{type:String,default:""},featureName:{type:String,default:""},backButtonLabel:{type:String,default:""}},setup:function(t){var e;return{__sfc:!0,props:t,helpURL:(e=t.featureName,l[e]),openInNewTab:function(t){t&&window.open(t,"_blank","noopener noreferrer")},CustomBrandPolicyWrapper:i,BackButton:p.a}}},u=Object(r.a)(c,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e("div",{staticClass:"flex flex-col items-start w-full gap-2 pt-4"},[t.backButtonLabel?e(a.BackButton,{attrs:{compact:"","button-label":t.backButtonLabel}}):t._e(),t._v(" "),e("div",{staticClass:"flex items-center justify-between w-full gap-4"},[e("div",{staticClass:"flex items-center gap-3"},[t.iconName?e("div",{staticClass:"flex items-center w-10 h-10 p-1 rounded-full bg-woot-25/60 dark:bg-woot-900/60"},[e("div",{staticClass:"flex items-center justify-center w-full h-full rounded-full bg-woot-75/70 dark:bg-woot-800/40"},[e("fluent-icon",{staticClass:"flex-shrink-0 text-woot-500 dark:text-woot-500",attrs:{size:"14",icon:t.iconName,type:"outline"}})],1)]):t._e(),t._v(" "),e("h1",{staticClass:"text-2xl font-semibold font-interDisplay tracking-[0.3px] text-slate-900 dark:text-slate-25"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),e("div",{staticClass:"hidden gap-2 sm:flex"},[t._t("actions")],2)]),t._v(" "),e("div",{staticClass:"flex flex-col gap-3 text-slate-600 dark:text-slate-300 w-full"},[e("p",{staticClass:"mb-0 text-base font-normal line-clamp-5 sm:line-clamp-none max-w-3xl tracking-[-0.1px]"},[t._t("description",(function(){return[t._v(t._s(t.description))]}))],2),t._v(" "),e(a.CustomBrandPolicyWrapper,{attrs:{"show-on-custom-branded-instance":!1}},[a.helpURL&&t.linkText?e("a",{staticClass:"sm:inline-flex hidden gap-1 w-fit items-center text-woot-500 dark:text-woot-500 text-sm font-medium hover:underline",attrs:{href:a.helpURL,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.linkText)+"\n        "),e("fluent-icon",{staticClass:"flex-shrink-0 text-woot-500 dark:text-woot-500",attrs:{size:"16",icon:"chevron-right",type:"outline"}})],1):t._e()])],1),t._v(" "),e("div",{staticClass:"flex items-start justify-start w-full gap-3 sm:hidden flex-wrap"},[t._t("actions"),t._v(" "),e(a.CustomBrandPolicyWrapper,{attrs:{"show-on-custom-branded-instance":!1}},[a.helpURL&&t.linkText?e("woot-button",{staticClass:"flex-row-reverse rounded-md min-w-0 !bg-slate-50 !text-slate-900 dark:!text-white dark:!bg-slate-800",attrs:{"color-scheme":"secondary",icon:"arrow-outwards"},on:{click:function(t){return a.openInNewTab(a.helpURL)}}},[t._v("\n        "+t._s(t.linkText)+"\n      ")]):t._e()],1)],2)],1)}),[],!1,null,null,null);e.a=u.exports},2485:function(t,e,a){"use strict";a.r(e);a(24),a(10),a(21),a(29),a(23),a(30),a(9),a(22),a(33);var n=a(38),s=a(64),o=a(118),r=a(58);function i(t,e,a,n,s,o,r){try{var i=t[o](r),l=i.value}catch(p){return void a(p)}i.done?e(l):Promise.resolve(l).then(n,s)}var l={props:{show:{type:Boolean,default:!1},mode:{type:String,default:"create"},selectedAppData:{type:Object,default:function(){return{}}}},setup:function(){return{v$:Object(o.a)()}},validations:{app:{title:{required:r.f},content:{type:{required:r.f},url:{required:r.f,url:r.h}}}},data:function(){return{isLoading:!1,app:{title:"",content:{type:"frame",url:""}}}},computed:{header:function(){return this.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.".concat(this.mode,".HEADER"))},submitButtonLabel:function(){return this.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.".concat(this.mode,".FORM_SUBMIT"))}},mounted:function(){"UPDATE"===this.mode&&this.selectedAppData&&(this.app.title=this.selectedAppData.title,this.app.content=this.selectedAppData.content[0])},methods:{closeModal:function(){this.app={title:"",content:{type:"frame",url:""}},this.$emit("close")},submit:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.v$.$touch(),!e.v$.$invalid){t.next=4;break}return t.abrupt("return");case 4:return a=e.mode.toLowerCase(),n={title:e.app.title,content:[e.app.content]},"update"===a&&(n.id=e.selectedAppData.id),e.isLoading=!0,t.next=10,e.$store.dispatch("dashboardApps/".concat(a),n);case 10:Object(s.a)(e.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.".concat(e.mode,".API_SUCCESS"))),e.closeModal(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),Object(s.a)(e.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.".concat(e.mode,".API_ERROR")));case 17:return t.prev=17,e.isLoading=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})),function(){var e=this,a=arguments;return new Promise((function(n,s){var o=t.apply(e,a);function r(t){i(o,n,s,r,l,"next",t)}function l(t){i(o,n,s,r,l,"throw",t)}r(void 0)}))})()}}},p=l,c=a(8),u=Object(c.a)(p,(function(){var t=this,e=t._self._c;return e("woot-modal",{attrs:{show:t.show,"on-close":t.closeModal}},[e("div",{staticClass:"flex flex-col h-auto overflow-auto"},[e("woot-modal-header",{attrs:{"header-title":t.header}}),t._v(" "),e("form",{staticClass:"w-full",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("woot-input",{staticClass:"w-full",class:{error:t.v$.app.title.$error},attrs:{label:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.TITLE_LABEL"),placeholder:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.TITLE_PLACEHOLDER"),error:t.v$.app.title.$error?t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.TITLE_ERROR"):null,"data-testid":"app-title"},on:{input:t.v$.app.title.$touch},model:{value:t.app.title,callback:function(e){t.$set(t.app,"title","string"===typeof e?e.trim():e)},expression:"app.title"}}),t._v(" "),e("woot-input",{staticClass:"w-full",class:{error:t.v$.app.content.url.$error},attrs:{label:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.URL_LABEL"),placeholder:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.URL_PLACEHOLDER"),error:t.v$.app.content.url.$error?t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.URL_ERROR"):null,"data-testid":"app-url"},on:{input:t.v$.app.content.url.$touch},model:{value:t.app.content.url,callback:function(e){t.$set(t.app.content,"url","string"===typeof e?e.trim():e)},expression:"app.content.url"}}),t._v(" "),e("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[e("woot-button",{attrs:{"is-loading":t.isLoading,"is-disabled":t.v$.$invalid,"data-testid":"label-submit"}},[t._v("\n          "+t._s(t.submitButtonLabel)+"\n        ")]),t._v(" "),e("woot-button",{staticClass:"button clear",on:{click:function(e){return e.preventDefault(),t.closeModal.apply(null,arguments)}}},[t._v("\n          "+t._s(t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.CREATE.FORM_CANCEL"))+"\n        ")])],1)],1)],1)])}),[],!1,null,null,null),d=u.exports,h={__name:"DashboardAppsRow",props:{app:{type:Object,default:function(){return{}}}},emits:["edit","delete"],setup:function(t){return{__sfc:!0}}},f=Object(c.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("tr",{staticClass:"max-w-full py-1"},[e("td",{staticClass:"py-4 pr-4 text-sm w-40 max-w-[10rem] truncate",attrs:{title:t.app.title}},[t._v("\n    "+t._s(t.app.title)+"\n  ")]),t._v(" "),e("td",{staticClass:"max-w-lg py-4 pr-4 text-sm truncate",attrs:{title:t.app.content[0].url}},[t._v("\n    "+t._s(t.app.content[0].url)+"\n  ")]),t._v(" "),e("td",{staticClass:"flex gap-2 py-4 pr-4 text-sm sm:pr-0"},[e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.EDIT_TOOLTIP"),expression:"\n        $t('INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.EDIT_TOOLTIP')\n      ",modifiers:{top:!0}}],attrs:{variant:"smooth",size:"tiny","color-scheme":"secondary","class-names":"grey-btn",icon:"edit"},on:{click:function(e){return t.$emit("edit",t.app)}}}),t._v(" "),e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.DELETE_TOOLTIP"),expression:"\n        $t('INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.DELETE_TOOLTIP')\n      ",modifiers:{top:!0}}],attrs:{variant:"smooth","color-scheme":"alert",size:"tiny",icon:"dismiss-circle","class-names":"grey-btn"},on:{click:function(e){return t.$emit("delete",t.app)}}})],1)])}),[],!1,null,null,null).exports,_=a(384);function A(t,e,a,n,s,o,r){try{var i=t[o](r),l=i.value}catch(p){return void a(p)}i.done?e(l):Promise.resolve(l).then(n,s)}function T(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var S={components:{BaseSettingsHeader:a(1593).a,DashboardAppModal:d,DashboardAppsRow:f},mixins:[_.a],data:function(){return{loading:{},showDashboardAppPopup:!1,showDeleteConfirmationPopup:!1,selectedApp:{},mode:"CREATE"}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?T(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(n.mapGetters)({records:"dashboardApps/getRecords",uiFlags:"dashboardApps/getUIFlags"})),mounted:function(){this.$store.dispatch("dashboardApps/get")},methods:{toggleDashboardAppPopup:function(){this.showDashboardAppPopup=!this.showDashboardAppPopup,this.selectedApp={}},openDeletePopup:function(t){this.showDeleteConfirmationPopup=!0,this.selectedApp=t},openCreatePopup:function(){this.mode="CREATE",this.selectedApp={},this.showDashboardAppPopup=!0},closeDeletePopup:function(){this.showDeleteConfirmationPopup=!1},editApp:function(t){this.loading[t.id]=!0,this.mode="UPDATE",this.selectedApp=t,this.showDashboardAppPopup=!0},confirmDeletion:function(){this.loading[this.selectedApp.id]=!0,this.closeDeletePopup(),this.deleteApp(this.selectedApp.id)},deleteApp:function(t){var e,a=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.$store.dispatch("dashboardApps/delete",t);case 3:Object(s.a)(a.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.API_SUCCESS")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(s.a)(a.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.API_ERROR"));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var t=this,a=arguments;return new Promise((function(n,s){var o=e.apply(t,a);function r(t){A(o,n,s,r,i,"next",t)}function i(t){A(o,n,s,r,i,"throw",t)}r(void 0)}))})()}}},b=S,w=Object(c.a)(b,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col flex-1 gap-8 overflow-auto"},[e("BaseSettingsHeader",{attrs:{title:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.TITLE"),description:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DESCRIPTION"),"link-text":t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LEARN_MORE"),"feature-name":"dashboard_apps","back-button-label":t.$t("INTEGRATION_SETTINGS.HEADER")},scopedSlots:t._u([{key:"actions",fn:function(){return[e("woot-button",{staticClass:"rounded-md button nice",attrs:{icon:"add-circle"},on:{click:t.openCreatePopup}},[t._v("\n        "+t._s(t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.HEADER_BTN_TXT"))+"\n      ")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"w-full overflow-x-auto text-slate-700 dark:text-slate-200"},[t.uiFlags.isFetching||t.records.length?t._e():e("p",{staticClass:"flex flex-col items-center justify-center h-full"},[t._v("\n      "+t._s(t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.404"))+"\n    ")]),t._v(" "),t.uiFlags.isFetching?e("woot-loading-state",{attrs:{message:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.LOADING")}}):t._e(),t._v(" "),!t.uiFlags.isFetching&&t.records.length?e("table",{staticClass:"min-w-full divide-y divide-slate-75 dark:divide-slate-700"},[e("thead",t._l(t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.TABLE_HEADER"),(function(a){return e("th",{key:a,staticClass:"py-4 pr-4 font-semibold text-left text-slate-700 dark:text-slate-300"},[t._v("\n          "+t._s(a)+"\n        ")])})),0),t._v(" "),e("tbody",{staticClass:"divide-y divide-slate-50 dark:divide-slate-800"},t._l(t.records,(function(a,n){return e("DashboardAppsRow",{key:a.id,attrs:{index:n,app:a},on:{edit:t.editApp,delete:t.openDeletePopup}})})),1)]):t._e()],1),t._v(" "),t.showDashboardAppPopup?e("DashboardAppModal",{attrs:{show:t.showDashboardAppPopup,mode:t.mode,"selected-app-data":t.selectedApp},on:{close:t.toggleDashboardAppPopup}}):t._e(),t._v(" "),e("woot-delete-modal",{attrs:{show:t.showDeleteConfirmationPopup,"on-close":t.closeDeletePopup,"on-confirm":t.confirmDeletion,title:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.TITLE"),message:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.MESSAGE",{appName:t.selectedApp.title}),"confirm-text":t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.CONFIRM_YES"),"reject-text":t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.CONFIRM_NO")},on:{"update:show":function(e){t.showDeleteConfirmationPopup=e}}})],1)}),[],!1,null,null,null);e.default=w.exports}}]);
//# sourceMappingURL=100-2a20d6761e8ecebe58a1.chunk.js.map