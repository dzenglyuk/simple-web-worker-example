(function() {
    document.querySelector('#btn').addEventListener('click', () => {
        const a = parseInt(document.querySelector('#a').value);
        const b = parseInt(document.querySelector('#b').value);
        const output = document.querySelector('h3'); 
        
        if (window.Worker) {
            let myWorker = new Worker('worker.js');
            
            let message = {a: a, b: b};

            myWorker.postMessage(message);

            myWorker.onmessage = function(e) {
                output.innerHTML = `Result of ${a} + ${b} = ${e.data.result}`;
            }
        } else {
            output.innerHTML = `Sorry, your browser does not support Web Worker`;
        }
    });
})();
