import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/languageActions';

@connect()
export default class Languages extends React.Component {

  onLanguageSelected(text){
    this.props.dispatch(changeLanguage(text));
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
Languages.propTypes = {
  languages: PropTypes.array.isRequired,
}
Languages.defaultProps = {
  languages: ['oops']
}
