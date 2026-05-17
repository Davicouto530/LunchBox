const botaoGerarlista = document.getElementById('botao-salvar');

botaoGerarlista.addEventListener('click', function() {
    //todos os selections
    const seleçãoSegundaAlmoço = document.getElementById('almoco-segunda').value;
    const seleçãoSegundaJantar = document.getElementById('janta-segunda').value;
    const seleçãoTercaAlmoço = document.getElementById('almoco-terca').value;
    const seleçãoTercaJantar = document.getElementById('janta-terca').value;
    const seleçãoQuartaAlmoço = document.getElementById('almoco-quarta').value;
    const seleçãoQuartaJantar = document.getElementById('janta-quarta').value;
    const seleçãoQuintaAlmoço = document.getElementById('almoco-quinta').value;
    const seleçãoQuintaJantar = document.getElementById('janta-quinta').value;
    const seleçãoSextaAlmoço = document.getElementById('almoco-sexta').value;
    const seleçãoSextaJantar = document.getElementById('janta-sexta').value;
    const seleçãoSabadoAlmoço = document.getElementById('almoco-sabado').value;
    const seleçãoSabadoJantar = document.getElementById('janta-sabado').value;
    const seleçãoDomingoAlmoço = document.getElementById('almoco-domingo').value;
    const seleçãoDomingoJantar = document.getElementById('janta-domingo').value;
    const todasOpções = [seleçãoSegundaAlmoço, seleçãoSegundaJantar, seleçãoTercaAlmoço, seleçãoTercaJantar, seleçãoQuartaAlmoço, seleçãoQuartaJantar, seleçãoQuintaAlmoço, seleçãoQuintaJantar, seleçãoSextaAlmoço, seleçãoSextaJantar, seleçãoSabadoAlmoço, seleçãoSabadoJantar, seleçãoDomingoAlmoço, seleçãoDomingoJantar];

    //CSS do fundo
   const overlay = document.createElement('div');
   Object.assign(overlay.style, {
    position:       'fixed',
    inset:          '0',
    background:     'rgba(0,0,0,.5)',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',})

    
    //css do modal
    const modal = document.createElement('div');
    Object.assign(modal.style, {
    background:   '#fff',
    borderRadius: '12px',
    padding:      '2rem',
    width:        'min(90%, 400px)',
    position:     'relative',})
    
    //conteudo do modal
    let conteudo 
    const temVazio = todasOpções.some(s => s === '');
    if (temVazio) {
        conteudo = `<h2>opção vazia.</h2>
        <button id="fecharModal">Fechar</button>`;
    }
    else {
        conteudo = `<h2>Oque comprar ao decorrer da semana?</h2>
         <p><strong>Segunda:</strong> ${seleçãoSegundaAlmoço} / ${seleçãoSegundaJantar}</p>
            <p><strong>Terça:</strong>   ${seleçãoTercaAlmoço}   / ${seleçãoTercaJantar}</p>
            <p><strong>Quarta:</strong>  ${seleçãoQuartaAlmoço}  / ${seleçãoQuartaJantar}</p>
            <p><strong>Quinta:</strong>  ${seleçãoQuintaAlmoço}  / ${seleçãoQuintaJantar}</p>
            <p><strong>Sexta:</strong>   ${seleçãoSextaAlmoço}   / ${seleçãoSextaJantar}</p>
            <p><strong>Sábado:</strong>  ${seleçãoSabadoAlmoço}  / ${seleçãoSabadoJantar}</p>
            <p><strong>Domingo:</strong> ${seleçãoDomingoAlmoço} / ${seleçãoDomingoJantar}</p>
            <button id="fecharModal">Fechar</button>
            `
    }
    //adicionando a tela principal
    modal.innerHTML = conteudo
    
    //junta o fundo com o modal e adiciona na tela
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    //fechar o modal
    const fechar = () => overlay.remove();
    modal.querySelector('#fecharModal').addEventListener('click', fechar);
    
})