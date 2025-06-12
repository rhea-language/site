<script setup lang="ts">
import Sandbox from "@/components/Sandbox.vue";
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
                    <h3>4 &mdash; Expressions</h3>
                    <hr />

                    <div class="list-group border-0">
                        <a href="#overview" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">4.1</span> Overview</span>
                        </a>
                    </div>
                    <br />

                    <h4 class="my-2" id="overview">4.1 &mdash; Overview</h4>
                    <p>In Rhea, expressions are the fundamental units of computation, representing any code that evaluates to a value. They form the backbone of the language, enabling operations like arithmetic calculations, logical decisions, and data manipulation. Expressions can be simple, such as a literal value (<span class="rounded text-white bg-secondary px-1 font-monospace">42</span>, <span class="rounded text-white bg-secondary px-1 font-monospace">"hello"</span>, or <span class="rounded text-white bg-secondary px-1 font-monospace">true</span>), or complex combinations of variables, function calls, and operators. For example:</p>

                    <Sandbox
                        height="11"
                        value="x = 10&#x0a;x + 5 # Arithmetic&#x0a;&#x0a;name = &quot;Rhea&quot;&#x0a;name :: `^[A-Z]` # RegEx Matching"
                        title="Basic Expressions"
                        :show-examples="false"
                    />

                    <p>Control structures like <span class="rounded text-white bg-secondary px-1 font-monospace">if</span>, <span class="rounded text-white bg-secondary px-1 font-monospace">loop</span>, and <span class="rounded text-white bg-secondary px-1 font-monospace">when</span> are also expressions, meaning they return values that can be assigned or used directly. This design allows for concise, expressive code. For instance:</p>

                    <Sandbox
                        height="11"
                        value="user.isAdmin = true&#x0a;role = if(user.isAdmin) &quot;admin&quot; else &quot;guest&quot;&#x0a;&#x0a;render! role&#x0a;"
                        title="Control Expression"
                        :show-examples="false"
                    />

                    <p>Here, the <span class="rounded text-white bg-secondary px-1 font-monospace">if</span>-<span class="rounded text-white bg-secondary px-1 font-monospace">else</span> structure evaluates to <span class="rounded text-white bg-secondary px-1 font-monospace">"admin"</span> or <span class="rounded text-white bg-secondary px-1 font-monospace">"guest"</span>, which is then assigned to role.</p>

                    <div class="row">
                        <div class="col-6">
                            <RouterLink to="/docs/3-literals" class="text-decoration-none">&#x00ab; Literals</RouterLink>
                        </div>

                        <div class="col-6" align="right">
                            <RouterLink to="/docs/5-func-mods" class="text-decoration-none">Functions and Modules &#x00bb;</RouterLink>
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
