<script>
import Master from '../layout/Master.vue';

    export default {
        components: { Master }
    }
</script>

<template>
    <Master>

        <div class="w-[90%] sm:w-[45%] lg:w-[60%] mx-auto mt-3 pt-5">
            <div class="bg-accent2 rounded py-1 flex justify-between border border-accent2 items-center px-2">
                <button @click="this.$router.back()" class="hover:bg-slate-700/30 rounded-full px-2 py-1 text-icon2 hover:text-textmute"><i class="bi bi-arrow-left"></i></button>
                <h1 class="flex-1 text-center text-textpri text-[15px] pe-8 md:pe-24"><i class="bi bi-gear me-2 text-icon1"></i>Setting</h1>
            </div>

            <div class="mt-8">
                <h1 class="text-textpri">User Account Setting</h1>
                <router-link to="/profile" class="w-full mt-2 px-4 rounded border-[0.5px] border-[#191f28] bg-cardbg py-1 flex justify-between items-center hover:bg-accent2 hover:text-textpri duration-100">
                    <div class="text-textmute font-light text-sm tracking-wide"><i class="bi bi-person me-2 text-icon2"></i>Profile information</div>
                    <i class="bi bi-chevron-right text-lg text-icon1 hover:bg-slate-700/40 rounded-full hover:text-textmute"></i>
                </router-link>
            </div>

            <div class="mt-4">
                <h1 class="text-textpri">General</h1>
                <button class="w-full mt-2 px-4 rounded border-[0.5px] bg-cardbg border-[#191f28] py-1 flex justify-between items-center hover:bg-accent2 hover:text-textpri duration-100">
                    <div class="text-textmute font-light text-sm tracking-wide"><i class="bi bi-globe2 me-2 text-icon2"></i>Change Languages</div>
                    <i class="bi bi-chevron-right text-lg text-icon1 hover:bg-slate-700/40 rounded-full hover:text-textmute"></i>
                </button>
            </div>

            <div class="mt-3">
                <button class="w-full px-4 rounded border-[0.5px] bg-cardbg border-[#191f28] py-1 flex justify-between items-center hover:bg-accent2 hover:text-textpri duration-100">
                    <div class="text-textmute font-light text-sm tracking-wide"><i class="bi bi-card-checklist me-2 text-icon2"></i>Terms and Privacy Policy</div>
                    <i class="bi bi-chevron-right text-lg text-icon1 hover:bg-slate-700/40 rounded-full hover:text-textmute"></i>
                </button>
            </div>

            <div class="mt-3">
                <button class="w-full px-4 rounded border-[0.5px] bg-cardbg border-[#191f28] py-1 flex justify-between items-center hover:bg-accent2 hover:text-textpri duration-100">
                    <div class="text-textmute font-light text-sm tracking-wide"><i class="bi bi-headset me-2 text-icon2"></i>Help and Support</div>
                    <i class="bi bi-chevron-right text-lg text-icon1 hover:bg-slate-700/40 rounded-full hover:text-textmute"></i>
                </button>
            </div>

            <div class="mt-3">
                <button class="w-full px-4 rounded border-[0.5px] bg-cardbg border-[#191f28] py-1 flex justify-between items-center hover:bg-accent2 hover:text-textpri duration-100">
                    <div class="text-textmute font-light text-sm tracking-wide"><i class="bi bi-question-circle me-2 text-icon2"></i>FAQS?</div>
                    <i class="bi bi-chevron-right text-lg text-icon1 hover:bg-slate-700/40 rounded-full hover:text-textmute"></i>
                </button>
            </div>
        </div>

    </Master>
</template>