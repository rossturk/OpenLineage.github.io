(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+zwd":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c}));var n=a("q1tI"),r=a.n(n),l=a("WXus"),o=function(e){var t=e.title,a=e.to,n=e.type,o=e.label,c=e.disabled,i=r.a.createElement(r.a.Fragment,null,e.iconLeft&&r.a.createElement("span",{className:"icon icon-left"},e.iconLeft),r.a.createElement("span",null,e.title),e.iconRight&&r.a.createElement("span",{className:"icon icon-right"},e.iconRight));if(n){var s=n.split(","),m=s[1]?s[1]:"button",u=void 0!==c&&c;if("button"===s[0])return r.a.createElement("button",{type:m,disabled:u,className:"btn btn-primary"+(u?" disabled":"")+(e.className?" "+e.className:"")},i);if("extbutton"===s[0])return r.a.createElement(l.a,{to:a},r.a.createElement("button",{type:m,disabled:u,className:"btn btn-primary"+(u?" disabled":"")+(e.className?" "+e.className:"")},i))}return r.a.createElement(l.a,{to:a,className:"btn btn-primary"+(e.className?" "+e.className:""),title:o||t},i)},c=function(e){var t=e.label,a=e.type,l=void 0===a?"text":a,o=e.name,c=e.onChange,i=e.footer,s=Object(n.useState)(!1),m=s[0],u=s[1],d=r.a.createElement("input",{type:l,name:o,className:"block w-full outline-none px-4 py-2 focus:outline-none bg-bg text-color-default",onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},onChange:c,"aria-label":o});return"textarea"===l&&(d=r.a.createElement("textarea",{className:"block w-full outline-none resize-none px-4 py-2 focus:outline-none bg-bg text-color-default",name:o,onChange:function(e){e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+"px",c(e)},onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},"aria-label":o})),r.a.createElement("div",{className:(m?"input focused shadow-2xl":"")+" transition-all duration-300 py-3 lg:p-4 pb-6"},r.a.createElement("p",{className:"text-color-3"},t),r.a.createElement("div",{className:"bg-gradient-primary p-2px"},d),i&&r.a.createElement(r.a.Fragment,null,i))}},M06k:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,i=void 0===c?24:c,s=o(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));c.displayName="Calendar",t.a=c},M97e:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("+zwd"),o=a("9eSz"),c=a.n(o),i=a("lHIJ");t.a=function(e){var t=e.data,a=e.even;return r.a.createElement("div",{className:"large-container mx-auto"},r.a.createElement("div",{className:"my-4 py-8 lg:py-24 integration-item md:flex\n                    "+(a?"even flex-row-reverse":"")},r.a.createElement("div",{className:"relative flex-1"},r.a.createElement("div",{className:"relative"},r.a.createElement(c.a,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title}))),r.a.createElement("div",{className:"flex-1 flex md:px-4 lg:px-6 items-center"},r.a.createElement("div",{className:"flex flex-1 flex-wrap  "+(a?"md:justify-end md:text-right":"")},r.a.createElement("h3",{className:"text-color-1 text-5xl"},t.frontmatter.title),r.a.createElement("p",{className:"lg:mt-4"},t.frontmatter.description),r.a.createElement(l.a,{to:t.fields.slug,label:"Read more about "+t.frontmatter.title,title:"Read More",iconRight:r.a.createElement(i.a,null)})))))}},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("lHIJ");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,l=e.size,i=void 0===l?24:l,s=c(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));i.displayName="GitHub";var s=i;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,l=e.size,o=void 0===l?24:l,c=u(e,["color","size"]);return r.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("path",{d:"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"}),r.a.createElement("path",{d:"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),r.a.createElement("path",{d:"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"}),r.a.createElement("path",{d:"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"}),r.a.createElement("path",{d:"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"}),r.a.createElement("path",{d:"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"}),r.a.createElement("path",{d:"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"}),r.a.createElement("path",{d:"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"}))}));d.displayName="Slack";var p=d,f=a("9Dj+"),g=a("+zwd"),v=a("M97e"),x=a("vYwq"),b=(t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata,l=(t.integration.edges.map((function(e,t){return r.a.createElement(v.a,{data:e.node,key:"p-item-index-"+e.node.id,even:(t+1)%2==0})})),t.blog.edges.map((function(e){return r.a.createElement(x.a,{data:e.node,key:"b-item-index-"+e.node.id})})));return r.a.createElement(f.a,{front:!0,seo:{title:"Home",description:n.description},navPlaceholder:!1,location:a},r.a.createElement(b,{data:n}),""!==n.about&&r.a.createElement(h,{data:n.about}),r.a.createElement(E,null,l))},function(e){var t=e.data,a=Object(n.useRef)(null),o=t.twoColumnWall,c=Object(n.useState)({loaded:!1,supportsBlend:!1}),i=c[0],m=c[1];Object(n.useEffect)((function(){window.CSS&&!i.loaded&&CSS.supports("mix-blend-mode","screen")&&(a.current.classList.add("supports-blend"),m({loaded:!0,supportsBlend:!0}))}),[i.loaded]);var u={};!o&&t.titleImage&&(u.style={backgroundImage:"url('"+t.titleImage+"')",height:"35em",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"});var d=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},r.a.createElement("h1",{className:"text-6xl relative mt-20 lg:text-7xl "+(t.capitalizeTitleOnHome?"uppercase":"")},r.a.createElement("span",null),t.title)),r.a.createElement("p",{className:"text-lg lg:text-xl text-color-3 uppercase pt-4 lg:pt-0"},t.introTag),r.a.createElement("p",{className:"text-base text-color-4 boxed lg:text-lg mt-4"},t.description),r.a.createElement("span",{className:"py-5"},r.a.createElement(g.a,{title:"Get Started",to:"/getting-started",type:"link",iconRight:r.a.createElement(l.a,null),className:"mx-5"}),r.a.createElement(g.a,{title:"GitHub",to:"https://github.com/OpenLineage",type:"extbutton",iconRight:r.a.createElement(s,null),className:"mx-5"}),r.a.createElement(g.a,{title:"Slack",to:"http://bit.ly/OpenLineageSlack",type:"extbutton",iconRight:r.a.createElement(p,null),className:"mx-5"})));return o?r.a.createElement("div",{className:"wall h-screen flex relative justify-center items-center overflow-hidden",ref:a},r.a.createElement("div",{className:"flex-1 lg:block absolute lg:relative w-full h-full top-0 left-0"},r.a.createElement("div",{className:"absolute left-0 top-0 w-full h-full lg:hidden",style:{background:"rgba(0,0,0,.75)"}}),r.a.createElement("img",{src:t.titleImage,alt:"",className:"h-full w-auto max-w-none lg:h-auto lg:w-full"})),r.a.createElement("div",{className:"flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8 text-white lg:text-color-default"},d)):r.a.createElement("div",Object.assign({className:"wall flex flex-col justify-center items-center text-center mb-12"},u,{ref:a}),d)}),h=function(e){var t=e.data,a={style:{margin:"0 auto"}};return r.a.createElement("div",{className:"boxed"},r.a.createElement("div",{className:"px-4 py-12 text-center lg:py-14 lg:px-0"},r.a.createElement("h2",{className:"text-color-1 text-3xl lg:text-4xl"},"About the Project"),r.a.createElement("p",{className:"mt-5 text-lg"},t),r.a.createElement("img",Object.assign({src:"/images/ol-stack.svg",alt:""},a,{className:"h-full w-4/5 max-w-none lg:h-auto lg:w-4/5 py-3 pt-6 mb-6"})),r.a.createElement("p",{className:"mt-5 text-lg py-3"},"At the core of OpenLineage is a standard API for capturing lineage events. Pipeline components - like schedulers, warehouses, analysis tools, and SQL engines - can use this API to send data about runs, jobs, and datasets to a compatible OpenLineage backend for further study."),r.a.createElement(g.a,{title:"Read the API Docs",to:"/docs/javadoc",type:"link",iconRight:r.a.createElement(l.a,null)})))},E=function(e){var t=e.children;return r.a.createElement("div",{className:"container mx-auto px-0 pb-40"},r.a.createElement("div",{className:"px-4 py-12 text-center lg:py-14 lg:px-0"},r.a.createElement("h2",{className:"text-color-1 text-5xl lg:text-6xl"},"Blog")),r.a.createElement("div",{className:"flex flex-wrap"},t))}},lHIJ:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,i=void 0===c?24:c,s=o(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));c.displayName="ArrowRight",t.a=c},vYwq:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("9eSz"),c=a.n(o),i=a("M06k");t.a=function(e){var t=e.data,a=Object(n.useState)(!1),o=a[0],s=a[1];return r.a.createElement("div",{className:"blog-item w-full md:w-1/2 lg:w-1/3 p-4"},r.a.createElement("div",{className:"transition-all duration-300 hover:shadow-2xl shadow "+(o&&"focused")},r.a.createElement(l.a,{to:t.fields.slug,title:t.frontmatter.title,onFocus:function(){return s(!0)},onBlur:function(){return s(!1)}},r.a.createElement("div",{className:"image"},r.a.createElement(c.a,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title,className:"w-full"})),r.a.createElement("div",{className:"p-4 py-3"},r.a.createElement("h4",{className:"text-color-2 text-3xl pt-1"},t.frontmatter.title),r.a.createElement("div",{className:"flex items-center text-secondary"},r.a.createElement(i.a,{className:"stroke-current"}),r.a.createElement("p",{className:"pl-2 text-color-default font-sans"},t.frontmatter.date)),r.a.createElement("p",{className:"pt-3 text-color-default"},t.frontmatter.description)))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-596e1f03a3a6629a9cc0.js.map