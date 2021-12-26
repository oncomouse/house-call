// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';
import styled from 'styled-components';
import Container from '../../atoms/Container';
import getQuestion from './getQuestion';

const Clue = styled.h1``;
const House = styled.h2``;
const Button = styled.button`
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Question = () => {
  const [question, updateQuestion] = useState(getQuestion());
  return (
    <Container>
      <Clue>{question.clue}</Clue>
      <House>{question.house}</House>
      <p>
        <Button type="button" onClick={() => updateQuestion(getQuestion())}>
          What House?
        </Button>
      </p>
    </Container>
  );
};

export default Question;
