"use strict";(self.webpackChunkaddons=self.webpackChunkaddons||[]).push([[587],{703:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,".w-100[data-v-372906cd]{width:100%}",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=s(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:m(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(e,t){var n,r,i;if(t.singleton){var o=v++;n=h||(h=u(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=c(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},587:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}const i={props:{field:{type:Object,required:!0},value:{required:!1,default:function(){return[]}}},data:function(){return{tag:""}},computed:{placeholder:function(){return _.isUndefined(this.field.settings)||_.isUndefined(this.field.settings.placeholder)?"Type in your tags and hit enter":this.field.settings.placeholder},tags:{get:function(){return this.value&&this.value.map((function(e){return"object"==r(e)||"OBJECT"==typeof e||"Object"==typeof e?e.name:e}))||[]},set:function(e){this.$emit("input",e)}}},mounted:function(){this.tags=_.map(this.value,"name")||[],this.$forceUpdate()},methods:{addTag:function(){this.tags.push(this.tag),this.tag="",this.$emit("input",this.tags),this.$emit("add-tag",this.tag)},removeTag:function(e){_.remove(this.tags,(function(t){return t==e})),this.$forceUpdate(),this.$emit("input",this.tags),this.$emit("remove-tag",e)}}};var o=n(379),a=n.n(o),s=n(703),c={insert:"head",singleton:!1};a()(s.Z,c);s.Z.locals;const u=(0,n(900).Z)(i,(function(){var e=this,t=e._self._c;return t("div",[t("label",{staticClass:"form__label",attrs:{for:e.field.handle}},[e._v(e._s(e.field.name))]),e._v(" "),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.tag,expression:"tag"}],staticClass:"w-100 form-control",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.tag},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTag.apply(null,arguments)},input:function(t){t.target.composing||(e.tag=t.target.value)}}}),e._v(" "),e._l(e.tags,(function(n,r){return t("span",{key:r,staticClass:"badge badge-primary",on:{click:function(t){return e.removeTag(n)}}},[e._v(e._s(n)),t("i",{staticClass:"fa fa-times",on:{click:function(t){return e.removeTag(r)}}})])}))],2)])}),[],!1,null,"372906cd",null).exports},900:(e,t,n)=>{function r(e,t,n,r,i,o,a,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}n.d(t,{Z:()=>r})}}]);