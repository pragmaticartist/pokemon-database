import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import './App.css';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  padding: 5vh;

  text-align: center;

  background-color: #fff;
`;

const StyledTitle = styled.h1`
  color: #222;
  font-size: 3rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  padding: 15px 20px;

  background-color: #454c5a;
  border-radius: 3px;
`;

const StyledSubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;

  color: #fff;
  font-weight: bold;

  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 3px;
  background-color: #282c34;

  transition: border 0.2s linear;

  :hover {
    border: 2px solid #08a8f1;

    transition: border 0.2s linear;
  }
`;

interface IAppProps {}

interface IFormikValues {
  pokemon: string;
}

const App: React.FunctionComponent<IAppProps> = () => {
  const onSubmit = async (values: IFormikValues) => {
    await console.log(values);
  };

  return (
    <StyledApp>
      <StyledTitle>Choose Your Pokemon!</StyledTitle>
      <Formik initialValues={{ pokemon: '' }} onSubmit={onSubmit}>
        {props => (
          <StyledForm>
            <Field as='select' name='pokemon'>
              <option value=''>--Choose Your Pokemon--</option>
              <option value='1'>Bulbasaur</option>
              <option value='4'>Charmander</option>
              <option value='7'>Squirtle</option>
              <option value='25'>Pikachu</option>
            </Field>
            <StyledSubmitButton type='submit'>I Choose You!</StyledSubmitButton>
          </StyledForm>
        )}
      </Formik>
    </StyledApp>
  );
};

export default App;
