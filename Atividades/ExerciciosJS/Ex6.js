const mudarCor = () => {
    let cores = document.querySelector("#cores");
    
    if (cores.value == "vermelho") {
        document.getElementById("frase").style.color = "red";
    } else if (cores.value == "azul") {
        document.getElementById("frase").style.color = "blue";
    } else if (cores.value == "verde") {
        document.getElementById("frase").style.color = "green";
    }
}