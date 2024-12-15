<script setup lang="ts">
const currentYear: number = new Date().getFullYear();
</script>

<template>
    <footer class="mt-2 mb-4">
        <hr class="mb-2" />
        <p class="block w-full text-center">
            Copyright 2024&mdash;{{ currentYear }} &copy;
            <a href="https://github.com/nthnn" target="_blank">Nathanne Isip</a>
        </p>
    </footer>
</template>
