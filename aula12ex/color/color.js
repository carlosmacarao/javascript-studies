function change() {
    var agora = new Date()
    let hora = agora.getHours()
    let bg = document.querySelector('input#color')
    let res = document.getElementById('res');

    let backg = (bg.value)

    let body = document.body;

    body.style.background = backg;

    if (hora >= 21) {
        res.innerHTML = `<h3> Olá Carlos </h3>`
    }

}