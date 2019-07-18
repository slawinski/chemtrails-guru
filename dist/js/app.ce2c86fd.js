(function(n){function l(l){for(var a,u,c=l[0],o=l[1],d=l[2],s=0,p=[];s<c.length;s++)u=c[s],t[u]&&p.push(t[u][0]),t[u]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a]);i&&i(l);while(p.length)p.shift()();return r.push.apply(r,d||[]),e()}function e(){for(var n,l=0;l<r.length;l++){for(var e=r[l],a=!0,c=1;c<e.length;c++){var o=e[c];0!==t[o]&&(a=!1)}a&&(r.splice(l--,1),n=u(u.s=e[0]))}return n}var a={},t={app:0},r=[];function u(l){if(a[l])return a[l].exports;var e=a[l]={i:l,l:!1,exports:{}};return n[l].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=n,u.c=a,u.d=function(n,l,e){u.o(n,l)||Object.defineProperty(n,l,{enumerable:!0,get:e})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,l){if(1&l&&(n=u(n)),8&l)return n;if(4&l&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&l&&"string"!=typeof n)for(var a in n)u.d(e,a,function(l){return n[l]}.bind(null,a));return e},u.n=function(n){var l=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(l,"a",l),l},u.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},u.p="/chemtrails-tracker/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=l,c=c.slice();for(var d=0;d<c.length;d++)l(c[d]);var i=o;r.push([0,"chunk-vendors"]),e()})({0:function(n,l,e){n.exports=e("56d7")},"034f":function(n,l,e){"use strict";var a=e("64a9"),t=e.n(a);t.a},"0ce6":function(n,l,e){"use strict";var a=e("cd81"),t=e.n(a);t.a},5490:function(n,l,e){"use strict";var a=e("bdf3"),t=e.n(a);t.a},"56d7":function(n,l,e){"use strict";e.r(l);e("cadf"),e("551c"),e("f751"),e("097d");var a,t,r=e("2b0e"),u=function(){var n=this,l=n.$createElement,e=n._self._c||l;return e("div",{attrs:{id:"app"}},[e("Nav",{attrs:{msg:"Welcome to Chemtrails Tracker!"}}),e("Map")],1)},c=[],o=function(){var n=this,l=n.$createElement,e=n._self._c||l;return e("div",{staticClass:"nav"},[e("h1",[n._v(n._s(n.msg))])])},d=[],i={name:"Nav",props:{msg:String}},s=i,p=(e("0ce6"),e("2877")),A=Object(p["a"])(s,o,d,!1,null,"73fbc3d3",null),f=A.exports,m=function(){var n=this,l=n.$createElement,e=n._self._c||l;return e("div",{staticClass:"map"})},R=[],b=(e("96cf"),e("3b8d")),g=e("967a"),h=e.n(g),v=e("795b"),y=e.n(v),w="gmapsCallback",P=!!window.google,C=new y.a(function(n,l){a=n,t=l});function L(){if(P)return C;P=!0,window[w]=function(){return a(window.google)};var n=document.createElement("script");return n.async=!0,n.defer=!0,n.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyAMVbh4uSxAyRGE1rRAmHCeWIOUCkUqY7w","&callback=").concat(w),n.onerror=t,document.querySelector("head").appendChild(n),C}var I=e("9313"),Y=e.n(I),W=e("f6b6"),k={zoom:6,center:{lat:52.232222,lng:21.008333}},O={name:"Map",mounted:function(){var n=Object(b["a"])(regeneratorRuntime.mark(function n(){var l,e,a,t;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,L();case 3:l=n.sent,e=new l.maps.Map(this.$el,k),a=function(n){e.setZoom(13),e.setCenter(n.getPosition())},t=W.states.map(function(n){var t=new l.maps.Marker({position:{lat:n[6],lng:n[5]},map:e,icon:Y.a});return t.addListener("click",function(){return a(t)}),t}),new h.a(e,t,{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"}),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),console.error(n.t0);case 13:case"end":return n.stop()}},n,this,[[0,10]])}));function l(){return n.apply(this,arguments)}return l}()},T=O,U=(e("5490"),Object(p["a"])(T,m,R,!1,null,null,null)),x=U.exports,S={name:"app",components:{Nav:f,Map:x}},E=S,B=(e("034f"),Object(p["a"])(E,u,c,!1,null,null,null)),F=B.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(F)}}).$mount("#app")},"64a9":function(n,l,e){},9313:function(n,l){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA4QAAAOEBcBgcLgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUkSURBVFiF7ZddbBRVFMd/987szHaXFkr5ahf5lFq+VlAWKFYBQYn6JBoTH3zQBBMfTCmi8QFs0AdN/AA0EgW/HozRhIQgyEdCiUEDiEi0Fiylgm2B0o/FtaXL7szce30oJSAtNEStD/4f55w55zfn3DP3XmGMYSAlBzT7/wD/BQD7305492vkOy4JoXlES4rFPzkFS94gqgUzFSRyHMqA0oxPYY9dQPPfVoFZGwnldRIXkoRjMc+WlGmLsfkR0lOLEJ4y0cO/dacVAuNIY/xAvH5TFVizBvnNIEqQJCxJqWtx90Wf4qiLVzIKHY8RnThMi7FDA35qgk37bX5Pdy+3XNcwf4LPjlonkIpYvyqwcB3jpCZhSebmhJifGcLUsAW3DsePjyZaPMLI8QWKaEjZnqfwA0VNs81be1zauyTiUpyZsYDHZmTZUu1iS/btrKD1GoDF6xmJIoEgEXVY4AXMdAThCSO5GB9NpGQU9sQCxdCIwvNUOOtrlNIYDy54cLzV4sPvorR0SvIjxji2QWkhnpqdoWyCz4+nbWpbrS5P8R6AvXAts6RmcTTM/ECTkIYhsaGkp8dwpxThFI8wjMpV+L4Keb7C8xUmgFTH1eAnk5IPDuZw5g/J8KjR8UIla1os8nO0WH1fmvyIJuMLTiUlXb4QbogvAWxXssE3JOIxeGIujMnXaKVys77C8xSB0pxP9d2eppRk4/4wjSmLoTlGPzTZkzXNNtXNFmXjfbGsNHPZt6VTUJ+0Awxf7HiWLICdV0RpspEnq0/zxro9Ku+x27Ni0nB1w3XR3CF5/0CYU0mLwWGjHyjxZCSE3PFLSPtayIr5F5kRC65651yH5ES75WvBpp5nl6fgwXdwXamfD4xcNWm4ch6NZ8SYfH1N4rYLko0HwtS1WeS6RpeO9eXowZqaczbfN9kU5mlW3Z8m6lw9XR0ZwbYah72/hs7uLhexawB6tHADg4bA6qyiYmaRH1oa9xiZq0mlJe8dcKltsYk4Rs8Z48tx+RqtYVedo1s6pVxS4vH4HdleK3aizeLTw26mIWW9uqeCl/sE6NHidynIlbyS9c3ThYONbEhKEQ4ZPfuWQE4s6G5RW5dk93FHC2HkygUZikcEvcYyBvbVh/jkh7CvFZOqnqPhhgA9WrSWmAVHpxUGg++8oqc/nLGpPmszvkDx4uI0rtV3jPYuyZZqh0ONocM7y0lcabvhblhVwRlp8W0k1A2qDWz+2dXVZ22W3p6lcsn1kwO0dgiOt9oXPM2Gv9r6tR37ioPtXdIDOHLGpiMjZMQxxAt7L/mVCjQ0nLdIpoWT9dl8UwDGUJ1MywxAw3mpCyIax0JX7ory/v4w12tiW6ekrt3SlmTbty/QeXMAkupURuQYAx1ZIaeMVDw8LSvnjfU52Bgyy74YxLkLvYdq6ZTUtloXfc3G3uz9Avh6OQ0Yo35qtkEIc+uw7ilIpiVaG+Er0bZqezTYftRBX1GOjC+ob7fwFN49Hey5aQADxpbUHWuxyHONOZ+WfPZjWNW1WcogyqtWMMKHOVtrnPpVX0WDppS89PWCE21W1iA+rqzk2r9afwEAlBGHMoFAgNx6zDHZgFpLU7R3BW8DVC3nSCYlJjd3yjWVuyL+50dcTv8uqU9KAsNHfcXt94Hk3jdZIwQvCYEyhpVVK1jXp+96bnPgMymYro05uatclPTl2/8jmc1+FPWW4q7dK2m9nuveco4LmLVoLc8YJWqv5/uPHkr7owG/F/wPMOAAfwKhwkcodKKz1gAAAABJRU5ErkJggg=="},bdf3:function(n,l,e){},cd81:function(n,l,e){},f6b6:function(n){n.exports={time:1550175080,states:[["3c6744","DLH2530 ","Germany",1550175078,1550175079,15.0634,50.7042,11269.98,!1,209.56,30.22,0,null,11315.7,"1445",!1,0],["4249b5","AFL2428 ","United Kingdom",1550175079,1550175079,17.3348,49.2088,10370.82,!1,252.83,228.13,0,null,10401.3,"6003",!1,0],["3c6486","DLH8JV  ","Germany",1550175079,1550175079,14.493,50.5659,10370.82,!1,244.91,217.83,0,null,10424.16,"4522",!1,0],["4891ae","ENT7344 ","Poland",1550175079,1550175079,14.5323,49.9695,11277.6,!1,206.36,32.58,0,null,11361.42,"1476",!1,0],["3991e0","AFR1144 ","France",1550175078,1550175078,21.522,53.9994,10660.38,!1,206.32,70.48,0,null,10690.86,"0650",!1,0],["40697c","BAW851W ","United Kingdom",1550175078,1550175078,19.3782,52.1851,7269.48,!1,213.4,273.59,7.15,null,7399.02,"0535",!1,0],["3c5c41","WGT1A   ","Germany",1550175078,1550175079,14.9654,50.7305,13106.4,!1,264.26,222.95,0,null,13098.78,"6275",!1,0],["86d9d2","ANA218  ","Japan",1550175078,1550175078,17.3401,52.704,11269.98,!1,215.46,37.34,.33,null,11361.42,"1465",!1,0],["44010d","AUA72MW ","Austria",1550175078,1550175079,16.6308,49.5256,8602.98,!1,224.82,180.39,-14.96,null,8740.14,"6042",!1,0],["4892c0","ENT7125 ","Poland",1550175079,1550175079,19.062,51.8609,8107.68,!1,211.47,90.98,-12.68,null,8107.68,"2373",!1,0],["4ca9c1","RYR11CL ","Ireland",1550175078,1550175078,16.1869,49.4993,9928.86,!1,189.95,136.54,-4.88,null,9989.82,"5246",!1,0],["4ca9cd","RYR5JL  ","Ireland",1550175079,1550175079,23.2571,51.4597,12192,!1,229.12,282.98,0,null,12115.8,"1176",!1,0],["8962e7","ETD918  ","United Arab Emirates",1550175079,1550175079,17.4618,49.3623,9448.8,!1,228.15,118.7,0,null,9547.86,"1466",!1,0],["4ca8e8","RYR2619 ","Ireland",1550175078,1550175078,23.0248,53.4069,9982.2,!1,185.76,1.27,-3.25,null,10020.3,"5554",!1,0],["4067f8","TOM377  ","United Kingdom",1550175078,1550175079,17.4936,50.8967,12184.38,!1,224.65,339.49,.33,null,12192,"4610",!1,0],["4baa79","THY7KN  ","Turkey",1550175078,1550175079,14.3444,49.8192,10363.2,!1,248.12,292.68,0,null,10477.5,"3262",!1,0],["4ac9c1","BLX512  ","Sweden",1550175078,1550175078,23.8627,53.9924,11582.4,!1,193.95,339.02,0,null,11574.78,"5662",!1,0],["8964e8","ABY585  ","United Arab Emirates",1550175079,1550175079,14.4251,49.8312,3825.24,!1,179.71,135.46,5.53,null,4053.84,"1402",!1,0],["4ca80b","RYR3FK  ","Ireland",1550175078,1550175079,16.3702,53.2093,11582.4,!1,238.96,256.68,.33,null,11612.88,"5201",!1,0],["394c19","AFR87ZR ","France",1550175078,1550175078,17.2697,52.0512,9441.18,!1,211.97,84.29,0,null,9532.62,"0667",!1,0],["4ca73f","RYR9DE  ","Ireland",1550175079,1550175079,19.7421,50.8698,11582.4,!1,250.69,218,0,null,11574.78,"6015",!1,0],["48af01","LOT234  ","Poland",1550175079,1550175079,19.0998,52.3881,8107.68,!1,212.03,91.53,-14.96,null,8282.94,"7130",!1,0],["48af00","LOT2MF  ","Poland",1550175079,1550175079,15.4246,52.4144,11277.6,!1,203.24,88.98,-.33,null,11369.04,"2057",!1,0],["424352","AFL2316 ","United Kingdom",1550175078,1550175079,14.3095,52.7456,3017.52,!1,151,223.76,-7.8,null,3208.02,"5122",!1,0],["48adab","LOT420  ","Poland",1550175079,1550175079,17.0008,50.6978,11277.6,!1,190.96,63.43,.33,null,11330.94,"3022",!1,0],["48adac","LOT484  ","Poland",1550175078,1550175078,20.0011,52.907,7665.72,!1,230.19,144,-9.1,null,7833.36,"2053",!1,0],["4ca5b6","IBK443  ","Ireland",1550175078,1550175078,22.4276,53.3543,12496.8,!1,199.67,21.14,0,null,12420.6,"4217",!1,0],["4ca5e1","RYR74PR ","Ireland",1550175078,1550175079,18.6088,52.7594,9547.86,!1,236.98,274.86,6.5,null,9631.68,"4545",!1,0],["4ca702","RYR3GG  ","Ireland",1550175078,1550175078,17.7547,53.5002,11277.6,!1,211.62,87.63,0,null,11353.8,"4754",!1,0],["479f2d","NAX48U  ","Norway",1550175079,1550175079,18.2437,52.2718,11887.2,!1,213.6,351.83,0,null,11910.06,"4215",!1,0],["342609","","Spain",1550175073,1550175079,15.5969,49.3789,5791.2,!1,129.99,117.07,-.33,null,5783.58,"6425",!1,0],["508377","AUI925  ","Ukraine",1550175048,1550175054,19.8051,50.075,null,!0,0,106,null,null,null,"5666",!1,0],["48ad81","LOT3KG  ","Poland",1550175079,1550175079,17.025,51.3697,10363.2,!1,254.57,249.66,0,null,10485.12,"4603",!1,0],["48ad82","LOT3949 ","Poland",1550175079,1550175079,16.9405,52.3989,312.42,!1,69.63,287.63,-4.23,null,510.54,"1340",!1,0],["48ad80","LOT290  ","Poland",1550175079,1550175079,16.4542,52.4047,10668,!1,198.58,89.55,.33,null,10789.92,"2156",!1,0],["4ca541","RYR50KC ","Ireland",1550175078,1550175079,16.7763,51.0343,11582.4,!1,237.03,288.87,0,null,11590.02,"1144",!1,0],["48ada8","LOT3GP  ","Poland",1550175079,1550175079,20.9239,51.9299,1173.48,!1,135.2,53.04,-5.53,null,1165.86,"4567",!1,0],["48ada4","LOT375  ","Poland",1550175079,1550175079,15.4357,50.4235,10363.2,!1,252.37,237.99,0,null,10485.12,"1757",!1,0],["48ada3","LOT4CH  ","Poland",1550175078,1550175078,16.7934,50.5084,11277.6,!1,187.28,60.55,0,null,11330.94,"1470",!1,0],["48ada1","LOT3SM  ","Poland",1550175079,1550175079,19.6601,51.4555,6324.6,!1,184.34,60.22,-9.75,null,6477,"2110",!1,0],["49d2d0","","Czech Republic",1550175075,1550175078,14.5986,50.2092,1562.1,!1,126.43,195.34,-10.08,null,1584.96,"1343",!1,0],["49d2bc","","Czech Republic",1550175076,1550175079,14.627,49.9964,518.16,!1,39,30.96,0,null,510.54,"7000",!1,0],["40643c","EZY73XU ","United Kingdom",1550175078,1550175078,14.2612,50.1104,null,!0,9.77,64,null,null,null,"4770",!1,0],["48ae83","LOT3FD  ","Poland",1550175078,1550175078,18.5336,51.3102,9951.72,!1,202.24,72.53,-8.13,null,10012.68,"7703",!1,0],["484b2a","TRA22R  ","Kingdom of the Netherlands",1550175078,1550175078,14.455,49.2265,10972.8,!1,236.54,309.26,0,null,11010.9,"1000",!1,0],["42428d","AFL2414 ","United Kingdom",1550175079,1550175079,20.25,50.6471,10363.2,!1,269.96,231.73,.33,null,10370.82,"7212",!1,0],["49d417","","Czech Republic",1550172674,1550175078,16.355,49.1742,998.22,!1,132.61,120.54,0,null,null,"1000",!1,0],["7802d2","CCA722D ","China",1550175078,1550175078,23.476,51.6708,10668,!1,197.32,38.54,0,null,10645.14,"4250",!1,0],["400add","EZY71TC ","United Kingdom",1550175079,1550175079,14.3638,54.7654,11582.4,!1,230.88,195.24,0,null,11650.98,"7675",!1,0],["4ca30e","ABR2KT  ","Ireland",1550175079,1550175079,18.7732,50.3557,2560.32,!1,106.63,226.76,6.83,null,2712.72,"4604",!1,0],["4caf9a","BCS5571 ","Ireland",1550175079,1550175079,16.6905,50.0279,8641.08,!1,225.27,301.84,10.08,null,8633.46,"1401",!1,0],["4ca372","RYR470K ","Ireland",1550175072,1550175072,19.799,50.0757,null,!0,6.17,129,null,null,null,"3534",!1,0],["502c7d","","Latvia",1550172188,1550175078,17.1916,52.5631,7620,!1,163.29,36.54,-.65,null,null,"1413",!1,0],["40123f","BAW884  ","United Kingdom",1550175079,1550175079,17.6605,49.2978,11277.6,!1,200.04,119.93,0,null,11269.98,"4747",!1,0],["407537","BAW861  ","United Kingdom",1550175077,1550175079,14.2701,50.1114,null,!0,1.54,320,null,null,null,"6623",!1,0],["49d0e9","","Czech Republic",1550175078,1550175079,15.2108,50.0116,365.76,!1,43.65,8.13,-.33,null,358.14,"7000",!1,0],["49d0dd","","Czech Republic",1550175075,1550175079,15.9079,50.2502,609.6,!1,48.97,148.31,.98,null,601.98,"7000",!1,0],["4ca251","RYR6PX  ","Ireland",1550175079,1550175079,15.8604,52.8641,9083.04,!1,238.5,254.61,6.83,null,9243.06,"0532",!1,0],["4ca225","RYR2MV  ","Ireland",1550175078,1550175078,16.1782,49.2043,11582.4,!1,236.57,290.76,0,null,11612.88,"4230",!1,0],["4caca8","RYR42AJ ","Ireland",1550175079,1550175079,19.8514,50.087,281.94,!1,71.65,257.56,-3.9,null,457.2,"5221",!1,0],["155bb7","AFL2036 ","Russian Federation",1550175079,1550175080,22.1898,49.6623,10370.82,!1,248.68,187.73,-.33,null,10378.44,"6274",!1,0],["440665","AUA307  ","Austria",1550175079,1550175079,14.7949,50.1891,10363.2,!1,231.58,340,0,null,10454.64,"4512",!1,0],["4c01e0","ASL66M  ","Serbia",1550175079,1550175079,14.2784,51.0786,10957.56,!1,213.09,159.51,4.55,null,11010.9,"7614",!1,0],["49d119","","Czech Republic",1550175077,1550175079,15.8874,50.2205,563.88,!1,37.17,228.37,.65,null,556.26,"7000",!1,0],["3c4589","BOX519  ","Germany",1550175079,1550175079,20.8788,52.1119,10972.8,!1,260.45,264.56,0,null,11003.28,"1742",!1,0],["49d14c","CSA2EP  ","Czech Republic",1550175079,1550175079,15.3789,51.2495,8267.7,!1,229.17,205.82,-13,null,8450.58,"6010",!1,0],["4cac9a","RYR40VA ","Ireland",1550175078,1550175078,19.2536,52.4443,4381.5,!1,165.72,91.6,-8.13,null,4511.04,"1170",!1,0],["4cabbf","RYR1WQ  ","Ireland",1550175079,1550175079,16.9385,49.0053,10972.8,!1,253.62,223.6,0,null,10965.18,"1333",!1,0],["4cab9d","RYR8SJ  ","Ireland",1550175078,1550175078,19.6666,53.6156,11582.4,!1,232.84,260.2,0,null,11612.88,"6505",!1,0],["489789","","Poland",1550174834,1550175078,15.8798,50.8932,10668,!1,194.69,73.58,0,null,null,"1477",!1,0],["780970","CCA932  ","China",1550175079,1550175079,14.362,52.6012,9448.8,!1,236.15,68.13,0,null,9624.06,"7712",!1,0],["451dad","BCS917  ","Bulgaria",1550175078,1550175079,17.4986,51.7032,9745.98,!1,235.37,267.24,0,null,9738.36,"6007",!1,0],["40712f","BCS3789 ","United Kingdom",1550175079,1550175079,18.7879,54.2976,1082.04,!1,82.35,292.4,-.33,null,1188.72,"4566",!1,0],["48c226","RYR3WU  ","Poland",1550175079,1550175079,17.9014,52.4145,9806.94,!1,197.66,88.06,-12.68,null,9944.1,"5245",!1,0],["3c66e2","DLH2546 ","Germany",1550175079,1550175079,22.3343,49.9632,11277.6,!1,184.21,91.12,0,null,11239.5,"1456",!1,0]]}}});
//# sourceMappingURL=app.ce2c86fd.js.map