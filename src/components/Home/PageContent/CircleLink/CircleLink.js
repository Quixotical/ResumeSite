import React from 'react';
import PropTypes from 'prop-types';

export const CircleLink = (props) => {
  return (
    <a href={"/" + props.text}>
      <div style={{backgroundColor: props.color}}>
        <p>{props.text}</p>
      </div>
    </a>
  )
}
CircleLink.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
CircleLink.defaultProps = {
  text: 'oops',
  color: 'red'
}
