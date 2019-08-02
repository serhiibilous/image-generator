const sectionChange = (step) => {
  return {
    type: 'SECTION_CHANGE',
    payload: step
  }
}

const themeChange = (theme) => {
  return {
    type: 'THEME_CHANGE',
    payload: theme
  }
}

const textChange = (text) => {
  return {
    type: 'TEXT_CHANGE',
    payload: text
  }
}

const extensionChange = (extension) => {
  return {
    type: 'EXTENSION_CHANGE',
    payload: extension
  }
}

const contentColorChange = (color) => {
  return {
    type: 'CONTENT_COLOR_CHANGE',
    payload: color
  }
}

const fontSizeChange = (fontSize) => {
  return {
    type: 'FONT_SIZE_CHANGE',
    payload: fontSize
  }
}

const showCustomThemeTooltip = (value) => {
  return {
    type: 'SHOW_CUSTOM_THEME_TOOLTIP',
    payload: value
  }
}

const changeThemeStyle = (configuration) => {
  return {
    type: 'CHANGE_THEME_STYLE',
    payload: configuration
  }
}

const changeCustomThemeStyle = (configuration) => {
  return {
    type: 'CHANGE_CUSTOM_THEME_STYLE',
    payload: configuration
  }
}

export {
  sectionChange,
  themeChange,
  textChange,
  extensionChange,
  contentColorChange,
  fontSizeChange,
  showCustomThemeTooltip,
  changeThemeStyle,
  changeCustomThemeStyle
}
