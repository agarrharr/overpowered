const calculatePrice = ({ shape, width, length, diameter, isStitched }) => {
  const pricePerLinearInch = 3
  const rollWidth = 48
  const maxRollWidth = 50
  const maxLength = 96

  let smallest
  let largest

  if (shape === 'other') {
    throw new Error('Please contact us directly at info@overpoweredmats.com.')
  }

  if (shape === 'circle') {
    if (diameter === '') {
      return null
    }
    smallest = diameter
    largest = diameter
  }
  if (shape === 'square') {
    if (width === '') {
      return null
    }
    smallest = width
    largest = width
  }
  if (shape === 'rectangle') {
    if (width === '' || length === '') {
      return null
    }
    smallest = width < length ? +width : +length
    largest = width > length ? +width : +length
  }

  if (smallest > maxRollWidth) {
    throw new Error(
      `If you need a size larger than ${maxRollWidth} inches, please contact us directly at info@overpoweredmats.com.`
    )
  }
  if (largest > maxLength) {
    throw new Error(
      `If you need a size larger than ${maxLength} inches, please contact us directly at info@overpoweredmats.com.`
    )
  }

  const basePrice =
    largest > rollWidth
      ? largest * pricePerLinearInch
      : smallest * pricePerLinearInch

  const stitchingPrice = smallest < 28 ? 8 : smallest < 48 ? 15 : 25

  return isStitched ? basePrice + stitchingPrice : basePrice
}

export default calculatePrice
