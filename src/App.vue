<script>
import './index.css'

    export default {
        data(){
            return{
                trending__movies : [],
                trending__series : [],

                now__playing__movies : [],
                now__playing__series : [],

                box__movies : [],
                box__series : [],

                suggest__movies : [],
                suggest__series : [],

                genres__list : [],

                watch__list : localStorage.getItem('wlist') ? JSON.parse(localStorage.getItem('wlist')) : [],
            }
        },
        methods : {
            toggleWatchList(id,title,type,poster,vote){
                const watchIDs = this.watch__list.map(val => val.id);
                if(watchIDs.includes(id)){
                    this.removeWatchList(id);
                }else{
                    const newitem = {
                        id : id,
                        title : title,
                        type : type,
                        poster_path : poster,
                        vote_average : vote
                    };
                    this.watch__list = [...this.watch__list,newitem];
                    localStorage.setItem('wlist',JSON.stringify(this.watch__list));
                }
            },
            removeWatchList(id){
                this.watch__list = this.watch__list.filter(val => val.id != id);
                localStorage.setItem('wlist',JSON.stringify(this.watch__list));
            }
        }
    }
</script>

<template>
    <RouterView></RouterView>
</template>