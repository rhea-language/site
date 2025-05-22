<script setup lang="ts">
import { BIconDownload, BIconFileEarmarkText, BIconFileRichtext, BIconGithub, BIconHouse, BIconJoystick } from "bootstrap-icons-vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const isActive = (path: string) => route.path === path;
</script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top border-bottom border-gray">
        <RouterLink class="navbar-brand ms-4" to="/">Rhea <span class="desktop-only">Programming </span>Language</RouterLink>
        <button class="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main" aria-controls="navbar-main" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar-main">
            <ul class="navbar-nav me-auto"></ul>
            <ul class="navbar-nav me-4">
                <li class="nav-item ms-2">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/') }]"
                        to="/"
                    ><span class="d-flex"><BIconHouse class="me-2 mt-1" /> Home</span></RouterLink>
                </li>
                <li class="nav-item ms-2">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/playground') }]"
                        to="/playground"
                    ><span class="d-flex"><BIconJoystick class="me-2 mt-1" /> Playground</span></RouterLink>
                </li>
                <li class="nav-item ms-2">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/download') }]"
                        to="/download"
                    ><span class="d-flex"><BIconDownload class="me-2 mt-1" /> Download</span></RouterLink>
                </li>
                <li class="nav-item ms-2 dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <span class="d-inline-block"><BIconFileEarmarkText class="me-1" /> Documentations</span>
                    </a>
                    <div class="dropdown-menu">
                        <RouterLink
                            class="dropdown-item"
                            to="/docs"
                        ><BIconFileEarmarkText class="me-1" /> Language Tour</RouterLink>
                        <RouterLink
                            class="dropdown-item"
                            to="/references"
                        ><BIconFileRichtext class="me-1" /> References</RouterLink>
                    </div>
                </li>
                <li class="nav-item ms-2">
                    <a
                        class="nav-link"
                        href="https://github.com/rhea-lang/rhea"
                        target="_blank"
                    ><span class="d-flex"><BIconGithub class="me-2 mt-1" /> GitHub</span></a>
                </li>
            </ul>
        </div>
    </nav>
</template>
