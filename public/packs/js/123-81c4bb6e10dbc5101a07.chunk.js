(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{2528:function(t,e,r){"use strict";r.r(e);r(83),r(24),r(10),r(21),r(29),r(23),r(30);var n=r(38),o=r(320);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={setup:function(){return{useInstallationName:Object(o.a)().useInstallationName}},computed:i(i({},Object(n.mapGetters)({globalConfig:"globalConfig/get"})),{},{items:function(){var t=this;return this.$t("INBOX_MGMT.CREATE_FLOW").map((function(e){return i(i({},e),{},{body:t.useInstallationName(e.body,t.globalConfig.installationName)})}))}})},s=r(8),u=Object(s.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-row overflow-auto p-4 h-full bg-slate-25 dark:bg-slate-800"},[e("woot-wizard",{staticClass:"hidden md:block w-1/4",attrs:{"global-config":t.globalConfig,items:t.items}}),t._v(" "),e("router-view")],1)}),[],!1,null,null,null);e.default=u.exports}}]);
//# sourceMappingURL=123-81c4bb6e10dbc5101a07.chunk.js.map