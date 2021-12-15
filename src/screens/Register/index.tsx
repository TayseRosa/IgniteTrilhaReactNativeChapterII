import React, { useState } from 'react';
import { 
  Modal, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert
} from 'react-native';

//Libs
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

//Hooks
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

//components
import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';

//Styles
import {
  Container,
  Header,
  Title,
  Form, 
  Fields,
  TransactionsTypes,
}from '../styles';

interface FormData {
  name: string;
  amount: string;
}

interface NavigationProps {
  navigate: (screen: string) => void;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
});

export function Register(){
  const [ transactionType, setTransactionType ] = useState('');
  const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);

  const dataKey = '@gofinance:transactions';

  const [ category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const navigation = useNavigation<NavigationProps>();

  const { 
    control,
    handleSubmit,
    reset,
    formState: { errors }
   } = useForm({
     resolver: yupResolver(schema)
   });

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false);
  }

  async function handleRegister(form: FormData){
    if(!transactionType)
      return Alert.alert('Selecione o tipo de transação') ;

    if(category.key === 'category')
      return Alert.alert('Selecione a categoria');

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date()
    }

    try{
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newTransaction
      ]

      await AsyncStorage.setItem(dataKey,JSON.stringify(dataFormatted));

      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'Categoria',
      });

      navigation.navigate('Listagem');

    } catch(error){
      console.log(error);
      Alert.alert('Não foi possivel salvar');
    }
  }


  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title> Cadastro </Title>
        </Header>

        <Form>
          <Fields>
            <InputForm 
              name="name"
              control={control}
              placeholder="Nome"
              //Validação de formulario
              autoCapitalize='sentences'//1º letra MAIUSCULA
              autoCorrect={false}//tenta corrigir a palavra - neste caso FALSE
              error={errors.name && errors.name.message}
            />

            <InputForm 
              name="amount"
              control={control}
              placeholder="Preço"
              //Validação do formulario
              keyboardType="numeric"  
              error={errors.amount && errors.amount.message}
              />

            <TransactionsTypes>
              <TransactionTypeButton 
                type="up"
                title="Income"
                onPress={()=>handleTransactionTypeSelect('up')}
                isActive={transactionType === 'up'}
              />

              <TransactionTypeButton 
                type="down"
                title="Outcome"
                onPress={()=>handleTransactionTypeSelect('down')}
                isActive={transactionType === 'down'}
              />
            </TransactionsTypes>

            <CategorySelectButton 
              title={category.name}
              onPress={ handleOpenSelectCategoryModal }
            />

          </Fields>

          <Button 
            title="Enviar" 
            onPress={handleSubmit(handleRegister)}
          />

        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect 
            category={category}
            setCategory={setCategory}
            closeSelectCategory={ handleCloseSelectCategoryModal }
          />

        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}