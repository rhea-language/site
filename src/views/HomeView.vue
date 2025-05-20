<script setup lang="ts">
import Sandbox from "@/components/Sandbox.vue";
import {
    BIconController,
    BIconCpu,
    BIconDownload,
    BIconMotherboard,
    BIconNewspaper,
    BIconPcDisplay
} from "bootstrap-icons-vue";
</script>

<template>
    <br/>
    <div class="desktop-only">
        <br/><br/>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h2 class="border-bottom pb-1">
                    <img src="@/assets/rhea-logo.png" width="34px" class="pb-2" />
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

                <div class="btn-group header-btn-group w-100 mt-1 mb-4 px-2" role="group">
                    <RouterLink class="btn btn-outline-primary w-100 bg-inherit" to="/documentations"><BIconNewspaper class="me-2" /><span class="pl-2">Learn More</span></RouterLink>
                    <RouterLink class="btn btn-outline-primary w-100 bg-inherit" to="/download"><BIconDownload class="me-2" /><span class="pl-2">Download</span></RouterLink>
                </div>
                <br/>
            </div>

            <div class="col-lg-6">
                <Sandbox height="22" />
                <br/>
            </div>
        </div>
    </div>
    <br/><br/><br/>

    <div class="mt-4 py-4 shadow-lg">
        <div class="container">
            <div align="center">
                <h2>Use Cases</h2>
                <p>Rhea is a versatile, general-purpose dynamic programming language designed to support a wide range of software development applications.</p>
            </div>

            <div class="row equal-cols gx-5">
                <div class="col-lg-6">
                    <div class="card bg-transparent card-translucent border border-primary p-4 mt-lg-4 mt-2">
                        <div class="card-header">
                            <h3><BIconCpu/></h3>
                            <h5 class="card-title m-0 p-0">High-performance Scientific Computing</h5>
                        </div>
                        <div class="card-body m-0">
                            <p>Rhea's ability to perform direct mathematical operations on vectors makes it ideal for scientific computing applications such as simulations, data analysis, and mathematical modeling. Its concurrency support ensures that heavy computational tasks can run efficiently on multi-core CPUs.</p>
                            <a href="#" class="btn btn-primary w-100">Learn More</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card bg-transparent card-translucent border border-primary p-4 mt-lg-4 mt-2">
                        <div class="card-header">
                            <h3><BIconPcDisplay /></h3>
                            <h5 class="card-title m-0 p-0">Data Pipelines and Extract-Transform-Load</h5>
                        </div>
                        <div class="card-body m-0">
                            <p>Rhea can be used to build efficient data pipelines for ETL processes in big data applications. Its support for complex data structures and built-in concurrency enables scalable, high-throughput data processing, making it ideal for tasks like data aggregation, transformation, and loading.</p>
                            <a href="#" class="btn btn-primary w-100">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row equal-cols gx-5">
                <div class="col-lg-6">
                    <div class="card bg-transparent card-translucent border border-primary p-4 mt-lg-4 mt-2">
                        <div class="card-header">
                            <h3><BIconMotherboard /></h3>
                            <h5 class="card-title m-0 p-0">Machine Learning Model Prototyping</h5>
                        </div>
                        <div class="card-body m-0">
                            <p>Rhea is ideal for Machine Learning and AI due to its efficient mathematical operations, built-in concurrency, flexible syntax, seamless integration with native libraries, and a simplified project structure, enabling rapid development and optimization of advanced algorithms and applications.</p>
                            <a href="#" class="btn btn-primary w-100">Learn More</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card bg-transparent card-translucent border border-primary p-4 mt-lg-4 mt-2">
                        <div class="card-header">
                            <h3><BIconController /></h3>
                            <h5 class="card-title m-0 p-0">Foundational Graphics and Game Development</h5>
                        </div>
                        <div class="card-body m-0">
                            <p>Language's native support for OpenGL, concurrency, vector operations is perfect for game engines that require real-time physics simulations and rendering pipelines. Developers can also easily wrap and interface native libraries for advanced graphical rendering or sound processing.</p>
                            <a href="#" class="btn btn-primary w-100">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
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

.header-btn-group .btn:hover {
    color: var(--bs-blue) !important;
}
</style>