
      

function FaseUm() {

  var qntdTentativa = 1;
  var tentativaAtual =  0;
 
  var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );     
        while (qntdTentativa >= tentativaAtual){
              
          if (resposta == 'b' || resposta == 'B') {
              alert ('Acertou!')
              window.location.href= "http://127.0.0.1:5500/3.1Alice/Fase2.html";  
              break
      }   else if (  resposta != 'b' || resposta != 'B') {
            if (qntdTentativa > 0) {
              alert("Foi flagrada!! Tente novamente com cautela.")
              var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );     
              qntdTentativa --
              } 
              else {
                  alert('Os seguranças te pegaram, game over.')
                  window.location.href= 'Fim.html'
                  break

              } 
            }
          }
        }
function FaseDois() {

  var qntdTentativa = 1;
  var tentativaAtual = 0;
 
  var resposta = prompt('Escolha entre as opções "A"; "B"; "C" ou "D"' );     
        while (qntdTentativa >= tentativaAtual){
              
          if (resposta == 'c' || resposta == 'C') {
              alert ('Acertou!')
              window.location.href= "http://127.0.0.1:5500/3.1Alice/Fase3.html";  
              break
      }   else if (  resposta != 'c' || resposta != 'C') {
            if (qntdTentativa > 0) {
              alert("Estava perto demais da briga, saiu machucada. Tente novamente")
              var resposta = prompt('Escolha entre as opções "A"; "B"; "C" ou "D"' );     
              qntdTentativa --
              } 
              else {
                  alert('Seguranças te flagraram, Game Over')
                  window.location.href= 'Fim.html'
                  break

              } 
            }
          }
        }
function FaseTres() {

          var qntdTentativa = 1;
          var tentativaAtual = 0;
         
          var resposta = prompt('Escolha entre as opções "A"; "B";"C"' );     
                while (qntdTentativa >= tentativaAtual){
                      
                  if (resposta == 'b' || resposta == 'B') {
                      alert ('Acertou!')
                      window.location.href= "http://127.0.0.1:5500/3.1Alice/Fase4.html";  
                      break
              }   else if (  resposta != 'b' || resposta != 'B') {
                    if (qntdTentativa > 0) {
                      alert("Os policiais estão desconfiando, seja rápida!")
                      var resposta = prompt('Escolha entre as opções "A"; "B";"C"' );     
                      qntdTentativa --
                      } 
                      else {
                          alert('Foi questionada pelos policiais e te descobriram, game over.')
                          window.location.href= 'Fim.html'
                          break
        
                      } 
                    }
                  }
        }
function FaseQuatro() {

                  var qntdTentativa = 1;
                  var tentativaAtual = 0;
                 
                  var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );     
                        while (qntdTentativa >= tentativaAtual){
                              
                          if (resposta == 'a' || resposta == 'A') {
                              alert ('Acertou!')
                              window.location.href= "http://127.0.0.1:5500/3.1Alice/Fase5.html";  
                              break
                      }   else if (  resposta != 'a' || resposta != 'A') {
                            if (qntdTentativa > 0) {
                              alert("Não é a melhor opção.")
                              var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );     
                              qntdTentativa --
                              } 
                              else {
                                  alert('Esperou muito do "estranho", game over.')
                                  window.location.href= 'Fim.html'
                                  break
                
                              } 
                            }
                          }
        }
function FaseCinco() {

                          var qntdTentativa = 1;
                          var tentativaAtual = 0;
                         
                          var resposta = prompt('Escolha entre as opções "A"; "B";"C"' );     
                                while (qntdTentativa >= tentativaAtual){
                                      
                                  if (resposta == 'a' || resposta == 'A') {
                                      alert ('Acertou!')
                                      window.location.href= "http://127.0.0.1:5500/3.1Alice/Fase6.html";  
                                      break
                              }   else if (  resposta != 'a' || resposta != 'A') {
                                    if (qntdTentativa > 0) {
                                      alert("Não o atrasou, arremesse algo outro utensilio.")
                                      var resposta = prompt('Escolha entre as opções "A"; "B";"C"' );     
                                      qntdTentativa --
                                      } 
                                      else {
                                          alert('Que pena, você não sairá mais. Game Over.')
                                          window.location.href= 'Fim.html'
                                          break
                        
                                      } 
                                    }
                                  }
        }
        
        
        


        
      
    