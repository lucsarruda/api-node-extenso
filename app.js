var express = require('express');
var bodyParser = require('body-parser');
var extenso = require('extenso')
var app = express();

app.use(bodyParser.json());

app.get('/:reqnumber', function(req, res) {

  let number = req.params.reqnumber;
  let dados 

  if ( !isNaN(number)) { 

    if(number == 0){
      dados =  {
        extenso: "Zero"
      }
    }else{
      dados =  {
        extenso: extenso(number , { negative: 'informal' } )
      }
    }
    
  }else{
    dados =  {
      Erro: "Parametro invalido! Informe apenas numeros!"
    }
  }

  res.send(JSON.stringify(dados));

});


app.listen(3000, function() {
  console.log(' ************** Server ON - rodando na porta 3000. ************** \n Enjoy =D ');
});