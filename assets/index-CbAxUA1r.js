function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C2b5Mhwa.js","assets/index-Zwjsjf_e.js","assets/cjs-D8lu4uGd.js","assets/index-DxA-rrMr.js","assets/index-MjI-a-Aq.js","assets/index-DOeUa9Au.js","assets/useSlot-DiK3vQJX.js","assets/Close-DdxGh4K7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as i,N as m,O as k,j as e,B as u,T as C}from"./index-Zwjsjf_e.js";import{d as F}from"./SettingsSuggestOutlined-BjGQH8rx.js";import{u as b}from"./formik.esm-DxgWIguA.js";import{a as N,b as V,c as S,d as r,e as s,f as y}from"./index-CIhg3QXE.js";import{C as t}from"./index-DXlJ_WV9.js";import{a as P,b as T}from"./user-Baquxl76.js";import{T as _}from"./TableBody-sjDPsEYM.js";import"./FormControlLabel-BYqcm0yL.js";const l={contentBox:{width:"100%",borderRadius:"8px",p:"18px 20px",backgroundColor:"background.contents",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},table_base:{mb:3,th:{pt:1,pb:1,width:"20%",border:"1px solid",borderColor:"table.viewTopBorder"},td:{pt:.5,pb:.5,width:"20%",border:"1px solid",borderColor:"table.viewTopBorder"},"& tr:first-of-type":{"& th":{fontSize:"15px",color:"white",textAlign:"center"}}},center:{textAlign:"center"}},E=i.lazy(()=>m(()=>import("./index-C2b5Mhwa.js"),__vite__mapDeps([0,1,2,3]))),w=i.lazy(()=>m(()=>import("./index-MjI-a-Aq.js"),__vite__mapDeps([4,1,5,6,7]))),A=()=>{k();const{mutate:M,isPending:O}=P(),[Y,h]=i.useState(""),[c,x]=i.useState({query:!0,edit:!1,msg:"수정한 정보로 저장 하시겠습니까?",openDialog:!1}),{data:o}=T({},{enabled:c.query}),n=b({initialValues:{OM10000:{},OM20100:{},OM20200:{},OM20300:{},OM20400:{},OM20500:{},OM30100:{},OM30200:{},OM30300:{},OM40100:{},OM40200:{},OM40300:{},OM40400:{},OM40500:{},OM50100:{},OM50200:{},OM50300:{}},onSubmit:a=>{console.log("handleFormikSubmit..");const v=Object.keys(n.values).map(d=>n.values[d]);console.log("formik Array : ",v);const p={targetMenuInfo:[...v]};console.log("onSubmit >> ",JSON.stringify(p,null,2)),M({...p},{onSuccess:({data:d})=>{console.log("update-response : ",d),h(`UPDATE API RESULT : ${d==null?void 0:d.data}(${d==null?void 0:d.code})`)}})}}),g=()=>{c.edit&&n.handleSubmit(),j()},j=()=>{x(a=>({...a,edit:!1,openDialog:!1}))},f=()=>{x(a=>({...a,edit:!0,openDialog:!0}))};return i.useEffect(()=>{o&&(console.log("apiResult : ",o),(o==null?void 0:o.code)==="0000"&&(o==null||o.data.map(a=>{delete a.menuName,n.setFieldValue(a.menuCode,{...a})})),x(a=>({...a,query:!1})))},[o]),e.jsxs(u,{children:[e.jsx(N,{title:"권한 관리"}),e.jsx("form",{style:{width:"100%"},children:e.jsxs(u,{sx:l.contentBox,children:[e.jsxs(u,{display:"flex",alignItems:"center",mb:2,children:[e.jsx(F,{}),e.jsx(C,{sx:{ml:1,fontSize:"16px",fontWeight:500,color:"text.darkgray"},children:"메뉴 권한 설정"})]}),e.jsxs(V,{size:"small",sx:l.table_base,children:[e.jsx(S,{children:e.jsxs(r,{sx:{backgroundColor:"#009ACC",position:"sticky",top:0},children:[e.jsx(s,{children:"대메뉴"}),e.jsx(s,{children:"중메뉴"}),e.jsx(s,{children:"소메뉴"}),e.jsx(s,{children:"관리자"}),e.jsx(s,{children:"운영자"})]})}),e.jsxs(_,{children:[e.jsxs(r,{children:[e.jsx(s,{children:"대시보드"}),e.jsx(s,{children:""}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM10000.adminYn==="Y",onChange:a=>{n.setFieldValue("OM10000.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM10000.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM10000.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM10000.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM10000.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{rowSpan:5,children:"서비스 현황"}),e.jsx(s,{children:"서비스 이력 조회"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM20100.adminYn==="Y",onChange:a=>{n.setFieldValue("OM20100.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM20100.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM20100.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM20100.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM20100.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"서비스 통계"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM20200.adminYn==="Y",onChange:a=>{n.setFieldValue("OM20200.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM20200.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM20200.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM20200.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM20200.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"서비스 세부 통계"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM20500.adminYn==="Y",onChange:a=>{n.setFieldValue("OM20500.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM20500.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM20200.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM20200.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM20200.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"크라우드소싱 통계"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM20300.adminYn==="Y",onChange:a=>{n.setFieldValue("OM20300.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM20300.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM20300.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM20300.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM20300.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"위치 트리거 조회"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM20400.adminYn==="Y",onChange:a=>{n.setFieldValue("OM20400.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM20400.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM20400.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM20400.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM20400.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{rowSpan:3,children:"측위기반 정보 관리"}),e.jsx(s,{children:"시설정보"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM30100.adminYn==="Y",onChange:a=>{n.setFieldValue("OM30100.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM30100.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM30100.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM30100.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM30100.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"WiFi 시설정보"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM30200.adminYn==="Y",onChange:a=>{n.setFieldValue("OM30200.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM30200.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM30200.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM30200.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM30200.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"정보 현행화 이력"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM30300.adminYn==="Y",onChange:a=>{n.setFieldValue("OM30300.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM30300.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM30300.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM30300.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM30300.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{rowSpan:5,children:"시스템 관리"}),e.jsx(s,{children:"서비스 관리"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM40100.adminYn==="Y",onChange:a=>{n.setFieldValue("OM40100.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM40100.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM40100.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM40100.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM40100.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"단말 모델 관리"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM40200.adminYn==="Y",onChange:a=>{n.setFieldValue("OM40200.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM40200.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM40200.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM40200.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM40200.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"엔진 설정 관리"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM40300.adminYn==="Y",onChange:a=>{n.setFieldValue("OM40300.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM40300.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM40300.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM40300.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM40300.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"위치정보 처리 내역"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM40400.adminYn==="Y",onChange:a=>{n.setFieldValue("OM40400.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM40400.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM40400.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM40400.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM40400.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"위치이력 열람 내역"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM40500.adminYn==="Y",onChange:a=>{n.setFieldValue("OM40500.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM40500.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM40500.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM40500.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM40500.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{rowSpan:4,children:"사용자 관리"}),e.jsx(s,{children:"사용자 정보 관리"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM50100.adminYn==="Y",onChange:a=>{n.setFieldValue("OM50100.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM50100.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM50100.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM50100.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM50100.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"권한 관리"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM50200.adminYn==="Y",onChange:a=>{n.setFieldValue("OM50200.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM50200.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM50200.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM50200.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM50200.operatorYn})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"사용자 이력 관리"}),e.jsx(s,{children:""}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM50300.adminYn==="Y",onChange:a=>{n.setFieldValue("OM50300.adminYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM50300.adminYn})}),e.jsx(s,{component:"td",sx:l.center,children:e.jsx(t,{checked:n.values.OM50300.operatorYn==="Y",onChange:a=>{n.setFieldValue("OM50300.operatorYn",a.target.value==="Y"?"N":"Y")},value:n.values.OM50300.operatorYn})})]})]})]}),e.jsx(u,{align:"right",children:e.jsx(y,{disabled:O,name:"create",title:"저장",onClick:f})})]})}),c.openDialog&&e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(E,{isOpen:c.openDialog,content:c.msg,onCancel:j,onConfirm:g})}),Y&&e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(w,{msg:Y,autoHideDuration:5e3,callback:()=>h(!1)})})]})},B=()=>e.jsx(e.Fragment,{children:e.jsx(A,{})}),H=B;export{H as PermissionEditPage};
