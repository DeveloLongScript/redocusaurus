"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[178],{7581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(2685),r=n(1244),a=(n(7378),n(5318)),i=["components"],l={title:"Migrating to V1",sidebar_position:4},p=void 0,s={unversionedId:"guides/migrating-to-v1",id:"guides/migrating-to-v1",title:"Migrating to V1",description:"Options Changed",source:"@site/docs/guides/migrating-to-v1.md",sourceDirName:"guides",slug:"/guides/migrating-to-v1",permalink:"/redocusaurus/docs/guides/migrating-to-v1",draft:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/guides/migrating-to-v1.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Migrating to V1",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Build Time Rendering",permalink:"/redocusaurus/docs/guides/build-time-rendering"},next:{title:"Who is using Redocusaurus?",permalink:"/redocusaurus/docs/who-is-using-redocusaurus"}},d={},u=[{value:"Options Changed",id:"options-changed",level:2},{value:"Options Removed",id:"options-removed",level:2},{value:"Component Changes",id:"component-changes",level:2},{value:"Experimental <code>@theme/ServerStyle</code> Removed",id:"experimental-themeserverstyle-removed",level:3},{value:"<code>@theme/Redoc</code> and <code>@theme/ApiDoc</code> prop changes",id:"themeredoc-and-themeapidoc-prop-changes",level:3}],c={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"options-changed"},"Options Changed"),(0,a.kt)("p",null,"1.",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," - Can now be a path to a local file or an absolute url. You can now also point to an entrypoint for your multi-file OpenAPI definition and we will bundle it for you."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"routePath")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," (optional) - This still works the same, but is just optional now.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"redocOptions")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," (optional) - We have removed some defaults (",(0,a.kt)("inlineCode",{parentName:"p"},"downloadUrl")," used to be hidden by default) and leave the customization to the user now."))),(0,a.kt)("h2",{id:"options-removed"},"Options Removed"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"specUrl")," - This is now automatically handled by the package depending on the type of spec passed. We will bundle your definitions into a single downloadable YAML and add it as a static asset at build time.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"addRoute")," - This is no longer needed since ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," is now optional, so if you don't need a route just don't pass it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"apiDocComponent")," - This is no longer needed now since we provide a react-hook ",(0,a.kt)("inlineCode",{parentName:"p"},"useSpecData")," to load plugin data that can be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/Redoc")," component."))),(0,a.kt)("h2",{id:"component-changes"},"Component Changes"),(0,a.kt)("h3",{id:"experimental-themeserverstyle-removed"},"Experimental ",(0,a.kt)("inlineCode",{parentName:"h3"},"@theme/ServerStyle")," Removed"),(0,a.kt)("p",null,"Now build time/server side rendering works for everyone be default without needing to do anything."),(0,a.kt)("h3",{id:"themeredoc-and-themeapidoc-prop-changes"},(0,a.kt)("inlineCode",{parentName:"h3"},"@theme/Redoc")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"@theme/ApiDoc")," prop changes"),(0,a.kt)("p",null,"Instead of parsing api files yourself to pass to Redoc, we now have a new hook ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/useSpecData")," to load yaml files and the result can be directly passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/Redoc"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Layout from '@theme/Layout';\nimport Redoc from '@theme/Redoc';\nimport useSpecData from '@theme/useSpecData';\n\nfunction CustomPage() {\n  const specData = useSpecData('using-custom-layout');\n  return (\n    <Layout\n      title=\"Custom Layout Docs\"\n      description=\"Example showing custom layout\"\n    >\n      <Redoc {...specData} />\n    </Layout>\n  );\n}\n\nexport default CustomPage;\n")))}g.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var o=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);