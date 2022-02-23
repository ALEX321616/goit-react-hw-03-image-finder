import React from 'react';
import s from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => (
  <div className={s.loader}>
    <BallTriangle
      color="#321616"
      height={100}
      width={100}
      ariaLabel="loading"
    />
  </div>
);

export default Loader;
