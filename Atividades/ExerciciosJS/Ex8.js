const trocarVogal = () => {
    let texto = document.getElementById("texto").value;
  
    let lista = [];
    for (let index = 0; index < texto.length; index++) {
      lista.push(texto[index]);
    }
    let resposta = "";
  
    for (let index = 0; index < lista.length; index++) {
      resposta += lista[index].replace(/a|e|i|o|u/, " ");
    }
  
    let tex = document.getElementById("texto");
    tex.value = resposta;
  };
  