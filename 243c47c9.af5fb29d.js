(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1810:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var l=n(0),b=n.n(l);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,b=function(e,t){if(null==e)return{};var n,l,b={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},o=b.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,r=e.parentName,O=u(e,["components","mdxType","originalType","parentName"]),d=j(n),o=l,p=d["".concat(r,".").concat(o)]||d[o]||i[o]||c;return n?b.a.createElement(p,a(a({ref:t},O),{},{components:n})):b.a.createElement(p,a({ref:t},O))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,r=new Array(c);r[0]=o;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var O=2;O<c;O++)r[O]=n[O];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},1811:function(e,t,n){"use strict";function l(e){var t,n,b="";if("string"==typeof e||"number"==typeof e)b+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(b&&(b+=" "),b+=n);else for(t in e)e[t]&&(b&&(b+=" "),b+=t);return b}t.a=function(){for(var e,t,n=0,b="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(b&&(b+=" "),b+=t);return b}},1812:function(e,t,n){"use strict";var l=n(0),b=n(1813);t.a=function(){var e=Object(l.useContext)(b.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1813:function(e,t,n){"use strict";var l=n(0),b=Object(l.createContext)(void 0);t.a=b},1814:function(e,t,n){"use strict";var l=n(0),b=n.n(l),c=n(1812),r=n(1811),a=n(53),u=n.n(a),O=37,j=39;t.a=function(e){var t=e.lazy,n=e.block,a=e.children,d=e.defaultValue,i=e.values,o=e.groupId,p=e.className,s=Object(c.a)(),m=s.tabGroupChoices,g=s.setTabGroupChoices,y=Object(l.useState)(d),v=y[0],N=y[1];if(null!=o){var h=m[o];null!=h&&h!==v&&i.some((function(e){return e.value===h}))&&N(h)}var f=function(e){N(e),null!=o&&g(o,e)},P=[];return b.a.createElement("div",null,b.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},p)},i.map((function(e){var t=e.value,n=e.label;return b.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(r.a)("tabs__item",u.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case j:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case O:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return f(t)},onClick:function(){f(t)}},n)}))),t?Object(l.cloneElement)(a.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):b.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(l.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},1815:function(e,t,n){"use strict";var l=n(0),b=n.n(l);t.a=function(e){var t=e.children,n=e.hidden,l=e.className;return b.a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},331:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return j})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return o}));var l=n(3),b=n(7),c=(n(0),n(1810)),r=n(1814),a=n(1815),u=["components"],O={title:"LivePlayer",sidebar_label:"LivePlayer"},j={unversionedId:"components/media/live-player",id:"components/media/live-player",isDocsHomePage:!1,title:"LivePlayer",description:"\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e\u3002\u76f8\u5173api\uff1aTaro.createLivePlayerContext",source:"@site/docs/components/media/live-player.md",slug:"/components/media/live-player",permalink:"/taro/docs/next/components/media/live-player",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/media/live-player.md",version:"current",sidebar_label:"LivePlayer",sidebar:"components",previous:{title:"Image",permalink:"/taro/docs/next/components/media/image"},next:{title:"LivePusher",permalink:"/taro/docs/next/components/media/live-pusher"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"LivePlayerProps",id:"liveplayerprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"mode",id:"mode",children:[]},{value:"orientation",id:"orientation",children:[]},{value:"objectFit",id:"objectfit",children:[]},{value:"soundMode",id:"soundmode",children:[]},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",children:[]},{value:"onFullScreenChangeEventDetail",id:"onfullscreenchangeeventdetail",children:[]},{value:"onNetStatusEventDetail",id:"onnetstatuseventdetail",children:[]},{value:"status",id:"status",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:d};function o(e){var t=e.components,n=Object(b.a)(e,u);return Object(c.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e\u3002\u76f8\u5173api\uff1aTaro.createLivePlayerContext"),Object(c.b)("p",null,"\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u201c\u8bbe\u7f6e\u201d-\u201c\u63a5\u53e3\u8bbe\u7f6e\u201d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<LivePlayerProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(r.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(a.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  render () {\n    return (\n      <LivePlayer src='url' mode='live' autoplay  />\n    )\n  }\n}\n"))),Object(c.b)(a.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'<template>\n  <live-player src="url" mode="live" :autoplay="true"  />\n</template>\n')))),Object(c.b)("h2",{id:"liveplayerprops"},"LivePlayerProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"src"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u97f3\u89c6\u9891\u5730\u5740\u3002\u76ee\u524d\u4ec5\u652f\u6301 flv, rtmp \u683c\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"mode"),Object(c.b)("td",null,Object(c.b)("code",null,'"live" | "RTC"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"live"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6a21\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"autoplay"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u81ea\u52a8\u64ad\u653e")),Object(c.b)("tr",null,Object(c.b)("td",null,"muted"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u9759\u97f3")),Object(c.b)("tr",null,Object(c.b)("td",null,"orientation"),Object(c.b)("td",null,Object(c.b)("code",null,'"vertical" | "horizontal"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"vertical"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u753b\u9762\u65b9\u5411")),Object(c.b)("tr",null,Object(c.b)("td",null,"objectFit"),Object(c.b)("td",null,Object(c.b)("code",null,'"contain" | "fillCrop"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"contain"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u586b\u5145\u6a21\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"backgroundMute"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8fdb\u5165\u540e\u53f0\u65f6\u662f\u5426\u9759\u97f3\uff08\u5df2\u5e9f\u5f03\uff0c\u9ed8\u8ba4\u9000\u53f0\u9759\u97f3\uff09",Object(c.b)("br",null),Object(c.b)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),Object(c.b)("tr",null,Object(c.b)("td",null,"minCache"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"1")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8fdb\u6700\u5c0f\u7f13\u51b2\u533a\uff0c\u5355\u4f4ds")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxCache"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"3")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8fdb\u6700\u5927\u7f13\u51b2\u533a\uff0c\u5355\u4f4ds")),Object(c.b)("tr",null,Object(c.b)("td",null,"soundMode"),Object(c.b)("td",null,Object(c.b)("code",null,'"speaker" | "ear"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"speaker"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u58f0\u97f3\u8f93\u51fa\u65b9\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"autoPauseIfNavigate"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"true")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u8df3\u8f6c\u5230\u672c\u5c0f\u7a0b\u5e8f\u7684\u5176\u4ed6\u9875\u9762\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u6682\u505c\u672c\u9875\u9762\u7684\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e")),Object(c.b)("tr",null,Object(c.b)("td",null,"autoPauseIfOpenNavigate"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"true")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u8df3\u8f6c\u5230\u5176\u5b83\u5fae\u4fe1\u539f\u751f\u9875\u9762\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u6682\u505c\u672c\u9875\u9762\u7684\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e")),Object(c.b)("tr",null,Object(c.b)("td",null,"onStateChange"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u64ad\u653e\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\uff0cdetail = ","{code}")),Object(c.b)("tr",null,Object(c.b)("td",null,"onFullScreenChange"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onFullScreenChangeEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5168\u5c4f\u53d8\u5316\u4e8b\u4ef6\uff0cdetail = ","{direction, fullScreen}")),Object(c.b)("tr",null,Object(c.b)("td",null,"onNetstatus"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onNetStatusEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7f51\u7edc\u72b6\u6001\u901a\u77e5\uff0cdetail = ","{info}")),Object(c.b)("tr",null,Object(c.b)("td",null,"onAudioVolumenotify"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<",">")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u64ad\u653e\u97f3\u91cf\u5927\u5c0f\u901a\u77e5\uff0cdetail = ","{}")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.src"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.mode"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.autoplay"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.muted"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.orientation"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.objectFit"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.backgroundMute"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.minCache"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.maxCache"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.soundMode"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.autoPauseIfNavigate"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.autoPauseIfOpenNavigate"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.onStateChange"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.onFullScreenChange"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.onNetstatus"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayerProps.onAudioVolumenotify"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})))),Object(c.b)("h3",{id:"mode"},"mode"),Object(c.b)("p",null,"mode \u7684\u5408\u6cd5\u503c"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"live"),Object(c.b)("td",null,"\u76f4\u64ad")),Object(c.b)("tr",null,Object(c.b)("td",null,"RTC"),Object(c.b)("td",null,"\u5b9e\u65f6\u901a\u8bdd\uff0c\u8be5\u6a21\u5f0f\u65f6\u5ef6\u66f4\u4f4e")))),Object(c.b)("h3",{id:"orientation"},"orientation"),Object(c.b)("p",null,"orientation \u7684\u5408\u6cd5\u503c"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"vertical"),Object(c.b)("td",null,"\u7ad6\u76f4")),Object(c.b)("tr",null,Object(c.b)("td",null,"horizontal"),Object(c.b)("td",null,"\u6c34\u5e73")))),Object(c.b)("h3",{id:"objectfit"},"objectFit"),Object(c.b)("p",null,"objectFit \u7684\u5408\u6cd5\u503c"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"contain"),Object(c.b)("td",null,"\u56fe\u50cf\u957f\u8fb9\u586b\u6ee1\u5c4f\u5e55\uff0c\u77ed\u8fb9\u533a\u57df\u4f1a\u88ab\u586b\u5145\u2fca\u2f8a")),Object(c.b)("tr",null,Object(c.b)("td",null,"fillCrop"),Object(c.b)("td",null,"\u56fe\u50cf\u94fa\u6ee1\u5c4f\u5e55\uff0c\u8d85\u51fa\u663e\u793a\u533a\u57df\u7684\u90e8\u5206\u5c06\u88ab\u622a\u6389")))),Object(c.b)("h3",{id:"soundmode"},"soundMode"),Object(c.b)("p",null,"soundMode \u7684\u5408\u6cd5\u503c"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"speaker"),Object(c.b)("td",null,"\u626c\u58f0\u5668")),Object(c.b)("tr",null,Object(c.b)("td",null,"ear"),Object(c.b)("td",null,"\u542c\u7b52")))),Object(c.b)("h3",{id:"onstatechangeeventdetail"},"onStateChangeEventDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"code"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u72b6\u6001\u7801")))),Object(c.b)("h3",{id:"onfullscreenchangeeventdetail"},"onFullScreenChangeEventDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"direction"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u65b9\u5411")),Object(c.b)("tr",null,Object(c.b)("td",null,"fullScreen"),Object(c.b)("td",null,Object(c.b)("code",null,"number | boolean")),Object(c.b)("td",null,"\u5168\u5c4f")))),Object(c.b)("h3",{id:"onnetstatuseventdetail"},"onNetStatusEventDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"info"),Object(c.b)("td",null,Object(c.b)("code",null,"netStatus"))))),Object(c.b)("h3",{id:"status"},"status"),Object(c.b)("p",null,"\u72b6\u6001\u7801"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"2001"),Object(c.b)("td",null,"\u5df2\u7ecf\u8fde\u63a5\u670d\u52a1\u5668")),Object(c.b)("tr",null,Object(c.b)("td",null,"2002"),Object(c.b)("td",null,"\u5df2\u7ecf\u8fde\u63a5 RTMP \u670d\u52a1\u5668,\u5f00\u59cb\u62c9\u6d41")),Object(c.b)("tr",null,Object(c.b)("td",null,"2003"),Object(c.b)("td",null,"\u7f51\u7edc\u63a5\u6536\u5230\u9996\u4e2a\u89c6\u9891\u6570\u636e\u5305(IDR)")),Object(c.b)("tr",null,Object(c.b)("td",null,"2004"),Object(c.b)("td",null,"\u89c6\u9891\u64ad\u653e\u5f00\u59cb")),Object(c.b)("tr",null,Object(c.b)("td",null,"2005"),Object(c.b)("td",null,"\u89c6\u9891\u64ad\u653e\u8fdb\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"2006"),Object(c.b)("td",null,"\u89c6\u9891\u64ad\u653e\u7ed3\u675f")),Object(c.b)("tr",null,Object(c.b)("td",null,"2007"),Object(c.b)("td",null,"\u89c6\u9891\u64ad\u653eLoading")),Object(c.b)("tr",null,Object(c.b)("td",null,"2008"),Object(c.b)("td",null,"\u89e3\u7801\u5668\u542f\u52a8")),Object(c.b)("tr",null,Object(c.b)("td",null,"2009"),Object(c.b)("td",null,"\u89c6\u9891\u5206\u8fa8\u7387\u6539\u53d8")),Object(c.b)("tr",null,Object(c.b)("td",null,"-2301"),Object(c.b)("td",null,"\u7f51\u7edc\u65ad\u8fde\uff0c\u4e14\u7ecf\u591a\u6b21\u91cd\u8fde\u62a2\u6551\u65e0\u6548\uff0c\u66f4\u591a\u91cd\u8bd5\u8bf7\u81ea\u884c\u91cd\u542f\u64ad\u653e")),Object(c.b)("tr",null,Object(c.b)("td",null,"-2302"),Object(c.b)("td",null,"\u83b7\u53d6\u52a0\u901f\u62c9\u6d41\u5730\u5740\u5931\u8d25")),Object(c.b)("tr",null,Object(c.b)("td",null,"2101"),Object(c.b)("td",null,"\u5f53\u524d\u89c6\u9891\u5e27\u89e3\u7801\u5931\u8d25")),Object(c.b)("tr",null,Object(c.b)("td",null,"2102"),Object(c.b)("td",null,"\u5f53\u524d\u97f3\u9891\u5e27\u89e3\u7801\u5931\u8d25")),Object(c.b)("tr",null,Object(c.b)("td",null,"2103"),Object(c.b)("td",null,"\u7f51\u7edc\u65ad\u8fde, \u5df2\u542f\u52a8\u81ea\u52a8\u91cd\u8fde")),Object(c.b)("tr",null,Object(c.b)("td",null,"2104"),Object(c.b)("td",null,"\u7f51\u7edc\u6765\u5305\u4e0d\u7a33\uff1a\u53ef\u80fd\u662f\u4e0b\u884c\u5e26\u5bbd\u4e0d\u8db3\uff0c\u6216\u7531\u4e8e\u4e3b\u64ad\u7aef\u51fa\u6d41\u4e0d\u5747\u5300")),Object(c.b)("tr",null,Object(c.b)("td",null,"2105"),Object(c.b)("td",null,"\u5f53\u524d\u89c6\u9891\u64ad\u653e\u51fa\u73b0\u5361\u987f")),Object(c.b)("tr",null,Object(c.b)("td",null,"2106"),Object(c.b)("td",null,"\u786c\u89e3\u542f\u52a8\u5931\u8d25\uff0c\u91c7\u7528\u8f6f\u89e3")),Object(c.b)("tr",null,Object(c.b)("td",null,"2107"),Object(c.b)("td",null,"\u5f53\u524d\u89c6\u9891\u5e27\u4e0d\u8fde\u7eed\uff0c\u53ef\u80fd\u4e22\u5e27")),Object(c.b)("tr",null,Object(c.b)("td",null,"2108"),Object(c.b)("td",null,"\u5f53\u524d\u6d41\u786c\u89e3\u7b2c\u4e00\u4e2aI\u5e27\u5931\u8d25\uff0cSDK\u81ea\u52a8\u5207\u8f6f\u89e3")),Object(c.b)("tr",null,Object(c.b)("td",null,"3001"),Object(c.b)("td",null,"RTMP -DNS\u89e3\u6790\u5931\u8d25")),Object(c.b)("tr",null,Object(c.b)("td",null,"3002"),Object(c.b)("td",null,"RTMP\u670d\u52a1\u5668\u8fde\u63a5\u5931\u8d25")),Object(c.b)("tr",null,Object(c.b)("td",null,"3003"),Object(c.b)("td",null,"RTMP\u670d\u52a1\u5668\u63e1\u624b\u5931\u8d25")),Object(c.b)("tr",null,Object(c.b)("td",null,"3005"),Object(c.b)("td",null,"RTMP \u8bfb/\u5199\u5931\u8d25")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LivePlayer"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})))))}o.isMDXComponent=!0}}]);