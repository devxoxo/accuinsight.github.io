(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{264:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(1),a=(t(0),t(365));const i={title:"standardScaler"},o={id:"pipeline/workflow/workspace/feature-engineering/standardScaler",title:"standardScaler",description:"### Definition\r",source:"@site/docs\\pipeline\\workflow\\workspace\\feature-engineering\\standardScaler.md",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/standardScaler",sidebar:"pipeline",previous:{title:"outlierRemover",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/outlierRemover"},next:{title:"maxAbsScaler",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/maxAbsScaler"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function p({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,"\uac01 Feature\uc758 \ud3c9\uade0\uc744 0 \ubd84\uc0b0\uc744 1\ub85c\ub9cc\ub4dc\ub294 \uc2a4\ud0e0\ub2e4\ub4dc \uc2a4\ucf00\uc77c\ub7ec \ub178\ub4dc\uc785\ub2c8\ub2e4. \uc88c\uce21 ","[\ud53c\ucc98\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1]","\uc5d0\uc11c ","[standardScaler]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. "),Object(a.b)("h3",{id:"set"},"Set"),Object(a.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(a.b)("h4",{id:"property"},"Property"),Object(a.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.  "),Object(a.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/standardScaler001.png",width:"300px",height:"400px"}),Object(a.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"col : \ub300\uc0c1 \uceec\ub7fc\ub4e4 \uc120\ud0dd(\uc22b\uc790\ud615 \uceec\ub7fc\ub9cc \uc9c0\uc6d0)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"withMean : \ud3c9\uade0\uac12\uc774 0\uc73c\ub85c \ub418\ub3c4\ub85d \uc2a4\ucf00\uc77c\ub9c1")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"withStandard : \ud45c\uc900\ud3b8\ucc28\ub85c \uc2a4\ucf00\uc77c\ub9c1"))),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"[ICOS\ubd88\ub7ec\uc624\uae30]",", ","[standardScaler]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131")),Object(a.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/standardScaler002.png"}),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"standardScaler\ub97c \uc801\uc6a9\ud560 \ub300\uc0c1 \uceec\ub7fc(col)\uc744 'price'\ub85c \uc120\ud0dd, 'withMean', 'withStandard' \uccb4\ud06c \ud6c4 \uc2e4\ud589 \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc74c -> price\uceec\ub7fc\uc758 \uac12\uc744 standardScaler\ub85c \uc2a4\ucf00\uc77c\ub9c1\ud55c\ub2e4.  ",Object(a.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/standardScaler003.png"}))))}p.isMDXComponent=!0},365:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},b=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),s=n,f=b["".concat(o,".").concat(s)]||b[s]||d[s]||i;return t?a.a.createElement(f,c({ref:r},p,{components:t})):a.a.createElement(f,c({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);