import React from 'react';
import './PageContent.css';
import { CircleLink } from './CircleLink/CircleLink';

export const PageContentEnglish = (props) => {
  console.log(props);
  return (
    <div className='page-content'>
      <div className='title'>
        <p className='greeting'>Hey,</p>
        <p className='about-me'>
          Some stuff about me
        </p>
      </div>
      <div className='links'>
        <CircleLink text='About' color='red' />
        <CircleLink text='Posts' color='blue' />
        <CircleLink text='Resume' color='brown' />
      </div>
      <div className='sub-text'>
        <h3>
          Learning has always been my greatest passion. I believe that it is
          on the journey of discovery that we truly feel alive and often it is where
          we learn the most about ourselves. I appreciate you taking the time to
          look at my website.
        </h3>
      </div>
    </div>
  )
}
