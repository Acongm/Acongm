!function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=document.createElement("style");a.innerHTML='html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.safe-area{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.App{text-align:center}.App-logo{height:40vmin;pointer-events:none}@media (prefers-reduced-motion: no-preference){.App-logo{animation:App-logo-spin infinite 20s linear}}.App-header{background-color:#282c34;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);color:#fff}.App-link{color:#61dafb}@keyframes App-logo-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}button{font-size:calc(10px + 2vmin)}._title_cyvep_1{font-size:36px;font-weight:700;text-align:center;margin:20px}._row_cyvep_7{padding:10px 0;font-size:24px}._result_cyvep_11{font-size:24px;color:red;padding:10px}\n',document.head.appendChild(a),System.register(["./vendor-legacy.61e028c0.js"],(function(r,o){"use strict";var a,i,l,c,u,s,m,p,f,d,h,b;return{setters:[function(e){a=e.R,i=e.r,l=e.a,c=e.M,u=e.o,s=e.L,m=e.l,p=e.b,f=e.m,d=e.c,h=e.P,b=e.B}],execute:function(){r("u",x);var g=function(e,t){return e()},y=a.memo((function(e){var t=e.route;return console.log("hybird layout"),i(null==t?void 0:t.routes)})),v=a.memo((function(e){var t=e.route;return console.log("h5 layout"),a.createElement(a.Fragment,null,i(null==t?void 0:t.routes))}));function x(e){var t=a.useContext(c).stores;return e?t[e]:t}var E="_title_cyvep_1",k="_row_cyvep_7",A="_result_cyvep_11",_=u((function(e){e.backurl;var t=e.title,n=x("counterStore"),r=x("commonStore");return a.createElement(a.Fragment,null,a.createElement("div",{className:E},"Welcome Home ",t),a.createElement("div",{className:A},"current counter：",n.counter),a.createElement("div",{className:A},"current theme：",r.theme),a.createElement("p",{className:k},a.createElement(s,{to:"/h5/"},"H5 模块")),a.createElement("p",{className:k},a.createElement(s,{to:"/hybird/"},"hybird 模块")))})),S=[{path:"/",exact:!0,component:function(){var e=n(l.exports.useState(0),2),t=e[0],r=e[1];return a.createElement("div",{className:"App"},a.createElement("header",{className:"App-header"},a.createElement("img",{src:"http://heaven-blog-1255884785.file.myqcloud.com/assets/logo.ecc203fb.svg",className:"App-logo",alt:"logo"}),a.createElement("p",null,"Hello Vite + React!"),a.createElement("p",null,a.createElement("button",{type:"button",onClick:function(){return r((function(e){return e+1}))}},"count is: ",t)),a.createElement("p",null,"Edit ",a.createElement("code",null,"App.tsx")," and save to test HMR updates."),a.createElement("p",null,a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",a.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"))))}},{path:"/home",exact:!0,component:_},{path:"/hybird",exact:!0,component:y,routes:[{path:"/",exact:!1,component:m((function(){return g((function(){return o.import("./index-legacy.548456e7.js")}))}))}]},{path:"/h5",exact:!1,component:v,routes:[{path:"/",exact:!1,component:m((function(){return g((function(){return o.import("./index-legacy.33b166c5.js")}))}))}]}],w=p({counter:0,increment:function(){this.counter++},decrement:function(){this.counter--},incrementAsync:function(){var e=this;setTimeout((function(){e.counter++}),1e3)}}),j=function(){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"title",""),t(this,"theme","default"),f(this)}var r,o,a;return r=n,o=[{key:"setTheme",value:function(e){this.theme=e}},{key:"setTitle",value:function(e){this.title=e}}],o&&e(r.prototype,o),a&&e(r,a),n}(),N={counterStore:w,commonStore:new j};d.render(a.createElement(a.StrictMode,null,a.createElement(h,{stores:N},a.createElement(b,null,i(S)))),document.getElementById("root"))}}}))}();