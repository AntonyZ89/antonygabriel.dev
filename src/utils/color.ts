const HexREGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
const RgbREGEX = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+|\d*\.\d+))?\)$/

function hexToRgb(hex: string) {
  // turn hex val to RGB
  const result = HexREGEX.exec(hex) || RgbREGEX.exec(hex)

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : undefined
}

function getContrastYIQ(hexcolor: string): 'white' | 'black' | undefined {
  const rgb = hexToRgb(hexcolor)

  if (rgb) {
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'black' : 'white'
  }

  return undefined
}

export default { hexToRgb, getContrastYIQ }
