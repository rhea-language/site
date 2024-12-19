<script setup lang="ts">
import { BIconDownload, BIconFileEarmarkText, BIconFileRichtext, BIconGithub, BIconHouse, BIconJoystick } from "bootstrap-icons-vue";
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
                    ><h5 class="d-inline"><BIconHouse style="margin-bottom: 3px" /></h5> Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/playground') }]"
                        to="/playground"
                    ><h5 class="d-inline"><BIconJoystick style="margin-bottom: 3px" /></h5> Playground</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/docs') }]"
                        to="/docs"
                    ><h5 class="d-inline"><BIconFileEarmarkText style="margin-bottom: 3px" /></h5> Documentations</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/references') }]"
                        to="/references"
                    ><h5 class="d-inline"><BIconFileRichtext style="margin-bottom: 3px" /></h5>References</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink
                        :class="['nav-link', { active: isActive('/download') }]"
                        to="/download"
                    ><h5 class="d-inline"><BIconDownload style="margin-bottom: 3px" /></h5> Download</RouterLink>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="https://github.com/n8lang/n8"
                        target="_blank"
                    ><h5 class="d-inline"><BIconGithub style="margin-bottom: 3px" /></h5> GitHub</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
