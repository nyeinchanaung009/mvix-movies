import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path : '/movies',
        name : 'movies',
        component : () => import('../pages/Movies.vue')
    },
    {
        path : '/series',
        name : 'series',
        component : () => import('../pages/Series.vue')
    },
    {
        path : '/detail/:type/:id',
        name : 'detail',
        component : () => import('../pages/Detail.vue')
    },
    {
        path : '/search',
        name : 'search',
        component : () => import('../pages/Search.vue')
    },
    {
        path : '/castdetail/:id',
        name : 'castdetail',
        component : () => import('../pages/CastDetail.vue')
    },
    {
        path : '/watchlist',
        name : 'watchlist',
        component : () => import('../pages/WatchList.vue')
    },
    {
        path : '/profile',
        name : 'profile',
        component : () => import('../pages/Profile.vue')
    },
    {
        path : '/setting',
        name : 'Setting',
        component : () => import('../pages/Setting.vue')
    },
    {
        path : '/login',
        name : 'Login',
        component : () => import('../pages/Login.vue')
    },
    {
        path : '/register',
        name : 'Register',
        component : () => import('../pages/Register.vue')
    },
    {
        path : '/:pathMatch(.*)*',
        name : 'notFound',
        component : () => import('../pages/NotFound.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return { top: 0 }
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
});

export default router;