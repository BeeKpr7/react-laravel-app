import{R as b,r as d}from"./app-4a4380f8.js";import{b as N,c as w,l as x,u as F,s as h,V as S,X as P}from"./transition-7c15a2e8.js";var A;let X=(A=b.useId)!=null?A:function(){let e=N(),[t,n]=b.useState(e?()=>w.nextId():null);return x(()=>{t===null&&n(w.nextId())},[t]),t!=null?""+t:void 0};function g(e){return w.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let p=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var I=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(I||{}),y=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(y||{}),T=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(T||{});function D(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(p)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var L=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(L||{});function M(e,t=0){var n;return e===((n=g(e))==null?void 0:n.body)?!1:F(t,{[0](){return e.matches(p)},[1](){let r=e;for(;r!==null;){if(r.matches(p))return!0;r=r.parentElement}return!1}})}function j(e){e==null||e.focus({preventScroll:!0})}let O=["textarea","input"].join(",");function H(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,O))!=null?n:!1}function R(e,t=n=>n){return e.slice().sort((n,r)=>{let u=t(n),i=t(r);if(u===null||i===null)return 0;let o=u.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function q(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?R(e):e:D(e);u.length>0&&o.length>1&&(o=o.filter(f=>!u.includes(f))),r=r??i.activeElement;let m=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),E=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},a=0,l=o.length,c;do{if(a>=l||a+l<=0)return 0;let f=E+a;if(t&16)f=(f+l)%l;else{if(f<0)return 3;if(f>=l)return 1}c=o[f],c==null||c.focus(s),a+=m}while(c!==i.activeElement);return t&6&&H(c)&&c.select(),c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),2}function v(e,t,n){let r=h(t);d.useEffect(()=>{function u(i){r.current(i)}return document.addEventListener(e,u,n),()=>document.removeEventListener(e,u,n)},[e,n])}function K(e,t,n=!0){let r=d.useRef(!1);d.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function u(o,m){if(!r.current||o.defaultPrevented)return;let E=function a(l){return typeof l=="function"?a(l()):Array.isArray(l)||l instanceof Set?l:[l]}(e),s=m(o);if(s!==null&&s.getRootNode().contains(s)){for(let a of E){if(a===null)continue;let l=a instanceof HTMLElement?a:a.current;if(l!=null&&l.contains(s)||o.composed&&o.composedPath().includes(l))return}return!M(s,L.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}}let i=d.useRef(null);v("mousedown",o=>{var m,E;r.current&&(i.current=((E=(m=o.composedPath)==null?void 0:m.call(o))==null?void 0:E[0])||o.target)},!0),v("click",o=>{!i.current||(u(o,()=>i.current),i.current=null)},!0),v("blur",o=>u(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function V(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&k(n)?!1:r}function k(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let U="div";var _=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(_||{});let z=S(function(e,t){let{features:n=1,...r}=e,u={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return P({ourProps:u,theirProps:r,slot:{},defaultTag:U,name:"Hidden"})});var $=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))($||{});function B(e,t,n){let r=h(t);d.useEffect(()=>{function u(i){r.current(i)}return window.addEventListener(e,u,n),()=>window.removeEventListener(e,u,n)},[e,n])}var G=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(G||{});function J(){let e=d.useRef(0);return B("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Q(...e){return d.useMemo(()=>g(...e),[...e])}function Y(e,t,n,r){let u=h(n);d.useEffect(()=>{e=e??window;function i(o){u.current(o)}return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i,r)},[e,t,r])}export{D as E,L as F,X as I,K as L,y as N,j as S,Y as a,J as b,q as c,I as d,M as e,g as f,G as g,z as h,Q as n,$ as o,V as r,_ as s};
