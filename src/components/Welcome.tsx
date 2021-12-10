import React from 'react';
import {View, Text} from 'react-native';

interface Props{
  title: string;
}

export function Welcome({ title }: Props){
  return(
    <View>
      <Text> {title} </Text>
      <Text>App configurado!</Text>
      <Text>Hello World</Text>
    </View>
  );
}