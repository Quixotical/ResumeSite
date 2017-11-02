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
              <li>
                <NavLink exact activeClassName='active' to='/'>{link}</NavLink>
              </li>
            )
          :
          (
            <li>
              <NavLink activeClassName='active' to='/Posts'>{link}</NavLink>
            </li>
          )
        ))
      }
    </ul>
  )
}
