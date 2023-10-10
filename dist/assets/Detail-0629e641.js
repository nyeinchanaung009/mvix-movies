import{_ as S,S as j,a as L,P as V,r as a,o as s,i,f as t,g as _,w as m,j as y,k,h as o,e as d,t as r,A as D,u as v,M as P,b as R,C as U,d as B,l as f,n as z,m as J,p as G,q as N}from"./index-150c482e.js";import{_ as Z}from"./user-efc107aa.js";import{T as W}from"./Trailericon-3ca0b7c3.js";const Y={props:["cast"],components:{Swiper:j,SwiperSlide:L,Person:V}},A={class:"px-3 md:w-[95%] mx-auto mt-9 tracking-wider flex items-center"},O=t("h1",{class:"text-textpri ms-2"},"Casts",-1),$={key:0,class:"w-full px-2 md:w-[98%] mx-auto mb-5"},Q={class:"w-[80px] sm:w-[95px] h-[80px] sm:h-[95px] mx-auto"},q=["src"],E=t("img",{class:"w-full h-full object-cover object-center rounded-full ring ring-offset-4 ring-cyan-500/20 ring-offset-bg1 hover:ring-cyan-500/50 duration-200",src:Z,alt:"cast"},null,-1),F={class:"text-textpri text-[11px] font-light mt-2 text-center"};function X(l,n,p,b,e,C){const w=a("Person"),x=a("router-link"),g=a("SwiperSlide"),h=a("Swiper");return s(),i(y,null,[t("div",A,[_(w,{class:"text-cyan-500 text-[15px]"}),O]),p.cast?(s(),i("div",$,[_(h,{"slides-per-view":3,"space-between":1,breakpoints:{415:{slidesPerView:4,spaceBetween:1},600:{slidesPerView:5,spaceBetween:1},640:{slidesPerView:5,spaceBetween:1},768:{slidesPerView:6,spaceBetween:1},920:{slidesPerView:7,spaceBetween:1},1200:{slidesPerView:9,spaceBetween:1}}},{default:m(()=>[(s(!0),i(y,null,k(p.cast,c=>(s(),d(g,{key:c.id,class:"text-white px-3 py-6 cursor-grab"},{default:m(()=>[t("div",null,[t("div",Q,[c.profile_path!=null?(s(),d(x,{key:0,to:`/castdetail/${c.id}`,class:"hover:opacity-80 duration-200"},{default:m(()=>[t("img",{class:"w-full h-full object-cover object-center rounded-full ring ring-offset-4 ring-cyan-500/20 ring-offset-bg1 hover:ring-cyan-500/50 duration-200",src:"https://image.tmdb.org/t/p/original"+c.profile_path,alt:"cast"},null,8,q)]),_:2},1032,["to"])):o("",!0),c.profile_path==null?(s(),d(x,{key:1,to:`/castdetail/${c.id}`,class:"hover:opacity-80 duration-200"},{default:m(()=>[E]),_:2},1032,["to"])):o("",!0)]),t("h1",F,r(c.name),1)])]),_:2},1024))),128))]),_:1})])):o("",!0)],64)}const H=S(Y,[["render",X]]),K={props:["video"],data(){return{embedURL:"https://www.youtube.com/embed/",URLtail:"?si=zdKzq2q1ecTcGDIV",modules:[D]}},components:{Swiper:j,SwiperSlide:L,Trailericon:W}},tt={key:0,class:"w-[98%] lg:w-[95%] mx-auto mt-8 mb-12 px-3 sm:px-6 rounded-md border border-bordermute grabg"},et={class:"flex items-center"},st=t("h1",{class:"text-textmute tracking-wide mt-5 ms-[6px]"},"Trailers",-1),it=["src"],ot={class:"text-textpri text-[13px] tracking-wider mt-1 ps-2"};function at(l,n,p,b,e,C){const w=a("Trailericon"),x=a("SwiperSlide"),g=a("Swiper");return p.video.length>0?(s(),i("div",tt,[t("div",et,[_(w,{class:"text-icon1 text-lg translate-y-[11px]"}),st]),_(g,{"slides-per-view":1,"space-between":0,autoplay:{delay:1850,disableOnInteraction:!1},modules:e.modules,breakpoints:{460:{slidesPerView:2},768:{slidesPerView:3},920:{slidesPerView:3},1200:{slidesPerView:4}}},{default:m(()=>[(s(!0),i(y,null,k(p.video,h=>(s(),d(x,{class:"py-10 cursor-grab",key:h.id},{default:m(()=>[t("div",null,[t("iframe",{class:"rounded border border-bordermute w-[210px] h-[98px] xl:w-[260px] xl:h-[153px]",src:`${e.embedURL}${h.key}${e.URLtail}`,frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,it),t("h1",ot,r(h.name),1)])]),_:2},1024))),128))]),_:1},8,["modules"])])):o("",!0)}const lt=S(K,[["render",at]]);const rt={data(){return{id:this.$route.params.id,type:this.$route.params.type,path:window.location.pathname,base_URL:"https://api.themoviedb.org/3/",URL_tail:"?language=en-US",imgURL:"https://image.tmdb.org/t/p/original",options:{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZhY2M2YjZhODcxNDIwMDlkMGU0NGQ2ZGExZGI3YyIsInN1YiI6IjY0ZjAyODBmZGJiYjQyMDBhYjVlODkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJ0khRVk2ppQ5F9PJHMs7jz4AM9j4OMWD9cDsvAX33s"}},isinwatch:!1,watchlist:this.$root.watch__list,data:[],casts:[],trailers:[],similar:[],dataloading:!0,similarloading:!0}},methods:{async getData(){const l=await v(`${this.type}/${this.id}${this.URL_tail}`);this.data=l,this.isInWatchList(),setTimeout(()=>{this.dataloading=!1},800)},async getCasts(){const l=await v(`${this.type}/${this.id}/credits${this.URL_tail}`);this.casts=l.cast.slice(0,20)},async getTrailers(){const l=await v(`${this.type}/${this.id}/videos`);this.trailers=l.results},async getSimilars(){const l=await v(`${this.type}/${this.id}/similar${this.URL_tail}&include_adult=true`);this.similar=l.results,setTimeout(()=>{this.similarloading=!1},800)},isInWatchList(){this.watchlist=this.$root.watch__list,this.watchlist.map(n=>n.id).includes(this.data.id)?this.isinwatch=!0:this.isinwatch=!1},mutateWatchList(l,n,p,b,e){this.$root.toggleWatchList(l,n,p,b,e),this.isInWatchList()}},mounted(){this.getData(),this.getCasts(),this.getTrailers(),this.getSimilars()},updated(){this.id=this.$route.params.id,this.type=this.$route.params.type,this.getData(),this.getCasts(),this.getTrailers(),this.getSimilars()},components:{Master:P,CastCarouselWrapper:H,TrailerWrapper:lt,Trailericon:W,Movie:R,CardCarouselWrapper:U,MySkeletonCarousel:B}},nt={key:0,class:"px-3 sm:px-0 sm:w-[95%] mx-auto pt-2"},ct=t("i",{class:"bi bi-arrow-left text-lg"},null,-1),dt=[ct],pt={class:"h-full flex justify-center items-center flex-wrap"},mt={class:"w-[95%] sm:w-9/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto"},ht={key:0,class:"py-5"},ut=["src","alt"],_t={key:1,class:"w-[280px] h-[400px] bg-accent2 mx-auto flex items-center rounded-md border border-bordermute opacity-80"},xt=t("img",{class:"w-full h-full mx-auto",src:G,alt:"error"},null,-1),wt=[xt],gt={class:"w-11/12 sm:w-9/12 md:w-6/12 lg:w-7/12 xl:w-8/12 mx-auto"},ft={class:"py-5 lg:translate-y-6"},yt={class:"text-white font-bold text-[28px] leading-8 drop-shadow"},bt={class:"text-white font-light text-sm mb-3 drop-shadow"},vt={class:"text-white font-normal md:w-[80%] drop-shadow mb-4"},kt=t("hr",{class:"w-11/12 opacity-40"},null,-1),Ct={class:"text-textpri text-[13px] pt-4"},St={class:"flex justify-start items-center mt-2 mb-2 space-x-1 flex-wrap"},jt={class:"text-textpri text-[13px]"},Lt=t("i",{class:"bi bi-calendar4-event me-1 text-xs"},null,-1),Wt={key:0,class:"ms-6 sm:ms-8"},It=t("i",{class:"bi bi-clock text-xs me-1"},null,-1),Mt={class:"text-textpri text-[13px]"},Tt=t("i",{class:"bi bi-star me-1"},null,-1),Vt={class:"font-medium"},Dt={class:"mt-7 flex flex-col sm:flex-row items-start justify-start sm:items-center sm:space-x-8 md:space-x-1 lg:space-x-8 flex-wrap"},Pt=["href"],Rt={class:"flex items-center"},Ut={class:"ms-2"},Bt={class:"flex justify-center lg:justify-end lg:pe-12 space-x-8 items-center pt-8 sm:mt-0"},zt=["src"],Jt=t("div",{id:"detail_overlay",class:"absolute top-0 left-0 w-full h-full -z-10"},null,-1),Gt={key:1,class:"px-3 sm:px-0 sm:w-[95%] mx-auto pt-2"},Nt=t("div",{id:"detail_overlay",class:"relative z-30 rounded min-h-[590px] md:h-[590px] w-full"},[t("div",{class:"h-full flex justify-center items-center flex-wrap"},[t("div",{class:"w-[95%] sm:w-9/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto"},[t("div",{class:"w-[285px] h-[415px] skeleton rounded-lg mx-auto shadow-slate-900/10 shadow-md flex justify-center items-center"},[t("img",{class:"w-[65px] sm:w-[75px] opacity-40",src:N,alt:""})])]),t("div",{class:"w-11/12 sm:w-9/12 md:w-6/12 lg:w-7/12 xl:w-8/12 mx-auto text-white"},[t("div",{class:"py-5"},[t("h1",{class:"w-[185px] px-6 py-4 skeleton rounded-md"}),t("h1",{class:"w-[85%] h-32 px-6 py-4 skeleton rounded-md mt-3"}),t("div",{class:"flex justify-start items-center space-x-4 mt-8"},[t("h1",{class:"w-[125px] px-3 py-3 skeleton rounded-md"}),t("h1",{class:"w-[125px] px-3 py-3 skeleton rounded-md"})]),t("h1",{class:"w-[185px] px-3 py-3 skeleton rounded-md mt-3"}),t("h1",{class:"w-[185px] px-3 py-3 skeleton rounded-md mt-3"}),t("div",{class:"flex justify-start items-center space-x-7 mt-8"},[t("h1",{class:"w-[150px] px-3 py-5 skeleton rounded-md"}),t("h1",{class:"w-[150px] px-3 py-5 skeleton rounded-md"})])])])])],-1),Zt=[Nt],Yt={key:4,class:"w-11/12 mx-auto mb-4"},At={class:"flex items-center"},Ot=t("h1",{class:"text-textpri ms-[6px] tracking-wide"},"You may Intrest",-1);function $t(l,n,p,b,e,C){const w=a("router-link"),x=a("Trailericon"),g=a("CastCarouselWrapper"),h=a("TrailerWrapper"),c=a("Movie"),I=a("CardCarouselWrapper"),M=a("MySkeletonCarousel"),T=a("Master");return s(),d(T,{key:this.$route.fullPath},{default:m(()=>[e.data&&!e.dataloading?(s(),i("div",nt,[t("div",{id:"detail_banner",style:J({background:`url(https://image.tmdb.org/t/p/original${e.data.backdrop_path})`}),class:"relative z-30 rounded min-h-[590px] md:h-[590px] w-full"},[t("button",{onClick:n[0]||(n[0]=u=>l.$router.back()),class:"absolute top-4 left-5 text-white bg-slate-900/20 hover:bg-slate-900/40 border border-transparent hover:border-slate-100/10 px-2 py-1 rounded-full"},dt),t("div",pt,[t("div",mt,[e.data.poster_path!=null?(s(),i("div",ht,[t("img",{class:"w-[285px] rounded-lg mx-auto shadow-slate-900/10 shadow-md",src:e.imgURL+e.data.poster_path,alt:e.data.title},null,8,ut)])):o("",!0),e.data.poster_path==null?(s(),i("div",_t,wt)):o("",!0)]),t("div",gt,[t("div",ft,[t("div",null,[t("h1",yt,r(e.data.title||e.data.name),1),t("h1",bt,r(e.data.tagline),1),t("p",vt,r(e.data.overview),1),kt,t("h1",Ct,"Language : "+r(e.data.original_language),1),t("div",St,[(s(!0),i(y,null,k(e.data.genres,u=>(s(),i("div",null,[_(w,{to:`/search?type=genre&data=${u.id}`,class:"px-1 rounded border-y border-white/10 text-xs bg-slate-700/80 mb-2 sm:mb-0 pb-[2px] text-white shadow hover:bg-accent1"},{default:m(()=>[f(r(u.name),1)]),_:2},1032,["to"])]))),256))]),t("div",jt,[t("span",null,[Lt,f("Release Date : "+r(e.data.release_date),1)]),e.type!="tv"?(s(),i("span",Wt,[It,f(r(e.data.runtime)+" mins",1)])):o("",!0)]),t("h1",Mt,[Tt,f("Rating : "),t("span",Vt,r(e.data.vote_average),1)]),t("div",Dt,[t("a",{class:"text-textpri text-sm font-medium rounded px-5 md:px-2 lg:px-6 py-2 bg-slate-500/20 backdrop-blur-sm border border-white/30 shadow-md shadow-slate-950/10 hover:bg-hovercolor hover:text-white inline-block",href:e.data.homepage,target:"_blank"},[t("span",Rt,[_(x,{class:"text-lg text-textpri"}),t("span",Ut,"Watch "+r(e.type=="tv"?"Series":"Movie"),1)])],8,Pt),e.data?(s(),i("button",{key:0,onClick:n[1]||(n[1]=u=>C.mutateWatchList(e.data.id,e.data.title||e.data.name,e.type,e.data.poster_path,e.data.vote_average)),class:"text-textpri font-medium mt-3 sm:mt-0 text-sm hover:text-accent1 py-2 rounded px-3 md:px-2 lg:px-4 border border-white/30"},[t("i",{class:z([{"bi-bookmark text-icon1":!e.isinwatch,"bi-bookmark-fill text-accent1":e.isinwatch},"bi me-2"])},null,2),f(r(e.isinwatch?"Remove from":"Add to")+" Watchlist ",1)])):o("",!0)])]),t("div",Bt,[(s(!0),i(y,null,k(e.data.production_companies,u=>(s(),i("div",null,[t("div",null,[u.logo_path!=null?(s(),i("img",{key:0,class:"w-[50px] md:w-[70px] drop-shadow-lg",src:e.imgURL+u.logo_path,alt:""},null,8,zt)):o("",!0)])]))),256))])])])]),Jt],4)])):o("",!0),e.dataloading?(s(),i("div",Gt,Zt)):o("",!0),e.casts.length>0?(s(),d(g,{key:2,cast:e.casts},null,8,["cast"])):o("",!0),e.trailers.length>0?(s(),d(h,{key:3,video:e.trailers},null,8,["video"])):o("",!0),e.similar.length>0&&!e.similarloading?(s(),i("div",Yt,[t("div",At,[_(c,{class:"text-cyan-500 text-[16px]"}),Ot])])):o("",!0),e.similar&&!e.similarloading?(s(),d(I,{key:5,class:"mt-3 mb-8",type:e.type,data:e.similar},null,8,["type","data"])):o("",!0),e.similarloading?(s(),d(M,{key:6})):o("",!0)]),_:1})}const Ft=S(rt,[["render",$t]]);export{Ft as default};