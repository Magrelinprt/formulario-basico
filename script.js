let dadosFormulario = document.getElementById('formulario');

dadosFormulario.addEventListener('submit', function(event){
    event.preventDefault();

    document.getElementById('nomeCompleto').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('mensagemLivre').value = '';

    let mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Formulário preenchido'
    mensagem.style.display = 'block';
})