const gerarNum = () => {
   let numero = Math.random()
   let resultado = document.getElementById("resultado")
   numero = Math.round(numero *100)
   resultado.innerHTML = numero
}