import React from 'react'
import styled from '@emotion/styled'

import calculatePrice from '../utils/calculate-price.js'

const Panel = styled.div`
  margin: 20px 0;

  input[type='radio'] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input[type='radio']:active ~ label {
    opacity: 1;
  }

  input[type='radio']:checked ~ label {
    opacity: 1;
    border: 1px solid #fff;
  }
`

const Button = styled.button`
  background-color: ${({ active }) => (active ? 'purple' : 'grey')};
  color: ${({ active }) => (active ? '#FFF' : 'inherit')};
`

const Answers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

const Answer = styled.div`
  font-size: 22px;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(256, 256, 256, 0.15);
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 10px 10px 30px 10px;
  color: #fff;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    border: 1px solid rgba(256, 256, 256, 0.5);
  }
`

const InputGroup = styled.div`
  margin: 20px 0;
`

const Price = styled.div`
  font-size: 1.3em;

  span {
    font-weight: bold;
  }
`

class MatCreator extends React.Component {
  state = {
    step: 1,
    shape: null,
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
          <h2>Pick a Shape</h2>
          <Answers>
            <Answer>
              <input
                type="radio"
                id="circle"
                value="circle"
                name="shape"
                active={this.state.shape === 'circle'}
                selected={this.state.shape === 'circle'}
                onClick={() => this.handleShapeChange('circle')}
              />
              <Label htmlFor="circle">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g stroke="#FFFFFF" stroke-width="2">
                      <path d="M50,89 C28.4608948,89 11,71.5391052 11,50 C11,28.702089 28.8012779,11 50,11 C71.3811739,11 89,28.8647602 89,50 C89,71.5391052 71.5391052,89 50,89 Z" />
                    </g>
                  </g>
                </svg>
                Circle
              </Label>
            </Answer>
            <Answer>
              <input
                type="radio"
                id="square"
                value="square"
                name="shape"
                active={this.state.shape === 'square'}
                selected={this.state.shape === 'square'}
                onClick={() => this.handleShapeChange('square')}
              />
              <Label htmlFor="square">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g stroke="#FFFFFF" stroke-width="2">
                      <rect width="60" height="60" x="20" y="20" />
                    </g>
                  </g>
                </svg>
                Square
              </Label>
            </Answer>
            <Answer>
              <input
                type="radio"
                id="rectangle"
                value="rectangle"
                name="shape"
                active={this.state.shape === 'rectangle'}
                selected={this.state.shape === 'rectangle'}
                onClick={() => this.handleShapeChange('rectangle')}
              />
              <Label htmlFor="rectangle">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g stroke="#FFFFFF" stroke-width="2">
                      <rect width="80" height="30" x="10" y="35" />
                    </g>
                  </g>
                </svg>
                Rectangle
              </Label>
            </Answer>
          </Answers>
        </Panel>
        {this.state.shape && (
          <Panel>
            <h2>Set Dimensions</h2>
            {this.state.shape === 'rectangle' ||
            this.state.shape === 'square' ? (
              <InputGroup>
                <label htmlFor="width">Width: </label>
                <input
                  type="number"
                  name="width"
                  value={this.state.width}
                  onChange={this.handleWidthChange}
                />
              </InputGroup>
            ) : null}
            {this.state.shape === 'rectangle' && (
              <InputGroup>
                <label htmlFor="height">Height: </label>
                <input
                  type="number"
                  name="height"
                  value={this.state.height}
                  onChange={this.handleHeightChange}
                />
              </InputGroup>
            )}
            {this.state.shape === 'circle' && (
              <InputGroup>
                <label htmlFor="radius">Radius: </label>
                <input
                  type="number"
                  name="radius"
                  value={this.state.radius}
                  onChange={this.handleRadiusChange}
                />
              </InputGroup>
            )}
          </Panel>
        )}
        <Panel>
          {this.state.price && (
            <Price>
              <span>Price</span>: ${this.state.price}.00
            </Price>
          )}
        </Panel>
        <Panel>{this.state.error.message}</Panel>
      </div>
    )
  }
}

export default MatCreator
