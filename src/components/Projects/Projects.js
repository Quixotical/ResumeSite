import React from 'react';
import './Projects.css';
import { getGithubInfo, getBitBucketInfo } from '../../utils/api';
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';
import { setGitHubInfo } from '../../actions/githubActions';
import { setBitBucketInfo } from '../../actions/bitBucketActions';
@connect((store) => {
  return {
    githubInfo: store.setGitHubInfo,
    bitBucketInfo: store.setBitBucketInfo,
  }
})
export default class Projects extends React.Component {

  componentDidMount() {
    getGithubInfo()
    .then((results) => {
      if(results === null){
        return {
          error: 'Looks like there was an error. Check that both users exist on GitHub',
          loading:false,
        }
      }
      this.props.dispatch(setGitHubInfo(results[0],results[1]))
    });

    getBitBucketInfo()
    .then((results) => {
      if(results === null){
        return {
          error: 'Looks like there was an error. Check that both users exist on GitHub',
          loading:false,
        }
      }
      this.props.dispatch(setBitBucketInfo(results[0],results[1]))
    })
  }

  render() {
    console.log('~~~~',this.props);
    return (
      <div className='projects-container'>
        <div className='projects'>
          <Loading />
        </div>
      </div>
    )
  }
}
