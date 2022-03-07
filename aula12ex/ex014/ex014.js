function carregar() {
    let msg = document.querySelector('div#msg');
    let img = document.querySelector('img#imagem');
    let body = document.body;

    let now = new Date()
    let hour = now.getHours()
    let min = now.getMinutes()

    msg.innerHTML = `<p> Now are exactly <strong>${hour}:${min}</strong> hours.</p>`

    if (hour >= 0 && hour < 12) {
        //Good morning
        msg.innerHTML += '<p> <strong>Good Morning! </strong></p>'
        img.src = 'manha.png'
        body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour < 18) {
        //Good afternoon
        msg.innerHTML += '<p> <strong> Good Afternoon! </strong> </p>'
        img.src = 'tarde.png'
        body.style.background = '#b9846f'
    } else {
        //Good evening
        msg.innerHTML += '<strong> <p>Good Evening!</p> </strong>'
        img.src = 'noite.png'
        body.style.background = '#515154'
    }
}


