### Desafio FullStack Vue.js + Laravel
___

   ## Passo a passo para rodar a aplicação:
   Após clonar esse repositório, rodar os seguintes comandos:
   
   ```
cd .\backend
```
Entra na pasta do backend do projeto
```
composer install
```
Instala as dependências usadas no projeto, depois disso, é necessário alterar os dados da sua conexão no documento .env, seguindo os exemplos do documento .env.example
```
php artisan migrate
```
Cria as tabelas usadas no projeto
```
php artisan serve
```
Pronto, seu backend do projeto está rodando em localhost! Guarde a URL fornecida, iremos usar ela logo logo.

Agora, rode os seguintes comandos:
```
cd ..
cd .\frontend
```
Comandos para voltar para a pasta raíz e depois entrar na pasta do frontend do projeto
```
npm i
npm run dev
```
Comandos para instalar as dependencias do projeto e rodar o projeto em localhost
Após isso, basta ir até o arquivo src\controllers\BaseController.js e, na linha 3, mudar o valor da constante host para a url fornecida quando foi rodado o comando php artissan serve.     
Depois de salvar as alterações no arquivo já é possível ver a aplicação rodando na url fornecida pelo comando npm run dev.    
___
Para testar a criação de um novo usuário através de um Flow na Huggy, basta acessar a [Conversation page](https://www.huggy.chat/3ef8222a-b857-4a63-87c9-7954fefbd4fe)    
Além disso, a aplicação também está [online!](https://desafio-huggy.web.app/)
