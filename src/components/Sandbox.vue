<script setup lang="ts">
import {
    BIconArrowClockwise,
    BIconPlay
} from "bootstrap-icons-vue";
</script>

<script lang="ts">
import "xterm/css/xterm.css";
import * as monaco from "monaco-editor";

import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";

const languageId: string = "rhea";
const examples: {[key: string]: string} = {
    "hello-world": "#!/usr/bin/rhea\r\n\r\nval greet = func(name)\r\n\trender! \"Hello, \" + name + \"!\"\r\ngreet(\"world\")\r\n",
    "fibonacci": "#!/usr/bin/rhea\r\n\r\nfib = func(n) {\r\n\tret if(n <= 1) n\r\n\t\telse fib(n - 1) + fib(n - 2)\r\n}\r\n\r\nvalues = []\r\nloop(i = 0; i < 10; i = i + 1)\r\n\tvalues = values + fib(i)\r\n\r\nret values\r\n",
    "colors": "#!/usr/bin/rhea\r\n\r\nenum Color {\r\n\tRed   = 1,\r\n\tGreen = 2,\r\n\tBlue  = 3\r\n}\r\n\r\nprint_color = func(color)\r\n\twhen(color) {\r\n\t\tif(Color.Red)   \"red\",\r\n\t\tif(Color.Green) \"green\",\r\n\t\telse            \"blue\"\r\n\t}\r\n\r\nrender \"The color is \" + print_color(Color.Green)\r\n",
    "99-beers": "#!/usr/bin/rhea\r\n\r\nval count = 99\r\nwhile(count > 0) {\r\n\tval bottle = if(count == 1) \"bottle\" else \"bottles\"\r\n\r\n\trender! count + \" \" + bottle + \" of beer on the wall\"\r\n\trender! count + \" \" + bottle + \" of beer,\"\r\n\trender! \"Take one down, pass it around,\"\r\n\r\n\tcount = count - 1\r\n\tif(count > 0)\r\n\t\trender! count + \" \" + bottle + \" of the beer on the wall.\\r\\n\"\r\n\telse render! \"\\r\\nNo more \" + bottle + \" of beer on the wall.\"\r\n}\r\n"
};

let editor: monaco.editor.IStandaloneCodeEditor,
    terminal: Terminal,
    executeSource: Function = (_: string)=> {};

declare global {
    interface Window {
        Module: any;
        FS: any;
    }
}

