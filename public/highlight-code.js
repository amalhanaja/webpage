onmessage = (event) => {
    importScripts('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js');
    const result = self.hljs.highlightAuto(event.data.code);
    postMessage({innerHTML: result.value, index: event.data.index});
};