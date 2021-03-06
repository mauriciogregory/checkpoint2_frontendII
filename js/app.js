const checkbox1 = document.getElementById('checkbox');

checkbox1.addEventListener('change', () => {
  //mudar o tema do site
  document.body.classList.toggle('dark');
});

btn.addEventListener('click', function criarLista(evento) {

  evento.preventDefault();

  var btnExcluir = document.createElement('button');
  var checkBOX = document.createElement('input');
  var texto_check = document.createElement('p');
  var ul = document.querySelector('ul');
  var li = document.createElement('li');
  var inputDataLimite = document.querySelector("#datalimite");
  var descricao = document.querySelector("#descricao");
  var br = document.createElement("br");
  var btn = document.querySelector("#btn");

  // data de criação da lista
  const agora = new Date;
  console.log(agora);
  dia = agora.getDay() - 2;
  mes = agora.getMonth() + 1;
  ano = agora.getFullYear();

  var inputDataCriacao = document.querySelector('input[type="date"]');
  inputDataCriacao.value = (ano + "-" + mes + "-0" + dia);

  // data de término
  console.log(inputDataLimite.value);
  let validaData = inputDataLimite.value.split('-');
  let anoTermino = validaData[0];
  let mesTermino = validaData[1];
  let diaTermino = validaData[2];

  if ((anoTermino == ano) && ((mesTermino >= mes) && (diaTermino >= dia)) ) {
    // comparando string textarea validando
    if (descricao.value.length <= 10) {
      Swal.fire({
        title: 'Ops!',
        text: 'O número de caracteres precisa ser maior que 10!',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } else {
      li.innerHTML = "Data de criação: " + inputDataCriacao.value + "<br>" + "Data Limite: " +
        inputDataLimite.value + "<br>" + descricao.value;
      li.classList.add('card');
      li.setAttribute('id', 'card1')

      // botão excluir
      li.appendChild(btnExcluir);
      btnExcluir.setAttribute('type', 'submit');
      btnExcluir.setAttribute('value', 'Excluir')
      btnExcluir.innerHTML = "Excluir";
      btnExcluir.classList.add('btnExcluir')

      // checkbox
      li.appendChild(checkBOX);
      checkBOX.setAttribute('type', 'checkbox');
      checkBOX.setAttribute('id', 'checkbox');
      checkBOX.setAttribute('unchecked', 'false');
      texto_check.innerHTML = 'Concluído!'
      li.appendChild(texto_check);
      ul.appendChild(li);

      checkBOX.addEventListener('change', () => {

        if (document.getElementById('checkbox').checked = true) {
          li.classList.add('card-done');
        }
        else if (document.getElementById('checkbox').unchecked = true) {

          li.className.remove('card-done');
        }
      })
    }
  } else 
  if (anoTermino > ano){
    // comparando string textarea validando
    if (descricao.value.length <= 10) {
      Swal.fire({
        title: 'Ops!',
        text: 'O número de caracteres precisa ser maior que 10!',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } else {
      li.innerHTML = "Data de criação: " + inputDataCriacao.value + "<br>" + "Data Limite: " +
        inputDataLimite.value + "<br>" + descricao.value;
      li.classList.add('card');
      li.setAttribute('id', 'card1')

      // botão excluir
      li.appendChild(btnExcluir);
      btnExcluir.setAttribute('type', 'submit');
      btnExcluir.setAttribute('value', 'Excluir')
      btnExcluir.innerHTML = "Excluir";
      btnExcluir.classList.add('btnExcluir')

      // checkbox
      li.appendChild(checkBOX);
      checkBOX.setAttribute('type', 'checkbox');
      checkBOX.setAttribute('id', 'checkbox');
      checkBOX.setAttribute('unchecked', 'false');
      texto_check.innerHTML = 'Concluído!'
      li.appendChild(texto_check);
      ul.appendChild(li);

      checkBOX.addEventListener('change', () => {

        if (document.getElementById('checkbox').checked = true) {
          li.classList.add('card-done');
        }
        else if (document.getElementById('checkbox').unchecked = true) {

          li.className.remove('card-done');
        }
      })
    }
  }
  else {
    Swal.fire({
      title: 'Ops!',
      text: 'Escolha outra data!',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }


  btnExcluir.addEventListener('click',
    function _click() {
      var confirmar = confirm("Quer excluir o item?");
      if (confirmar == true) {
        document.getElementById('card1').remove();
      }

    });

});
