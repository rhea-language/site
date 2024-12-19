<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const isActive = (path: string) => route.path === path;
</script>

<template>
    <nav class="navbar navbar-dark navbar-expand-lg shadow fixed-top m-0 py-2 w-100 bg-dark border-bottom border-gray">
        <RouterLink class="navbar-brand pl-3" to="/">N8 <span class="desktop-only">Programming</span> Language</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main" aria-controls="navbar-main" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse bg-gray" id="navbar-main">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav my-2 my-lg-0 pr-3">
                <li class="nav-item">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/') }]"
                        to="/"
                    >Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/playground') }]"
                        to="/playground"
                    >Playground</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/getting-started') }]"
                        to="/getting-started"
                    >Getting Started</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/download') }]"
                        to="/download"
                    >Download</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/docs') }]"
                        to="/docs">Documentations</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/references') }]"
                        to="/references">References</RouterLink>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/n8lang/n8" target="_blank">GitHub</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
