function consultar(event) {
    event.preventDefault()
    debugger
    let cep = document.querySelector('#cep').value
    if (cep.length == 0) {
        window.alert("Digite o CEP")
        return
    }
    cep = cep.replace('.', '').replace('-', '')
    let carregar = document.querySelector(".carregar")
    carregar.style.visibility = 'visible'
    consultarCEP(cep).then(endereco =>{
        document.querySelector('#rua').value = endereco.logradouro
        document.querySelector('#bairro').value = endereco.bairro
        document.querySelector('#estado').value = endereco.estado
        carregar.style.visibility = 'hidden'
    })
}
function consultarCEP(cep) {
    //https://viacep.com.br/ws/18015066/json/
    let link = `https://viacep.com.br/ws/${cep}/json/`
    return fetch(link).then(resposta => resposta.json())
}