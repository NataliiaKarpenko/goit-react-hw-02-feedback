import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptionsStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeavingFeedback }) => {
  return options.map(option => (
    <FeedbackOptionsStyled
      type="button"
      key={option}
      onClick={() => onLeavingFeedback(option)}
    >
      {option}
    </FeedbackOptionsStyled>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeavingFeedback: PropTypes.func.isRequired,
};
