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

                    <div class="list-group border-0">
                        <a href="#overview" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">1.1</span> Overview</span>
                        </a>
                        <a href="#hello-world" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">1.2</span> "Hello, World" Program</span>
                        </a>
                        <a href="#value-only-concept" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">1.3</span> The Value-Only Concept</span>
                        </a>
                        <a href="#value-variables" class="list-group-item list-group-item-action ps-5 d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">1.3.1</span> Value instead of Variables</span>
                        </a>
                        <a href="#functions-as-values" class="list-group-item list-group-item-action ps-5 d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">1.3.2</span> Functions as Values</span>
                        </a>
                        <a href="#no-distinction" class="list-group-item list-group-item-action ps-5 d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">1.3.3</span> No Distinction Between "Variable" and "Function"</span>
                        </a>
                        <a href="#mutable-functional" class="list-group-item list-group-item-action ps-5 d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">1.3.4</span> Mutable Functional yet Imperative?</span>
                        </a>
                    </div>
                    <br />

                    <h4 class="my-2" id="overview">1.1 &mdash; Overview</h4>
                    <p>Rhea is a dynamically-typed, multi-paradigm programming language designed for expressive syntax, concurrency support, and platform interoperability. The following pages are complete documentation of its syntax and grammar, organized by language constructs and their semantics.</p>
                    <p>Additionally, Rhea is named after the <a href="https://en.wikipedia.org/wiki/Rhea_(moon)" target="_blank" class="text-decoration-none">Saturn&apos;s moon</a>. It is Saturn's second largest moon after Titan &mdash; a large, icy world, composed primarily of water ice with a small rocky core.</p>
                    <p>These documentations assumes familiarity with programming concepts but does not reference implementation-specific details of the Rhea programming language itself.</p>

                    <h4 class="my-2" id="hello-world">1.2 &mdash; <span class="font-monospace">&quot;Hello, World&quot;</span> Program</h4>
                    <p>The script on the example below comprises two lines. The first line, <span class="rounded text-white bg-secondary px-1 font-monospace">#!/usr/bin/rhea</span>, is known as a shebang. It indicates that the script should be executed using the Rhea interpreter located at <span class="rounded text-white bg-secondary px-1 font-monospace">/usr/bin/rhea</span>. This is a common convention in Unix-like operating systems to specify the interpreter for script files.</p>

                    <Sandbox
                        height="6"
                        value="#!/usr/bin/rhea&#x0a;render! &quot;Hello, world!&quot;&#x0a;"
                        title="Hello, World Program"
                        :show-examples="false"
                    />

                    <p>The second line, <span class="rounded text-white bg-secondary px-1 font-monospace">render! "Hello, world!"</span>, is the core of the program. In Rhea, the <span class="rounded text-white bg-secondary px-1 font-monospace">render</span> keyword is used to output content to the standard output, similar to <span class="rounded text-white bg-secondary px-1 font-monospace">print</span> in languages like Python or <span class="rounded text-white bg-secondary px-1 font-monospace">System.out.println</span> in Java. The exclamation mark <span class="rounded text-white bg-secondary px-1 font-monospace">!</span> following <span class="rounded text-white bg-secondary px-1 font-monospace">render</span> is a syntactic feature in Rhea that appends a newline character to the output, ensuring that the cursor moves to the next line after printing. This behavior is akin to using <span class="rounded text-white bg-secondary px-1 font-monospace">println</span> in other languages, which prints the content followed by a newline.</p>

                    <h4 class="my-2" id="value-only-concept">1.3 &mdash; The Value-Only Concept</h4>
                    <p>Rhea&apos;s core philosophy is &quot;value-only&quot;: there are no immutable variables or first-class functions in the traditional sense—everything you name is just a value. Under the hood, both what you&apos;d think of as variables and what you&apos;d think of as functions are simply values bound to names.</p>

                    <h5 class="my-2" id="value-variables">1.3.1 &mdash; Values Instead of Variables</h5>
                    <p>In most languages, when you write</p>

                    <div class="container px-4 mb-4">
                        <div class="card card-secondary border">
                            <div class="card-header pb-0">
                                <p class="mb-0 pb-2">Pseudo-mutable Variable Declaration</p>
                            </div>
                            <div class="card-body">
                                <pre class="mb-0">let x = 10
