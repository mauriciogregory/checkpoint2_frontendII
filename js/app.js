let ul = document.querySelector('ul');
// let conteudoDOLi = document.createTextNode("Novo item");
let conteudoDOLi = document.createTextNode("Novo Item")
let li = document.createElement('li');
let inputDataCriacao = document.querySelector("#datacriacao");
let inputDataLimite = document.querySelector("#datalimite");

let btn = document.querySelector("#btn");

function criarLista(evento){
    evento.preventDefault();

    li.innerHTML = "Data de criação: " + inputDataCriacao.value + "<br>" + "Data Limite: " +  inputDataLimite.value;
    ul.classList.add('li');
    li.appendChild(conteudoDOLi);
    document.getElementById("lista").appendChild(li);
}

var listaElementos =document.getElementById("lista");
// listaElementos.removeChild(listaElementos.lastElementChild);

btn.addEventListener('click', criarLista);


