<script>
import Fire from '../icons/Fire.vue'
import Chart from '../icons/Chart.vue'
import Master from '../layout/Master.vue'
import CardCarouselWrapper from '../components/CardCarouselWrapper.vue'

import {useFetchData} from '../UseFetch.js'
import MySkeletonCarousel from '../components/MySkeletonCarousel.vue'

export default {
    data(){
        return{
            trendingMovie : this.$root.trending__movies,
            trendingSerie : this.$root.trending__series,
            search : '',

            trmovieloading : true,
            trserieloading : true
        }
    },
    methods : {
        async getTrendingMovies(){
            if(this.trendingMovie.length < 1){
                const trm = await useFetchData('trending/movie/week?include_adult=true&language=en-US');
                this.trendingMovie = trm.results;
                this.$root.trending__movies = this.trendingMovie;
                setTimeout(() => {
                    this.trmovieloading = false;
                },800);
            }
            else{
                this.trmovieloading = false;
            }  
        },
        async getTrendingSeries(){
            if(this.trendingSerie.length < 1){
                const trs = await useFetchData('trending/tv/week?include_adult=true&language=en-US');
                this.trendingSerie = trs.results;
                this.$root.trending__series = this.trendingSerie;   
                setTimeout(() => {
                    this.trserieloading = false;
                },800);
            }
            else{
                this.trserieloading = false;
            }            
        },
        goSearch(){
            if(this.search.length > 0){
                this.$router.push(`/search?type=str&data=${this.search}`)
            }
        }
    },
    mounted(){
        this.getTrendingMovies(),
        this.getTrendingSeries()
    },
    components: { Master, Chart, Fire, CardCarouselWrapper, MySkeletonCarousel },
}

</script>

<template>
    <Master>
        <!-- ================= hero section ======================= -->
        <section class="sm:px-2 md:px-3 overflow-hidden">
            <div id="banner" style="background: url('https://i.ebayimg.com/images/g/EWgAAOSwyP5aJeiu/s-l1600.jpg')" class="relative z-10 h-[450px] md:h-[550px] flex justify-center items-center flex-col">
                <h1 class="text-textpri montfont font-bold text-3xl sm:text-[38px] tracking-widest drop-shadow-lg">WELCOME.</h1>
                <p class="text-gray-100 text-xs sm:text-sm tracking-wide leading-3 text-center drop-shadow-sm">Enjoy Millions of Movies & Series. Explore now</p>
                <div class="w-[290px] sm:w-[450px] md:w-[520px] flex justify-center items-stretch mt-6 md:mt-8 shadow-lg shadow-slate-950/30">
                    <input @keyup.enter="goSearch" v-model="search" placeholder="Search movies, series, actors . . ." class="w-full py-2 px-3 sm:px-5 rounded-l-3xl text-sm outline-none tracking-wide" autofocus type="text">
                    <button @click="goSearch" style="background: linear-gradient(to right bottom,#2f81f7,#31d6ff)" class="text-sm py-2 md:py-[10px] lg:py-3 px-4 sm:px-5 md:px-7 text-white rounded-r-3xl tracking-wide hover:opacity-80">Search</button>
                </div>
                <div id="banner_overlay" class="absolute w-full h-full left-0 top-0 -z-[1]"></div>
            </div>
        </section>

        <!-- ============================= trending movies ========================== -->
        <div class="w-[93%] mx-auto flex justify-between items-start mt-4 mb-4">
            <div class="flex items-center">
                <Fire class="text-cyan-500 text-lg" /><h1 class="text-textpri ms-1">Trending Movies</h1>
            </div>
            <div class="md:me-5">
                <router-link to="/movies" class="text-blue-400 text-sm hover:text-icon2 py-[2px] px-3 active:text-accent1">View More <i class="bi bi-arrow-right ms-1 text-xs"></i></router-link>
            </div>
        </div>

        <MySkeletonCarousel v-if="trmovieloading" />

        <CardCarouselWrapper v-if="trendingMovie.length > 0 && !trmovieloading" :data="trendingMovie" />

        <!-- ============================= trending series ========================== -->
        <div class="w-[93%] mx-auto flex justify-between items-start mt-7 mb-4">
            <div class="flex items-center">
                <Chart class="text-cyan-500 text-lg" /><h1 class="text-textpri ms-[6px]">Trending Series</h1>
            </div>
            <div class="md:me-5">
                <router-link to="/series" class="text-blue-400 text-sm hover:text-icon2 py-[2px] px-3 active:text-accent1">View More <i class="bi bi-arrow-right ms-1 text-xs"></i></router-link>
            </div>
        </div>

        <MySkeletonCarousel v-if="trserieloading" />

        <CardCarouselWrapper class="pb-5 mb-4" v-if="trendingSerie.length > 0 && !trserieloading" :data="trendingSerie" />


    </Master>
</template>