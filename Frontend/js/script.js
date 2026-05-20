let menuIcon = document.querySelector('#menu-icon');
let ul = document.querySelector('.nav-list');
let ip = "http://10.26.45.42:5000/api/v1";

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
    position:        'fixed',
  inset:           '0',
  background:      'rgba(0,0,0,.5)',
  display:         'flex',
  alignItems:      'center',      // gruda no fundo da tela
  justifyContent:  'center',})

    
    //css do modal
    const modal = document.createElement('div');
    Object.assign(modal.style, {
    background:      '#F3EFE6',
    borderRadius:    '10px 10px',  
    padding:         '2rem',
    width:           '90%',           // largura total
    maxHeight:       '95vh',          
    overflowY:       'auto',           
    scrollbarWidth:   'none',           
    position:        'relative',
    fontFamily:    'Poppins, sans-serif',
    
    })
    
    //conteudo do modal
    let conteudo 
    const temVazio = todasOpções.some(s => s === '');
    if (temVazio) {
        conteudo = `<h2>opção vazia.</h2>
                    <button id="fecharModal" style="margin-top: 10px;padding: .6rem 1.4rem; border-radius: 8px; border: none; background: #CF6F24; color: #fff; font-size: 1rem; cursor: pointer;">Fechar</button>`;
    }
    else {
        conteudo =
            `<h2>Igredintes da semana</h2>
            <p><strong>Segunda:</strong> <br>
            Almoço: ${seleçãoSegundaAlmoço} <br><br> Jantar: ${seleçãoSegundaJantar}</p>
            <hr style="background-color: #374122;border: 0px; height: 2px;">
            <p><strong>Terça:</strong> <br>
            Almoço: ${seleçãoTercaAlmoço} <br><br> Jantar: ${seleçãoTercaJantar}</p>
            <hr style="background-color: #374122;border: 0px; height: 2px;">
            <p><strong>Quarta:</strong> <br>
            Almoço: ${seleçãoQuartaAlmoço} <br><br> Jantar: ${seleçãoQuartaJantar}</p>
            <hr style="background-color: #374122;border: 0px; height: 2px;">
            <p><strong>Quinta:</strong> <br>
            Almoço: ${seleçãoQuintaAlmoço} <br><br> Jantar: ${seleçãoQuintaJantar}</p>
            <hr style="background-color: #374122;border: 0px; height: 2px;">
            <p><strong>Sexta:</strong> <br>
            Almoço: ${seleçãoSextaAlmoço} <br><br> Jantar: ${seleçãoSextaJantar}</p>
            <hr style="background-color: #374122;border: 0px; height: 2px;">
            <p><strong>Sábado:</strong> <br>
            Almoço: ${seleçãoSabadoAlmoço} <br><br> Jantar: ${seleçãoSabadoJantar}</p>
            <hr style="background-color: #374122;border: 0px; height: 2px;">
            <p><strong>Domingo:</strong> <br>
            Almoço: ${seleçãoDomingoAlmoço} <br><br> Jantar: ${seleçãoDomingoJantar}</p>
            <button id="fecharModal" style="margin-top: 10px;padding: .6rem 1.4rem; border-radius: 8px; border: none; background: #CF6F24; color: #fff; font-size: 1rem; cursor: pointer;">Fechar</button>
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

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('#menu-icon img').src = '/img/menu-aberto.png'
    } else {
        ul.classList.add('ativo');
        document.querySelector('#menu-icon img').src = '/img/close.png';
    }
})

// Colocando o ano automaticamente 
const pRodape = document.getElementById("pAno");
const data = new Date();

const dataAno = data.getFullYear();

pRodape.innerHTML += ` ${dataAno} LunchBox`;