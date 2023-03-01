const calcular = () => {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let operacao = document.querySelector("#operacao");
    let resposta;
    if (operacao.value == "multiplicacao") {
        resposta = n1 * n2
    } else if (operacao.value == "soma"){
        resposta = n1 + n2
    } else if (operacao.value == "subtracao") {
        resposta = n1 - n2
    } else if (operacao.value == "divisao") {
        resposta = n1 / n2
    }
    let resultadoJ = document.getElementById("resultado")
    resultadoJ.innerHTML = resposta;
};