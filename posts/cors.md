---
title: 'Blocked by CORS'
date: '2024-10-15'
---
No inicio da minha carreira como desenvolvedor, perdi horas ao tentar fazer a ligação do meu frontend e o backend rodando na mesma maquina ou mesmo com a integração a algum serviço. Mas o que significa CORS e como podemos resolver de fato esse problema?

CORS ou Cross Origin Resource Sharing é um recurso dos navegadores para evitar problemas de segurança causados por scripts por meio de XSS garantindo que somente possamos fazer requisições a uma api que esteja na mesma origem do nosso frontend.

## Como funciona o mecanismo de CORS?
Em requisições GET não é necessário o controle do CORS porém em requisições POST, PATCH, PUT, DELETE ou qualquer método que potencialmente altere o estado do servidor é enviada uma requisição do tipo OPTIONS para verificar com o servidor, quais são os métodos que podemos utilizar para um determinado recurso.

![image](/images/cors-error.png)

Para requisições com Content-Type diferente dos listados abaixo, é necessário o envio de uma requisição de pre-envio (Preflight) através do método options

* application/x-www-form-urlencoded
* multipart/form-data
* text/plain

Por exemplo um POST utilizando um Content-Type: application/json

Obs.: Quando utilizamos uma rota autenticada e o servidor solicita credenciais por meio do cabeçalho Access-Control-Allow-Credentials: true, o valor do cabeçalho Access-Control-Allow-Origin, deve ser diferente de * 

## Resolvendo problemas de CORS 
Para simular um bloqueio do tipo "Access-Control-Allow-Origin is not present" iremos utilizar um [formulário simples](https://github.com/higor-tavares/cors-front) e um [backend em flask](https://github.com/higor-tavares/journal) para simular o erro utilizando um método POST com um Content-Type: application/json. Simulando nesse cenário, que não temos acesso ao backend. observe a imagem abaixo.

![imagem](/images/front.png)

Este erro aparece por que o backend não envia os cabeçalhos necessários como "Access-Control-Allow-Origin". o que é possível ver na resposta a requisição OPTIONS.

Existem algumas formas de resolver o problema, mas vou focar nas duas principais. a primeira e obvia é adicionar no servidor os cabeçalhos necessários o qual foi feito [nessa branch](https://github.com/higor-tavares/journal/tree/fix/cors-errors). e a segunda opção é colocar um Proxy reverso na frente da aplicação e adicionando os cabeçalhos necessários. Há varias opções de proxy reverso, uma bem popular é o Nginx.