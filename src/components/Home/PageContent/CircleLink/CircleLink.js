import React from 'react';
import PropTypes from 'prop-types';

export const CircleLink = (props) => {
  return (
    <div style={{backgroundColor: props.color}}>
      <a href={"/" + props.text}>
        <p>{props.text}</p>
      </a>
    </div>
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
