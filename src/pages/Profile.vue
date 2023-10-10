<script>
import Master from '../layout/Master.vue';

    export default {
    components: { Master }
}
</script>

<template>
    <Master>

        <div class="w-[90%] sm:w-[45%] lg:w-[60%] mx-auto mt-3 pt-5">
            <div class="bg-accent2 rounded-t py-1 flex justify-between border border-accent2 items-center px-2">
                <button @click="this.$router.back()" class="hover:bg-slate-700/30 rounded-full px-2 py-1 text-icon2 hover:text-textmute"><i class="bi bi-arrow-left"></i></button>
                <h1 class="flex-1 text-center text-textpri text-[15px] pe-8 md:pe-24"><i class="bi bi-person-circle me-2 text-icon1"></i>User Profile</h1>
            </div>

            <div class="rounded-b bg-cardbg flex justify-center items-center flex-col py-7 border border-bordermute">
                <div class="relative group w-[85px] h-[85px] rounded-full overflow-hidden cursor-pointer">
                    <img class="w-full h-full object-cover scale-105 brightness-110" style="object-position: -48px 3px;" src="https://i.ytimg.com/vi/xHnakmifCwc/maxresdefault.jpg" alt="profile">
                    <div class="group-hover:flex hidden absolute w-full h-full left-0 top-0 bg-slate-900/60 duration-100 justify-center items-center backdrop-blur-[1px]"><i class="bi bi-pen text-textmute"></i></div>
                </div>
                <h1 class="text-white font-light mt-2 tracking-wider">Wong <i class="bi bi-pencil-square hover:text-textmute hover:bg-accent2 rounded-full text-sm px-1 text-icon1"></i></h1>
            </div>

            <div class="mt-7">
                <router-link to="/login" class="w-full px-4 rounded border-[0.5px] bg-cardbg border-[#191f28] py-1 flex justify-between items-center hover:bg-accent2 hover:text-textpri duration-100">
                    <div class="text-textmute font-light text-sm tracking-wide"><i class="bi bi-envelope me-2 text-icon2"></i>Change Email</div>
                    <i class="bi bi-chevron-right text-lg text-icon1 hover:bg-slate-700/40 rounded-full hover:text-textmute"></i>
                </router-link>
            </div>

            <div class="mt-3">
                <router-link to="/login" class="w-full px-4 rounded border-[0.5px] bg-cardbg border-[#191f28] py-1 flex justify-between items-center hover:bg-accent2 hover:text-textpri duration-100">
                    <div class="text-textmute font-light text-sm tracking-wide"><i class="bi bi-unlock me-2 text-icon2"></i>Change Password</div>
                    <i class="bi bi-chevron-right text-lg text-icon1 hover:bg-slate-700/40 rounded-full hover:text-textmute"></i>
                </router-link>
            </div>

            <div class="mt-3">
                <router-link to="/login" class="w-full px-4 rounded border-[0.5px] bg-cardbg border-[#191f28] py-1 flex justify-between items-center hover:bg-accent2 hover:text-textpri duration-100">
                    <div class="text-textmute font-light text-sm tracking-wide"><i class="bi bi-balloon me-2 text-icon2"></i>Forget Password</div>
                    <i class="bi bi-chevron-right text-lg text-icon1 hover:bg-slate-700/40 rounded-full hover:text-textmute"></i>
                </router-link>
            </div>

            <div class="mt-3">
                <router-link to="/login" class="block  text-center w-full px-4 rounded border-[0.5px] bg-cardbg border-[#191f28] py-2 hover:bg-accent2 hover:text-textpri duration-100">
                    <span class="text-textmute font-medium tracking-wider text-sm"><i class="bi bi-box-arrow-right me-2 text-icon1"></i>Logout</span>
                </router-link>
            </div>
        </div>

    </Master>
</template>