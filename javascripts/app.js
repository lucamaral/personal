requirejs.config({
    "paths": {
        "reveal": "../lib/reveal/js/reveal.min",
        "head": "../lib/reveal/lib/js/head.min",
        "highlight": "../lib/highlightjs/highlight.pack"
    }
});

requirejs(["head", "reveal", "highlight"], function () {
    Reveal.initialize({
        width: 1024
    });
    hljs.initHighlightingOnLoad();
});