function relogio() {
  //Cria hora a partir de segundos.
    function criaHoraDosSegundos(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
      });
    }
  
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
  
    //Inicia o Relogio.
    function iniciaRelogio() {
      timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
      }, 1000);
    }
  
    //Evento de clique.
    document.addEventListener('click', function(e) {
      const el = e.target;
  
      //Zera o Relogio.
      if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
      }
  
      //Inicia o Relogio.
      if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
      }

      //Pausa o Relogio
      if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
      }
    });
  }
  relogio();


