<script>
import { useFetchData } from '../UseFetch';
import Movie from '../icons/Movie.vue';
import Trailericon from '../icons/Trailericon.vue';
import Master from '../layout/Master.vue';
import CardMovieWrapper from '../components/CardMovieWrapper.vue'
import Person from '../icons/Person.vue';
import MySkeleton from '../components/MySkeleton.vue'

    export default {
    data() {
        return {
            personid : this.$route.params.id,
            imgURL : 'https://image.tmdb.org/t/p/original',
            seemore : false,

            detail : [],
            castmovie : [],
            castserie : [],
            age : '',

            detailloading : true,
            cmovieloading : true,
            cserieloading : true
        };
    },
    methods: {
        async getCastDetail(){
            const bio = await useFetchData(`person/${this.personid}`)
            this.detail = bio;
            this.getAge(bio.birthday);
            setTimeout(() => {
                this.detailloading = false;
            },800);
        },
        async getCastMovie(){
            const movie = await useFetchData(`person/${this.personid}/movie_credits?language=en-US`)
            this.castmovie = movie.cast;
            setTimeout(() => {
                this.cmovieloading = false;
            },800);
        },
        async getCastSerie(){
            const serie = await useFetchData(`person/${this.personid}/tv_credits?language=en-US`);
            this.castserie = serie.cast;
            setTimeout(() => {
                this.cserieloading = false;
            },800);
        },
        getAge(dob){
            const current = new Date().getFullYear();
            const dobnum = parseInt(dob);
            this.age = current - dobnum;
        }
    },
    mounted(){
        this.getCastDetail();
        this.getCastMovie();
        this.getCastSerie();
    },
    components: { Master, CardMovieWrapper, Movie, Trailericon, Person, MySkeleton }
}
</script>

