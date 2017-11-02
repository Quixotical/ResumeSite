import React from 'react';
import './Title.css';

export const Title = (props) => {
  return (
    <div className='title'>
      <div className='name'>
        {props.name}
      </div>
      <div className='position'>
        {props.position}
      </div>
    </div>
  )
}
