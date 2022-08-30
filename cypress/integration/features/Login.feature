#language: pt

@Login
Funcionalidade: Login
  Como um usuário
  Eu quero acessar a página de Login
  Para eu poder me autenticar e acessar o site

Cenario: Login com credenciais válidas

  O usuário deve conseguir acessar a sua conta com credenciais válidas

  Dado que acesso a página de Login
  Quando informo credenciais válidas
  Entao devo ser direcionado para a página de produtos

Cenario: Login com credenciais inválidas

  O usuário deve receber mensagem de erro ao tentar logar com credenciais inválidas

  Dado que acesso a página de Login
  Quando informo credenciais inválidas
    | Username | Password  |
    | username | wrongpass |
  Entao devo visualizar a mensagem "Username and password do not match any user in this service"