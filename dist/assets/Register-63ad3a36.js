import{_ as a,r as b,o as x,i as p,f as e,n as c,g as l,w as i,l as r,v as n}from"./index-150c482e.js";const u={data(){return{password:!0,cpassword:!0}}},h={class:"w-full h-screen flex justify-center items-center bg-bg1"},f={class:"w-[310px] sm:w-[420px]"},m={class:"w-full rounded border border-bordermute bg-cardbg pt-3 p-5 md:p-7"},g=n('<div class="text-center"><h1 class="textgra grabg2 text-3xl py-2"><i class="bi bi-person-circle"></i></h1><h1 class="font-bold tracking-wide text-xl text-textpri">Register</h1></div><div class="mt-6 mb-3 flex justify-center items-stretch"><button class="text-icon1 rounded-l-sm px-3 border border-bordercolor"><i class="bi bi-person"></i></button><input type="text" class="text-textpri font-light flex-1 py-1 px-3 bg-accent2 rounded-r-sm outline-none border border-bordercolor focus:border-accent1" placeholder="Name"></div><div class="mt-6 mb-3 flex justify-center items-stretch"><button class="text-icon1 rounded-l-sm px-3 border border-bordercolor"><i class="bi bi-envelope"></i></button><input type="text" class="text-textpri font-light flex-1 py-1 px-3 bg-accent2 rounded-r-sm outline-none border border-bordercolor focus:border-accent1" placeholder="Email"></div>',3),v={class:"mt-6 mb-3 flex justify-center items-stretch relative"},_=e("button",{class:"text-icon1 rounded-l-sm px-[10px] text-lg border border-bordercolor"},[e("i",{class:"bi bi-key"})],-1),y=["type"],w={class:"mt-6 mb-3 flex justify-center items-stretch relative"},k=e("button",{class:"text-icon1 rounded-l-sm px-3 border border-bordercolor"},[e("i",{class:"bi bi-shield-lock"})],-1),j=["type"],C=n('<div class="border-t border-slate-800/50 mt-5"><h1 class="text-xs text-center text-icon1 pt-3">- or Register with -</h1><div class="flex justify-center items-center space-x-4 mt-4"><button title="google" class="text-sm text-textpri px-3 py-2 rounded-full hover:text-textmute bg-accent2 hover:bg-hovercolor"><i class="bi bi-google"></i></button><button title="facebook" class="text-sm text-textpri px-3 py-2 rounded-full hover:text-textmute bg-accent2 hover:bg-hovercolor"><i class="bi bi-facebook"></i></button><button title="twitter" class="text-sm text-textpri px-3 py-2 rounded-full hover:text-textmute bg-accent2 hover:bg-hovercolor"><i class="bi bi-twitter"></i></button></div></div>',1),N={class:"text-center text-xs text-icon1 mt-2 tracking-wide font-medium"};function R(V,o,B,A,t,E){const s=b("router-link");return x(),p("div",h,[e("div",f,[e("div",m,[g,e("div",v,[_,e("input",{type:t.password?"password":"text",class:"text-textpri font-light flex-1 py-1 px-3 bg-accent2 rounded-r-sm outline-none border border-bordercolor focus:border-accent1",placeholder:"Password"},null,8,y),e("button",{onClick:o[0]||(o[0]=d=>t.password=!t.password),class:"absolute top-0 right-2 h-full text-textpri hover:text-accent1 px-2 border-y rounded-sm border-bordercolor"},[e("i",{class:c([{"bi-eye-slash-fill":t.password,"bi-eye-fill":!t.password},"bi"])},null,2)])]),e("div",w,[k,e("input",{type:t.cpassword?"password":"text",class:"text-textpri font-light flex-1 py-1 px-3 bg-accent2 rounded-r-sm outline-none border border-bordercolor focus:border-accent1",placeholder:"Confirm Password"},null,8,j),e("button",{onClick:o[1]||(o[1]=d=>t.cpassword=!t.cpassword),class:"absolute top-0 right-2 h-full text-textpri hover:text-accent1 px-2 border-y rounded-sm border-bordercolor"},[e("i",{class:c([{"bi-eye-slash-fill":t.cpassword,"bi-eye-fill":!t.cpassword},"bi"])},null,2)])]),l(s,{to:"/",class:"block text-center text-sm font-semibold text-textpri grabg2 w-full py-[6px] mt-7 rounded-sm hover:opacity-80 tracking-wider"},{default:i(()=>[r("Register")]),_:1}),C]),e("h1",N,[r("Already have an Account? "),l(s,{to:"/login",class:"text-accent1 hover:opacity-80 hover:underline underline-offset-2"},{default:i(()=>[r("Login")]),_:1}),r(" here.")])])])}const z=a(u,[["render",R]]);export{z as default};