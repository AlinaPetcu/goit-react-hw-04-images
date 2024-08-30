import React  from 'react';

import { Audio } from 'react-loader-spinner';

const CustomLoader = () => {
 
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Audio
          height="50"
          width="50"
          radius="50"
          color="blue"
          ariaLabel="spinner"
          wrapperStyle
          wrapperClass
        />
        ;
      </div>
    );
  
}

export default CustomLoader;
