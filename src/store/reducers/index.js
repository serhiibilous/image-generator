const initialState = {
  contentColor: '#d1fdfe',
  colorsList: [
    {
      name: 'light',
      value: '#d1fdfe'
    },
    {
      name: 'black',
      value: '#0a2c31'
    },
    {
      name: 'red',
      value: '#f46946'
    }
  ],
  extensionList: [
    {
      name: 'jpg',
      value: 'jpg'
    },
    {
      name: 'pdf',
      value: 'pdf'
    }
  ],
  // step: 'configuration',
  step: 'welcome',
  color: '#d1fdfe',
  text: 'Your text here',
  extension: 'jpg'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STEP_CHANGE':
      return {
        ...state,
        step: action.payload
      }
    case 'COLOR_CHANGE':
      return {
        ...state,
        color: action.payload
      }
    case 'TEXT_CHANGE':
      return {
        ...state,
        text: action.payload
      }
    case 'EXTENSION_CHANGE':
      return {
        ...state,
        extension: action.payload
      }
    case 'CONTENT_COLOR_CHANGE':
      return {
        ...state,
        contentColor: action.payload
      }
    default:
      return state
  }

}

export default reducer
