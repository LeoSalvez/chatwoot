(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1786:function(t,e,r){"use strict";r(24),r(83),r(41),r(10),r(21),r(29),r(23),r(30);var n=r(38),o=(r(77),r(51),r(199)),a=r(278);function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"getAccountSummary",e=Object(o.a)(t),r=function(t){if(!e.value.previous[t])return 0;var r=e.value[t]-e.value.previous[t];return Math.round(r/e.value.previous[t]*100)},n=function(t){return["avg_first_response_time","avg_resolution_time","reply_time"].includes(t)},s=function(t){return n(t)?Object(a.e)(e.value[t]):Number(e.value[t]||"").toLocaleString()};return{calculateTrend:r,isAverageMetricType:n,displayMetric:s}}var c=r(1598),i=r(204),u=r(293),l={__name:"ChartStats",props:{metric:{type:Object,default:function(){return{}}},accountSummaryKey:{type:String,default:"getAccountSummary"}},setup:function(t){var e=t,r=s(e.accountSummaryKey),n=r.calculateTrend,o=r.displayMetric,a=r.isAverageMetricType;return{__sfc:!0,props:e,calculateTrend:n,displayMetric:o,isAverageMetricType:a,trendColor:function(t,e){return a(e)?t>0?"border-red-500 text-red-500":"border-green-500 text-green-500":t<0?"border-red-500 text-red-500":"border-green-500 text-green-500"}}}},p=r(8);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={components:{ChartStats:Object(p.a)(l,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e("div",{staticClass:"text-slate-900 dark:text-slate-100"},[e("span",{staticClass:"text-sm"},[t._v("\n    "+t._s(t.metric.NAME)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex items-end"},[e("div",{staticClass:"text-xl font-medium"},[t._v("\n      "+t._s(r.displayMetric(t.metric.KEY))+"\n    ")]),t._v(" "),t.metric.trend?e("div",{staticClass:"text-xs ml-4 flex items-center mb-0.5"},[t.metric.trend<0?e("div",{staticClass:"h-0 w-0 border-x-4 medium border-x-transparent border-t-[8px] mr-1",class:r.trendColor(t.metric.trend,t.metric.KEY)}):e("div",{staticClass:"h-0 w-0 border-x-4 medium border-x-transparent border-b-[8px] mr-1",class:r.trendColor(t.metric.trend,t.metric.KEY)}),t._v(" "),e("span",{staticClass:"font-medium",class:r.trendColor(t.metric.trend,t.metric.KEY)},[t._v("\n        "+t._s(r.calculateTrend(t.metric.KEY))+"%\n      ")])]):t._e()])])}),[],!1,null,null,null).exports},props:{groupBy:{type:Object,default:function(){return{}}},accountSummaryKey:{type:String,default:"getAccountSummary"},reportKeys:{type:Object,default:function(){return{CONVERSATIONS:"conversations_count",INCOMING_MESSAGES:"incoming_messages_count",OUTGOING_MESSAGES:"outgoing_messages_count",FIRST_RESPONSE_TIME:"avg_first_response_time",RESOLUTION_TIME:"avg_resolution_time",RESOLUTION_COUNT:"resolutions_count",REPLY_TIME:"reply_time"}}}},setup:function(t){var e=s(t.accountSummaryKey);return{calculateTrend:e.calculateTrend,isAverageMetricType:e.isAverageMetricType}},computed:O(O({},Object(n.mapGetters)({accountReport:"getAccountReports"})),{},{metrics:function(){var t=this,e=Object.keys(this.reportKeys),r={FIRST_RESPONSE_TIME:this.$t("REPORT.METRICS.FIRST_RESPONSE_TIME.INFO_TEXT"),RESOLUTION_TIME:this.$t("REPORT.METRICS.RESOLUTION_TIME.INFO_TEXT")};return e.map((function(e){return{NAME:t.$t("REPORT.METRICS.".concat(e,".NAME")),KEY:t.reportKeys[e],DESC:t.$t("REPORT.METRICS.".concat(e,".DESC")),INFO_TEXT:r[e],TOOLTIP_TEXT:"REPORT.METRICS.".concat(e,".TOOLTIP_TEXT"),trend:t.calculateTrend(t.reportKeys[e])}}))}}),methods:{getCollection:function(t){var e=this;if(!this.accountReport.data[t.KEY])return{};var r=this.accountReport.data[t.KEY];return{labels:r.map((function(t){var r,n,o;if((null===(r=e.groupBy)||void 0===r?void 0:r.period)===c.b[2].period){var a=new Date(Object(i.a)(t.timestamp)),s=a.getDate()-a.getDay(),l=s+6,p=new Date(a.setDate(s)),d=new Date(a.setDate(l));return"".concat(Object(u.a)(p,"dd-MMM")," - ").concat(Object(u.a)(d,"dd-MMM"))}return(null===(n=e.groupBy)||void 0===n?void 0:n.period)===c.b[3].period?Object(u.a)(Object(i.a)(t.timestamp),"MMM-yyyy"):(null===(o=e.groupBy)||void 0===o?void 0:o.period)===c.b[4].period?Object(u.a)(Object(i.a)(t.timestamp),"yyyy"):Object(u.a)(Object(i.a)(t.timestamp),"dd-MMM")})),datasets:c.d[t.KEY].datasets.map((function(n){switch(n.type){case"bar":return O(O({},n),{},{yAxisID:"y-left",label:t.NAME,data:r.map((function(t){return t.value}))});case"line":return O(O({},n),{},{yAxisID:"y-right",label:e.metrics[0].NAME,data:r.map((function(t){return t.count}))});default:return n}}))}},getChartOptions:function(t){var e=this,r={};return this.isAverageMetricType(t.KEY)&&(r.callbacks={label:function(r){return e.$t(t.TOOLTIP_TEXT,{metricValue:Object(a.e)(r.yLabel),conversationCount:e.accountReport.data[t.KEY][r.index].count})}}),{scales:c.d[t.KEY].scales,tooltips:r}}}},y=Object(p.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 p-2 bg-white border rounded-md md:grid-cols-2 lg:grid-cols-3 dark:bg-slate-800 border-slate-100 dark:border-slate-700"},t._l(t.metrics,(function(r){return e("div",{key:r.KEY,staticClass:"p-4 mb-3 rounded-md"},[e("ChartStats",{attrs:{metric:r,"account-summary-key":t.accountSummaryKey}}),t._v(" "),e("div",{staticClass:"mt-4 h-72"},[t.accountReport.isFetching[r.KEY]?e("woot-loading-state",{staticClass:"text-xs",attrs:{message:t.$t("REPORT.LOADING_CHART")}}):e("div",{staticClass:"flex items-center justify-center h-72"},[t.accountReport.data[r.KEY].length?e("woot-bar",{staticClass:"w-full h-72",attrs:{collection:t.getCollection(r),"chart-options":t.getChartOptions(r)}}):e("span",{staticClass:"text-sm text-slate-600"},[t._v("\n          "+t._s(t.$t("REPORT.NO_ENOUGH_DATA"))+"\n        ")])],1)],1)],1)})),0)}),[],!1,null,null,null);e.a=y.exports},2531:function(t,e,r){"use strict";r.r(e);r(9),r(22),r(24),r(10),r(21),r(29),r(23),r(30),r(33);var n=r(64),o=r(204),a=r(293),s=r(1897),c=r(1598),i=r(96),u=r(1786);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t,e,r,n,o,a,s){try{var c=t[a](s),i=c.value}catch(u){return void r(u)}c.done?e(i):Promise.resolve(i).then(n,o)}var m={CONVERSATIONS:"conversations_count",INCOMING_MESSAGES:"incoming_messages_count",OUTGOING_MESSAGES:"outgoing_messages_count",FIRST_RESPONSE_TIME:"avg_first_response_time",RESOLUTION_TIME:"avg_resolution_time",RESOLUTION_COUNT:"resolutions_count",REPLY_TIME:"reply_time"},f={name:"ConversationReports",components:{ReportFilterSelector:s.a,ReportContainer:u.a},data:function(){return{from:0,to:0,groupBy:c.b[1],businessHours:!1}},methods:{fetchAllData:function(){this.fetchAccountSummary(),this.fetchChartData()},fetchAccountSummary:function(){try{this.$store.dispatch("fetchAccountSummary",this.getRequestPayload())}catch(t){Object(n.a)(this.$t("REPORT.SUMMARY_FETCHING_FAILED"))}},fetchChartData:function(){var t=this;["CONVERSATIONS","INCOMING_MESSAGES","OUTGOING_MESSAGES","FIRST_RESPONSE_TIME","RESOLUTION_TIME","RESOLUTION_COUNT","REPLY_TIME"].forEach(function(){var e,r=(e=regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("fetchAccountReport",p({metric:m[r]},t.getRequestPayload()));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),Object(n.a)(t.$t("REPORT.DATA_FETCHING_FAILED"));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(t){O(a,n,o,s,c,"next",t)}function c(t){O(a,n,o,s,c,"throw",t)}s(void 0)}))});return function(t){return r.apply(this,arguments)}}())},getRequestPayload:function(){var t=this.from,e=this.to,r=this.groupBy,n=this.businessHours;return{from:t,to:e,groupBy:null===r||void 0===r?void 0:r.period,businessHours:n}},downloadAgentReports:function(){var t=this.from,e=this.to,r="agent-report-".concat(Object(a.a)(Object(o.a)(e),"dd-MM-yyyy"),".csv");this.$store.dispatch("downloadAgentReports",{from:t,to:e,fileName:r})},onFilterChange:function(t){var e=t.from,r=t.to,n=t.groupBy,o=t.businessHours;this.from=e,this.to=r,this.groupBy=n,this.businessHours=o,this.fetchAllData(),this.$track(i.j.FILTER_REPORT,{filterValue:{from:e,to:r,groupBy:n,businessHours:o},reportType:"conversations"})}}},y=f,E=r(8),b=Object(E.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-1 p-4 overflow-auto"},[e("woot-button",{attrs:{"color-scheme":"success","class-names":"button--fixed-top",icon:"arrow-download"},on:{click:t.downloadAgentReports}},[t._v("\n    "+t._s(t.$t("REPORT.DOWNLOAD_AGENT_REPORTS"))+"\n  ")]),t._v(" "),e("ReportFilterSelector",{attrs:{"show-agents-filter":!1,"show-group-by-filter":""},on:{filterChange:t.onFilterChange}}),t._v(" "),e("ReportContainer",{attrs:{"group-by":t.groupBy}})],1)}),[],!1,null,null,null);e.default=b.exports}}]);
//# sourceMappingURL=106-c587c11b01aad5b94077.chunk.js.map