import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import Playground from "@/views/Playground.vue";
import Download from "@/views/Download.vue";
import Documentations from "@/views/Documentations.vue";
import Installation from "@/views/docs/Installation.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/playground",
            name: "playground",
            component: Playground
        },
        {
            path: "/download",
            name: "download",
            component: Download
        },
        {
            path: "/docs",
            name: "docs",
            component: Documentations
        },
        {
            path: "/docs/2-installation",
            name: "2-installation",
            component: Installation
        }
    ],
});

export default router;
