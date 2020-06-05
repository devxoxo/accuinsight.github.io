(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{326:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return l}));var n=r(1),a=(r(0),r(345));const c={title:"trim"},i={id:"batchpipeline/workflow/workspace/data-processing-basic/trim",title:"trim",description:"## trim\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\data-processing-basic\\trim.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/trim",sidebar:"batchpipeline",previous:{title:"topN",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/top-n"},next:{title:"unionAll",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/union-all"}},o=[{value:"trim",id:"trim",children:[]}],p={rightToc:o};function l({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"trim"},"trim"),Object(a.b)("p",null,"\ubb38\uc790\uc5f4 \uc55e\ub4a4\uc758 \uacf5\ubc31\uc744 \uc81c\uac70\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[trim]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4. "),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic045_trim_workflow.png",alt:"prebasic045"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"col : \ubaa9\ub85d \uc911 \uacf5\ubc31\uc744 \uc81c\uac70\ud560 \uceec\ub7fc \uc120\ud0dd")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"how : trim \ubc29\ubc95\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(a.b)("table",{parentName:"li"},Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"option"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\uc124\uba85"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"trim"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\uc591\ucabd \uacf5\ubc31\uc744 \uc81c\uac70\ud55c\ub2e4.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ltrim"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\uc67c\ucabd \uacf5\ubc31\uc744 \uc81c\uac70\ud55c\ub2e4.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rtrim"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\uc624\ub978\ucabd \uacf5\ubc31\uc744 \uc81c\uac70\ud55c\ub2e4.")))))),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic046_trim_property.png",alt:"prebasic046"}))))}l.isMDXComponent=!0},345:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,O=u["".concat(i,".").concat(m)]||u[m]||s[m]||c;return r?a.a.createElement(O,o({ref:t},l,{components:r})):a.a.createElement(O,o({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);