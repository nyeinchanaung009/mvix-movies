<script>
    export default {
        props : ['data'],
        data(){
            return{
                baseImgURL : 'https://image.tmdb.org/t/p/original/',
            }
        }
    }
</script>

<template>
    <div v-for="d in this.data" :key="d.id">
        <div id="castcard" class="mb-3">
            <router-link v-if="d.profile_path != null" :to="`/castdetail/${d.id}`" class="w-[100px] h-[100px] mx-auto ring-1 ring-offset-[3px] ring-slate-700/80 ring-offset-bg1 block rounded-full overflow-hidden hover:ring-cyan-600/80 hover:opacity-80 duration-100"><img class="w-full h-full object-cover object-center" :src="`${this.baseImgURL}${d.profile_path}`" alt="cast image"></router-link>
            <router-link v-if="d.profile_path == null" :to="`/castdetail/${d.id}`" class="w-[100px] h-[100px] mx-auto ring-1 ring-offset-[3px] ring-slate-700/80 ring-offset-bg1 block rounded-full overflow-hidden hover:ring-cyan-600/80 hover:opacity-80 duration-100"><img class="w-full h-full object-cover object-center saturate-50 opacity-90" src="../assets/images/user.png" alt="cast image"></router-link>
            <router-link :to="`/castdetail/${d.id}`" class="block text-textmute text-xs py-2 text-center hover:text-textpri">{{ d.name }}</router-link>
        </div>
    </div>
</template>