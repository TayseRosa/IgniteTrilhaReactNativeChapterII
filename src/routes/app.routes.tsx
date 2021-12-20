import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();
//Telas
import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import { Resume } from "../screens/Resume";


export function AppRoutes(){
  const theme = useTheme();

  return(
    <Navigator
      screenOptions={{
        headerShown: false,//cabeçalho 

        tabBarActiveTintColor:theme.colors.secondary, //Definir uma cor para quando o menu estiver ATIVO

        tabBarInactiveTintColor:theme.colors.text,//Definir uma cor para quando o menu estiver INATIVO

        tabBarLabelPosition: 'beside-icon',//Faz com que o icone fique ao lado, e não em cima.

        tabBarStyle: {
          height: 88,//Altura do bottomTab
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        }
      }}
    >
      <Screen 
        name="Listagem"
        component={Dashboard}
        options={{ 
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          )
         }}
      />      

      <Screen 
        name="Cadastrar"
        component={Register}
        options={{ 
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons 
              name="attach-money"
              size={size}
              color={color}
            />
          )
         }}
      />      

      <Screen 
        name="Resumo"
        component={Resume}
        options={{ 
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons 
              name="pie-chart"
              size={size}
              color={color}
            />
          )
         }}
      />      
    </Navigator>
  );
}