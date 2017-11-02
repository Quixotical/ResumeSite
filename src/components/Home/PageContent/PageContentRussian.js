import React from 'react';
import './PageContent.css';
import { CircleLink } from './CircleLink/CircleLink';

export const PageContentRussian = (props) => {
  return (
    <div className='page-content'>
      <div className='title'>
        <p className='greeting'>Привет,</p>
        <p className='about-me'>
          Что-то насчёт меня,
        </p>
      </div>
      <div className='links'>
        <CircleLink text='Насчёт меня' color='red' />
        <CircleLink text='Посты' color='blue' />
        <CircleLink text='Резюме' color='brown' />
      </div>
      <div className='sub-text'>
        <h3>
          Я люблю учиться. Мне кажется, в течение того, когда мы учимся, мы не только понимать
            предмет о чём мы концентрируем, но одновременна мы начинаем понимать
             что-то в нашем внутренных мирах тоже. Спасибо, добро пожаловать.
        </h3>
      </div>
    </div>
  )
}
