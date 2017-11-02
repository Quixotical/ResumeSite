import React from 'react';
import { Nav } from '../Nav/Nav';
import Languages from '../Languages/Languages';
import { Title } from '../Title/Title';
import './Header.css';

export default class Header extends React.Component {

  getNavLinks = () => {
    return {
      English: [
        'Home','Projects','Posts','About','Links','Resume'
      ],
      日本語: [
        'ホームページ','プロジェクト','ポースト','僕について','リンク','履歴書'
      ],
      Русский: [
        'Главная', 'Проекти', 'Посты', 'насчёт меня','ссылки', 'резюме'
      ]
    }
  }

  render() {
    let title = <Title name='Jake Boomgaarden' position='Software Developer'/>;
    let navLinks = this.getNavLinks();
    if(this.props.language === 'Русский'){
      title = <Title name='Джейк Бумгаарден' position='Программист'/>
    } else if(this.props.language === '日本語'){
      title = <Title name='ブンガーデン　ジェイク' position='ソフトウェア　エンジニア'/>
    }

    return (
      <div className='header'>
        {
          title
        }
        <Nav language={this.props.language} navLinks={navLinks}/>
        <Languages languages={['English','Русский','日本語']} onClick={this.props.onClick}/>
      </div>
    )
  }
}
