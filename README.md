### Nome do Aplicativo
## **KitchenetApp**

### Integrantes do grupo

Nome: Enzo Motta RM: 555372
Nome: Eduardo da Silva RM: 554804
Nome: Estevam Melo RM: 555124
Nome: Guilherme Ulacco RM: 558418
Nome: Matheus Hostim RM: 556517

### Descrição do Problema
O KitchenetApp foi desenvolvido com o objetivo de reduzir o tempo de espera dos clientes em filas para realizar pedidos. Em muitos estabelecimentos, principalmente em horários de pico, as filas podem se tornar longas, causando demora no atendimento e insatisfação dos clientes.

O aplicativo busca facilitar esse processo permitindo que os pedidos sejam organizados digitalmente, tornando o fluxo de atendimento mais rápido e eficiente.

### Operação da FIAP Escolhida
A operação escolhida foi **KitchenNet**.

Essa operação foi escolhida pois possui grande fluxo de alunos em filas, no que acarreta no atraso para as aulas. O KitchenetApp pode ajudar a reduzir essas filas, agilizando o processo de pedidos e melhorando a experiência dos usuários.

### Funcionalidades Implementadas

O aplicativo foi desenvolvido utilizando **React Native com Expo Router**, permitindo navegação entre telas e uma interface simples para o usuário.

As funcionalidades implementadas no aplicativo são:

#### Tela de Login (index.js)

- Campos para **Usuário** e **Senha**
- **Botão de acesso** que direciona o usuário para a tela de fila de espera

---

#### Fila de Espera (Fila.js)

Tela responsável por simular a organização da fila de pedidos dos clientes.

Funcionalidades da tela:

- Exibição de um **código de pedido**
- **Botão para gerar um novo código de pedido**
- **Botão para acessar o cardápio**
- Estrutura de **fila virtual de pedidos** (simulação)

---

#### Cardápio (Cardapio.js)

Tela que apresenta os itens disponíveis no refeitório.

Funcionalidades da tela:

- Exibição do **nome das comidas**
- Exibição do **preço dos produtos**
- **Botão para voltar para a fila de espera**

### Objetivo do Projeto

O objetivo principal do KitchenetApp é **diminuir as filas de clientes em ambientes de alimentação**, permitindo uma organização digital dos pedidos e tornando o processo de atendimento mais rápido e eficiente.

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** 
- **Expo CLI**

### Passo a Passo

1. **Clonar o repositório**

```bash
git clone https://github.com/SEU-USUARIO/KitchenetApp.git
```

2. **Entrar na pasta do projeto**

```bash
cd KitchenetApp
```

3. **Instalar as dependências**

```bash
npm install
```

4. **Iniciar o projeto**

```bash
npx expo start
```

5. **Executar o aplicativo**

Após iniciar o projeto, abrirá o **Expo Developer Tools** no navegador.

**No emulador:**
- Pressione **a** para abrir no Android Emulator
- Pressione **w** para abrir no navegador
