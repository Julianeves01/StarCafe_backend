# ☕ StarCafé API

## 📋 Introdução
A **StarCafé API** é uma API RESTful desenvolvida para facilitar o gerenciamento de pedidos e controle de estoque da cafeteria StarCafé. Com esta API, os clientes podem visualizar o menu, fazer pedidos, acompanhar o status e cancelá-los quando necessário.

## 🚀 Tecnologias Utilizadas
- **Linguagem:** [Node.js]
- **Framework:** [Express]
- **Banco de Dados:** [PostgreSQL]
- **Documentação:** README.md
  
### 👩🏻‍💻 Testando o Servidor 

Antes de testar as requisições, verifique se o seu servidor está funcionando de maneira correta. 

Digite a seguinte rota e clique em enviar requisição:

    localhost:4000
    
Ao inicializar o servidor, ele retornará a seguinte mensagem:

    "Bem vindo a cafeteria StarCafe! ❤️"
    
Caso contrário, exibirá uma mensagem de erro. 

## 📂 Endpoints

### 📝 Menu
#### 🔹 Listar itens do menu
```http
GET /menu
```
**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Café Espresso",
    "preco": 5.00
  },
  {
    "id": 2,
    "nome": "Cappuccino",
    "preco": 7.50
  }
]
```

### ☕ Tipos de Café
#### 🔹 Café Espresso  
Um café forte e encorpado, preparado sob alta pressão com moagem fina.  

#### 🔹 Café Americano  
Espresso diluído com água quente para um sabor mais suave.  

#### 🔹 Cappuccino  
Feito com espresso, leite vaporizado e espuma de leite, proporcionando um equilíbrio perfeito entre cremosidade e intensidade.  

#### 🔹 Latte  
Similar ao cappuccino, mas com mais leite vaporizado e menos espuma.  

#### 🔹 Macchiato  
Espresso com uma pequena quantidade de espuma de leite por cima.  

#### 🔹 Mocha  
Uma combinação de espresso, leite vaporizado e calda de chocolate, finalizado com chantilly.  

#### 🔹 Café Gelado  
Espresso resfriado servido com gelo e, opcionalmente, leite ou xaropes aromatizados.  

### 🛒 Pedidos
#### 🔹 Criar um novo pedido
```http
POST /pedidos
```
**Body:**
```json
{
  "itens": [
    { "id": 1, "quantidade": 2 },
    { "id": 2, "quantidade": 1 }
  ]
}
```
**Resposta:**
```json
{
  "id": 101,
  "status": "recebido"
}
```

#### 🔹 Consultar status do pedido
```http
GET /pedidos/{id}
```
**Resposta:**
```json
{
  "id": 101,
  "status": "preparando"
}
```

#### 🔹 Cancelar pedido
```http
DELETE /pedidos/{id}
```
**Resposta:**
```json
{
  "mensagem": "Pedido cancelado com sucesso."
}
```

### 📦 Estoque
#### 🔹 Atualizar estoque
```http
PUT /estoque/{id}
```
**Body:**
```json
{
  "quantidade": 50
}
```
**Resposta:**
```json
{
  "id": 1,
  "quantidade": 50
}
```

## 🔒 Autenticação
A API utiliza **JWT** para autenticação de usuários. Para acessar os endpoints protegidos, é necessário incluir um token JWT no header:
```http
Authorization: Bearer {seu_token_aqui}
```

## 🛠️ Configuração e Execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/starcafe-api.git
   ```
2. Instale as dependências:
   ```sh
   npm install  # ou pip install -r requirements.txt
   ```
3. Configure as variáveis de ambiente:
   ```env
   DATABASE_URL= "sua_conexao_banco"
   JWT_SECRET= "sua_chave_secreta"
   ```
4. Inicie o servidor:
   ```sh
   npm start  # ou python main.py
   ```

## 📜 Licença
Este projeto está licenciado sob a **MIT License**.

## 📞 Contato
Dúvidas ou sugestões? Entre em contato pelo e-mail: `julia.s.neves6@aluno.senai.br`
