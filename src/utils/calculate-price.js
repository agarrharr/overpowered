const calculatePrice = ({ shape, width, height, radius, isStitched }) => {
  const pricePerLinearInch = 3
  const rollWidth = 48
  const maxRollWidth = 54

  let smallest
  let largest

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
      'Your size is larger than our standard sizes. Please contact us directly.'
    )
  }

  return largest > rollWidth
    ? largest * pricePerLinearInch
    : smallest * pricePerLinearInch
}

export default calculatePrice
