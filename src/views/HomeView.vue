<script setup lang="ts">
import Sandbox from "@/components/Sandbox.vue";
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h2 class="border-bottom pb-1">
                    <img src="@/assets/n8-logo.png" width="34px" class="pb-2" />
                    Redefining traditional scripting!
                </h2>
                <br/>

                <p>JIT-compiled dynamic general-purpose programming language utilizing OpenMP parallelism with built-in concurrency and unconventional expressiveness.</p>
                <ul>
                    <li>Direct mathematical operations for vectors and/or arrays.</li>
                    <li>Syntax-level concurrency and multithreading.</li>
                    <li>Language expressiveness with unconventional grammars.</li>
                    <li>Easy foreign-function interfacing for native interoperability.</li>
                    <li>Simplified ecosystem and project structuing.</li>
                </ul>

                <div class="border-bottom pb-3"></div>
                <br/>

                <div class="row gx-0 gy-0 mt-1 px-2">
                    <div class="col-6 px-1">
                        <RouterLink class="btn btn-primary w-100" to="/documentations">Learn More</RouterLink>
                    </div>

                    <div class="col-6 px-1">
                        <RouterLink class="btn btn-secondary w-100" to="/download">Download</RouterLink>
                    </div>
                </div>
                <br/>
            </div>

            <div class="col-lg-6">
                <Sandbox height="32" />
                <br/>
            </div>
        </div>
    </div>
    <br/>

    <div class="bg-dark py-4 shadow">
        <div class="container">
            <center>
                <h2>Use Cases</h2>
                <p>N8 is a versatile, general-purpose dynamic programming language designed to support a wide range of software development applications.</p>
            </center>

            <div class="row equal-cols">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title pt-2">High-performance Scientific Computing</h4>
                        </div>
                        <div class="card-body">
                            <p>N8's ability to perform direct mathematical operations on vectors and arrays makes it ideal for scientific computing applications such as simulations, data analysis, and mathematical modeling. Its concurrency support ensures that heavy computational tasks can run efficiently on multi-core CPUs.</p>
                        </div>
                    </div>
                    <br/>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title pt-2">Data Pipelines & Extract-Transform-Load</h4>
                        </div>
                        <div class="card-body">
                            <p>With the N8's expressiveness, it can be used to build efficient data pipelines for ETL processes in big data applications. Its support for complex data structures and built-in concurrency enables scalable, high-throughput data processing, making it ideal for tasks like data aggregation, transformation, and loading in distributed systems.</p>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>

            <div class="row equal-cols">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title pt-2">Machine Learning Model Prototyping</h4>
                        </div>
                        <div class="card-body">
                            <p>N8 is ideal for Machine Learning and AI due to its efficient mathematical operations, built-in concurrency, flexible syntax, seamless integration with native libraries, and a simplified project structure, enabling rapid development and optimization of advanced algorithms and applications.</p>
                        </div>
                    </div>
                    <br/>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title pt-2">Game Development</h4>
                        </div>
                        <div class="card-body">
                            <p>Language's native support for OpenGL, concurrency, vector operations is perfect for game engines that require real-time physics simulations, AI processing, and rendering pipelines. Developers can also easily interface with native libraries for advanced graphical rendering or sound processing.</p>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    </div>
    <br/>
</template>

<style lang="css" scoped>
.row.equal-cols {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
  
.row.equal-cols:before, .row.equal-cols:after {
	display: block;
}

.row.equal-cols > [class*='col-'] {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 22px;
}
  
.row.equal-cols > [class*='col-'] > * {
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto; 
}
</style>