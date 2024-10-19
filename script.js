function mostrarPagina(pagina) {
  // Esconde todas as páginas
  const paginas = document.querySelectorAll('.pagina');
  paginas.forEach(function (pag) {
    pag.classList.remove('ativa');
  });

  // Mostra a página clicada
  document.getElementById(pagina).classList.add('ativa');
}

// Opcional: Exibir a página 'Sistemas' por padrão ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  mostrarPagina('sistemas');
});
