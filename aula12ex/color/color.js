function change() {
    let bg = document.querySelector('input#color')

    let backg = (bg.value)

    let body = document.body;

    body.style.background = backg;

}