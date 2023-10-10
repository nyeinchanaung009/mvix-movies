<script>
import CardMovie from '../components/CardMovie.vue';
import Master from '../layout/Master.vue';

export default {
    data() {
        return {
            clickelement: '',
            watchlist : this.$root.watch__list,
        }
    },
    methods : {
        rmWatchList(id){
            this.$root.removeWatchList(id);
            this.watchlist = this.$root.watch__list;
        },
        closeOption(e){
            if(e.target.id != 'option'){
                this.clickelement = '';
            }
        }
    },
    mounted(){
        window.addEventListener('click', this.closeOption);
    },
    beforeUnmount(){
        window.removeEventListener('click', this.closeOption);
    },
    components: { Master, CardMovie }
}
</script>

<template>
    <Master>

        <div class="w-[93%] mx-auto b mt-3 bg-accent2 rounded py-1 flex justify-between border border-accent2 items-center px-2">
            <button @click="this.$router.back()" class="hover:bg-slate-700/30 rounded-full px-2 py-1 text-icon2 hover:text-textmute"><i class="bi bi-arrow-left"></i></button>
            <h1 class="flex-1 text-center text-textpri text-[15px] pe-8 md:pe-24 tracking-wider font-medium"><i class="bi bi-bookmark me-2 text-icon2"></i>Watchlist</h1>
        </div>

        <div v-if="watchlist.length < 1" class="w-[93%] mx-auto pt-28">
            <div class="w-[50px] md:w-[60px] lg:w-[80px] mx-auto mb-1 opacity-40">
                <img class="w-full" src="../assets/images/film-strip.png" alt="film strip">
            </div>
            <h1 class="text-center font-bold text-icon1 opacity-40">Empty Watchlist</h1>
        </div>

        <div v-if="watchlist.length > 0" class="w-[93%] mt-6 mx-auto mb-6">
            <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 sm:gap-4">

                <div v-for="w in watchlist" :key="w.id" class="relative">
                    <CardMovie :mdata="w" :mtype="w.type" />
                    <div @click="clickelement = w.id" class="absolute right-1 top-2 text-white px-1 bg-slate-800/60 hover:bg-accent1 border border-bordercolor shadow hover:border-accent1 rounded-full cursor-pointer">
                        <i id="option" class="bi bi-three-dots"></i>
                    </div>
                    <button @click="rmWatchList(w.id)" :class="{'inline' : w.id == clickelement,'hidden' : w.id != clickelement}" class="absolute w-[105px] right-2 top-9 py-1 bg-cardbg border border-bordercolor rounded text-xs text-textpri hover:bg-hovercolor"><i class="bi bi-bookmark-dash me-1"></i>Remove from Watchlist</button>
                </div>

            </div>
        </div>

    </Master>
</template>