function suaMedia(){  
  var nome = window.prompt(`Qual o seu nome?`)

  var notaPrimeiroBimestre = window.prompt(`Qual foi sua nota no primeiro bimestre?`);
  var notaPrimeiroBimestreF = parseFloat(notaPrimeiroBimestre);
  
  var notaSegundoBimestre = window.prompt(`Qual foi sua nota no segundo bimestre?`);
  var notaSegundoBimestreF = parseFloat(notaSegundoBimestre);
  
  var notaTerceiroBimestre = window.prompt(`Qual foi sua nota no terceiro bimestre?`);
  var notaTerceiroBimestreF = parseFloat(notaTerceiroBimestre);
  
  var notaQuartoBimestre = window.prompt(`Qual foi sua nota no quarto bimestre?`);
  var notaQuartoBimestreF = parseFloat(notaQuartoBimestre);
  
  var mediaFinal = (notaPrimeiroBimestreF + notaSegundoBimestreF + notaTerceiroBimestreF + notaQuartoBimestreF)/4
  
  var suaMedia = mediaFinal.toFixed(1);
  window.alert(`${nome}, sua média final foi ${suaMedia}.`);
  /*if (suaMedia >= 7) {
        window.alert('Oi, ${nome}. Sua média foi ${suaMedia}. Você foi aprovado!')
        return
      }
      window.alert('Oi, ${nome}. Sua média foi ${suaMedia}. Você foi reprovado.')*/
  
}
    
      
    
    
    
    