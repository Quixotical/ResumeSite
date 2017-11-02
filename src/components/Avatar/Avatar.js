import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

export const Avatar = (props) => {
  return (
    <div className='avatar'>
      <img src={'/public/assets/' + props.fileName} />
    </div>
  )
}
Avatar.propTypes = {
  fileName: PropTypes.string.isRequired
}
