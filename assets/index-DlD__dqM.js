function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C2b5Mhwa.js","assets/index-Zwjsjf_e.js","assets/cjs-D8lu4uGd.js","assets/index-DxA-rrMr.js","assets/index-MjI-a-Aq.js","assets/index-DOeUa9Au.js","assets/useSlot-DiK3vQJX.js","assets/Close-DdxGh4K7.js","assets/SearchPopup-B95JK52Q.js","assets/index-CIhg3QXE.js","assets/index-D9xLZxGV.js","assets/TextField-C_ArUhJ2.js","assets/formik.esm-DxgWIguA.js","assets/InputAdornment-BudvL8JH.js","assets/system-CTpelrAU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as e,B as g,T as f,r as t,N as E,O as $,o as oe,p as ie,S as O,Y as te}from"./index-Zwjsjf_e.js";import{b as U,c as T,d as c,e as s,M as B,a as H,f as R}from"./index-CIhg3QXE.js";import{C as ae}from"./index-DDWb-XS6.js";import{j as re,k as ne,l as de,m as ce}from"./system-CTpelrAU.js";import{u as W}from"./formik.esm-DxgWIguA.js";import{T as k}from"./index-D9xLZxGV.js";import{d as A}from"./Create-DOL2MdlR.js";import{C as x}from"./index-DXlJ_WV9.js";import{b as ge,d as pe}from"./validationSchema-Bo-qcoz5.js";import"./index-DxA-rrMr.js";import"./index-DOeUa9Au.js";import"./TextField-C_ArUhJ2.js";import"./MenuItem-B4bxXtLY.js";import"./Close-DdxGh4K7.js";import"./FormControlLabel-BYqcm0yL.js";import"./InputAdornment-BudvL8JH.js";import"./index.esm-Bb6TRupK.js";const M={searchBox:{display:"flex",justifyContent:"space-between",width:"100%",borderRadius:"8px",mb:"10px",p:"16px 20px",backgroundColor:"grey.search",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},tableBox:{width:"100%",th:{border:0,color:"text.darkgray",p:"3px 10px 3px 0","&:nth-of-type(even)":{pr:"20px"}},input:{height:"40px",pt:0,pb:0}},searchButton:{fontSize:15,fontWeight:400,width:"69px",height:"40px",minWidth:"auto",backgroundColor:"button.main",padding:"6px"},inputDash:{fontSize:15,display:"flex",alignItems:"center"},cellTitle:{width:"100px"},cellInput:{width:"300px"}};function xe({onSearch:n}){const m=W({initialValues:{modelCode:""},onSubmit:j=>{n&&n(j)}});return e.jsx(g,{sx:M.searchBox,children:e.jsx(U,{sx:M.tableBox,children:e.jsx(T,{children:e.jsxs(c,{children:[e.jsx(s,{sx:M.cellTitle,children:"모델 코드"}),e.jsx(s,{sx:M.cellInput,children:e.jsx(k,{name:"modelCode",formik:m,sx:{width:"100%"}})}),e.jsx(s,{align:"right",children:e.jsx(B,{name:"search",title:"검색",onClick:m.handleSubmit})})]})})})})}const fe=[{field:"id",headerName:"ID",flex:.8,renderCell:n=>e.jsx(f,{children:n.row.id})},{field:"modelCode",headerName:"모델코드",flex:1.2,renderCell:n=>e.jsx(f,{color:"primary",children:n.row.modelCode})},{field:"note",headerName:"비고",flex:2,renderCell:n=>e.jsx(f,{children:n.row.note})},{field:"regDate",headerName:"등록일시",flex:1.5,renderCell:n=>e.jsx(f,{children:n.row.regDate})},{field:"updDate",headerName:"변경일시",flex:1.5,renderCell:n=>e.jsx(f,{children:n.row.updDate})}],ue=t.lazy(()=>E(()=>import("./index-C2b5Mhwa.js"),__vite__mapDeps([0,1,2,3]))),he=t.lazy(()=>E(()=>import("./index-MjI-a-Aq.js"),__vite__mapDeps([4,1,5,6,7]))),Ce=()=>{const n=$(),[m,j]=t.useState(!1),[S,b]=t.useState(!0),[r,y]=t.useState({count:0,lists:[]}),[u,v]=t.useState({page:1,limit:parseInt("50"),cache:Math.random()}),{data:p,refetch:o}=re(u,{enabled:S}),[l,I]=t.useState({modelCode:[]}),{mutate:N,isPending:D}=ne(),[F,_]=t.useState(""),i=d=>{y({count:0,lists:[]}),v({...u,...d,page:1}),b(!0)},h=({row:d})=>{n("/system/ue-edit",{state:{row:d}})},C=d=>{const Y=r.lists.filter(P=>d.includes(P.id));I({modelCode:[...Y.map(P=>P.modelCode)]})},V=d=>{const Y=parseInt("10"),P=(d+1)*Y;d>0&&P>=r.lists.length&&(v({...u,page:u.page+1}),b(!0))},w=()=>{l.modelCode.length>0&&console.log("deleteUEs : ",l),j(!1),N({...l},{onSuccess:({data:d})=>{console.log("Delete Response : ",d),_(`DELETE API RESULT : ${d==null?void 0:d.data}`),(d==null?void 0:d.code)==="0000"&&(y({count:0,lists:[]}),b(!0),o({...u,queryKey:"refresh-ues"}))}})};return t.useEffect(()=>{if(S&&p&&(p==null?void 0:p.code)==="0000"){const{totalCount:d,lists:Y}=p==null?void 0:p.data;b(!1),y({count:d,lists:[...r.lists,...Y]})}},[p,u]),e.jsxs(g,{children:[e.jsx(H,{title:"단말 모델 관리"}),e.jsx(xe,{onSearch:i}),e.jsxs(g,{sx:{width:"100%",borderRadius:"8px",p:"18px 20px",backgroundColor:"background.contents",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},children:[e.jsxs(g,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(f,{sx:{fontSize:"14px"},children:`Total Count: ${r.count}`}),e.jsxs(g,{sx:{display:"flex",justifyContent:"space-between",gap:2},children:[e.jsx(B,{disabled:l.modelCode.length?D:!0,name:"delete",title:"선택 삭제",onClick:()=>j(!0)}),e.jsx(B,{disabled:D,name:"create",title:"모델 등록",onClick:()=>n("/system/ue-regist",{state:{row:"acro0720"}})})]})]}),e.jsx(ae,{checkboxSelection:!0,rows:r==null?void 0:r.lists,rowCount:r==null?void 0:r.count,columns:fe,sort:{field:"id",orderby:"desc"},onPageChange:V,onRowClick:h,onRowSelectionChange:C,pageInit:u.page===1})]}),m&&e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(ue,{isOpen:m,content:"삭제하면 복구가 불가능합니다. 삭제 하시겠습니까?",onCancel:()=>j(!1),onConfirm:w})}),F&&e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(he,{msg:F,autoHideDuration:3e3,callback:()=>{_("")}})})]})},qe=Ce;var q={},me=ie;Object.defineProperty(q,"__esModule",{value:!0});var le=q.default=void 0,je=me(oe()),be=e;le=q.default=(0,je.default)((0,be.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"HighlightOffOutlined");const L={contentBox:{width:"100%",borderRadius:"8px",p:"18px 20px",backgroundColor:"background.contents",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},table_info:{width:"80%",mb:3,th:{width:"20%",border:"1px solid",borderColor:"table.viewTopBorder"},td:{pt:1,pb:1,width:"70%",border:"1px solid",borderColor:"table.viewTopBorder"},tr:{"& th:first-of-type":{borderLeft:"none"},"& th:last-child":{borderRight:"none"},"& td:last-child":{borderRight:"none"}}},table_set_option:{mb:3,th:{pt:1,pb:1,width:"20%",border:"1px solid",borderColor:"table.viewTopBorder"},td:{pt:1,pb:1,width:"20%",border:"1px solid",borderColor:"table.viewTopBorder"},tr:{"& th:first-of-type":{borderLeft:"none"},"& th:last-child":{borderRight:"none"},"& td:last-child":{borderRight:"none"}}}},ve=t.lazy(()=>E(()=>import("./SearchPopup-B95JK52Q.js"),__vite__mapDeps([8,1,9,10,11,12,13,14,2,3]))),Se=t.lazy(()=>E(()=>import("./index-C2b5Mhwa.js"),__vite__mapDeps([0,1,2,3]))),ye=t.lazy(()=>E(()=>import("./index-MjI-a-Aq.js"),__vite__mapDeps([4,1,5,6,7]))),ke=()=>{const n=$(),{mutate:m,isPending:j}=de(),[S,b]=t.useState(!1),[r,y]=t.useState([]),[u,v]=t.useState(""),[p,o]=t.useState({msg:"입력한 정보로 저장 하시겠습니까?",openDialog:!1}),l=W({initialValues:{modelCode:[],tmpModelCode:"",note:"",posConfig:{cellConfig:{lpp:"N",lppa:"N"},gnssConfig:{msa:"N",msb:"N",cp:"N",lppe:"N",suplVer:"1.0",tls:"N",emergencyFlag:"N"},ksaConfig:{ver:0}}},validationSchema:ge,onSubmit:i=>{const h={...i,modelCode:[...r.map(C=>C.modelCode)]};delete h.tmpModelCode,console.log("onSubmit >> ",JSON.stringify(h,null,2)),m({...h},{onSuccess:({data:C})=>{console.log("response : ",C),v(`CREATE API RESULT : ${C==null?void 0:C.data}`)}})}}),I=()=>{o(i=>({...i,openDialog:!0}))},N=()=>{console.log("handleFormikSubmit.."),l.handleSubmit(),D()},D=()=>{o(i=>({...i,openDialog:!1}))},F=i=>{console.log("UE : ",i),y(h=>[{id:Date.now(),modelCode:i},...h])},_=i=>{y([...r.filter(h=>h.id!=i)])};return e.jsxs(g,{children:[e.jsx(H,{title:"단말 모델 등록"}),e.jsx("form",{style:{width:"100%"},children:e.jsxs(g,{sx:L.contentBox,children:[e.jsxs(g,{display:"flex",alignItems:"center",mb:2,children:[e.jsx(A,{}),e.jsx(f,{sx:{ml:1,fontSize:"16px",fontWeight:500,color:"text.darkgray"},children:"기본 정보"})]}),e.jsxs(f,{fontSize:"small",sx:{color:"text.darkgray"},children:[e.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"필수 입력입니다."]}),e.jsx(U,{sx:L.table_info,children:e.jsxs(T,{children:[e.jsxs(c,{children:[e.jsxs(s,{rowSpan:2,children:[e.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"모델 코드"]}),e.jsx(s,{component:"td",children:e.jsxs(O,{direction:"row",gap:1,alignItems:"center",children:[e.jsx(k,{name:"tmpModelCode",formik:l,editClick:()=>b(!0)}),e.jsx(f,{color:"primary",sx:{textAlign:"right",width:"30%"},children:(r==null?void 0:r.length)>0?`${r[0].modelCode} 포함 총 ${r.length}종`:""})]})})]}),e.jsx(c,{children:e.jsx(s,{component:"td",children:e.jsx(g,{sx:{height:"160px",overflow:"auto",border:"1px solid",borderRadius:"4px",borderColor:"table.viewTopBorder"},children:r==null?void 0:r.map(i=>e.jsxs(g,{sx:{width:"50%",margin:"4px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(f,{sx:{mt:0,mb:0},children:i.modelCode}),i.id&&e.jsx(le,{onClick:()=>_(i.id),sx:{color:"gray"}})]},i.id))})})}),e.jsxs(c,{children:[e.jsx(s,{children:"비고"}),e.jsx(s,{component:"td",colSpan:3,children:e.jsx(k,{name:"note",formik:l})})]})]})}),e.jsxs(g,{display:"flex",alignItems:"center",mb:2,children:[e.jsx(A,{}),e.jsx(f,{sx:{ml:1,fontSize:"16px",fontWeight:500,color:"text.darkgray"},children:"측위 기능 설정"})]}),e.jsxs(f,{fontSize:"small",sx:{color:"text.darkgray"},children:[e.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"필수 입력입니다."]}),e.jsx(U,{sx:L.table_set_option,children:e.jsxs(T,{children:[e.jsxs(c,{children:[e.jsx(s,{children:"기지국측위"}),e.jsx(s,{children:"LPP-ECID"}),e.jsx(s,{component:"td",children:e.jsx(x,{checked:l.values.posConfig.cellConfig.lpp==="Y",onChange:i=>{l.setFieldValue("posConfig.cellConfig.lpp",i.target.value==="Y"?"N":"Y")},label:l.values.posConfig.cellConfig.lpp==="Y"?"적용":"미적용",value:l.values.posConfig.cellConfig.lpp})}),e.jsx(s,{children:"LPPa-ECID"}),e.jsx(s,{component:"td",children:e.jsx(x,{checked:l.values.posConfig.cellConfig.lppa==="Y",onChange:i=>{l.setFieldValue("posConfig.cellConfig.lppa",i.target.value==="Y"?"N":"Y")},label:l.values.posConfig.cellConfig.lppa==="Y"?"적용":"미적용",value:l.values.posConfig.cellConfig.lppa})})]}),e.jsxs(c,{children:[e.jsx(s,{rowSpan:4,children:"위성 측위"}),e.jsx(s,{children:"MSA"}),e.jsx(s,{component:"td",children:e.jsx(x,{checked:l.values.posConfig.gnssConfig.msa==="Y",onChange:i=>{l.setFieldValue("posConfig.gnssConfig.msa",i.target.value==="Y"?"N":"Y")},label:l.values.posConfig.gnssConfig.msa==="Y"?"적용":"미적용",value:l.values.posConfig.gnssConfig.msa})}),e.jsx(s,{children:"MSB"}),e.jsx(s,{component:"td",children:e.jsx(x,{checked:l.values.posConfig.gnssConfig.msb==="Y",onChange:i=>{l.setFieldValue("posConfig.gnssConfig.msb",i.target.value==="Y"?"N":"Y")},label:l.values.posConfig.gnssConfig.msb==="Y"?"적용":"미적용",value:l.values.posConfig.gnssConfig.msb})})]}),e.jsxs(c,{children:[e.jsx(s,{children:"CP"}),e.jsx(s,{children:e.jsx(x,{checked:l.values.posConfig.gnssConfig.cp==="Y",onChange:i=>{l.setFieldValue("posConfig.gnssConfig.cp",i.target.value==="Y"?"N":"Y")},label:l.values.posConfig.gnssConfig.cp==="Y"?"적용":"미적용",value:l.values.posConfig.gnssConfig.cp})}),e.jsx(s,{children:"LPPe"}),e.jsx(s,{children:e.jsx(x,{checked:l.values.posConfig.gnssConfig.lppe==="Y",onChange:i=>{l.setFieldValue("posConfig.gnssConfig.lppe",i.target.value==="Y"?"N":"Y")},label:l.values.posConfig.gnssConfig.lppe==="Y"?"적용":"미적용",value:l.values.posConfig.gnssConfig.lppe})})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"SUPL ver"]}),e.jsx(s,{children:e.jsx(k,{name:"posConfig.gnssConfig.suplVer",formik:l})}),e.jsx(s,{children:"SUPL TLS"}),e.jsx(s,{children:e.jsx(x,{checked:l.values.posConfig.gnssConfig.tls==="Y",onChange:i=>{l.setFieldValue("posConfig.gnssConfig.tls",i.target.value==="Y"?"N":"Y")},label:l.values.posConfig.gnssConfig.tls==="Y"?"적용":"미적용",value:l.values.posConfig.gnssConfig.tls})})]}),e.jsxs(c,{children:[e.jsx(s,{children:"SUPL Emergency Flag"}),e.jsx(s,{children:e.jsx(x,{checked:l.values.posConfig.gnssConfig.emergencyFlag==="Y",onChange:i=>{l.setFieldValue("posConfig.gnssConfig.emergencyFlag",i.target.value==="Y"?"N":"Y")},label:l.values.posConfig.gnssConfig.emergencyFlag==="Y"?"적용":"미적용",value:l.values.posConfig.gnssConfig.emergencyFlag})}),e.jsx(s,{colSpan:2})]}),e.jsxs(c,{children:[e.jsx(s,{rowSpan:3,children:"KSA"}),e.jsxs(s,{children:[e.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"Ver"]}),e.jsx(s,{children:e.jsx(k,{name:"posConfig.ksaConfig.ver",formik:l})}),e.jsx(s,{colSpan:2})]})]})}),e.jsx(g,{align:"right",children:e.jsxs(O,{spacing:2,direction:"row",sx:{justifyContent:"flex-end"},children:[e.jsx(R,{disabled:j,name:"list",title:"취소",onClick:()=>n("/system/ue/list")}),e.jsx(R,{disabled:j,name:"create",title:"저장",onClick:I})]})})]})}),p.openDialog&&e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(Se,{isOpen:p.openDialog,content:p.msg,onCancel:D,onConfirm:N})}),u&&e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(ye,{msg:u,autoHideDuration:3e3,callback:()=>n("/system/ue-list")})}),S&&e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(ve,{isOpen:S,title:"단말 코드 중복 체크",onCancel:()=>b(!1),onConfirm:i=>{b(!1),F(i)}})})]})},Ye=()=>e.jsx(e.Fragment,{children:e.jsx(ke,{})}),Ke=Ye,Pe=t.lazy(()=>E(()=>import("./index-C2b5Mhwa.js"),__vite__mapDeps([0,1,2,3]))),De=t.lazy(()=>E(()=>import("./index-MjI-a-Aq.js"),__vite__mapDeps([4,1,5,6,7]))),_e=()=>{var _,i,h,C,V,w,d,Y,P,K,Q,G,J,X,Z,ee;const{state:{row:n}}=te(),m=$(),{mutate:j,isPending:S}=ne(),{mutate:b,isPending:r}=ce(),[y,u]=t.useState(""),[v,p]=t.useState({edit:!1,delete:!1,msg:"",openDialog:!1}),o=W({initialValues:{modelCode:n==null?void 0:n.modelCode,note:n==null?void 0:n.note,posConfig:{cellConfig:{lpp:(n==null?void 0:n.posConfig.cellConfig.lpp)||"N",lppa:(n==null?void 0:n.posConfig.cellConfig.lppa)||"N"},gnssConfig:{msa:((i=(_=n==null?void 0:n.posConfig)==null?void 0:_.gnssConfig)==null?void 0:i.msa)||"N",msb:((C=(h=n==null?void 0:n.posConfig)==null?void 0:h.gnssConfig)==null?void 0:C.msb)||"N",cp:((w=(V=n==null?void 0:n.posConfig)==null?void 0:V.gnssConfig)==null?void 0:w.cp)||"N",lppe:((Y=(d=n==null?void 0:n.posConfig)==null?void 0:d.gnssConfig)==null?void 0:Y.lppe)||"N",suplVer:(K=(P=n==null?void 0:n.posConfig)==null?void 0:P.gnssConfig)==null?void 0:K.suplVer,tls:((G=(Q=n==null?void 0:n.posConfig)==null?void 0:Q.gnssConfig)==null?void 0:G.tls)||"N",emergencyFlag:((X=(J=n==null?void 0:n.posConfig)==null?void 0:J.gnssConfig)==null?void 0:X.emergencyFlag)||"N"},ksaConfig:{ver:((ee=(Z=n==null?void 0:n.posConfig)==null?void 0:Z.ksaConfig)==null?void 0:ee.ver)||0}}},validationSchema:pe,onSubmit:a=>{console.log("handleFormikSubmit..");const se={...a};console.log("onSubmit >> ",JSON.stringify(se,null,2)),b({...se},{onSuccess:({data:z})=>{console.log("update-response : ",z),u(`UPDATE API RESULT : ${z==null?void 0:z.data}`)}})}}),l=()=>{console.log("handleDeleteSubmit..."),j({modelCode:[n==null?void 0:n.modelCode]},{onSuccess:({data:a})=>{console.log("delete-response : ",a),u(`DELETE API RESULT : ${a==null?void 0:a.data}`)}})},I=()=>{v.edit&&o.handleSubmit(),v.delete&&l(),N()},N=()=>{p({edit:!1,delete:!1,msg:"",openDialog:!1})},D=()=>{p(a=>({...a,edit:!0,msg:"수정한 정보로 저장 하시겠습니까?",openDialog:!0}))},F=()=>{p(a=>({...a,delete:!0,msg:"삭제하면 복구가 불가능합니다. 삭제 하시겠습니까?",openDialog:!0}))};return e.jsxs(g,{children:[e.jsx(H,{title:"단말 모델 정보 수정"}),e.jsx("form",{style:{width:"100%"},children:e.jsxs(g,{sx:L.contentBox,children:[e.jsxs(g,{display:"flex",alignItems:"center",mb:2,children:[e.jsx(A,{}),e.jsx(f,{sx:{ml:1,fontSize:"16px",fontWeight:500,color:"text.darkgray"},children:"기본 정보"})]}),e.jsxs(f,{fontSize:"small",sx:{color:"text.darkgray"},children:[e.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"필수 입력입니다."]}),e.jsx(U,{sx:L.table_info,children:e.jsxs(T,{children:[e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"모델 코드"]}),e.jsx(s,{component:"td",colSpan:3,children:e.jsx(k,{name:"modelCode",formik:o,IsDisabled:!0})})]}),e.jsxs(c,{children:[e.jsx(s,{children:"비고"}),e.jsx(s,{component:"td",colSpan:3,children:e.jsx(k,{name:"note",formik:o})})]})]})}),e.jsxs(g,{display:"flex",alignItems:"center",mb:2,children:[e.jsx(A,{}),e.jsx(f,{sx:{ml:1,fontSize:"16px",fontWeight:500,color:"text.darkgray"},children:"측위 기능 설정"})]}),e.jsxs(f,{fontSize:"small",sx:{color:"text.darkgray"},children:[e.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"필수 입력입니다."]}),e.jsx(U,{sx:L.table_set_option,children:e.jsxs(T,{children:[e.jsxs(c,{children:[e.jsx(s,{children:"기지국측위"}),e.jsx(s,{children:"LPP-ECID"}),e.jsx(s,{component:"td",children:e.jsx(x,{checked:o.values.posConfig.cellConfig.lpp==="Y",onChange:a=>{o.setFieldValue("posConfig.cellConfig.lpp",a.target.value==="Y"?"N":"Y")},label:o.values.posConfig.cellConfig.lpp==="Y"?"적용":"미적용",value:o.values.posConfig.cellConfig.lpp})}),e.jsx(s,{children:"LPPa-ECID"}),e.jsx(s,{component:"td",children:e.jsx(x,{checked:o.values.posConfig.cellConfig.lppa==="Y",onChange:a=>{o.setFieldValue("posConfig.cellConfig.lppa",a.target.value==="Y"?"N":"Y")},label:o.values.posConfig.cellConfig.lppa==="Y"?"적용":"미적용",value:o.values.posConfig.cellConfig.lppa})})]}),e.jsxs(c,{children:[e.jsx(s,{rowSpan:4,children:"위성 측위"}),e.jsx(s,{children:"MSA"}),e.jsx(s,{component:"td",children:e.jsx(x,{checked:o.values.posConfig.gnssConfig.msa==="Y",onChange:a=>{o.setFieldValue("posConfig.gnssConfig.msa",a.target.value==="Y"?"N":"Y")},label:o.values.posConfig.gnssConfig.msa==="Y"?"적용":"미적용",value:o.values.posConfig.gnssConfig.msa})}),e.jsx(s,{children:"MSB"}),e.jsx(s,{component:"td",children:e.jsx(x,{checked:o.values.posConfig.gnssConfig.msb==="Y",onChange:a=>{o.setFieldValue("posConfig.gnssConfig.msb",a.target.value==="Y"?"N":"Y")},label:o.values.posConfig.gnssConfig.msb==="Y"?"적용":"미적용",value:o.values.posConfig.gnssConfig.msb})})]}),e.jsxs(c,{children:[e.jsx(s,{children:"CP"}),e.jsx(s,{children:e.jsx(x,{checked:o.values.posConfig.gnssConfig.cp==="Y",onChange:a=>{o.setFieldValue("posConfig.gnssConfig.cp",a.target.value==="Y"?"N":"Y")},label:o.values.posConfig.gnssConfig.cp==="Y"?"적용":"미적용",value:o.values.posConfig.gnssConfig.cp})}),e.jsx(s,{children:"LPPe"}),e.jsx(s,{children:e.jsx(x,{checked:o.values.posConfig.gnssConfig.lppe==="Y",onChange:a=>{o.setFieldValue("posConfig.gnssConfig.lppe",a.target.value==="Y"?"N":"Y")},label:o.values.posConfig.gnssConfig.lppe==="Y"?"적용":"미적용",value:o.values.posConfig.gnssConfig.lppe})})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"SUPL ver"]}),e.jsx(s,{children:e.jsx(k,{name:"posConfig.gnssConfig.suplVer",formik:o})}),e.jsx(s,{children:"SUPL TLS"}),e.jsx(s,{children:e.jsx(x,{checked:o.values.posConfig.gnssConfig.tls==="Y",onChange:a=>{o.setFieldValue("posConfig.gnssConfig.tls",a.target.value==="Y"?"N":"Y")},label:o.values.posConfig.gnssConfig.tls==="Y"?"적용":"미적용",value:o.values.posConfig.gnssConfig.tls})})]}),e.jsxs(c,{children:[e.jsx(s,{children:"SUPL Emergency Flag"}),e.jsx(s,{children:e.jsx(x,{checked:o.values.posConfig.gnssConfig.emergencyFlag==="Y",onChange:a=>{o.setFieldValue("posConfig.gnssConfig.emergencyFlag",a.target.value==="Y"?"N":"Y")},label:o.values.posConfig.gnssConfig.emergencyFlag==="Y"?"적용":"미적용",value:o.values.posConfig.gnssConfig.emergencyFlag})}),e.jsx(s,{colSpan:2})]}),e.jsxs(c,{children:[e.jsx(s,{rowSpan:3,children:"KSA"}),e.jsxs(s,{children:[e.jsx("span",{style:{color:"red",fontSize:"13px"},children:"*"}),"Ver"]}),e.jsx(s,{children:e.jsx(k,{name:"posConfig.ksaConfig.ver",formik:o})}),e.jsx(s,{colSpan:2})]})]})}),e.jsx(g,{align:"right",children:e.jsxs(O,{spacing:2,direction:"row",sx:{justifyContent:"flex-end"},children:[e.jsx(R,{disabled:S||r,name:"cancel",title:"목록",onClick:()=>m("/system/ue-list")}),e.jsx(R,{disabled:S||r,name:"edit",title:"수정",onClick:D}),e.jsx(R,{disabled:S||r,name:"delete",title:"삭제",onClick:F})]})})]})}),v.openDialog&&e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(Pe,{isOpen:v.openDialog,content:v.msg,onCancel:N,onConfirm:I})}),y&&e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(De,{msg:y,autoHideDuration:3e3,callback:()=>{u(""),m("/system/ue/list")}})})]})},Ee=()=>e.jsx(e.Fragment,{children:e.jsx(_e,{})}),Qe=Ee;export{Qe as UeModelEditPage,qe as UeModelListPage,Ke as UeModelRegistPage};
