import React from 'react';
import Input from '../Input';
import Label from '../Label';
import RadioButton from '../RadioButton';
import { Container, RowContainer } from './styled-components';

const Receipt = () => {
  const options = [
    { id: 'USD', description: '1.158341' },
    { id: 'AUD', description: '1.557779' },
    { id: 'CAD', description: '1.438834' },
    { id: 'PLN', description: '4.605703' },
    { id: 'MXN', description: '24.072652' }
  ];

  return (
    <Container>
      <RowContainer>
        <Label description='Description' />
        <Input />
      </RowContainer>
      <RowContainer>
        <Label description='Amount' />
        <Input />
      </RowContainer>
      <RowContainer>
        <Label description='Currency' />
        <RadioButton options={options} />
      </RowContainer>
    </Container>
  );
};

export default Receipt;
