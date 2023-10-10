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
        name : 'Movies',
        data(){
            return{
                URL_tail : '?language=en-US',
                
                nowplaying : this.$root.now__playing__movies,
                boxofficemovies : this.$root.box__movies,
                suggestedmovies : this.$root.suggest__movies,
                movies : [],
                page : 2,

                noploading : true,
                boxofficeloading : true,
                suggestloading : true,
                movieloading : true
            }
        },
        methods : {
            async getNowplaying(){
                if(this.nowplaying.length < 1){
                    const now_play = await useFetchData('movie/now_playing');
                    this.nowplaying = now_play.results;
                    this.$root.now__playing__movies = this.nowplaying;
                    setTimeout(() => {
                        this.noploading = false;
                    },800);
                }
                else{
                    this.noploading = false;
                }
            },
            async getBoxOfficeMovies(){
                if(this.boxofficemovies.length < 1){
                    const box_office = await useFetchData('/discover/movie?include_adult=true&language=en-US&page=1&sort_by=revenue.desc');
                    this.boxofficemovies = box_office.results;
                    this.$root.box__movies = this.boxofficemovies;
                    setTimeout(() => {
                        this.boxofficeloading = false;
                    },800);
                }
                else{
                    this.boxofficeloading = false;
                }
            },
            async getSuggestMovies(){
                if(this.suggestedmovies.length < 1){
                    const suggest_movie = await useFetchData('movie/popular?include_adult=true&language=en-US&page=4');
                    this.suggestedmovies = suggest_movie.results;
                    this.$root.suggest__movies = this.suggestedmovies; 
                    setTimeout(() => {
                        this.suggestloading = false;
                    },800);
                }
                else{
                    this.suggestloading = false;
                }
            },
            async getMovies(){
                this.movieloading = true;
                const mov = await useFetchData(`discover/movie${this.URL_tail}&include_adult=true&sort_by=popularity.desc&page=`+`${this.page}`);
                this.movies = mov.results;
                setTimeout(() => {
                    this.movieloading = false;
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
            this.getNowplaying(),
            this.getBoxOfficeMovies(),
            this.getSuggestMovies(),
            this.getMovies()
        },
        updated(){
            this.getMovies();
        },
        components : { Master, Swiper, SwiperSlide, Trailericon, NowPlaying, Movie, CardCarouselWrapper, CardMovieWrapper, Chart, Fire, Myskeletoncarousel, MySkeleton },
    }
</script>

<template>
    <Master :key="page">
        <!-- =========================== now playing =========================== -->
        <div class="flex justify-start items-center w-[95%] pt-1 ps-3 mx-auto">
            <Trailericon class="text-cyan-500 text-lg" />
            <h1 class="text-textmute ms-1 font-medium">Now Playing</h1>
        </div>

        <NowPlaying v-if="nowplaying.length > 0 && !noploading" :data="nowplaying" class="mb-8" />
        <div v-if="noploading" class="w-[93%] mx-auto h-[450px] md:h-[400px] lg:h-[420px] skeleton rounded-md mt-4"></div>

        <!-- =========================== top rated movies =========================== -->
        <div class="flex justify-start items-center w-[95%] mt-9 ps-3 mb-4 mx-auto">
            <Fire class="bi bi-star-fill text-cyan-500 text-[19px]" />
            <h1 class="text-textmute ms-1 font-medium">Top Box Office Movies</h1>
        </div>

        <CardCarouselWrapper class="mt-3 mb-8" v-if="boxofficemovies.length > 0 && !boxofficeloading" :data="boxofficemovies" type="movie" />
        <Myskeletoncarousel v-if="boxofficeloading" />

        <!-- =========================== poplarity desc movies =========================== -->
        <div class="flex justify-start items-center w-[95%] mt-9 mb-4 ps-3 mx-auto">
            <Movie class="text-cyan-500 text-[17px]"></Movie>
            <h1 class="text-textmute ms-2 font-medium">Movies</h1>
        </div>
        
        <CardMovieWrapper v-if="movies.length > 0 && !movieloading" :data="movies" type="movie" />
        <MySkeleton v-if="movieloading" />

        <div v-if="!movieloading" class="text-textmute font-light text-xs text-center">Page {{ page <= 4 ? page - 1 : page }}/50</div>
        <!-- =========================== pagination =========================== -->
        <div v-if="!movieloading" class="mt-10 mb-16 md:-translate-x-5">
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
            <h1 class="text-textmute ms-2 font-medium">Suggested Movies</h1>
        </div>

        <CardCarouselWrapper class="mt-3 mb-8" v-if="suggestedmovies.length > 0 && !suggestloading" :data="suggestedmovies" type="movie" />
        <Myskeletoncarousel v-if="suggestloading" />

    </Master>
</template>

<style>
    .paginate.active{
        background: linear-gradient(to right bottom,#2f81f7,#31d6ff);
        color: #fff;
        border: 1px solid #2f81f7;
    }
</style>