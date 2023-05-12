import React from 'react';
import './Loader.css'
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='loader' >
      <RotatingLines strokeColor='#006aa6' />
    </div>
  );
};

export default Loader;