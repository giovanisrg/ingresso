function comprar() {
    let pista = parseInt(document.getElementById('qtd-pista').textContent)
    let cadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent)
    let cadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent)

    let tipoDeIngresso = document.getElementById('tipo-ingresso').value
    let quantidade = parseInt(document.getElementById('qtd').value)
    let disponivel = 0

    if (tipoDeIngresso == "pista") {
        if (quantidade <= pista && quantidade > 0) {
            disponivel = pista - quantidade
            let qtdPista = document.getElementById('qtd-pista')
            qtdPista.textContent = disponivel
            alert('Compra realizada com sucesso')
        } else {
            alert('Quantidade indisponivel')
        }
    } else if (tipoDeIngresso == "superior") {
        if (quantidade <= cadeiraSuperior && quantidade > 0) {
            disponivel = cadeiraSuperior - quantidade
            let qtdCadeiraSuperior = document.getElementById('qtd-superior')
            qtdCadeiraSuperior.textContent = disponivel
            alert('Compra realizada com sucesso')
        } else {
            alert('Quantidade indisponivel')
        }
    } else if (tipoDeIngresso == "inferior") {
        if (quantidade <= cadeiraInferior && quantidade > 0) {
            disponivel = cadeiraInferior - quantidade
            let qtdCadeiraInferior = document.getElementById('qtd-inferior')
            qtdCadeiraInferior.textContent = disponivel
            alert('Compra realizada com sucesso')
        } else {
            alert('Quantidade insdisponivel')
        }
    }
    document.getElementById('qtd').value = 0
}