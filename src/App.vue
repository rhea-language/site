<script setup lang="ts">
import "bootstrap";

import isMobileBrowser from "@/assets/isMobileBrowser.ts";
import { watch } from "vue";
import {
    RouterView,
    useRoute
} from "vue-router";

import NavigationBar from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();
watch(
    () => route.fullPath,
    async(_, __) => {
        if(isMobileBrowser()) {
            const toggler = document.querySelector(
                "[data-bs-target=\"#navbar-main\"]"
            ) as HTMLElement;

            const mainNav = document.getElementById("navbar-main");
            if(mainNav?.classList.contains("show"))
                toggler.click();
        }

        window.scrollTo(0, 0)
    }
);
</script>

<template>
    <NavigationBar />

    <div class="p-3"></div>
    <br/><br/>

    <RouterView />
    <br/>

<Footer></Footer>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

.navbar {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
