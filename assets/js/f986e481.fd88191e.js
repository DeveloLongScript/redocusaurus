/*! For license information please see f986e481.fd88191e.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[256,612],{7282:function(e,t,n){"use strict";n(5894).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},7994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var s=n(2685),o=n(7378),r=n(81),u=n(4348);var i=function(e){var t,n,i,c,l=e.layoutProps,a=e.specProps,f=(null==(t=a.spec)||null==(n=t.info)?void 0:n.title)||"API Docs",d=(null==(i=a.spec)||null==(c=i.info)?void 0:c.description)||"Open API Reference Docs for the API";return o.createElement(r.Z,(0,s.Z)({title:f,description:d},l),o.createElement(u.Z,a))}},4348:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(1244),o=n(7378),r=n(8944),u=(n(7282),n(7725)),i=n(2539);function c(e){return o.createElement("div",{className:"redocusaurus-styles"})}var l=["className","optionsOverrides"];var a=function(e){var t=e.className,n=e.optionsOverrides,a=(0,s.Z)(e,l),f=(0,i.U)(a,n),d=f.store,p=f.darkThemeOptions,m=f.lightThemeOptions,h=f.hasLogo;return o.createElement(o.Fragment,null,o.createElement(c,{specProps:a,lightThemeOptions:m,darkThemeOptions:p}),o.createElement("div",{className:(0,r.Z)(["redocusaurus",h&&"redocusaurus-has-logo",t])},o.createElement(u.Redoc,{store:d})))}},4787:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var s=n(353);function o(e){var t,n=(0,s.OD)("docusaurus-plugin-redoc");return e?null==n?void 0:n[e]:null==(t=Object.values(null!=n?n:{}))?void 0:t[0]}t.Z=o},2539:function(e,t,n){"use strict";n.d(t,{U:function(){return d}});var s=n(7378),o=n(1847),r=n(362),u=n(353),i=n(4561),c=n(5409),l=n.n(c),a=(n(7282),n(7725)),f=null;function d(e,t){var n=e.spec,c=e.url,d=e.themeId,p=(0,o.Z)(c,{absolute:!0}),m=(0,r.Z)(),h="dark"===(0,i.I)().colorMode,v=(0,u.eZ)("docusaurus-theme-redoc",d),g=(0,s.useMemo)((function(){var e,s=v.lightTheme,o=v.darkTheme,r=v.options,u={scrollYOffset:m||"string"!=typeof r.scrollYOffset?r.scrollYOffset:0},i=l()(Object.assign({},r,u,{theme:s}),t),c=l()(Object.assign({},r,u,{theme:o}),t);return null!==f&&m&&f.dispose(),f=new a.AppStore(n,p,m&&h?c:i),{darkThemeOptions:c,lightThemeOptions:i,hasLogo:!(null==(e=n.info)||!e["x-logo"]),store:f}}),[m,n,p,h,v,t]);return(0,s.useEffect)((function(){g.store.onDidMount()}),[g,m,h]),g}},4143:function(e,t,n){"use strict";n.r(t);var s=n(7378),o=n(7994),r=n(4787);t.default=function(){var e,t=(0,r.Z)("using-custom-page");return s.createElement(o.default,{layoutProps:{title:"Custom page for : "+(null==(e=t.spec.info)?void 0:e.title),description:"Example showcasing custom page"},specProps:t})}},900:function(){},7878:function(){},7447:function(){},942:function(){},4035:function(){},4962:function(){},8383:function(){}}]);