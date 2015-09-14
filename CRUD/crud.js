$(document).ready(function () {
  var $formWell = $('#form-well');
  var $formGroups = $('div.form-group');
  var $helpBlocks = $('span.help-block');
  var $nomeInput = $('#nome-input');
  var $prioridadeInput = $('#prioridade-input');
  var $tabelaCategoria = $('#tabela-categoria')

  $formWell.hide();
  $('#botao-nova-categoria').click(function () {
    $formWell.slideToggle();
  });

  function limparErros() {
    $formGroups.removeClass('has-error');
    $helpBlocks.text('');
  }

  $.get('http://localhost:8080/categorias/rest',function(categorias){
    console.log(categorias);
  },'json');

  function adicionarCategoria(categoria) {

	
		var linha = '<tr>';
		linha += '<td>' + categoria.id + '</td>';
		linha += '<td>' + categoria.creation + '</td>';
		linha += '<td>' + categoria.nome + '</td>';
		linha += '<td>' + categoria.prioridade + '</td>';
		linha += '<td>';
		linha += '<button class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash"></i></button>';
		linha += '</td ></tr>';
		 
		var $linhaObjeto = $(linha);
		var $botao = $linhaObjeto.find('button.btn').click(function () {
		  console.log(categoria.id);
		  $linhaObjeto.remove();
	
    });

    $tabelaCategoria.append($linhaObjeto);

  }

  function listarCategorias(categorias){
    $.each(categorias, function(i, cat){
      adicionarCategoria(cat);
    })
  }

  var categoriasFake=[{ "id": 0022252252305, "nome": "Cinema", "creation": "09/08/2015 16:44:20", "prioridade" : 4}, { "id": 0927252052305, "nome": "Política", "creation": "09/08/2015 17:29:42","prioridade" : 6}, { "id": 1028250052305, "nome": "Celular", "creation": "09/09/2015 09:12:05", "prioridade" : 5}];
  listarCategorias(categoriasFake);

  function mostrarErros(erros) {
    var helpBlockPrefixo = '#help-block-';
    var formGroupPrefixo = '#form-group-';
    $.each(erros, function (propriedade, valorDaPropriedade) {
      $(helpBlockPrefixo + propriedade).text(valorDaPropriedade);
      $(formGroupPrefixo + propriedade).addClass('has-error');
    });
  }

  $('#form-categoria').submit(function (evento) {
    evento.preventDefault();
    limparErros();
    var nome = $nomeInput.val();
	var prioridade = $prioridadeInput.val();
	var hasError = false;
    if (nome === '') {
      mostrarErros({'nome': 'Campo Obrigatório'})
	  hasError = true;
    } 
	
	if(prioridade === ''){
		mostrarErros({'prioridade': 'Campo Obrigatório'})
		 hasError = true;
	}
	 ;
	if((isNaN(prioridade))){
		mostrarErros({'prioridade': 'É necessário ser um número'})
		hasError = true;
	}
	
	if(!hasError){
      adicionarCategoria({
		"id" : Date.now(),
        "nome": nome,
		"prioridade" : prioridade,
        "creation": "09/08/2015 16:44:20"});
      $nomeInput.val('');
	  $prioridadeInput.val('');
    }

  });

});