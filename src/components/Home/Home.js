import React from 'react';
import './Home.css';

import { Avatar } from '../Avatar/Avatar';
import { PageContentEnglish } from './PageContent/PageContentEnglish';
import { PageContentJapanese } from './PageContent/PageContentJapanese';
import { PageContentRussian } from './PageContent/PageContentRussian';

export const Home = (props) => {
  return (
    <div className='home'>
        <Avatar fileName='main-pic.jpg'/>
        {
          props.language === 'English' &&
          <PageContentEnglish />
        }
        {
          props.language === 'Русский' &&
          <PageContentRussian />
        }
        {
          props.language === '日本語' &&
          <PageContentJapanese />
        }

    </div>
  )
}
