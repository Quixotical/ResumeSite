import { combineReducers } from 'redux';

import { languageChange } from './languageReducer';
import { bitBucketInfo } from './bitBucketReducer';
import { githubInfo } from './githubReducer';

export default combineReducers({
  languageChange,
  bitBucketInfo,
  githubInfo,
});
