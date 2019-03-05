import React from 'react'
import styled from '@emotion/styled'

import calculatePrice from '../utils/calculate-price.js'

const Panel = styled.div``

const Button = styled.button`
  background-color: ${({ active }) => (active ? 'purple' : 'grey')};
  color: ${({ active }) => (active ? 'white' : 'inherit')};
`

class MatCreator extends React.Component {
  state = {
    step: 1,
    shape: 'rectangle',
    width: '',
    height: '',
    radius: '',
    price: null,
  }

  handleShapeChange = shape => {
    this.setState(state => ({
      ...state,
      shape: shape,
    }))
  }

  handleWidthChange = event => {
    const width = event.target.value

    this.setState(({ state }) => ({
      ...state,
      width,
      price: calculatePrice({
        width: width,
        height: this.state.height,
      }),
    }))
  }

  handleHeightChange = event => {
    const height = event.target.value

    this.setState(({ state }) => ({
      ...state,
      height,
      price: calculatePrice({
        width: this.state.width,
        height: height,
      }),
    }))
  }

  handleRadiusChange = event => {
    const radius = event.target.value

    this.setState(({ state }) => ({
      ...state,
      radius,
      price: calculatePrice({ radius }),
    }))
  }

  render() {
    return (
      <div>
        <Panel>
          <Button
            active={this.state.shape === 'circle'}
            onClick={() => this.handleShapeChange('circle')}
          >
            Circle
          </Button>
          <Button
            active={this.state.shape === 'square'}
            onClick={() => this.handleShapeChange('square')}
          >
            Square
          </Button>
          <Button
            active={this.state.shape === 'rectangle'}
            onClick={() => this.handleShapeChange('rectangle')}
          >
            Rectangle
          </Button>
        </Panel>
        <Panel>
          {this.state.shape === 'rectangle' || this.state.shape === 'square' ? (
            <React.Fragment>
              <label htmlFor="width">Width</label>
              <input
                type="text"
                name="width"
                value={this.state.width}
                onChange={this.handleWidthChange}
              />
            </React.Fragment>
          ) : null}
          {this.state.shape === 'rectangle' && (
            <React.Fragment>
              <label htmlFor="width">Height</label>
              <input
                type="text"
                name="height"
                value={this.state.height}
                onChange={this.handleHeightChange}
              />
            </React.Fragment>
          )}
          {this.state.shape === 'circle' && (
            <React.Fragment>
              <label htmlFor="width">Radius</label>
              <input
                type="text"
                name="radius"
                value={this.state.radius}
                onChange={this.handleRadiusChange}
              />
            </React.Fragment>
          )}
        </Panel>
        <Panel>
          {this.state.price && <div>Price: ${this.state.price}</div>}
        </Panel>
      </div>
    )
  }
}

export default MatCreator
