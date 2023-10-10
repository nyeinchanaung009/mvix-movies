<script>
    import Master from '../layout/Master.vue'
    import Trailericon from '../icons/Trailericon.vue'

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    import 'swiper/css';
    
    import NowPlaying from '../components/NowPlaying.vue';
    import { useFetchData } from '../UseFetch.js';
    import Movie from '../icons/Movie.vue';
    import CardCarouselWrapper from '../components/CardCarouselWrapper.vue';
    import CardMovieWrapper from '../components/CardMovieWrapper.vue';
    import Chart from '../icons/Chart.vue';
    import Fire from '../icons/Fire.vue';
    import Myskeletoncarousel from '../components/myskeletoncarousel.vue';
    import MySkeleton from '../components/MySkeleton.vue';

    export default {
        name : 'Series',
        data(){
            return{
                URL_tail : '?language=en-US',
                
                streaming : this.$root.now__playing__series,
                topratedtv : this.$root.box__series,
                suggestedtv : this.$root.suggest__series,
                series : [],
                page : 2,

                stremaingloading : true,
                topratedloading : true,
                suggestloading : true,
                serieloading : true
            }
        },
        methods : {
            async getStreaming(){
                if(this.streaming.length < 1){
                    const now_stream = await useFetchData('tv/on_the_air');
                    this.streaming = now_stream.results;
                    this.$root.now__playing__series = this.streaming;
                    setTimeout(() => {
                        this.stremaingloading = false;
                    },800);
                }
                else{
                    this.stremaingloading = false;
                }
            },
            async getTopRatedTv(){
                if(this.topratedtv.length < 1){
                    const toprated = await useFetchData('tv/top_rated?include_adult=true&language=en-US');
                    this.topratedtv = toprated.results;
                    this.$root.box__series = this.topratedtv;
                    setTimeout(() => {
                        this.topratedloading = false;
                    },800);
                }
                else{
                    this.topratedloading = false;
                }
            },
            async getSuggestTv(){
                if(this.suggestedtv.length < 1){
                    const suggest_tv = await useFetchData('tv/popular?language=en-US&page=4');
                    this.suggestedtv = suggest_tv.results;
                    this.$root.suggest__series = this.suggestedtv; 
                    setTimeout(() => {
                        this.suggestloading = false;
                    },800);         
                }
                else{
                    this.suggestloading = false;
                }          
            },
            async getTv(){
                const tv = await useFetchData(`discover/tv${this.URL_tail}&include_adult=true&sort_by=popularity.desc&page=`+`${this.page}`);
                this.series = tv.results;
                setTimeout(() => {
                    this.serieloading = false;
                },800);
            },
            prev(){
                if(this.page > 2){
                    this.page--;
                }
            },
            next(){
                if(this.page < 50){
                    this.page++;
                }
            },
            setPage(val){
                this.page = val;
            }
        },
        mounted(){
            this.getStreaming(),
            this.getTopRatedTv(),
            this.getSuggestTv(),
            this.getTv()
        },
        updated(){
            this.getTv();
        },
        components : { Master, Swiper, SwiperSlide, Trailericon, NowPlaying, Movie, CardCarouselWrapper, CardMovieWrapper, Chart, Fire, Myskeletoncarousel, MySkeleton },
    }
</script>

<template>
    <Master :key="page">
        <!-- =========================== now playing =========================== -->
        <div class="flex justify-start items-center w-[95%] pt-1 ps-3 mx-auto">
            <Trailericon class="text-cyan-500 text-lg" />
            <h1 class="text-textmute ms-1 font-medium">Now Streaming</h1>
        </div>

        <NowPlaying v-if="streaming.length > 0 && !stremaingloading" :data="streaming" class="mb-8" />
        <div v-if="stremaingloading" class="w-[93%] mx-auto h-[450px] md:h-[400px] lg:h-[420px] skeleton rounded-md mt-4"></div>


        <!-- =========================== top rated series =========================== -->
        <div class="flex justify-start items-center w-[95%] mt-9 ps-3 mb-4 mx-auto">
            <Fire class="bi bi-star-fill text-cyan-500 text-[19px]" />
            <h1 class="text-textmute ms-1 font-medium">Top Rated Series</h1>
        </div>

        <CardCarouselWrapper class="mt-3 mb-8" v-if="topratedtv.length > 0 && !topratedloading" :data="topratedtv" type="tv" />
        <Myskeletoncarousel v-if="topratedloading" />

        <!-- =========================== poplarity desc series =========================== -->
        <div class="flex justify-start items-center w-[95%] mb-4 mt-7 ps-3 mx-auto">
            <Movie class="text-cyan-500 text-[17px]"></Movie>
            <h1 class="text-textmute ms-2 font-medium">Series / Shows</h1>
        </div>
        
        <CardMovieWrapper v-if="series.length > 0 && !serieloading" :data="series" type="tv" />
        <MySkeleton v-if="serieloading" />

        <div v-if="!serieloading" class="text-textmute font-light text-xs text-center">Page {{ page <= 4 ? page - 1 : page }} / 50</div>

        <!-- =========================== pagination =========================== -->
        <div v-if="!serieloading" class="mt-10 mb-16 text-white md:-translate-x-5">
            <div class="flex justify-center items-center space-x-3">
                <button @click="prev" :class="{'pointer-events-none opacity-60' : page == 2}" class="paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-2 py-1 rounded-full"><i class="bi bi-chevron-left"></i></button>
                <button @click="setPage(2)" :class="{active : page == 2}" class="paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-3 py-[6px] rounded-full text-sm">1</button>
                <button @click="setPage(3)" :class="{active : page == 3}" class="paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-3 py-[6px] rounded-full text-sm">2</button>
                <button @click="setPage(4)" :class="{active : page == 4}" class="paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-3 py-[6px] rounded-full text-sm">3</button>
                <span class="text-textmute">...</span>
                <button @click="setPage(25)" :class="{active : page == 25}" class="paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-2 py-[5px] rounded-full text-sm">25</button>
                <button @click="setPage(50)" :class="{active : page == 50}" class="paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-2 py-[5px] rounded-full text-sm">50</button>
                <button @click="next" :class="{'pointer-events-none opacity-60' : page == 50}" class="paginate bg-cardbg border border-bordermute hover:bg-hovercolor text-textmute hover:text-white px-2 py-1 rounded-full"><i class="bi bi-chevron-right"></i></button>
            </div>
        </div>

        <!-- =========================== recommendation =========================== -->
        <div class="flex justify-start items-center w-[95%] mb-5 ps-3 mx-auto">
            <Chart class="text-cyan-500 text-[17px]"></Chart>
            <h1 class="text-textmute ms-2 font-medium">Suggested Series / Shows</h1>
        </div>

        <CardCarouselWrapper class="mt-3 mb-8" v-if="suggestedtv.length > 0 && !suggestloading" :data="suggestedtv" type="tv" />
        <Myskeletoncarousel v-if="suggestloading" />

    </Master>
</template>

<style>
    .paginate.active{
        background: #2f81f7;
        color: #fff;
        border: 1px solid #2f81f7;
    }
</style>