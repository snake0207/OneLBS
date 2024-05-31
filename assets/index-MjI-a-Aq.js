import{w as _,v as U,e as u,j as s,x as g,P as V,C as v,V as S,W as j,b as l,r as $,_ as F,I as b,y as H,z as Z,B as q,d as G}from"./index-Zwjsjf_e.js";import{c as J}from"./index-DOeUa9Au.js";import{u as I}from"./useSlot-DiK3vQJX.js";import{C as K}from"./Close-DdxGh4K7.js";function Q(t){return U("MuiAlert",t)}const M=_("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),X=u(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Y=u(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),D=u(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),tt=u(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ot=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],et=J(),st=t=>{const{variant:e,color:r,severity:o,classes:a}=t,i={root:["root",`color${v(r||o)}`,`${e}${v(r||o)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return Z(i,Q,a)},rt=g(V,{name:"MuiAlert",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`${r.variant}${v(r.color||r.severity)}`]]}})(({theme:t})=>{const e=t.palette.mode==="light"?S:j,r=t.palette.mode==="light"?j:S;return l({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${o}StandardBg`]:r(t.palette[o].light,.9),[`& .${M.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),border:`1px solid ${(t.vars||t).palette[o].light}`,[`& .${M.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(([,o])=>o.main&&o.dark).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:l({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert[`${o}FilledColor`],backgroundColor:t.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[o].dark:t.palette[o].main,color:t.palette.getContrastText(t.palette[o].main)})}))]})}),nt=g("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,e)=>e.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),lt=g("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,e)=>e.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),h=g("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,e)=>e.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),z={success:s.jsx(X,{fontSize:"inherit"}),warning:s.jsx(Y,{fontSize:"inherit"}),error:s.jsx(D,{fontSize:"inherit"}),info:s.jsx(tt,{fontSize:"inherit"})},at=$.forwardRef(function(e,r){const o=et({props:e,name:"MuiAlert"}),{action:a,children:i,className:p,closeText:f="Close",color:x,components:C={},componentsProps:P={},icon:m,iconMapping:L=z,onClose:A,role:R="alert",severity:d="success",slotProps:B={},slots:O={},variant:k="standard"}=o,W=F(o,ot),n=l({},o,{color:x,severity:d,variant:k,colorSeverity:x||d}),c=st(n),y={slots:l({closeButton:C.CloseButton,closeIcon:C.CloseIcon},O),slotProps:l({},P,B)},[E,T]=I("closeButton",{elementType:b,externalForwardedProps:y,ownerState:n}),[w,N]=I("closeIcon",{elementType:K,externalForwardedProps:y,ownerState:n});return s.jsxs(rt,l({role:R,elevation:0,ownerState:n,className:H(c.root,p),ref:r},W,{children:[m!==!1?s.jsx(nt,{ownerState:n,className:c.icon,children:m||L[d]||z[d]}):null,s.jsx(lt,{ownerState:n,className:c.message,children:i}),a!=null?s.jsx(h,{ownerState:n,className:c.action,children:a}):null,a==null&&A?s.jsx(h,{ownerState:n,className:c.action,children:s.jsx(E,l({size:"small","aria-label":f,title:f,color:"inherit",onClick:A},T,{children:s.jsx(w,l({fontSize:"small"},N))}))}):null]}))}),ut=({severity:t="success",msg:e,autoHideDuration:r=0,callback:o=null})=>{const[a,i]=$.useState(!1),p=()=>{i(!0),typeof o=="function"&&o()};return r>0&&setTimeout(()=>p(),r),!a&&s.jsx(q,{position:"fixed",bottom:10,minWidth:"400px",children:s.jsx(at,{variant:"filled",severity:t,action:!r&&s.jsx(b,{"aria-label":"close",color:"inherit",size:"small",onClick:p,children:s.jsx(G,{fontSize:"inherit"})}),children:e})})};export{ut as default};
