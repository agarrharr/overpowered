import React from 'react'
import styled from '@emotion/styled'

import calculatePrice from '../utils/calculate-price.js'

const Panel = styled.div`
  margin: 40px 0;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:active ~ label {
    opacity: 1;
  }

  input[type='radio']:checked ~ label {
    opacity: 1;
    background-color: #fff;
    color: #333;
    g {
      stroke: #333;
    }
  }

  [type='checkbox']:not(:checked),
  [type='checkbox']:checked {
    position: absolute;
    opacity: 0.01;
  }
  [type='checkbox']:not(:checked) + label,
  [type='checkbox']:checked + label {
    position: relative;
    padding-left: 4.5em;
    cursor: pointer;
  }
  [type='checkbox']:not(:checked) + label:before,
  [type='checkbox']:checked + label:before,
  [type='checkbox']:not(:checked) + label:after,
  [type='checkbox']:checked + label:after {
    content: '';
    position: absolute;
  }
  [type='checkbox']:not(:checked) + label:before,
  [type='checkbox']:checked + label:before {
    left: 0;
    top: -0.1em;
    width: 4em;
    height: 1.85em;
    background: #dddddd;
    border-radius: 1em;
    transition: background-color 0.2s;
  }
  [type='checkbox']:not(:checked) + label:after,
  [type='checkbox']:checked + label:after {
    width: 1.4em;
    height: 1.4em;
    transition: all 0.2s;
    border-radius: 50%;
    background: #7f8c9a;
    top: 0.12em;
    left: 0.24em;
  }
  .text {
    display: inline-block;
    vertical-align: middle;
  }

  /* on checked */
  [type='checkbox']:checked + label:before {
    background: #34495e;
  }
  [type='checkbox']:checked + label:after {
    background: #39d2b4;
    left: 2.4em;
  }

  [type='checkbox']:checked + label .ui,
  [type='checkbox']:not(:checked) + label .ui:before,
  [type='checkbox']:checked + label .ui:after {
    position: absolute;
    left: 0.6em;
    top: 0em;
    width: 6em;
    border-radius: 1em;
    font-size: 0.875em;
    font-weight: bold;
    transition: all 0.2s;
  }
  [type='checkbox']:not(:checked) + label .ui:before {
    content: 'no';
    left: 2.35em;
    top: 0.1em;
    color: #7f8c9a;
  }
  [type='checkbox']:checked + label .ui:after {
    content: 'yes';
    top: 0.2em;
    left: 0.2em;
    color: #39d2b4;
  }
  [type='checkbox']:focus + label:before {
    border: 1px dashed #777;
    box-sizing: border-box;
    margin-top: -1px;
  }
`

const Checkbox = styled.div`
  display: flex;
`

