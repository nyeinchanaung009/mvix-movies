<script>
    export default {
        
    }
</script>

<template>
    <div class="w-[95%] mx-auto mt-6">
        <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 sm:gap-4">
            <div v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" :key="i" class="h-40 sm:h-52 mb-14">
                <div class="w-full h-full flex justify-center items-center skeleton rounded mb-2">
                    <img src="../assets/images/film-strip.png" class="w-[45px] sm:w-[50px] opacity-30" alt="" />
                </div>
                <p class="w-[100px] h-[10px] px-5 skeleton py-[2px] ms-2 rounded-sm"></p>
            </div>
        </div>
    </div>
</template>