<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import CardMovie from './CardMovie.vue'

    export default {
        props : ['data','type'],
        data(){
            return{
                modules : [Autoplay]
            }
        },
        components : {Swiper, SwiperSlide, CardMovie}
    }
</script>

<template>
    <div class="w-[93%] mx-auto">
        <div id="card_wrapper" class="">
            <swiper
                :slides-per-view="3"
                :autoplay="{
                    delay: 1850,
                    disableOnInteraction: false,
                }"
                :modules="modules"
                :space-between="14"
                :breakpoints="{
                    '640': {
                        slidesPerView: 5,
                        spaceBetween: 14,
                    },
                    '768': {
                        slidesPerView: 6,
                        spaceBetween: 14,
                    },
                    '920': {
                        slidesPerView: 7,
                        spaceBetween: 14,
                    },
                    '1200': {
                        slidesPerView: 8,
                        spaceBetween: 14,
                    }
                }"
            >
                <!-- swiper card here -->
                <SwiperSlide v-for="d in data" :key="d.id" class="cursor-grab"><CardMovie :mtype="type || d.media_type" :mdata="d" /></SwiperSlide>

            </swiper>

        </div>
    </div>
</template>