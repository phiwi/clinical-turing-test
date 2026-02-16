import{f as _,$ as f,y as u,o as i,e as r,g as e,t as a,F as h,Z as g,a0 as v,d as b,j as x}from"../modules/vue-Dg3IqDWV.js";import{u as N,j as y,c as m,b as k}from"../index-BywHPTzD.js";import{N as w}from"./NoteDisplay-CevnnqXf.js";import"../modules/shiki-B29Wx5CU.js";const S=_({__name:"print",setup(p,{expose:n}){n();const{slides:l,total:o}=N();f(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const d=u(()=>l.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),c={slides:l,total:o,slidesWithNote:d,get configs(){return m},NoteDisplay:w};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),j={id:"page-root"},D={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},W={class:"opacity-50"},C={key:0,class:"border-main mb-8"};function F(p,n,l,o,d,c){return i(),r("div",j,[e("div",D,[e("div",L,[e("h1",T,a(o.configs.title),1),e("div",V,a(new Date().toLocaleString()),1)]),(i(!0),r(h,null,g(o.slidesWithNote,(t,s)=>(i(),r("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",W,a(t==null?void 0:t.no)+"/"+a(o.total),1),v(" "+a(t==null?void 0:t.title)+" ",1),n[0]||(n[0]=e("div",{class:"flex-auto"},null,-1))])]),b(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(i(),r("hr",C)):x("v-if",!0)]))),128))])])}const O=k(S,[["render",F],["__file","/beegfs/homes/pwiesenbach/lectures/wft26/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{O as default};
