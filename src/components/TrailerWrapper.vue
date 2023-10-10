<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Trailericon from '../icons/Trailericon.vue';

export default {
    props : ['video'],
    data(){
        return{
            embedURL : 'https://www.youtube.com/embed/',
            URLtail : '?si=zdKzq2q1ecTcGDIV',
            modules : [Autoplay]
        }
        
    },
    components : { Swiper, SwiperSlide, Trailericon }
}
</script>

<template>
    <div v-if="video.length > 0" class="w-[98%] lg:w-[95%] mx-auto mt-8 mb-12 px-3 sm:px-6 rounded-md border border-bordermute grabg">
        <div class="flex items-center">
            <Trailericon class="text-icon1 text-lg translate-y-[11px]" />
            <h1 class="text-textmute tracking-wide mt-5 ms-[6px]">Trailers</h1>
        </div>
        <Swiper
            :slides-per-view="1"
            :space-between="0"
            :autoplay="{
                delay: 1850,
                disableOnInteraction: false,
            }"
            :modules="modules"
            :breakpoints="{
                '460': {
                    slidesPerView: 2,
                },
                '768': {
                    slidesPerView: 3,
                },
                '920': {
                    slidesPerView: 3,
                },
                '1200': {
                    slidesPerView: 4,
                }
            }"
        >
            <SwiperSlide class="py-10 cursor-grab" v-for="v in video" :key="v.id">
                <div>
                    <iframe class="rounded border border-bordermute w-[210px] h-[98px] xl:w-[260px] xl:h-[153px]" :src="`${embedURL}${v.key}${URLtail}`" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h1 class="text-textpri text-[13px] tracking-wider mt-1 ps-2">{{ v.name }}</h1>
                </div>
            </SwiperSlide>

        </swiper>
    </div>
</template>

