![logo medicar](https://i.postimg.cc/DZNPJSxk/Logo.png "logo medicar")
# Desafio Medicar  [ Frontend ]
Descrição: Teste prático Intemed Frontend

Autor: Eymard Neto ( [linkedin](https://www.linkedin.com/in/eymard-neto-216254207) )

# Tecnologias

  - Angular 18.1.3
  - Angular Material 18.1.3
  - Sass

# Pré-requisitos para Setup

- Git
- Node 18+

## Setup Frontend
Esse guia irá te ajudar a executar a aplicação em ambiente de desenvolvimento

### 1. Clonar o repositório e atualizar arquivo de ambiente
Clone o repositório e navegue até a pasta `src`:

```bash
git clone <https://github.com/franciscoeymardneto/intmed-front.git>
cd src
```

Entre na pasta /environments e atualize o arquivo environment.ts conforme necessário:

```bash
cd /environments
```
Coloque a url da [API backend](https://github.com/franciscoeymardneto/intmed-back.git) do projeto medicar

### 2. Instalando dependencias
Volte para a raiz da pasta frontend e execute o comando para instalar as dependências do projeto:

```bash
cd ..
npm install
```

### 3. Execute a aplicação
Execute a aplicação para poder ter acesso ao sistema

```bash
npm start
```
### 4. Acessos

- Acesse a aplicação através do endereço: http://localhost:4200/

Agora basta só criar sua conta e testar a aplicação!!

OBS: Lembre de popular o banco através do menu Admin do Django para que o frontend tenha o que
consumir
