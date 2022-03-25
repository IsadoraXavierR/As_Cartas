
      

function FaseUm() {

  var qntdTentativa = 1
  var tentativaAtual =  0
 
        while (qntdTentativa >= tentativaAtual){

          var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );  

          if (resposta == 'b' || resposta == 'B') {
              alert ('Acertou!')
              window.location.href= "../3.1Alice/Fase2.html"  
              break
      }   else if (  resposta != 'b' || resposta != 'B') {
            if (qntdTentativa > 0) {
              alert("Foi flagrada!! Tente novamente com cautela.")   
              qntdTentativa --
              } 
              else {
                  alert('Os seguranças te pegaram, game over.')
                  window.location.href= '../final/Fim.html'  
                  break

              } 
            }
          }
        }
function FaseDois() {

  var qntdTentativa = 1;
  var tentativaAtual = 0;
 
        while (qntdTentativa >= tentativaAtual){

          var resposta = prompt('Escolha entre as opções "A"; "B"; "C" ou "D"' );     

          if (resposta == 'c' || resposta == 'C') {
              alert ('Acertou!')
              window.location.href= "../3.1Alice/Fase3.html"  
              break
      }   else if (  resposta != 'c' || resposta != 'C') {
            if (qntdTentativa > 0) {
              alert("Estava perto demais da briga, saiu machucada. Tente novamente")
              qntdTentativa --
              } 
              else {
                  alert('Seguranças te flagraram, Game Over')
                  window.location.href= '../final/Fim.html'  
                  break

              } 
            }
          }
        }
function FaseTres() {

          var qntdTentativa = 1;
          var tentativaAtual = 0;
         
                while (qntdTentativa >= tentativaAtual){
 
                  var resposta = prompt('Escolha entre as opções "A"; "B";"C"' );     

                  if (resposta == 'b' || resposta == 'B') {
                      alert ('Acertou!')
                      window.location.href= "../3.1Alice/Fase4.html"  
                      break
              }   else if (  resposta != 'b' || resposta != 'B') {
                    if (qntdTentativa > 0) {
                      alert("Os policiais estão desconfiando, seja rápida!")
                      qntdTentativa --
                      } 
                      else {
                          alert('Foi questionada pelos policiais e te descobriram, game over.')
                          window.location.href= '../final/Fim.html'  
                          break
        
                      } 
                    }
                  }
        }
function FaseQuatro() {

                  var qntdTentativa = 1;
                  var tentativaAtual = 0;
                 
                        while (qntdTentativa >= tentativaAtual){
 
                          var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );     

                          if (resposta == 'a' || resposta == 'A') {
                              alert ('Acertou!')
                              window.location.href= "../3.1Alice/Fase5.html"  
                              break
                      }   else if (  resposta != 'a' || resposta != 'A') {
                            if (qntdTentativa > 0) {
                              alert("Não é a melhor opção.")
                              qntdTentativa --
                              } 
                              else {
                                  alert('Esperou muito do "estranho", game over.')
                                  window.location.href= '../final/Fim.html'  
                                  break
                
                              } 
                            }
                          }
        }
function FaseCinco() {

  var qntdTentativa = 1;
  var tentativaAtual = 0;
 
        while (qntdTentativa >= tentativaAtual){

          var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );     

          if (resposta == 'a' || resposta == 'A') {
              alert ('Acertou em cheio.')
              window.location.href= "../3.1Alice/Fase6.html"  
              break
      }   else if (  resposta != 'a' || resposta != 'A') {
            if (qntdTentativa > 0) {
              alert("Nem passou por perto, tenta novamente.")
              qntdTentativa --
              } 
              else {
                  alert('Ele chegou, e as consequências não são boas.. game over.')
                  window.location.href= '../final/Fim.html'  
                  break

              } 
            }
          }
}
function FaseSeis(){
  window.location.href= '../final/fasev.html'  
}


        
      
    