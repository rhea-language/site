import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import Playground from "@/views/Playground.vue";
import Download from "@/views/Download.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/playground',
            name: 'playground',
            component: Playground
        },
        {
            path: '/download',
            name: 'download',
            component: Download
        }
    ],
});

export default router;