const Description = styled.p`
  font-size: 1em;
  color: #aaa;
  margin-top: -1.45rem;
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
  length: 100%;
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
  input {
    border-color: ${({ error }) => (error ? 'red' : 'inherit')};
  }
  span {
    color: ${({ error }) => (error ? 'red' : 'inherit')};
  }
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
    length: '',
    diameter: '',
    isStitched: false,
    price: null,
    errorDimensions: [],
    message: null,
  }

  handleShapeChange = shape => {
    const { price, errorDimensions, message } = calculatePrice({
      shape,
      width: this.state.width,
      length: this.state.length,
      diameter: this.state.diameter,
      isStitched: this.state.isStitched,
    })

    this.setState(state => ({
      ...state,
      shape,
      price,
      errorDimensions,
      message,
    }))
  }

  handleWidthChange = event => {
    const width = event.target.value

    const { price, errorDimensions, message } = calculatePrice({
      shape: this.state.shape,
      width,
      length: this.state.length,
      isStitched: this.state.isStitched,
    })

    this.setState(state => ({
      ...state,
      width,
      price,
      errorDimensions,
      message,
    }))
  }

  handleLengthChange = event => {
    const length = event.target.value

    const { price, errorDimensions, message } = calculatePrice({
      shape: this.state.shape,
      width: this.state.width,
      length,
      isStitched: this.state.isStitched,
    })

    this.setState(state => ({
      ...state,
      length,
      price,
      errorDimensions,
      message,
    }))
  }

  handleDiameterChange = event => {
    const diameter = event.target.value

    const { price, errorDimensions, message } = calculatePrice({
      shape: this.state.shape,
      diameter,
      isStitched: this.state.isStitched,
    })

    this.setState(state => ({
      ...state,
      diameter,
      price,
      errorDimensions,
      message,
    }))
  }

  handleStitchChange = () => {
    const isStitched = !this.state.isStitched

    const { price, errorDimensions, message } = calculatePrice({
      shape: this.state.shape,
      width: this.state.width,
      length: this.state.length,
      diameter: this.state.diameter,
      isStitched,
    })

    this.setState(state => ({
      ...state,
      isStitched,
      price,
      errorDimensions,
      message,
    }))
  }

  render() {
    console.log(this.state.price)
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
                selected={this.state.shape === 'circle'}
                onClick={() => this.handleShapeChange('circle')}
              />
              <Label htmlFor="circle">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#FFFFFF" fill="none">
                    <path d="M50,89 C28.4608948,89 11,71.5391052 11,50 C11,28.702089 28.8012779,11 50,11 C71.3811739,11 89,28.8647602 89,50 C89,71.5391052 71.5391052,89 50,89 Z" />
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
                selected={this.state.shape === 'square'}
                onClick={() => this.handleShapeChange('square')}
              />
              <Label htmlFor="square">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" fill="none">
                    <g stroke="#FFFFFF">
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
                selected={this.state.shape === 'rectangle'}
                onClick={() => this.handleShapeChange('rectangle')}
              />
              <Label htmlFor="rectangle">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" fill="none">
                    <g stroke="#FFFFFF">
                      <rect width="80" height="30" x="10" y="35" />
                    </g>
                  </g>
                </svg>
                Rectangle
              </Label>
            </Answer>
            <Answer>
              <input
                type="radio"
                id="other"
                value="other"
                name="shape"
                selected={this.state.shape === 'other'}
                onClick={() => this.handleShapeChange('other')}
              />
              <Label htmlFor="other">
                <svg
                  viewBox="-10 -10 110 110"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="none" fill="none">
                    <g stroke="#FFFFFF">
                      <polygon points="90.375,39.25 67.875,78.221143 22.875,78.221143 0.375,39.25 22.875,0.278857 67.875,0.278857 90.375,39.25" />
                    </g>
                  </g>
                </svg>
                Other
              </Label>
            </Answer>
          </Answers>
        </Panel>
        {this.state.shape && this.state.shape !== 'other' && (
          <Panel>
            <h2>Set Dimensions</h2>
            <Description>(in inches)</Description>
            {this.state.shape === 'rectangle' ||
            this.state.shape === 'square' ? (
              <InputGroup error={this.state.errorDimensions.includes('width')}>
                <label htmlFor="width">Width: </label>
                <input
                  type="number"
                  name="width"
                  value={this.state.width}
                  onChange={this.handleWidthChange}
                />{' '}
                <span>(Max 50")</span>
              </InputGroup>
            ) : null}
            {this.state.shape === 'rectangle' && (
              <InputGroup error={this.state.errorDimensions.includes('length')}>
                <label htmlFor="length">Length: </label>
                <input
                  type="number"
                  name="length"
                  value={this.state.length}
                  onChange={this.handleLengthChange}
                />{' '}
                <span>(Max 96")</span>
              </InputGroup>
            )}
            {this.state.shape === 'circle' && (
              <InputGroup
                error={this.state.errorDimensions.includes('diameter')}
              >
                <label htmlFor="diameter">Diameter: </label>
                <input
                  type="number"
                  name="diameter"
                  value={this.state.diameter}
                  onChange={this.handleDiameterChange}
                />{' '}
                <span>(Max 50")</span>
              </InputGroup>
            )}
          </Panel>
        )}
        {this.state.shape && this.state.shape !== 'other' && (
          <Panel>
            <Checkbox>
              <input
                id="stitched"
                type="checkbox"
                selected={this.state.isStitched}
                onClick={this.handleStitchChange}
              />
              <label htmlFor="stitched">
                <span className="ui" />
                <span className="text">Add edge stitching</span>
              </label>
            </Checkbox>
          </Panel>
        )}
        {this.state.price && !isNaN(this.state.price) ? (
          <Panel>
            <Price>
              <span>Price</span>: ${this.state.price}.00
            </Price>
          </Panel>
        ) : null}
        <Panel>{this.state.message}</Panel>
      </div>
    )
  }
}

export default MatCreator
