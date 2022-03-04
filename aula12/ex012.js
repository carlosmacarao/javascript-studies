let agora = new Date()
let hora = agora.getHours()
let min = agora.getMinutes()

console.log(`Agora são exatamente ${hora}:${min} horas.`)
if(hora < 12) {
    console.log('Bom dia!');
} else if(hora <= 17) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}