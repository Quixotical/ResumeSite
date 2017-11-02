import React from 'react';
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
    return (
      <div className='home'>
          <Avatar fileName='main-pic.jpg'/>
          {
            this.props.language === 'English' &&
            <PageContentEnglish />
          }
          {
            this.props.language === 'Русский' &&
            <PageContentRussian />
          }
          {
            this.props.language === '日本語' &&
            <PageContentJapanese />
          }

      </div>
    )
  }

}
