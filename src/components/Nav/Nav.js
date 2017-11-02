import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = (props) => {
  let language = props.language;
  let navLinks = props.navLinks[language];
  console.log(navLinks);
  return (
    <ul className='nav'>
      {
        navLinks.map((link, idx) => (
          idx === 0 ?
            (
              <li key={link}>
                <NavLink exact activeClassName='active' to='/'>{link}</NavLink>
              </li>
            )
          :
          (
            <li key={link}>
              <NavLink activeClassName='active' to='/Posts'>{link}</NavLink>
            </li>
          )
        ))
      }
    </ul>
  )
}
