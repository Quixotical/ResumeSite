import React from 'react';
import './SideMenu.css';

export const toggleMenu = (button) => {
  button.parentNode.parentNode.classList.contains('active') ?
  button.parentNode.parentNode.classList.remove('active') :
  button.parentNode.parentNode.classList.add('active');
  console.log(button.parentNode.parentNode);
}

export const SideMenu = () => {
  return (
    <div className='side-menu'>
      <div className='hamburger'>
        <button onClick={(event) => toggleMenu(event.target)}></button>
      </div>
      <div className='menu-items'>

      </div>
    </div>
  )
}
