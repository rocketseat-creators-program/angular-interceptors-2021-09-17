<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Utilizando Angular HTTP Interceptors

Iremos abordar nesta aula assuntos muito recorrentes no dia a dia de um desenvolvedor front-end, como lidar com headers e tokens de autenticação para chamadas a endpoints privados das APIs, componentes de loading global da aplicação e emissão de alertas baseado no tipo de erro recebido da API. 

**O que todos estes assuntos tem em comum?** Estão relacionados a serviços que utilizam chamadas para APIs externas, porém ao trazer esta responsabilidade aos serviços que utilizam o HttpClient acabamos acumulando responsabilidades aos mesmos, e gerando muita repetição de código, o que acaba prejudicando a manutenção e escalabilidade

Link para documentação: [Angular HttpInterceptor](https://angular.io/api/common/http/HttpInterceptor)

## Configuração Inicial Mínima (Requisitos)
- NodeJS versão LTS v14.17.6 (LTS recomendada / mínima compatível v10.13)
- Angular CLI (versão atual: 12) `npm i -g @angular/cli`


## Como rodar o projeto localmente

- Clonar o projeto: `git clone https://github.com/rocketseat-experts-club/angular-interceptors-2021-09-17`
- Dentro da pasta do projeto, instalar as dependências: `npm install`
- Rodar a api: `npm run api` - Acesse em: [http://localhost:3000](http://localhost:3000)
- Em um novo terminal, rodar o app: `npm run start` - Acesse em: [http://localhost:4200](http://localhost:4200)


## Bibliotecas (libs) utilizadas

### Angular material (UI)

Para agilizar e focarmos na implementação das funcionalidades principais, já vamos iniciar a aula utilizando uma estrutura inicial de componentes importados do Angular Material (button, card, dialog, icon, input, list, toolbar e progress spinner) o projeto com algum conteúdo inicial (páginas, componentes, serviços)

Link para documentação: [Angular Material Components](https://material.angular.io/components)

### Json Server Auth

Uma forma bem simples de simular uma api com endpoints para recursos e suas operações básicas (CRUD - Create, Read, Update and Delete), e também para simular endpoints de autenticação e tornar recursos privados.

`POST /register` | `POST /login`

`GET /books` | `GET /books/:id` | `POST /books` | `PUT /books/:id` | `DELETE /books/:id`

Link para documentação: [Json Server Auth](https://www.npmjs.com/package/json-server-auth)

## Casos de Uso

- [ ] Header Manipulation
- [ ] Loader
- [ ] Alert (Error Handler)

## Links Adicionais

- Angular Reactive Forms: [Link](https://angular.io/guide/reactive-forms)
- RxJS Operators (tap, delay, catchError, finalize): [Link](https://rxjs.dev/api/operators)

## Expert Creator

| [<img src="https://avatars.githubusercontent.com/u/35535982?v=4" width="75px;"/>](https://github.com/rpaivabr) |
| :-: |
|[Rafael Paiva](https://github.com/rpaivabr)|