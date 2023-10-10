<script>
export default {
    data(){
        return{
            date : new Date().getFullYear()
        }
    }
}
</script>

<template>
    <div id="footer" class="text-center border-t border-bordermute bg-bg1 z-10 pt-0 pb-1">
        <span class="text-textmute font-light text-xs tracking-wider me-3 sm:me-5">M-Vix Movies &copy; {{ date }}. All right reserve.</span>
        <a href="https://github.com/nyeinchanaung009" target="_blank" class="text-textmute font-light text-xs block sm:inline">Developed by : <span class="group text-blue-300 hover:text-accent1 hover:underline underline-offset-2 font-semibold"><i class="bi bi-github me-1 text-icon1 group-hover:text-accent1"></i>Nyein Chan Aung</span></a>
    </div>
</template>

<style>
@media screen and (min-width:910px) {
    #footer{
        width : calc(100vw -235px) !important;
    }
}
    
</style>