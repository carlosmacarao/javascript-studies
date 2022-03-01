function somar() {
    tn1 = document.getElementById('txtn1')
    tn2 = document.getElementById('txtn2')

    var res = document.querySelector('div#res')

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var s = n1 + n2;

    res.innerHTML = `<p> The sum between ${n1} and ${n2} is ${s} </p>`
}