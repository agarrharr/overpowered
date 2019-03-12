import { expect } from 'chai'
import calculatePrice from './calculate-price'

describe('rectangle', () => {
  const shape = 'rectangle'

  describe('when both dimensions are 48 or less', () => {
    it('uses the smallest dimension', () => {
      const expected = { price: 3, errorDimensions: [], message: null }

      expect(calculatePrice({ shape, width: 1, length: 2 })).to.deep.equal(
        expected
      )
      expect(calculatePrice({ shape, width: 2, length: 1 })).to.deep.equal(
        expected
      )
      expect(calculatePrice({ shape, width: 48, length: 1 })).to.deep.equal(
        expected
      )
      expect(calculatePrice({ shape, width: 1, length: 48 })).to.deep.equal(
        expected
      )
    })
  })

  describe('when one dimensions is larger than 48', () => {
    it('uses the larger dimension', () => {
      expect(calculatePrice({ shape, width: 49, length: 1 })).to.deep.equal({
        price: 49 * 3,
        errorDimensions: [],
        message: null,
      })
      expect(calculatePrice({ shape, width: 1, length: 49 })).to.deep.equal({
        price: 49 * 3,
        errorDimensions: [],
        message: null,
      })
      expect(calculatePrice({ shape, width: 49, length: 96 })).to.deep.equal({
        price: 288,
        errorDimensions: [],
        message: null,
      })
      expect(calculatePrice({ shape, width: 50, length: 96 })).to.deep.equal({
        price: 288,
        errorDimensions: [],
        message: null,
      })
    })
  })

  describe('when the width is larger than 50', () => {
    it('throws an error', () => {
      expect(
        calculatePrice({
          shape,
          width: 51,
          length: 1,
        })
      ).to.deep.equal({
        price: null,
        errorDimensions: ['width'],
        message: `If you need a size larger than 50 inches, please contact us directly at info@overpoweredmats.com.`,
      })
    })
  })

  describe('when the length is larger than 96', () => {
    it('throws an error', () => {
      expect(
        calculatePrice({
          shape,
          width: 50,
          length: 97,
        })
      ).to.deep.equal({
        price: null,
        errorDimensions: ['length'],
        message: null,
      })
    })
  })

  describe('when the length and width are larger than the max', () => {
    it('throws an error', () => {
      const actual = calculatePrice({
        shape,
        width: 51,
        length: 97,
      })

      expect(actual.price).to.equal(null)
      expect(actual.errorDimensions.includes('width')).to.be.true
      expect(actual.errorDimensions.includes('length')).to.be.true
    })
  })
})

describe('square', () => {
  const shape = 'square'

  describe('when one dimensions is larger than 48', () => {
    it('uses the larger dimension', () => {
      expect(calculatePrice({ shape, width: 1 })).to.deep.equal({
        price: 1 * 3,
        errorDimensions: [],
        message: null,
      })
      expect(calculatePrice({ shape, width: 48 })).to.deep.equal({
        price: 48 * 3,
        errorDimensions: [],
        message: null,
      })
      expect(calculatePrice({ shape, width: 49 })).to.deep.equal({
        price: 49 * 3,
        errorDimensions: [],
        message: null,
      })
      expect(calculatePrice({ shape, width: 50 })).to.deep.equal({
        price: 50 * 3,
        errorDimensions: [],
        message: null,
      })
    })
  })

  describe('when the width is larger than 50', () => {
    it('throws an error', () => {
      expect(
        calculatePrice({
          shape,
          width: 51,
        })
      ).to.deep.equal({
        price: null,
        errorDimensions: ['width'],
        message: null,
      })
    })
  })
})

describe('circle', () => {
  const shape = 'circle'

  describe('when diameter is 50 or less', () => {
    it('uses the smallest dimension', () => {
      expect(calculatePrice({ shape, diameter: 50 })).to.deep.equal({
        price: 150,
        errorDimensions: [],
        message: null,
      })
      expect(
        calculatePrice({ shape, diameter: 50, width: 1, length: 2 })
      ).to.deep.equal({ price: 150, errorDimensions: [], message: null })
    })
  })

  describe('when diameter larger than 50', () => {
    it('returns an error', () => {
      expect(calculatePrice({ shape, diameter: 51 })).to.deep.equal({
        price: null,
        errorDimensions: ['diameter'],
        message: null,
      })
    })
  })

  describe('when diameter is an empty string', () => {
    it('returns null', () => {
      expect(calculatePrice({ shape, diameter: '' })).to.deep.equal({
        price: null,
        errorDimensions: [],
        message: null,
      })
    })
  })
})

describe('other', () => {
  const shape = 'other'

  it('returns a message', () => {
    expect(calculatePrice({ shape })).to.deep.equal({
      price: null,
      errorDimensions: [],
      message: `Please contact us directly at info@overpoweredmats.com.`,
    })
  })
})
