(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1810:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=b(n),u=a,g=l["".concat(c,".").concat(u)]||l[u]||s[u]||o;return n?r.a.createElement(g,p(p({ref:t},d),{},{components:n})):r.a.createElement(g,p({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var d=2;d<o;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},306:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(1810)),c=["components"],p={title:"Taro.getUpdateManager()",sidebar_label:"getUpdateManager"},i={unversionedId:"apis/base/update/getUpdateManager",id:"version-2.x/apis/base/update/getUpdateManager",isDocsHomePage:!1,title:"Taro.getUpdateManager()",description:"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7684\u7248\u672c\u66f4\u65b0\u7ba1\u7406\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u3002",source:"@site/versioned_docs/version-2.x/apis/base/update/getUpdateManager.md",slug:"/apis/base/update/getUpdateManager",permalink:"/taro/docs/2.x/apis/base/update/getUpdateManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/base/update/getUpdateManager.md",version:"2.x",sidebar_label:"getUpdateManager",sidebar:"version-2.x/API",previous:{title:"Taro.getSystemInfoSync()",permalink:"/taro/docs/2.x/apis/base/system/getSystemInfoSync"},next:{title:"UpdateManager",permalink:"/taro/docs/2.x/apis/base/update/UpdateManager"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:d};function l(e){var t=e.components,n=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u83b7\u53d6",Object(o.b)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u7248\u672c\u66f4\u65b0\u7ba1\u7406\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u3002\n\u5173\u4e8e\u5c0f\u7a0b\u5e8f\u7684\u66f4\u65b0\u673a\u5236\uff0c\u53ef\u4ee5\u67e5\u770b",Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html"},"\u8fd0\u884c\u673a\u5236"),"\u6587\u6863\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html"},"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"() => UpdateManager\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"const updateManager = Taro.getUpdateManager()\n  updateManager.onCheckForUpdate(function (res) {\n  // \u8bf7\u6c42\u5b8c\u65b0\u7248\u672c\u4fe1\u606f\u7684\u56de\u8c03\n  console.log(res.hasUpdate)\n})\nupdateManager.onUpdateReady(function () {\n  Taro.showModal({\n    title: '\u66f4\u65b0\u63d0\u793a',\n    content: '\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f',\n    success: function (res) {\n      if (res.confirm) {\n        // \u65b0\u7684\u7248\u672c\u5df2\u7ecf\u4e0b\u8f7d\u597d\uff0c\u8c03\u7528 applyUpdate \u5e94\u7528\u65b0\u7248\u672c\u5e76\u91cd\u542f\n        updateManager.applyUpdate()\n      }\n    }\n  })\n})\nupdateManager.onUpdateFailed(function () {\n  // \u65b0\u7684\u7248\u672c\u4e0b\u8f7d\u5931\u8d25\n})\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.getUpdateManager"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})))))}l.isMDXComponent=!0}}]);