

btn.addEventListener('click', function criarLista(evento) {
    evento.preventDefault();

    const btnExcluir = document.createElement('button');
const checkBOX = document.createElement('input');
const texto_check = document.createElement('p');
let ul = document.querySelector('ul');
// let conteudoDOLi = document.createTextNode("Novo Item")
let li = document.createElement('li');
// let inputDataCriacao = document.querySelector("#datacriacao");
let inputDataLimite = document.querySelector("#datalimite");
let descricao = document.querySelector("#descricao");
let br = document.createElement("br");
let btn = document.querySelector("#btn");

const agora = new Date;
console.log(agora);
// inputDataCriacao.innerHTML = agora.getDay;
dia = agora.getDay() - 2;
mes = agora.getMonth() + 1;
ano = agora.getFullYear();



var inputDataCriacao = document.querySelector('input[type="date"]');
inputDataCriacao.value = (ano + "-" + mes + "-0" + dia);

    li.innerHTML = "Data de criação: " + inputDataCriacao.value + "<br>" + "Data Limite: " +
        inputDataLimite.value + "<br>" + descricao.value;
    li.classList.add('card');

    // botão excluir
    li.appendChild(btnExcluir);
    btnExcluir.setAttribute('type', 'submit');
    btnExcluir.setAttribute('value', 'Excluir')
    btnExcluir.innerHTML = "Excluir";
    btnExcluir.classList.add('btnExcluir')

    // check box
    li.appendChild(checkBOX);
    checkBOX.setAttribute('type', 'checkbox');
    texto_check.innerHTML = 'Concluído!'
    li.appendChild(texto_check);

    // li.appendChild(conteudoDOLi);
    ul.appendChild(li);


});
// var listaElementos = document.getElementById("lista");
// listaElementos.removeChild(listaElementos.lastElementChild);





