 var a = document.getElementById('area')

 a.addEventListener('click', clicar)
 a.addEventListener('mouseenter', entrar)
 a.addEventListener('mouseout', sair)

 function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'red'
 }

 function entrar() {
     a.innerHTML = 'Entrou!'
 }

 function sair() {
     a.innerHTML = 'Saiu!'
     a.style.background = 'rgba(17, 153, 17, 0.884)'
 }