import React from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './src/global/styles/theme';
import { CategorySelect } from './src/screens/CategorySelect';

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
      <CategorySelect />
    </ThemeProvider>
  )
}