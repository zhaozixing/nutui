import{c as e}from"./mobile.e2fbd284.js";import{k as t,r as l,o as i,c as n,f as s}from"./index.bd4b4460.js";const{createDemo:o}=e("picker");var a=o({props:{},setup(){const e=["南京市","无锡市","海北藏族自治区","北京市","连云港市","浙江市","江苏市"],l=[{values:["周一","周二","周三","周四","周五"],defaultIndex:2},{values:["上午","下午","晚上"],defaultIndex:1}],i=[{text:"浙江",children:[{text:"杭州",children:[{text:"西湖区"},{text:"余杭区"}]},{text:"温州",children:[{text:"鹿城区"},{text:"瓯海区"}]}]},{text:"福建",children:[{text:"福州",children:[{text:"鼓楼区"},{text:"台江区"}]},{text:"厦门",children:[{text:"思明区"},{text:"海沧区"}]}]}],n=t(!1),s=t(!1),o=t(!1),a=[n,s,o],d=t(e[0]),c=t(`${l[0].values[l[0].defaultIndex]} ${l[1].values[l[1].defaultIndex]}`),r=t(`${i[0].text}\n      ${i[0].children[0].text}\n      ${i[0].children[0].children[0].text}`);return{listData1:e,listData2:l,listData3:i,show:n,show2:s,show3:o,desc:d,desc2:c,desc3:r,open:e=>{a[e-1].value=!0},confirm:e=>{d.value=e},confirm2:e=>{c.value=e.join(" ")},confirm3:e=>{r.value=e.join(" ")}}}});const d={class:"demo"},c=s("h2",null,"基础用法",-1),r=s("h2",null,"多列样式",-1),u=s("h2",null,"多级联动",-1);a.render=function(e,t,o,a,x,f){const h=l("nut-cell"),m=l("nut-picker");return i(),n("div",d,[c,s(h,{title:"请选择城市",desc:e.desc,onClick:t[1]||(t[1]=t=>e.open(1))},null,8,["desc"]),r,s(h,{title:"请选择时间",desc:e.desc2,onClick:t[2]||(t[2]=t=>e.open(2))},null,8,["desc"]),u,s(h,{title:"请选择地址",desc:e.desc3,onClick:t[3]||(t[3]=t=>e.open(3))},null,8,["desc"]),s(m,{visible:e.show,"onUpdate:visible":t[4]||(t[4]=t=>e.show=t),"list-data":e.listData1,title:"城市选择",onConfirm:e.confirm,onClose:e.close},null,8,["visible","list-data","onConfirm","onClose"]),s(m,{visible:e.show2,"onUpdate:visible":t[5]||(t[5]=t=>e.show2=t),"list-data":e.listData2,title:"多列选择",onConfirm:e.confirm2,onClose:e.close},null,8,["visible","list-data","onConfirm","onClose"]),s(m,{visible:e.show3,"onUpdate:visible":t[6]||(t[6]=t=>e.show3=t),"list-data":e.listData3,title:"地址选择",onConfirm:e.confirm3},null,8,["visible","list-data","onConfirm"])])};export default a;
