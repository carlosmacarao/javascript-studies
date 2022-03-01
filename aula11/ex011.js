function verify() {
    let txtv = document.querySelector('input#txtvel')
    let vel = Number(txtv.value)
    let res = document.querySelector('div#res')

    res.innerHTML = `<p> Your current velocity is <strong>${vel}Km/h</strong> </p>`

    if (vel > 60) {
        res.innerHTML += `<p> Please reduce to velocity! </p>`;
    }

    res.innerHTML += `Always drive using safety belt!`
}