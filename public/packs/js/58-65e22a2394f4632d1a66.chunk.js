(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1605:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return n}));a(41);var o=function(t){var e=window.chatwootConfig,a=e.hostURL,o=e.helpCenterURL;return"".concat(o||a||"","/hc/").concat(t)},n=function(t,e,a,n){var s=o(t);return"".concat(s,"/articles/").concat(n)}},1781:function(t,e,a){var o=a(65),n=a(1888);"string"===typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};o(n,s);t.exports=n.locals||{}},1782:function(t,e,a){var o=a(65),n=a(1890);"string"===typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};o(n,s);t.exports=n.locals||{}},1887:function(t,e,a){"use strict";a(1781)},1888:function(t,e,a){(e=a(66)(!0)).push([t.i,'table thead tr th[data-v-1b442664] {\n\npadding-left: 0px;\n\npadding-top: 0px;\n\nfont-size: 0.875rem;\n\nline-height: 1.25rem;\n\nfont-weight: 500;\n\ntext-transform: none;\n\n--tw-text-opacity: 1;\n\ncolor: hsl(206 6.0% 43.5% / 1)\n}\n@supports (color: hsl(0 0% 0% / 0)) and (top: var(--f)) {\ntable thead tr th[data-v-1b442664] {\n\ncolor: hsl(206 6.0% 43.5% / var(--tw-text-opacity))\n}\n}\n[data-v-1b442664]:is([dir="rtl"] table thead tr th) {\n\npadding-left: 0.625rem;\n\npadding-right: 0px\n}\n[data-v-1b442664]:is(.dark table thead tr th) {\n\n--tw-text-opacity: 1;\n\ncolor: hsl(207 11.1% 85.9% / 1)\n}\n@supports (color: hsl(0 0% 0% / 0)) and (top: var(--f)) {\n[data-v-1b442664]:is(.dark table thead tr th) {\n\ncolor: hsl(207 11.1% 85.9% / var(--tw-text-opacity))\n}\n}table tbody tr[data-v-1b442664] {\n\nborder-bottom-width: 0px\n}table tbody tr td[data-v-1b442664] {\n\npadding-left: 0px;\n\nfont-size: 0.875rem;\n\nline-height: 1.25rem\n}[data-v-1b442664]:is([dir="rtl"] table tbody tr td) {\n\npadding-left: 0.625rem;\n\npadding-right: 0px\n}table tbody tr td .default-status[data-v-1b442664] {\n\npadding-top: 0px;\n\npadding-bottom: 0px;\n\npadding-right: 0px;\n\npadding-left: 0.25rem\n}table tbody tr td span[data-v-1b442664] {\n\n--tw-text-opacity: 1;\n\ncolor: hsl(207 5.6% 31.6% / 1)\n}@supports (color: hsl(0 0% 0% / 0)) and (top: var(--f)) {\ntable tbody tr td span[data-v-1b442664] {\n\ncolor: hsl(207 5.6% 31.6% / var(--tw-text-opacity))\n}\n}[data-v-1b442664]:is(.dark table tbody tr td span) {\n\n--tw-text-opacity: 1;\n\ncolor: hsl(207 11.1% 85.9% / 1)\n}@supports (color: hsl(0 0% 0% / 0)) and (top: var(--f)) {\n[data-v-1b442664]:is(.dark table tbody tr td span) {\n\ncolor: hsl(207 11.1% 85.9% / var(--tw-text-opacity))\n}\n}.horizontal-line[data-v-1b442664] {\n\nborder-bottom-width: 1px;\n\nborder-style: solid;\n\n--tw-border-opacity: 1;\n\nborder-color: hsl(209 12.2% 93.2% / 1)\n}@supports (color: hsl(0 0% 0% / 0)) and (top: var(--f)) {\n.horizontal-line[data-v-1b442664] {\n\nborder-color: hsl(209 12.2% 93.2% / var(--tw-border-opacity))\n}\n}[data-v-1b442664]:is(.dark .horizontal-line) {\n\n--tw-border-opacity: 1;\n\nborder-color: hsl(207 5.6% 31.6% / 1)\n}@supports (color: hsl(0 0% 0% / 0)) and (top: var(--f)) {\n[data-v-1b442664]:is(.dark .horizontal-line) {\n\nborder-color: hsl(207 5.6% 31.6% / var(--tw-border-opacity))\n}\n}',"",{version:3,sources:["/home/leonardo/chatwoot/app/javascript/dashboard/routes/dashboard/helpcenter/components/PortalListItemTable.vue"],names:[],mappings:"AAGI;;AAAA,iBAAA;;AAAA,gBAAA;;AAAA,mBAAA;;AAAA,oBAAA;;AAAA,gBAAA;;AAAA,oBAAA;;AAAA,oBAAA;;AAAA;AAAA;AAAA;AAAA;;AAAA;AAAA;AAAA;AAAA;;AAAA,sBAAA;;AAAA;AAAA;AAAA;;AAAA,oBAAA;;AAAA;AAAA;AAAA;AAAA;;AAAA;AAAA;AAAA,CAIA;;AAAA;AAAA,CAEE;;AAAA,iBAAA;;AAAA,mBAAA;;AAAA;AAAA,CAAA;;AAAA,sBAAA;;AAAA;AAAA,CAEE;;AAAA,gBAAA;;AAAA,mBAAA;;AAAA,kBAAA;;AAAA;AAAA,CAGA;;AAAA,oBAAA;;AAAA;AAAA,CAAA;AAAA;;AAAA;AAAA;AAAA,CAAA;;AAAA,oBAAA;;AAAA;AAAA,CAAA;AAAA;;AAAA;AAAA;AAAA,CAMN;;AAAA,wBAAA;;AAAA,mBAAA;;AAAA,sBAAA;;AAAA;AAAA,CAAA;AAAA;;AAAA;AAAA;AAAA,CAAA;;AAAA,sBAAA;;AAAA;AAAA,CAAA;AAAA;;AAAA;AAAA;AAAA",file:"PortalListItemTable.vue",sourcesContent:["\ntable {\n  thead tr th {\n    @apply text-sm font-medium normal-case text-slate-600 dark:text-slate-200 pl-0 rtl:pl-2.5 rtl:pr-0 pt-0;\n  }\n\n  tbody tr {\n    @apply border-b-0;\n    td {\n      @apply text-sm pl-0 rtl:pl-2.5 rtl:pr-0;\n      .default-status {\n        @apply py-0 pr-0 pl-1;\n      }\n      span {\n        @apply text-slate-700 dark:text-slate-200;\n      }\n    }\n  }\n}\n.horizontal-line {\n  @apply border-b border-solid border-slate-75 dark:border-slate-700;\n}\n"]}]),t.exports=e},1889:function(t,e,a){"use strict";a(1782)},1890:function(t,e,a){(e=a(66)(!0)).push([t.i,".input-container[data-v-6b29b01a]{margin:0 0 var(--space-normal)}.input-container[data-v-6b29b01a] input{margin-bottom:0}.input-container[data-v-6b29b01a] .message{margin-top:0}","",{version:3,sources:["/home/leonardo/chatwoot/app/javascript/dashboard/routes/dashboard/helpcenter/components/AddLocale.vue"],names:[],mappings:"AACA,kCACE,8BAAA,CAEA,wCACE,eAAA,CAEF,2CACE,YAAA",file:"AddLocale.vue",sourcesContent:["\n.input-container::v-deep {\n  margin: 0 0 var(--space-normal);\n\n  input {\n    margin-bottom: 0;\n  }\n  .message {\n    margin-top: 0;\n  }\n}\n"]}]),t.exports=e},1907:function(t,e,a){"use strict";var o={mixins:[a(732).a],props:{locales:{type:Array,default:function(){return[]}},selectedLocaleCode:{type:String,default:""}},methods:{changeDefaultLocale:function(t){this.$emit("changeDefaultLocale",{localeCode:t})},deleteLocale:function(t){this.$emit("delete",{localeCode:t})}}},n=(a(1887),a(8)),s=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("table",{staticClass:"woot-table"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.NAME"))+"\n      ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.CODE"))+"\n      ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.ARTICLE_COUNT"))+"\n      ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.CATEGORIES"))+"\n      ")]),t._v(" "),e("th",{attrs:{scope:"col"}})])]),t._v(" "),t._m(0),t._v(" "),e("tbody",t._l(t.locales,(function(a){return e("tr",{key:a.code},[e("td",[e("span",[t._v(t._s(t.localeName(a.code)))]),t._v(" "),a.code===t.selectedLocaleCode?e("woot-label",{staticClass:"default-status",attrs:{title:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.DEFAULT_LOCALE"),"color-scheme":"warning",small:"",variant:"smooth"}}):t._e()],1),t._v(" "),e("td",[e("span",[t._v(t._s(a.code))])]),t._v(" "),e("td",[e("span",[t._v(t._s(a.articles_count))])]),t._v(" "),e("td",[e("span",[t._v(t._s(a.categories_count))])]),t._v(" "),e("td",[e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.SWAP"),expression:"\n            $t(\n              'HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.SWAP'\n            )\n          ",modifiers:{"top-end":!0}}],attrs:{size:"tiny",variant:"smooth",icon:"arrow-swap","color-scheme":"primary",disabled:a.code===t.selectedLocaleCode},on:{click:function(e){return t.changeDefaultLocale(a.code)}}}),t._v(" "),e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.DELETE"),expression:"\n            $t(\n              'HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.DELETE'\n            )\n          ",modifiers:{"top-end":!0}}],attrs:{size:"tiny",variant:"smooth",icon:"delete","color-scheme":"alert",disabled:a.code===t.selectedLocaleCode},on:{click:function(e){return t.deleteLocale(a.code)}}})],1)])})),0)])}),[function(){var t=this._self._c;return t("tr",[t("td",{staticClass:"horizontal-line",attrs:{colspan:"100%"}})])}],!1,null,"1b442664",null);e.a=s.exports},1908:function(t,e,a){"use strict";a(33),a(83),a(21),a(24),a(77),a(93),a(44),a(9),a(22);var o=a(323),n=a(118),s=a(64),l=a(58),r=a(929),A=a(96);function i(t,e,a,o,n,s,l){try{var r=t[s](l),A=r.value}catch(i){return void a(i)}r.done?e(A):Promise.resolve(A).then(o,n)}var c={components:{Modal:o.a},props:{show:{type:Boolean,default:!0},portal:{type:Object,default:function(){return{}}}},setup:function(){return{v$:Object(n.a)()}},data:function(){return{selectedLocale:"",isUpdating:!1}},computed:{addedLocales:function(){return this.portal.config.allowed_locales.map((function(t){return t.code}))},locales:function(){var t=this.portal.config.allowed_locales.map((function(t){return t.code}));return Object.keys(r.a).map((function(t){return{id:t,name:r.a[t],code:t}})).filter((function(e){return!t.includes(e.code)}))}},validations:{selectedLocale:{required:l.f}},methods:{onCreate:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.v$.$touch(),!e.v$.$invalid){t.next=3;break}return t.abrupt("return");case 3:return(a=e.addedLocales).push(e.selectedLocale),e.isUpdating=!0,t.prev=6,t.next=9,e.$store.dispatch("portals/update",{portalSlug:e.portal.slug,config:{allowed_locales:a}});case 9:e.alertMessage=e.$t("HELP_CENTER.PORTAL.ADD_LOCALE.API.SUCCESS_MESSAGE"),e.onClose(),e.$track(A.i.CREATE_LOCALE,{localeAdded:e.selectedLocale,totalLocales:a.length,from:e.$route.name}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),e.alertMessage=(null===t.t0||void 0===t.t0?void 0:t.t0.message)||e.$t("HELP_CENTER.PORTAL.ADD_LOCALE.API.ERROR_MESSAGE");case 17:return t.prev=17,Object(s.a)(e.alertMessage),e.isUpdating=!1,t.finish(17);case 21:case"end":return t.stop()}}),t,null,[[6,14,17,21]])})),function(){var e=this,a=arguments;return new Promise((function(o,n){var s=t.apply(e,a);function l(t){i(s,o,n,l,r,"next",t)}function r(t){i(s,o,n,l,r,"throw",t)}l(void 0)}))})()},onClose:function(){this.$emit("cancel")}}},d=c,u=(a(1889),a(8)),E=Object(u.a)(d,(function(){var t=this,e=t._self._c;return e("Modal",{attrs:{show:t.show,"on-close":t.onClose},on:{"update:show":function(e){t.show=e}}},[e("woot-modal-header",{attrs:{"header-title":t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.TITLE"),"header-content":t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.SUB_TITLE")}}),t._v(" "),e("form",{staticClass:"w-full",on:{submit:function(e){return e.preventDefault(),t.onCreate.apply(null,arguments)}}},[e("div",{staticClass:"w-full"},[e("label",{class:{error:t.v$.selectedLocale.$error}},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.LOCALE.LABEL"))+"\n        "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedLocale,expression:"selectedLocale"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedLocale=e.target.multiple?a:a[0]}}},t._l(t.locales,(function(a){return e("option",{key:a.name,domProps:{value:a.id}},[t._v("\n            "+t._s(a.name)+"-"+t._s(a.code)+"\n          ")])})),0),t._v(" "),t.v$.selectedLocale.$error?e("span",{staticClass:"message"},[t._v("\n          "+t._s(t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.LOCALE.ERROR"))+"\n        ")]):t._e()]),t._v(" "),e("div",{staticClass:"w-full"},[e("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[e("woot-button",{staticClass:"button clear",on:{click:function(e){return e.preventDefault(),t.onClose.apply(null,arguments)}}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.BUTTONS.CANCEL"))+"\n          ")]),t._v(" "),e("woot-button",[t._v("\n            "+t._s(t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.BUTTONS.CREATE"))+"\n          ")])],1)])])])],1)}),[],!1,null,"6b29b01a",null);e.a=E.exports},2490:function(t,e,a){"use strict";a.r(e);a(142),a(24),a(10),a(21),a(29),a(23),a(30);var o=a(38),n=(a(33),a(44),a(83),a(9),a(22),a(64)),s=a(727),l=a(250),r=a(1907),A=a(96);function i(t,e,a,o,n,s,l){try{var r=t[s](l),A=r.value}catch(i){return void a(i)}r.done?e(A):Promise.resolve(A).then(o,n)}function c(t){return function(){var e=this,a=arguments;return new Promise((function(o,n){var s=t.apply(e,a);function l(t){i(s,o,n,l,r,"next",t)}function r(t){i(s,o,n,l,r,"throw",t)}l(void 0)}))}}var d={components:{Thumbnail:l.a,LocaleItemTable:r.a},props:{portal:{type:Object,default:function(){}},status:{type:String,default:"",values:["archived","draft","published"]}},setup:function(){return{updateUISettings:Object(s.a)().updateUISettings}},data:function(){return{showDeleteConfirmationPopup:!1,alertMessage:"",selectedPortalForDelete:{}}},computed:{labelColor:function(){return"Archived"===this.status?"warning":"success"},deleteMessageValue:function(){return" ".concat(this.selectedPortalForDelete.name,"?")},locales:function(){return this.portal?this.portal.config.allowed_locales:[]},allowedLocales:function(){var t=this;return Object.keys(this.locales).map((function(e){return t.locales[e].code}))},articleCount:function(){return this.portal.config.allowed_locales.reduce((function(t,e){return t+e.articles_count}),0)}},methods:{addLocale:function(){this.$emit("addLocale",this.portal.id)},openSite:function(){this.$emit("openSite",this.portal.slug)},openSettings:function(){this.fetchPortalAndItsCategories(),this.navigateToPortalEdit()},onClickOpenDeleteModal:function(t){this.selectedPortalForDelete=t,this.showDeleteConfirmationPopup=!0},closeDeletePopup:function(){this.showDeleteConfirmationPopup=!1},fetchPortalAndItsCategories:function(){var t=this;return c(regeneratorRuntime.mark((function e(){var a,o,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("portals/index");case 2:a=t.portal,o=a.slug,n=a.config.allowed_locales,s={portalSlug:o,locale:n[0].code},t.$store.dispatch("portals/show",s),t.$store.dispatch("categories/index",s);case 6:case"end":return e.stop()}}),e)})))()},onClickDeletePortal:function(){var t=this;return c(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.selectedPortalForDelete.slug,e.prev=1,e.next=4,t.$store.dispatch("portals/delete",{portalSlug:a});case 4:t.selectedPortalForDelete={},t.closeDeletePopup(),t.alertMessage=t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.API.DELETE_SUCCESS"),t.updateUISettings({last_active_portal_slug:void 0,last_active_locale_code:void 0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.alertMessage=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.API.DELETE_ERROR");case 13:return e.prev=13,Object(n.a)(t.alertMessage),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},changeDefaultLocale:function(t){var e=t.localeCode;this.updatePortalLocales({allowedLocales:this.allowedLocales,defaultLocale:e,successMessage:this.$t("HELP_CENTER.PORTAL.CHANGE_DEFAULT_LOCALE.API.SUCCESS_MESSAGE"),errorMessage:this.$t("HELP_CENTER.PORTAL.CHANGE_DEFAULT_LOCALE.API.ERROR_MESSAGE")}),this.$track(A.i.SET_DEFAULT_LOCALE,{newLocale:e,from:this.$route.name})},deletePortalLocale:function(t){var e=t.localeCode,a=this.allowedLocales.filter((function(t){return t!==e})),o=this.portal.meta.default_locale;this.updatePortalLocales({allowedLocales:a,defaultLocale:o,successMessage:this.$t("HELP_CENTER.PORTAL.DELETE_LOCALE.API.SUCCESS_MESSAGE"),errorMessage:this.$t("HELP_CENTER.PORTAL.DELETE_LOCALE.API.ERROR_MESSAGE")}),this.$track(A.i.DELETE_LOCALE,{deletedLocale:e,from:this.$route.name})},updatePortalLocales:function(t){var e=this;return c(regeneratorRuntime.mark((function a(){var o,s,l,r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=t.allowedLocales,s=t.defaultLocale,l=t.successMessage,r=t.errorMessage,a.prev=1,a.next=4,e.$store.dispatch("portals/update",{portalSlug:e.portal.slug,config:{default_locale:s,allowed_locales:o}});case 4:e.alertMessage=l,a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),e.alertMessage=(null===a.t0||void 0===a.t0?void 0:a.t0.message)||r;case 10:return a.prev=10,Object(n.a)(e.alertMessage),a.finish(10);case 13:case"end":return a.stop()}}),a,null,[[1,7,10,13]])})))()},navigateToPortalEdit:function(){this.$router.push({name:"edit_portal_information",params:{portalSlug:this.portal.slug}})}}},u=a(8),E=Object(u.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"relative flex p-4 mb-3 bg-white border border-solid rounded-md dark:bg-slate-900 border-slate-100 dark:border-slate-600"},[e("Thumbnail",{attrs:{username:t.portal.name,variant:"square"}}),t._v(" "),e("div",{staticClass:"flex-grow ml-2 rtl:ml-0 rtl:mr-2"},[e("header",{staticClass:"flex items-start justify-between mb-8"},[e("div",[e("div",{staticClass:"flex items-center"},[e("h2",{staticClass:"mb-0 text-lg text-slate-800 dark:text-slate-100"},[t._v("\n              "+t._s(t.portal.name)+"\n            ")]),t._v(" "),e("woot-label",{staticClass:"mx-2 my-0",attrs:{title:t.status,"color-scheme":t.labelColor,size:"small",variant:"smooth"}})],1),t._v(" "),e("p",{staticClass:"mb-0 text-sm text-slate-700 dark:text-slate-200"},[t._v("\n            "+t._s(t.articleCount)+"\n            "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.COUNT_LABEL"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-1"},[e("woot-button",{attrs:{variant:"smooth",size:"small","color-scheme":"primary"},on:{click:t.addLocale}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.ADD"))+"\n          ")]),t._v(" "),e("woot-button",{attrs:{variant:"hollow",size:"small","color-scheme":"secondary"},on:{click:t.openSite}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.VISIT"))+"\n          ")]),t._v(" "),e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.SETTINGS"),expression:"\n              $t(\n                'HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.SETTINGS'\n              )\n            ",modifiers:{"top-end":!0}}],attrs:{variant:"hollow",size:"small",icon:"settings","color-scheme":"secondary"},on:{click:t.openSettings}}),t._v(" "),e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.DELETE"),expression:"\n              $t('HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.DELETE')\n            ",modifiers:{"top-end":!0}}],attrs:{variant:"hollow","color-scheme":"alert",size:"small",icon:"delete"},on:{click:function(e){return t.onClickOpenDeleteModal(t.portal)}}})],1)]),t._v(" "),e("div",{staticClass:"mb-12"},[e("h2",{staticClass:"mb-2 text-base font-medium text-slate-800 dark:text-slate-100"},[t._v("\n          "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.TITLE"))+"\n        ")]),t._v(" "),e("div",{staticClass:"flex justify-between mr-[6.25rem] rtl:mr-0 rtl:ml-[6.25rem] max-w-[80vw]"},[e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex flex-col items-start mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.NAME")))]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-300"},[t._v("\n                "+t._s(t.portal.name)+"\n              ")])]),t._v(" "),e("div",{staticClass:"flex flex-col items-start mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.DOMAIN")))]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-300"},[t._v("\n                "+t._s(t.portal.custom_domain)+"\n              ")])])]),t._v(" "),e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex flex-col items-start mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.SLUG")))]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-300"},[t._v("\n                "+t._s(t.portal.slug)+"\n              ")])]),t._v(" "),e("div",{staticClass:"flex flex-col items-start mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.TITLE")))]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-300"},[t._v("\n                "+t._s(t.portal.page_title)+"\n              ")])])]),t._v(" "),e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex flex-col items-start mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.THEME")))]),t._v(" "),e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"w-4 h-4 mr-1 border border-solid rounded-md rtl:mr-0 rtl:ml-1 border-slate-25 dark:border-slate-800",style:{background:t.portal.color}})])]),t._v(" "),e("div",{staticClass:"flex flex-col items-start mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.SUB_TEXT")))]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-300"},[t._v("\n                "+t._s(t.portal.header_text)+"\n              ")])])])])]),t._v(" "),e("div",{staticClass:"mb-12"},[e("h2",{staticClass:"mb-2 text-base font-medium text-slate-800 dark:text-slate-100"},[t._v("\n          "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TITLE"))+"\n        ")]),t._v(" "),e("LocaleItemTable",{attrs:{locales:t.locales,"selected-locale-code":t.portal.meta.default_locale},on:{changeDefaultLocale:t.changeDefaultLocale,delete:t.deletePortalLocale}})],1)])],1),t._v(" "),e("woot-delete-modal",{attrs:{show:t.showDeleteConfirmationPopup,"on-close":t.closeDeletePopup,"on-confirm":t.onClickDeletePortal,title:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.TITLE"),message:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.MESSAGE"),"message-value":t.deleteMessageValue,"confirm-text":t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.YES"),"reject-text":t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.NO")},on:{"update:show":function(e){t.showDeleteConfirmationPopup=e}}})],1)}),[],!1,null,null,null).exports,p=a(200),L=a(905),_=a(1908),T=a(1605);function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var h={components:{PortalListItem:E,EmptyState:L.a,Spinner:p.a,AddLocale:_.a},data:function(){return{isAddLocaleModalOpen:!1,selectedPortal:{}}},computed:f(f({},Object(o.mapGetters)({portals:"portals/allPortals",isFetching:"portals/isFetchingPortals"})),{},{portalStatus:function(){return this.archived?"Archived":"Live"},shouldShowEmptyState:function(){return!this.isFetching&&!this.portals.length}}),methods:{openPortal:function(t){window.open(Object(T.b)(t),"_blank")},addPortal:function(){this.$router.push({name:"new_portal_information"})},closeAddLocaleModal:function(){this.isAddLocaleModalOpen=!1,this.selectedPortal={}},addLocale:function(t){this.isAddLocaleModalOpen=!0,this.selectedPortal=this.portals.find((function(e){return e.id===t}))}}},C=Object(u.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full max-w-full px-4 py-2"},[e("div",{staticClass:"flex items-center justify-between h-12 mx-0 mt-0 mb-2"},[e("div",{staticClass:"flex items-center"},[e("woot-sidemenu-icon"),t._v(" "),e("h1",{staticClass:"mx-2 my-0 text-2xl font-medium text-slate-800 dark:text-slate-100"},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.HEADER"))+"\n      ")])],1),t._v(" "),e("woot-button",{attrs:{"color-scheme":"primary",icon:"add",size:"small"},on:{click:t.addPortal}},[t._v("\n      "+t._s(t.$t("HELP_CENTER.PORTAL.NEW_BUTTON"))+"\n    ")])],1),t._v(" "),e("div",{staticClass:"h-[90vh] overflow-y-scroll"},[t._l(t.portals,(function(a){return e("PortalListItem",{key:a.id,attrs:{portal:a,status:t.portalStatus},on:{addLocale:t.addLocale,openSite:t.openPortal}})})),t._v(" "),t.isFetching?e("div",{staticClass:"flex items-center justify-center p-40 text-base"},[e("Spinner"),t._v(" "),e("span",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.LOADING_MESSAGE")))])],1):t.shouldShowEmptyState?e("EmptyState",{attrs:{title:t.$t("HELP_CENTER.PORTAL.NO_PORTALS_MESSAGE")}}):t._e()],2),t._v(" "),e("woot-modal",{attrs:{show:t.isAddLocaleModalOpen,"on-close":t.closeAddLocaleModal},on:{"update:show":function(e){t.isAddLocaleModalOpen=e}}},[e("AddLocale",{attrs:{show:t.isAddLocaleModalOpen,portal:t.selectedPortal},on:{cancel:t.closeAddLocaleModal}})],1)],1)}),[],!1,null,null,null);e.default=C.exports}}]);
//# sourceMappingURL=58-65e22a2394f4632d1a66.chunk.js.map