x = x + 1</pre>
                            </div>
                        </div>
                    </div>
                    <p>you&apos;re mutating a variable <span class="rounded text-white bg-secondary px-1 font-monospace">x</span>. In Rhea, there is no mutation. You write:</p>

                    <Sandbox
                        height="4"
                        value="val x = 10"
                        title="No Mutation"
                        :show-examples="false"
                    />

                    <p>and that binds the <i>value</i> <span class="rounded text-white bg-secondary px-1 font-monospace">10</span> to the name <span class="rounded text-white bg-secondary px-1 font-monospace">x</span>. Once bound, <span class="rounded text-white bg-secondary px-1 font-monospace">x</span> will always refer to <span class="rounded text-white bg-secondary px-1 font-monospace">10</span>; not unless you later &quot;changed&quot; its value.</p>

                    <h5 class="my-2" id="functions-as-values">1.3.2 &mdash; Functions as Values</h5>
                    <p>Likewise, there is no special &quot;function&quot; entity in Rhea—functions are just values too. You create a function-value with <span class="rounded text-white bg-secondary px-1 font-monospace">func</span>, bind it to a name, and then you can pass it around or invoke it exactly as you would any other value. For example:</p>

                    <Sandbox
                        height="8"
                        value="val add = func(x, y)&#x0a;&#x09;@ret x + y&#x0a;&#x0a;render! &quot;3 + 5 is &quot; + add(3, 5)"
                        title="Example Function Definition"
                        :show-examples="false"
                    />

                    <p>Here, <span class="rounded text-white bg-secondary px-1 font-monospace">add</span> is a name bound to a function-value that takes two arguments and returns their sum. You can shorten the binding with sugar:</p>

                    <Sandbox
                        height="8"
                        value="add = func(x, y)&#x0a;&#x09;@ret x + y&#x0a;&#x0a;render! &quot;3 + 5 is &quot; + add(3, 5)"
                        title="Example Function Definition"
                        :show-examples="false"
                    />

                    <p>This is still exactly the same: a mutable binding of a function-value to <span class="rounded text-white bg-secondary px-1 font-monospace">add</span>.</p>

                    <h5 class="my-2" id="no-distinction">1.3.3 &mdash; No Distinction Between &quot;Variable&quot; and &quot;Function&quot;</h5>
                    <p>Because both names bind to values, and values can themselves be functions, there is no conceptual divide between &quot;data&quot; and &quot;behavior.&quot; Everything is just a value. You never say &quot;define a function&quot; or &quot;declare a variable&quot;—you say &quot;bind this value (whether it’s a number, a string, a function, etc.) to this name.&quot;</p>

                    <Sandbox
                        height="30"
                        value="# Binding a number-value&#x0a;pi = 3.14159&#x0a;&#x0a;# Binding a function-value&#x0a;square = func(x) {&#x0a;&#x09;ret x * x&#x0a;}&#x0a;&#x0a;# Also perfectly valid:&#x0a;double = func(f, x)&#x0a;&#x09;@ret f(x) + f(x)&#x0a;&#x0a;render! square(5)           # Prints 25&#x0a;render! double(square, 3)   # Prints 18&#x0a;"
                        title="Binding Examples"
                        :show-examples="false"
                    />

                    <h5 class="my-2" id="mutable-functional">1.3.4 Mutable Functional yet Imperative?</h5>
                    <p>Rhea occupies a unique niche as a programming language by blending functional principles with mutable and imperative features, earning it the label "Mutable Functional yet Imperative." Rhea's functional idea that everything is a value-numbers, strings, arrays, and even functions themselves. By default, bindings created with <span class="rounded text-white bg-secondary px-1 font-monospace">val</span> (or its sugar form, <span class="rounded text-white bg-secondary px-1 font-monospace">name = ...</span>) are mutable, lending themselves to easy reasoning. You compose small, deterministic functions into larger pipelines of transformation, without hidden side-effects.</p>
                    <p>Yet Rhea does not shy away from more traditional, stateful programming when you need it. By introducing the <span class="rounded text-white bg-secondary px-1 font-monospace">val</span> keyword, it gives you explicit permission to create mutable bindings. This lets you increment counters, build up data structures in place, or cache intermediate results, just as you would in a classic imperative language. You can use <span class="rounded text-white bg-secondary px-1 font-monospace">while</span> loops, C-style <span class="rounded text-white bg-secondary px-1 font-monospace">loop(init; cond; step)</span> blocks, and assignment statements to drive algorithms that inherently rely on state changes—think simple simulations, in-place sorting, or interactive REPL sessions.</p>
                    <p>This hybrid design means you can start a problem functionally—breaking it down into pure transformations that are easy to test and reason about—and then locally introduce mutation to optimize performance or express complex stateful logic. You might write a clean, recursive tree-walk as a pure function, then switch to an in-place loop with a mutable accumulator for speed, all within the same codebase.</p>

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
