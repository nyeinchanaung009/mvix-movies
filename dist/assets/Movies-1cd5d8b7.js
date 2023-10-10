import{_ as k,u,M as C,S,a as P,b as N,C as T,c as B,F as W,d as j,r as n,o as s,e as g,w as F,f as t,g as m,h as r,i as p,t as U,n as c}from"./index-150c482e.js";import{T as O}from"./Trailericon-3ca0b7c3.js";import{N as V}from"./NowPlaying-d68fce42.js";import{C as D,M as L}from"./MySkeleton-ac74ad61.js";const R={name:"Movies",data(){return{URL_tail:"?language=en-US",nowplaying:this.$root.now__playing__movies,boxofficemovies:this.$root.box__movies,suggestedmovies:this.$root.suggest__movies,movies:[],page:2,noploading:!0,boxofficeloading:!0,suggestloading:!0,movieloading:!0}},methods:{async getNowplaying(){if(this.nowplaying.length<1){const i=await u("movie/now_playing");this.nowplaying=i.results,this.$root.now__playing__movies=this.nowplaying,setTimeout(()=>{this.noploading=!1},800)}else this.noploading=!1},async getBoxOfficeMovies(){if(this.boxofficemovies.length<1){const i=await u("/discover/movie?include_adult=true&language=en-US&page=1&sort_by=revenue.desc");this.boxofficemovies=i.results,this.$root.box__movies=this.boxofficemovies,setTimeout(()=>{this.boxofficeloading=!1},800)}else this.boxofficeloading=!1},async getSuggestMovies(){if(this.suggestedmovies.length<1){const i=await u("movie/popular?include_adult=true&language=en-US&page=4");this.suggestedmovies=i.results,this.$root.suggest__movies=this.suggestedmovies,setTimeout(()=>{this.suggestloading=!1},800)}else this.suggestloading=!1},async getMovies(){this.movieloading=!0;const i=await u(`discover/movie${this.URL_tail}&include_adult=true&sort_by=popularity.desc&page=${this.page}`);this.movies=i.results,setTimeout(()=>{this.movieloading=!1},800)},prev(){this.page>2&&this.page--},next(){this.page<50&&this.page++},setPage(i){this.page=i}},mounted(){this.getNowplaying(),this.getBoxOfficeMovies(),this.getSuggestMovies(),this.getMovies()},updated(){this.getMovies()},components:{Master:C,Swiper:S,SwiperSlide:P,Trailericon:O,NowPlaying:V,Movie:N,CardCarouselWrapper:T,CardMovieWrapper:D,Chart:B,Fire:W,Myskeletoncarousel:j,MySkeleton:L}},z={class:"flex justify-start items-center w-[95%] pt-1 ps-3 mx-auto"},E=t("h1",{class:"text-textmute ms-1 font-medium"},"Now Playing",-1),q={key:1,class:"w-[93%] mx-auto h-[450px] md:h-[400px] lg:h-[420px] skeleton rounded-md mt-4"},A={class:"flex justify-start items-center w-[95%] mt-9 ps-3 mb-4 mx-auto"},G=t("h1",{class:"text-textmute ms-1 font-medium"},"Top Box Office Movies",-1),H={class:"flex justify-start items-center w-[95%] mt-9 mb-4 ps-3 mx-auto"},I=t("h1",{class:"text-textmute ms-2 font-medium"},"Movies",-1),J={key:6,class:"text-textmute font-light text-xs text-center"},K={key:7,class:"mt-10 mb-16 md:-translate-x-5"},Q={class:"flex justify-center items-center space-x-3"},X=t("i",{class:"bi bi-chevron-left"},null,-1),Y=[X],Z=t("span",{class:"text-textmute"},"...",-1),$=t("i",{class:"bi bi-chevron-right"},null,-1),ee=[$],te={class:"flex justify-start items-center w-[95%] mb-5 ps-3 mx-auto"},oe=t("h1",{class:"text-textmute ms-2 font-medium"},"Suggested Movies",-1);function se(i,o,ie,ne,e,a){const x=n("Trailericon"),h=n("NowPlaying"),_=n("Fire"),d=n("CardCarouselWrapper"),v=n("Myskeletoncarousel"),b=n("Movie"),f=n("CardMovieWrapper"),y=n("MySkeleton"),w=n("Chart"),M=n("Master");return s(),g(M,{key:e.page},{default:F(()=>[t("div",z,[m(x,{class:"text-cyan-500 text-lg"}),E]),e.nowplaying.length>0&&!e.noploading?(s(),g(h,{key:0,data:e.nowplaying,class:"mb-8"},null,8,["data"])):r("",!0),e.noploading?(s(),p("div",q)):r("",!0),t("div",A,[m(_,{class:"bi bi-star-fill text-cyan-500 text-[19px]"}),G]),e.boxofficemovies.length>0&&!e.boxofficeloading?(s(),g(d,{key:2,class:"mt-3 mb-8",data:e.boxofficemovies,type:"movie"},null,8,["data"])):r("",!0),e.boxofficeloading?(s(),g(v,{key:3})):r("",!0),t("div",H,[m(b,{class:"text-cyan-500 text-[17px]"}),I]),e.movies.length>0&&!e.movieloading?(s(),g(f,{key:4,data:e.movies,type:"movie"},null,8,["data"])):r("",!0),e.movieloading?(s(),g(y,{key:5})):r("",!0),e.movieloading?r("",!0):(s(),p("div",J,"Page "+U(e.page<=4?e.page-1:e.page)+"/50",1)),e.movieloading?r("",!0):(s(),p("div",K,[t("div",Q,[t("button",{onClick:o[0]||(o[0]=(...l)=>a.prev&&a.prev(...l)),class:c([{"pointer-events-none opacity-60":e.page==2},"paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-2 py-1 rounded-full"])},Y,2),t("button",{onClick:o[1]||(o[1]=l=>a.setPage(2)),class:c([{active:e.page==2},"paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-3 py-[6px] rounded-full text-sm"])},"1",2),t("button",{onClick:o[2]||(o[2]=l=>a.setPage(3)),class:c([{active:e.page==3},"paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-3 py-[6px] rounded-full text-sm"])},"2",2),t("button",{onClick:o[3]||(o[3]=l=>a.setPage(4)),class:c([{active:e.page==4},"paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-3 py-[6px] rounded-full text-sm"])},"3",2),Z,t("button",{onClick:o[4]||(o[4]=l=>a.setPage(25)),class:c([{active:e.page==25},"paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-2 py-[5px] rounded-full text-sm"])},"25",2),t("button",{onClick:o[5]||(o[5]=l=>a.setPage(50)),class:c([{active:e.page==50},"paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-2 py-[5px] rounded-full text-sm"])},"50",2),t("button",{onClick:o[6]||(o[6]=(...l)=>a.next&&a.next(...l)),class:c([{"pointer-events-none opacity-60":e.page==50},"paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-2 py-1 rounded-full"])},ee,2)])])),t("div",te,[m(w,{class:"text-cyan-500 text-[17px]"}),oe]),e.suggestedmovies.length>0&&!e.suggestloading?(s(),g(d,{key:8,class:"mt-3 mb-8",data:e.suggestedmovies,type:"movie"},null,8,["data"])):r("",!0),e.suggestloading?(s(),g(v,{key:9})):r("",!0)]),_:1})}const ce=k(R,[["render",se]]);export{ce as default};
