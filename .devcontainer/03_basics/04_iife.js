// Immediately Invoked Function Expression (IIFE)--> used to remove the pollution from global scope and execute in the same line

(function chai(){
    console.log(`DB Connected`);           //   named iife
       
})();

(() => {
    console.log(`DB Connected Two`);
})();

((name) => {
    console.log(`DB Connected Two ${name}`);
})('yuvraj');