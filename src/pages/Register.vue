<script>
    export default {
        data(){
            return{
                password : true,
                cpassword : true,
            }
        }
    }
</script>

<template>
    <div class="w-full h-screen flex justify-center items-center bg-bg1">
        <div class="w-[310px] sm:w-[420px]">
            <div class="w-full rounded border border-bordermute bg-cardbg pt-3 p-5 md:p-7">
                <div class="text-center">
                    <h1 class="textgra grabg2 text-3xl py-2"><i class="bi bi-person-circle"></i></h1>
                    <h1 class="font-bold tracking-wide text-xl text-textpri">Register</h1>
                </div>
                <div class="mt-6 mb-3 flex justify-center items-stretch">
                    <button class="text-icon1 rounded-l-sm px-3 border border-bordercolor"><i class="bi bi-person"></i></button>
                    <input type="text" class="text-textpri font-light flex-1 py-1 px-3 bg-accent2 rounded-r-sm outline-none border border-bordercolor focus:border-accent1" placeholder="Name" />
                </div>
                <div class="mt-6 mb-3 flex justify-center items-stretch">
                    <button class="text-icon1 rounded-l-sm px-3 border border-bordercolor"><i class="bi bi-envelope"></i></button>
                    <input type="text" class="text-textpri font-light flex-1 py-1 px-3 bg-accent2 rounded-r-sm outline-none border border-bordercolor focus:border-accent1" placeholder="Email" />
                </div>
                <div class="mt-6 mb-3 flex justify-center items-stretch relative">
                    <button class="text-icon1 rounded-l-sm px-[10px] text-lg border border-bordercolor"><i class="bi bi-key"></i></button>
                    <input :type="password ? 'password' : 'text'" class="text-textpri font-light flex-1 py-1 px-3 bg-accent2 rounded-r-sm outline-none border border-bordercolor focus:border-accent1" placeholder="Password" />
                    <button @click="password = !password" class="absolute top-0 right-2 h-full text-textpri hover:text-accent1  px-2 border-y rounded-sm border-bordercolor"><i :class="{'bi-eye-slash-fill' : password,'bi-eye-fill' : !password}" class="bi"></i></button>
                </div>
                <div class="mt-6 mb-3 flex justify-center items-stretch relative">
                    <button class="text-icon1 rounded-l-sm px-3 border border-bordercolor"><i class="bi bi-shield-lock"></i></button>
                    <input :type="cpassword ? 'password' : 'text'" class="text-textpri font-light flex-1 py-1 px-3 bg-accent2 rounded-r-sm outline-none border border-bordercolor focus:border-accent1" placeholder="Confirm Password" />
                    <button @click="cpassword = !cpassword" class="absolute top-0 right-2 h-full text-textpri hover:text-accent1  px-2 border-y rounded-sm border-bordercolor"><i :class="{'bi-eye-slash-fill' : cpassword,'bi-eye-fill' : !cpassword}" class="bi"></i></button>
                </div>

                <router-link to="/" class="block text-center text-sm font-semibold text-textpri grabg2 w-full py-[6px] mt-7 rounded-sm hover:opacity-80 tracking-wider">Register</router-link>

                <div class="border-t border-slate-800/50 mt-5">
                    <h1 class="text-xs text-center text-icon1 pt-3">- or Register with -</h1>
                    <div class="flex justify-center items-center space-x-4 mt-4">
                        <button title="google" class="text-sm text-textpri px-3 py-2 rounded-full hover:text-textmute bg-accent2 hover:bg-hovercolor"><i class="bi bi-google"></i></button>
                        <button title="facebook" class="text-sm text-textpri px-3 py-2 rounded-full hover:text-textmute bg-accent2 hover:bg-hovercolor"><i class="bi bi-facebook"></i></button>
                        <button title="twitter" class="text-sm text-textpri px-3 py-2 rounded-full hover:text-textmute bg-accent2 hover:bg-hovercolor"><i class="bi bi-twitter"></i></button>
                    </div>
                </div>
            </div>
            <h1 class="text-center text-xs text-icon1 mt-2 tracking-wide font-medium">Already have an Account? <router-link to="/login" class="text-accent1 hover:opacity-80 hover:underline underline-offset-2">Login</router-link> here.</h1>
        </div>
        
    </div>
</template>