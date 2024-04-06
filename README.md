# Angular v16 Employee CRUD Project

Este é um projeto Angular v16 para um CRUD (Create, Read, Update, Delete) de funcionários. O projeto utiliza o JSON Server como banco de dados para simular operações de backend.
## Pré-requisitos

Antes de começar, verifique se você atende aos seguintes requisitos:

- Node.js e npm instalados na sua máquina.
- Angular CLI instalado globalmente. Caso não tenha, você pode instalá-lo utilizando o seguinte comando:

```bash
npm install -g @angular/cli
```

## Instalação

Para instalar as dependências do projeto, siga estas etapas:

1. Clone este repositório:

```bash
git clone https://github.com/dvktr/AngularCrud.git
```

2. Acesse o diretório do projeto:

```bash
cd AngularCrud
```

3. Instale as dependências:

```bash
npm install
```

## Executando o Projeto

Para executar o projeto, siga estas etapas:

1. Inicie o servidor JSON Server:

```bash
json-server --watch db.json
```

Isso iniciará o servidor JSON na porta padrão (3000) e usará o arquivo `db.json` como banco de dados.

2. Inicie o servidor de desenvolvimento do Angular:

```bash
ng serve
```

O aplicativo estará disponível em `http://localhost:4200/`.

## Utilização

O aplicativo permite executar as seguintes operações CRUD em funcionários:

- **Create:** Adicione novos funcionários fornecendo os detalhes necessários.
- **Read:** Visualize todos os funcionários cadastrados.
- **Update:** Atualize os detalhes de um funcionário existente.
- **Delete:** Remova um funcionário da lista.

## Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para obter mais informações.

## Contato

Se você tiver dúvidas sobre o projeto, sinta-se à vontade para entrar em contato através do email [victormendes04012004@gmail.com](victormendes04012004@gmail.com). 

Você também pode encontrar mais projetos em [meu GitHub](https://github.com/dvktr).

DJANGO_SECRET_KEY=a6w0f)*^*exjnb_^o&heu3bx=f(mcd1%mpcvbac-1j&+0)za2l
DATABASE_NAME=alon_test
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432

GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET=''

NO_EXP_TEST_TOKEN=''
RSA_PRIVATE_KEY=''

EMAIL_HOST=''
EMAIL_PORT=
EMAIL_HOST_USER=''
EMAIL_HOST_PASSWORD=''

SERVER_REDIRECT='http://127.0.0.1'
SERVER_REDIRECT_PORT='8000'

SERVER_PORT='8000'

SSH_PRIV_KEY=
SSH_PUB_KEY=

WKHTMLTOPDF_PATH=
