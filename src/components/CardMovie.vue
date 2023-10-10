<script>

    export default {
        props : ['mdata','mtype'],
        data(){
            return{
                baseImgURL : 'https://image.tmdb.org/t/p/original/'
            }
        },
        components : {} 
    }
</script>

<template>
    <div class="sm:mb-3"> 
        <router-link v-if="mdata.poster_path != null" :to="`/detail/${mtype}/${mdata.id}`" class="block hover:opacity-80 duration-100 active:opacity-100"><img class="rounded-md" :src="baseImgURL+mdata.poster_path" alt=""/></router-link>

        <router-link v-if="mdata.poster_path == null" :to="`/detail/${mtype}/${mdata.id}`" class="block hover:opacity-80 duration-100 active:opacity-100"><img class="rounded-md border border-bordermute" src="../assets/images/default_poster.png" alt=""/></router-link>

        <router-link :to="`/detail/${mtype}/${mdata.id}`" class="text-textpri font-light text-sm hover:text-textmute block mt-2">{{ mdata.title?.substr(0,18) || mdata.name?.substr(0,18) }} <span v-if="mdata.title?.length > 18">...</span></router-link>
        
        <p class="text-icon2 text-[11px] font-normal ">Rating {{ mdata.vote_average }}</p>
    </div>
</template>