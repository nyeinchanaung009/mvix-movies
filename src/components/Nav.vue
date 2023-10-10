<script>
import { RouterLink } from 'vue-router'
import Movie from '../icons/Movie.vue'
import Movie2 from '../icons/Movie2.vue'
import Setting from '../icons/Setting.vue'
import Person from '../icons/Person.vue'
import { useFetchData } from '../UseFetch'

    export default {
        data(){
            return{
                navOpen : false,
                base_URL : 'https://api.themoviedb.org/3/',
                URL_tail : '?language=en-US',
                options : {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZhY2M2YjZhODcxNDIwMDlkMGU0NGQ2ZGExZGI3YyIsInN1YiI6IjY0ZjAyODBmZGJiYjQyMDBhYjVlODkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJ0khRVk2ppQ5F9PJHMs7jz4AM9j4OMWD9cDsvAX33s'
                    }
                },
                genres : this.$root.genres__list,
                search : ''
            }
        },
        methods : {
            async getGenres(){
                if(this.genres.length < 1){
                   const res = await useFetchData('genre/movie/list'+this.URL_tail);
                    this.genres = res.genres;
                    this.$root.genres__list = this.genres; 
                }
            },
            goSearch(){
                if(this.search.length > 0){
                    this.$router.push(`/search?type=str&data=${this.search}`)
                }
            }
        },
        mounted(){
            this.getGenres();
        },
        components : { Movie, Movie2, Setting, RouterLink, Person },
    }
</script>

