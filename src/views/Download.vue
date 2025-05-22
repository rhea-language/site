<script>
export default {
    name: "Download",
    props: {
        value: {
            type: String,
            required: true,
            default: ""
        },
        height: {
            type: String,
            required: true,
            default: 0
        },
        blobs: {
            type: Boolean,
            required: false,
            default: false
        }
    }
};
</script>
<template>
    <div class="container mt-4">
        <h2 class="mb-4">Downloads</h2>
        <p>Only the build for Linux, MacOS, and Windows x86-64 are tested on all of these distributed pre-built binaries, the rest are built with virtual compiler toolchain. Install and use it at your own risk. The Rhea development team will very much appreciate all the issue and bug reports that will be submited <a href="https://github.com/rhea-language/rhea/issues" target="_blank">here</a>.</p>

        <br/>
        <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" data-bs-toggle="tab" href="#linux" aria-selected="true" role="tab"><i class="pi pi-microchip me-2"></i> Linux</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#macos" aria-selected="false" role="tab"><i class="pi pi-apple me-2"></i> MacOS</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#windows" aria-selected="false" role="tab"><i class="pi pi-microsoft me-2"></i> Windows</a>
            </li>
        </ul>

        <br/>
        <div id="download-tabs" class="tab-content mt-0">
            <div class="tab-pane fade show active" id="linux" role="tabpanel">
                <h4>Debian, Ubuntu, and Linux Mint</h4>

                <div class="row equal-cols">
                    <div class="col-lg-4 mt-4">
                        <div class="card border border-primary bg-transparent p-4">
                            <h5 class="card-title m-0 p-0">x86-64</h5>
                            <hr />

                            <p class="mt-2">32-bit</p>
                            <table class="table table-strip table-hover">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-x86-1.0.0.deb</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-x86-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="mt-2">64-bit</p>
                            <table class="table table-strip table-hover">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-x86_64-1.0.0.deb</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-x86_64-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-4">
                        <div class="card border border-primary bg-transparent p-4">
                            <h5 class="card-title m-0 p-0">ARM</h5>
                            <hr />

                            <p class="mt-2">32-bit</p>
                            <table class="table table-strip table-hover">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-arm-1.0.0.deb</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-arm-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="mt-2">64-bit</p>
                            <table class="table table-strip table-hover">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-arm64-1.0.0.deb</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-arm64-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-4">
                        <div class="card border border-primary bg-transparent p-4">
                            <h5 class="card-title m-0 p-0">RISC-V</h5>
                            <hr />

                            <p class="mt-2">32-bit</p>
                            <table class="table table-strip table-hover">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-riscv-1.0.0.deb</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-riscv-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="mt-2">64-bit</p>
                            <table class="table table-strip table-hover">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-riscv64-1.0.0.deb</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-linux-debian-riscv64-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="macos" role="tabpanel">
                <h4>MacOS</h4>
                <div class="row equal-cols">
                    <div class="col-lg-6 mt-4">
                        <div class="card border border-primary bg-transparent p-4">
                            <h5 class="card-title m-0 p-0">x86-64</h5>
                            <table class="table table-strip table-hover mt-4">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-macos-x86-1.0.0.dmg</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-macos-x86-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-lg-6 mt-4">
                        <div class="card border border-primary bg-transparent p-4">
                            <h5 class="card-title m-0 p-0">Apple M1</h5>
                            <table class="table table-strip table-hover mt-4">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-macos-m1-1.0.0.dmg</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-macos-m1-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="windows" role="tabpanel">
                <h4>Windows</h4>
                <div class="row equal-cols">
                    <div class="col-lg-6 mt-4">
                        <div class="card border border-primary bg-transparent p-4">
                            <h5 class="card-title m-0 p-0">x86-64</h5>
                            <hr />

                            <p class="mt-2">32-bit</p>
                            <table class="table table-strip table-hover">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-win-x86-1.0.0.exe</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-win-x86-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="mt-2">64-bit</p>
                            <table class="table table-strip table-hover">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-win-x86_64-1.0.0.exe</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-win-x86_64-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-lg-6 mt-4">
                        <div class="card border border-primary bg-transparent p-4">
                            <h5 class="card-title m-0 p-0">ARM</h5>
                            <hr />

                            <p class="mt-2">32-bit</p>
                            <table class="table table-strip table-hover">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-win-arm-1.0.0.exe</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-win-arm-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="mt-2">64-bit</p>
                            <table class="table table-strip table-hover">
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-win-arm64-1.0.0.exe</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="download-link">rhea-win-arm64-1.0.0.tar.gz</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.download-link {
    text-decoration: none;
}
</style>