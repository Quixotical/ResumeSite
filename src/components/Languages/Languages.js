import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/languageActions';

@connect()
export default class Languages extends React.Component {

  onLanguageSelected(text){
    this.props.dispatch(changeLanguage(text));
    // this.props.onClick(text);
  }

  render() {
    return (
      <div className='languages'>
        {
          this.props.languages.map((language) => {
            return <button
              key={language}
              value={language}
              className='specific-language'
              onClick={(event) => this.onLanguageSelected(event.target.value)}
              >{language}</button>;
          })
        }
      </div>
    )
  }
}
