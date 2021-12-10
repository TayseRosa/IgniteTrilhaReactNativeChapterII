<h1 align="center">Ignite - Trilha ReactNative - Chapter II </h1>

#Índice
- [🛠 Sobre o projeto Rocketseat Ignite - Trilha React Native - goFinance](#-sobre-o-projeto-rocketseat-ignite---trilha-react-native---gofinance)
- [🚀 Tecnologias utilizadas neste projeto](#-tecnologias-utilizadas-neste-projeto)
- [📥 Como usar](#-como-usar)
- [🚀 Autor](#-autor)
  
---
# 🛠 Sobre o projeto Rocketseat Ignite - Trilha React Native - goFinance

<img src="https://github.com/TayseRosa/IgniteTrilhaReactNativeChapterII/blob/main/src/assets/goFinances.png" width="100%" height="auto" />


- [x] Iniciando projeto com Expo - expo init [nomeDoProjeto]
- [x] Passando projeto para TypeScript:
  - [x] Criar um arquivo tsconfig.json na raiz do projeto (touch tsconfig.json)
  - [x] no terminal: expo start > Aceitar a instalação com (Y)
  - [x] Após a instalação, o arquivo tsconfig.json deve ficar conforme o código abaixo:
  - [x] Mudar o app.js para app.tsx
```js
  {
  "compilerOptions": {
    "strict": true,
  },
  "extends": "expo/tsconfig.base"
  }
```

- [x] Instalação do styled-components e suas tipagens: 
```js
yarn add styled-components
yarn add @types/styled-components-react-native -D
```

- [x] Criando estilos Globais:
  - src > global > styles > theme.ts
  ```js
  export default {
  colors:{
    primary: '#5636d3',

    secondary: '#ff872c',
    secondary_light: 'rgba(255,135,44,0.3)',

    success: '#12a454',
    success_light: 'rgba(18,164,84,0.5)',

    attention: '#e83f5b',
    attention_light: 'rgba(232,63,91,0.5)',

    shape: '#ffffff',
    title:'#363f5f',
    text: '#969cb2',
    background: '#f0f2f5'
  }
  }
  ```



- [x] Em app.tsx: import { ThemeProvider } from 'styled-components'
- [x] Em app.tsx: import theme from './src/global/styles/theme';
  <ThemeProvider theme={theme}>
    <AppAqui />
  </ThemeProvider>
- [x] Para sobrescrever o theme e resolver o problema de sublinhado vermelho no colors: background-color: ${({ theme })=> theme.colors.primary}
    src > global > styles > styled.d.ts

  ```js
  import 'styled-components';

  import theme from './theme';

  declare module 'styled-components' {
    type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType{}
  }
  ``` 

- [x] Utilizando fontes personalizadas
  - [x] expo install expo-font @expo-google-fonts/[NomeDaFonte]
  - [x] Em app.tsx: 
  ```js
    import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
    }from '@expo-google-fonts/poppins';
    

    //Enquanto a font carrega, segura a tela de splash
    const [ fontsLoaded ] = useFonts({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_700Bold
    });


    No terminal: ❯ expo install expo-app-loading
  ```
  A tela do app.tsx deve ficar assim:
  ```js
  import React from 'react';
  import { ThemeProvider } from 'styled-components'

  import theme from './src/global/styles/theme';
  import { Dashboard } from './src/screens/Dashboard';

  import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  }from '@expo-google-fonts/poppins';
  import AppLoading from 'expo-app-loading';


  export default function App() {
    const [ fontsLoaded ] = useFonts({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_700Bold
    });

    if(!fontsLoaded) {
      //Tela de Splash (a tela que aparece enquanto o app é carregado)
      return <AppLoading />
    }

    return(
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    )
  }
  ```
- [x]Utilizando proporções de medidas:
  - No terminal:
  ```js
  yarn add react-native-responsive-fontsize
  ```
  - No arquivo styles.ts
    import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

    antes: height: 278px;
    agora: height: ${RFPercentage(42)}px;


# 🚀 Tecnologias utilizadas neste projeto
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [x] JAVASCRIPT
- [x] REACT NATIVE
- [x] TYPESCRIPT
- [x] STYLED COMPONENTS

# 📥 Como usar
```js

    //Clonar o repositório
    $ git clone https://github.com/TayseRosa/IgniteTrilhaReactJSChapterIIINextJS.git

    //Entrar no diretório
    $ cd IgniteTrilhaReactJSChapterIIINextJS

    //Instalar dependências
    $ yarn install 

    //Startar o projeto
    $yarn start
    

``` 

# 🚀 Autor

<a href="https://www.tayserosa.dev">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/31596454?v=4" width="100px;" alt="Tayse Rosa" style="border-radius:50%"/>
 <br />
 <sub><b>Tayse Rosa</b></sub></a> <a href="https://www.tayserosa.dev" title="Tayse Rosa">🚀</a>


Feito com ❤️ por Tayse Rosa 🚀

👋🏽 Entre em contato!

![Linkedin Badge](https://img.shields.io/badge/-TayseRosa-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tayse-rosa-3b683151/)[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TayseRosa/)

<h5> Créditos: Rocketseat - Ignite - Trilha React JS </h5>