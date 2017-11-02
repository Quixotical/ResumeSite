import React from 'react';

export const CircleLink = (props) => {
  return (
    <a href={"/" + props.text}>
      <div style={{backgroundColor: props.color}}>
        <p>{props.text}</p>
      </div>
    </a>
  )
}
