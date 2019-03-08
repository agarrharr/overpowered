const calculatePrice = ({ shape, width, height, radius, isStitched }) => {
  const pricePerLinearInch = 3
  const rollWidth = 48
  const maxRollWidth = 50

  let smallest
  let largest

  if (shape === 'other') {
    throw new Error('Please contact us directly at info@overpoweredmats.com.')
  }

  if (shape === 'circle') {
    if (radius === '') {
      return null
    }
    smallest = radius * 2
    largest = radius * 2
  }
  if (shape === 'square') {
    if (width === '') {
      return null
    }
    smallest = width
    largest = width
  }
  if (shape === 'rectangle') {
    if (width === '' || height === '') {
      return null
    }
    smallest = width < height ? +width : +height
    largest = width > height ? +width : +height
  }

  if (smallest > maxRollWidth) {
    throw new Error(
      `If you need a size larger than ${maxRollWidth} inches, please contact us directly at info@overpoweredmats.com.`
    )
  }

  return largest > rollWidth
    ? largest * pricePerLinearInch
    : smallest * pricePerLinearInch
}

export default calculatePrice
