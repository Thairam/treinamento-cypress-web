#language: pt

Funcionalidade: Login

  Cenario: Login com credenciais inválidas
    Dado que acesso a página de Login
    Quando informo credenciais inválidas
      | Username | Password  |
      | username | wrongpass |
    Entao devo visualizar a mensagem "Username and password do not match any user in this service"