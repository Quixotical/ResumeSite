import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const Nav = (props) => {
  let language = props.language;
  let navLinks = props.navLinks[language];

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
              <NavLink activeClassName='active' to={'/' + link}>{link}</NavLink>
            </li>
          )
        ))
      }
    </ul>
  )
}
Nav.propTypes = {
  language: PropTypes.string.isRequired,
  navLinks: PropTypes.object.isRequired,
}
Nav.defaultProps = {
  language: 'English',
  navLinks: {English:[],Русский:[],日本語:[]},
}
