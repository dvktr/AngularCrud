# Angular v16 Employee CRUD Project

Este é um projeto Angular v16 para um CRUD (Create, Read, Update, Delete) de funcionários. O projeto utiliza o JSON Server como banco de dados para simular operações de backend.
//ghp_mQcucw8TOWTNLLvJWw1FIOYfAG2xu14OHxg/z
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
