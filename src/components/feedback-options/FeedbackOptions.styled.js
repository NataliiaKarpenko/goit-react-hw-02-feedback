import styled from 'styled-components';

export const FeedbackOptionsStyled = styled.button`
  display: inline-block;
  min-width: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
  transform: scale(1);

  font-size: 25px;
  color: white;

  background-color: #5e63b6;
  border: 2px solid transparent;
  border-radius: 5px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    color: #5e63b6;
    background-color: white;
    border: 2px solid #5e63b6;
    transform: scale(1.01);
  }
`;
