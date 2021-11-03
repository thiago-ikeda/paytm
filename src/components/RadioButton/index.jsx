import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import Container from './styled-components';

const RadioButton = ({ options }) => {
  const renderOptions = () =>
    options.map(option => (
      <div key={option.id}>
        <input name='currency' type='radio' value={option.description} />
        <Label description={option.id} />
      </div>
    ));

  return <Container>{renderOptions()}</Container>;
};

RadioButton.propTypes = {
  options: PropTypes.PropTypes.arrayOf(PropTypes.object, PropTypes.string).isRequired
};

export default RadioButton;
