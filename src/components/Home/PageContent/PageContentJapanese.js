import React from 'react';
import './PageContent.css';
import { CircleLink } from './CircleLink/CircleLink';

export const PageContentJapanese = (props) => {
  return (
    <div className='page-content'>
      <div className='title'>
        <p className='greeting'>こんにちは,</p>
        <p className='about-me'>
          僕について、
        </p>
      </div>
      <div className='links'>
        <CircleLink text='僕について' color='red' />
        <CircleLink text='ポースト' color='blue' />
        <CircleLink text='履歴書' color='brown' />
      </div>
      <div className='sub-text'>
        <h3>
          僕にとって、子供頃から、学ぶことはいつも興味深いです。集中したいし、時間過ごしを気づかないし、
          解ける前に止めないといけないなら、最悪な気持ちを感じてきます。何か新しいことを勉強しながら、
          本当に生きてると言えると思います。それ上に習いたびに情報を掴むだけではなくて、
          僕のことについて僕の知識もだいぶ増えます。サイトに来てくれて感謝します。
        </h3>
      </div>
    </div>
  )
}
