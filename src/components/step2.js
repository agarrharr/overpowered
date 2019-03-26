import React from 'react'
import styled from '@emotion/styled'

const InputGroup = styled.div`
  margin: 20px 0;
  input {
    border-color: ${({ error }) => (error ? 'red' : 'inherit')};
  }
  span {
    color: ${({ error }) => (error ? 'red' : 'inherit')};
  }
`

const Description = styled.p`
  font-size: 1em;
  color: #aaa;
  margin-top: -1.45rem;
`

class Step2 extends React.Component {
  render() {
    const {
      shape,
      errorDimensions,
      width,
      length,
      diameter,
      onWidthChange,
      onLengthChange,
      onDiameterChange,
    } = this.props

    return (
      shape &&
      shape !== 'other' && (
        <div>
          <h2>Set Dimensions</h2>
          <Description>(in inches)</Description>
          {shape === 'rectangle' || shape === 'square' ? (
            <InputGroup error={errorDimensions.includes('width')}>
              <label htmlFor="width">Width: </label>
              <input
                type="number"
                min="6"
                name="width"
                value={width}
                onChange={onWidthChange}
              />{' '}
              <span>(Min 6", Max 56")</span>
            </InputGroup>
          ) : null}
          {shape === 'rectangle' && (
            <InputGroup error={errorDimensions.includes('length')}>
              <label htmlFor="length">Length: </label>
              <input
                type="number"
                min="6"
                name="length"
                value={length}
                onChange={onLengthChange}
              />{' '}
              <span>(Min 6", Max 96")</span>
            </InputGroup>
          )}
          {shape === 'circle' && (
            <InputGroup error={errorDimensions.includes('diameter')}>
              <label htmlFor="diameter">Diameter: </label>
              <input
                type="number"
                min="6"
                name="diameter"
                value={diameter}
                onChange={onDiameterChange}
              />{' '}
              <span>(Min 6", Max 56")</span>
            </InputGroup>
          )}
        </div>
      )
    )
  }
}

export default Step2
