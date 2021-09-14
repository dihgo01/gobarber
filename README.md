# GoBarber
<div align="center" style="margin-bottom: 20px;">
</div>
<div align="center" style="margin: 20px;">
<p align="center" >
  <a href="#barber-introdução"> :fire: Introdução</a> |
  <a href="#rocket-tecnologias-utilizadas"> :rocket: Tecnologias Utilizadas</a> |
  <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a> |
  <a href="#hammer-deploy-da-aplicação"> :hammer: Deploy da Aplicação</a> |
  </p>
</div>

## :barber: Introdução

Aplicação para agendar e gerenciar serviços de beleza, onde prestadores de serviços podem se cadastrar, e usuários poderão marcar agendamentos com estes prestadores com ate uma hora de antecedencia, o app notifica o prestador e o usuario com email do novo agendamento. Alem de disponibilizar todos os agendamentos dos dias e os que já foram realizados. 

## :rocket: Tecnologias Utilizadas
O projeto foi feito com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://pt-br.reactjs.org/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [JWT](https://jwt.io/)
- [Yup](https://github.com/jquense/yup)
- [Styled-Components](https://styled-components.com/)
{...}

## :zap: Executando o Projeto

#### Clonando o projeto
```sh
$ git clone https://github.com/dihgo01/Gobarber.git
$ cd gobarber
```
## :hammer: Deploy da Aplicação
{...}

#### Iniciando a API
```sh
$ cd api

# Criando a imagem Docker do banco de dados:
# Ao iniciar o docker no terminal de comandos
$ docker run container --name (NOME DO CONTAINER) -p 3333:3333
# Apos a criaçao do container vamos instalar a imagem do PostgreSQL .
$  docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

# Rodando as migrations para o banco de dados e iniciando o projeto
$ yarn && yarn typeorm migration:run && yarn dev:server
```

<a href="https://insomnia.rest/run/?label=gobarber-jvictorfarias&uri=https%3A%2F%2Fgithub.com%2Fjvictorfarias%2FGoBarber%2Fblob%2Fmaster%2Fapi%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

#### Iniciando o Frontend
```sh
$ cd web
$ yarn && yarn start
```
#### Iniciando o Mobile(Android)
```sh
$ cd mobile
$ yarn && yarn android && yarn start
```
<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :purple_heart: by <strong> Diego Candido Caetano da Silva</strong> </p>
