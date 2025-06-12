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
                    <h3>3 &mdash; Literals</h3>
                    <hr />

                    <div class="list-group border-0">
                        <a href="#overview" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">3.1</span> Overview</span>
                        </a>
                        <a href="#numeric-literals" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">3.2</span> Numeric Literals</span>
                        </a>
                        <a href="#string-literals" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">3.3</span> String Literals</span>
                        </a>
                        <a href="#boolean-literals" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">3.4</span> Boolean Literals</span>
                        </a>
                        <a href="#nil-literal" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">3.5</span> Nil Literal</span>
                        </a>
                        <a href="#regex-literals" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><span class="fw-semibold me-2">3.6</span> RegEx Literals</span>
                        </a>
                    </div>
                    <br />

                    <h4 class="my-2" id="overview">3.1 &mdash; Overview</h4>
                    <p>Literals are explicit values written directly into the code. They represent constants of various types, such as numbers, text, boolean states, or specialized constructs like regular expressions. Rhea supports a rich set of literals, including numeric bases, probabilistic booleans, and platform-independent null values. These literals enable developers to express data concisely and intuitively, without requiring complex initialization.</p>

                    <h4 class="my-2" id="numeric-literals">3.2 &mdash; Numeric Literals</h4>
                    <p>Rhea provides numeric literals in multiple bases, prefixed to indicate their format:</p>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <b>Binary</b>
                            <p class="mb-0"><span class="rounded text-white bg-secondary px-1 font-monospace">0b</span> followed by <span class="rounded text-white bg-secondary px-1 font-monospace">0</span> or <span class="rounded text-white bg-secondary px-1 font-monospace">1</span> (e.g., <span class="rounded text-white bg-secondary px-1 font-monospace">0b1010</span>).</p>
                        </li>
                        <li class="list-group-item">
                            <b>Trinary</b>
                            <p class="mb-0"><span class="rounded text-white bg-secondary px-1 font-monospace">0t</span> followed by <span class="rounded text-white bg-secondary px-1 font-monospace">0</span>, <span class="rounded text-white bg-secondary px-1 font-monospace">1</span>, or <span class="rounded text-white bg-secondary px-1 font-monospace">2</span> (e.g., <span class="rounded text-white bg-secondary px-1 font-monospace">0t101</span>).</p>
                        </li>
                        <li class="list-group-item">
                            <b>Octadecimal</b>
                            <p class="mb-0"><span class="rounded text-white bg-secondary px-1 font-monospace">0c</span> followed by digits <span class="rounded text-white bg-secondary px-1 font-monospace">0</span>-<span class="rounded text-white bg-secondary px-1 font-monospace">7</span> (e.g., <span class="rounded text-white bg-secondary px-1 font-monospace">0c12</span>).</p>
                        </li>
                        <li class="list-group-item">
                            <b>Hexadecimal</b>
                            <p class="mb-0"><span class="rounded text-white bg-secondary px-1 font-monospace">0x</span> followed by digits <span class="rounded text-white bg-secondary px-1 font-monospace">0</span>-<span class="rounded text-white bg-secondary px-1 font-monospace">9</span> or <span class="rounded text-white bg-secondary px-1 font-monospace">a</span>-<span class="rounded text-white bg-secondary px-1 font-monospace">f</span> (case-insensitive, e.g., <span class="rounded text-white bg-secondary px-1 font-monospace">0x0a</span>).</p>
                        </li>
                    </ul>
                    <br/>

                    <Sandbox
                        height="10"
                        value="render! &quot;0b1010 is &quot; + 0b1010&#x0a;render! &quot;0t101 is &quot; + 0t101&#x0a;render! &quot;0c12 is &quot; + 0c12&#x0a;render! &quot;0x0a is &quot; + 0x0a&#x0a;"
                        title="Numeric Literals"
                        :show-examples="false"
                    />

                    <h4 class="my-2" id="string-literals">3.3 &mdash; String Literals</h4>
                    <p>Strings are sequences of characters enclosed in either double (<span class="rounded text-white bg-secondary px-1 font-monospace">"..."</span>) or single (<span class="rounded text-white bg-secondary px-1 font-monospace">'...'</span>) quotes. They can include escape sequences for special characters (e.g., <span class="rounded text-white bg-secondary px-1 font-monospace">\n</span> for newlines) and support multiline text. For example, <span class="rounded text-white bg-secondary px-1 font-monospace">"Hello, Rhea!"</span> and <span class="rounded text-white bg-secondary px-1 font-monospace">'A string with "nested" quotes'</span> are valid. Strings are immutable and widely used for text processing, I/O operations, and dynamic value representations.</p>
                    <p>The following table lists the supported escape sequences in Rhea string literals, based on the provided code. These sequences are replaced with their corresponding control characters during string parsing.</p>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <b>New line: <span class="rounded text-white bg-secondary px-1 font-monospace">\n</span></b>
                            <p class="mb-0">Moves the cursor to the beginning of the next line.</p>
                        </li>
                        <li class="list-group-item">
                            <b>Carriage return: <span class="rounded text-white bg-secondary px-1 font-monospace">\r</span></b>
                            <p class="mb-0">Moves the cursor to the start of the current line.</p>
                        </li>
                        <li class="list-group-item">
                            <b>Horizontal tab: <span class="rounded text-white bg-secondary px-1 font-monospace">\t</span></b>
                            <p class="mb-0">Inserts a tab space.</p>
                        </li>
                        <li class="list-group-item">
                            <b>Alert/Bell: <span class="rounded text-white bg-secondary px-1 font-monospace">\a</span></b>
                            <p class="mb-0">Triggers a system alert (e.g., terminal beep).</p>
                        </li>
                        <li class="list-group-item">
                            <b>Backspace: <span class="rounded text-white bg-secondary px-1 font-monospace">\b</span></b>
                            <p class="mb-0">Moves the cursor back one character.</p>
                        </li>
                        <li class="list-group-item">
                            <b>Vertical tab: <span class="rounded text-white bg-secondary px-1 font-monospace">\v</span></b>
                            <p class="mb-0">Moves the cursor down to the next vertical tab stop (rarely used).</p>
                        </li>
                        <li class="list-group-item">
                            <b>Form feed: <span class="rounded text-white bg-secondary px-1 font-monospace">\f</span></b>
                            <p class="mb-0">Advances to the next page/screen (used in printing).</p>
                        </li>
                        <li class="list-group-item">
                            <b>Escape: <span class="rounded text-white bg-secondary px-1 font-monospace">\e</span></b>
                            <p class="mb-0">Used for ANSI escape codes (e.g., terminal text formatting).</p>
                        </li>
                    </ul>
                    <br/>

                    <Sandbox
                        height="10"
                        value="render! &quot;This is a new\nline.&quot;&#x0a;render! &quot;This is a new\r\nline with a carriage return.&quot;&#x0a;render! &quot;And here's a line with a\ttab&quot;&#x0a;render! &quot;How about \e[94mcolored\e[0m text?&quot;&#x0a;"
                        title="Escape Sequences"
                        :show-examples="false"
                    />

                    <h4 class="my-2" id="boolean-literals">3.4 &mdash; Boolean Literals</h4>
                    <p>Rhea defines <span class="rounded text-white bg-secondary px-1 font-monospace">true</span> and <span class="rounded text-white bg-secondary px-1 font-monospace">false</span> as standard boolean values. Additionally, it introduces <span class="rounded text-white bg-secondary px-1 font-monospace">maybe</span>, a probabilistic boolean that randomly evaluates to <span class="rounded text-white bg-secondary px-1 font-monospace">true</span> or <span class="rounded text-white bg-secondary px-1 font-monospace">false</span> at runtime, useful for simulations or randomized logic.</p>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <b><span class="rounded text-white bg-secondary px-1 font-monospace">true</span>/<span class="rounded text-white bg-secondary px-1 font-monospace">false</span></b>
                            <p class="mb-0">Standard boolean values.</p>
                        </li>
                        <li class="list-group-item">
                            <b><span class="rounded text-white bg-secondary px-1 font-monospace">maybe</span></b>
                            <p class="mb-0">Represents a probabilistic boolean (evaluates randomly to <span class="rounded text-white bg-secondary px-1 font-monospace">true</span> or <span class="rounded text-white bg-secondary px-1 font-monospace">false</span> on runtime).</p>
                        </li>
                    </ul>
                    <br/>

                    <Sandbox
                        height="12"
                        value="render! &quot;True is &quot; + true + &quot;, false is &quot; + false&#x0a;&#x0a;# You'll get either true or false by running this script multiple times&#x0a;render! &quot;Maybe? &quot; + maybe&#x0a;"
                        title="Boolean Literals"
                        :show-examples="false"
                    />

                    <h4 class="my-2" id="nil-literal">3.5 &mdash; Nil Literal</h4>
                    <p>The <span class="rounded text-white bg-secondary px-1 font-monospace">nil</span> literal represents the absence of a value, akin to <span class="rounded text-white bg-secondary px-1 font-monospace">null</span> in other languages, and is used to denote uninitialized variables or optional results.</p>

                    <h4 class="my-2" id="regex-literals">3.6 &mdash; RegEx Literals</h4>
                    <p>Regular expression literals are delimited by backticks (e.g., <span class="rounded text-white bg-secondary px-1 font-monospace">`a.b`</span>) and provide a compact way to define pattern-matching rules. They support standard regex syntax and flags (e.g., case insensitivity), enabling powerful text manipulation and validation. For instance, <span class="rounded text-white bg-secondary px-1 font-monospace">`[A-Z]+`</span> matches uppercase letters. These literals are used with operators like <span class="rounded text-white bg-secondary px-1 font-monospace">::</span> (match) and <span class="rounded text-white bg-secondary px-1 font-monospace">!:</span> (non-match) to perform runtime pattern checks, such as <span class="rounded text-white bg-secondary px-1 font-monospace">str :: `^\d+$`</span> to test if a string contains only digits.</p>

                    <Sandbox
                        height="22"
                        value="# Regular expression pattern for numbers only&#x0a;pattern = `^\d+$`&#x0a;&#x0a;# Number only string and a hexadecimal string&#x0a;numbersOnly = &quot;123456&quot;&#x0a;hexadecimal = &quot;123abc&quot;&#x0a;&#x0a;# Test strings for pattern matching&#x0a;render! &quot;Did matched? (numbers only) &quot; + (pattern :: numbersOnly)&#x0a;render! &quot;Did not matched? (hexadecimal) &quot; + (pattern !: hexadecimal)&#x0a;"
                        title="RegEx Matching"
                        :show-examples="false"
                    />

                    <div class="row">
                        <div class="col-6">
                            <RouterLink to="/docs/2-installation" class="text-decoration-none">&#x00ab; Installation</RouterLink>
                        </div>

                        <div class="col-6" align="right">
                            <RouterLink to="/docs/4-expressions" class="text-decoration-none">Expressions &#x00bb;</RouterLink>
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
