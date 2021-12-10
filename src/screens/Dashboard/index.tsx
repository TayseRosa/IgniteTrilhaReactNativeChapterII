import React from 'react';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo, 
  User,
  UserGreeting, 
  UserName,
  Icon
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

        <Icon name="power" />

      </Header>
    </Container>
  )
}