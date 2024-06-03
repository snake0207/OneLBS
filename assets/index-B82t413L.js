function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SearchPopup-NjX71Oei.js","assets/index-DNBezHmp.js","assets/index-K9FZnq_n.js","assets/index-0KennhiS.js","assets/TextField-rg4txBXg.js","assets/formik.esm-DhXVXXHr.js","assets/InputAdornment-BGi_TbIT.js","assets/system-CIiezBfJ.js","assets/cjs-DMENa8sQ.js","assets/index-BfV9KbSX.js","assets/index-BICb5xO3.js","assets/index-CUnSiupj.js","assets/index-Q7s2wh8K.js","assets/useSlot--psqYATO.js","assets/Close-Didp81Oi.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{v as e,w as s,x as l,b as o,r as n,f as i,_ as t,j as a,y as r,z as d,B as c,T as u,O as g,N as x,S as h,Y as p}from"./index-DNBezHmp.js";import{b as f,c as C,d as m,e as j,M as v,a as k,f as b}from"./index-K9FZnq_n.js";import{C as y}from"./index-4-V6eLgu.js";import{f as S,g as Y,h as N,i as T}from"./system-CIiezBfJ.js";import{a as w,f as q,u as F}from"./formik.esm-DhXVXXHr.js";import{S as V}from"./index-DgBZXdG5.js";import{T as z}from"./index-0KennhiS.js";import{k as D,l as _,m as R,n as A,o as L,p as P,q as I}from"./service-Dw05zt6F.js";import{d as M}from"./Create-X3BI1mEj.js";import{C as E}from"./index-FTLfx3zq.js";import{a as B}from"./validationSchema-BmjsKHMN.js";import"./index-BfV9KbSX.js";import"./index-Q7s2wh8K.js";import"./TextField-rg4txBXg.js";import"./MenuItem-DrfqH9qa.js";import"./Close-Didp81Oi.js";import"./FormControlLabel-DM4QGyIb.js";import"./InputAdornment-BGi_TbIT.js";import"./index.esm-Db1lzYWE.js";function G(s){return e("MuiFormGroup",s)}s("MuiFormGroup",["root","row","error"]);const O=["className","row"],W=l("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:l}=e;return[s.root,l.row&&s.row]}})((({ownerState:e})=>o({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"}))),H=n.forwardRef((function(e,s){const l=i({props:e,name:"MuiFormGroup"}),{className:n,row:c=!1}=l,u=t(l,O),g=w(),x=q({props:l,muiFormControl:g,states:["error"]}),h=o({},l,{row:c,error:x.error}),p=(e=>{const{classes:s,row:l,error:o}=e;return d({root:["root",l&&"row",o&&"error"]},G,s)})(h);return a.jsx(W,o({className:r(p.root,n),ownerState:h,ref:s},u))})),$={searchBox:{display:"flex",justifyContent:"space-between",width:"100%",borderRadius:"8px",mb:"10px",p:"16px 20px",backgroundColor:"grey.search",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},tableBox:{width:"100%",th:{border:0,color:"text.darkgray",p:"3px 10px 3px 0","&:nth-of-type(even)":{pr:"20px"}},input:{height:"40px",pt:0,pb:0}},searchButton:{fontSize:15,fontWeight:400,width:"69px",height:"40px",minWidth:"auto",backgroundColor:"button.main",padding:"6px"},inputDash:{fontSize:15,display:"flex",alignItems:"center"},cellTitle:{width:"100px"},cellInput:{width:"300px"}};function U({onSearch:e}){const s=F({initialValues:{serviceName:"",serviceCode:"",customerName:"",serviceType:"T"},onSubmit:s=>{e&&e(s)}});return a.jsx(c,{sx:$.searchBox,children:a.jsx(f,{sx:$.tableBox,children:a.jsxs(C,{children:[a.jsxs(m,{children:[a.jsx(j,{sx:$.cellTitle,children:"서비스명"}),a.jsx(j,{sx:$.cellInput,children:a.jsx(z,{name:"serviceName",formik:s,sx:{width:"100%"}})}),a.jsx(j,{sx:$.cellTitle,children:"서비스 코드"}),a.jsx(j,{sx:$.cellInput,children:a.jsx(z,{name:"serviceCode",formik:s,sx:{width:"100%"}})}),a.jsx(j,{})]}),a.jsxs(m,{children:[a.jsx(j,{sx:$.cellTitle,children:"고객사"}),a.jsx(j,{sx:$.cellInput,children:a.jsx(z,{name:"customerName",formik:s,sx:{width:"100%"}})}),a.jsx(j,{children:"서비스 유형"}),a.jsx(j,{sx:$.cellInput,children:a.jsx(V,{name:"serviceType",formik:s,items:D(),sx:{width:"100%",height:40,backgroundColor:"form.main",borderRadius:"4px"}})}),a.jsx(j,{align:"right",children:a.jsx(v,{name:"search",title:"검색",onClick:s.handleSubmit})})]})]})})})}const K=[{field:"id",headerName:"ID",flex:.8,renderCell:e=>a.jsx(u,{children:e.row.id})},{field:"serviceName",headerName:"서비스명",flex:1.3,renderCell:e=>a.jsx(u,{color:"primary",children:e.row.serviceName})},{field:"serviceCode",headerName:"서비스코드",flex:1,renderCell:e=>a.jsx(u,{children:e.row.serviceCode})},{field:"customerName",headerName:"고객사",flex:1.5,renderCell:e=>a.jsx(u,{children:e.row.customerName})},{field:"cpName",headerName:"서비스제공사",flex:1.5,renderCell:e=>a.jsx(u,{children:e.row.cpName})},{field:"serviceType",headerName:"서비스 유형",flex:1,renderCell:e=>a.jsx(u,{children:void 0!==_[e.row.serviceType]?_[e.row.serviceType].label:`${e.row.serviceType} is not exist`})},{field:"regDate",headerName:"등록일시",flex:1.5,renderCell:e=>a.jsx(u,{children:e.row.regDate})},{field:"updDate",headerName:"변경일시",flex:1.5,renderCell:e=>a.jsx(u,{children:e.row.updDate})}],J=()=>{const e=g(),[s,l]=n.useState(!0),[o,i]=n.useState({count:0,lists:[]}),[t,r]=n.useState({page:1,limit:parseInt("50"),cache:Math.random()}),{data:d}=S(t,{enabled:s});return n.useEffect((()=>{if(s&&d&&"0000"===(null==d?void 0:d.code)){const{totalCount:e,lists:s}=null==d?void 0:d.data;l(!1),i({count:e,lists:[...o.lists,...s]})}}),[d,t]),a.jsxs(c,{children:[a.jsx(k,{title:"서비스 관리"}),a.jsx(U,{onSearch:e=>{i({count:0,lists:[]}),r({...t,...e,page:1}),l(!0)}}),a.jsxs(c,{sx:{width:"100%",borderRadius:"8px",p:"18px 20px",backgroundColor:"background.contents",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},children:[a.jsxs(c,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[a.jsx(u,{sx:{fontSize:"14px"},children:`Total Count: ${o.count}`}),a.jsx(v,{name:"create",title:"신규 등록",onClick:()=>e("/system/service-regist",{state:{row:"acro0720"}})})]}),a.jsx(y,{rows:null==o?void 0:o.lists,rowCount:null==o?void 0:o.count,columns:K,sort:{field:"id",orderby:"desc"},onPageChange:e=>{const s=parseInt("10");e>0&&(e+1)*s>=o.lists.length&&(r({...t,page:t.page+1}),l(!0))},onRowClick:({row:s})=>{e("/system/service-edit",{state:{row:s}})},pageInit:1===t.page})]})]})},Q={contentBox:{width:"100%",borderRadius:"8px",p:"18px 20px",backgroundColor:"background.contents",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},table_info:{mb:3,th:{width:"20%",border:"1px solid",borderColor:"table.viewTopBorder"},td:{pt:1,pb:1,width:"30%",border:"1px solid",borderColor:"table.viewTopBorder"},tr:{"& th:first-of-type":{borderLeft:"none"},"& th:last-child":{borderRight:"none"},"& td:last-child":{borderRight:"none"}}},table_set_base:{mb:1,th:{width:"20%",border:"1px solid",borderColor:"table.viewTopBorder"},td:{pt:1,pb:1,width:"30%",border:"1px solid",borderColor:"table.viewTopBorder"},tr:{"& th:first-of-type":{borderLeft:"none"},"& th:last-child":{borderRight:"none"},"& td:last-child":{borderRight:"none"}}},table_set_option:{mb:3,th:{pt:1,pb:1,width:"20%",border:"1px solid",borderColor:"table.viewTopBorder"},td:{pt:1,pb:1,width:"20%",border:"1px solid",borderColor:"table.viewTopBorder"},tr:{"& th:first-of-type":{borderLeft:"none"},"& th:last-child":{borderRight:"none"},"& td:last-child":{borderRight:"none"}}},cellTitle:{}},X=n.lazy((()=>x((()=>import("./SearchPopup-NjX71Oei.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])))),Z=n.lazy((()=>x((()=>import("./index-BICb5xO3.js")),__vite__mapDeps([10,1,8,9])))),ee=n.lazy((()=>x((()=>import("./index-CUnSiupj.js")),__vite__mapDeps([11,1,12,13,14])))),se=()=>{const e=g(),{mutate:s,isPending:l}=Y(),[o,i]=n.useState(!1),[t,r]=n.useState(""),[d,x]=n.useState({msg:"입력한 정보로 저장 하시겠습니까?",openDialog:!1}),p=F({initialValues:{serviceName:"",serviceCode:"",customerName:"",cpName:"",checkSubscriber:"N",checkCrossAuth:"N",serviceType:"N",roamCountryCheck:"N",smsSendDirectly:"N",smsSendMonthly:"N",smsCallbackNumber:"",smsContent:"",posConfig:{requiredAccuracy:"HIGH",requiredTimeout:"15",cellConfig:{use:"N",method:"CellID"},gnssConfig:{use:"N",plane:"CP",mode:"MSA",lppe:"N",lppRespTime:0},ksaConfig:{use:"N",ver:0,qos:{cell:"N",gnss:"N",wifi:"N",pres:"N",flp:"N",ble:"N",mag:"N",temp:"N",light:"N",act:"N"},count:0}}},validationSchema:B,onSubmit:e=>{const l={...e};s({...l},{onSuccess:({data:e})=>{r(`API RESULT : ${e.message}`)}})}}),v=()=>{x((e=>({...e,openDialog:!1})))};return a.jsxs(c,{children:[a.jsx(k,{title:"서비스 등록"}),a.jsx("form",{style:{width:"100%"},children:a.jsxs(c,{sx:Q.contentBox,children:[a.jsxs(c,{display:"flex",alignItems:"center",mb:2,children:[a.jsx(M,{}),a.jsx(u,{sx:{ml:1,fontSize:"16px",fontWeight:500,color:"text.darkgray"},children:"기본 정보"})]}),a.jsxs(u,{fontSize:"small",sx:{color:"text.darkgray"},children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"필수 입력입니다."]}),a.jsx(f,{sx:Q.table_info,children:a.jsxs(C,{children:[a.jsxs(m,{children:[a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"서비스명"]}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"serviceName",formik:p})}),a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"서비스코드"]}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"serviceCode",formik:p,editClick:()=>{i(!0)}})})]}),a.jsxs(m,{children:[a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"고객사"]}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"customerName",formik:p})}),a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"제공사"]}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"cpName",formik:p})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"가입자등록확인"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===p.values.checkSubscriber,onChange:e=>p.setFieldValue("checkSubscriber","Y"===e.target.value?"N":"Y"),label:"Y"===p.values.checkSubscriber?"적용":"미적용",value:p.values.checkSubscriber})}),a.jsx(j,{style:Q.cellTitle,children:"상호인증확인"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===p.values.checkCrossAuth,onChange:e=>p.setFieldValue("checkCrossAuth","Y"===e.target.value?"N":"Y"),label:"Y"===p.values.checkCrossAuth?"적용":"미적용",value:p.values.checkCrossAuth})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"서비스유형"}),a.jsx(j,{component:"td",children:a.jsx(V,{name:"serviceType",items:R(),formik:p,style:{height:"40px",width:"100%",fontSize:14,backgroundColor:"form.main",borderRadius:"4px"}})}),a.jsx(j,{style:Q.cellTitle,children:"로밍국가확인용"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===p.values.roamCountryCheck,onChange:e=>p.setFieldValue("roamCountryCheck","Y"===e.target.value?"N":"Y"),label:"Y"===p.values.roamCountryCheck?"적용":"미적용",value:p.values.roamCountryCheck})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"위치제공 즉시통지"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===p.values.smsSendDirectly,onChange:e=>p.setFieldValue("smsSendDirectly","Y"===e.target.value?"N":"Y"),label:"Y"===p.values.smsSendDirectly?"적용":"미적용",value:p.values.smsSendDirectly})}),a.jsx(j,{style:Q.cellTitle,children:"위치제공 월간통지"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===p.values.smsSendMonthly,onChange:e=>p.setFieldValue("smsSendMonthly","Y"===e.target.value?"N":"Y"),label:"Y"===p.values.smsSendMonthly?"적용":"미적용",value:p.values.smsSendMonthly})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"통지SMS콜백"}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"smsCallbackNumber",formik:p})}),a.jsx(j,{style:Q.cellTitle,children:"발송문구"}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"smsContent",formik:p})})]})]})}),a.jsxs(c,{display:"flex",alignItems:"center",mb:2,children:[a.jsx(M,{}),a.jsx(u,{sx:{ml:1,fontSize:"16px",fontWeight:500,color:"text.darkgray"},children:"측위 기능 설정"})]}),a.jsxs(u,{fontSize:"small",sx:{color:"text.darkgray"},children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"필수 입력입니다."]}),a.jsx(f,{sx:Q.table_set_base,children:a.jsx(C,{children:a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"희망 정확도"}),a.jsx(j,{component:"td",children:a.jsx(V,{name:"posConfig.requiredAccuracy",items:A(),formik:p,style:{height:"40px",width:"100%",fontSize:14,backgroundColor:"form.main",borderRadius:"4px"}})}),a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"희망 응답시간(초)"]}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"posConfig.requiredTimeout",formik:p})})]})})}),a.jsx(f,{sx:Q.table_set_option,children:a.jsxs(C,{children:[a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"기지국측위"}),a.jsx(j,{style:Q.cellTitle,children:"사용"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===p.values.posConfig.cellConfig.use,onChange:e=>p.setFieldValue("posConfig.cellConfig.use","Y"===e.target.value?"N":"Y"),label:"Y"===p.values.posConfig.cellConfig.use?"적용":"미적용",value:p.values.posConfig.cellConfig.use})}),a.jsx(j,{style:Q.cellTitle,children:"측위방법"}),a.jsx(j,{component:"td",children:a.jsx(V,{name:"posConfig.cellConfig.method",items:L(),formik:p,style:{height:"40px",fontSize:14,backgroundColor:"form.main",borderRadius:"4px"}})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,rowSpan:3,children:"위성 측위"}),a.jsx(j,{style:Q.cellTitle,children:"사용"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===p.values.posConfig.gnssConfig.use,onChange:e=>p.setFieldValue("posConfig.gnssConfig.use","Y"===e.target.value?"N":"Y"),label:"Y"===p.values.posConfig.gnssConfig.use?"적용":"미적용",value:p.values.posConfig.gnssConfig.use})}),a.jsx(j,{style:Q.cellTitle,children:"Plane"}),a.jsx(j,{component:"td",children:a.jsx(V,{name:"posConfig.gnssConfig.plane",items:P(),formik:p,style:{height:"40px",fontSize:14,backgroundColor:"form.main",borderRadius:"4px"}})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"Mode"}),a.jsx(j,{children:a.jsx(V,{name:"posConfig.gnssConfig.mode",items:I(),formik:p,style:{height:"40px",fontSize:14,backgroundColor:"form.main",borderRadius:"4px"}})}),a.jsx(j,{style:Q.cellTitle,children:"LPPe 사용"}),a.jsx(j,{children:a.jsx(E,{checked:"Y"===p.values.posConfig.gnssConfig.lppe,onChange:e=>p.setFieldValue("posConfig.gnssConfig.lppe","Y"===e.target.value?"N":"Y"),label:"Y"===p.values.posConfig.gnssConfig.lppe?"적용":"미적용",value:p.values.posConfig.gnssConfig.lppe})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"LPP 희망응답시간(초)"}),a.jsx(j,{children:a.jsx(z,{name:"posConfig.gnssConfig.lppRespTime",formik:p})}),a.jsx(j,{colSpan:2})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,rowSpan:3,children:"KSA"}),a.jsx(j,{style:Q.cellTitle,children:"사용"}),a.jsx(j,{children:a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.use,onChange:e=>p.setFieldValue("posConfig.ksaConfig.use","Y"===e.target.value?"N":"Y"),label:"Y"===p.values.posConfig.ksaConfig.use?"적용":"미적용",value:p.values.posConfig.ksaConfig.use})}),a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"버전"]}),a.jsx(j,{children:a.jsx(z,{name:"posConfig.ksaConfig.ver",formik:p})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"수집 정보"}),a.jsx(j,{colSpan:3,children:a.jsxs(H,{row:!0,children:[a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.qos.cell,onChange:e=>p.setFieldValue("posConfig.ksaConfig.qos.cell","Y"===e.target.value?"N":"Y"),value:p.values.posConfig.ksaConfig.qos.cell,label:"CELL"}),a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.qos.gnss,onChange:e=>p.setFieldValue("posConfig.ksaConfig.qos.gnss","Y"===e.target.value?"N":"Y"),value:p.values.posConfig.ksaConfig.qos.gnss,label:"GNSS"}),a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.qos.wifi,onChange:e=>p.setFieldValue("posConfig.ksaConfig.qos.wifi","Y"===e.target.value?"N":"Y"),value:p.values.posConfig.ksaConfig.qos.wifi,label:"WiFi"}),a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.qos.pres,onChange:e=>p.setFieldValue("posConfig.ksaConfig.qos.pres","Y"===e.target.value?"N":"Y"),value:p.values.posConfig.ksaConfig.qos.pres,label:"기압"}),a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.qos.flp,onChange:e=>p.setFieldValue("posConfig.ksaConfig.qos.flp","Y"===e.target.value?"N":"Y"),value:p.values.posConfig.ksaConfig.qos.flp,label:"FLP"}),a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.qos.ble,onChange:e=>p.setFieldValue("posConfig.ksaConfig.qos.ble","Y"===e.target.value?"N":"Y"),value:p.values.posConfig.ksaConfig.qos.ble,label:"BLE"}),a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.qos.mag,onChange:e=>p.setFieldValue("posConfig.ksaConfig.qos.mag","Y"===e.target.value?"N":"Y"),value:p.values.posConfig.ksaConfig.qos.mag,label:"MAG"}),a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.qos.temp,onChange:e=>p.setFieldValue("posConfig.ksaConfig.qos.temp","Y"===e.target.value?"N":"Y"),value:p.values.posConfig.ksaConfig.qos.temp,label:"TEMP"}),a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.qos.light,onChange:e=>p.setFieldValue("posConfig.ksaConfig.qos.light","Y"===e.target.value?"N":"Y"),value:p.values.posConfig.ksaConfig.qos.light,label:"LIGHT"}),a.jsx(E,{checked:"Y"===p.values.posConfig.ksaConfig.qos.act,onChange:e=>p.setFieldValue("posConfig.ksaConfig.qos.act","Y"===e.target.value?"N":"Y"),value:p.values.posConfig.ksaConfig.qos.act,label:"ACT"})]})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"수집 횟수"}),a.jsx(j,{children:a.jsx(z,{name:"posConfig.ksaConfig.count",formik:p})}),a.jsx(j,{colSpan:2})]})]})}),a.jsx(c,{align:"right",children:a.jsxs(h,{spacing:2,direction:"row",sx:{justifyContent:"flex-end"},children:[a.jsx(b,{disabled:l,name:"list",title:"취소",onClick:()=>e("/system/service-list")}),a.jsx(b,{disabled:l,name:"create",title:"저장",onClick:()=>{x((e=>({...e,openDialog:!0})))}})]})})]})}),d.openDialog&&a.jsx(n.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:a.jsx(Z,{isOpen:d.openDialog,content:d.msg,onCancel:v,onConfirm:()=>{p.handleSubmit(),v()}})}),t&&a.jsx(n.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:a.jsx(ee,{msg:t,autoHideDuration:3e3,callback:()=>e("/system/service-list")})}),o&&a.jsx(n.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:a.jsx(X,{isOpen:o,title:"서비스 코드 중복 체크",onCancel:()=>i(!1),onConfirm:e=>{i(!1),p.setFieldValue("serviceCode",e)}})})]})},le=()=>a.jsx(a.Fragment,{children:a.jsx(se,{})}),oe=n.lazy((()=>x((()=>import("./index-BICb5xO3.js")),__vite__mapDeps([10,1,8,9])))),ne=n.lazy((()=>x((()=>import("./index-CUnSiupj.js")),__vite__mapDeps([11,1,12,13,14])))),ie=()=>{var e,s,l,o,i,t,r,d,x,v,y,S,Y,w,q,D,_,G,O,W,$,U,K,J,X,Z,ee,se,le,ie,te,ae,re,de,ce,ue,ge,xe,he,pe,fe,Ce,me,je,ve,ke,be,ye;const{state:{row:Se}}=p(),Ye=g(),{mutate:Ne,isPending:Te}=N(),{mutate:we,isPending:qe}=T(),[Fe,Ve]=n.useState(""),[ze,De]=n.useState({edit:!1,delete:!1,msg:"",openDialog:!1}),_e=F({initialValues:{serviceName:null==Se?void 0:Se.serviceName,serviceCode:null==Se?void 0:Se.serviceCode,customerName:null==Se?void 0:Se.customerName,cpName:null==Se?void 0:Se.cpName,checkSubscriber:(null==Se?void 0:Se.checkSubscriber)||"N",checkCrossAuth:(null==Se?void 0:Se.checkCrossAuth)||"N",serviceType:(null==Se?void 0:Se.serviceType)||"N",roamCountryCheck:(null==Se?void 0:Se.roamCountryCheck)||"N",smsSendDirectly:(null==Se?void 0:Se.smsSendDirectly)||"N",smsSendMonthly:(null==Se?void 0:Se.smsSendMonthly)||"N",smsCallbackNumber:null==Se?void 0:Se.smsCallbackNumber,smsContent:null==Se?void 0:Se.smsContent,posConfig:{requiredAccuracy:(null==(e=null==Se?void 0:Se.posConfig)?void 0:e.requiredAccuracy)||"HIGH",requiredTimeout:(null==(s=null==Se?void 0:Se.posConfig)?void 0:s.requiredTimeout)||"15",cellConfig:{use:(null==Se?void 0:Se.posConfig.cellConfig.use)||"N",method:(null==Se?void 0:Se.posConfig.cellConfig.method)||"CellID"},gnssConfig:{use:(null==(o=null==(l=null==Se?void 0:Se.posConfig)?void 0:l.gnssConfig)?void 0:o.use)||"N",plane:(null==(t=null==(i=null==Se?void 0:Se.posConfig)?void 0:i.gnssConfig)?void 0:t.plane)||"CP",mode:(null==(d=null==(r=null==Se?void 0:Se.posConfig)?void 0:r.gnssConfig)?void 0:d.mode)||"MSA",lppe:(null==(v=null==(x=null==Se?void 0:Se.posConfig)?void 0:x.gnssConfig)?void 0:v.lppe)||"N",lppRespTime:(null==(S=null==(y=null==Se?void 0:Se.posConfig)?void 0:y.gnssConfig)?void 0:S.lppRespTime)||0},ksaConfig:{use:(null==(w=null==(Y=null==Se?void 0:Se.posConfig)?void 0:Y.ksaConfig)?void 0:w.use)||"N",ver:(null==(D=null==(q=null==Se?void 0:Se.posConfig)?void 0:q.ksaConfig)?void 0:D.ver)||0,qos:{cell:(null==(O=null==(G=null==(_=null==Se?void 0:Se.posConfig)?void 0:_.ksaConfig)?void 0:G.qos)?void 0:O.cell)||"N",gnss:(null==(U=null==($=null==(W=null==Se?void 0:Se.posConfig)?void 0:W.ksaConfig)?void 0:$.qos)?void 0:U.gnss)||"N",wifi:(null==(X=null==(J=null==(K=null==Se?void 0:Se.posConfig)?void 0:K.ksaConfig)?void 0:J.qos)?void 0:X.wifi)||"N",pres:(null==(se=null==(ee=null==(Z=null==Se?void 0:Se.posConfig)?void 0:Z.ksaConfig)?void 0:ee.qos)?void 0:se.pres)||"N",flp:(null==(te=null==(ie=null==(le=null==Se?void 0:Se.posConfig)?void 0:le.ksaConfig)?void 0:ie.qos)?void 0:te.flp)||"N",ble:(null==(de=null==(re=null==(ae=null==Se?void 0:Se.posConfig)?void 0:ae.ksaConfig)?void 0:re.qos)?void 0:de.ble)||"N",mag:(null==(ge=null==(ue=null==(ce=null==Se?void 0:Se.posConfig)?void 0:ce.ksaConfig)?void 0:ue.qos)?void 0:ge.mag)||"N",temp:(null==(pe=null==(he=null==(xe=null==Se?void 0:Se.posConfig)?void 0:xe.ksaConfig)?void 0:he.qos)?void 0:pe.temp)||"N",light:(null==(me=null==(Ce=null==(fe=null==Se?void 0:Se.posConfig)?void 0:fe.ksaConfig)?void 0:Ce.qos)?void 0:me.light)||"N",act:(null==(ke=null==(ve=null==(je=null==Se?void 0:Se.posConfig)?void 0:je.ksaConfig)?void 0:ve.qos)?void 0:ke.act)||"N"},count:(null==(ye=null==(be=null==Se?void 0:Se.posConfig)?void 0:be.ksaConfig)?void 0:ye.count)||0}}},validationSchema:B,onSubmit:e=>{const s={...e};Ne({...s},{onSuccess:({data:e})=>{Ve(`UPDATE API RESULT : ${null==e?void 0:e.data}`)}})},onReset:e=>{}}),Re=()=>{De({edit:!1,delete:!1,msg:"",openDialog:!1})};return a.jsxs(c,{children:[a.jsx(k,{title:"서비스 수정"}),a.jsx("form",{onSubmit:_e.handleSubmit,style:{width:"100%"},children:a.jsxs(c,{sx:Q.contentBox,children:[a.jsxs(c,{display:"flex",alignItems:"center",mb:2,children:[a.jsx(M,{}),a.jsx(u,{sx:{ml:1,fontSize:"16px",fontWeight:500,color:"text.darkgray"},children:"기본 정보"})]}),a.jsxs(u,{fontSize:"small",sx:{color:"text.darkgray"},children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"필수 입력입니다."]}),a.jsx(f,{sx:Q.table_info,children:a.jsxs(C,{children:[a.jsxs(m,{children:[a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"서비스명"]}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"serviceName",formik:_e})}),a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"서비스코드"]}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"serviceCode",formik:_e,IsDisabled:!0})})]}),a.jsxs(m,{children:[a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"고객사"]}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"customerName",formik:_e})}),a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"제공사"]}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"cpName",formik:_e})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"가입자등록확인"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===_e.values.checkSubscriber,onChange:e=>_e.setFieldValue("checkSubscriber","Y"===e.target.value?"N":"Y"),label:"Y"===_e.values.checkSubscriber?"적용":"미적용",value:_e.values.checkSubscriber})}),a.jsx(j,{style:Q.cellTitle,children:"상호인증확인"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===_e.values.checkCrossAuth,onChange:e=>_e.setFieldValue("checkCrossAuth","Y"===e.target.value?"N":"Y"),label:"Y"===_e.values.checkCrossAuth?"적용":"미적용",value:_e.values.checkCrossAuth})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"서비스유형"}),a.jsx(j,{component:"td",children:a.jsx(V,{name:"serviceType",items:R(),formik:_e,style:{height:"40px",width:"100%",fontSize:14,backgroundColor:"form.main",borderRadius:"4px"}})}),a.jsx(j,{style:Q.cellTitle,children:"로밍국가확인용"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===_e.values.roamCountryCheck,onChange:e=>_e.setFieldValue("roamCountryCheck","Y"===e.target.value?"N":"Y"),label:"Y"===_e.values.roamCountryCheck?"적용":"미적용",value:_e.values.roamCountryCheck})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"위치제공 즉시통지"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===_e.values.smsSendDirectly,onChange:e=>_e.setFieldValue("smsSendDirectly","Y"===e.target.value?"N":"Y"),label:"Y"===_e.values.smsSendDirectly?"적용":"미적용",value:_e.values.smsSendDirectly})}),a.jsx(j,{style:Q.cellTitle,children:"위치제공 월간통지"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===_e.values.smsSendMonthly,onChange:e=>_e.setFieldValue("smsSendMonthly","Y"===e.target.value?"N":"Y"),label:"Y"===_e.values.smsSendMonthly?"적용":"미적용",value:_e.values.smsSendMonthly})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"통지SMS콜백"}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"smsCallbackNumber",formik:_e})}),a.jsx(j,{style:Q.cellTitle,children:"발송문구"}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"smsContent",formik:_e})})]})]})}),a.jsxs(c,{display:"flex",alignItems:"center",mb:2,children:[a.jsx(M,{}),a.jsx(u,{sx:{ml:1,fontSize:"16px",fontWeight:500,color:"text.darkgray"},children:"측위 기능 설정"})]}),a.jsxs(u,{fontSize:"small",sx:{color:"text.darkgray"},children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"필수 입력입니다."]}),a.jsx(f,{sx:Q.table_set_base,children:a.jsx(C,{children:a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"희망 정확도"}),a.jsx(j,{component:"td",children:a.jsx(V,{name:"posConfig.requiredAccuracy",items:A(),formik:_e,style:{height:"40px",width:"100%",fontSize:14,backgroundColor:"form.main",borderRadius:"4px"}})}),a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"희망 응답시간(초)"]}),a.jsx(j,{component:"td",children:a.jsx(z,{name:"posConfig.requiredTimeout",formik:_e})})]})})}),a.jsx(f,{sx:Q.table_set_option,children:a.jsxs(C,{children:[a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"기지국측위"}),a.jsx(j,{style:Q.cellTitle,children:"사용"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===_e.values.posConfig.cellConfig.use,onChange:e=>_e.setFieldValue("posConfig.cellConfig.use","Y"===e.target.value?"N":"Y"),label:"Y"===_e.values.posConfig.cellConfig.use?"적용":"미적용",value:_e.values.posConfig.cellConfig.use})}),a.jsx(j,{style:Q.cellTitle,children:"측위방법"}),a.jsx(j,{component:"td",children:a.jsx(V,{name:"posConfig.cellConfig.method",items:L(),formik:_e,style:{height:"40px",fontSize:14,backgroundColor:"form.main",borderRadius:"4px"}})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,rowSpan:3,children:"위성 측위"}),a.jsx(j,{style:Q.cellTitle,children:"사용"}),a.jsx(j,{component:"td",children:a.jsx(E,{checked:"Y"===_e.values.posConfig.gnssConfig.use,onChange:e=>_e.setFieldValue("posConfig.gnssConfig.use","Y"===e.target.value?"N":"Y"),label:"Y"===_e.values.posConfig.gnssConfig.use?"적용":"미적용",value:_e.values.posConfig.gnssConfig.use})}),a.jsx(j,{style:Q.cellTitle,children:"Plane"}),a.jsx(j,{component:"td",children:a.jsx(V,{name:"posConfig.gnssConfig.plane",items:P(),formik:_e,style:{height:"40px",fontSize:14,backgroundColor:"form.main",borderRadius:"4px"}})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"Mode"}),a.jsx(j,{children:a.jsx(V,{name:"posConfig.gnssConfig.mode",items:I(),formik:_e,style:{height:"40px",fontSize:14,backgroundColor:"form.main",borderRadius:"4px"}})}),a.jsx(j,{style:Q.cellTitle,children:"LPPe 사용"}),a.jsx(j,{children:a.jsx(E,{checked:"Y"===_e.values.posConfig.gnssConfig.lppe,onChange:e=>_e.setFieldValue("posConfig.gnssConfig.lppe","Y"===e.target.value?"N":"Y"),label:"Y"===_e.values.posConfig.gnssConfig.lppe?"적용":"미적용",value:_e.values.posConfig.gnssConfig.lppe})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"LPP 희망응답시간(초)"}),a.jsx(j,{children:a.jsx(z,{name:"posConfig.gnssConfig.lppRespTime",formik:_e})}),a.jsx(j,{colSpan:2})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,rowSpan:3,children:"KSA"}),a.jsx(j,{style:Q.cellTitle,children:"사용"}),a.jsx(j,{children:a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.use,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.use","Y"===e.target.value?"N":"Y"),label:"Y"===_e.values.posConfig.ksaConfig.use?"적용":"미적용",value:_e.values.posConfig.ksaConfig.use})}),a.jsxs(j,{style:Q.cellTitle,children:[a.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"버전"]}),a.jsx(j,{children:a.jsx(z,{name:"posConfig.ksaConfig.ver",formik:_e})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"수집 정보"}),a.jsx(j,{colSpan:3,children:a.jsxs(H,{row:!0,children:[a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.qos.cell,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.qos.cell","Y"===e.target.value?"N":"Y"),value:_e.values.posConfig.ksaConfig.qos.cell,label:"CELL"}),a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.qos.gnss,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.qos.gnss","Y"===e.target.value?"N":"Y"),value:_e.values.posConfig.ksaConfig.qos.gnss,label:"GNSS"}),a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.qos.wifi,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.qos.wifi","Y"===e.target.value?"N":"Y"),value:_e.values.posConfig.ksaConfig.qos.wifi,label:"WiFi"}),a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.qos.pres,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.qos.pres","Y"===e.target.value?"N":"Y"),value:_e.values.posConfig.ksaConfig.qos.pres,label:"기압"}),a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.qos.flp,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.qos.flp","Y"===e.target.value?"N":"Y"),value:_e.values.posConfig.ksaConfig.qos.flp,label:"FLP"}),a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.qos.ble,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.qos.ble","Y"===e.target.value?"N":"Y"),value:_e.values.posConfig.ksaConfig.qos.ble,label:"BLE"}),a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.qos.mag,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.qos.mag","Y"===e.target.value?"N":"Y"),value:_e.values.posConfig.ksaConfig.qos.mag,label:"MAG"}),a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.qos.temp,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.qos.temp","Y"===e.target.value?"N":"Y"),value:_e.values.posConfig.ksaConfig.qos.temp,label:"TEMP"}),a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.qos.light,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.qos.light","Y"===e.target.value?"N":"Y"),value:_e.values.posConfig.ksaConfig.qos.light,label:"LIGHT"}),a.jsx(E,{checked:"Y"===_e.values.posConfig.ksaConfig.qos.act,onChange:e=>_e.setFieldValue("posConfig.ksaConfig.qos.act","Y"===e.target.value?"N":"Y"),value:_e.values.posConfig.ksaConfig.qos.act,label:"ACT"})]})})]}),a.jsxs(m,{children:[a.jsx(j,{style:Q.cellTitle,children:"수집 횟수"}),a.jsx(j,{children:a.jsx(z,{name:"posConfig.ksaConfig.count",formik:_e})}),a.jsx(j,{colSpan:2})]})]})}),a.jsx(c,{align:"right",children:a.jsxs(h,{spacing:2,direction:"row",sx:{justifyContent:"flex-end"},children:[a.jsx(b,{disabled:Te,name:"cancel",title:"목록",onClick:()=>Ye("/system/service-list")}),a.jsx(b,{disabled:Te,name:"edit",title:"수정",onClick:()=>{De((e=>({...e,edit:!0,msg:"수정한 정보로 저장 하시겠습니까?",openDialog:!0})))}}),a.jsx(b,{disabled:qe,name:"delete",title:"삭제",onClick:()=>{De((e=>({...e,delete:!0,msg:"삭제하면 복구가 불가능합니다. 삭제 하시겠습니까?",openDialog:!0})))}})]})})]})}),ze.openDialog&&a.jsx(n.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:a.jsx(oe,{isOpen:ze.openDialog,content:ze.msg,onCancel:Re,onConfirm:()=>{ze.edit&&_e.handleSubmit(),ze.delete&&(we({serviceCode:null==Se?void 0:Se.serviceCode},{onSuccess:({data:e})=>{Ve(`DELETE API RESULT : ${null==e?void 0:e.data}`)}}),Re()),Re()}})}),Fe&&a.jsx(n.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:a.jsx(ne,{msg:Fe,autoHideDuration:3e3,callback:()=>Ye("/system/service-list")})})]})},te=()=>a.jsx(a.Fragment,{children:a.jsx(ie,{})});export{te as ServiceEditPage,J as ServiceListPage,le as ServiceRegistPage};
