import{l as a,q as e,A as l,n as i,t}from"./index-DNBezHmp.js";const y={C3:{label:"3G 기지국"},C4:{label:"LTE 기지국(KT)"},C4S:{label:"LTE 공동망 기지국(SKT)"},C4U:{label:"LTE 공동망 기지국(U+)"},C5:{label:"5G 기지국"},WW:{label:"Wing WiFi"}},s=()=>[{key:"T",value:"T",label:"전체"},{key:"C3",value:"C3",label:"3G 기지국"},{key:"C4",value:"C4",label:"LTE 기지국(KT)"},{key:"C4S",value:"C4S",label:"LTE 공동망 기지국(SKT)"},{key:"C4U",value:"C4U",label:"LTE 공동망 기지국(U+)"},{key:"C5",value:"C5",label:"5G 기지국"},{key:"WW",value:"WW",label:"Wing WiFi"}],c=()=>[{key:"C4",value:"C4",label:"LTE"},{key:"C3",value:"C3",label:"3G"},{key:"C5",value:"C5",label:"5G"}],n=()=>[{key:"08",value:"08",label:"KT"},{key:"05",value:"05",label:"SKT"},{key:"06",value:"06",label:"LGU+"}],u=()=>[{key:"W",value:"W",label:"WING"},{key:"C",value:"C",label:"CS"},{key:"V",value:"V",label:"VOC"}],d={0:{label:"높음"},1:{label:"보통"},2:{label:"낮음"}},r={getFacilityBtsSearch:e=>a({endPoint:l.facility.bts_search,data:e}),postFacilityRegistWiFi:a=>e({endPoint:l.facility.wifi_regist,data:a}),postFacilityUpdateWiFi:a=>e({endPoint:l.facility.wifi_update,data:a}),postFacilityDeleteWiFi:a=>e({endPoint:l.facility.wifi_delete,data:a}),getFacilityWifiSearch:e=>a({endPoint:l.facility.wifi_search,data:e}),getFacilitySyncHistory:e=>a({endPoint:l.facility.sync_history,data:e})},o=(a={},e)=>{const{data:l}=i({queryKey:["get-facility-bts-search",a],queryFn:()=>r.getFacilityBtsSearch(a),...e});return{data:null==l?void 0:l.data}},b=(a={},e)=>{const{data:l,refetch:t}=i({queryKey:["get-facility-wifi-search",a],queryFn:()=>r.getFacilityWifiSearch(a),...e});return{data:null==l?void 0:l.data,refetch:t}},F=(a={},e)=>t({mutationFn:r.postFacilityRegistWiFi}),C=(a={},e)=>t({mutationFn:r.postFacilityUpdateWiFi}),W=(a={},e)=>t({mutationFn:r.postFacilityDeleteWiFi}),f=(a={},e)=>{const{data:l}=i({queryKey:["get-facility-sync-history",a],queryFn:()=>r.getFacilitySyncHistory(a),...e});return{data:null==l?void 0:l.data}};export{f as a,o as b,F as c,W as d,C as e,b as f,y as g,d as h,n as m,c as n,s as u,u as w};
