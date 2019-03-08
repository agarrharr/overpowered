import { expect } from 'chai'
import calculatePrice from './calculate-price'

describe('when both dimensions are 48 or less', () => {
  it('uses the smallest dimension', () => {
    const expected = 3

    expect(calculatePrice({ width: 1, height: 2 })).to.deep.equal(expected)
    expect(calculatePrice({ width: 2, height: 1 })).to.deep.equal(expected)
    expect(calculatePrice({ width: 48, height: 1 })).to.deep.equal(expected)
    expect(calculatePrice({ width: 1, height: 48 })).to.deep.equal(expected)
  })
})

describe('when one dimensions is larger than 48', () => {
  it('uses the smallest dimension', () => {
    expect(calculatePrice({ width: 49, height: 1 })).to.deep.equal(49 * 3)
    expect(calculatePrice({ width: 1, height: 49 })).to.deep.equal(49 * 3)
    expect(calculatePrice({ width: 100, height: 49 })).to.deep.equal(300)
    expect(calculatePrice({ width: 49, height: 100 })).to.deep.equal(300)
  })
})

describe('when radius is 48 or less', () => {
  it('uses the smallest dimension', () => {
    expect(calculatePrice({ radius: 48 })).to.deep.equal(48 * 2 * 3)
    expect(calculatePrice({ radius: 48, width: 1, height: 2 })).to.deep.equal(
      48 * 2 * 3
    )
  })
})
