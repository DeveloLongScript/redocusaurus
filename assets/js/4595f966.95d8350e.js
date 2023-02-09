"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[249],{3272:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var o=r(2685),n=r(1244),a=(r(7378),r(5318)),i=["components"],s={title:"Theme Options",sidebar_position:2,author:"Rohit Gohri",author_url:"https://rohit.page"},p=void 0,l={unversionedId:"getting-started/theme-options",id:"getting-started/theme-options",title:"Theme Options",description:"primaryColor (string, hex/rgba value)",source:"@site/docs/getting-started/theme-options.md",sourceDirName:"getting-started",slug:"/getting-started/theme-options",permalink:"/redocusaurus/docs/getting-started/theme-options",draft:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/getting-started/theme-options.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Theme Options",sidebar_position:2,author:"Rohit Gohri",author_url:"https://rohit.page"},sidebar:"defaultSidebar",previous:{title:"Plugin Options",permalink:"/redocusaurus/docs/getting-started/plugin-options"},next:{title:"Schema Imports",permalink:"/redocusaurus/docs/guides/schema-imports"}},u={},c=[{value:"primaryColor (string, hex/rgba value)",id:"primarycolor-string-hexrgba-value",level:3},{value:"primaryColorDark (string, hex/rgba value)",id:"primarycolordark-string-hexrgba-value",level:3},{value:"options (optional, object)",id:"options-optional-object",level:3},{value:"theme (optional, object)",id:"theme-optional-object",level:3}],d={toc:c},h="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)(h,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"primarycolor-string-hexrgba-value"},"primaryColor (string, hex/rgba value)"),(0,a.kt)("p",null,"Convenient way to provide the highlighted color used by Redoc.",(0,a.kt)("br",{parentName:"p"}),"\n","This value will be used as ",(0,a.kt)("inlineCode",{parentName:"p"},"colors.primary.main")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"themes")," option. Must be an actual color value and not a css variable."),(0,a.kt)("h3",{id:"primarycolordark-string-hexrgba-value"},"primaryColorDark (string, hex/rgba value)"),(0,a.kt)("p",null,"Optional way to change the highlighted color used by Redoc in dark mode. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"primaryColor")," if not set.\nThis value will be used as ",(0,a.kt)("inlineCode",{parentName:"p"},"colors.primary.main")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"themes")," option. Must be an actual color value and not a css variable."),(0,a.kt)("h3",{id:"options-optional-object"},"options (optional, object)"),(0,a.kt)("p",null,"Override redoc options passed to ",(0,a.kt)("a",{parentName:"p",href:"https://redoc.ly/docs/redoc/quickstart/react/"},"RedocStandalone")," component. See the defaults ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-theme-redoc/src/redocData.ts#L5-L12"},"here"),"."),(0,a.kt)("p",null,"Available properties ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc#redoc-options-object"},"here"),".",(0,a.kt)("br",{parentName:"p"}),"\n","You cannot set theme property using this property, use ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," option below instead."),(0,a.kt)("h3",{id:"theme-optional-object"},"theme (optional, object)"),(0,a.kt)("p",null,"Override the redoc theme object passed to Redoc. See the default ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc#redoc-theme-object"},"here"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Note: You should not override any color using this property, as it will be the same value for dark and light themes.")))}m.isMDXComponent=!0},5318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),h=n,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);