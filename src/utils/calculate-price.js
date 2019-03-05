const calculatePrice = ({ width, height, radius, isStitched }) => {
  const pricePerLinearInch = 3
  const maxWidth = 48
  const smallestDimension = radius
    ? radius * 2
    : width < height
    ? width
    : height

  return smallestDimension <= maxWidth
    ? smallestDimension * pricePerLinearInch
    : undefined
}

export default calculatePrice
