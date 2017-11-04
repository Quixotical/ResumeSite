import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import { Footer } from '../Footer/Footer';
import Home from '../Home/Home.js';
import { Projects } from '../Projects/Projects.js';
import { Posts } from '../Posts/Posts.js';
import { About } from '../About/About.js';
import { Resume } from '../Resume/Resume.js';
import { Links } from '../Links/Links.js';
import Header  from '../Header/Header';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    language: store.languageChange.language
  }
})
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const language = this.props.language;
    let notFound = 'This page is still under construction';

    if (language === 'Русский'){
      notFound = 'Извините, мне надо ещё строить эту страницу';
    }else if(language === '日本語'){
      notFound = 'ごめん、このページはまだ工事中です';
    }

    return (
        <div >
          <Router>
            <div className='container'>
              <Header language={language} />
              <div className='main-body'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/projects' render={() => {
                    return <p>{notFound}</p>
                  }} />
                  <Route path='/posts' render={() => {
                    return <p>{notFound}</p>
                  }} />
                  <Route path='/about' render={() => {
                    return <p>{notFound}</p>
                  }} />
                  <Route path='/resume' render={() => {
                    return <p>{notFound}</p>
                  }} />
                  <Route path='/links' render={() => {
                    return <p>{notFound}</p>
                  }} />
                  {/* <Route path='/projects' component={Projects} />
                  <Route path='/posts' component={Posts} />
                  <Route path='/about' component={About} />
                  <Route path='/resume' component={Resume} />
                  <Route path='/links' component={Links} /> */}

                  <Route render={() => {
                    return <p>{notFound}</p>
                  }}/>
                </Switch>
              </div>
              <div className='footer'>
                <Footer />
              </div>
            </div>
          </Router>
        </div>
    );
  }
}
App.propTypes = {
  language: PropTypes.string.isRequired
}
App.defaultProps = {
  language: 'English'
}
export default App;
