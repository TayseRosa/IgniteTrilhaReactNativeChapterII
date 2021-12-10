import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo, 
  User,
  UserGreeting, 
  UserName
}from './styles';

export function Dashboard(){
  return (
    <Container>
      <Header>

        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/tayserosa.png' }} />
            <User>
              <UserGreeting> Olá,  </UserGreeting>
              <UserName> Tayse Rosa </UserName>
            </User>
          </UserInfo>
        </UserWrapper>

      </Header>
    </Container>
  )
}