## Docker - servidor web - apache/php, api back end - nodejs, banco de dados - mysql 8

### 1 - Instalar dependências de desenvolvimento para a api node (express, nodemon) dentro da pasta api
``` cd api ```
``` npm install ```
### 2 - Montar imagens e containers a partir do docker-compose (-d para rodar no background do terminal)
``` docker-compose up -d```
### 3 - Adicionar dados ao banco
```docker exec -i mysql-container mysql -uroot -prafaelfaria < api/db/script.sql```
### 4 - Se a execução for rejeitada, o driver do nodejs é incompatível com a nova versão do mysql 8, mude a configuração dentro do container
```docker exec -it mysql-container bash```
### 5 - Acesse o banco
```mysql -uroot -prafaelfaria```
### 6 - Mude a senha do root
```ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha';```
```flush privileges;```
### 7 - Volte à pasta raíz e crie os containers
``` docker-compose up -d```
### Acessar o endereço localhost:8888 para ver a lista da tabela, acessar http://localhost:9001/projects para ver o json da api
