!function(){var a=document.createElement("style");a.innerHTML="@keyframes nutFadeIn-725c58ea{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-725c58ea{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-725c58ea],.nutFade-leave-active[data-v-725c58ea],.nutFadeIn[data-v-725c58ea],.nutFadeOut[data-v-725c58ea]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-725c58ea],.nutFadeIn[data-v-725c58ea]{animation-name:nutFadeIn-725c58ea}.nutFade-leave-active[data-v-725c58ea],.nutFadeOut[data-v-725c58ea]{animation-name:nutFadeOut-725c58ea}@keyframes nutZoomIn-725c58ea{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-725c58ea{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-725c58ea],.nutZoom-leave-active[data-v-725c58ea],.nutZoomIn[data-v-725c58ea],.nutZoomOut[data-v-725c58ea]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-725c58ea],.nutZoomIn[data-v-725c58ea]{animation-name:nutZoomIn-725c58ea}.nutZoom-leave-active[data-v-725c58ea],.nutZoomOut[data-v-725c58ea]{animation-name:nutZoomOut-725c58ea}@keyframes nutEaseIn-725c58ea{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-725c58ea{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-725c58ea],.nutEase-leave-active[data-v-725c58ea],.nutEaseIn[data-v-725c58ea],.nutEaseOut[data-v-725c58ea]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-725c58ea],.nutEaseIn[data-v-725c58ea]{animation-name:nutEaseIn-725c58ea}.nutEase-leave-active[data-v-725c58ea],.nutEaseOut[data-v-725c58ea]{animation-name:nutEaseOut-725c58ea}@keyframes nutDropIn-725c58ea{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-725c58ea{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-725c58ea],.nutDrop-leave-active[data-v-725c58ea],.nutDropIn[data-v-725c58ea],.nutDropOut[data-v-725c58ea]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-725c58ea],.nutDropIn[data-v-725c58ea]{animation-name:nutDropIn-725c58ea}.nutDrop-leave-active[data-v-725c58ea],.nutDropOut[data-v-725c58ea]{animation-name:nutDropOut-725c58ea}@keyframes rotation-725c58ea{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-725c58ea],.nutRotate-leave-active[data-v-725c58ea],.nutRotateIn[data-v-725c58ea],.nutRotateOut[data-v-725c58ea]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-725c58ea],.nutRotateIn[data-v-725c58ea]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-725c58ea],.nutRotateOut[data-v-725c58ea]{animation-name:nutRotateOut}.drag-boundary[data-v-725c58ea]{position:absolute;top:360px;left:8px;width:300px;height:200px;border:1px solid red}",document.head.appendChild(a),System.register(["./mobile-legacy.6e174d7b.js","./vendor-legacy.de681981.js","./index-legacy.f7980f3d.js"],(function(a){"use strict";var t,e,n,o,i,c,u,r,d;return{setters:[function(a){t=a.c},function(a){e=a.z,n=a.A,o=a.r,i=a.o,c=a.c,u=a.f,r=a.y,d=a.j},function(){}],execute:function(){const{createDemo:m}=t("drag");var s=a("default",m({setup:()=>({right:function(){return document.documentElement.clientWidth-300-9},bottom:function(){return document.documentElement.clientHeight-559}})}));const v=r();e("data-v-725c58ea");const l={class:"demo full"},p=u("h2",null,"基础用法",-1),f=d("触摸移动"),y=u("h2",{style:{top:"30px",position:"relative"}},"限制拖拽方向",-1),b=d("只能X轴拖拽"),x=d("只能Y轴拖拽"),g=u("h2",{style:{top:"60px",position:"relative"}},"自动吸边",-1),h=d("拖动我"),I=u("h2",{style:{top:"90px",position:"relative"}},"限制拖动边界",-1),O=u("div",{class:"drag-boundary"},null,-1),E=d("限制拖拽边界");n();const D=v(((a,t,e,n,r,d)=>{const m=o("nut-button"),s=o("nut-drag");return i(),c("div",l,[p,u(s,{style:{top:"120px",left:"8px"}},{default:v((()=>[u(m,{type:"primary"},{default:v((()=>[f])),_:1})])),_:1}),y,u(s,{direction:"x",style:{top:"200px",left:"8px"}},{default:v((()=>[u(m,{type:"primary"},{default:v((()=>[b])),_:1})])),_:1}),u(s,{direction:"y",style:{top:"200px",right:"50px"}},{default:v((()=>[u(m,{type:"primary"},{default:v((()=>[x])),_:1})])),_:1}),g,u(s,{direction:"x",attract:!0,style:{top:"275px",left:"8px"}},{default:v((()=>[u(m,{type:"primary"},{default:v((()=>[h])),_:1})])),_:1}),I,O,u(s,{boundary:{top:361,left:9,bottom:a.bottom(),right:a.right()},style:{top:"400px",left:"50px"}},{default:v((()=>[u(m,{type:"primary"},{default:v((()=>[E])),_:1})])),_:1},8,["boundary"])])}));s.render=D,s.__scopeId="data-v-725c58ea"}}}))}();
