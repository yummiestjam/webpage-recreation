!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3216f432-7e26-4f58-a87d-76dbd8f69d0e",e._sentryDebugIdIdentifier="sentry-dbid-3216f432-7e26-4f58-a87d-76dbd8f69d0e")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6792],{66571:function(e,t,r){Promise.resolve().then(r.bind(r,87341)),Promise.resolve().then(r.bind(r,86661))},87341:function(e,t,r){"use strict";r.d(t,{MarketingPageWrapper:function(){return d}});var n=r(44003),o=r(61808),a=r.n(o),i=r(87767),s=r(62516),l=r(47071);function d(e){let{className:t,children:r,appearance:o,hasFooter:d=!0,hasHeader:c=!0}=e,u=(0,i.usePathname)(),[f,p]=(0,s.useState)(!1);(0,s.useEffect)(()=>{setTimeout(()=>{p(!0)},100)},[u]);let h=c&&d?"calc(100vh - ".concat(l.o.footerHeight,"px - ").concat(l.o.headerHeight,"px)"):c?"calc(100vh - ".concat(l.o.headerHeight,"px)"):d?"calc(100vh - ".concat(l.o.footerHeight,")"):"100vh";return(0,n.jsx)("div",{style:{minHeight:h},className:a()("mx-auto box-content grid max-w-[692px] grid-cols-4 gap-x-4 px-6 py-[100px] md:px-14 md:py-[172px]",t,"py-20 duration-700",{"flex flex-col":"flex"===o},{"grid-wrapper":"grid"===o},{"opacity-100":f},{"opacity-0":!f}),children:r})}},47071:function(e,t,r){"use strict";r.d(t,{o:function(){return n}});let n={headerHeight:56,footerHeight:340}},86661:function(e,t,r){"use strict";r.d(t,{AccordionComponent:function(){return i}});var n=r(44003),o=r(92058),a=r(62516);r(95942);let i=e=>{let{triggerTitle:t,hoverItem:r,itemValue:a,content:i}=e;return(0,n.jsx)(o.fC,{type:"single",collapsible:!0,className:"accordion-item border-b border-solid last:border-b-0",children:(0,n.jsxs)(o.ck,{value:a,children:[(0,n.jsx)(o.h4,{className:"flex",children:(0,n.jsxs)(o.xz,{className:"flex h-7 flex-1 items-center justify-start gap-x-2 py-4 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-90",children:[(0,n.jsx)(s,{className:"h-4 w-4 shrink-0 text-primary transition-transform duration-200"}),(0,n.jsxs)("div",{className:"flex w-full flex-row items-center justify-between",children:[(0,n.jsx)("span",{className:"text-t2 font-normal leading-7 text-primary",children:t}),!!r&&r]})]})}),(0,n.jsx)(o.VY,{className:"accordion-up accordion-down justify-start overflow-hidden px-5 text-sm",children:i})]})})},s=a.forwardRef((e,t)=>{let{color:r="currentColor",...o}=e;return(0,n.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,ref:t,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.9424 8L6.47098 3.5286L5.52817 4.47141L9.05676 8L5.52817 11.5286L6.47098 12.4714L10.9424 8Z",fill:"currentColor"})})});s.displayName="ChevronRightIcon"},87767:function(e,t,r){"use strict";var n=r(35209);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}}),r.o(n,"redirect")&&r.d(t,{redirect:function(){return n.redirect}}),r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},95942:function(){},92058:function(e,t,r){"use strict";r.d(t,{VY:function(){return ei},h4:function(){return eo},ck:function(){return en},fC:function(){return er},xz:function(){return ea}});var n=r(62516),o=r(88823),a=r(10870),i=r(38407),s=r(12595),l=r(26822),d=r(69739),c=r(19952),u=r(93405),f=r(22818),p=r(44003),h="Collapsible",[x,m]=(0,o.b)(h),[b,v]=x(h),g=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:o,defaultOpen:a,disabled:i,onOpenChange:s,...c}=e,[u=!1,h]=(0,l.T)({prop:o,defaultProp:a,onChange:s});return(0,p.jsx)(b,{scope:r,disabled:i,contentId:(0,f.M)(),open:u,onOpenToggle:n.useCallback(()=>h(e=>!e),[h]),children:(0,p.jsx)(d.WV.div,{"data-state":N(u),"data-disabled":i?"":void 0,...c,ref:t})})});g.displayName=h;var w="CollapsibleTrigger",y=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,...n}=e,o=v(w,r);return(0,p.jsx)(d.WV.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":N(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...n,ref:t,onClick:(0,s.M)(e.onClick,o.onOpenToggle)})});y.displayName=w;var j="CollapsibleContent",C=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=v(j,e.__scopeCollapsible);return(0,p.jsx)(u.z,{present:r||o.open,children:e=>{let{present:r}=e;return(0,p.jsx)(R,{...n,ref:t,present:r})}})});C.displayName=j;var R=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:o,children:a,...s}=e,l=v(j,r),[u,f]=n.useState(o),h=n.useRef(null),x=(0,i.e)(t,h),m=n.useRef(0),b=m.current,g=n.useRef(0),w=g.current,y=l.open||u,C=n.useRef(y),R=n.useRef();return n.useEffect(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,c.b)(()=>{let e=h.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();m.current=t.height,g.current=t.width,C.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),f(o)}},[l.open,o]),(0,p.jsx)(d.WV.div,{"data-state":N(l.open),"data-disabled":l.disabled?"":void 0,id:l.contentId,hidden:!y,...s,ref:x,style:{"--radix-collapsible-content-height":b?"".concat(b,"px"):void 0,"--radix-collapsible-content-width":w?"".concat(w,"px"):void 0,...e.style},children:y&&a})});function N(e){return e?"open":"closed"}var k=r(7545),_="Accordion",A=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[I,P,D]=(0,a.B)(_),[H,E]=(0,o.b)(_,[D,m]),L=m(),O=n.forwardRef((e,t)=>{let{type:r,...n}=e;return(0,p.jsx)(I.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,p.jsx)(z,{...n,ref:t}):(0,p.jsx)(W,{...n,ref:t})})});O.displayName=_;var[T,S]=H(_),[V,M]=H(_,{collapsible:!1}),W=n.forwardRef((e,t)=>{let{value:r,defaultValue:o,onValueChange:a=()=>{},collapsible:i=!1,...s}=e,[d,c]=(0,l.T)({prop:r,defaultProp:o,onChange:a});return(0,p.jsx)(T,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:c,onItemClose:n.useCallback(()=>i&&c(""),[i,c]),children:(0,p.jsx)(V,{scope:e.__scopeAccordion,collapsible:i,children:(0,p.jsx)(K,{...s,ref:t})})})}),z=n.forwardRef((e,t)=>{let{value:r,defaultValue:o,onValueChange:a=()=>{},...i}=e,[s=[],d]=(0,l.T)({prop:r,defaultProp:o,onChange:a}),c=n.useCallback(e=>d(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[d]),u=n.useCallback(e=>d(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[d]);return(0,p.jsx)(T,{scope:e.__scopeAccordion,value:s,onItemOpen:c,onItemClose:u,children:(0,p.jsx)(V,{scope:e.__scopeAccordion,collapsible:!0,children:(0,p.jsx)(K,{...i,ref:t})})})}),[F,B]=H(_),K=n.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:o,dir:a,orientation:l="vertical",...c}=e,u=n.useRef(null),f=(0,i.e)(u,t),h=P(r),x="ltr"===(0,k.gm)(a),m=(0,s.M)(e.onKeyDown,e=>{var t;if(!A.includes(e.key))return;let r=e.target,n=h().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),o=n.findIndex(e=>e.ref.current===r),a=n.length;if(-1===o)return;e.preventDefault();let i=o,s=a-1,d=()=>{(i=o+1)>s&&(i=0)},c=()=>{(i=o-1)<0&&(i=s)};switch(e.key){case"Home":i=0;break;case"End":i=s;break;case"ArrowRight":"horizontal"===l&&(x?d():c());break;case"ArrowDown":"vertical"===l&&d();break;case"ArrowLeft":"horizontal"===l&&(x?c():d());break;case"ArrowUp":"vertical"===l&&c()}null===(t=n[i%a].ref.current)||void 0===t||t.focus()});return(0,p.jsx)(F,{scope:r,disabled:o,direction:a,orientation:l,children:(0,p.jsx)(I.Slot,{scope:r,children:(0,p.jsx)(d.WV.div,{...c,"data-orientation":l,ref:f,onKeyDown:o?void 0:m})})})}),U="AccordionItem",[Y,q]=H(U),Z=n.forwardRef((e,t)=>{let{__scopeAccordion:r,value:n,...o}=e,a=B(U,r),i=S(U,r),s=L(r),l=(0,f.M)(),d=n&&i.value.includes(n)||!1,c=a.disabled||e.disabled;return(0,p.jsx)(Y,{scope:r,open:d,disabled:c,triggerId:l,children:(0,p.jsx)(g,{"data-orientation":a.orientation,"data-state":et(d),...s,...o,ref:t,disabled:c,open:d,onOpenChange:e=>{e?i.onItemOpen(n):i.onItemClose(n)}})})});Z.displayName=U;var G="AccordionHeader",J=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,o=B(_,r),a=q(G,r);return(0,p.jsx)(d.WV.h3,{"data-orientation":o.orientation,"data-state":et(a.open),"data-disabled":a.disabled?"":void 0,...n,ref:t})});J.displayName=G;var Q="AccordionTrigger",X=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,o=B(_,r),a=q(Q,r),i=M(Q,r),s=L(r);return(0,p.jsx)(I.ItemSlot,{scope:r,children:(0,p.jsx)(y,{"aria-disabled":a.open&&!i.collapsible||void 0,"data-orientation":o.orientation,id:a.triggerId,...s,...n,ref:t})})});X.displayName=Q;var $="AccordionContent",ee=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,o=B(_,r),a=q($,r),i=L(r);return(0,p.jsx)(C,{role:"region","aria-labelledby":a.triggerId,"data-orientation":o.orientation,...i,...n,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function et(e){return e?"open":"closed"}ee.displayName=$;var er=O,en=Z,eo=J,ea=X,ei=ee}},function(e){e.O(0,[6653,3228,1774,3201,9973,1744],function(){return e(e.s=66571)}),_N_E=e.O()}]);