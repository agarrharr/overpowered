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
    error: '',
  }

  handleShapeChange = shape => {
    try {
      const price = calculatePrice({
        shape,
        width: this.state.width,
        height: this.state.height,
        radius: this.state.radius,
      })

      this.setState(state => ({
        ...state,
        shape,
        price,
        error: '',
      }))
    } catch (error) {
      this.setState(state => ({
        ...state,
        shape,
        price: null,
        error,
      }))
    }
  }

  handleWidthChange = event => {
    const width = event.target.value

    try {
      const price = calculatePrice({
        shape: this.state.shape,
        width,
        height: this.state.height,
      })

      this.setState(state => ({
        ...state,
        width,
        price,
        error: '',
      }))
    } catch (error) {
      this.setState(state => ({
        ...state,
        width,
        price: null,
        error,
      }))
    }
  }

  handleHeightChange = event => {
    const height = event.target.value

    try {
      const price = calculatePrice({
        shape: this.state.shape,
        width: this.state.width,
        height,
      })

      this.setState(state => ({
        ...state,
        height,
        price,
        error: '',
      }))
    } catch (error) {
      this.setState(state => ({
        ...state,
        height,
        price: null,
        error,
      }))
    }
  }

  handleRadiusChange = event => {
    const radius = event.target.value

    try {
      const price = calculatePrice({
        shape: this.state.shape,
        radius,
      })

      this.setState(state => ({
        ...state,
        radius,
        price,
        error: '',
      }))
    } catch (error) {
      this.setState(state => ({
        ...state,
        radius,
        price: null,
        error,
      }))
    }
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
        <Panel>{this.state.error.message}</Panel>
      </div>
    )
  }
}

export default MatCreator
