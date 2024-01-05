(self.webpackChunk=self.webpackChunk||[]).push([[1506],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(74165),s=a(15861),o=a(67294),r=a(87152),i=a(30967),l=a(67425);function c(e,t,a){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)((0,n.Z)().mark((function e(t,a,s){var o,l,c,p,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return c=new r.U(o),e.next=21,i.G.create({provider:c});case 21:p=e.sent,(u=a.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,a);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,r=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,p=(0,o.useState)(""),d=p[0],h=p[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?u(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,a,h);case 2:if(void 0!==(s=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(s,l,t,h):h(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(i){console.log(i)}}}),[]),d}},67425:e=>{var t="polkadot",a="kusama",n="statemine",s="statemint",o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,r,i){var l=void 0;if(r===t||r===s)l=3;else{if(r!==a&&r!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),i((e=Number.isInteger(e/o[r].precision)?e/o[r].precision+" "+o[r].symbol:(e/o[r].precision).toFixed(l)+" "+o[r].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/o[t].precision+" "+o[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,o,r){var i=void 0;if(r===t||r===s)i=1;else{if(r!==a&&r!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=4}o((e/=i).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},38948:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),r=(a(47940),["components"]),i={id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Teleport Assets between Parachains and Relay Chain.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},l=void 0,c={unversionedId:"learn/learn-teleport",id:"learn/learn-teleport",title:"Teleporting Assets",description:"Teleport Assets between Parachains and Relay Chain.",source:"@site/../docs/learn/learn-teleport.md",sourceDirName:"learn",slug:"/learn-teleport",permalink:"/docs/learn-teleport",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-teleport.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1704370283,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Teleport Assets between Parachains and Relay Chain.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},sidebar:"docs",previous:{title:"Token Inflation",permalink:"/docs/learn-inflation"},next:{title:"Introduction to NFTs",permalink:"/docs/learn-nft"}},p={},u=[{value:"How Teleports work",id:"how-teleports-work",level:2},{value:"Initiate Teleport",id:"initiate-teleport",level:3},{value:"Receive Teleported Assets",id:"receive-teleported-assets",level:3},{value:"Deposit Asset",id:"deposit-asset",level:3}],d={toc:u},h="wrapper";function k(e){var t=e.components,i=(0,s.Z)(e,r);return(0,o.kt)(h,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the main properties that Polkadot\nbrings to the blockchain industry is secure interoperability. This interoperability allows for\n",(0,o.kt)("strong",{parentName:"p"},"asset teleportation"),", i.e., the process of moving assets (such as fungible and non-fungible\ntokens) between chains (parachains) to use them as any other asset native to that chain.\nInteroperability is possible through ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE modules"),", which\ntogether ensure that assets are not lost or duplicated across multiple chains."),(0,o.kt)("admonition",{title:"Walk-through video tutorial about teleporting assets",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/3tE9ouub5Tg"},"this technical explainer video")," to learn how to teleport assets\nfrom Kusama to the Asset Hub. The same procedure applies to teleporting between Polkadot and the\nPolkadot Asset Hub, or any other parachain.")),(0,o.kt)("h2",{id:"how-teleports-work"},"How Teleports work"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"teleport",src:a(16176).Z,width:"1397",height:"611"})),(0,o.kt)("p",null,"As you can see from the diagram above, there are only two actors within this model: the source and\nthe destination. How we transfer assets between the source and the destination is briefly summarized\nin the numbered labels on the diagram and explained in more detail below."),(0,o.kt)("h3",{id:"initiate-teleport"},"Initiate Teleport"),(0,o.kt)("p",null,"The source gathers the assets to be teleported from the sending account and ",(0,o.kt)("strong",{parentName:"p"},"takes them out")," from\nthe circulating supply, taking note of the total amount of assets that was taken out."),(0,o.kt)("h3",{id:"receive-teleported-assets"},"Receive Teleported Assets"),(0,o.kt)("p",null,"The source chain then creates an ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," instruction called ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiveTeleportedAssets"),"\ncontaining the receiving account and the amount of assets taken out from circulation as parameters."),(0,o.kt)("p",null,"It then sends this instruction over to the destination chain, where it gets processed, and new\nassets are ",(0,o.kt)("strong",{parentName:"p"},"put back into")," the circulating supply."),(0,o.kt)("h3",{id:"deposit-asset"},"Deposit Asset"),(0,o.kt)("p",null,"The destination deposits the assets to the receiving account. The actions of ",(0,o.kt)("strong",{parentName:"p"},"taking out")," from the\ncirculating supply and ",(0,o.kt)("strong",{parentName:"p"},"putting back")," into the circulating supply show the great flexibility that\nan ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," executor has in regulating the flow of an asset without changing its\ncirculating supply. Assets are transferred to an inaccessible account to remove them from\ncirculation. Likewise, for putting assets back into circulation, assets are released from a\npre-filled and inaccessible treasury, or perform a mint of the assets. This process requires mutual\ntrust between the source and destination. The destination must trust the source of having\nappropriately removed the sent assets from the circulating supply, and the source must trust the\ndestination of having put the received assets back into circulation. The result of an asset\nteleportation should result in the same circulating supply of the asset, and failing to uphold this\ncondition will result in a change in the asset's total issuance (in the case of fungible tokens) or\na complete loss/duplication of an NFT."))}k.isMDXComponent=!0},16176:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/teleport-asset-4f624ff92c1b79da7067a267f10abc95.png"},46601:()=>{}}]);