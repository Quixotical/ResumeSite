import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Home.css';

import { Avatar } from '../Avatar/Avatar';
import { PageContentEnglish } from './PageContent/PageContentEnglish';
import { PageContentJapanese } from './PageContent/PageContentJapanese';
import { PageContentRussian } from './PageContent/PageContentRussian';

@connect((store) => {
  return {language: store.languageChange.language}
})
export default class Home extends React.Component {

  render() {
    let language = this.props.language;
    return (
      <div className='home'>
          <Avatar fileName='main-pic.jpg'/>
          {
            language === 'English' &&
            <PageContentEnglish />
          }
          {
            language === 'Русский' &&
            <PageContentRussian />
          }
          {
            language === '日本語' &&
            <PageContentJapanese />
          }
      </div>
    )
  }
}
Home.propTypes = {
  language: PropTypes.string.isRequired
}
Home.defaultProps = {
  language: 'English'
}
