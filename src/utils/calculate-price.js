const calculatePrice = ({ width, height, radius, isStitched }) => {
  const pricePerLinearInch = 3
  const rollWidth = 48

  const smallest = radius ? radius * 2 : width < height ? width : height

  const largest = radius ? radius * 2 : width < height ? height : width

  return largest > rollWidth
    ? largest * pricePerLinearInch
    : smallest * pricePerLinearInch
}

export default calculatePrice
