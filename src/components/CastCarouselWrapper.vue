<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import Person from '../icons/Person.vue'
export default {
    props : ['cast'],
    components : { Swiper, SwiperSlide,Person }
}
</script>

<template>
    <div class="px-3 md:w-[95%] mx-auto mt-9 tracking-wider flex items-center">
        <Person class="text-cyan-500 text-[15px]" />
        <h1 class="text-textpri ms-2">Casts</h1>
    </div>
    <div v-if="cast" class="w-full px-2 md:w-[98%] mx-auto mb-5">
        <Swiper
            :slides-per-view="3"
            :space-between="1"
            :breakpoints="{
                '415': {
                    slidesPerView: 4,
                    spaceBetween: 1,
                },
                '600': {
                    slidesPerView: 5,
                    spaceBetween: 1,
                },
                '640': {
                    slidesPerView: 5,
                    spaceBetween: 1,
                },
                '768': {
                    slidesPerView: 6,
                    spaceBetween: 1,
                },
                '920': {
                    slidesPerView: 7,
                    spaceBetween: 1,
                },
                '1200': {
                    slidesPerView: 9,
                    spaceBetween: 1,
                }
            }"
        >
            <SwiperSlide v-for="c in cast" :key="c.id" class="text-white px-3 py-6 cursor-grab">
                <div>
                    <div class="w-[80px] sm:w-[95px] h-[80px] sm:h-[95px] mx-auto">
                        <router-link :to="`/castdetail/${c.id}`" v-if="c.profile_path != null" class="hover:opacity-80 duration-200"><img class="w-full h-full object-cover object-center rounded-full ring ring-offset-4 ring-cyan-500/20 ring-offset-bg1 hover:ring-cyan-500/50 duration-200" :src="'https://image.tmdb.org/t/p/original' + c.profile_path" alt="cast" /></router-link>
                        <router-link :to="`/castdetail/${c.id}`" v-if="c.profile_path == null" class="hover:opacity-80 duration-200"><img class="w-full h-full object-cover object-center rounded-full ring ring-offset-4 ring-cyan-500/20 ring-offset-bg1 hover:ring-cyan-500/50 duration-200" src="../assets/images/user.png" alt="cast" /></router-link>
                    </div>
                    <h1 class="text-textpri text-[11px] font-light mt-2 text-center">{{ c.name }}</h1>
                </div>
            </SwiperSlide> 
            
        </swiper>
    </div>

</template>