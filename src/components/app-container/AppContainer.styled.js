import styled from 'styled-components';

export const AppContainerStyled = styled.div`
  padding-left: 50px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }

  & h1 {
    margin-top: 0px;
    margin-bottom: 30px;
    font-size: 40px;
    color: #27296d;
  }
`;
