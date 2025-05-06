# TRBL-food-delivery-app
Aplicativo de e-commerce com funcionalidade de carrinho de compras inspirado no iFood, desenvolvido com React Native e Expo. Implementa fluxo completo de navegação entre produtos, detalhes e carrinho. Projeto educacional focado em gerenciamento de estado, componentização e Core Components.

---

# Food Delivery App - E-commerce Mobile

![Licença](https://img.shields.io/badge/license-MIT-green)
![React Native](https://img.shields.io/badge/React%20Native-v0.71+-blue)
![Expo](https://img.shields.io/badge/Expo-v48+-blueviolet)

Um aplicativo de e-commerce para delivery de comida inspirado no iFood, desenvolvido com React Native e Expo. Este projeto implementa um fluxo completo de compras, desde a navegação pelos produtos até a finalização do pedido no carrinho.

## 📱 Inspiração e Demonstração

Este projeto foi inspirado na interface e experiência do usuário do aplicativo iFood, um dos principais aplicativos de delivery de comida no Brasil.

*Screenshots seriam inseridos aqui*

## ✨ Funcionalidades

- **Listagem de Produtos**: Exibição de produtos organizados por categorias
- **Busca**: Filtro de produtos por nome e categoria
- **Detalhes do Produto**: Visualização detalhada com descrições e seleção de quantidade
- **Carrinho de Compras**: Adição, remoção e atualização de itens
- **Cálculo de Totais**: Soma de valores, incluindo taxa de entrega

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento cross-platform
- **Expo** - Plataforma para simplificar o desenvolvimento React Native
- **React Navigation** - Navegação entre telas
- **Context API** - Gerenciamento de estado global
- **Async Storage** - Persistência local de dados (preparado para implementação)

## 📂 Estrutura do Projeto

```
food-delivery-app/
├── App.js                   # Ponto de entrada da aplicação
├── assets/                  # Recursos estáticos
├── components/              # Componentes reutilizáveis 
│   ├── ProductCard.js       # Card de produto na lista
│   ├── CartItem.js          # Item no carrinho
│   ├── QuantitySelector.js  # Seletor de quantidade
│   └── Header.js            # Cabeçalho da aplicação
├── screens/                 # Telas da aplicação
│   ├── ProductsScreen.js    # Tela de listagem de produtos
│   ├── ProductDetailScreen.js # Detalhes do produto
│   └── CartScreen.js        # Carrinho de compras
├── context/                 # Gerenciamento de estado
│   └── CartContext.js       # Contexto do carrinho
└── data/                    # Dados fictícios
    └── products.js          # Lista de produtos
```

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js (versão 22.x recomendada)
- npm ou yarn
- Expo CLI

### Instalação

1. Clone o repositório
   ```bash
   git clone[ https://github.com/Flimars/TRBL-food-delivery-app.git)
   cd food-delivery-app
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o projeto
   ```bash
   npx expo start
   ```

4. Teste no seu dispositivo
   - Escaneie o QR code com o aplicativo Expo Go (Android) ou câmera (iOS)
   - Ou execute em um emulador/simulador

## 📚 Conceitos Aplicados

Este projeto implementa diversos conceitos importantes de desenvolvimento React Native:

1. **Gerenciamento de Estado**: Utilização de Context API para estado global e useState para estados locais.

2. **Componentização**: Criação de componentes reutilizáveis para melhor organização do código.

3. **Core Components**: Uso eficiente dos componentes principais do React Native.

4. **Navegação**: Implementação de fluxo de navegação entre telas com React Navigation.

## 📋 Tarefas Futuras

- Implementação da persistência do carrinho usando AsyncStorage
- Autenticação de usuário
- Integração com um backend real
- Sistema de avaliações e comentários
- Localização para entrega

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido como projeto educacional para aprendizado de React Native e Expo.

