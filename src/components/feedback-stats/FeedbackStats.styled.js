import styled from 'styled-components';

export const FeedbackStatsStyled = styled.ul`
  list-style: none;
  padding: 0;

  font-size: 20px;
  font-weight: 600;
  color: #27296d;

  & li:not(:last-child) {
    margin-bottom: 15px;
  }

  & span {
    font-size: 25px;
    font-weight: 700;
    font-style: italic;
  }
`;
