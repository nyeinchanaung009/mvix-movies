<script>
import Master from '../layout/Master.vue';

import {useFetchData} from '../UseFetch.js'
import CastCarouselWrapper from '../components/CastCarouselWrapper.vue';
import TrailerWrapper from '../components/TrailerWrapper.vue';
import CardCarouselWrapper from '../components/CardCarouselWrapper.vue'
import Trailericon from '../icons/Trailericon.vue';
import Movie from '../icons/Movie.vue';
import MySkeletonCarousel from '../components/MySkeletonCarousel.vue'

export default {
    data(){
        return{
            id : this.$route.params.id,
            type : this.$route.params.type,
            path : window.location.pathname,

            base_URL : 'https://api.themoviedb.org/3/',
            URL_tail : '?language=en-US',
            imgURL : 'https://image.tmdb.org/t/p/original',
            options : {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZhY2M2YjZhODcxNDIwMDlkMGU0NGQ2ZGExZGI3YyIsInN1YiI6IjY0ZjAyODBmZGJiYjQyMDBhYjVlODkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJ0khRVk2ppQ5F9PJHMs7jz4AM9j4OMWD9cDsvAX33s'
                }
            },

            isinwatch : false,
            watchlist : this.$root.watch__list,

            data : [],
            casts : [],
            trailers : [],
            similar : [],

            dataloading : true,
            similarloading : true
        }
    },
    methods : {
        async getData(){
            const detail = await useFetchData(`${this.type}/${this.id}${this.URL_tail}`);
            this.data = detail;
            this.isInWatchList();
            setTimeout(() => {
                this.dataloading = false;
            },800);
        },
        async getCasts(){
            const credit = await useFetchData(`${this.type}/${this.id}/credits${this.URL_tail}`);
            this.casts = credit.cast.slice(0,20);
        },
        async getTrailers(){
            const tra = await useFetchData(`${this.type}/${this.id}/videos`);
            this.trailers = tra.results;
        },
        async getSimilars(){
            const sim = await useFetchData(`${this.type}/${this.id}/similar${this.URL_tail}&include_adult=true`);
            this.similar = sim.results;
            setTimeout(() => {
                this.similarloading = false;
            },800);
        },
        isInWatchList(){
            this.watchlist = this.$root.watch__list;
            const ids = this.watchlist.map(val => val.id); 
            if(ids.includes(this.data.id)){
                this.isinwatch = true;
            }else{
                this.isinwatch = false;
            }
        },
        mutateWatchList(id,title,type,poster,vote){
            this.$root.toggleWatchList(id,title,type,poster,vote);
            this.isInWatchList();
        }
    },
    mounted(){
        this.getData();
        this.getCasts();
        this.getTrailers();
        this.getSimilars();
    },
    updated(){
        this.id = this.$route.params.id;
        this.type = this.$route.params.type;
        this.getData();
        this.getCasts();
        this.getTrailers();
        this.getSimilars();
    },
    components : { Master, CastCarouselWrapper, TrailerWrapper, Trailericon, Movie, CardCarouselWrapper, MySkeletonCarousel },
}
</script>

