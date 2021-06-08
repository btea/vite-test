let a = false;
let b;
function afn() {
    a = true;
    // console.log('body');
}
function bfn(e) {
    if (a) {
        b = e.clientX;
        // console.log('document');
    }
}
document.body.addEventListener('mousedown', afn);
document.addEventListener('mousedown', bfn);
