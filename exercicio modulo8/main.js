const form = document.getElementById('meu_form');
const nomes = [];
const fones = [];
const emails = [];
const infos = [];

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
})

function adicionarLinha(){
    const inputnomeId = document.getElementById('nomeid');
    const inputfoneId = document.getElementById('foneid');
    const inputemailId = document.getElementById('emailid');
    const inputmaisInformacoes = document.getElementById('maisinformacoes');

    if(nomes.includes(inputnomeId.value)){
        alert(`O contato: ${inputnomeId.value} já foi cadastrado`);
    }else {

    nomes.push(inputnomeId.value);
    fones.push(inputfoneId.value);
    emails.push(inputemailId.value);
    infos.push(inputmaisInformacoes.value);

    let linha = '<tr>';
    linha += `<td>${inputnomeId.value}</td>`;
    linha += `<td>${inputfoneId.value}</td>`;
    linha += `<td>${inputemailId.value}</td>`;
    linha += `<td>${inputmaisInformacoes.value}</td>`;
    linha += '</tr>'

    linhas += linha;

    inputnomeId.value = '';
    inputfoneId.value = '';
    inputemailId.value = '';
    inputmaisInformacoes.value = '';
}}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}