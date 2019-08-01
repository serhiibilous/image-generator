const initialState = {
  contentColor: '#d1fdfe',
  theme: {
    name: 'light',
    used: true,
    configuration: {
      Background: '#d1fdfe',
      Quotes: '#f46946',
      Text: '#95c8cf',
      Cursor: '#f46946',
      LogoFirst: '#F46946',
      LogoSecond: '#B4DFE5',
    }
  },
  themesList: [
    {
      name: 'light',
      used: true,
      configuration: {
        Background: '#d1fdfe',
        Quotes: '#f46946',
        Text: '#95c8cf',
        Cursor: '#f46946',
        LogoFirst: '#F46946',
        LogoSecond: '#B4DFE5'
      }
    },
    {
      name: 'black',
      used: true,
      configuration: {
        Background: '#0a2c31',
        Quotes: '#f46946',
        Text: '#ffffff',
        Cursor: '#f46946',
        LogoFirst: '#F46946',
        LogoSecond: '#ffffff'
      }
    },
    {
      name: 'red',
      used: true,
      configuration: {
        Background: '#f46946',
        Quotes: '#7F210A',
        Text: '#ffffff',
        Cursor: '#7F210A',
        LogoFirst: '#ffffff',
        LogoSecond: '#ffffff'
      }
    },
    {
      name: 'custom',
      used: false,
      configuration: {
        Background: '#f46946',
        Quotes: '#7F210A',
        Text: '#FFFFFF',
        Cursor: '#7F210A',
        LogoFirst: '#FFFFFF',
        LogoSecond: '#FFFFFF'
      }
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
  // step: 'welcome',
  customThemeTooltip: false,
  step: 'configuration',
  text: 'Your text here',
  extension: 'jpg',
  fontSize: 15
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SECTION_CHANGE':
      return {
        ...state,
        step: action.payload
      }
    case 'THEME_CHANGE':
      return {
        ...state,
        theme: state.themesList.find((el) => el.name === action.payload)
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
    case 'FONT_SIZE_CHANGE':
      return {
        ...state,
        fontSize: action.payload
      }
    case 'SHOW_CUSTOM_THEME_TOOLTIP':
      return {
        ...state,
        customThemeTooltip: action.payload
      }
    case 'CHANGE_THEME_STYLE':
      // const theme = state.themesList.find((el) => el.name === action.payload.name)
      return {
        ...state,
        theme: {
          ...state.theme,
          configuration: action.payload
        }
      }
    default:
      return state
  }
}

export default reducer
