let cliente = null;
let saldo = 0;
let divida = 0;
let parcelas = 0;

function atualizar() {
    document.getElementById("cliente").innerText = cliente ?? "Nenhum";
    document.getElementById("saldo").innerText = saldo.toFixed(2);
    document.getElementById("divida").innerText = divida.toFixed(2);
    document.getElementById("parcelas").innerText = parcelas;
}

function criarConta() {
    const nome = document.getElementById("nome").value;
    if (!nome) return alert("Digite um nome!");

    cliente = nome;
    saldo = 0;
    divida = 0;
    parcelas = 0;

    alert("Conta criada com sucesso!");
    atualizar();
}

function depositar() {
    if (!cliente) return alert("Crie uma conta primeiro!");
    let v = Number(document.getElementById("valor").value);

    if (v <= 0) return alert("Digite um valor válido!");

    const taxa = v * 0.07;
    saldo += (v - taxa);

    alert(`Depositado: R$ ${v} (- R$ ${taxa.toFixed(2)} de taxa).`);
    atualizar();
}

function sacar() {
    if (!cliente) return alert("Crie uma conta primeiro!");
    let v = Number(document.getElementById("valor").value);

    if (v <= 0) return alert("Digite um valor válido!");

    const taxa = v * 0.10;
    const total = v + taxa;

    if (total > saldo)
        return alert("Saldo insuficiente!");

    saldo -= total;

    alert(`Saque: R$ ${v} (+ R$ ${taxa.toFixed(2)} de taxa).`);
    atualizar();
}

function emprestimo() {
    if (!cliente) return alert("Crie uma conta primeiro!");
    let v = Number(document.getElementById("valor").value);

    if (v <= 0) return alert("Digite um valor válido!");

    divida += v;
    parcelas = 5;

    alert(`Empréstimo aprovado! Total: R$ ${v} dividido em 5 parcelas.`);
    atualizar();
}
