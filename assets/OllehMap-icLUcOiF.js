import{r as t,j as e}from"./index-DNBezHmp.js";import{o as i}from"./olleh_map-cbgdSS3j.js";const n=({locations:n})=>{const[a,l]=t.useState(null),[o,s]=t.useState([]);let d=0,u=13,r={latitude:n[0].latitude,longitude:n[0].longitude};if(n.length>1){const{minLat:t,maxLat:e,minLon:a,maxLon:l}=i.minMax(n);r={latitude:(t+e)/2,longitude:(a+l)/2},d=i.getDistance(t,a,e,l),u=i.setZoomWithDistance(d)}return t.useEffect((()=>{if(!a){const t=i.initMap(document.getElementById("map_div"),i.initCenter(r.latitude,r.longitude),u);l(t)}return()=>{a&&(l(null),s([]))}}),[]),t.useEffect((()=>{if(a){i.setCenter(a,i.initCenter(r.latitude,r.longitude));const t=n.map((t=>i.drawMarker(a,t,!1)));0===o.length&&s(t)}}),[n,a]),e.jsx(e.Fragment,{children:e.jsx("div",{id:"map_div",style:{height:"100%",width:"100%",zIndex:1}})})};export{n as default};
