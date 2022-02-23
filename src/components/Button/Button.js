import React from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ addImg }) => (
  <button type="button" className={s.button} onClick={addImg}>
    Load more
  </button>
);
Button.propTypes = {
  addImg: PropTypes.func.isRequired,
};
export default Button;
