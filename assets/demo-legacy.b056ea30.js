!function(){var a=document.createElement("style");a.innerHTML="@keyframes nutFadeIn-7c812839{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-7c812839{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-7c812839],.nutFade-leave-active[data-v-7c812839],.nutFadeIn[data-v-7c812839],.nutFadeOut[data-v-7c812839]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-7c812839],.nutFadeIn[data-v-7c812839]{animation-name:nutFadeIn-7c812839}.nutFade-leave-active[data-v-7c812839],.nutFadeOut[data-v-7c812839]{animation-name:nutFadeOut-7c812839}@keyframes nutZoomIn-7c812839{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-7c812839{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-7c812839],.nutZoom-leave-active[data-v-7c812839],.nutZoomIn[data-v-7c812839],.nutZoomOut[data-v-7c812839]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-7c812839],.nutZoomIn[data-v-7c812839]{animation-name:nutZoomIn-7c812839}.nutZoom-leave-active[data-v-7c812839],.nutZoomOut[data-v-7c812839]{animation-name:nutZoomOut-7c812839}@keyframes nutEaseIn-7c812839{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-7c812839{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-7c812839],.nutEase-leave-active[data-v-7c812839],.nutEaseIn[data-v-7c812839],.nutEaseOut[data-v-7c812839]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-7c812839],.nutEaseIn[data-v-7c812839]{animation-name:nutEaseIn-7c812839}.nutEase-leave-active[data-v-7c812839],.nutEaseOut[data-v-7c812839]{animation-name:nutEaseOut-7c812839}@keyframes nutDropIn-7c812839{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-7c812839{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-7c812839],.nutDrop-leave-active[data-v-7c812839],.nutDropIn[data-v-7c812839],.nutDropOut[data-v-7c812839]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-7c812839],.nutDropIn[data-v-7c812839]{animation-name:nutDropIn-7c812839}.nutDrop-leave-active[data-v-7c812839],.nutDropOut[data-v-7c812839]{animation-name:nutDropOut-7c812839}@keyframes rotation-7c812839{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-7c812839],.nutRotate-leave-active[data-v-7c812839],.nutRotateIn[data-v-7c812839],.nutRotateOut[data-v-7c812839]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-7c812839],.nutRotateIn[data-v-7c812839]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-7c812839],.nutRotateOut[data-v-7c812839]{animation-name:nutRotateOut}.cell[data-v-7c812839]{padding:40px 18px}.custom-button[data-v-7c812839]{width:26px;color:#fff;font-size:10px;line-height:18px;text-align:center;background-color:#ee0a24;border-radius:100px}",document.head.appendChild(a),System.register(["./mobile-legacy.6e174d7b.js","./vendor-legacy.de681981.js","./index-legacy.f7980f3d.js"],(function(a){"use strict";var e,t,n,o,l,u,c,i,d,m,r,v;return{setters:[function(a){e=a.c,t=a.d},function(a){n=a.a,o=a.s,l=a.z,u=a.A,c=a.r,i=a.o,d=a.c,m=a.f,r=a.t,v=a.y},function(){}],execute:function(){const{createDemo:s}=e("range");var f=a("default",s({props:{},setup(){const a=n({value1:40,value2:[20,80],value3:0,value4:20,value5:30,value6:40,value7:50,value8:40,value9:60,value10:50});return{...o(a),onChange:a=>t.text("当前值："+a)}}}));const p=v();l("data-v-7c812839");const g={class:"demo"},h=m("h2",null,"基础用法",-1),y=m("h2",null,"双滑块",-1),b=m("h2",null,"指定范围",-1),V=m("h2",null,"设置步长",-1),C=m("h2",null,"隐藏范围",-1),I=m("h2",null,"隐藏标签",-1),O=m("h2",null,"禁用",-1),D=m("h2",null,"自定义样式",-1),E=m("h2",null,"自定义按钮",-1),k={class:"custom-button"};u();const F=p(((a,e,t,n,o,l)=>{const u=c("nut-range"),v=c("nut-cell");return i(),d("div",g,[h,m(v,{class:"cell"},{default:p((()=>[m(u,{modelValue:a.value1,"onUpdate:modelValue":e[1]||(e[1]=e=>a.value1=e),onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),y,m(v,{class:"cell"},{default:p((()=>[m(u,{range:"",modelValue:a.value2,"onUpdate:modelValue":e[2]||(e[2]=e=>a.value2=e),onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),b,m(v,{class:"cell"},{default:p((()=>[m(u,{modelValue:a.value3,"onUpdate:modelValue":e[3]||(e[3]=e=>a.value3=e),max:10,min:-10,onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),V,m(v,{class:"cell"},{default:p((()=>[m(u,{modelValue:a.value4,"onUpdate:modelValue":e[4]||(e[4]=e=>a.value4=e),step:5,onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),C,m(v,{class:"cell"},{default:p((()=>[m(u,{"hidden-range":"",modelValue:a.value5,"onUpdate:modelValue":e[5]||(e[5]=e=>a.value5=e),onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),I,m(v,{class:"cell"},{default:p((()=>[m(u,{"hidden-tag":"",modelValue:a.value6,"onUpdate:modelValue":e[6]||(e[6]=e=>a.value6=e),onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),O,m(v,{class:"cell"},{default:p((()=>[m(u,{disabled:"",modelValue:a.value7,"onUpdate:modelValue":e[7]||(e[7]=e=>a.value7=e)},null,8,["modelValue"])])),_:1}),D,m(v,{class:"cell"},{default:p((()=>[m(u,{modelValue:a.value8,"onUpdate:modelValue":e[8]||(e[8]=e=>a.value8=e),onChange:a.onChange,"inactive-color":"rgba(163,184,255,1)","button-color":"rgba(52,96,250,1)","active-color":"linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"},null,8,["modelValue","onChange"])])),_:1}),E,m(v,{class:"cell"},{default:p((()=>[m(u,{modelValue:a.value9,"onUpdate:modelValue":e[9]||(e[9]=e=>a.value9=e),onChange:a.onChange},{button:p((()=>[m("div",k,r(a.value10),1)])),_:1},8,["modelValue","onChange"])])),_:1})])}));f.render=F,f.__scopeId="data-v-7c812839"}}}))}();
