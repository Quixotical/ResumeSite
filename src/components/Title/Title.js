import React from 'react';
import PropTypes from 'prop-types';

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
Title.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}
Title.defaultProps = {
  name: 'John Smithy',
  position: 'Word Smith'
}
