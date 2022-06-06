

function main() {
    const v = document.getElementById('volume').value;
    const w = document.getElementById('weight').value;
    
    const out1 = document.getElementById('element');
    const out2 = document.getElementById('atwe');
    const out3 = document.getElementById('atnum');

    let d = parseInt(w)/parseInt(v);
    console.log(d);

    let mol = parseInt(d) * 6.022e+23;
    console.log(mol);

    calculate(mol, d, w, v, out1, out2, out3);

}

function calculate(mol, d, w, v, out1, out2, out3) {
    const iron = 7873;
    if(d == iron) {
        out1.innerHTML = 'Iron';
        out2.innerHTML = '56';
        out3.innerHTML = '26';
    }
    
}

function reset() {
    document.getElementById('volume').value = '';
    document.getElementById('weight').value = '';
}