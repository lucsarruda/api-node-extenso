# api-node-extenso

API Node.js - Retorno de Números por extenso : 

### Utilizado : 
- Node.js 
- Dependências NPM: body-parser , express e extenso
- Utilizado a Dependência "Extenso.js" para retorno de números por extenso, conforme doc. (https://extenso.js.org/ )

## Rodar Localmente 

- Dentro da pasta dos fontes
- Baixar as dependências - ```npm install```
- Subir app - ```node app```

```
 - curl http://localhost:3000/1
   { "extenso": "um" }
 - curl http://localhost:3000/-1042
   { "extenso": "menos mil e quarenta e dois" }
 - curl http://localhost:3000/94587
   { "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }
```






