<h1 align="center">Ignite - Trilha ReactNative - Chapter II </h1>

# Índice
- [Índice](#índice)
- [🛠 Projeto Rocketseat Ignite - Trilha React Native - goFinance](#-projeto-rocketseat-ignite---trilha-react-native---gofinance)
  - [Iniciando o projeto](#iniciando-o-projeto)
  - [Passando o projeto .js para typescript (.tsx e .ts)](#passando-o-projeto-js-para-typescript-tsx-e-ts)
  - [Instalação do styled-components e suas tipagens](#instalação-do-styled-components-e-suas-tipagens)
  - [Criando estilos Globais - Temas](#criando-estilos-globais---temas)
  - [Utilizando fontes personalizadas](#utilizando-fontes-personalizadas)
  - [Utilizando proporções de medida com RFPercentage e RFValue](#utilizando-proporções-de-medida-com-rfpercentage-e-rfvalue)
  - [Usando ícones](#usando-ícones)
  - [Acessando propriedades da ScrollView(por exemplo) no Styled Components](#acessando-propriedades-da-scrollviewpor-exemplo-no-styled-components)
  - [Tipando componente de botão - (TouchableOpacity)](#tipando-componente-de-botão---touchableopacity)
  - [Resolvendo problemas de Button dentro da modal (Android) que não tem o mesmo comportamento (ios):](#resolvendo-problemas-de-button-dentro-da-modal-android-que-não-tem-o-mesmo-comportamento-ios)
  - [Validação de formulário no React Native](#validação-de-formulário-no-react-native)
    - [Deixar a 1º letra da palavra digitada MAIUSCULA](#deixar-a-1º-letra-da-palavra-digitada-maiuscula)
    - [Teclado numperico (Android e IOS)](#teclado-numperico-android-e-ios)
    - [Fechar o teclado ao clicar em qualquer parte da tela:](#fechar-o-teclado-ao-clicar-em-qualquer-parte-da-tela)
  - [Configurando o React Navigation (Versão 6.x)](#configurando-o-react-navigation-versão-6x)
    - [Instalando libs](#instalando-libs)
    - [Criando diretorios](#criando-diretorios)
      - [Criando o app.routes.tsx](#criando-o-approutestsx)
      - [Ajustes no arquivo App.tsx:](#ajustes-no-arquivo-apptsx)
  - [Usar o theme do styled components no arquivo app.routes.tsx:](#usar-o-theme-do-styled-components-no-arquivo-approutestsx)
  - [Propriedades do Navigator screenOptions:](#propriedades-do-navigator-screenoptions)
    - [Descobrir em qual plataforma o App está rodando (Android ou IOS):](#descobrir-em-qual-plataforma-o-app-está-rodando-android-ou-ios)
    - [Icons no Bottom Tab Navigator](#icons-no-bottom-tab-navigator)
- [🚀 Tecnologias utilizadas neste projeto](#-tecnologias-utilizadas-neste-projeto)
- [📥 Como usar](#-como-usar)
- [🚀 Developer](#-developer)
- [📞 Contate a Dev](#-contate-a-dev)
  
---
# 🛠 Projeto Rocketseat Ignite - Trilha React Native - goFinance

<img src="https://github.com/TayseRosa/IgniteTrilhaReactNativeChapterII/blob/main/src/assets/goFinances.png" width="100%" height="auto" />

## Iniciando o projeto

- [x] Iniciando projeto com Expo - expo init [nomeDoProjeto]

## Passando o projeto .js para typescript (.tsx e .ts)

- [x] Passando projeto para TypeScript:
  - [x] Criar um arquivo tsconfig.json na raiz do projeto (touch tsconfig.json)
  - [x] no terminal: 
  ```js
  expo start 
  > Aceitar a instalação com (Y)
  ```
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
## Instalação do styled-components e suas tipagens
- [x] Instalação do styled-components e suas tipagens: 
```js
yarn add styled-components
yarn add @types/styled-components-react-native -D
```

## Criando estilos Globais - Temas

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

## Utilizando fontes personalizadas 

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
## Utilizando proporções de medida com RFPercentage e RFValue

- [x]Utilizando proporções de medidas:
  - No terminal:
  ```js
  yarn add react-native-responsive-fontsize
  ```
  - No arquivo styles.ts
  ```js
    import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
  ```
    antes: height: 278px;

    agora: height: ${RFPercentage(42)}px;

## Usando ícones
Usando a lib vector-icons, direto no arquivo style.ts:
```js
//vector-icons - essa lib já vem instalada junto com Expo
import { Feather } from '@expo/vector-icons';

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;
```

## Acessando propriedades da ScrollView(por exemplo) no Styled Components
Ao invés de inserir todas as propriedades do componente ScrollView como no exemplo abaixo:
```js
  <HighlightCards 
        horizontal
        showsHorizontalScrollIndicator={false}//esconde barra de rolagem
        contentContainerStyle={{ paddingHorizontal:24 }}//Adiciona estilização dentro da listagem
      >
```
Você pode deixar o seu código mais enxuto dessa maneira:
```js
  <HighlightCards >
    ...
    ...
    ...
  </HighlightCards>
```
e passar todas as propriedades para o arquivo de estilos com styled-components, assim:
```js
  export const HighlightCards = styled.ScrollView.attrs({
    //Acessando as propriedades do ScrollView por dentro do styled-components
    horizontal: true,
    showsHorizontalScrollIndicator: false,//esconde barra de rolagem
    contentContainerStyle:{ paddingHorizontal:24 }//Adiciona estilização dentro da listagem
  })``;
```

## Tipando componente de botão - (TouchableOpacity)
```js
//importar a lib do react native
import { TouchableOpacityProps } from 'react-native';

//Criar a interface extendendo a lib importada acima
interface Props extends TouchableOpacityProps{
  title: string;
}

//Usar a interface na chamada da função
export function Button({ title, ...rest }: Props){
  return(
    <Container {...rest}>
      <Title>
        { title }
      </Title>
    </Container>
  )
}

//Enquanto isso no styled-components...
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)``;
```

## Resolvendo problemas de Button dentro da modal (Android) que não tem o mesmo comportamento (ios):

No arquivo styles criado com styled-components, importar a lib:
```js
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//onde fica o container do button, fazer a seguinte alteração:
//Onde era uma View (neste exemplo), foi adicionado o (GestureHandlerRootView)
export const Container = styled.View``;
export const Container = styled(GestureHandlerRootView)``;
```

## Validação de formulário no React Native

### Deixar a 1º letra da palavra digitada MAIUSCULA
```js
  <InputForm 
    name="name"
    placeholder="Nome"
    //VALIDAÇÃO DO FORMULARIO
    autoCapitalize='sentences'//1º letra MAIUSCULA
    autoCorrect={false}//tenta corrigir a palavra - neste caso FALSE
  />
```

### Teclado numperico (Android e IOS)
```js
  <InputForm 
    name="amount"
    control={control}
    placeholder="Preço"
    //Validação do formulario
    keyboardType="numeric"  
  />
```

### Fechar o teclado ao clicar em qualquer parte da tela:
```js
  import { TouchableWithoutFeedback, Keyboard } from 'react-native';

  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      ......[todo o restante do código aqui...]
    </Container>
  </TouchableWithoutFeedback>
```

## Configurando o React Navigation (Versão 6.x)
  ### Instalando libs
```js
  yarn add @react-navigation/native
  expo install react-native-screens react-native-safe-area-context

  //Bottom-tabs
  yarn add @react-navigation/bottom-tabs 
```
Fonte: https://reactnavigation.org/docs/hello-react-navigation


  ### Criando diretorios
  criar a pasta
  src > routes > app.routes.tsx

  #### Criando o app.routes.tsx
```js
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();
//Telas
import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";


export function AppRoutes(){
  return(
    <Navigator>
      <Screen 
        name="Listagem"
        component={Dashboard}
      />      

      <Screen 
        name="Cadastrar"
        component={Register}
      />      

      <Screen 
        name="Resumo"
        component={Register}
      />      
    </Navigator>
  );
}
``` 
#### Ajustes no arquivo App.tsx:
```js
  import { NavigationContainer } from '@react-navigation/native'
  import { AppRoutes } from './src/routes/app.routes';

  ...

  // ... e o return ficou assim:
  return(
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
```

## Usar o theme do styled components no arquivo app.routes.tsx:
```js
  import { useTheme } from 'styled-components';
  ...
  export function AppRoutes(){
  const theme = useTheme();

  return(
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.secondary,

        tabBarInactiveTintColor: theme.colors.text
      }}
    >
  )
```

## Propriedades do Navigator screenOptions:
```js
  <Navigator
      screenOptions={{
        headerShown: false,//cabeçalho 

        tabBarActiveTintColor:'red', //Definir uma cor para quando o menu estiver ATIVO

        tabBarInactiveTintColor:'blue',//Definir uma cor para quando o menu estiver INATIVO

        tabBarLabelPosition: 'beside-icon',//Faz com que o icone fique ao lado, e não em cima.

        tabBarStyle: {
          height: 88,//Altura do bottomTab
          paddingVertical: Platform.OS === 'ios' ? 20 : 0, //Condicional dependendo da plataforma
        }
      }}
    >
```

### Descobrir em qual plataforma o App está rodando (Android ou IOS):
```js
import { Platform } from "react-native";

...

<Navigator
      screenOptions={{
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0, //Condicional dependendo da plataforma
        }
      }}
    >
```

### Icons no Bottom Tab Navigator
```js
import { MaterialIcons } from '@expo/vector-icons';//Importar a lib MaterialIcons

...


//Dentro do Screen:
    <Screen 
        name="Listagem"
        component={Dashboard}
        options={{ 
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons 
              name="format-list-bulleted"
              size={24}
              color="red"
            />
          )
         }}
      />  

```


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

# 🚀 Developer

<a href="https://www.tayserosa.dev">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/31596454?v=4" width="100px;" alt="Tayse Rosa" style="border-radius:50%"/>
 <br />
 <sub><b>Tayse Rosa</b></sub></a> <a href="https://www.tayserosa.dev" title="Tayse Rosa">🚀</a>


Feito com ❤️ por Tayse Rosa 🚀

<hr />

# 📞 Contate a Dev

👋🏽 Entre em contato!


<a href="https://www.linkedin.com/in/tayse-rosa-3b683151/" target="_blank">
<img src="https://img.shields.io/static/v1?label=LinkedIn&message=Tayse Rosa&color=blue&style=for-the-badge&logo=linkedin"/>
</a>
<br/>
<br/>

<a href="https://github.com/TayseRosa/" target="_blank">
<img src="https://img.shields.io/static/v1?label=GitHub&message=Tayse Rosa&color=black&style=for-the-badge&logo=github"/>
</a>
<br/>
<br/>

<a href="https://api.whatsapp.com/send?phone=5551982368077" target="_blank">
<img src="https://img.shields.io/static/v1?label=whatsapp&message=Tayse Rosa&color=green&style=for-the-badge&logo=whatsapp"/>
</a>
<br/>
<br/>


<a href="https://www.tayserosa.dev" target="_blank">
<img src="https://img.shields.io/static/v1?label=Portfólio&message=Tayse Rosa&color=pink&style=for-the-badge&logo=portfolio"/>
</a>
<br/>
<br/>

<h5> Créditos: Rocketseat - Ignite - Trilha React JS </h5>