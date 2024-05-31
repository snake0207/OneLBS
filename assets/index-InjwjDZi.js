import{j as e,B as p,S as m,T as l,O as S,r as x}from"./index-Zwjsjf_e.js";import{b as C,c as I,d as g,e as s,M as k,a as D}from"./index-CIhg3QXE.js";import{C as q}from"./index-DDWb-XS6.js";import{c as L}from"./user-Baquxl76.js";import{u as P}from"./formik.esm-DxgWIguA.js";import{T as A}from"./index-D9xLZxGV.js";import{S as B}from"./index-CkT4d0Nt.js";import{D as j}from"./index-BIFGUC3g.js";import{T as b}from"./index-D6lVn7oh.js";import"./index-DxA-rrMr.js";import"./index-DOeUa9Au.js";import"./TextField-C_ArUhJ2.js";import"./MenuItem-B4bxXtLY.js";import"./Close-DdxGh4K7.js";import"./FormControlLabel-BYqcm0yL.js";import"./InputAdornment-BudvL8JH.js";const a={searchBox:{display:"flex",justifyContent:"space-between",width:"100%",borderRadius:"8px",mb:"10px",p:"16px 20px",backgroundColor:"grey.search",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},tableBox:{width:"100%",th:{border:0,color:"text.darkgray",p:"3px 10px 3px 0"},input:{height:"40px",pt:0,pb:0}},searchButton:{fontSize:15,fontWeight:400,width:"69px",height:"40px",minWidth:"auto",backgroundColor:"button.main",padding:"6px"},inputDash:{fontSize:15,display:"flex",alignItems:"center"},cellTitle:{width:"10%"},cellInput:{width:"35%"}};function N({onSearch:t}){const d=()=>[{key:"T",value:"T",label:"전체"},{key:"L",value:"L",label:"로그인"},{key:"A",value:"A",label:"권한변경"},{key:"M",value:"M",label:"메뉴접근"}],i=P({initialValues:{startDate:"",endDate:"",start_time:String(new Date().getHours()),end_time:String(new Date().getHours()),reqType:"L",userId:""},onSubmit:o=>{const n=`${o.startDate.split("-").join("")}${o.start_time}`,c=`${o.endDate.split("-").join("")}${o.end_time}`;t&&t({startDate:n,endDate:c,reqType:o.reqType,userId:o.userId})}});return e.jsx(p,{sx:a.searchBox,children:e.jsx(C,{sx:a.tableBox,children:e.jsxs(I,{children:[e.jsxs(g,{children:[e.jsx(s,{sx:a.cellTitle,rowSpan:2,children:"조회기간"}),e.jsx(s,{sx:a.cellInput,children:e.jsxs(m,{direction:"row",spacing:.3,alignItems:"center",width:"100%",children:[e.jsx(j,{name:"startDate",formik:i}),e.jsx(b,{name:"start_time",formik:i})]})}),e.jsx(s,{sx:{width:"5%"}}),e.jsx(s,{sx:a.cellTitle,children:"구분"}),e.jsx(s,{sx:{width:"20%"},children:e.jsx(B,{name:"reqType",formik:i,items:d(),sx:{width:"100%",height:40,backgroundColor:"form.main",borderRadius:"4px"}})})]}),e.jsxs(g,{children:[e.jsx(s,{sx:a.cellInput,children:e.jsxs(m,{direction:"row",spacing:.3,alignItems:"center",width:"100%",children:[e.jsx(j,{name:"endDate",formik:i}),e.jsx(b,{name:"end_time",formik:i})]})}),e.jsx(s,{sx:{width:"5%"}}),e.jsx(s,{sx:a.cellTitle,children:"아이디"}),e.jsx(s,{sx:{width:"20%"},children:e.jsx(A,{name:"userId",formik:i})}),e.jsx(s,{align:"right",children:e.jsx(k,{name:"search",title:"검색",onClick:i.handleSubmit})})]})]})})})}const H={T:{label:"전체"},L:{label:"로그인"},A:{label:"권한변경"},M:{label:"메뉴접근"}},R={A:{label:"관리자"},O:{label:"운영자"}},M=[{field:"id",headerName:"ID",flex:.8,renderCell:t=>e.jsx(l,{children:t.row.id})},{field:"regDate",headerName:"일시",flex:2,renderCell:t=>e.jsx(l,{color:"primary",children:t.row.regDate})},{field:"userId",headerName:"열람자",flex:1,renderCell:t=>e.jsx(l,{children:t.row.userId})},{field:"reqType",headerName:"이력 구분",flex:1,renderCell:t=>e.jsx(l,{children:H[t.row.reqType].label})},{field:"authType",headerName:"권한",flex:1,renderCell:t=>e.jsx(l,{children:R[t.row.authType].label})},{field:"ipAddr",headerName:"접속 IP",flex:1,renderCell:t=>e.jsx(l,{children:t.row.ipAddr})},{field:"detail",headerName:"내용",flex:2,renderCell:t=>e.jsx(l,{children:t.row.detail})}],_=()=>{S();const[t,d]=x.useState({count:0,lists:[]}),[i,o]=x.useState(!0),[n,c]=x.useState({startDate:"",endDate:"",reqType:"T",userId:"",page:1,limit:parseInt("50")}),{mutate:f,isPending:$}=L(),w=r=>{d({count:0,lists:[]}),c({...n,...r,page:1})},y=({row:r})=>{},T=r=>{const h=parseInt("10"),u=(r+1)*h;r>0&&u>=t.lists.length&&c({...n,page:n.page+1})};return x.useEffect(()=>{console.log("callApi ..."),console.log("SEND queryParams : ",n),i&&f({...n},{onSuccess:({data:r})=>{if(console.log("Search response : ",r),(r==null?void 0:r.code)==="0000"){const{totalCount:h,lists:u}=r==null?void 0:r.data;d({count:h,lists:[...t.lists,...u]})}}})},[n]),console.log("fetchData : ",t),e.jsxs(p,{children:[e.jsx(D,{title:"사용자 이력관리"}),e.jsx(N,{onSearch:w}),t&&e.jsxs(p,{sx:{width:"100%",borderRadius:"8px",p:"18px 20px",backgroundColor:"background.contents",boxShadow:"0 3px 14px rgb(0 0 0 / 24%)"},children:[e.jsx(p,{display:"flex",justifyContent:"space-between",alignItems:"center",children:e.jsx(l,{sx:{fontSize:"14px"},children:`Total Count: ${t==null?void 0:t.count}`})}),e.jsx(q,{rows:t==null?void 0:t.lists,rowCount:t==null?void 0:t.count,columns:M,sort:{field:"id",orderby:"desc"},onPageChange:T,onRowClick:y,pageInit:n.page===1})]})]})},te=_;export{te as UserHistoryListPage};
