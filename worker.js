this.onmessage = function(e) {
    if(e.data !== undefined) {
        this.postMessage({result: e.data.a + e.data.b});
    }
};