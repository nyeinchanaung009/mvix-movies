import{_ as u,A as m,S as h,a as f,r as o,o as a,i as n,g as i,w as l,j as v,k as g,e as x,f as e,t as r,l as w}from"./index-150c482e.js";const b={props:["data"],data(){return{baseImgURL:"https://image.tmdb.org/t/p/original/",type:this.$route.path=="/movies"?"movie":"tv",modules:[m]}},components:{Swiper:h,SwiperSlide:f}},y={class:"mt-3 sm:px-3 lg:w-[95%] mx-auto"},S={class:"h-[450px] md:h-[400px] lg:h-[420px] overflow-hidden sm:rounded-lg relative"},k=["src"],N=e("div",{id:"npoverlay",class:"absolute w-full h-full left-0 top-0 pointer-events-none"},null,-1),$={class:"absolute bottom-0 left-0 w-full pb-5 ps-5"},B={class:"text-textpri montfont font-extralight text-3xl"},I={class:"text-textpri font-light"},L=e("i",{class:"bi bi-star me-1 text-sm"},null,-1),R={class:"font-semibold"};function V(j,A,c,C,s,P){const _=o("router-link"),p=o("SwiperSlide"),d=o("Swiper");return a(),n("div",y,[i(d,{"slides-per-view":1,autoplay:{delay:1850,disableOnInteraction:!1},modules:s.modules,"space-between":1},{default:l(()=>[(a(!0),n(v,null,g(c.data,t=>(a(),x(p,{key:t.id},{default:l(()=>[e("div",S,[i(_,{to:`/detail/${s.type}/${t.id}`,class:""},{default:l(()=>[e("img",{class:"w-full h-full object-cover hover:opacity-90 hover:scale-105 duration-300",src:`${s.baseImgURL}${t.backdrop_path}`,alt:""},null,8,k)]),_:2},1032,["to"]),N,e("div",$,[e("h1",B,r(t.title||t.name),1),e("h1",I,[L,w("Rating : "),e("span",R,r(t.vote_average),1)])])])]),_:2},1024))),128))]),_:1},8,["modules"])])}const D=u(b,[["render",V]]);export{D as N};