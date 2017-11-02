import React from 'react';
import './PageContent.css';
import { CircleLink } from './CircleLink/CircleLink';

export const PageContentRussian = (props) => {
  console.log(props);
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
          Это всегда было моя привычка погружаться на что-нибудь я изучал потому
          что мне интересно обогащаю мою жизнь, и когда я учусь, я могу чувствовать,
          что мне нравиться учить. Я верю, если мы следимся когда мы пытаемся
          понимать что-то нового, мы можем заметить что, для нас, это замечательное
           время. Мне кажется, в течение того, когда мы учимся, мы не только понимать
            предмет о чём мы концентрируем, но одновременна мы начинаем понимать
             что-то в нашем внутренных мирах тоже. Спасибо, добро пожаловать.

        </h3>
      </div>
    </div>
  )
}
