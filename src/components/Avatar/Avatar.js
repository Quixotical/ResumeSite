import React from 'react';
import './Avatar.css';

export const Avatar = (props) => {
  return (
    <div className='avatar'>
      <img src={'/public/assets/' + props.fileName} />
    </div>
  )
}
