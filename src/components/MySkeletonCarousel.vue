<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

    export default {
        data(){
            return{

            }
        },
        components : {Swiper, SwiperSlide}
    }
</script>
<template>
    <div class="w-[95%] mx-auto mt-6">
        <swiper
            :slides-per-view="3"
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
            <SwiperSlide v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
                <div class="h-40 sm:h-52 mb-14">
                    <div class="w-full h-full flex justify-center items-center skeleton rounded mb-2">
                        <img src="../assets/images/film-strip.png" class="w-[45px] sm:w-[50px] opacity-30" alt="" />
                    </div>
                    <p class="w-[100px] h-[10px] px-5 skeleton py-[2px] ms-2 rounded-sm"></p>
                </div>
            </SwiperSlide>
        </swiper>
    </div>
</template>