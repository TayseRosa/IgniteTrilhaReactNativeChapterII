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
  - [Persistindo dados com AsyncStorage](#persistindo-dados-com-asyncstorage)
  - [Remover a coleção de objetos do Async Storage](#remover-a-coleção-de-objetos-do-async-storage)
  - [Hook useFocusEffect](#hook-usefocuseffect)
  - [Possibilidades para resolver quando os dados do async storage ainda não foram carregados, no momento que a interface for ser exibida:](#possibilidades-para-resolver-quando-os-dados-do-async-storage-ainda-não-foram-carregados-no-momento-que-a-interface-for-ser-exibida)
    - [Possibilidade de resolução nº1:](#possibilidade-de-resolução-nº1)
    - [Possibilidade de resolução nº2:](#possibilidade-de-resolução-nº2)
  - [Utilizando gráfico na aplicação](#utilizando-gráfico-na-aplicação)
  - [Trabalhando com datas - Lib date-fns](#trabalhando-com-datas---lib-date-fns)
  - [Aplicando loading](#aplicando-loading)
  - [Lib react-native-svg-transformer](#lib-react-native-svg-transformer)
    - [Tipando a importação do svg](#tipando-a-importação-do-svg)
  - [Context](#context)
  - [Autenticação com Google](#autenticação-com-google)
    - [Configurando o OAuth](#configurando-o-oauth)
    - [Configurando credenciais](#configurando-credenciais)
  - [Quando usar try catch](#quando-usar-try-catch)
  - [Tratando dados sensíveis](#tratando-dados-sensíveis)
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

## Persistindo dados com AsyncStorage
```js
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Register(){
  const dataKey = '@gofinance:transactions';//Criando a chave única para ser usada no Async Storage

      //Dados que serão persistidos no dispositivo
      const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    //É sempre importante usar o try catch para o AsyncStorage, para evitar de "crachar" a aplicação
    try{
      const dataKey = '@gofinance:transactions';
      await AsyncStorage.setItem(dataKey,JSON.stringify(data));//Salvando os dados no Async Storage

    //Caso dê erro...
    } catch(error){
      console.log(error);
      Alert.alert('Não foi possivel salvar');
    }
}
``` 

## Remover a coleção de objetos do Async Storage
- [x] *Obs.: Rodar o código abaixo apenas 1 vez para limpar..

```js
  useEffect(() => {
    async function removeAll(){
      await AsyncStorage.removeItem(dataKey);// dataKey = Chave do async storage
    }

    removeAll();
  }, []);
```

## Hook useFocusEffect
- [x] useFocusEffect = serve para que não haja "renders" desnecessariamente, memorizando esta função.
- [x] Foi usado neste caso para a seguinte situação: Quando fazer um novo cadastro, ao clicar no botão, voltar para a tela principal (Listagem) e já apareça os cartões cadastrados;

Exemplo:
```js
import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

useFocusEffect(useCallback(()=>{
    loadTransactions();
  },[]));
```

## Possibilidades para resolver quando os dados do async storage ainda não foram carregados, no momento que a interface for ser exibida:

  ### Possibilidade de resolução nº1:
```js
  //Utilizar o "Optional Chaining" como no exemplo abaixo:
  amount={highlightData?.total?.amount} 

  //Código completo:
  <HighlightCard 
    type="total"
    title="Total" 
    amount={highlightData?.total?.amount} 
    lastTransaction="01 á 16 de Abril de 2021" 
    />
```
  ### Possibilidade de resolução nº2:
  Usar um loading, para que primeiro carregue os dados e depois a interface
 ```js
 //Usar um loading, por exemplo:
 import { ActivityIndicator } from 'react-native';
 .
 .
 .
 const [ isLoading, setIsLoading ] = useState(true);
 
 ...

 return (
    <Container>
      { isLoading ? 
          <ActivityIndicator size="large" color="red"  /> 
        : 
      <RestanteDoAppAqui.. />
      }
 )

 ```

 ## Utilizando gráfico na aplicação
- [x] Lib VictoryPie
```js
❯ yarn add victory-native
❯ yarn add react-native-svg //Vai precisar também, pois a lib utiliza SVG, isso é muito bom por questões de performance
```

```js
import { VictoryPie } from 'victory-native';

<VictoryPie 
  data={totalByCategories}
  colorScale={totalByCategories.map(category => category.color)}
  style={{
    labels: { 
      fontSize: RFValue(18),
      fontWeight: 'bold',
      fill: theme.colors.shape
    }
  }}
  labelRadius={100}
  x="percent"
  y="total"
/>
```

## Trabalhando com datas - Lib date-fns
- [x] - Instalando libs necessárias DateFNS
```js
yarn add date-fns
```

Mão no código...

```js
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale'; //Recurso do date-fns para traduzir os meses do ano


const [ selectedDate, setSelectedDate ] = useState(new Date());//Salva já pegando a data atual

...

//Usando o addMonths e o subMonths
function handleDateChange(action: 'next' | 'prev'){
if (action === 'next'){
  const newDate = addMonths(selectedDate, 1) //Pega a data selecionada, e ADICIONA + 1
  setSelected(newDate)
}else{
  const newDate = subMonths(selectedDate, 1) //Pega a data selecionada, e SUBTRAI - 1
  setSelected(newDate)
}
}

  //Aplicar a função acima, no botão correspondente:
  <MonthSelectButton onPress={() => handleChangeData('prev')}>
    <MonthSelectIcon name="chevron-left" />
  </MonthSelectButton>

  //Usando o format do Date-FNS - (Mês e ano traduzido)
  <Month>
    { format(selectedDate, 'MMMM, yyyy', { locale: ptBR }) }
  </Month>

```

## Aplicando loading
```js
  //Usar um loading, por exemplo:
import { ActivityIndicator } from 'react-native';
.
.
.
const [ isLoading, setIsLoading ] = useState(true);

...

return (
   <Container>
     { isLoading ? 
         <ActivityIndicator size="large" color="red"  /> 
       : 
     <RestanteDoAppAqui.. />
     }
)
```

## Lib react-native-svg-transformer
```js
❯ yarn add react-native-svg-transformer
```
Alteração no metro.config.js:
```js
// expo v40:
const { getDefaultConfig } = require("@expo/metro-config");

// expo v41: 
// remove the @ (see: https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
```
Fonte Github: https://github.com/kristerkari/react-native-svg-transformer

### Tipando a importação do svg 
Em src, criar a pasta @types > svg > index.d.ts com o seguinte código:
```js
  declare module "*.svg"{
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>/
  export default content;
}
```

## Context

Na pasta src, criar um arquivo AuthContext.tsx com o seguinte código inicial (bem simples):
```js
import { createContext } from "react";

export const AuthContext = createContext([]);
``` 
No App.tsx:
```js
//Importação do Context
import { AuthContext } from './src/AuthContext';

<AuthContext.Provider value={[]}>
  <RESTANTE DA APLICAÇÃO AQUI>
</AuthContext.Provider>
```
E, na tela que queira acessar o context, fazer o seguinte:
```js
import { useContext } from 'react';

//Contexto
import { AuthContext } from '../../AuthContext';

export function SignIn(){
  const data = useContext(AuthContext);
  console.log(data);//Vai mostrar no console um array vazio, para testar, basta alterar em App.tsx por exemplo: <AuthContext.Provider value={'Theo Leite'}>
}
```

## Autenticação com Google
  ### Configurando o OAuth
- [x] https://docs.expo.dev/guides/authentication/
- [x] Google 
- [x] Clicar em Create Google App
  - [x] Criar novo projeto
  - [x] Nome do projeto e clicar em CRIAR
  - [x] Tela de consentimento OAuth - Selecionar a opção Externo
  - [x] Preencher as informações do App (nome, email) Dados do contato do desenvolvedor.
  - [x] Adicionar escopo
    - [x] selecionar as 2 primeiras opções(email, profile)
    - [x] Deixar SEM usuario de teste
  ### Configurando credenciais
  - [x] Tela de concentimento OAuth
    - [x] Habilitar a opção "PUBLICAR APLICATIVO"
  - [X] Credenciais
    - [x] Clicar em Criar Credenciais > IS do cliente OAuth
      - [x] Tipo de aplicativo: Aplicativo da web
      - [x] Nome: goFinance
      - [x] Origem JavaScript autorizadas: (Adicionar URI)
        - [x]  https://auth.expo.io/@your-username/your-project-slug [Confira na documentação: https://docs.expo.dev/guides/authentication/#google]
        - [x] Expo.io > Área de membros (account owner)
        - [x] your-project-slug - Lá em app.json acrescentar:
          ```js
            "schema":"gofinances",
          ```
        - [x] Clicar em CRIAR e vai aparecer o ID e a Chave Secreta (pode fechar esta tela, pois pode pegar ela futuramente)
        

## Quando usar try catch
Quando estamos lidando com autenticação (ou com qualquer contexto externo à aplicação), tratar com try catch para não "crachar a aplicação"
```js
  try{
    
  }catch(error){

  }
```

## Tratando dados sensíveis
-[x] Instalar a lib babel-plugin-inline-dotenv
```js
❯ yarn add babel-plugin-inline-dotenv
```
-[x] no arquivo babel.config.js adicionar a linha abaixo:
```js
  plugins: ["inline-dotenv"]
```
-[x] na raiz do projeto, criar um arquivo .env, que vai ser onde vão ficar os dados sensíveis
Exemplo:
```js
CLIENT_ID=9131923ukjnfkdjsn19827319287
REDIRECT_URI=https://linkdeteste.com
```
Chamar as constantes da seguinte forma:
```js
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
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