<template>
    <!-- ================================ nav bar =========================================== -->
    <nav class="fixed w-full top-0 left-0 z-40 bg-bg1 py-[6px] px-3 md:px-5 border-b border-bordermute overflow-x-hidden">
        
        <div class=" flex justify-center items-center flex-wrap relative ">
            <a href="/" class="group flex justify-start items-center">
                <div class="w-[30px] sm:w-[35px]">
                    <img class="brightness-150" src="../assets/images/logo.png" alt="logo" />
                </div>
                <h1 class="hidden min-[500px]:block grabg2 textgra text-[13px] md:text-[15px] ms-3 themefont tracking-wide hover:opacity-75">M-VIX Movies</h1>
            </a>

            <div class="flex justify-between items-center flex-1">
                <div class="flex-1">
                    <div class="w-[90%] sm:w-[80%] ms-auto">
                        <input @keyup.enter="goSearch" v-model="search" placeholder="Search movies, series, actors . . . ." class="placeholder:text-xs placeholder:md:text-sm w-[82%] sm:w-[80%] md:w-[65%] bg-transparent outline-none text-textpri text-sm border rounded-md py-1 sm:py-[6px] px-2 sm:px-3 border-bordermute focus:border-bordercolor" type="text" />
                        <button @click="goSearch" class=" text-icon2 hover:bg-gray-700/40 px-2 py-1 rounded-full hover:text-icon1 sm:ms-2"><i class="bi bi-search "></i></button>
                    </div>
                </div>
                <div title="Profile" class="group relative hidden min-[910px]:block w-[25px] cursor-pointer hover:opacity-80">
                    <router-link to="/profile" class=""><Person class="text-[24px] hover:opacity-80 duration-100 rounded-full px-1 grabg2 text-white" /></router-link>
                </div>
                <button @click="navOpen = true" class="min-[910px]:hidden text-textpri text-2xl bg-accent2 px-1 rounded hover:bg-hovercolor">
                    <i class="bi bi-list"></i>
                </button>
            </div>

            <!-- ================================ side bar =========================================== -->
            <div id="sidebar" class="fixed top-0 w-[250px] sm:w-[230px] md:w-[220px] lg:w-[235px] h-screen bg-cardbg overflow-y-auto border-x border-bordermute duration-200" :class="{ 'right-0' : navOpen , '-right-[250px]' : !navOpen}" >
                <div class="flex min-[910px]:hidden border-b border-bordermute px-2 py-2 min-[910px]:py-3 justify-between items-center">
                    <div class="flex items-center">
                        <img class="w-[25px] brightness-150" src="../assets/images/logo.png" alt="logo">
                        <a href="/" class="group ps-3 themefont textgra grabg2 text-[15px]">M-Viz Movies</a>
                    </div>
                    <button @click="navOpen = false" class="text-textpri px-2 py-1 me-1 text-sm sm:text-base bg-accent2 hover:bg-accent1 rounded"><i class="bi bi-x-lg"></i></button>
                </div>

                <div class="py-1 px-3">
                    <div class="border-b border-bordermute">
                        <router-link to="/profile" class="inline-block min-[910px]:hidden text-textmute text-sm font-light hover:bg-accent2 ps-2 py-1 rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start my-1 tracking-widest active:text-accent1"><i class="bi bi-person text-base me-2"></i>Profile</router-link>
                        <router-link to="/watchlist" class="inline-block text-textmute text-sm font-light hover:bg-accent2 px-3 pt-1 pb-2 rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1"><i class="bi bi-bookmark text-textpri me-2 text-xs"></i>Watch List</router-link>
                    </div>

                    <div class="py-2 border-b border-bordermute">
                        <h1 class="text-textpri pb-2">General</h1>
                        <div class="flex justify-start items-start flex-col">
                            <RouterLink to="/" class="nav text-sm text-textpri font-light hover:bg-accent2 px-3 py-1 rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1 mb-1"><i class="bi bi-house-door me-2 text-sm"></i>Home</RouterLink>
                            <RouterLink to="/movies" class="nav text-sm text-textpri font-light hover:bg-accent2 px-3 py-1 rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide flex items-center active:text-accent1 mb-1"><Movie class="me-2 text-sm" />Movies</RouterLink>
                            <RouterLink to="/series" class="nav text-sm text-textpri font-light hover:bg-accent2 px-3 py-1 rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide flex items-center active:text-accent1 mb-1"><Movie2 class="me-2 text-sm" />Series/Shows</RouterLink>
                        </div>
                    </div>

                    <div id="genres" class="pb-3 border-b border-bordermute">
                        <h1 class="text-textpri pt-1">Genres</h1>
                        <div v-if="this.genres" class="h-[200px] md:h-[265px] overflow-y-auto flex justify-start items-start flex-col border border-transparent">
                            <router-link :to="`/search?type=genre&data=${g.id}`" v-for="g in this.genres" class="text-textmute text-sm font-light hover:bg-accent2 px-3 py-1 mb-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1">{{ g.name }}</router-link>
                            <!-- <button class="text-textmute text-sm font-light hover:bg-accent2 px-3 py-1 mb-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1">Adult</button> -->
                        </div>
                    </div>

                    <div id="year" class="pt-1">
                        <h1 class="text-textpri pt-1">Search by Year</h1>
                        <div class="h-[120px] overflow-y-auto flex justify-start items-start flex-col border border-transparent mb-1">
                            <router-link :to="`/search?type=year&data=2000`" class="text-textmute text-sm font-light hover:bg-accent2 px-3 py-1 mb-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1">2023</router-link>
                            <router-link :to="`/search?type=year&data=2000`" class="text-textmute text-sm font-light hover:bg-accent2 px-3 py-1 mb-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1">2022</router-link>
                            <router-link :to="`/search?type=year&data=2000`" class="text-textmute text-sm font-light hover:bg-accent2 px-3 py-1 mb-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1">2021</router-link>
                            <router-link :to="`/search?type=year&data=2000`" class="text-textmute text-sm font-light hover:bg-accent2 px-3 py-1 mb-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1">2020</router-link>
                            <router-link :to="`/search?type=year&data=2000`" class="text-textmute text-sm font-light hover:bg-accent2 px-3 py-1 mb-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1">2019</router-link>
                            <router-link :to="`/search?type=year&data=2000`" class="text-textmute text-sm font-light hover:bg-accent2 px-3 py-1 mb-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1">2017</router-link>
                            <router-link :to="`/search?type=year&data=2000`" class="text-textmute text-sm font-light hover:bg-accent2 px-3 py-1 mb-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1">2015</router-link>
                            <router-link :to="`/search?type=year&data=2000`" class="text-textmute text-sm font-light hover:bg-accent2 px-3 py-1 mb-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start tracking-wide active:text-accent1">2000</router-link>
                        </div>
                    </div>

                    <div class="py-1 border-y border-bordermute ">
                        <router-link to="/setting" class="block text-textmute text-sm font-light hover:bg-accent2 px-3 py-[1px] rounded border border-transparent hover:border-bordercolor hover:text-white w-full text-start my-1 tracking-wide active:text-accent1">
                            <span class="flex items-center">
                                <Setting class="text-white text-[17px]" />
                                <span class="ms-1">Setting</span>
                            </span>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </nav>  
</template>