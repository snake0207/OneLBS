import{r as s,j as l}from"./index-Zwjsjf_e.js";import{o as e}from"./olleh_map-cJNfxRyM.js";const h=({locations:t})=>{const[n,u]=s.useState(null),[f,d]=s.useState([]);let o=0,c=13,r={latitude:t[0].latitude,longitude:t[0].longitude};if(t.length>1){const{minLat:a,maxLat:i,minLon:m,maxLon:p}=e.minMax(t);r={latitude:(a+i)/2,longitude:(m+p)/2},o=e.getDistance(a,m,i,p),c=e.setZoomWithDistance(o)}return s.useEffect(()=>{if(!n){const a=e.initMap(document.getElementById("map_div"),e.initCenter(r.latitude,r.longitude),c);u(a)}return()=>{n&&(console.log("mapInstance unmount..."),u(null),d([]))}},[]),s.useEffect(()=>{if(n){e.setCenter(n,e.initCenter(r.latitude,r.longitude));const a=t.map(i=>e.drawMarker(n,i,!1));f.length===0&&d(a)}},[t,n]),l.jsx(l.Fragment,{children:l.jsx("div",{id:"map_div",style:{height:"100%",width:"100%",zIndex:1}})})};export{h as default};
