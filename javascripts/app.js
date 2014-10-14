requirejs.config({
    "paths": {
      "reveal": "../javascripts/lib/reveal.js/js/reveal.min",
      "head" : "../javascripts/lib/reveal.js/lib/js/head.min"
    }
});

requirejs(["head", "reveal"], function (){
    Reveal.initialize({
            width: 1024
    });
});
