<script setup lang="ts">
import Sandbox from "@/components/Sandbox.vue";
import { BIconDownload, BIconFileEarmarkText, BIconFileRichtext } from "bootstrap-icons-vue";
defineProps<{}>();
</script>

<template>
    <div class="container mt-4">
        <h2 class="mb-4">Playground</h2>
        <Sandbox height="35" />
        <div class="btn-group header-btn-group w-100 mt-4 px-2" role="group">
            <RouterLink class="btn btn-outline-primary w-100 bg-inherit" to="/docs">
                <BIconFileEarmarkText class="me-2" /><span class="pl-2">Language</span>
            </RouterLink>

            <RouterLink class="btn btn-outline-primary w-100 bg-inherit" to="/references">
                <BIconFileRichtext class="me-2" /><span class="pl-2">References</span>
            </RouterLink>

            <RouterLink class="btn btn-outline-primary w-100 bg-inherit" to="/download">
                <BIconDownload class="me-2" /><span class="pl-2">Download</span>
            </RouterLink>
        </div>
    </div>
</template>
