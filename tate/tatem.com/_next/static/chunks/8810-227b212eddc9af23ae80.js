!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="04f19ae1-f58f-4ac9-adf7-396c0050a62d",e._sentryDebugIdIdentifier="sentry-dbid-04f19ae1-f58f-4ac9-adf7-396c0050a62d")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8810],{39359:function(e,t,r){"use strict";r.d(t,{r:function(){return s},z:function(){return u}});var a=r(44003),d=r(61808),l=r.n(d),o=r(87502),n=r(62516),i=r(87355);let s=e=>{let{label:t,variant:r="primary",onClick:d,onMouseDown:n,onMouseMove:s,href:u,innerRef:c,as:p,replace:f,scroll:b,shallow:x,prefetch:y,passHref:m,locale:g,className:h,target:k,submit:v,fill:w,size:j="lg",disabled:N=!1,icon:C,id:_,iconClassName:S,tabIndex:D}=e,E=r.includes("-web"),I=(0,a.jsx)(d?"button":"div",{id:_,tabIndex:void 0!==D?D:0,disabled:N,ref:u?null:c,type:v?"submit":"button",onClick:d?e=>{var t,r;d(e),null==e||null===(r=e.target)||void 0===r||null===(t=r.closest("button"))||void 0===t||t.blur()}:void 0,onMouseDown:n,onMouseMove:s,className:l()("outline-none",{"w-full":w},{"group/button":!E},{peer:null==h?void 0:h.includes("peer")}),children:(0,a.jsxs)("div",{className:l()(h,"flex select-none items-center justify-center gap-1.5 transition-[background-color,scale]",{"rounded-full px-4 py-2 duration-100 ease-in hover:px-6":E},{"rounded text-body duration-175 active:scale-95 group-focus-visible/button:shadow-[0px_0px_0px_4px_rgba(12,75,233,0.30),0px_0px_0px_1px_#0C4BE9] group-focus-visible/button:outline-none group-focus-visible/button:ring-0 group-disabled/button:cursor-default group-disabled/button:text-muted dark:group-focus-visible/button:shadow-[0px_0px_0px_4px_rgba(81,127,246,0.40),0px_0px_0px_1px_#517FF6] dark:group-disabled/button:text-muted-dark":!E},{"bg-gray-950 text-gray-10 hover:bg-gray-800":"primary-web"===r},{"bg-gray-100 text-gray-900 hover:bg-gray-300":"secondary-web"===r},{"bg-button-primary text-primary-dark shadow-control hover:bg-button-primary-hover group-disabled/button:bg-button-disabled dark:bg-button-dark-primary dark:text-primary dark:shadow-control-dark dark:hover:bg-button-dark-primary-hover dark:group-disabled/button:bg-button-dark-disabled":"primary"===r},{"bg-button-secondary text-primary shadow-control hover:bg-button-secondary-hover group-disabled/button:bg-button-disabled dark:bg-button-dark-secondary dark:text-primary-dark dark:shadow-control-dark dark:hover:bg-button-dark-secondary-hover dark:group-disabled/button:bg-button-dark-disabled":"secondary"===r},{"disabled:!bg-transparent":"secondary"===r&&!t},{"text-secondary hover:bg-button-secondary-hover hover:text-primary group-disabled/button:hover:bg-transparent dark:text-secondary-dark dark:hover:bg-button-dark-secondary-hover dark:hover:text-primary-dark dark:group-disabled/button:hover:bg-transparent":"tertiary"===r},{"bg-button-destructive text-white hover:bg-button-destructive-hover group-focus-visible/button:shadow-[0px_0px_0px_4px_rgba(230,38,25,0.30),0px_0px_0px_1px_#E62619] dark:bg-button-dark-destructive dark:hover:bg-button-dark-destructive-hover dark:group-focus-visible/button:shadow-[0px_0px_0px_4px_rgba(233,60,48,0.40),0px_0px_0px_1px_#E93C30]":"destructive"===r},{"disable:opacity-[40%] rounded-full border border-gray-100 bg-transparent text-gray-950 hover:bg-gray-70":"outlined-web"===r},{"px-3 py-2":"lg"===j&&!E&&!!t},{"px-[9px] py-1.5":"md"===j&&!E&&!!t},{"px-[7px] py-1":"sm"===j&&!E&&!!t},{"h-8 w-8":"lg"===j&&!E&&!!C&&!t},{"h-7 w-7":"md"===j&&!E&&!!C&&!t},{"h-6 w-6":"sm"===j&&!E&&!!C&&!t}),children:[C&&("function"==typeof C?(0,a.jsx)(i.J,{path:C,className:l()("shrink-0",S)}):(0,a.jsx)(a.Fragment,{children:C})),t]})});return u?(0,a.jsx)(o.default,{draggable:"false",ref:c,href:u,as:p,replace:f,scroll:b,shallow:x,passHref:m,prefetch:y,locale:g,target:k,rel:"noreferrer noopener",tabIndex:-1,className:h,children:I}):I},u=n.forwardRef((e,t)=>(0,a.jsx)(s,{innerRef:t,...e}))},68285:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(44003),d=r(81863),l=r(61808),o=r.n(l),n=r(87355),i=r(50026);function s(e){let{items:t,position:r,containerId:l}=e;return(0,a.jsx)(d.Uv,{container:l?document.getElementById(l):document.getElementById("main-page"),children:(0,a.jsx)(d.VY,{className:o()("dropdownContent z-20 min-w-[200px] rounded-lg bg-fill-overlay py-1 text-body shadow-layer-md backdrop-blur-menu duration-175 dark:bg-fill-dark-overlay dark:shadow-control-dark",{"mb-11":"ctx-logo"===r}),alignOffset:5,onFocusOutside:e=>{e.preventDefault(),e.stopPropagation()},onInteractOutside:e=>{e.stopPropagation()},onCloseAutoFocus:e=>{e.preventDefault()},onKeyDown:e=>{var t,r,a,d;if("Escape"!==e.key&&(e.stopPropagation(),(null===(r=e.target)||void 0===r?void 0:null===(t=r.className)||void 0===t?void 0:t.includes("dropdownContent"))&&(e.preventDefault(),(null===(a=Array.from(null==e?void 0:e.target.childNodes))||void 0===a?void 0:a.find(e=>!e.ariaDisabled)).focus()),"Tab"===e.key)){let t=e.shiftKey?"ArrowUp":"ArrowDown",r=new KeyboardEvent("keydown",{key:t,code:t,keyCode:e.shiftKey?38:40,bubbles:!0});null===(d=e.target)||void 0===d||d.dispatchEvent(r)}},collisionPadding:{top:8,bottom:8,left:2,right:2},children:t.map((e,t)=>{if("separator"===e.type)return(0,a.jsx)(d.Z0,{className:"my-1 h-[0.5px] w-full bg-border-primary dark:bg-border-dark-primary"},t);if(e.nestedItems){var r;return(0,a.jsxs)(d.Tr,{children:[(0,a.jsxs)(d.fF,{id:e.label,className:'group relative mx-1 flex cursor-pointer select-none items-center justify-between gap-x-4 rounded px-3 py-2 text-secondary outline-none data-[highlighted]:bg-button-secondary-hover data-[state="open"]:bg-button-secondary-hover group-data-[highlighted]:text-primary dark:text-secondary-dark dark:data-[highlighted]:bg-fill-dark-primary dark:data-[state="open"]:bg-fill-dark-primary dark:group-data-[highlighted]:text-primary-dark',children:[e.jsxContent?(0,a.jsx)("div",{className:o()({"disabled-menu-item group":e.disabled}),children:e.jsxContent}):(0,a.jsx)("span",{className:"label",children:e.label}),(0,a.jsx)(n.J,{path:i.N.RightChevron,className:"text-quartery dark:text-quartery-dark"})]}),(0,a.jsx)(d.Uv,{container:null===(r=document)||void 0===r?void 0:r.getElementById("main-page"),children:(0,a.jsx)(d.tu,{id:e.label+"-sub",alignOffset:-4,className:"dropdownContent z-40 rounded-lg bg-fill-overlay p-1 text-body shadow-layer-md backdrop-blur-menu duration-175 dark:bg-fill-dark-overlay dark:shadow-control-dark",children:e.nestedItems.map((e,t)=>(null==e?void 0:e.type)!==void 0&&(null==e?void 0:e.type)==="checkBoxItem"?(0,a.jsxs)(d.oC,{id:null==e?void 0:e.label,className:"group relative flex w-full cursor-pointer select-none items-center gap-2 rounded px-3 py-2 text-secondary outline-none focus:bg-button-secondary-hover focus:text-primary dark:text-secondary-dark dark:focus:bg-fill-dark-primary dark:focus:text-primary-dark",checked:null==e?void 0:e.checked,onSelect:t=>{t.preventDefault(),(null==e?void 0:e.onSelect)&&(null==e||e.onSelect(t))},children:[(0,a.jsx)("div",{className:"relative h-4 w-4",children:(0,a.jsx)("div",{className:o()("absolute inset-0 flex items-center justify-center rounded border border-border-secondary peer-active:scale-95 dark:border-border-dark-secondary",{"bg-button-primary group-hover:bg-button-primary-hover dark:bg-button-dark-primary dark:group-hover:bg-button-dark-primary-hover":null==e?void 0:e.checked}),children:(0,a.jsx)(n.J,{path:i.N.Check,className:(null==e?void 0:e.checked)?"invert dark:invert-0":"opacity-0"})})}),null==e?void 0:e.label]},t):(0,a.jsx)(d.ck,{id:e.label,onSelect:e.onSelect,className:"relative flex w-full cursor-pointer items-center rounded px-3 py-2 text-secondary outline-none focus:bg-button-secondary-hover focus:text-primary dark:text-secondary-dark dark:focus:bg-fill-dark-primary dark:focus:text-primary-dark",children:e.jsxContent?(0,a.jsx)("div",{className:o()({"disabled-menu-item group":e.disabled}),children:e.jsxContent}):(0,a.jsx)("span",{className:"label",children:e.label})},t))})})]},t)}return(0,a.jsx)(d.ck,{onSelect:e.onSelect,disabled:e.disabled,className:o()("group/items px-1 outline-none",{"cursor-pointer text-secondary dark:text-secondary-dark":!e.disabled},{"cursor-default text-muted dark:text-muted-dark":e.disabled},{"blur-sm duration-75 ease-out hover:blur-0 focus:blur-0":!!e.specialEffect}),children:(0,a.jsxs)("div",{id:"innner-"+t,className:"relative flex w-full select-none items-center justify-between gap-x-4 rounded px-3 py-2 outline-none group-focus/items:bg-button-secondary-hover group-focus/items:text-primary dark:group-focus/items:bg-fill-dark-primary dark:group-focus/items:text-primary-dark",children:[e.jsxContent?(0,a.jsx)("div",{className:o()({"disabled-menu-item group":e.disabled}),children:e.jsxContent}):(0,a.jsx)("span",{className:"label",children:e.label}),e.icon&&("string"==typeof e.icon?(0,a.jsx)("div",{className:"flex gap-x-0.5",children:e.icon.split("").map((t,r)=>" "===t?null:(0,a.jsx)("span",{className:o()("inline-flex h-4 w-4 shrink-0 items-center justify-center",{"text-muted dark:text-muted-dark":e.disabled},{"text-quartery dark:text-quartery-dark":!e.disabled}),children:t},r))}):(0,a.jsx)("span",{className:o()("inline-flex h-4 w-4 shrink-0 items-center justify-center",{"text-muted dark:text-muted-dark":e.disabled},{"text-quartery dark:text-quartery-dark":!e.disabled}),children:e.icon}))]})},t)})})})}r(60036)},98506:function(e,t,r){"use strict";var a=r(44003),d=r(89151),l=r(61808),o=r.n(l),n=r(1394),i=r(87355),s=r(50026);r(60036),t.Z=(0,n.Pi)(e=>{var t,r,l;let{items:n,containerId:p,children:f,triggerProps:b={},align:x="end",alignOffset:y,width:m,offset:g,componentId:h,onCloseAutoFocus:k=!1,isMarketing:v=!1}=e;return b.className=o()("group/dropdown",null!==(l=b.className)&&void 0!==l?l:""),(0,a.jsxs)(d.fC,{modal:!0,children:[(0,a.jsx)(d.xz,{suppressHydrationWarning:!0,...b,children:null!=f?f:"Open"}),(0,a.jsx)(d.Uv,{container:p?null===(t=document)||void 0===t?void 0:t.getElementById(p):null===(r=document)||void 0===r?void 0:r.getElementById("main-page"),children:(0,a.jsx)(d.VY,{id:null!=h?h:"",collisionPadding:8,sideOffset:null!=g?g:4,align:x,alignOffset:null!=y?y:void 0,className:"dropdownContent z-40 min-w-[200px] rounded-lg bg-fill-overlay py-1 shadow-layer-md backdrop-blur-menu duration-175 dark:bg-fill-dark-overlay dark:shadow-control-dark",style:m?{width:m}:{},onFocusOutside:e=>{e.preventDefault()},onCloseAutoFocus:e=>{k||e.preventDefault()},onEscapeKeyDown:e=>{e.stopPropagation()},onKeyDown:e=>{var t,r,a,d,l;if("Escape"!==e.key&&"v"!==e.key.toLowerCase()&&(e.stopPropagation(),(null===(r=e.target)||void 0===r?void 0:null===(t=r.className)||void 0===t?void 0:t.includes("dropdownContent"))&&(e.preventDefault(),(null===(d=Array.from(null==e?void 0:e.target.childNodes))||void 0===d?void 0:d.find(e=>!e.ariaDisabled)).focus()),(null===(a=e.target)||void 0===a?void 0:a.role)==="menuitem"&&"ArrowRight"===e.key&&setTimeout(()=>{var t,r;(null===(r=Array.from(document.getElementById((null===(t=e.target)||void 0===t?void 0:t.id)+"-sub").childNodes))||void 0===r?void 0:r[0]).focus()},50),"Tab"===e.key)){let t=e.shiftKey?"ArrowUp":"ArrowDown",r=new KeyboardEvent("keydown",{key:t,code:t,keyCode:e.shiftKey?38:40,bubbles:!0});null===(l=e.target)||void 0===l||l.dispatchEvent(r)}},children:n.map((e,t)=>{if("separator"===e.type)return(0,a.jsx)(d.Z0,{className:"my-1 h-[0.5px] w-full bg-border-primary dark:bg-border-dark-primary"},t);if(null==e?void 0:e.nestedItems){var r;return(0,a.jsxs)(d.Tr,{children:[(0,a.jsxs)(d.fF,{id:e.label,className:o()('group relative mx-1 flex cursor-pointer select-none items-center justify-between gap-x-4 rounded px-3 py-2 text-secondary outline-none data-[highlighted]:bg-button-secondary-hover data-[state="open"]:bg-button-secondary-hover group-data-[highlighted]:text-primary dark:text-secondary-dark dark:data-[highlighted]:bg-fill-dark-primary dark:data-[state="open"]:bg-fill-dark-primary dark:group-data-[highlighted]:text-primary-dark',{"text-t2":v},{"text-body":!v}),children:[e.jsxContent?(0,a.jsx)("div",{className:o()({"disabled-menu-item group":e.disabled}),children:e.jsxContent}):(0,a.jsx)("span",{children:e.label}),(0,a.jsx)(i.J,{path:s.N.RightChevron,className:"text-quartery dark:text-quartery-dark"})]}),(0,a.jsx)(d.Uv,{container:null===(r=document)||void 0===r?void 0:r.getElementById("main-page"),children:(0,a.jsx)(d.tu,{id:e.label+"-sub",alignOffset:-4,collisionPadding:12,className:o()("dropdownContent z-40 rounded-lg bg-fill-overlay p-1 shadow-layer-md backdrop-blur-menu duration-175 dark:bg-fill-dark-overlay dark:shadow-control-dark",{"text-t2":v},{"text-body":!v}),onFocusOutside:e=>{var t;(null===(t=e.target)||void 0===t?void 0:t.role)!=="menuitem"&&e.preventDefault()},onEscapeKeyDown:e=>{if("menuitemcheckbox"===(null==e?void 0:e.target).role){var t;e.preventDefault();let r=new KeyboardEvent("keydown",{view:window,ctrlKey:!1,bubbles:!0,cancelable:!0,metaKey:!1,key:"ArrowLeft"});null==e||null===(t=e.target)||void 0===t||t.dispatchEvent(r)}},onKeyDown:e=>{var t,r,a,d;if("Escape"!==e.key&&(e.stopPropagation(),(null===(r=e.target)||void 0===r?void 0:null===(t=r.className)||void 0===t?void 0:t.includes("dropdownContent"))&&(null===(a=Array.from(null==e?void 0:e.target.childNodes))||void 0===a?void 0:a.find(e=>!e.ariaDisabled)).focus(),"Tab"===e.key)){let t=e.shiftKey?"ArrowUp":"ArrowDown",r=new KeyboardEvent("keydown",{key:t,code:t,keyCode:e.shiftKey?38:40,bubbles:!0});null===(d=e.target)||void 0===d||d.dispatchEvent(r)}},children:e.nestedItems.map((e,r)=>(null==e?void 0:e.type)!==void 0&&(null==e?void 0:e.type)==="checkBoxItem"?(0,a.jsx)(u,{item:e},r):(null==e?void 0:e.type)!==void 0&&(null==e?void 0:e.type)==="checkBoxIndicator"?(0,a.jsx)(c,{item:e},r):(null==e?void 0:e.type)==="separator"?(0,a.jsx)(d.Z0,{className:"my-1 h-[0.5px] w-full bg-border-primary dark:bg-border-dark-primary"},t):(0,a.jsx)(d.ck,{id:e.label,onSelect:e.onSelect,className:o()("relative flex w-full cursor-pointer items-center rounded px-3 py-2 text-secondary outline-none focus:bg-button-secondary-hover focus:text-primary dark:text-secondary-dark dark:focus:bg-fill-dark-primary dark:focus:text-primary-dark",{"text-t2":v},{"text-body":!v}),children:e.jsxContent?(0,a.jsx)("div",{className:o()({"disabled-menu-item group":e.disabled}),children:e.jsxContent}):(0,a.jsx)("span",{children:e.label})},r))})})]},t)}return(0,a.jsx)(d.ck,{id:e.label.toString(),disabled:e.disabled,onSelect:t=>{e.doesCloseOnSelect||t.preventDefault(),(null==e?void 0:e.onSelect)&&(null==e||e.onSelect(t))},onClick:e=>{e.stopPropagation()},className:o()("group/items px-1 outline-none",{"cursor-pointer text-secondary dark:text-secondary-dark":!e.disabled},{"cursor-default text-muted dark:text-muted-dark":e.disabled},{"text-t2":v},{"text-body":!v}),children:(0,a.jsxs)("div",{id:"innner-"+t,className:"relative flex w-full select-none items-center justify-between gap-x-4 rounded px-3 py-2 outline-none group-focus/items:bg-button-secondary-hover group-focus/items:text-primary dark:group-focus/items:bg-fill-dark-primary dark:group-focus/items:text-primary-dark",children:[e.jsxContent?(0,a.jsx)("div",{className:o()({"disabled-menu-item group":e.disabled}),children:e.jsxContent}):(0,a.jsx)("span",{children:e.label}),e.icon&&("string"==typeof e.icon?(0,a.jsx)("div",{className:"flex gap-x-0.5",children:e.icon.split(" ").map((t,r)=>" "===t?null:(0,a.jsx)("span",{className:o()("inline-flex h-4 min-w-[16px] shrink-0 items-center justify-center",{"text-muted dark:text-muted-dark":e.disabled},{"text-quartery dark:text-quartery-dark":!e.disabled}),children:t},r))}):(0,a.jsx)("span",{className:o()("inline-flex h-4 w-4 shrink-0 items-center justify-center",{"text-black opacity-[.18] dark:text-muted-dark":e.disabled},{"text-quartery dark:text-quartery-dark":!e.disabled}),children:e.icon}))]})},t)})})})]})});let u=e=>{let{item:t}=e;return(0,a.jsxs)(d.oC,{id:null==t?void 0:t.label,className:"group relative flex w-full cursor-pointer select-none items-center gap-2 rounded px-3 py-2 text-secondary outline-none focus:bg-button-secondary-hover focus:text-primary dark:text-secondary-dark dark:focus:bg-fill-dark-primary dark:focus:text-primary-dark",checked:null==t?void 0:t.checked,onSelect:e=>{e.preventDefault(),(null==t?void 0:t.onSelect)&&(null==t||t.onSelect(e))},children:[(0,a.jsx)("div",{className:"relative h-4 w-4",children:(0,a.jsx)("div",{className:o()("group/checkbox absolute inset-0 flex items-center justify-center rounded border border-border-secondary hover:border-border-tertiary hover:bg-fill-primary peer-active:scale-95 dark:border-border-dark-secondary dark:hover:border-border-dark-tertiary dark:hover:bg-fill-dark-primary",{"bg-button-primary group-hover:bg-button-primary-hover dark:bg-button-dark-primary dark:group-hover:bg-button-dark-primary-hover":null==t?void 0:t.checked}),children:(0,a.jsx)(i.J,{path:s.N.Check,className:((null==t?void 0:t.checked)?"text-white dark:text-primary":"text-transparent group-hover/checkbox:text-muted dark:group-hover/checkbox:text-muted-dark")+" scale-90"})})}),null==t?void 0:t.label]})},c=e=>{let{item:t}=e;return(0,a.jsx)(d.oC,{id:null==t?void 0:t.label,className:"group relative flex w-full cursor-pointer select-none items-center gap-2 rounded px-3 py-2 text-secondary outline-none focus:bg-button-secondary-hover focus:text-primary dark:text-secondary-dark dark:focus:bg-fill-dark-primary dark:focus:text-primary-dark",checked:null==t?void 0:t.checked,onSelect:e=>{e.preventDefault(),(null==t?void 0:t.onSelect)&&(null==t||t.onSelect(e))},children:(0,a.jsxs)("div",{className:"relative flex items-center text-secondary group-data-[highlighted]:text-primary dark:text-secondary-dark dark:group-data-[highlighted]:text-primary-dark",children:[(0,a.jsx)(d.wU,{className:"absolute left-0 inline-flex h-4 w-4 items-center justify-center",children:(0,a.jsx)(i.J,{path:s.N.Check,className:"h-4 w-4"})}),(0,a.jsx)("span",{className:"ml-6",children:null==t?void 0:t.label})]})})}},50026:function(e,t,r){"use strict";r.d(t,{N:function(){return tl}});var a=r(27206),d=r(60633),l=r(90349),o=r(36418),n=r(57265),i=r(45201),s=r(53584),u=r(58993),c=r(80060),p=r(59590),f=r(28634),b=r(3319),x=r(60683),y=r(6256),m=r(32515),g=r(49992),h=r(76763),k=r(54353),v=r(39495),w=r(42778),j=r(59890),N=r(51261),C=r(75269),_=r(95556),S=r(2868),D=r(85817),E=r(63806),I=r(84761),A=r(28918),F=r(34653),L=r(672),R=r(50154),K=r(34541),P=r(89379),B=r(98735),O=r(58973),U=r(58130),q=r(87282),T=r(76445),H=r(71829),M=r(79973),z=r(59330),J=r(77110),Z=r(80557),W=r(24203),G=r(88462),V=r(69732),Y=r(76615),Q=r(39950),X=r(51225),$=r(43138),ee=r(74306),et=r(23365),er=r(71692),ea=r(57043),ed=r(94277),el=r(88252),eo=r(52154),en=r(66178),ei=r(49543),es=r(17116),eu=r(46350),ec=r(19712),ep=r(36694),ef=r(30134),eb=r(85656),ex=r(54570),ey=r(52718),em=r(72048),eg=r(24969),eh=r(33664),ek=r(74956),ev=r(3408),ew=r(66306),ej=r(45900),eN=r(19320),eC=r(21513),e_=r(87663),eS=r(36240),eD=r(4754),eE=r(62024),eI=r(70770),eA=r(75270),eF=r(44567),eL=r(21235),eR=r(69079),eK=r(64722),eP=r(66647),eB=r(96339),eO=r(4971),eU=r(30791),eq=r(98651),eT=r(58381),eH=r(40404),eM=r(42821),ez=r(62762),eJ=r(53428),eZ=r(23781),eW=r(90654),eG=r(16891),eV=r(14604),eY=r(86631),eQ=r(98222),eX=r(32240),e$=r(25376),e0=r(57453),e4=r(84802),e5=r(13761),e1=r(71369),e6=r(24769),e3=r(59635),e2=r(16937),e8=r(59193),e7=r(46976),e9=r(84617),te=r(89404),tt=r(25101),tr=r(9507),ta=r(77561),td=r(69378);let tl={Alert:d.default,Appearance:l.default,Archive:o.default,Attachment:i.default,AttachmentTilt:n.default,Block:s.default,Bold:u.default,BothsideBar:c.default,BulletList:p.default,Calendar:f.default,Check:b.default,CheckmarkFill:x.default,Clipboard:y.default,Clock:m.default,Close:g.default,Code_Snippet:h.default,Cog:k.default,Color:v.default,Combine:w.default,Command:j.default,ComposeFilled:N.default,Compose:C.default,Contract:_.default,ContractLarge:S.default,Copy:D.default,DeclineFill:E.default,Document:I.default,Documentation:A.default,DownChevron:F.default,Download:L.default,Draft:R.default,Edit:K.default,Envelope:P.default,ExpandDiagonal:B.default,ExpandLarge:O.default,Expand:U.default,External:q.default,Feedback:T.default,Filter:H.default,FitToWidth:M.default,Forward:z.default,Gift:J.default,Github:Z.default,H1:W.default,H2:G.default,H3:V.default,H4:Y.default,Help:Q.default,HighlightColor:X.default,Highlight:$.default,HourGlass:ee.default,ImageFill:et.default,Image:er.default,Inbox:ea.default,InfoFill:ed.default,Italic:el.default,KeyboardFill:eo.default,LabelFill:en.default,Label:ei.default,LeftArrow:es.default,LeftChevron:eu.default,LeftSidebar:ec.default,Left:ep.default,Link:ef.default,LinkedIn:eb.default,LocationFill:ex.default,Location:ey.default,MeetingLink:em.default,Minimize:eg.default,Minus:eh.default,Move:ek.default,Mute:ev.default,NumberList:ew.default,PageDown:ej.default,PageUp:eN.default,Plane:eC.default,Plus:e_.default,Printer:eS.default,Profile:eD.default,Quote:eE.default,Read:eI.default,Redo:eA.default,Releases:eF.default,RemoveStyle:eL.default,ReplyAll:eR.default,Reply:eK.default,ResetZoom:eP.default,Restore:eB.default,Revert:eO.default,RightArrow:eU.default,RightChevron:eq.default,RightSidebar:eT.default,RightSidebarOpen:eM.default,Right:eH.default,Search:ez.default,SendLater:eJ.default,Send:eZ.default,SignOut:eW.default,Snippet:eG.default,Spam:eV.default,SplitInbox:eY.default,Split:eQ.default,StarFilled:eX.default,Star:e$.default,Strikethrough:e0.default,Switch_App:e4.default,Sync:e5.default,SyncLarge:e1.default,TextSize:e6.default,ThreeDot:a.default,Trash:e3.default,Twitter:e2.default,Underline:e8.default,Undo:e7.default,Unread:e9.default,Unsubscribe:te.default,UpChevron:tt.default,ViewOption:tr.default,Web:ta.default,Workspace:td.default}},87355:function(e,t,r){"use strict";r.d(t,{J:function(){return l}});var a=r(44003),d=r(62516);let l=e=>{let{path:t,className:r,onClick:l}=e,o=(0,d.useMemo)(()=>t,[t]);return(0,a.jsx)("div",{onClick:l,children:(0,a.jsx)(o,{className:r})})}},60036:function(){}}]);