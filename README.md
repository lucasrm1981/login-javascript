# Sistema de Login Simples

Este é um sistema de login básico criado com HTML, CSS e JavaScript puro.

## Como executar

1. Navegue até a pasta do projeto (`c:\Users\lucasrm\Documents\code`).
2. Abra o arquivo `index.html` em um navegador web (como Chrome, Firefox ou Edge).
3. Siga as instruções de uso abaixo.

## Como usar

1. Abra o arquivo `index.html` em um navegador web.
2. Digite o usuário: `admin`
3. Digite a senha: `password`
4. Clique em "Entrar".

Após o login bem-sucedido, você será redirecionado para a página de perfil (`profile.html`).

Na página de perfil, você pode visualizar informações básicas e clicar em "Sair" para fazer logout.

Se tentar acessar `profile.html` diretamente sem estar logado, será redirecionado de volta para o login.

## Arquivos

- `index.html`: Estrutura da página de login.
- `profile.html`: Página de perfil acessível apenas para usuários logados.
- `style.css`: Estilos para a interface.
- `script.js`: Lógica de validação do login.
- `profile.js`: Lógica para verificar login e logout na página de perfil.

## Observações

Este é um exemplo simples para fins educacionais. Em um sistema real, use autenticação segura, como hashing de senhas e verificação no servidor. O estado de login é armazenado no localStorage do navegador, que não é seguro para produção.
