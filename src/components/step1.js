import React from 'react'
import styled from '@emotion/styled'

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

const Answers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

const Answer = styled.div`
  font-size: 22px;
`

class Step1 extends React.Component {
  render() {
    const { onShapeChange, shape } = this.props

    return (
      <div>
        <h2>Pick a Shape</h2>
        <Answers>
          <Answer>
            <input
              type="radio"
              id="circle"
              value="circle"
              name="shape"
              selected={shape === 'circle'}
              onClick={() => onShapeChange('circle')}
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
              selected={shape === 'square'}
              onClick={() => onShapeChange('square')}
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
              selected={shape === 'rectangle'}
              onClick={() => onShapeChange('rectangle')}
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
              selected={shape === 'other'}
              onClick={() => onShapeChange('other')}
            />
            <Label htmlFor="other">
              <svg viewBox="-10 -10 110 110" xmlns="http://www.w3.org/2000/svg">
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
      </div>
    )
  }
}

export default Step1
