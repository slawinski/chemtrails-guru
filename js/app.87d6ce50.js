(function(t){function e(e){for(var n,o,i=e[0],u=e[1],s=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},c=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/chemtrails-guru/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"3d4c":function(t,e,r){},"3e33":function(t,e,r){t.exports=r.p+"img/airplane.7624a855.svg"},5490:function(t,e,r){"use strict";var n=r("bdf3"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Map"),r("notifications",{attrs:{group:"api",position:"top right"}})],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("l-map",{ref:"map",attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":function(e){t.zoom=e}}},[n("l-tile-layer",{attrs:{url:t.url}}),t.isMarkerClicked?n("span",[n("LeafletHeatmap",{attrs:{"lat-lng":t.heatmapArray}}),n("l-rotated-marker",{attrs:{"lat-lng":t.singleFlight.trackingData.position,rotationAngle:t.singleFlight.trackingData.trueTrack}},[n("l-popup",{attrs:{content:t.popupData}}),n("l-icon",[n("img",{attrs:{src:r("3e33"),alt:"airplane"}})])],1),n("l-control",{attrs:{position:"bottomleft"}},[n("button",{on:{click:t.goBack}},[t._v("\n          Take me back!\n        ")])])],1):n("span",t._l(t.flights,(function(e){return n("l-rotated-marker",{key:"marker-"+e.icao24,attrs:{"lat-lng":e.position,rotationAngle:e.trueTrack},on:{click:function(r){return t.focusOnFlight(e)}}},[n("l-icon",[n("img",{attrs:{src:r("3e33"),alt:"airplane"}})])],1)})),1)],1),t.isSpinnerVisible?n("Spinner",{staticClass:"spinner"}):t._e()],1)},i=[],u=r("6ab4"),s=r.n(u),l=r("87b9"),p=r.n(l),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"spinner rotate",attrs:{src:r("ed62"),alt:""}})},h=[],g={name:"Spinner"},m=g,b=(r("8cf4"),r("2877")),d=Object(b["a"])(m,f,h,!1,null,"6e2cdda2",null),v=d.exports,w=r("2699"),y=r("a40a"),O=r("2253"),k=r("fbba"),j=r("f60f"),x=r("750b"),R=r("e11e");function _(){var t=Object(x["e"])(6),e=Object(x["e"])(Object(R["latLng"])(52,19)),r=Object(x["e"])("http://{s}.tile.osm.org/{z}/{x}/{y}.png");return{zoom:t,center:e,url:r}}r("96cf");var T=r("768b"),A=r("75fc"),M=r("3b8d"),S=r("bc3a"),E=r.n(S),L={GET_ALL:"https://opensky-network.org/api/states/all?lamin=49&lomin=15&lamax=55&lomax=25",GET_AIRPORT:"".concat("http://localhost:8080","/api/airports"),GET_ROUTE:"".concat("http://localhost:8080","/api/routes"),GET_AIRCRAFT:"".concat("http://localhost:8080","/api/metadata/aircraft/icao")};function D(){return F.apply(this,arguments)}function F(){return F=Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.get(L.GET_ALL);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),F.apply(this,arguments)}function P(t){return C.apply(this,arguments)}function C(){return C=Object(M["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("".concat(L.GET_ROUTE,"?callsign=").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),C.apply(this,arguments)}function I(t){return z.apply(this,arguments)}function z(){return z=Object(M["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("".concat(L.GET_AIRPORT,"?icao=").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),z.apply(this,arguments)}function G(t){return U.apply(this,arguments)}function U(){return U=Object(M["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("".concat(L.GET_AIRCRAFT,"/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),U.apply(this,arguments)}function V(){var t=Object(x["e"])(!0),e=Object(x["e"])([]);function r(){return n.apply(this,arguments)}function n(){return n=Object(M["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.prev=1,e.next=4,D();case 4:r=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),console.error(e.t0);case 10:return e.prev=10,a(r),t.value=!1,e.finish(10);case 14:case"end":return e.stop()}}),e,null,[[1,7,10,14]])}))),n.apply(this,arguments)}function a(t){e.value=Object(A["a"])(t.data.states.map((function(t){var e=Object(T["a"])(t,11),r=e[0],n=e[1],a=e[5],c=e[6],o=e[10];return{icao24:r,callSign:n,position:{lat:c,lng:a},trueTrack:o}})))}return Object(x["c"])((function(){r()})),{isSpinnerVisible:t,flights:e}}r("6c7b");function B(t){var e=Object(x["e"])(!1),r=Object(x["d"])({aircraft:null,route:null,trackingData:null}),n=Object(x["e"])([]),a=Object(x["e"])(null),c=Object(x["a"])((function(){var t="",e=r.aircraft,n=r.route;return e&&n?t="Airlines: ".concat(e.owner," <br/>\n          Aircraft: ").concat(e.model," <br/>\n          Route: ").concat(n.departure," - ").concat(n.arrival):e&&!n?t="Aircraft: ".concat(e.model," <br/>\n          Route: no data"):!e&&n?t="Airline: no data <br/>\n          Aircraft: no data <br/>\n          Route: ".concat(n.departure," - ").concat(n.arrival):e||n||(t="No data"),t}));function o(t){return i.apply(this,arguments)}function i(){return i=Object(M["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.value=!0,r.trackingData=n,a.value.mapObject.setView(n.position,8),u(n),g(n),b(n.position,n.trueTrack);case 6:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return s=Object(M["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={},t.prev=1,t.next=4,P(e.callSign);case 4:r=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.error(t.t0);case 10:return t.prev=10,l(r.data),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[1,7,10,13]])}))),s.apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return p=Object(M["a"])(regeneratorRuntime.mark((function t(e){var n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(T["a"])(e.route,2),a=n[0],c=n[1],t.next=3,f(a);case 3:return t.t0=t.sent,t.next=6,f(c);case 6:return t.t1=t.sent,t.abrupt("return",r.route={departure:t.t0,arrival:t.t1});case 8:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=Object(M["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={},t.prev=1,t.next=4,I(e);case 4:return r=t.sent,n=r.data,a=n.municipality,c=n.country,t.abrupt("return","".concat(a,", ").concat(c));case 9:t.prev=9,t.t0=t["catch"](1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])}))),h.apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return m=Object(M["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={},t.prev=1,t.next=4,G(e.icao24);case 4:n=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.error(t.t0);case 10:return t.prev=10,r.aircraft=n.data,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[1,7,10,13]])}))),m.apply(this,arguments)}function b(t,e){var r=100,a=20/r;return n.value=Array(r).fill().map((function(n,c){return[t.lat+d(a*c/10,e),t.lng+v(a*c/10,e),r-c]}))}function d(t,e){var r=Math.sqrt(Math.pow(t,2)*(1-Math.pow(Math.sin(w(e)),2)));return e>270||e<=90?-r:r}function v(t,e){var r=Math.sqrt(Math.pow(t,2)*(1-Math.pow(Math.cos(w(e)),2)));return e>0&&e<=180?-r:r}function w(t){return t*(Math.PI/180)}function y(){e.value=!1,r.aircraft=null,r.route=null,r.trackingData=null,a.value.mapObject.setView(t.value,6)}return{popupData:c,isMarkerClicked:e,singleFlight:r,focusOnFlight:o,heatmapArray:n,goBack:y,map:a}}var $={name:"Map",components:{Spinner:v,LeafletHeatmap:p.a,LMap:w["a"],LTileLayer:y["a"],LControl:O["a"],LIcon:k["a"],LPopup:j["a"],"l-rotated-marker":s.a},setup:function(){var t=_(),e=t.zoom,r=t.center,n=t.url,a=V(),c=a.isSpinnerVisible,o=a.flights,i=B(r),u=i.popupData,s=i.isMarkerClicked,l=i.singleFlight,p=i.focusOnFlight,f=i.heatmapArray,h=i.goBack,g=i.map;return{zoom:e,center:r,url:n,isSpinnerVisible:c,flights:o,popupData:u,isMarkerClicked:s,singleFlight:l,focusOnFlight:p,heatmapArray:f,goBack:h,map:g}}},q=$,H=(r("5490"),Object(b["a"])(q,o,i,!1,null,null,null)),J=H.exports,N={name:"App",components:{Map:J}},K=N,Q=(r("034f"),Object(b["a"])(K,a,c,!1,null,null,null)),W=Q.exports,X=r("ee98"),Y=r.n(X);r("6cc5");n["default"].use(x["b"]),n["default"].use(Y.a),n["default"].config.productionTip=!1,delete R["Icon"].Default.prototype._getIconUrl,new n["default"]({render:function(t){return t(W)}}).$mount("#app"),R["Icon"].Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")})},"64a9":function(t,e,r){},"8cf4":function(t,e,r){"use strict";var n=r("3d4c"),a=r.n(n);a.a},bdf3:function(t,e,r){},ed62:function(t,e,r){t.exports=r.p+"img/return.bdbbe344.svg"}});
//# sourceMappingURL=app.87d6ce50.js.map