 const tabuada = (event) => {
    event.preventDefault();
        const numero = parseInt(document.querySelector("#numero").value);
        for (let i = 0; i <= 10; i++) {
            const resultado = numero * i;
            const linha = `${numero} x ${i} = ${resultado}<br>`;
            document.querySelector("#resultado").innerHTML += linha;
        }
};



// const tabuada = () => {
//     let numero = Number(document.getElementById("numero").value);
//     let resultado = document.getElementById("resultado");
//     let tabuada = "";

//     for(let i=1; i<=10 ; i++){
//     tabuada = numero + " x " +i+ " = " + numero*i + "<br />"
//     }
//     resultado.innerHTML = tabuada;
// }
