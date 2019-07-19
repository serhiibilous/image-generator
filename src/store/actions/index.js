const stepChange = (step) => {
  return {
    type: 'STEP_CHANGE',
    payload: step
  }
}

const colorChange = (color) => {
  return {
    type: 'COLOR_CHANGE',
    payload: color
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

export {
  stepChange,
  colorChange,
  textChange,
  extensionChange,
  contentColorChange
}