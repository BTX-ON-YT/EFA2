

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
    const gold = 19300;
    if(d == gold) {
        out1.innerHTML = 'gold';
        out2.innerHTML = '197';
        out3.innerHTML = '79';
    } 
    const copper = 8940;
    if(d == copper) {
        out1.innerHTML = 'copper';
        out2.innerHTML = '64';
        out3.innerHTML = '29';
    }
    const nickel = 8090;
    if(d == nickel) {
        out1.innerHTML = 'nickel';
        out2.innerHTML = '59';
        out3.innerHTML = '28';
    }
    const silver = 10490;
    if(d == silver) {
        out1.innerHTML = 'silver';
        out2.innerHTML = '107';
        out3.innerHTML = '42';
    }
    const platinum = 19300;
    if(d == platinum) {
        out1.innerHTML = 'platinum';
        out2.innerHTML = '195';
        out3.innerHTML = '78';
    }
    const palladium = 8940;
    if(d == palladium) {
        out1.innerHTML = 'palladium';
        out2.innerHTML = '61';
        out3.innerHTML = '27';
    }
    const titanium = 7873;
    if(d == titanium) {
        out1.innerHTML = 'titanium';
        out2.innerHTML = '22';
        out3.innerHTML = '48';
    }
    const zinc = 10490;
    if(d == zinc) {
        out1.innerHTML = 'zinc';
        out2.innerHTML = '98';
        out3.innerHTML = '40';
    }
    const mercury = 19300;
    if(d == mercury) {
        out1.innerHTML = 'mercury';
        out2.innerHTML = '200';
        out3.innerHTML = '80';
    }

    const lead = 8940;
    if(d == lead) {
        out1.innerHTML = 'lead';
        out2.innerHTML = '82';
        out3.innerHTML = '31';
    }

    
    



    
}

function reset() {
    document.getElementById('volume').value = '';
    document.getElementById('weight').value = '';
}
