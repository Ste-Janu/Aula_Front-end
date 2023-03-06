const transacoesUl = document.querySelector('#transactions');
console.log(transacoesUl)

const dummytransacoes = [
    {id: 123, amount: 150, date: 06-03-2022},
    {id: 456, amount: 350, date: 06-03-2022},
    {id: 789, amount: -29, date: 06-03-2022},
    {id: 987, amount: -45, date: 06-03-2022}
];

const addTransacoesNoDom = transacoes =>{
    const operador = transacoes.amount < 0 ? "-" : "+";
    const CSSclass = transacoes.amount < 0 ? "minus" : "plus";
    const amoutSemOp = Math.abs(transacoes.amount)
    const li = document.createElement("li")

    li.classList.add(CSSclass)
    li.innerHTML = (`${transacoes.id} <span> ${operador} R$ ${amoutSemOp} </span><button id="delete-btn">x</button>`);
    
    transacoesUl.append(li)

}

addTransacoesNoDom(dummytransacoes[0])
