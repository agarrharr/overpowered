import { expect } from 'chai'
import calculatePrice from './calculate-price'

describe('when both dimensions are 48 or less', () => {
  it('uses the smallest dimension', () => {
    const expected = 3
    const shape = 'rectangle'

    expect(calculatePrice({ shape, width: 1, length: 2 })).to.equal(expected)
    expect(calculatePrice({ shape, width: 2, length: 1 })).to.equal(expected)
    expect(calculatePrice({ shape, width: 48, length: 1 })).to.equal(expected)
    expect(calculatePrice({ shape, width: 1, length: 48 })).to.equal(expected)
  })
})

describe('when one dimensions is larger than 48', () => {
  const shape = 'rectangle'

  it('uses the smallest dimension', () => {
    expect(calculatePrice({ shape, width: 49, length: 1 })).to.equal(49 * 3)
    expect(calculatePrice({ shape, width: 1, length: 49 })).to.equal(49 * 3)
    expect(calculatePrice({ shape, width: 100, length: 49 })).to.equal(300)
    expect(calculatePrice({ shape, width: 49, length: 100 })).to.equal(300)
  })
})

describe('when radius is 24 or less', () => {
  it('uses the smallest dimension', () => {
    const shape = 'circle'

    expect(calculatePrice({ shape, radius: 24 })).to.equal(24 * 2 * 3)
    expect(calculatePrice({ shape, radius: 24, width: 1, length: 2 })).to.equal(
      24 * 2 * 3
    )
  })
})

describe('when radius is an empty string', () => {
  it('returns null', () => {
    const shape = 'circle'

    expect(calculatePrice({ shape, radius: '' })).to.equal(null)
  })
})
