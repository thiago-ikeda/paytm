import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from './styled-components';

const Label = ({ description }) => <StyledLabel>{description}</StyledLabel>;

Label.propTypes = {
  description: PropTypes.string.isRequired
};

export default Label;
