<script setup lang="ts">
import {
    BIconArrowClockwise,
    BIconPlay
} from "bootstrap-icons-vue";

import "xterm/css/xterm.css";
import * as monaco from "monaco-editor";

import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import {
    ref,
    watch,
    onMounted,
    onBeforeUnmount
} from "vue";
import { useWasmRuntime } from "@/composables/useWasmRuntime";

const {
    executeSource,
    setActiveTerminalCallbacks,
    clearActiveTerminalCallbacks
} = useWasmRuntime();
const props = withDefaults(
    defineProps<{
        value?: string;
        title?: string;
        height: string;
        showExamples?: boolean;
    }>(),
    {showExamples: true}
);
const emit = defineEmits<{
  (e: "input", val: string): void;
}>();

const languageId: string = "rhea";
const examples: Record<string, string> = {
    "hello-world": "#!/usr/bin/rhea\r\n\r\nval greet = func(name)\r\n\trender! \"Hello, \" + name + \"!\"\r\ngreet(\"world\")\r\n",
    "fibonacci": "#!/usr/bin/rhea\r\n\r\nfib = func(n) {\r\n\tret if(n <= 1) n\r\n\t\telse fib(n - 1) + fib(n - 2)\r\n}\r\n\r\nvalues = []\r\nloop(i = 0; i < 10; i = i + 1)\r\n\tvalues = values + fib(i)\r\n\r\nret values\r\n",
    "colors": "#!/usr/bin/rhea\r\n\r\nenum Color {\r\n\tRed   = 1,\r\n\tGreen = 2,\r\n\tBlue  = 3\r\n}\r\n\r\nprint_color = func(color)\r\n\twhen(color) {\r\n\t\tif(Color.Red)   \"red\",\r\n\t\tif(Color.Green) \"green\",\r\n\t\telse            \"blue\"\r\n\t}\r\n\r\nrender \"The color is \" + print_color(Color.Green)\r\n",
    "99-beers": "#!/usr/bin/rhea\r\n\r\nval count = 99\r\nwhile(count > 0) {\r\n\tval bottle = if(count == 1) \"bottle\" else \"bottles\"\r\n\r\n\trender! count + \" \" + bottle + \" of beer on the wall\"\r\n\trender! count + \" \" + bottle + \" of beer,\"\r\n\trender! \"Take one down, pass it around,\"\r\n\r\n\tcount = count - 1\r\n\tif(count > 0)\r\n\t\trender! count + \" \" + bottle + \" of the beer on the wall.\\r\\n\"\r\n\telse render! \"\\r\\nNo more \" + bottle + \" of beer on the wall.\"\r\n}\r\n"
};

const editorContainer = ref<HTMLElement>();
const terminalContainer = ref<HTMLElement>();
let editor: monaco.editor.IStandaloneCodeEditor,
    terminal: Terminal;

const runId = "run-btn-" + Math.random()
    .toString()
    .substring(2, 14);

watch(
    ()=> props.value,
    (newVal)=> {
        if(editor && editor.getValue() !== newVal)
            editor.setValue(newVal as string);
    }
);

function isDarkMode() {
    return document.body.getAttribute("data-bs-theme") == "dark";
}

function exampleSelected(event: Event) {
    editor.setValue(examples[(event.target as HTMLSelectElement).value]);
}

function resetCode() {
    if(props.value)
        editor.setValue(props.value);
}

function applyTheme() {
    const theme = localStorage.getItem("color") || "dark";
    const isDark = theme === "dark";

    monaco.editor.setTheme("rhea-theme-" + theme);
    if(terminal)
        terminal.options.theme = {
            background: isDark ? "#000000" : "#ffffff",
            foreground: isDark ? "#ffffff" : "#000000"
        };

    return theme;
}

function handleStorageChange(event: StorageEvent) {
    if(event.key === "color")
        document.body.setAttribute(
            "data-bs-theme",
            applyTheme()
        );
}

onMounted(()=> {
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

    editor = monaco.editor.create(editorContainer.value!, {
        value: props.value,
        language: languageId,
        theme: "rhea-theme",
        minimap: {enabled: false},
        automaticLayout: true
    });

    editor.onDidChangeModelContent(() => {
        const newValue = editor.getValue();
        if(newValue !== props.value)
            emit("input", newValue);
    });

    if(!props.value || props.value == "")
        editor.setValue(examples["99-beers"]);
    else editor.setValue(props.value);

    terminal = new Terminal({
        rows: (!props.value || props.value == "") ? 7 : 5,
        cols: Math.floor(terminalContainer.value!.offsetWidth / 9) - 2,
        cursorBlink: true,
        theme: {
            background: isDarkMode() ? "#000000" : "#ffffff",
            foreground: isDarkMode() ? "#ffffff" : "#000000"
        }
    });

    terminal.loadAddon(new FitAddon());
    terminal.open(terminalContainer.value!);
    terminal.writeln("\x1b[94mStatus\x1b[0m: Ready");

    applyTheme();
    window.addEventListener(
        "storage",
        handleStorageChange
    );

    const observer = new MutationObserver(() => {
        applyTheme();
    });
    observer.observe(
        document.body,
        {
            attributes: true,
            attributeFilter: ['data-bs-theme']
        }
    );

    const runBtn = document.getElementById(runId);
    if(runBtn)
        runBtn.onclick = ()=> {
            terminal.clear();
            setActiveTerminalCallbacks(
                (c: number) => terminal.write(String.fromCharCode(c)),
                (c: number) => terminal.write(String.fromCharCode(c))
            );

            if(executeSource.value) {
                executeSource.value(editor.getValue());
                terminal.writeln("\r\n\u001b[1;34mExecution completed.\u001b[0m");
            }
            else terminal.writeln(
                "\u001b[1;31mError: Rhea interpreter not loaded or initialized.\u001b[0m"
            );
        };

    onBeforeUnmount(()=> {
        window.removeEventListener(
            "storage",
            handleStorageChange
        );

        if(editor)
            editor.dispose();

        if(terminal)
            terminal.dispose();

        clearActiveTerminalCallbacks();
    });
});
</script>

<template>
    <div v-if="props.showExamples" class="row mb-2">
        <div class="col-8">
            <select class="form-control form-select-sm w-100" @change="exampleSelected($event)">
                <option value="99-beers">99 Beers</option>
                <option value="fibonacci">Fibonacci</option>
                <option value="hello-world">Hello, world</option>
                <option value="colors">Colors</option>
            </select>
        </div>

        <div class="col-4">
            <button class="btn btn-primary w-100 py-1" :id="runId">
                <h5 class="d-inline"><BIconPlay /></h5> <span class="desktop-only">Run</span>
            </button>
        </div>
    </div>

    <div v-if="!props.showExamples" class="card bg-transparent shadow-lg border border-primary mt-2 mb-4 mx-lg-4">
        <div class="card-header">
            <div class="row w-100">
                <div class="col-lg-8 col-7 pt-1 text-white">{{ title }}</div>
                <div class="col-lg-4 col-5 m-0 p-0" align="right">
                    <div class="btn-group w-100 m-0 p-0" role="button">
                        <button class="btn btn-outline-primary bg-white text-primary w-100 py-1" :id="runId">
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

        <div v-if="props.showExamples" class="mt-3"></div>
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
