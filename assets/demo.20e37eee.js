import{c as s}from"./mobile.855ffb3d.js";import{a as t,s as e,x as a,r as o,o as l,c as n,f as d,q as c,j as r}from"./vendor.882b411a.js";import"./index.77feaf28.js";const{createDemo:u}=s("overlay");var h=u({props:{},setup:()=>({state:t({show:!1,show2:!1})})});const p=c("data-v-61ce3514");e("data-v-61ce3514");const w={class:"demo"},f=d("h2",null,"基础用法",-1),i=r("显示遮罩层"),v=d("h2",null,"嵌套内容",-1),m=r("嵌套内容"),_=d("div",{class:"wrapper"},[d("div",{class:"content"},"这里是正文")],-1);a();const x=p(((s,t,e,a,c,r)=>{const u=o("nut-button"),h=o("nut-overlay"),x=o("nut-cell");return l(),n("div",w,[f,d(x,null,{default:p((()=>[d(u,{type:"primary",onClick:t[1]||(t[1]=t=>s.state.show=!0)},{default:p((()=>[i])),_:1}),d(h,{show:s.state.show,"onUpdate:show":t[2]||(t[2]=t=>s.state.show=t),"z-index":2e3},null,8,["show"])])),_:1}),v,d(x,null,{default:p((()=>[d(u,{type:"success",onClick:t[3]||(t[3]=t=>s.state.show2=!0)},{default:p((()=>[m])),_:1}),d(h,{show:s.state.show2,"onUpdate:show":t[4]||(t[4]=t=>s.state.show2=t),"z-index":2e3},{default:p((()=>[_])),_:1},8,["show"])])),_:1})])}));h.render=x,h.__scopeId="data-v-61ce3514";export default h;