export default {
    name: "code-editor",
    props: {
        value: {
            type: String,
            required: true,
            default: ""
        },
        title: {
            type: String,
            required: false,
            default: ""
        },
        height: {
            type: String,
            required: true,
            default: 0
        },
        showExamples: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    data() {
        return {
            Module: null,
            FS: null
        }
    },
    watch: {
        value(newVal) {
            if(editor && editor.getValue() !== newVal)
                editor.setValue(newVal);
        }
    },
    methods: {
        isDarkMode() {
            return document.body.getAttribute("data-bs-theme") == "dark";
        },
        exampleSelected(event: Event) {
            editor.setValue(examples[(event.target as HTMLSelectElement).value]);
        },
        loadWasmModule() {
            const script = document.createElement('script');
            script.src = '/rhea.js';

            script.onerror = () => {
                terminal.clear();
                terminal.writeln('Failed to Rhea WebAssembly interpreter');
            };
            script.onload = () => {
                if(typeof window.Module === 'undefined')
                    return;

                (window.FS as any).init(
                    () => null,
                    (c: number) => terminal.write(String.fromCharCode(c)),
                    (c: number) => terminal.write(String.fromCharCode(c))
                );
                (window.Module as any).onRuntimeInitialized = () => {
                    executeSource = (source: string)=>
                        window.Module.ccall(
                            "executeSource",
                            null,
                            ["string"],
                            [source]
                        );
                };
            };

            document.body.appendChild(script);
        },
        resetCode() {
            if(this.value)
                editor.setValue(this.value);
        },
        runCode() {
            terminal.clear();
            executeSource(editor.getValue());
            terminal.writeln("\r\n\u001b[1;34mExecution completed.\u001b[0m");
        },
        applyTheme() {
            const theme = localStorage.getItem("color") || "dark";
            const isDark = theme === "dark";

            monaco.editor.setTheme("rhea-theme-" + theme);
            terminal.options.theme = {
                background: isDark ? "#000000" : "#ffffff",
                foreground: isDark ? "#ffffff" : "#000000"
            };

            return theme;
        },
        handleStorageChange(event: StorageEvent) {
            if(event.key === "color")
                document.body.setAttribute(
                    "data-bs-theme",
                    this.applyTheme()
                );
        }
    },
    mounted() {
        this.loadWasmModule();
        monaco.languages.register({id: languageId});
        monaco.editor.defineTheme("rhea-theme-dark", {
            base: "vs-dark" as monaco.editor.BuiltinTheme,
            inherit: true,
            rules: [],
            colors: {"editor.background": "#000000"}
        });
        monaco.editor.defineTheme("rhea-theme-light", {
            base: "vs" as monaco.editor.BuiltinTheme,
            inherit: true,
            rules: [],
            colors: {"editor.background": "#ffffff"}
        });

        monaco.languages.setMonarchTokensProvider(languageId, {
            tokenizer: {
                root: [
                    [/(break|catch|continue|delete|else|enum|false|from|func|halt|handle|import|if|lock|loop|maybe|mod|nil|parallel|random|render|ret|size|test|then|throw|true|type|unless|use|val|wait|when|while)\b/, "keyword.control.rhea"],
                    [/(0b[01]+|0t[0-2]+|0c[0-7]+|0x[0-9a-fA-F]+|\d+(\.\d*)?)/, "digit.numberic.rhea"],
                    [/#[^\n]*/, "comment.line.rhea"],
                    [/"(?:\\.|[^"\\])*"/, "string.quoted.double.rhea"],
                ],
            },
        });

        monaco.languages.setLanguageConfiguration(languageId, {
            comments: {lineComment: "#"},
            brackets: [
                ["{", "}"],
                ["[", "]"],
                ["(", ")"]
            ],
            autoClosingPairs: [
                { open: "{", close: "}" },
                { open: "[", close: "]" },
                { open: "(", close: ")" },
                { open: '"', close: '"' }
            ]
        });

        editor = monaco.editor.create((this.$refs.editorContainer as HTMLElement), {
            value: this.value,
            language: languageId,
            theme: "rhea-theme",
            minimap: {enabled: false},
            automaticLayout: true
        });
  
        editor.onDidChangeModelContent(() => {
            const newValue = editor.getValue();
            if(newValue !== this.value)
                this.$emit("input", newValue);
        });

        if(!this.value || this.value == "")
            editor.setValue(examples["99-beers"]);
        else editor.setValue(this.value);

        terminal = new Terminal({
            rows: (!this.value || this.value == "") ? 7 : 5,
            cols: Math.floor((this.$refs.terminalContainer as HTMLElement).offsetWidth / 9) - 2,
            cursorBlink: true,
            theme: {
                background: this.isDarkMode() ? "#000000" : "#ffffff",
                foreground: this.isDarkMode() ? "#ffffff" : "#000000"
            }
        });

        terminal.loadAddon(new FitAddon());
        terminal.open(this.$refs.terminalContainer as HTMLElement);
        terminal.writeln("\x1b[94mStatus\x1b[0m: Ready");

        this.applyTheme();
        window.addEventListener(
            "storage",
            this.handleStorageChange
        );

        const observer = new MutationObserver(() => {
            this.applyTheme();
        });
        observer.observe(
            document.body,
            {
                attributes: true,
                attributeFilter: ['data-bs-theme']
            }
        );
    },
    beforeDestroy() {
        window.removeEventListener(
            "storage",
            this.handleStorageChange
        );

        if(editor)
            editor.dispose();

        if(terminal)
            terminal.dispose();
    }
};
</script>

<template>
    <div v-if="showExamples" class="row mb-2">
        <div class="col-8">
            <select class="form-control form-select-sm w-100" @change="exampleSelected($event)">
                <option value="99-beers">99 Beers</option>
                <option value="fibonacci">Fibonacci</option>
                <option value="hello-world">Hello, world</option>
                <option value="colors">Colors</option>
            </select>
        </div>

        <div class="col-4">
            <button class="btn btn-primary w-100 py-1" @click="runCode">
                <h5 class="d-inline"><BIconPlay /></h5> <span class="desktop-only">Run</span>
            </button>
        </div>
    </div>

    <div v-if="!showExamples" class="card bg-transparent shadow-lg border border-primary mt-2 mb-4 mx-lg-4">
        <div class="card-header">
            <div class="row w-100">
                <div class="col-lg-8 col-7 pt-1 text-white">{{ title }}</div>
                <div class="col-lg-4 col-5 m-0 p-0" align="right">
                    <div class="btn-group w-100 m-0 p-0" role="button">
                        <button class="btn btn-outline-primary bg-white text-primary w-100 py-1" @click="runCode">
                            <h5 class="d-inline"><BIconPlay /></h5> <span class="desktop-only">Run</span>
                        </button>
                        <button class="btn btn-outline-primary bg-white text-primary w-100 py-1" @click="resetCode">
                            <h5 class="d-inline"><BIconArrowClockwise /></h5> <span class="desktop-only">Reset</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body bg-transparent p-0">
            <div
                class="editor-container m-0 p-0"
                ref="editorContainer"
                :style="{ height: `${height}vh` }"
            ></div>

            <div 
                class="terminal-container border-top p-2"
                ref="terminalContainer"
            ></div>
        </div>
    </div>
    <div v-else>
        <div
            class="editor-container border m-0 p-0"
            ref="editorContainer"
            :style="{ height: `${height}vh` }"
        ></div>

        <div v-if="showExamples" class="mt-3"></div>
        <div 
            class="terminal-container border"
            ref="terminalContainer"
        ></div>
    </div>
</template>

<style scoped>
.card-header {
    background-color: var(--bs-primary);
}

.editor-container {
    margin: 0;
}

.terminal-container {
    width: 100%;
}
</style>
