// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';
import styled from 'styled-components';
import Container from '../../atoms/Container';
import Title from '../../atoms/Title';
import getQuestion from './getQuestion';

const QuestionRegion = styled.hgroup`
  margin: 0 2rem;
`;
const QuestionComponent = styled.h2`
  margin: 0;
  font-size: 1.75rem;
`;
const Clue = styled(QuestionComponent)``;
const House = styled(QuestionComponent)`
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
const Button = styled.button`
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Question = () => {
  const [question, updateQuestion] = useState(getQuestion());
  return (
    <Container>
      <Title />
      <QuestionRegion>
        <Clue>{question.clue}</Clue>
        <House>{question.house}</House>
      </QuestionRegion>
      <p>
        <Button type="button" onClick={() => updateQuestion(getQuestion())}>
          What House?
        </Button>
      </p>
    </Container>
  );
};

export default Question;
