<script setup lang="ts">
import Sandbox from "@/components/Sandbox.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { RouterLink } from "vue-router";
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
                    <h3>1 &mdash; Grammar Documentation</h3>
                    <hr />

                    <h4 class="my-2">1.1 &mdash; Overview</h4>
                    <p>Rhea is a dynamically-typed, multi-paradigm programming language designed for expressive syntax, concurrency support, and platform interoperability. The following pages are complete documentation of its syntax and grammar, organized by language constructs and their semantics.</p>
                    <p>This documentations assumes familiarity with programming concepts but does not reference implementation-specific details of the Rhea programming language itself.</p>

                    <h4 class="my-2">1.2 &mdash; <span class="font-monospace">&quot;Hello, World&quot;</span> Program</h4>
                    <p>The script on the example below comprises two lines. The first line, <span class="rounded text-white bg-secondary px-1 font-monospace">#!/usr/bin/rhea</span>, is known as a shebang. It indicates that the script should be executed using the Rhea interpreter located at <span class="rounded text-white bg-secondary px-1 font-monospace">/usr/bin/rhea</span>. This is a common convention in Unix-like operating systems to specify the interpreter for script files.</p>

                    <Sandbox
                        height="12"
                        value="#!/usr/bin/rhea&#x0a;render! &quot;Hello, world!&quot;&#x0a;"
                        title="Hello, World Program"
                        :show-examples="false"
                    />

                    <p>The second line, <span class="rounded text-white bg-secondary px-1 font-monospace">render! "Hello, world!"</span>, is the core of the program. In Rhea, the <span class="rounded text-white bg-secondary px-1 font-monospace">render</span> keyword is used to output content to the standard output, similar to <span class="rounded text-white bg-secondary px-1 font-monospace">print</span> in languages like Python or <span class="rounded text-white bg-secondary px-1 font-monospace">System.out.println</span> in Java. The exclamation mark <span class="rounded text-white bg-secondary px-1 font-monospace">!</span> following <span class="rounded text-white bg-secondary px-1 font-monospace">render</span> is a syntactic feature in Rhea that appends a newline character to the output, ensuring that the cursor moves to the next line after printing. This behavior is akin to using <span class="rounded text-white bg-secondary px-1 font-monospace">println</span> in other languages, which prints the content followed by a newline.</p>

                    <div class="row">
                        <div class="col-6"></div>

                        <div class="col-6" align="right">
                            <RouterLink to="/docs/2-installation" class="text-decoration-none">Installation &#x00bb;</RouterLink>
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
