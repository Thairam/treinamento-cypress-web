import LoginPage from '../pages/LoginPage'

Given(/^que acesso a página de Login$/, () => {
  LoginPage.acessarPaginaDeLogin()
})

When(/^informo credenciais inválidas$/, (datatable) => {
  datatable.hashes().forEach(element => {
    LoginPage.loginComCredenciaisInvalidas(element.Username, element.Password)
  })
})