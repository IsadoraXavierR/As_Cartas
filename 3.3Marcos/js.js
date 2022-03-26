function FaseUm(){
    var qntdTentativa = 1
    var tentativaAtual =  0
   
          while (qntdTentativa >= tentativaAtual){
  
            var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );  
  
            if (resposta == 'a' || resposta == 'A') {
                alert ('Que bom, bora tomar uma?!')
                window.location.href= "../3.3Marcos/fase2.html"  
                break
        }   else {
              if (resposta != 'a' || resposta != 'A') {
                alert(" Você chegou no local, mas não achou ninguem. Tente novamente")
                } 

  
                
              }
            }
          }

function FaseDois(){

  var qntdTentativa = 1
  var tentativaAtual =  0
 
        while (qntdTentativa >= tentativaAtual){

          var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );  

          if (resposta == 'b' || resposta == 'B') {
              alert ('Parabéns, isso demonstra que você tem muita labia rs...')
              window.location.href= "../3.3Marcos/Fase3.html"  
              break
      }   else if (  resposta != 'b' || resposta != 'B') {
            if (qntdTentativa > 0) {
              alert(" CUIDADO... Quase foi flagrado.")   
              qntdTentativa --
              } 
              else {
                  alert('Você foi flagrado/a. Chamaram até os seguranças para te tirar com força... Game Over')
                  window.location.href= '../final/Fim.html'  
                  break

              } 
            }
          }
        }

function FaseTres(){

  var qntdTentativa = 1
  var tentativaAtual =  0
 
        while (qntdTentativa >= tentativaAtual){

          var resposta = Number(prompt(' Atenção aos detalhes, responda com o calculo total'));  
          if( resposta == '30' ){
              alert ('Uau, você é esperto!!')
              window.location.href= "../3.3Marcos/Fase4.html"  
              break
        } else if (  resposta != '30' ) {
          if (qntdTentativa > 0) {
            alert(" NOSSA ENTROU NO QUARTO ERRADO!! Os funcionarios sempre passam pelo corredor, tome cuidado")   
            qntdTentativa --
            } else {
                  alert('NAO ERA PARA ATRAPALHAR O CASAL!! Agora o guardinha está vindo apartar a confusão ')
                  alert('Game Over!')
                  window.location.href= '../final/Fim.html'  
                  break
              }
        }
       }}

function FaseQuatro(){

          var resposta = prompt(' Resposta validas são sim ou não...');  
          if( resposta == 'Sim' || resposta == 'sim'){
              alert (' Oh não aconteceu algo...')
              window.location.href= "../3.3Marcos/Fase5.html"  
            } else {
                  alert(' Você não queria ver seus pais, game over na missão! ')
                  window.location.href= '../final/Fim.html'   
              }
            
        }
      

function FaseCinco(){
  var qntdTentativa = 1
  var tentativaAtual =  0
 
        while (qntdTentativa >= tentativaAtual){

          var resposta = prompt(' Sua última oportunidade, tome cuidado!! ');  
          if( resposta == 'a' || resposta == 'A' ){
              alert ('Suas ultimas forças valeram a pena!')
              window.location.href= "../3.3Marcos/fase6.html"  
              break
        } else if (  resposta != 'a' ) {
          if (qntdTentativa > 0) {
            alert(" Ele revidou e foi bem dolorido, tenta de novo")   
            qntdTentativa --
            } else {
                  alert('A sensação dos seus ossos serem esmagados pelo trem, não foi das melhores')
                  window.location.href= '../final/Fim.html'  
                  break
              }
        }
       }}
