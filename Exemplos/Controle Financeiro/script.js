const transacoesUl = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');
const form = document.querySelector('#form')
const inputTransacaoNome = document.querySelector('#text');
const inputTransacaoValor = document.querySelector('#amount');


const localStorageTransacoes = JSON.parse(localStorage
    .getItem('transacoes'))  
let transacoes = localStorage
    .getItem('transacoes') !== null ? localStorageTransacoes : []


const removerTransacao = ID => {
    transacoes = transacoes.filter(transacoes => transacoes.id !== ID)
    init()
}

const addTransacoesNoDom = transacoes =>{
    const operador = transacoes.amount < 0 ? "-" : "+";
    const CSSclass = transacoes.amount < 0 ? "minus" : "plus";
    const amoutSemOp = Math.abs(transacoes.amount)
    const li = document.createElement("li")

    li.classList.add(CSSclass)
    li.innerHTML = (`${transacoes.name} 
    <span> ${operador} R$ ${amoutSemOp} </span>
    <button id="delete-btn" onClick = "removerTransacao(${transacoes.id})">
    x
    </button>`);
    
    transacoesUl.append(li)
}

const atualizarValores = () =>{
    const quantidadeTransacoes = transacoes
        .map(transacoes => transacoes.amount)
    const total = quantidadeTransacoes
        .reduce((vAcumulado, transacoes) => vAcumulado + transacoes, 0)
        .toFixed(2)
    const income = quantidadeTransacoes.filter(value => value > 0)
        .reduce((vAcumulado, value) => vAcumulado + value, 0)
        .toFixed(2)
    const expense = Math.abs(quantidadeTransacoes
        .filter(value => value < 0)
        .reduce((vAcumulado, value) => vAcumulado + value,0)
        .toFixed(2))
    
    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
}


const init = () =>{
    transacoesUl.innerHTML = ''
    transacoes.forEach(addTransacoesNoDom)
    atualizarValores()
}

init()

const gerarId = () => Math.round(Math.random() * 1000)

form.addEventListener('submit', event => {
    event.preventDefault();

    const transacaoNome = inputTransacaoNome.value.trim();
    const transacaoValor = inputTransacaoValor.value.trim();

    if (transacaoNome === "" || transacaoValor === "") {
        alert("Todos os campos devem ser preenchidos")
        return
    }

    const transacoes = {
        id: gerarId(), 
        name: transacaoNome, 
        amount: Number(transacaoValor) 
    }

    transacoes.push(transacoes)
    init()

    inputTransacaoNome.value = '';
    inputTransacaoValor.value = '';
})


