(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{177:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return u})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return d}));var n=o(3),r=o(7),i=(o(0),o(1810)),a=["components"],c={title:"Taro.onBluetoothDeviceFound(CALLBACK)",sidebar_label:"onBluetoothDeviceFound"},u={unversionedId:"apis/device/bluetooth/onBluetoothDeviceFound",id:"version-1.x/apis/device/bluetooth/onBluetoothDeviceFound",isDocsHomePage:!1,title:"Taro.onBluetoothDeviceFound(CALLBACK)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.onBluetoothDeviceFound \u3002",source:"@site/versioned_docs/version-1.x/apis/device/bluetooth/onBluetoothDeviceFound.md",slug:"/apis/device/bluetooth/onBluetoothDeviceFound",permalink:"/taro/docs/1.x/apis/device/bluetooth/onBluetoothDeviceFound",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/bluetooth/onBluetoothDeviceFound.md",version:"1.x",sidebar_label:"onBluetoothDeviceFound",sidebar:"version-1.x/API",previous:{title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",permalink:"/taro/docs/1.x/apis/device/bluetooth/onBluetoothAdapterStateChange"},next:{title:"Taro.openBluetoothAdapter(OBJECT)",permalink:"/taro/docs/1.x/apis/device/bluetooth/openBluetoothAdapter"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],p={rightToc:l};function d(e){var t=e.components,o=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBluetoothDeviceFound.html"},Object(i.b)("inlineCode",{parentName:"a"},"wx.onBluetoothDeviceFound ")),"\u3002"),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.onBluetoothDeviceFound(devices => {\n  console.log(devices)\n  console.log(devices[0].advertisData)\n})\n")))}d.isMDXComponent=!0},1810:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},v=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(o),v=n,b=d["".concat(a,".").concat(v)]||d[v]||s[v]||i;return o?r.a.createElement(b,c(c({ref:t},l),{},{components:o})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}v.displayName="MDXCreateElement"}}]);