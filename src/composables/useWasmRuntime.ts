import {
    ref,
    onMounted,
    onUnmounted,
    type Ref
} from 'vue';

declare global {
    interface Window {
        Module: any;
        FS: any;
    }
}

const isWasmModuleLoaded = ref(false);
const executeSourceRef = ref<((src: string) => void) | null>(null);

const currentTerminalOutput: Ref<((c: number) => void) | null> = ref(null);
const currentTerminalError: Ref<((c: number) => void) | null> = ref(null);

let scriptAppended = false;
function loadRheaWasmScript(
    onLoadCallback: () => void,
    onErrorCallback: () => void
) {
    if(scriptAppended) {
        if(isWasmModuleLoaded.value)
            onLoadCallback();
        return;
    }

    const script = document.createElement("script");
    script.src = "/rhea.js";

    script.onload = () => {
        isWasmModuleLoaded.value = true;
        onLoadCallback();
    };

    script.onerror = () => {
        isWasmModuleLoaded.value = false;
        onErrorCallback();
    };

    document.body.appendChild(script);
    scriptAppended = true;
}

export function useWasmRuntime() {
    onMounted(() => {
        loadRheaWasmScript(
            ()=> {
                if(!window.FS || !window.Module) {
                    "Rhea WebAssembly Module or FS not found after script load."
                        .split("")
                        .forEach((char)=>
                            currentTerminalError.value!(char.charCodeAt(0))
                        );
                    return;
                }

                if(!window.FS.isInitialized) {
                    window.FS.init(
                        () => null,
                        (c: number) => {
                            if(currentTerminalOutput.value)
                                currentTerminalOutput.value(c);
                        },
                        (c: number) => {
                            if(currentTerminalError.value)
                                currentTerminalError.value(c);
                        }
                    );
                    window.FS.isInitialized = true;
                }

                if(typeof window.Module.ccall === "function")
                    executeSourceRef.value = (src: string) =>
                        window.Module.ccall(
                            "executeSource",
                            null,
                            ["string"],
                            [src]
                        );
                else if(!window.Module._onRuntimeInitializedCalled)
                    window.Module.onRuntimeInitialized = ()=> {
                        executeSourceRef.value = (src: string) =>
                            window.Module.ccall(
                                "executeSource",
                                null,
                                ["string"],
                                [src]
                            );
                        window.Module._onRuntimeInitializedCalled = true;
                    };
            },
            ()=> {
                "Failed to load Rhea WebAssembly interpreter.".split("")
                    .forEach(c => {
                        currentTerminalError.value!(c.charCodeAt(0))
                    });
                executeSourceRef.value = null;
            }
        );
    });

    const setActiveTerminalCallbacks = (
        outputFn: (c: number) => void,
        errorFn: (c: number) => void
    ) => {
        currentTerminalOutput.value = outputFn;
        currentTerminalError.value = errorFn;
    };

    const clearActiveTerminalCallbacks = () => {
        currentTerminalOutput.value = null;
        currentTerminalError.value = null;
    };

    return {
        executeSource: executeSourceRef,
        isWasmModuleLoaded,
        setActiveTerminalCallbacks,
        clearActiveTerminalCallbacks,
    };
}
