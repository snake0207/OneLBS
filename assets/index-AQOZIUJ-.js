import{j as e,B as p,S as b,T as o,r as c}from"./index-Zwjsjf_e.js";import{b as S,c as y,d as T,e as s,M as D,a as k}from"./index-CIhg3QXE.js";import{C as I}from"./index-DDWb-XS6.js";import{b as N}from"./service-DisLG0W9.js";import{u as L}from"./formik.esm-DxgWIguA.js";import{S as v}from"./index-CkT4d0Nt.js";import{D as f}from"./index-BIFGUC3g.js";import{e as B,f as m}from"./service-zx91cxfm.js";import"./index-DxA-rrMr.js";import"./index-DOeUa9Au.js";import"./TextField-C_ArUhJ2.js";import"./MenuItem-B4bxXtLY.js";import"./Close-DdxGh4K7.js";import"./FormControlLabel-BYqcm0yL.js";import"./InputAdornment-BudvL8JH.js";const x={searchBox:{display:"flex",justifyContent:"space-between",width:"100%",borderRadius:"8px",mb:"10px",p:"16px 20px",backgroundColor:"grey.search",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},tableBox:{width:"100%",th:{border:0,color:"text.darkgray",p:"3px 10px 3px 0"},input:{height:"40px",pt:0,pb:0}},searchButton:{fontSize:15,fontWeight:400,width:"69px",height:"40px",minWidth:"auto",backgroundColor:"button.main",padding:"6px"},inputDash:{fontSize:15,display:"flex",alignItems:"center"},cellTitle:{width:"10%"},cellInput:{width:"35%"}};function R({onSearch:r}){const a=L({initialValues:{startDate:"",endDate:"",crowdType:"T"},onSubmit:t=>{const d=`${t.startDate.split("-").join("")}`,n=`${t.endDate.split("-").join("")}`;r&&r({startDate:d,endDate:n,crowdType:t.crowdType})}});return e.jsx(p,{sx:x.searchBox,children:e.jsx(S,{sx:x.tableBox,children:e.jsx(y,{children:e.jsxs(T,{children:[e.jsx(s,{sx:x.cellTitle,children:"처리 구분"}),e.jsx(s,{sx:{width:"15%"},children:e.jsx(v,{name:"crowdType",formik:a,items:B(),sx:{width:"100%",height:40,backgroundColor:"form.main",borderRadius:"4px"}})}),e.jsx(s,{}),e.jsx(s,{sx:x.cellTitle,children:"조회기간"}),e.jsx(s,{sx:{width:"46%"},children:e.jsxs(b,{direction:"row",spacing:.3,alignItems:"center",width:"100%",children:[e.jsx(f,{name:"startDate",formik:a}),e.jsx(o,{children:"~"}),e.jsx(f,{name:"endDate",formik:a})]})}),e.jsx(s,{align:"right",children:e.jsx(D,{disabled:!a.values.startDate||!a.values.endDate,name:"search",title:"검색",onClick:a.handleSubmit})})]})})})})}const W=[{field:"id",headerName:"ID",flex:.8,renderCell:r=>e.jsx(o,{children:r.row.id})},{field:"statDate",headerName:"통계일",flex:1,renderCell:r=>e.jsx(o,{children:r.row.statDate})},{field:"crowdType",headerName:"처리구분",flex:1,renderCell:r=>e.jsx(o,{children:m[r.row.crowdType]!==void 0?m[r.row.crowdType].label:`${r.row.crowdType} is not exist`})},{field:"records",headerName:"전체 레코드",flex:1.2,renderCell:r=>e.jsx(o,{sx:{color:"black",fontWeight:"bold"},children:r.row.records.toLocaleString()})},{field:"invalidFormat",headerName:"비정상",flex:1,renderCell:r=>e.jsx(o,{sx:{color:"red"},children:r.row.invalidFormat.toLocaleString()})},{field:"lackAccuracy",headerName:"부정확",flex:1,renderCell:r=>e.jsx(o,{sx:{color:"green"},children:r.row.lackAccuracy.toLocaleString()})},{field:"overseas",headerName:"유효범위 외",flex:1,renderCell:r=>e.jsx(o,{sx:{color:"magenta"},children:r.row.overseas.toLocaleString()})},{field:"apCount",headerName:"AP 수",flex:1,renderCell:r=>e.jsx(o,{color:"primary",children:r.row.apCount.toLocaleString()})},{field:"infoError",headerName:"비정상",flex:1,renderCell:r=>e.jsx(o,{children:r.row.infoError.toLocaleString()})},{field:"exceedRange",headerName:"비유효반경",flex:1,renderCell:r=>e.jsx(o,{children:r.row.exceedRange.toLocaleString()})},{field:"nationWideCoverage",headerName:"커버리지(%)",flex:1,renderCell:r=>e.jsx(o,{children:r.row.nationWideCoverage})}],E=[{groupId:"WiFi 처리정보",headerAlign:"center",children:[{field:"apCount"},{field:"infoError"},{field:"exceedRange"},{field:"nationWideCoverage"}]}],F=()=>{const[r,a]=c.useState(!1),[t,d]=c.useState({count:0,lists:[]}),[n,u]=c.useState({page:1,limit:parseInt("50")}),{data:i}=N(n,{enabled:r}),g=l=>{d({count:0,lists:[]}),u({...n,...l,page:1}),a(!0)},w=({row:l})=>{},j=l=>{const h=parseInt("10"),C=(l+1)*h;l>0&&C>=t.lists.length&&(u({...n,page:n.page+1}),a(!0))};return c.useEffect(()=>{if(r&&i&&(i==null?void 0:i.code)==="0000"){const{totalCount:l,lists:h}=i==null?void 0:i.data;a(!1),d({count:l,lists:[...t.lists,...h]})}},[i,n]),console.log("fetchData : ",t),e.jsxs(p,{children:[e.jsx(k,{title:"크라우드소싱 통계"}),e.jsx(R,{onSearch:g}),e.jsxs(p,{sx:{width:"100%",borderRadius:"8px",p:"18px 20px",backgroundColor:"background.contents",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},children:[e.jsx(p,{display:"flex",justifyContent:"flex-start",alignItems:"center",children:e.jsx(o,{sx:{fontSize:"14px"},children:`Total Count: ${t.count}`})}),e.jsx(I,{rows:t==null?void 0:t.lists,rowCount:t==null?void 0:t.count,columns:W,columnGroupingModel:E,sort:{field:"id",orderby:"desc"},onPageChange:j,onRowClick:w,activeTools:["export"],pageInit:n.page===1})]})]})},Y=F;export{Y as CrowdStatPage};
