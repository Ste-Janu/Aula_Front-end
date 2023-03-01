const mostrarEsconder = (el) => {
    let caixa = document.getElementById("caixa").style.display;
    if(caixa == "none"){
        document.getElementById(el).style.display = 'block';
    }
    else{
        document.getElementById(el).style.display = 'none';
    }
}
    