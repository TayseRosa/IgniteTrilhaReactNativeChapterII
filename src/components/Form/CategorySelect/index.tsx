import React from 'react';

import {
  Container,
  Category,
  Icon,
} from './styles';

interface Props{
  title: string;
}

//Estilização da interface para Selecionar Categoria

export function CategorySelect({title}:Props){
  return(
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  )
}