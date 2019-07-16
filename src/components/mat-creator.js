import React from "react"
import styled from "@emotion/styled"
import { StaticQuery } from "gatsby"
import Img from "gatsby-image"

import calculatePrice from "../utils/calculate-price.js"
import Step1 from "./step1.js"
import Step2 from "./step2.js"
import * as COLORS from "../colors"

const Panel = styled.div`
  margin: 40px 0;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:active ~ label {
    opacity: 1;
  }

  input[type="radio"]:checked ~ label {
    opacity: 1;
    background-color: #fff;
    color: #333;
    g {
      stroke: #333;
    }
  }

  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: absolute;
    opacity: 0.01;
  }
  [type="checkbox"]:not(:checked) + label,
  [type="checkbox"]:checked + label {
    position: relative;
    padding-left: 4.5em;
    cursor: pointer;
  }
  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before,
  [type="checkbox"]:not(:checked) + label:after,
  [type="checkbox"]:checked + label:after {
    content: "";
    position: absolute;
  }
  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before {
    left: 0;
    top: -0.1em;
    width: 4em;
    height: 1.85em;
    background: #dddddd;
    border-radius: 1em;
    transition: background-color 0.2s;
  }
  [type="checkbox"]:not(:checked) + label:after,
  [type="checkbox"]:checked + label:after {
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
  [type="checkbox"]:checked + label:before {
    background: #34495e;
  }
  [type="checkbox"]:checked + label:after {
    background: #39d2b4;
    left: 2.4em;
  }

  [type="checkbox"]:checked + label .ui,
  [type="checkbox"]:not(:checked) + label .ui:before,
  [type="checkbox"]:checked + label .ui:after {
    position: absolute;
    left: 0.6em;
    top: 0em;
    width: 6em;
    border-radius: 1em;
    font-size: 0.875em;
    font-weight: bold;
    transition: all 0.2s;
  }
  [type="checkbox"]:not(:checked) + label .ui:before {
    content: "no";
    left: 2.35em;
    top: 0.1em;
    color: #7f8c9a;
  }
  [type="checkbox"]:checked + label .ui:after {
    content: "yes";
    top: 0.2em;
    left: 0.2em;
    color: #39d2b4;
  }
  [type="checkbox"]:focus + label:before {
    border: 1px dashed #777;
    box-sizing: border-box;
    margin-top: -1px;
  }
`

const Checkbox = styled.div`
  display: flex;
`

const Price = styled.div`
  font-size: 1.3em;

  span.price {
    font-weight: bold;
  }

  span.description {
    font-size: 0.75em;
  }
`

const Button = styled.a`
  background-color: ${COLORS.BRAND};
  padding: 20px 30px;
  text-decoration: none;
`

const QuestionMark = styled.span`
  display: flex;
  justify-content: center;
  margin: 0 20px;
  color: #333;
  background-color: white;
  border-radius: 12px;
  height: 24px;
  width: 24px;
  cursor: pointer;

  &:before {
    content: "?";
  }
`

const QuestionAnswer = styled.div`
  max-width: 500px;
  padding: 20px;
  border: 1px solid rgba(256, 256, 256, 0.15);
  border-radius: 4px;
  background-color: white;
  color: #333;
`

class MatCreator extends React.Component {
  state = {
    step: 0,
    shape: null,
    width: "",
    length: "",
    diameter: "",
    isStitched: false,
    price: null,
    errorDimensions: [],
    message: null,
    showStitchingHelp: false,
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

  handleQuestionStitching = () => {
    this.setState(state => ({
      ...state,
      showStitchingHelp: !state.showStitchingHelp,
    }))
  }

  render() {
    const {
      shape,
      errorDimensions,
      width,
      length,
      diameter,
      isStitched,
    } = this.state

    return (
      <div>
        <Panel>
          <Step1
            onShapeChange={this.handleShapeChange}
            onNextStep={this.handleNextStep}
            shape={shape}
          />
        </Panel>
        <Panel>
          <Step2
            shape={shape}
            errorDimensions={errorDimensions}
            width={width}
            length={length}
            diameter={diameter}
            onWidthChange={this.handleWidthChange}
            onLengthChange={this.handleLengthChange}
            onDiameterChange={this.handleDiameterChange}
          />
        </Panel>
        {this.state.shape && this.state.shape !== "other" && (
          <Panel>
            <Checkbox>
              <input
                id="stitched"
                type="checkbox"
                checked={isStitched}
                onClick={this.handleStitchChange}
              />
              <label htmlFor="stitched">
                <span className="ui" />
                <span className="text">Add edge stitching </span>
              </label>
              <QuestionMark onClick={this.handleQuestionStitching} />
              <span>(Toggle to yes for edge stitching)</span>
            </Checkbox>
          </Panel>
        )}
        <Panel>
          {this.state.showStitchingHelp && (
            <QuestionAnswer>
              <p>
                Edge stitching gives the mat a premium finished look that
                prevents the fabric from fraying.
              </p>
              <p>
                When stitching, we round the corners of the mat to allow for a
                clean and consistent stitch pattern.
              </p>
              <StaticQuery
                query={graphql`
                  query {
                    edgeStitching: file(
                      relativePath: { eq: "edge-stitching.jpg" }
                    ) {
                      childImageSharp {
                        fluid(maxWidth: 1000) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                `}
                render={data => (
                  <a href="https://overpoweredmats.com/">
                    <Img
                      fluid={data.edgeStitching.childImageSharp.fluid}
                      alt="Edge stitching"
                      style={{ width: `100%` }}
                    />
                  </a>
                )}
              />
            </QuestionAnswer>
          )}
        </Panel>
        {this.state.price && !isNaN(this.state.price) ? (
          <Panel>
            <Price>
              <span className="price">Price</span>: ${this.state.price}.00{" "}
              <span className="description">
                (Kickstarter discount already applied)
              </span>
            </Price>
          </Panel>
        ) : null}
        {this.state.message ? (
          <Panel dangerouslySetInnerHTML={{ __html: this.state.message }} />
        ) : null}
        {(this.state.price && !isNaN(this.state.price)) ||
        this.state.message ? (
          <Button
            href="https://customgamemats.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Return to Custom Game Mats
          </Button>
        ) : null}
      </div>
    )
  }
}

export default MatCreator
