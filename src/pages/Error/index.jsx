import './css/index.css'

import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

function Error404() {

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);

  return (
    <>
      <div class='error'>
        <h1>404 page not found</h1>
        <button class='brn' onClick={handleOnClick}>go back to home</button>
      </div>
    </>
  )
}
export default Error404