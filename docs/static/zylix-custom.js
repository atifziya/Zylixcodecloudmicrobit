(function() {
    // Check if the native bypass parameter is missing
    if (window.location.search.indexOf('editor=1') === -1) {
        // Instantly rewrite the URL to force the MakeCode engine into Editor-Only mode
        window.location.replace(window.location.pathname + '?editor=1#editor');
    }
})();