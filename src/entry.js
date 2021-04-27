// Set this to `false` to check the expected behaviour
const loadBing = true;

System.import('angular').then(({default: angular}) => {
    console.log('window.angular === angular', window.angular === angular);
    if (window.angular !== angular) {
      console.error('❌ SystemJS provided an INCORRECT angular package');
      console.log('provided angular package', angular)
    } else {
      console.info('✅ SystemJS provider the CORRECT angular package')
    }

});

if (loadBing) {
  // Bing
  (function(window, document, tag, url, queue) {
    var f, n, i;
    window[queue] = window[queue] || [],
        f = function() {
          var obj = {
            ti: "4002754"
          };
          obj.q = window[queue], window[queue] = new UET(obj), window[queue].push("pageLoad");
        },
        n = document.createElement(tag), n.src = url, n.async = 1, n.onload = n.onreadystatechange = function() {
      var state = this.readyState;
      state && state !== "loaded" && state !== "complete" || (f(), n.onload = n.onreadystatechange = null);
    },
        i = document.getElementsByTagName(tag)[0], i.parentNode.insertBefore(n, i);
  })(window, document, "script", "https://bat.bing.com/bat.js", "uetq");

}
