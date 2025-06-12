<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="btn-group-vertical w-100">
        <RouterLink
            to="/docs"
            class="btn btn-outline-primary text-start fw-bold"
            active-class="active"
            exact-active-class="active"
        >1 &mdash; Overview</RouterLink>
        <RouterLink
            to="/docs/2-installation"
            class="btn btn-outline-primary text-start fw-bold"
            active-class="active"
            exact-active-class="active"
        >2 &mdash; Installation</RouterLink>
        <RouterLink
            to="/docs/3-literals"
            class="btn btn-outline-primary text-start fw-bold"
            active-class="active"
            exact-active-class="active"
        >3 &mdash; Literals</RouterLink>
        <RouterLink
            to="/docs/4-expressions"
            class="btn btn-outline-primary text-start fw-bold"
            active-class="active"
            exact-active-class="active"
        >4 &mdash; Expressions</RouterLink>
        <RouterLink
            to="/docs/5-func-mods"
            class="btn btn-outline-primary text-start fw-bold"
            active-class="active"
            exact-active-class="active"
        >5 &mdash; Functions and Modules</RouterLink>
        <RouterLink
            to="/docs/6-concurrency-error"
            class="btn btn-outline-primary text-start fw-bold"
            active-class="active"
            exact-active-class="active"
        >6 &mdash; Concurrency and Error Handling</RouterLink>
        <RouterLink
            to="/docs/7-comments"
            class="btn btn-outline-primary text-start fw-bold"
            active-class="active"
            exact-active-class="active"
        >7 &mdash; Comments</RouterLink>
        <RouterLink
            to="/docs/8-program-structure"
            class="btn btn-outline-primary text-start fw-bold"
            active-class="active"
            exact-active-class="active"
        >8 &mdash; Program Structure</RouterLink>
        <RouterLink
            to="/docs/9-use-cases"
            class="btn btn-outline-primary text-start fw-bold"
            active-class="active"
            exact-active-class="active"
        >9 &mdash; Use Cases</RouterLink>
    </div>
</template>
