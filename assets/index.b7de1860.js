var e=Object.defineProperty,t=(t,r,n)=>(((t,r,n)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n})(t,"symbol"!=typeof r?r+"":r,n),n);export function __vite_legacy_guard(){import("data:text/javascript,")}import{R as r,r as n,a as o,M as c,o as s,L as l,l as a,b as i,m,c as u,P as d,B as p}from"./vendor.11db91a6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const h={},f=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in h)return;h[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},E=r.memo((function(e){const{route:t}=e;return console.log("hybird layout"),n(null==t?void 0:t.routes)})),y=r.memo((function(e){const{route:t}=e;return console.log("h5 layout"),r.createElement(r.Fragment,null,n(null==t?void 0:t.routes))}));function g(e){const t=r.useContext(c),{stores:n}=t;return e?n[e]:n}var _="_title_cyvep_1",v="_row_cyvep_7",b="_result_cyvep_11";const x=[{path:"/",exact:!0,component:function(){const[e,t]=o.exports.useState(0);return r.createElement("div",{className:"App"},r.createElement("header",{className:"App-header"},r.createElement("img",{src:"./assets/logo.ecc203fb.svg",className:"App-logo",alt:"logo"}),r.createElement("p",null,"Hello Vite + React!"),r.createElement("p",null,r.createElement("button",{type:"button",onClick:()=>t((e=>e+1))},"count is: ",e)),r.createElement("p",null,"Edit ",r.createElement("code",null,"App.tsx")," and save to test HMR updates."),r.createElement("p",null,r.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",r.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"))))}},{path:"/home",exact:!0,component:s((e=>{const{backurl:t,title:n}=e,o=g("counterStore"),c=g("commonStore");return r.createElement(r.Fragment,null,r.createElement("div",{className:_},"Welcome Home ",n),r.createElement("div",{className:b},"current counter：",o.counter),r.createElement("div",{className:b},"current theme：",c.theme),r.createElement("p",{className:v},r.createElement(l,{to:"/h5/"},"H5 模块")),r.createElement("p",{className:v},r.createElement(l,{to:"/hybird/"},"hybird 模块")))}))},{path:"/hybird",exact:!0,component:E,routes:[{path:"/",exact:!1,component:a((()=>f((()=>import("./index.f8c4f42c.js")),["assets/index.f8c4f42c.js","assets/vendor.11db91a6.js"])))}]},{path:"/h5",exact:!1,component:y,routes:[{path:"/",exact:!1,component:a((()=>f((()=>import("./index.e9160b49.js")),["assets/index.e9160b49.js","assets/vendor.11db91a6.js"])))}]}],N=i({counter:0,increment(){this.counter++},decrement(){this.counter--},incrementAsync(){setTimeout((()=>{this.counter++}),1e3)}});const k={counterStore:N,commonStore:new class{constructor(){t(this,"title",""),t(this,"theme","default"),m(this)}setTheme(e){this.theme=e}setTitle(e){this.title=e}}};u.render(r.createElement(r.StrictMode,null,r.createElement(d,{stores:k},r.createElement(p,null,n(x)))),document.getElementById("root"));export{g as u};
