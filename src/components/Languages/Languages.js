import React from 'react';

export default class Languages extends React.Component {

  onLanguageSelected(text){
    this.props.onClick(text);
  }

  render() {
    return (
      <div className='languages'>
        {
          this.props.languages.map((language) => {
            return <button
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
