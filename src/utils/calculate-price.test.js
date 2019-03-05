import { expect } from 'chai'
import calculatePrice from './calculate-price'

describe('when input has time, speaker, and text', () => {
  it('returns object with timestamp, speaker, and text', () => {
    const expected = 100

    const actual = calculatePrice({ width: 2, height: 2 })

    expect(actual).to.deep.equal(expected)
  })
})
