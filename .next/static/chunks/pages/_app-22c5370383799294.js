(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a(3975)}])},3975:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var o=a(5893);a(7717),a(7599);var r=a(7294),n=a(9008),p=a.n(n);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var l=["keyOverride"],h={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,a){void 0===t&&(t=[]);var o=void 0===a?{}:a,n=o.defaultWidth,p=o.defaultHeight;return t.reduce(function(t,a,o){return t.push(r.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:a.url})),a.alt&&t.push(r.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:a.alt})),a.secureUrl&&t.push(r.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:a.secureUrl.toString()})),a.type&&t.push(r.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:a.type.toString()})),a.width?t.push(r.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:a.width.toString()})):n&&t.push(r.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:n.toString()})),a.height?t.push(r.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:a.height.toString()})):p&&t.push(r.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:p.toString()})),t},[])},d=function(e){var t,a,o,n,p,d=[];e.titleTemplate&&(h.templateTitle=e.titleTemplate);var s="";e.title?(s=e.title,h.templateTitle&&(s=h.templateTitle.replace(/%s/g,function(){return s}))):e.defaultTitle&&(s=e.defaultTitle),s&&d.push(r.createElement("title",{key:"title"},s));var u=e.noindex||h.noindex||e.dangerouslySetAllPagesToNoIndex,m=e.nofollow||h.nofollow||e.dangerouslySetAllPagesToNoFollow,g="";if(e.robotsProps){var f=e.robotsProps,y=f.nosnippet,G=f.maxSnippet,k=f.maxImagePreview,v=f.maxVideoPreview,E=f.noarchive,b=f.noimageindex,w=f.notranslate,O=f.unavailableAfter;g=(y?",nosnippet":"")+(G?",max-snippet:"+G:"")+(k?",max-image-preview:"+k:"")+(E?",noarchive":"")+(O?",unavailable_after:"+O:"")+(b?",noimageindex":"")+(v?",max-video-preview:"+v:"")+(w?",notranslate":"")}if(u||m?(e.dangerouslySetAllPagesToNoIndex&&(h.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(h.nofollow=!0),d.push(r.createElement("meta",{key:"robots",name:"robots",content:(u?"noindex":"index")+","+(m?"nofollow":"follow")+g}))):d.push(r.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+g})),e.description&&d.push(r.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&d.push(r.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&d.push(r.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){d.push(r.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&d.push(r.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&d.push(r.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&d.push(r.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&d.push(r.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||s)&&d.push(r.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||s})),(null!=(a=e.openGraph)&&a.description||e.description)&&d.push(r.createElement("meta",{key:"og:description",property:"og:description",content:(null==(p=e.openGraph)?void 0:p.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&d.push(r.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var T=e.openGraph.type.toLowerCase();d.push(r.createElement("meta",{key:"og:type",property:"og:type",content:T})),"profile"===T&&e.openGraph.profile?(e.openGraph.profile.firstName&&d.push(r.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&d.push(r.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&d.push(r.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&d.push(r.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===T&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){d.push(r.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&d.push(r.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&d.push(r.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){d.push(r.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===T&&e.openGraph.article?(e.openGraph.article.publishedTime&&d.push(r.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&d.push(r.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&d.push(r.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){d.push(r.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&d.push(r.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){d.push(r.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===T||"video.episode"===T||"video.tv_show"===T||"video.other"===T)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&d.push(r.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&d.push(r.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){d.push(r.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){d.push(r.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&d.push(r.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&d.push(r.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){d.push(r.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&d.push(r.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(h.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(h.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&d.push.apply(d,c("image",e.openGraph.images,{defaultWidth:h.defaultOpenGraphImageWidth,defaultHeight:h.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(h.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(h.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&d.push.apply(d,c("video",e.openGraph.videos,{defaultWidth:h.defaultOpenGraphVideoWidth,defaultHeight:h.defaultOpenGraphVideoHeight})),e.openGraph.audio&&d.push.apply(d,c("audio",e.openGraph.audio)),e.openGraph.locale&&d.push(r.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&d.push(r.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&d.push(r.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,a,o=e.keyOverride,n=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);d.push(r.createElement("meta",i({key:"meta:"+(null!=(t=null!=(a=null!=o?o:n.name)?a:n.property)?t:n.httpEquiv)},n)))}),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach(function(e){var t;d.push(r.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),d},s=function(e){return r.createElement(p(),null,d(e))},u=function(e){var t=e.title,a=e.titleTemplate,o=e.defaultTitle,n=e.themeColor,p=e.dangerouslySetAllPagesToNoIndex,i=e.dangerouslySetAllPagesToNoFollow,l=e.description,h=e.canonical,c=e.facebook,d=e.openGraph,u=e.additionalMetaTags,m=e.twitter,g=e.defaultOpenGraphImageWidth,f=e.defaultOpenGraphImageHeight,y=e.defaultOpenGraphVideoWidth,G=e.defaultOpenGraphVideoHeight,k=e.mobileAlternate,v=e.languageAlternates,E=e.additionalLinkTags,b=e.robotsProps;return r.createElement(s,{title:t,titleTemplate:a,defaultTitle:o,themeColor:n,dangerouslySetAllPagesToNoIndex:void 0!==p&&p,dangerouslySetAllPagesToNoFollow:void 0!==i&&i,description:l,canonical:h,facebook:c,openGraph:d,additionalMetaTags:u,twitter:m,defaultOpenGraphImageWidth:g,defaultOpenGraphImageHeight:f,defaultOpenGraphVideoWidth:y,defaultOpenGraphVideoHeight:G,mobileAlternate:k,languageAlternates:v,additionalLinkTags:E,robotsProps:b})};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g");var m={meta:{url:"www.jugwon.kr",title:"(가칭)국민주권당 준비위원회",description:"(가칭)국민주권당의 당원이 되어주세요."}};let g={titleTemplate:"국민주권당 - %s",defaultTitle:m.meta.title,description:m.meta.description,canonical:m.meta.url,openGraph:{type:"website",locale:"ko_KR",url:m.meta.url,site_name:m.meta.title,images:[{url:"".concat(m.meta.url,"/imgs/landing1stImage.png"),width:850,height:650,alt:"jugwon.kr"}]}};function f(e){let{Component:t,pageProps:a}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{...g}),(0,o.jsx)(t,{...a})]})}},7717:function(){},7599:function(){},9008:function(e,t,a){e.exports=a(3121)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);