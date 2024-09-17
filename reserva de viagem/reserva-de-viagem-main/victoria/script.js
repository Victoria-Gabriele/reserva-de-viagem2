document.addEventListener('DOMContentLoaded',()=>{
    const reserva = document.getElementById('reserva');
    reserva.addEventListener('submit', function(event){
        event.preventDefault();
    
        const nome = document.getElementById('nome').value;
        const data = document.getElementById('data').value;
        const viagem = document.getElementById('viagem').value;
        const mensagem = `<h3>Reserva feita</h3>
        <p> Nome: ${nome}</p>
        <p> Local: ${viagem}</p>
        <p> Data: ${data}</p> 
        `
        document.getElementById('mensagem').innerHTML = mensagem;
    });
    });

    document.addEventListener('DOMContentLoaded', function() { 
        const msgCookies= document.getElementById('cookies-msg');
        const aceitocookies = document.getElementById('aceitocookies');
        //rá mostrar a mensagem do cookies
        function mostrarCookies(){
          msgCookies.classList.add('mostrar')
        }
        //irá esconder a mensagem do cookies
        function esconderCookies(){
          msgCookies.classList.remove('mostrar')
        }
        //Mostrar a mensagem por um tempo
        mostrarCookies();
           //Adicionar evento do clique ao botâo
        aceitocookies.addEventListener('click', function() {
          esconderCookies();
        });
      })
      