<template>
    <Master>

        <div v-if="detail && !detailloading" class="px-3 sm:px-0 sm:w-[95%] mx-auto pt-2">
            <div class="bg-card-bg min-h-[580px] md:h-[580px] relative z-30 w-full rounded border border-bordermute">
                <button @click="$router.back()" class="absolute top-4 left-5 text-white bg-slate-800/40 hover:bg-slate-800/60 border border-transparent hover:border-slate-100/10 px-2 py-1 rounded-full"><i class="bi bi-arrow-left text-lg"></i></button>
                
                <div class="h-full flex justify-center items-center flex-wrap py-7">
                    <div class="w-[95%] sm:w-9/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto">
                        <div v-if="detail.profile_path != null" class="py-5">
                            <img class="w-[285px] rounded-lg mx-auto shadow-slate-900/10 shadow-md ring-1 ring-offset-4 ring-cyan-500/40 ring-offset-bg1" :src="imgURL+detail.profile_path" :alt="detail.title" />
                        </div>
                        <div v-if="detail.profile_path == null" class="w-[280px] h-[400px] bg-accent2 mx-auto flex items-center rounded-md border border-bordercolor opacity-80">
                            <img class="w-[100px] opacity-30 mx-auto" src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png" alt="error" />
                        </div>
                    </div>
                    <div class="w-11/12 sm:w-9/12 md:w-6/12 lg:w-7/12 xl:w-8/12 mx-auto">
                        <h1 class="text-textpri font-bold text-xl md:text-2xl">{{ detail.name }}</h1>
                        <p v-if="detail.biography" :class="{'line-clamp-6': !seemore,'block':seemore}" class="text-textmute text-[13.5px] mt-2 opacity-90 font-light tracking-wide md:pe-5 lg:pe-7">{{ detail.biography }}</p>
                        <p v-if="detail.biography" @click="seemore = !seemore" class="inline-block text-textpri text-sm hover:text-hovercolor cursor-pointer mb-4">{{ seemore ? 'See Less' : 'See More ...' }}</p>
                        <div class="pt-3 border-t border-bordermute">
                            <h1 v-if="detail.known_for_department" class="text-textmute font-light text-sm tracking-wide mb-1">Known for : {{ detail.known_for_department }}</h1>
                            <h1 v-if="detail.birthday" class="text-textmute font-light text-sm tracking-wide mb-1">Age : <span class="">{{ age }} years old</span></h1>
                            <h1 v-if="detail.birthday && detail.place_of_birth" class="text-textmute font-light text-sm tracking-wide mb-1"><i class="i bi-cake2 text-textmute opacity-70 text-xs me-[6px]"></i>Born : <span class="">{{ detail.birthday }} , ( {{ detail.place_of_birth }} )</span></h1>
                            <h1 v-if="detail.deathday" class="text-textmute font-light text-sm tracking-wide"><i class="bi bi-calendar4-event text-textmute opacity-70 text-xs me-[6px]"></i>Died : <span class="">{{ detail.deathday }}</span></h1>
                        </div>
                    </div>
                </div>

                <div id="detail_overlay" class="absolute top-0 left-0 w-full h-full -z-10 opacity-[0.36]"></div>

            </div>
        </div>

        <div v-if="detailloading" class="px-3 sm:px-0 sm:w-[95%] mx-auto pt-2">
            <div id="detail_overlay" class="relative z-30 rounded min-h-[590px] md:h-[590px] w-full">

                <div class="h-full flex justify-center items-center flex-wrap">
                    <div class="w-[95%] sm:w-9/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto">
                        <div class="w-[285px] h-[415px] skeleton rounded-lg mx-auto shadow-slate-900/10 shadow-md flex justify-center items-center">
                            <Person class="text-7xl border-4 border-accent1 rounded-full text-accent1 opacity-10" />
                        </div>
                    </div>

                    <div class="w-11/12 sm:w-9/12 md:w-6/12 lg:w-7/12 xl:w-8/12 mx-auto text-white">
                        <div class="py-5">
                            <h1 class="w-[185px] px-6 py-4 skeleton rounded-md"></h1>
                            <h1 class="w-[85%] h-32 px-6 py-4 skeleton rounded-md mt-3"></h1>
                            <h1 class="w-[185px] px-3 py-3 skeleton rounded-md mt-3"></h1>
                            <h1 class="w-[185px] px-3 py-3 skeleton rounded-md mt-3"></h1>
                            <div class="flex justify-start items-center space-x-4 mt-4">
                                <h1 class="w-[125px] px-3 py-3 skeleton rounded-md"></h1>
                                <h1 class="w-[125px] px-3 py-3 skeleton rounded-md"></h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- ================================= found movies of cast ==================================== -->
        <div v-if="castmovie.length > 0 && !cmovieloading" class="flex justify-start items-center w-[97%] mt-9 mb-5 ps-3 mx-auto">
            <Movie class="text-cyan-500 text-lg" />
            <h1 v-if="detail" class="text-textmute ms-2 font-medium">Movies of {{ detail.name }}</h1>
        </div>

        <CardMovieWrapper v-if="castmovie.length > 0 && !cmovieloading" :data="this.castmovie" type="movie"/>
        <MySkeleton v-if="cmovieloading" />

        <!-- ================================= found series of cast ==================================== -->
        <div v-if="castserie.length > 0 && !cserieloading" class="flex justify-start items-center w-[97%] mt-9 mb-5 ps-3 mx-auto">
            <Trailericon class="text-cyan-500 text-lg" />
            <h1 v-if="detail" class="text-textmute ms-2 font-medium">Series of {{ detail.name }}</h1>
        </div>

        <CardMovieWrapper v-if="castserie.length > 0 && !cserieloading" :data="this.castserie" type="tv"/>
        <MySkeleton v-if="cserieloading" />

    </Master>
</template>

<style>
    #detail_overlay{
        background:linear-gradient(to bottom,#0c25502d,#1a2d4e69 20%,#1a2d4ee9 70%);
    }
</style>