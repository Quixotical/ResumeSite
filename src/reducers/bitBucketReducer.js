export const bitBucketInfo = (state={bitBucketInfo:null}, action) => {
  switch (action.type) {
    case "SET_BITBUCKET_INFO": {
      return {
        ...state,
        bitBucketInfo: action.payload.githubInfo
      }
    }
  }
  return state;
}
