function rgbToHex (rgb) {
  let hex = Number(rgb).toString(16)
  if (hex.length < 2) {
    hex = '0' + hex
  }
  return hex
}

function convertHexObjectToColor(objectColor, value) {
  if (value === 'hex') {
    let color = '#'
    Object.keys(objectColor).forEach((item) => {
      if (item === 'a') return
      color += rgbToHex(objectColor[item])
    })
    return color.toUpperCase()
  } else if (value === 'rgba') {
    return `rgba(${objectColor.r}, ${objectColor.g}, ${objectColor.b}, ${objectColor.a})`
  }
}

export {
  convertHexObjectToColor
}