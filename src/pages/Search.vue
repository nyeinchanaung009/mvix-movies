<script>
import { useFetchData } from '../UseFetch';
import Movie from '../icons/Movie.vue';
import Person from '../icons/Person.vue';
import Trailericon from '../icons/Trailericon.vue';
import Master from '../layout/Master.vue';
import CardMovieWrapper from '../components/CardMovieWrapper.vue'
import CardCast from '../components/CardCast.vue';
import MySkeleton from '../components/MySkeleton.vue';

    export default {
    data() {
        return {
            searchtype : this.$route.query.type,
            searchdata : this.$route.query.data,

            foundmovies : [],
            foundseries : [],
            foundcasts : [],

            fmovieloading : true,
            fserieloading : true,
            fcastloading : true
        }
    },
    methods : {
        async getMoviesByDiscover(){
            const query =  this.searchtype == 'year' ? 'primary_release_year' : 'with_genres';
            const res = await useFetchData(`discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${query}=${this.searchdata}`);
            this.foundmovies = res.results;
            setTimeout(() => {
                this.fmovieloading = false;
            },800);
        },
        async getSeriesByDiscover(){
            const query =  this.searchtype == 'year' ? 'primary_release_year' : 'with_genres';
            const res = await useFetchData(`discover/tv?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${query}=${this.searchdata}`);
            this.foundseries = res.results;
            setTimeout(() => {
                this.fserieloading = false;
            },800);
        },

        // ========================================
        async getMoviesBySearch(){
            const res = await useFetchData(`search/movie?query=${this.searchdata}&include_adult=true&language=en-US&page=1`);
            this.foundmovies = res.results;
            setTimeout(() => {
                this.fmovieloading = false;
            },800);
        },
        async getSeriesBySearch(){
            const res = await useFetchData(`search/tv?query=${this.searchdata}&include_adult=true&language=en-US&page=1`);
            this.foundseries = res.results;
            setTimeout(() => {
                this.fserieloading = false;
            },800);
        },
        async getCastsBySearch(){
            const res = await useFetchData(`search/person?query=${this.searchdata}&include_adult=true&language=en-US&page=1`);
            this.foundcasts = res.results;
        },

        // ========================================
        getDataByDiscover(){
            this.getMoviesByDiscover();
            this.getSeriesByDiscover();
        },
        getDataBySearch(){
            this.getMoviesBySearch();
            this.getSeriesBySearch();
            this.getCastsBySearch();
        },
        initSearch(){
            if(this.searchtype == 'genre' || this.searchtype == 'year'){
                this.getDataByDiscover();
            }else if(this.searchtype == 'str'){
                this.getDataBySearch();
            }
        }
    },
    mounted(){
        this.initSearch();
    },
    updated(){
        this.searchtype = this.$route.query.type;
        this.searchdata = this.$route.query.data;
        this.initSearch();
    },
    components: { Master, Trailericon, Movie, Person, CardMovieWrapper, CardCast, MySkeleton }
}  
</script>

<template>
    <Master>
        <div class="px-3 md:w-[98%] mx-auto pt-2">
            <div class="flex justify-between items-center border border-accent2 rounded px-2 py-1 bg-cardbg">
                <button @click="this.$router.back()" class="bi bi-arrow-left text-textpri px-2 py-1 rounded-full hover:bg-slate-600/20"></button>
                <h1 class="text-textpri flex-1 text-center me-6 md:me-14 tracking-wider"><i class="bi bi-search text-sm me-2 text-icon2"></i>Search</h1>
            </div>
        </div>


        <!-- ================================= search result movies ==================================== -->
        <div v-if="foundmovies.length > 0" class="flex justify-start items-center w-[97%] mt-5 mb-5 ps-3 mx-auto">
            <Movie  class="text-cyan-500 text-lg" />
            <h1 class="text-textmute ms-1 font-medium">Found Movies</h1>
        </div>

        <CardMovieWrapper v-if="foundmovies.length > 0 && !fmovieloading" :data="this.foundmovies" type="movie"/>
        <MySkeleton v-if="fmovieloading"/>

        <!-- ================================= search result series ==================================== -->
        <div v-if="foundseries.length > 0" class="flex justify-start items-center w-[97%] mt-5 mb-5 ps-3 mx-auto">
            <Trailericon class="text-cyan-500 text-lg" />
            <h1 class="text-textmute ms-1 font-medium">Found Series</h1>
        </div>

        <CardMovieWrapper v-if="foundseries.length > 0 && !fserieloading" :data="this.foundseries" type="tv" />
        <MySkeleton v-if="fserieloading"/>

        <!-- ================================= search result casts ==================================== -->
        <div v-if="foundcasts.length > 0" class="w-[97%] mt-5 ps-3 mb-3 mx-auto">
            <div class="flex justify-start items-center mb-3">
                <Person class="text-cyan-500 text-lg" />
                <h1 class="text-textmute ms-1 font-medium">Found Casts</h1>
            </div>

            <div class="my-6">
                <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 sm:gap-2">
                    <CardCast v-if="foundcasts" :data="foundcasts" />
                </div>
            </div>
        </div>  


        <!-- ================================= search result casts ==================================== -->
        <div v-if="foundmovies.length < 1 && foundseries.length < 1 && foundcasts.length < 1" class="mt-14 pt-14">
            <h1 class="text-textpri text-lg text-center"><i class="bi bi-exclamation-circle me-2 text-icon1"></i>Not Found, <span class="text-base text-textmute">Search again</span></h1>
        </div>

    </Master>
</template>