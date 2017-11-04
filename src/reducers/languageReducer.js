export const languageChange = (state={language: 'English'}, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE": {
      return {...state, language: action.payload.language}
    }
  }
  return state;
}
