import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo, 
  User,
  UserGreeting, 
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton
}from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard(){
  const data: DataListProps[] = [
    {
      id:'1',
      type: 'positive',
      title:"Desenvolvimento de site",
      amount:"R$12.000,00",
        category:{
          name: 'Vendas', icon: 'dollar-sign'
        },
          date:"13/04/2021"
    },
    {
      id:'2',
      type: 'negative',
      title:"Hamburguer Pizzy",
      amount:"R$59,00",
        category:{
          name: 'Alimentação', icon: 'coffee'
        },
          date:"13/04/2021"
    },
    {
      id:'3',
      type: 'negative',
      title:"Aluguel do apto",
      amount:"R$1.200,00",
        category:{
          name: 'Casa', icon: 'shopping-bag'
        },
          date:"10/04/2021"
    }
  ];

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

        <LogoutButton onPress={()=>{}}>
          <Icon name="power" />
        </LogoutButton>
        
        </UserWrapper>

      </Header>

      <HighlightCards >
        <HighlightCard 
          type="up"
          title="Entradas" 
          amount="R$17.400,00" 
          lastTransaction="Última entrada dia 13 de Abril de 2021" 
        />

        <HighlightCard 
          type="down"
          title="Saídas" 
          amount="R$1.259 ,00" 
          lastTransaction="Última entrada dia 03 de Abril de 2021" 
        />

        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$16.141,00" 
          lastTransaction="01 á 16 de Abril de 2021" 
        />
      </HighlightCards>

      <Transactions>
        <Title>  Listagem </Title>

        <TransactionList 
          data={data}
          keyExtractor={ item => item.id }
          renderItem={({ item })=> <TransactionCard data={item}/>}
        /> 
        
      </Transactions>
    </Container>
  )
} 