(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1810:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var l=n(0),c=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,l,c=function(e,t){if(null==e)return{};var n,l,c={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),i=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,b=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),u=i(n),s=l,p=u["".concat(b,".").concat(s)]||u[s]||O[s]||r;return n?c.a.createElement(p,a(a({ref:t},o),{},{components:n})):c.a.createElement(p,a({ref:t},o))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,b=new Array(r);b[0]=s;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:l,b[1]=a;for(var o=2;o<r;o++)b[o]=n[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},693:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var l=n(3),c=n(7),r=(n(0),n(1810)),b=["components"],a={title:"Taro.addCard(option)",sidebar_label:"addCard"},d={unversionedId:"apis/open-api/card/addCard",id:"version-2.x/apis/open-api/card/addCard",isDocsHomePage:!1,title:"Taro.addCard(option)",description:"\u6279\u91cf\u6dfb\u52a0\u5361\u5238\u3002\u53ea\u6709\u901a\u8fc7 \u8ba4\u8bc1 \u7684\u5c0f\u7a0b\u5e8f\u6216\u6587\u5316\u4e92\u52a8\u7c7b\u76ee\u7684\u5c0f\u6e38\u620f\u624d\u80fd\u4f7f\u7528\u3002\u66f4\u591a\u6587\u6863\u8bf7\u53c2\u8003 \u5fae\u4fe1\u5361\u5238\u63a5\u53e3\u6587\u6863\u3002",source:"@site/versioned_docs/version-2.x/apis/open-api/card/addCard.md",slug:"/apis/open-api/card/addCard",permalink:"/taro/docs/2.x/apis/open-api/card/addCard",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/open-api/card/addCard.md",version:"2.x",sidebar_label:"addCard",sidebar:"version-2.x/API",previous:{title:"Taro.openCard(option)",permalink:"/taro/docs/2.x/apis/open-api/card/openCard"},next:{title:"Taro.chooseInvoiceTitle(option)",permalink:"/taro/docs/2.x/apis/open-api/invoice/chooseInvoiceTitle"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"RequestInfo",id:"requestinfo",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"AddCardResponseInfo",id:"addcardresponseinfo",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(c.a)(e,b);return Object(r.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u6279\u91cf\u6dfb\u52a0\u5361\u5238\u3002\u53ea\u6709\u901a\u8fc7 ",Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/product/renzheng.html"},"\u8ba4\u8bc1")," \u7684\u5c0f\u7a0b\u5e8f\u6216\u6587\u5316\u4e92\u52a8\u7c7b\u76ee\u7684\u5c0f\u6e38\u620f\u624d\u80fd\u4f7f\u7528\u3002\u66f4\u591a\u6587\u6863\u8bf7\u53c2\u8003 ",Object(r.b)("a",{parentName:"p",href:"https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2"},"\u5fae\u4fe1\u5361\u5238\u63a5\u53e3\u6587\u6863"),"\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"cardExt \u8bf4\u660e"),"\ncardExt \u662f\u5361\u5238\u7684\u6269\u5c55\u53c2\u6570\uff0c\u5176\u503c\u662f\u4e00\u4e2a JSON \u5b57\u7b26\u4e32\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html"},"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"cardList"),Object(r.b)("td",null,Object(r.b)("code",null,"RequestInfo[]")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u9700\u8981\u6dfb\u52a0\u7684\u5361\u5238\u5217\u8868")),Object(r.b)("tr",null,Object(r.b)("td",null,"complete"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"fail"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"success"),Object(r.b)("td",null,Object(r.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h3",{id:"requestinfo"},"RequestInfo"),Object(r.b)("p",null,"\u9700\u8981\u6dfb\u52a0\u7684\u5361\u5238\u5217\u8868"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"cardExt"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u5361\u5238\u7684\u6269\u5c55\u53c2\u6570\u3002\u9700\u5c06 CardExt \u5bf9\u8c61 JSON \u5e8f\u5217\u5316\u4e3a",Object(r.b)("strong",null,"\u5b57\u7b26\u4e32"),"\u4f20\u5165")),Object(r.b)("tr",null,Object(r.b)("td",null,"cardId"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u5361\u5238 ID")))),Object(r.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"cardList"),Object(r.b)("td",null,Object(r.b)("code",null,"AddCardResponseInfo[]")),Object(r.b)("td",null,"\u5361\u5238\u6dfb\u52a0\u7ed3\u679c\u5217\u8868")),Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(r.b)("h3",{id:"addcardresponseinfo"},"AddCardResponseInfo"),Object(r.b)("p",null,"\u5361\u5238\u6dfb\u52a0\u7ed3\u679c\u5217\u8868"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"cardExt"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u5361\u5238\u7684\u6269\u5c55\u53c2\u6570\uff0c\u7ed3\u6784\u8bf7\u53c2\u8003\u4e0b\u6587")),Object(r.b)("tr",null,Object(r.b)("td",null,"cardId"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u7528\u6237\u9886\u53d6\u5230\u5361\u5238\u7684 ID")),Object(r.b)("tr",null,Object(r.b)("td",null,"code"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u52a0\u5bc6 code\uff0c\u4e3a\u7528\u6237\u9886\u53d6\u5230\u5361\u5238\u7684code\u52a0\u5bc6\u540e\u7684\u5b57\u7b26\u4e32\uff0c\u89e3\u5bc6\u8bf7\u53c2\u7167\uff1a",Object(r.b)("a",{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V"},"code \u89e3\u7801\u63a5\u53e3"))),Object(r.b)("tr",null,Object(r.b)("td",null,"isSuccess"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",null,"\u662f\u5426\u6210\u529f")))),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'Taro.addCard({\n  cardList: [\n    {\n      cardId: \'\',\n      cardExt: \'{"code": "", "openid": "", "timestamp": "", "signature":""}\'\n    }, {\n      cardId: \'\',\n      cardExt: \'{"code": "", "openid": "", "timestamp": "", "signature":""}\'\n    }\n  ],\n  success: function (res) {\n    console.log(res.cardList) // \u5361\u5238\u6dfb\u52a0\u7ed3\u679c\n  }\n})\n')),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"Taro.addCard"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);