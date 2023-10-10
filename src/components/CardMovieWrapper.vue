<script>
import CardMovie from './CardMovie.vue';

    export default {
        props : ['data','type'],
        components : { CardMovie }
    }
</script>

<template>
    <div class="w-[93%] mx-auto mb-6">
        <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 sm:gap-4">
            <div v-for="d in data" :key="d.id">
                <CardMovie :mdata="d" :mtype="type" />
            </div>
        </div>
    </div>
</template>