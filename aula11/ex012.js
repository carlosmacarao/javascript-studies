function verify() {
    let cty = document.querySelector('select#country')

    let country = (cty.value)
    
    let res = document.querySelector('div#res')

    res.innerHTML = `<p><strong> Living in ${country} </strong></p>`
    if (country != 'Mozambique') {
        res.innerHTML += `<strong> You are stranger! </strong>`
    } else {
        res.innerHTML += `<strong> You are Mozambican! </strong>`
    }
}