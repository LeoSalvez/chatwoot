(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1598:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return s})),r.d(e,"a",(function(){return i})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return d}));var n={1:{id:1,period:"day"},2:{id:2,period:"week"},3:{id:3,period:"month"},4:{id:4,period:"year"}},s={DAY:{id:"DAY",period:"day",translationKey:"REPORT.GROUPING_OPTIONS.DAY"},WEEK:{id:"WEEK",period:"week",translationKey:"REPORT.GROUPING_OPTIONS.WEEK"},MONTH:{id:"MONTH",period:"month",translationKey:"REPORT.GROUPING_OPTIONS.MONTH"},YEAR:{id:"YEAR",period:"year",translationKey:"REPORT.GROUPING_OPTIONS.YEAR"}},i={LAST_7_DAYS:{id:"LAST_7_DAYS",translationKey:"REPORT.DATE_RANGE_OPTIONS.LAST_7_DAYS",offset:6,groupByOptions:[s.DAY]},LAST_30_DAYS:{id:"LAST_30_DAYS",translationKey:"REPORT.DATE_RANGE_OPTIONS.LAST_30_DAYS",offset:29,groupByOptions:[s.DAY,s.WEEK]},LAST_3_MONTHS:{id:"LAST_3_MONTHS",translationKey:"REPORT.DATE_RANGE_OPTIONS.LAST_3_MONTHS",offset:89,groupByOptions:[s.DAY,s.WEEK,s.MONTH]},LAST_6_MONTHS:{id:"LAST_6_MONTHS",translationKey:"REPORT.DATE_RANGE_OPTIONS.LAST_6_MONTHS",offset:179,groupByOptions:[s.WEEK,s.MONTH]},LAST_YEAR:{id:"LAST_YEAR",translationKey:"REPORT.DATE_RANGE_OPTIONS.LAST_YEAR",offset:364,groupByOptions:[s.WEEK,s.MONTH]},CUSTOM_DATE_RANGE:{id:"CUSTOM_DATE_RANGE",translationKey:"REPORT.DATE_RANGE_OPTIONS.CUSTOM_DATE_RANGE",offset:null,groupByOptions:[s.DAY,s.WEEK,s.MONTH,s.YEAR]}},a='PlusJakarta,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',o={type:"bar",backgroundColor:"rgb(31, 147, 255)"},l={datasets:[o],scales:{xAxes:[{ticks:{fontFamily:a},gridLines:{drawOnChartArea:!1}}],yAxes:[{id:"y-left",type:"linear",position:"left",ticks:{fontFamily:a,beginAtZero:!0,stepSize:1,callback:function(t,e,r){return e&&e!==r.length-1?"":t}},gridLines:{drawOnChartArea:!1}}]}},c={datasets:[o],scales:{xAxes:[{ticks:{fontFamily:a},gridLines:{drawOnChartArea:!1}}],yAxes:[{id:"y-left",type:"linear",position:"left",ticks:{fontFamily:a,callback:function(t,e,r){return e&&e!==r.length-1?"":function(t){if(!t)return"";if(t<60)return"".concat(t,"s");if(t<3600){var e=Math.floor(t/60);return"".concat(e,"m")}if(t<86400){var r=Math.floor(t/3600);return"".concat(r,"h")}var n=Math.floor(t/86400);return"".concat(n,"d")}(t)}},gridLines:{drawOnChartArea:!1}}]}},u={conversations_count:l,incoming_messages_count:l,outgoing_messages_count:l,avg_first_response_time:c,reply_time:c,avg_resolution_time:c,resolutions_count:l,bot_resolutions_count:l,bot_handoffs_count:l},d={open:"OPEN",unattended:"UNATTENDED",unassigned:"UNASSIGNED",pending:"PENDING",online:"ONLINE",busy:"BUSY",offline:"OFFLINE"}},1786:function(t,e,r){"use strict";r(24),r(83),r(41),r(10),r(21),r(29),r(23),r(30);var n=r(38),s=(r(77),r(51),r(199)),i=r(278);function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"getAccountSummary",e=Object(s.a)(t),r=function(t){if(!e.value.previous[t])return 0;var r=e.value[t]-e.value.previous[t];return Math.round(r/e.value.previous[t]*100)},n=function(t){return["avg_first_response_time","avg_resolution_time","reply_time"].includes(t)},a=function(t){return n(t)?Object(i.e)(e.value[t]):Number(e.value[t]||"").toLocaleString()};return{calculateTrend:r,isAverageMetricType:n,displayMetric:a}}var o=r(1598),l=r(204),c=r(293),u={__name:"ChartStats",props:{metric:{type:Object,default:function(){return{}}},accountSummaryKey:{type:String,default:"getAccountSummary"}},setup:function(t){var e=t,r=a(e.accountSummaryKey),n=r.calculateTrend,s=r.displayMetric,i=r.isAverageMetricType;return{__sfc:!0,props:e,calculateTrend:n,displayMetric:s,isAverageMetricType:i,trendColor:function(t,e){return i(e)?t>0?"border-red-500 text-red-500":"border-green-500 text-green-500":t<0?"border-red-500 text-red-500":"border-green-500 text-green-500"}}}},d=r(8);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={components:{ChartStats:Object(d.a)(u,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e("div",{staticClass:"text-slate-900 dark:text-slate-100"},[e("span",{staticClass:"text-sm"},[t._v("\n    "+t._s(t.metric.NAME)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex items-end"},[e("div",{staticClass:"text-xl font-medium"},[t._v("\n      "+t._s(r.displayMetric(t.metric.KEY))+"\n    ")]),t._v(" "),t.metric.trend?e("div",{staticClass:"text-xs ml-4 flex items-center mb-0.5"},[t.metric.trend<0?e("div",{staticClass:"h-0 w-0 border-x-4 medium border-x-transparent border-t-[8px] mr-1",class:r.trendColor(t.metric.trend,t.metric.KEY)}):e("div",{staticClass:"h-0 w-0 border-x-4 medium border-x-transparent border-b-[8px] mr-1",class:r.trendColor(t.metric.trend,t.metric.KEY)}),t._v(" "),e("span",{staticClass:"font-medium",class:r.trendColor(t.metric.trend,t.metric.KEY)},[t._v("\n        "+t._s(r.calculateTrend(t.metric.KEY))+"%\n      ")])]):t._e()])])}),[],!1,null,null,null).exports},props:{groupBy:{type:Object,default:function(){return{}}},accountSummaryKey:{type:String,default:"getAccountSummary"},reportKeys:{type:Object,default:function(){return{CONVERSATIONS:"conversations_count",INCOMING_MESSAGES:"incoming_messages_count",OUTGOING_MESSAGES:"outgoing_messages_count",FIRST_RESPONSE_TIME:"avg_first_response_time",RESOLUTION_TIME:"avg_resolution_time",RESOLUTION_COUNT:"resolutions_count",REPLY_TIME:"reply_time"}}}},setup:function(t){var e=a(t.accountSummaryKey);return{calculateTrend:e.calculateTrend,isAverageMetricType:e.isAverageMetricType}},computed:_(_({},Object(n.mapGetters)({accountReport:"getAccountReports"})),{},{metrics:function(){var t=this,e=Object.keys(this.reportKeys),r={FIRST_RESPONSE_TIME:this.$t("REPORT.METRICS.FIRST_RESPONSE_TIME.INFO_TEXT"),RESOLUTION_TIME:this.$t("REPORT.METRICS.RESOLUTION_TIME.INFO_TEXT")};return e.map((function(e){return{NAME:t.$t("REPORT.METRICS.".concat(e,".NAME")),KEY:t.reportKeys[e],DESC:t.$t("REPORT.METRICS.".concat(e,".DESC")),INFO_TEXT:r[e],TOOLTIP_TEXT:"REPORT.METRICS.".concat(e,".TOOLTIP_TEXT"),trend:t.calculateTrend(t.reportKeys[e])}}))}}),methods:{getCollection:function(t){var e=this;if(!this.accountReport.data[t.KEY])return{};var r=this.accountReport.data[t.KEY];return{labels:r.map((function(t){var r,n,s;if((null===(r=e.groupBy)||void 0===r?void 0:r.period)===o.b[2].period){var i=new Date(Object(l.a)(t.timestamp)),a=i.getDate()-i.getDay(),u=a+6,d=new Date(i.setDate(a)),p=new Date(i.setDate(u));return"".concat(Object(c.a)(d,"dd-MMM")," - ").concat(Object(c.a)(p,"dd-MMM"))}return(null===(n=e.groupBy)||void 0===n?void 0:n.period)===o.b[3].period?Object(c.a)(Object(l.a)(t.timestamp),"MMM-yyyy"):(null===(s=e.groupBy)||void 0===s?void 0:s.period)===o.b[4].period?Object(c.a)(Object(l.a)(t.timestamp),"yyyy"):Object(c.a)(Object(l.a)(t.timestamp),"dd-MMM")})),datasets:o.d[t.KEY].datasets.map((function(n){switch(n.type){case"bar":return _(_({},n),{},{yAxisID:"y-left",label:t.NAME,data:r.map((function(t){return t.value}))});case"line":return _(_({},n),{},{yAxisID:"y-right",label:e.metrics[0].NAME,data:r.map((function(t){return t.count}))});default:return n}}))}},getChartOptions:function(t){var e=this,r={};return this.isAverageMetricType(t.KEY)&&(r.callbacks={label:function(r){return e.$t(t.TOOLTIP_TEXT,{metricValue:Object(i.e)(r.yLabel),conversationCount:e.accountReport.data[t.KEY][r.index].count})}}),{scales:o.d[t.KEY].scales,tooltips:r}}}},E=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 p-2 bg-white border rounded-md md:grid-cols-2 lg:grid-cols-3 dark:bg-slate-800 border-slate-100 dark:border-slate-700"},t._l(t.metrics,(function(r){return e("div",{key:r.KEY,staticClass:"p-4 mb-3 rounded-md"},[e("ChartStats",{attrs:{metric:r,"account-summary-key":t.accountSummaryKey}}),t._v(" "),e("div",{staticClass:"mt-4 h-72"},[t.accountReport.isFetching[r.KEY]?e("woot-loading-state",{staticClass:"text-xs",attrs:{message:t.$t("REPORT.LOADING_CHART")}}):e("div",{staticClass:"flex items-center justify-center h-72"},[t.accountReport.data[r.KEY].length?e("woot-bar",{staticClass:"w-full h-72",attrs:{collection:t.getCollection(r),"chart-options":t.getChartOptions(r)}}):e("span",{staticClass:"text-sm text-slate-600"},[t._v("\n          "+t._s(t.$t("REPORT.NO_ENOUGH_DATA"))+"\n        ")])],1)],1)],1)})),0)}),[],!1,null,null,null);e.a=E.exports},1803:function(t,e,r){"use strict";r(21),r(9),r(22),r(33);var n=r(64),s=r(537),i=r(724),a=r(167),o=r(731),l=r(250),c=r(1913),u=r(1598),d={components:{WootDateRangePicker:c.a,Thumbnail:l.a},props:{filterItemsList:{type:Array,default:function(){return[]}},groupByFilterItemsList:{type:Array,default:function(){return[]}},type:{type:String,default:"agent"},selectedGroupByFilter:{type:Object,default:function(){}}},data:function(){return{currentSelectedFilter:null,currentDateRangeSelection:this.$t("REPORT.DATE_RANGE")[0],dateRange:this.$t("REPORT.DATE_RANGE"),customDateRange:[new Date,new Date],currentSelectedGroupByFilter:null,businessHoursSelected:!1}},computed:{isDateRangeSelected:function(){return 5===this.currentDateRangeSelection.id},to:function(){return this.isDateRangeSelected?this.toCustomDate(this.customDateRange[1]):this.toCustomDate(new Date)},from:function(){if(this.isDateRangeSelected)return this.fromCustomDate(this.customDateRange[0]);var t={0:6,1:29,2:89,3:179,4:364}[this.currentDateRangeSelection.id],e=Object(o.a)(new Date,t);return this.fromCustomDate(e)},multiselectLabel:function(){return{agent:this.$t("AGENT_REPORTS.FILTER_DROPDOWN_LABEL"),label:this.$t("LABEL_REPORTS.FILTER_DROPDOWN_LABEL"),inbox:this.$t("INBOX_REPORTS.FILTER_DROPDOWN_LABEL"),team:this.$t("TEAM_REPORTS.FILTER_DROPDOWN_LABEL")}[this.type]||this.$t("FORMS.MULTISELECT.SELECT_ONE")},groupBy:function(){return this.isDateRangeSelected?u.b[4].period:{0:u.b[1].period,1:u.b[2].period,2:u.b[3].period,3:u.b[3].period,4:u.b[4].period}[this.currentDateRangeSelection.id]},notLast7Days:function(){return this.groupBy!==u.b[1].period}},watch:{filterItemsList:function(t){this.currentSelectedFilter=t[0],this.changeFilterSelection()},groupByFilterItemsList:function(){this.currentSelectedGroupByFilter=this.selectedGroupByFilter},businessHoursSelected:function(){this.$emit("businessHoursToggle",this.businessHoursSelected)}},mounted:function(){this.onDateRangeChange()},methods:{onDateRangeChange:function(){this.$emit("dateRangeChange",{from:this.from,to:this.to,groupBy:this.groupBy})},fromCustomDate:function(t){return Object(i.a)(Object(a.a)(t))},toCustomDate:function(t){return Object(i.a)(Object(s.a)(t))},changeDateSelection:function(t){this.currentDateRangeSelection=t,this.onDateRangeChange()},changeFilterSelection:function(){this.$emit("filterChange",this.currentSelectedFilter)},onChange:function(t){this.customDateRange=t,this.onDateRangeChange()},changeGroupByFilterSelection:function(){this.$emit("groupByFilterChange",this.currentSelectedGroupByFilter)}}},p=r(8),_=Object(p.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col md:flex-row"},[e("div",{staticClass:"flex flex-col items-center w-full md:flex-row"},["agent"===t.type?e("div",{staticClass:"md:w-[240px] w-full multiselect-wrap--small"},[e("p",{staticClass:"mb-2 text-xs font-medium"},[t._v("\n        "+t._s(t.$t("AGENT_REPORTS.FILTER_DROPDOWN_LABEL"))+"\n      ")]),t._v(" "),e("multiselect",{attrs:{placeholder:t.multiselectLabel,label:"name","track-by":"id",options:t.filterItemsList,"option-height":24,"show-labels":!1},on:{input:t.changeFilterSelection},scopedSlots:t._u([{key:"singleLabel",fn:function(r){return[e("div",{staticClass:"flex items-center gap-2"},[e("Thumbnail",{attrs:{src:r.option.thumbnail,status:r.option.availability_status,username:r.option.name,size:"22px"}}),t._v(" "),e("span",{staticClass:"reports-option__desc"},[e("span",{staticClass:"my-0 text-slate-800 dark:text-slate-75"},[t._v(t._s(r.option.name))])])],1)]}},{key:"option",fn:function(r){return[e("div",{staticClass:"flex items-center gap-2"},[e("Thumbnail",{attrs:{src:r.option.thumbnail,status:r.option.availability_status,username:r.option.name,size:"22px"}}),t._v(" "),e("p",{staticClass:"my-0 text-slate-800 dark:text-slate-75"},[t._v("\n              "+t._s(r.option.name)+"\n            ")])],1)]}}],null,!1,3534869941),model:{value:t.currentSelectedFilter,callback:function(e){t.currentSelectedFilter=e},expression:"currentSelectedFilter"}})],1):"label"===t.type?e("div",{staticClass:"md:w-[240px] w-full multiselect-wrap--small"},[e("p",{staticClass:"mb-2 text-xs font-medium"},[t._v("\n        "+t._s(t.$t("LABEL_REPORTS.FILTER_DROPDOWN_LABEL"))+"\n      ")]),t._v(" "),e("multiselect",{attrs:{placeholder:t.multiselectLabel,label:"title","track-by":"id",options:t.filterItemsList,"option-height":24,"show-labels":!1},on:{input:t.changeFilterSelection},scopedSlots:t._u([{key:"singleLabel",fn:function(r){return[e("div",{staticClass:"flex items-center gap-2"},[e("div",{staticClass:"w-5 h-5 rounded-full",style:{backgroundColor:r.option.color}}),t._v(" "),e("span",{staticClass:"reports-option__desc"},[e("span",{staticClass:"my-0 text-slate-800 dark:text-slate-75"},[t._v("\n                "+t._s(r.option.title)+"\n              ")])])])]}},{key:"option",fn:function(r){return[e("div",{staticClass:"flex items-center gap-2"},[e("div",{staticClass:"flex-shrink-0 w-5 h-5 border border-solid rounded-full border-slate-100 dark:border-slate-800",style:{backgroundColor:r.option.color}}),t._v(" "),e("span",{staticClass:"reports-option__desc"},[e("span",{staticClass:"my-0 text-slate-800 dark:text-slate-75"},[t._v("\n                "+t._s(r.option.title)+"\n              ")])])])]}}]),model:{value:t.currentSelectedFilter,callback:function(e){t.currentSelectedFilter=e},expression:"currentSelectedFilter"}})],1):e("div",{staticClass:"md:w-[240px] w-full multiselect-wrap--small"},[e("p",{staticClass:"mb-2 text-xs font-medium"},["inbox"===t.type?[t._v("\n          "+t._s(t.$t("INBOX_REPORTS.FILTER_DROPDOWN_LABEL"))+"\n        ")]:"team"===t.type?[t._v("\n          "+t._s(t.$t("TEAM_REPORTS.FILTER_DROPDOWN_LABEL"))+"\n        ")]:[t._v("\n          "+t._s(t.$t("FORMS.MULTISELECT.SELECT_ONE"))+"\n        ")]],2),t._v(" "),e("multiselect",{attrs:{"track-by":"id",label:"name",placeholder:t.multiselectLabel,"selected-label":"","select-label":t.$t("FORMS.MULTISELECT.ENTER_TO_SELECT"),"deselect-label":"",options:t.filterItemsList,searchable:!1,"allow-empty":!1},on:{input:t.changeFilterSelection},model:{value:t.currentSelectedFilter,callback:function(e){t.currentSelectedFilter=e},expression:"currentSelectedFilter"}})],1),t._v(" "),e("div",{staticClass:"mx-1 md:w-[240px] w-full multiselect-wrap--small"},[e("p",{staticClass:"mb-2 text-xs font-medium"},[t._v("\n        "+t._s(t.$t("REPORT.DURATION_FILTER_LABEL"))+"\n      ")]),t._v(" "),e("multiselect",{attrs:{"track-by":"name",label:"name",placeholder:t.$t("FORMS.MULTISELECT.SELECT_ONE"),"selected-label":"","select-label":t.$t("FORMS.MULTISELECT.ENTER_TO_SELECT"),"deselect-label":"",options:t.dateRange,searchable:!1,"allow-empty":!1},on:{select:t.changeDateSelection},model:{value:t.currentDateRangeSelection,callback:function(e){t.currentDateRangeSelection=e},expression:"currentDateRangeSelection"}})],1),t._v(" "),t.isDateRangeSelected?e("div",{},[e("p",{staticClass:"mb-2 text-xs font-medium"},[t._v("\n        "+t._s(t.$t("REPORT.CUSTOM_DATE_RANGE.PLACEHOLDER"))+"\n      ")]),t._v(" "),e("WootDateRangePicker",{attrs:{"show-range":"",value:t.customDateRange,"confirm-text":t.$t("REPORT.CUSTOM_DATE_RANGE.CONFIRM"),placeholder:t.$t("REPORT.CUSTOM_DATE_RANGE.PLACEHOLDER")},on:{change:t.onChange}})],1):t._e(),t._v(" "),t.notLast7Days?e("div",{staticClass:"mx-1 md:w-[240px] w-full multiselect-wrap--small"},[e("p",{staticClass:"mb-2 text-xs font-medium"},[t._v("\n        "+t._s(t.$t("REPORT.GROUP_BY_FILTER_DROPDOWN_LABEL"))+"\n      ")]),t._v(" "),e("multiselect",{attrs:{"track-by":"id",label:"groupBy",placeholder:t.$t("REPORT.GROUP_BY_FILTER_DROPDOWN_LABEL"),options:t.groupByFilterItemsList,"allow-empty":!1,"show-labels":!1},on:{input:t.changeGroupByFilterSelection},model:{value:t.currentSelectedGroupByFilter,callback:function(e){t.currentSelectedGroupByFilter=e},expression:"currentSelectedGroupByFilter"}})],1):t._e()]),t._v(" "),e("div",{staticClass:"flex items-center my-2"},[e("span",{staticClass:"mx-2 text-sm whitespace-nowrap"},[t._v("\n      "+t._s(t.$t("REPORT.BUSINESS_HOURS"))+"\n    ")]),t._v(" "),e("span",[e("woot-switch",{model:{value:t.businessHoursSelected,callback:function(e){t.businessHoursSelected=e},expression:"businessHoursSelected"}})],1)])])}),[],!1,null,null,null).exports,m=r(1786),f=r(271),E=r(96);function O(t,e,r,n,s,i,a){try{var o=t[i](a),l=o.value}catch(c){return void r(c)}o.done?e(l):Promise.resolve(l).then(n,s)}var h={CONVERSATIONS:"conversations_count",INCOMING_MESSAGES:"incoming_messages_count",OUTGOING_MESSAGES:"outgoing_messages_count",FIRST_RESPONSE_TIME:"avg_first_response_time",RESOLUTION_TIME:"avg_resolution_time",RESOLUTION_COUNT:"resolutions_count",REPLY_TIME:"reply_time"},T={components:{ReportFilters:_,ReportContainer:m.a},props:{type:{type:String,default:"account"},getterKey:{type:String,default:""},actionKey:{type:String,default:""},downloadButtonLabel:{type:String,default:"Download Reports"}},data:function(){return{from:0,to:0,selectedFilter:null,groupBy:u.b[1],groupByfilterItemsList:this.$t("REPORT.GROUP_BY_DAY_OPTIONS"),selectedGroupByFilter:null,businessHours:!1}},computed:{filterItemsList:function(){return this.$store.getters[this.getterKey]||[]}},mounted:function(){this.$store.dispatch(this.actionKey)},methods:{fetchAllData:function(){if(this.selectedFilter){var t=this.from,e=this.to,r=this.groupBy,n=this.businessHours;this.$store.dispatch("fetchAccountSummary",{from:t,to:e,type:this.type,id:this.selectedFilter.id,groupBy:r.period,businessHours:n}),this.fetchChartData()}},fetchChartData:function(){var t=this;["CONVERSATIONS","INCOMING_MESSAGES","OUTGOING_MESSAGES","FIRST_RESPONSE_TIME","RESOLUTION_TIME","RESOLUTION_COUNT","REPLY_TIME"].forEach(function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var s,i,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s=t.from,i=t.to,a=t.groupBy,o=t.businessHours,t.$store.dispatch("fetchAccountReport",{metric:h[r],from:s,to:i,type:t.type,id:t.selectedFilter.id,groupBy:a.period,businessHours:o})}catch(l){Object(n.a)(t.$t("REPORT.DATA_FETCHING_FAILED"))}case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,s){var i=e.apply(t,r);function a(t){O(i,n,s,a,o,"next",t)}function o(t){O(i,n,s,a,o,"throw",t)}a(void 0)}))});return function(t){return r.apply(this,arguments)}}())},downloadReports:function(){var t=this.from,e=this.to,r=this.type,n=this.businessHours,s={agent:"downloadAgentReports",label:"downloadLabelReports",inbox:"downloadInboxReports",team:"downloadTeamReports"};if(s[r]){var i={from:t,to:e,fileName:Object(f.b)({type:r,to:e,businessHours:n}),businessHours:n};this.$store.dispatch(s[r],i)}},onDateRangeChange:function(t){var e=this,r=t.from,n=t.to,s=t.groupBy;0!==this.from&&0!==this.to&&this.$track(E.j.FILTER_REPORT,{filterType:"date",reportType:this.type}),this.from=r,this.to=n,this.groupByfilterItemsList=this.fetchFilterItems(s);var i=this.groupByfilterItemsList.filter((function(t){return t.id===e.groupBy.id}));i.length>0?this.selectedGroupByFilter=i[0]:(this.selectedGroupByFilter=this.groupByfilterItemsList[0],this.groupBy=u.b[this.selectedGroupByFilter.id]),this.fetchAllData()},onFilterChange:function(t){t&&(this.selectedFilter=t,this.fetchAllData())},onGroupByFilterChange:function(t){var e;this.groupBy=u.b[t.id],this.fetchAllData(),this.$track(E.j.FILTER_REPORT,{filterType:"groupBy",filterValue:null===(e=this.groupBy)||void 0===e?void 0:e.period,reportType:this.type})},fetchFilterItems:function(t){switch(t){case u.b[2].period:return this.$t("REPORT.GROUP_BY_WEEK_OPTIONS");case u.b[3].period:return this.$t("REPORT.GROUP_BY_MONTH_OPTIONS");case u.b[4].period:return this.$t("REPORT.GROUP_BY_YEAR_OPTIONS");default:return this.$t("REPORT.GROUP_BY_DAY_OPTIONS")}},onBusinessHoursToggle:function(t){this.businessHours=t,this.fetchAllData(),this.$track(E.j.FILTER_REPORT,{filterType:"businessHours",filterValue:t,reportType:this.type})}}},R=T,y=Object(p.a)(R,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-1 p-4 overflow-auto"},[e("woot-button",{attrs:{"color-scheme":"success","class-names":"button--fixed-top",icon:"arrow-download"},on:{click:t.downloadReports}},[t._v("\n    "+t._s(t.downloadButtonLabel)+"\n  ")]),t._v(" "),t.filterItemsList?e("ReportFilters",{attrs:{type:t.type,"filter-items-list":t.filterItemsList,"group-by-filter-items-list":t.groupByfilterItemsList,"selected-group-by-filter":t.selectedGroupByFilter},on:{dateRangeChange:t.onDateRangeChange,filterChange:t.onFilterChange,groupByFilterChange:t.onGroupByFilterChange,businessHoursToggle:t.onBusinessHoursToggle}}):t._e(),t._v(" "),t.filterItemsList.length?e("ReportContainer",{attrs:{"group-by":t.groupBy}}):t._e()],1)}),[],!1,null,null,null);e.a=y.exports},1913:function(t,e,r){"use strict";var n={components:{DatePicker:r(1690).a},props:{confirmText:{type:String,default:""},placeholder:{type:String,default:""},value:{type:Array,default:function(){return[]}}},methods:{handleChange:function(t){this.$emit("change",t)}}},s=r(8),i=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"date-picker"},[e("DatePicker",{attrs:{range:"",confirm:"",clearable:!1,editable:!1,"confirm-text":t.confirmText,placeholder:t.placeholder,value:t.value},on:{change:t.handleChange}})],1)}),[],!1,null,null,null);e.a=i.exports}}]);
//# sourceMappingURL=8-d3c7ecae23f0aa90d71c.chunk.js.map