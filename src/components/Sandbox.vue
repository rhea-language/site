<script setup lang="ts">
import { BIconPlay } from "bootstrap-icons-vue";
</script>

<script lang="ts">
import * as monaco from "monaco-editor";

import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";

import 'xterm/css/xterm.css';

const languageId: string = "n8";
const examples: {[key: string]: string} = {
    "hello-world": "#!/opt/n8lang/bin/n8\r\n\r\nval greet = func(name)\r\n\trender! \"Hello, \" + name + \"!\";\r\n\r\ngreet(\"world\");\r\n",
    "99-beers": "#!/opt/n8lang/bin/n8\r\n\r\nval count = 99;\r\n\r\nwhile(count > 0) {\r\n\tval bottle = if(count == 1) \"bottle\" else \"bottles\";\r\n\r\n\trender! count + \" \" + bottle + \" of beer on the wall\";\r\n\trender! count + \" \" + bottle + \" of beer,\";\r\n\trender! \"Take one down, pass it around,\";\r\n\r\n\tcount = count - 1;\r\n\r\n\tif(count > 0)\r\n\t\trender! count + \" \" + bottle + \" of the beer on the wall.\\r\\n\"\r\n\telse render! \"\\r\\nNo more \" + bottle + \" of beer on the wall.\";\r\n};\r\n"
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
    name: "MonacoEditor",
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
        exampleSelected(event: Event) {
            editor.setValue(examples[(event.target as HTMLSelectElement).value]);
        },
        loadWasmModule() {
            const script = document.createElement('script');
            script.src = '/n8.js';

            script.onerror = () => {
                terminal.clear();
                terminal.writeln('Failed to N8 WebAssembly interpreter');
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
        runCode() {
            terminal.clear();
            executeSource(editor.getValue());
            terminal.writeln("\r\nExecution completed.");
        }
    },
    mounted() {
        this.loadWasmModule();
        monaco.languages.register({id: languageId});
        monaco.editor.defineTheme("n8-theme", {
            base: "vs-dark",
            inherit: true,
            rules: [],
            colors: {"editor.background": "#191d21"}
        });

        monaco.languages.setMonarchTokensProvider(languageId, {
            tokenizer: {
                root: [
                    [/(break|catch|continue|delete|else|enum|false|from|func|halt|handle|import|if|lock|loop|maybe|mod|nil|parallel|random|render|ret|size|test|then|throw|true|type|unless|use|val|wait|when|while)\b/, "keyword.control.n8"],
                    [/(0b[01]+|0t[0-2]+|0c[0-7]+|0x[0-9a-fA-F]+|\d+(\.\d*)?)/, "digit.numberic.n8"],
                    [/#[^\n]*/, "comment.line.n8"],
                    [/"(?:\\.|[^"\\])*"/, "string.quoted.double.n8"],
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
            theme: "n8-theme",
            minimap: {enabled: false},
            automaticLayout: true
        });
  
        editor.onDidChangeModelContent(() => {
            const newValue = editor.getValue();
            if(newValue !== this.value)
                this.$emit("input", newValue);
        });
        editor.setValue(examples["hello-world"]);

        terminal = new Terminal({
            rows: 7,
            cols: Math.floor((this.$refs.terminalContainer as HTMLElement).offsetWidth / 9) - 2,
            cursorBlink: true,
            theme: {
                background: '#191d21',
                foreground: '#ffffff'
            }
        });

        terminal.loadAddon(new FitAddon());
        terminal.open(this.$refs.terminalContainer as HTMLElement);
        terminal.writeln("\x1b[94mStatus\x1b[0m: Ready");
    },
    beforeDestroy() {
        if(editor)
            editor.dispose();

        if(terminal)
            terminal.dispose();
    }
};
</script>

<template>
    <div class="row">
        <div class="col-8 px-xs-0 pb-2">
            <select class="form-control bg-dark w-100" @change="exampleSelected($event)">
                <option value="hello-world">Hello, world</option>
                <option value="99-beers">99 Beers</option>
            </select>
        </div>

        <div class="col-4 px-xs-0">
            <button class="btn btn-primary w-100 py-1" style="padding-top: 5px !important; padding-bottom: 6px !important" @click="runCode">
                <h5 class="d-inline"><BIconPlay /></h5> Run
            </button>
        </div>
    </div>
    <div
        class="editor-container border border-dark m-0 p-0"
        ref="editorContainer"
        :style="{ height: `${height}vh` }"
    ></div>
    <div 
        class="terminal-container border border-dark mt-3"
        ref="terminalContainer"
    ></div>
</template>

<style scoped>

.editor-container {
    margin: 0;
}

.terminal-container {
    width: 100%;
}
</style>
