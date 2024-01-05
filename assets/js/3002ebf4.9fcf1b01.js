"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),b=n,f=p["".concat(u,".").concat(b)]||p[b]||c[b]||o;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),u=a(91980),s=a(67392),d=a(50012);function p(e){return function(e){var t,a;return null!=(t=null==(a=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function b(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function m(e){var t,a,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=c(e),m=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:p})})),h=m[0],v=m[1],y=f({queryString:u,groupId:s}),k=y[0],g=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,d.Nk)(t),r=a[0],o=a[1],[r,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=w[0],T=w[1],P=function(){var e=null!=k?k:x;return b({value:e,tabValues:p})?e:null}();return(0,n.useLayoutEffect)((function(){P&&v(P)}),[P]),{selectedValue:h,selectValue:(0,n.useCallback)((function(e){if(!b({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),g(e),T(e)}),[g,T,p]),tabValues:p}}var h=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,a=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,d=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=d.indexOf(t),r=s[a].value;r!==i&&(p(t),u(r))},b=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,n=d.indexOf(e.currentTarget)+1;a=null!=(r=d[n])?r:d[0];break;case"ArrowLeft":var o,l=d.indexOf(e.currentTarget)-1;a=null!=(o=d[l])?o:d[d.length-1]}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return d.push(e)},onKeyDown:b,onClick:c},l,{className:(0,o.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function k(e){var t=e.lazy,a=e.children,r=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function g(e){var t=m(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function w(e){var t=(0,h.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},64280:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>b});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=a(74866),i=a(85162),u=["components"],s={id:"build-dapp",title:"Building dApps",sidebar_label:"Building dApps",description:"An overview about building dApps on Polkadot",keywords:["data","index","query","explorer","dashboard","dapp","uapp","app","frontend","client"],slug:"../build-dapp"},d=void 0,p={unversionedId:"build/build-dapp",id:"build/build-dapp",title:"Building dApps",description:"An overview about building dApps on Polkadot",source:"@site/../docs/build/build-dapp.md",sourceDirName:"build",slug:"/build-dapp",permalink:"/docs/build-dapp",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-dapp.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1704384612,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"build-dapp",title:"Building dApps",sidebar_label:"Building dApps",description:"An overview about building dApps on Polkadot",keywords:["data","index","query","explorer","dashboard","dapp","uapp","app","frontend","client"],slug:"../build-dapp"},sidebar:"docs",previous:{title:"Client-side Development",permalink:"/docs/build-client-index"},next:{title:"Oracles",permalink:"/docs/build-oracle"}},c={},b=[{value:"SDKS &amp; Libraries",id:"sdks--libraries",level:2},{value:"Frameworks &amp; Toolkits",id:"frameworks--toolkits",level:2}],f={toc:b},m="wrapper";function h(e){var t=e.components,a=(0,n.Z)(e,u);return(0,o.kt)(m,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'As with any blockchain, building decentralized applications (dApps) is a huge part of how a\ndeveloper can build on Polkadot. Within the ecosystem, you also hear the term "Unstoppable App", or\nuApp. While the naming isn\'t too important, what is important is building resilient applications\nusing decentralized technology.'),(0,o.kt)("p",null,"As an application developer, you can compose your front-end apps in a few different ways. Because\nPolkadot and its parachains are all built using Substraste; you can often use the same SDK to\ncommunicate with Polkadot, a parachain, or any other Substrate-based chain."),(0,o.kt)("admonition",{title:"Substrate-based chains use an SS58 encoding for their address formats.",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ss58-registry/"},"SS58 registry")," to see which\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json"},"chain corresponds to a given prefix"),",\nand which prefixes are available.")),(0,o.kt)("h2",{id:"sdks--libraries"},"SDKS & Libraries"),(0,o.kt)("p",null,"If one aims to develop a ",(0,o.kt)("strong",{parentName:"p"},"dApp")," (Decentralized App) or ",(0,o.kt)("strong",{parentName:"p"},"uApp")," (Unstoppable App), the Polkadot\necosystem contains various SDKs to tap into the relay chain and parachains. There are several\nlanguages already supported -\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-tools-index"},"see the tooling page for a detailed overview of different SDKs and libraries that are available.")),(0,o.kt)("h2",{id:"frameworks--toolkits"},"Frameworks & Toolkits"),(0,o.kt)("p",null,"For front-end applications, several options exist for interfacing with Substrate-based chains\n(parachains, relay chains, etc.) and smart contracts. These often will interact with the RPC of a\nSubstrate node:"),(0,o.kt)(l.Z,{groupId:"clients",values:[{label:"Polkadot.js",value:"pjs"},{label:"Polkadot API (under development)",value:"papi"},{label:"Subxt",value:"subxt"},{label:"React Hooks for ink!",value:"useink"},{label:"ink!athon Boilerplate",value:"inkathon"},{label:"Polkadot Cloud",value:"pcloud"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"pjs",mdxType:"TabItem"}," Promise and RxJS APIs around Polkadot and Substrate-based chains via RPC calls. It is dynamically generated based on what the Substrate runtime provides regarding metadata. Full documentation & examples available\xa0",(0,o.kt)("a",{href:"https://polkadot.js.org/docs",target:"_blank"},"here"),". "),(0,o.kt)(i.Z,{value:"papi",mdxType:"TabItem"},' The Polkadot API (formerly known as "CAPI") is currently under development, but will serve as a replacement for Polkadot JS. While still under construction, you may view the current progress on GitHub \xa0',(0,o.kt)("a",{href:"https://github.com/paritytech/polkadot-api/",target:"_blank"},"here"),". "),(0,o.kt)(i.Z,{value:"subxt",mdxType:"TabItem"}," Query and submit extrinsics (transactions) to a Substrate node via RPC using Rust. Also referred to as Rust Parity. Full documentation & examples available\xa0",(0,o.kt)("a",{href:"https://github.com/paritytech/subxt",target:"_blank"},"here"),". "),(0,o.kt)(i.Z,{value:"useink",mdxType:"TabItem"}," React hooks library for ink! smart contracts that abstract the functionality of polkadot.js. Full documentation & examples available\xa0",(0,o.kt)("a",{href:"https://use.ink",target:"_blank"},"here"),". "),(0,o.kt)(i.Z,{value:"inkathon",mdxType:"TabItem"},"ink!athon is a starter kit for full-stack dApp development with ink! smart contracts and a React-based frontend in one place. With convenient helper scripts and a pre-configured project setup, you can quickly scaffold any dApp. Live example & full documentation available\xa0",(0,o.kt)("a",{href:"https://inkathon.xyz",target:"_blank"},"here"),". "),(0,o.kt)(i.Z,{value:"pcloud",mdxType:"TabItem"},"Polkadot Cloud hosts a library of assets, ranging from data sources, graphical elements, to fully functional components, for app developers to plug and play into their codebases. \xa0",(0,o.kt)("a",{href:"https://polkadot.cloud/",target:"_blank"},"Learn more here"),". ")))}h.isMDXComponent=!0}}]);