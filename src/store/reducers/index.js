const initialState = {
  contentColor: '#d1fdfe',
  theme: {
    name: 'light',
    used: true,
    configuration: {
      Background: {r: 209, g: 253, b: 254, a: 1},
      Quotes: {r: 244, g: 105, b: 70, a: 1},
      Text: {r: 149, g: 200, b: 207, a: 1},
      Cursor: {r: 244, g: 105, b: 70, a: 1},
      LogoFirst: {r: 244, g: 105, b: 70, a: 1},
      LogoSecond: {r: 180, g: 223, b: 229, a: 1}
    }
  },
  themesList: [
    {
      name: 'light',
      used: true,
      configuration: {
        Background: {r: 209, g: 253, b: 254, a: 1},
        Quotes: {r: 244, g: 105, b: 70, a: 1},
        Text: {r: 149, g: 200, b: 207, a: 1},
        Cursor: {r: 244, g: 105, b: 70, a: 1},
        LogoFirst: {r: 244, g: 105, b: 70, a: 1},
        LogoSecond: {r: 180, g: 223, b: 229, a: 1}
      }
    },
    {
      name: 'black',
      used: true,
      configuration: {
        Background: {r: 10, g: 44, b: 49, a: 1},
        Quotes: {r: 244, g: 105, b: 70, a: 1},
        Text: {r: 255, g: 255, b: 255, a: 1},
        Cursor: {r: 244, g: 105, b: 70, a: 1},
        LogoFirst: {r: 244, g: 105, b: 70, a: 1},
        LogoSecond: {r: 255, g: 255, b: 255, a: 1}
      }
    },
    {
      name: 'red',
      used: true,
      configuration: {
        Background: {r: 244, g: 105, b: 70, a: 1},
        Quotes: {r: 127, g: 33, b: 10, a: 1},
        Text: {r: 255, g: 255, b: 255, a: 1},
        Cursor: {r: 127, g: 33, b: 10, a: 1},
        LogoFirst: {r: 255, g: 255, b: 255, a: 1},
        LogoSecond: {r: 255, g: 255, b: 255, a: 1}
      }
    },
    {
      name: 'custom',
      used: false,
      configuration: {
        Background: {r: 244, g: 105, b: 70, a: 1},
        Quotes: {r: 127, g: 33, b: 10, a: 1},
        Text: {r: 255, g: 255, b: 255, a: 1},
        Cursor: {r: 127, g: 33, b: 10, a: 1},
        LogoFirst: {r: 255, g: 255, b: 255, a: 1},
        LogoSecond: {r: 255, g: 255, b: 255, a: 1}
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
  step: 'welcome',
  customThemeTooltip: false,
  // step: 'configuration',
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
      return {
        ...state,
        theme: {
          name: 'custom',
          used: true,
          configuration: action.payload
        }
      }
    case 'CHANGE_CUSTOM_THEME_STYLE':
      return {
        ...state,
        themesList: [
          ...state.themesList.slice(0, state.themesList.length - 1),
          {
            name: 'custom',
            used: true,
            configuration: action.payload
          }
        ]
      }
    default:
      return state
  }
}

export default reducer
