const calculatePrice = ({ shape, width, length, diameter, isStitched }) => {
  const pricePerLinearInch = 3
  const rollWidth = 48
  const maxRollWidth = 56
  const maxLength = 96

  let errorDimensions = []
  let price = null
  let message = null
  let smallest
  let largest

  if (shape === 'other') {
    message = `Please contact us directly at <a href="mailto:info@overpoweredmats.com">info@overpoweredmats.com</a>.`
    return { price, errorDimensions, message }
  }

  if (shape === 'circle') {
    if (diameter === '') {
      price = null
      return { price, errorDimensions, message }
    }
    if (diameter > maxRollWidth) {
      price = null
      errorDimensions.push('diameter')
      message = `Please contact us directly at <a href="mailto:info@overpoweredmats.com">info@overpoweredmats.com</a>.`
      return { price, errorDimensions, message }
    }
    smallest = diameter
    largest = diameter
  }
  if (shape === 'square') {
    if (width === '') {
      price = null
      return { price, errorDimensions, message }
    }
    if (width > maxRollWidth) {
      price = null
      errorDimensions.push('width')
      message = `Please contact us directly at <a href="mailto:info@overpoweredmats.com">info@overpoweredmats.com</a>.`
      return { price, errorDimensions, message }
    }
    smallest = width
    largest = width
  }
  if (shape === 'rectangle') {
    if (width > maxRollWidth || length > maxLength) {
      if (length > maxLength) {
        price = null
        errorDimensions.push('length')
      }
      if (width > maxRollWidth) {
        price = null
        errorDimensions.push('width')
        message = `If you need a size larger than ${maxRollWidth} inches, please contact us directly at <a href="mailto:info@overpoweredmats.com">info@overpoweredmats.com</a>.`
      }
      return { price, errorDimensions, message }
    }
    smallest = width < length ? +width : +length
    largest = width > length ? +width : +length
  }

  const basePrice =
    largest > rollWidth
      ? largest * pricePerLinearInch
      : smallest * pricePerLinearInch

  const stitchingPrice = largest < 28 ? 8 : largest < 48 ? 15 : 25

  price = isStitched ? basePrice + stitchingPrice : basePrice

  return { price, errorDimensions, message }
}

export default calculatePrice
