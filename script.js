// Função para exibir a mensagem de sucesso após enviar o formulário de contato
function exibirMensagemSucesso() {
  var mensagemSucesso = document.getElementById("mensagemSucesso");
  mensagemSucesso.style.display = "block";
  mensagemSucesso.innerHTML = "Sua mensagem foi enviada com sucesso!";
  
  // Oculta a mensagem após 3 segundos
  setTimeout(function() {
    mensagemSucesso.style.display = "none";
  }, 3000);
}

// Função para validar o formulário de contato antes de enviar
function validarFormulario() {
  var nomeInput = document.getElementById("nome");
  var emailInput = document.getElementById("email");
  var mensagemInput = document.getElementById("mensagem");
  
  // Verifica se os campos estão preenchidos
  if (nomeInput.value === "" || emailInput.value === "" || mensagemInput.value === "") {
    alert("Por favor, preencha todos os campos do formulário.");
    return false;
  }
  
  // Verifica se o campo de e-mail está no formato correto
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return false;
  }
  
  // Se tudo estiver correto, exibe a mensagem de sucesso
  exibirMensagemSucesso();
  return true;
}

// Evento de submit do formulário
var formulario = document.getElementById("contatoForm");
formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário
  validarFormulario(); // Valida o formulário antes de prosseguir
});
