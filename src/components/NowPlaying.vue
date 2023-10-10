<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

    export default {
        props : ['data'],
        data(){
            return{
                baseImgURL : 'https://image.tmdb.org/t/p/original/',
                type : this.$route.path == '/movies' ? 'movie' : 'tv',
                modules : [Autoplay]
            }
        },
        components : {Swiper, SwiperSlide}
    }
</script>

<template>
    <div class="mt-3 sm:px-3 lg:w-[95%] mx-auto">
        <Swiper
            :slides-per-view="1"
            :autoplay="{
                delay: 1850,
                disableOnInteraction: false,
            }"
            :modules="modules"
            :space-between="1"
        >
            <SwiperSlide v-for="d in data" :key="d.id">
                <div class="h-[450px] md:h-[400px] lg:h-[420px] overflow-hidden sm:rounded-lg relative">
                    <router-link :to="`/detail/${type}/${d.id}`" class=""><img class="w-full h-full object-cover  hover:opacity-90 hover:scale-105 duration-300" :src="`${baseImgURL}${d.backdrop_path}`" alt=""></router-link>
                    <div id="npoverlay" class="absolute w-full h-full left-0 top-0 pointer-events-none"></div>
                    <div class="absolute bottom-0 left-0 w-full pb-5 ps-5">
                        <h1 class="text-textpri montfont font-extralight text-3xl">{{ d.title || d.name }}</h1>
                        <h1 class="text-textpri font-light"><i class="bi bi-star me-1 text-sm"></i>Rating : <span class="font-semibold">{{ d.vote_average }}</span></h1>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    </div>  
</template>

<style>
    #npoverlay{
        background:linear-gradient(to bottom,#0c25502d,#1a2d4e22 20%,#1a2d4eb3 70%);
    }
</style>