<template>

    <Master :key="this.$route.fullPath">
        <!-- ================================= movies detail ==================================== -->
        <div v-if="data && !dataloading" class="px-3 sm:px-0 sm:w-[95%] mx-auto pt-2">
            <div id="detail_banner" :style="{background:`url(https://image.tmdb.org/t/p/original${data.backdrop_path})`}" class="relative z-30 rounded min-h-[590px] md:h-[590px] w-full">
                <button @click="$router.back()" class="absolute top-4 left-5 text-white bg-slate-900/20 hover:bg-slate-900/40 border border-transparent hover:border-slate-100/10 px-2 py-1 rounded-full"><i class="bi bi-arrow-left text-lg"></i></button>
                <div class="h-full flex justify-center items-center flex-wrap">

                    <div class="w-[95%] sm:w-9/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto">
                        <div v-if="data.poster_path != null" class="py-5">
                            <img class="w-[285px] rounded-lg mx-auto shadow-slate-900/10 shadow-md" :src="imgURL+data.poster_path" :alt="data.title" />
                        </div>
                        <div v-if="data.poster_path == null" class="w-[280px] h-[400px] bg-accent2 mx-auto flex items-center rounded-md border border-bordermute opacity-80">
                            <img class="w-full h-full mx-auto" src="../assets/images/default_poster.png" alt="error" />
                        </div>
                    </div>

                    <div class="w-11/12 sm:w-9/12 md:w-6/12 lg:w-7/12 xl:w-8/12 mx-auto">
                        <div class="py-5 lg:translate-y-6">

                            <div>
                                <h1 class="text-white font-bold text-[28px] leading-8 drop-shadow">{{ data.title || data.name }}</h1>
                                <h1 class="text-white font-light text-sm mb-3 drop-shadow">{{ data.tagline }}</h1>
                                <p class="text-white font-normal md:w-[80%] drop-shadow mb-4">{{ data.overview }}</p>
                                <hr class="w-11/12 opacity-40"/>
                                <h1 class="text-textpri text-[13px] pt-4">Language : {{ data.original_language }}</h1>
                                <div class="flex justify-start items-center mt-2 mb-2 space-x-1 flex-wrap">
                                    <div v-for="g in data.genres">
                                        <router-link :to="`/search?type=genre&data=${g.id}`" class="px-1 rounded border-y border-white/10 text-xs bg-slate-700/80 mb-2 sm:mb-0 pb-[2px] text-white shadow hover:bg-accent1">{{ g.name }}</router-link>
                                    </div>
                                </div>
                                <div class="text-textpri text-[13px]">
                                    <span><i class="bi bi-calendar4-event me-1 text-xs"></i>Release Date : {{ data.release_date }}</span>
                                    <span v-if="type != 'tv'" class="ms-6 sm:ms-8"><i class="bi bi-clock text-xs me-1"></i>{{ data.runtime }} mins</span>
                                </div>
                                <h1 class="text-textpri text-[13px]"><i class="bi bi-star me-1"></i>Rating : <span class="font-medium">{{ data.vote_average }}</span></h1>
                                
                                <div class="mt-7 flex flex-col sm:flex-row items-start justify-start sm:items-center sm:space-x-8 md:space-x-1 lg:space-x-8 flex-wrap">
                                    <a class="text-textpri text-sm font-medium rounded px-5 md:px-2 lg:px-6 py-2 bg-slate-500/20 backdrop-blur-sm border border-white/30 shadow-md shadow-slate-950/10 hover:bg-hovercolor hover:text-white inline-block" :href="data.homepage" target="_blank">
                                        <span class="flex items-center">
                                            <Trailericon class="text-lg text-textpri"/>
                                            <span class="ms-2">Watch {{ type == 'tv' ? 'Series' : 'Movie' }}</span>
                                        </span>
                                    </a>
                                    <button v-if="data" @click="mutateWatchList(data.id,data.title || data.name,type,data.poster_path,data.vote_average)" class="text-textpri font-medium mt-3 sm:mt-0 text-sm hover:text-accent1 py-2 rounded px-3 md:px-2 lg:px-4 border border-white/30">
                                        <i :class="{'bi-bookmark text-icon1' : !isinwatch,'bi-bookmark-fill text-accent1' : isinwatch}" class="bi me-2"></i>{{ isinwatch ? 'Remove from' : 'Add to' }} Watchlist
                                    </button>
                                </div>
                                
                            </div>

                            <div class="flex justify-center lg:justify-end lg:pe-12 space-x-8 items-center pt-8 sm:mt-0">
                                <div v-for="c in data.production_companies">
                                    <div>
                                        <img v-if="c.logo_path != null" class="w-[50px] md:w-[70px] drop-shadow-lg" :src="imgURL+c.logo_path" alt="">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div id="detail_overlay" class="absolute top-0 left-0 w-full h-full -z-10"></div>
            </div>
        </div>

        <!-- ============================================= loading detail =========================================== -->
        <div v-if="dataloading" class="px-3 sm:px-0 sm:w-[95%] mx-auto pt-2">
            <div id="detail_overlay" class="relative z-30 rounded min-h-[590px] md:h-[590px] w-full">

                <div class="h-full flex justify-center items-center flex-wrap">
                    <div class="w-[95%] sm:w-9/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto">
                        <div class="w-[285px] h-[415px] skeleton rounded-lg mx-auto shadow-slate-900/10 shadow-md flex justify-center items-center">
                            <img class="w-[65px] sm:w-[75px] opacity-40" src="../assets/images/film-strip.png" alt="">
                        </div>
                    </div>

                    <div class="w-11/12 sm:w-9/12 md:w-6/12 lg:w-7/12 xl:w-8/12 mx-auto text-white">
                        <div class="py-5">
                            <h1 class="w-[185px] px-6 py-4 skeleton rounded-md"></h1>
                            <h1 class="w-[85%] h-32 px-6 py-4 skeleton rounded-md mt-3"></h1>
                            <div class="flex justify-start items-center space-x-4 mt-8">
                                <h1 class="w-[125px] px-3 py-3 skeleton rounded-md"></h1>
                                <h1 class="w-[125px] px-3 py-3 skeleton rounded-md"></h1>
                            </div>
                            <h1 class="w-[185px] px-3 py-3 skeleton rounded-md mt-3"></h1>
                            <h1 class="w-[185px] px-3 py-3 skeleton rounded-md mt-3"></h1>
                            <div class="flex justify-start items-center space-x-7 mt-8">
                                <h1 class="w-[150px] px-3 py-5 skeleton rounded-md"></h1>
                                <h1 class="w-[150px] px-3 py-5 skeleton rounded-md"></h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <!-- ================================= movies cast ==================================== -->
        <CastCarouselWrapper v-if="casts.length > 0" :cast="casts" />


        <!-- ================================ tralier =========================================== -->
        <TrailerWrapper v-if="trailers.length > 0" :video="trailers" />


        <!-- ================================ Similar =========================================== -->
        <div v-if="similar.length > 0 && !similarloading" class="w-11/12 mx-auto mb-4">
            <div class="flex items-center">
                <Movie class="text-cyan-500 text-[16px]" /><h1 class="text-textpri ms-[6px] tracking-wide">You may Intrest</h1>
            </div>
        </div>

        <CardCarouselWrapper class="mt-3 mb-8" v-if="similar && !similarloading" :type="type" :data="similar" />
        <MySkeletonCarousel v-if="similarloading" />
        
    </Master>
    
</template>

<style>
    #detail_banner{
        background-position: center center !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
    }
    #detail_overlay{
        background:linear-gradient(to bottom,#0c25502d,#1a2d4e69 20%,#1a2d4ee9 70%);
    }
</style>