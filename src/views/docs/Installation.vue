<script setup lang="ts">
import TableOfContents from "@/components/TableOfContents.vue";
</script>

<template>
    <div class="container mt-4">
        <h2 class="mb-4">Documentations</h2>

        <div class="row">
            <div class="col-lg-3 desktop-only">
                <TableOfContents />
            </div>

            <div class="col-lg-9">
                <div class="card border border-primary bg-transparent rounded-3 p-4 shadow-lg mb-4">
                    <h3>2 &mdash; Installation</h3>
                    <hr />

                    <div class="row">
                        <div class="col-6">
                            <RouterLink to="/docs" class="text-decoration-none">&#x00ab; Overview</RouterLink>
                        </div>

                        <div class="col-6" align="right">
                            <RouterLink to="/docs/2-literals" class="text-decoration-none">Literals &#x00bb;</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mobile-only">
            <TableOfContents />
        </div>
    </div>
</template>
