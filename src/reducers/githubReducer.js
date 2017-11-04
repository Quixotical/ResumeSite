export const githubInfo = (state={githubInfo: null}, action) => {
  switch (action.type) {
    case "SET_GITHUB_INFO": {
      return {
        ...state,
        githubInfo: action.payload.githubInfo
      }
    }
  }
  return state;
}
