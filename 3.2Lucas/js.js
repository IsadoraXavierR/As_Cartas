function FaseUm(){

        var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );  

        if (resposta == 'b' || resposta == 'B' || resposta == 'a' || resposta == 'A' || resposta == 'c' || resposta == 'C' ) {
            alert ('Belo drink')
                window.location.href= '../3.2Lucas/fase2.html'  
        }   else{
            alert ('Belo drink')
        }}

function FaseDois(){
    

  var qntdTentativa = 1
  var tentativaAtual =  0
 
        while (qntdTentativa >= tentativaAtual){

          var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );  

          if (resposta == 'a' || resposta == 'A') {
              alert ('Perfeito, já acionaram os policiais e funcionários do trem;')
              window.location.href= "../3.2Lucas/Fase3.html"  
              break
      }   else if (  resposta != 'a' || resposta != 'A') {
            if (qntdTentativa > 0) {
              alert(" CUIDADO COM A BRIGA!!")   
              qntdTentativa --
              } 
              else {
                  alert('Alguem bateu em você e causou desmaio, ficou dormindo em todo destino')
                  alert('Game Over!!')
                  window.location.href= '../final/Fim.html'  
                  break

              } 
            }
          }
        }


function FaseQuatro(){
    
            var resposta = prompt('Escolha entre as opções "A"; "B"' );  
        
            if (resposta == 'B' || resposta == 'b' ) {
                alert ('Continue, mas com cuidado')
                window.location.href= "../3.2Lucas/fase5.html"  
            }   else {
                alert ('Infelizmente algo de terrivel aconteceu, você se arrependeu para sempre...')
                window.location.href= '../final/Fim.html'  
        
            }}


function FaseCinco(){
    

    var qntdTentativa = 1
    var tentativaAtual =  0
   
          while (qntdTentativa >= tentativaAtual){
  
            var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );  
  
            if (resposta == 'B' || resposta == 'b') {
                alert ('Belo soco;')
                window.location.href= "../3.2Lucas/Fase6.html"  
                break
        }   else if (  resposta != 'B' || resposta != 'b') {
              if (qntdTentativa > 0) {
                alert(" Está escapando de suas mãos, rápido, tente novamente;")   
                qntdTentativa --
                } 
                else {
                    alert('Ele fugiu do seu controle... e... Game Over')
                    window.location.href= '../final/Fim.html'  
                    break
  
                } 
              }
            }
          }
        
function FaseSeis(){

    var resposta = prompt('Escolha entre as opções "A"; "B"; "C"' );  

    if (resposta == 'b' || resposta == 'B' || resposta == 'a' || resposta == 'A' || resposta == 'c' || resposta == 'C' ) {
        alert ('Belo drink')
        window.location.href= "../3.2Lucas/fasev.html"  
    }   else{
        alert ('Belo drink')
        window.location.href= "../3.2Lucas/fasev.html"  

    }}
  