(()=>{var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"js/chunks/"+e+".js?id="+{587:"4b135e7e85eec085",890:"6ef446f3752704a1",921:"34d9ee348a4170f5"}[e],o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="addons:",o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var d,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var c=l[s];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+a){d=c;break}}d||(u=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",t+a),d.src=n),e[n]=[r];var f=(t,r)=>{d.onerror=d.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),u&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/addons/TagFieldtype/",(()=>{var e={773:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=a);var i=o.p+o.u(t),d=new Error;o.l(i,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,r[1](d)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,a,[i,d,u]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(u)u(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunkaddons=self.webpackChunkaddons||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0,window.Fusion.booting((function(e,t,n){e.component("tags-fieldtype",(function(){return o.e(587).then(o.bind(o,587))})),t.addRoutes([{path:"/tags",component:function(){return o.e(890).then(o.bind(o,890))},name:"tag",meta:{requiresAuth:!0,layout:"admin"}},{path:"/tags/:id/edit",component:function(){return o.e(921).then(o.bind(o,921))},name:"tag.edit",meta:{requiresAuth:!0,layout:"admin"}}])})),window.addEventListener("DOMContentLoaded",(function(){}))})();