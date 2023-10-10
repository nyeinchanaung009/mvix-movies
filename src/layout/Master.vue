<template class=" overflow-x-hidden ">
    <Nav/>
    <div class="marleft lg:ml-[235px] min-h-screen mt-14">
        <slot></slot>
    </div>
    <Footer class="marleft lg:ml-[235px] z-10 " />
</template>

<script>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
    
    export default {
        components : {Nav,Footer},
    }
</script>