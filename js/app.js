

btn.addEventListener('click', function criarLista(evento) {

    evento.preventDefault();

    var btnExcluir = document.createElement('button');
    var checkBOX = document.createElement('input');
    var texto_check = document.createElement('p');
    var ul = document.querySelector('ul');
    // let conteudoDOLi = document.createTextNode("Novo Item")
    var li = document.createElement('li');
    // let inputDataCriacao = document.querySelector("#datacriacao");
    var inputDataLimite = document.querySelector("#datalimite");
    var descricao = document.querySelector("#descricao");
    var br = document.createElement("br");
    var btn = document.querySelector("#btn");

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
    
    btnExcluir.addEventListener('click', function (e) {
        if (e.target.classList.contains('card')){
            var card = closest(e.target, 'card');
            card.parentNode.removeChild(card);
        }
    });

// Removendo determinado elemento

});
