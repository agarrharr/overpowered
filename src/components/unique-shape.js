import React from 'react'

class UniqueShape extends React.Component {
  state = {
    name: '',
    email: '',
    shape: '',
    ovalStraightEdges: '',
    isOvalRectanglePlusCircles: '',
    ovalHalfCircleRadius: '',
    ovalRectangleLength: '',
    ovalRectangleWidth: '',
    ovalLength: '',
    ovalWidth: '',
    symmetrical: '',
    hexagonSide: '',
    hexagonWidth: '',
    rectangleWidth: '',
    rectangleLength: '',
    rectangleRadius: '',
  }

  handleChange = (key, value) => {
    console.log(key, value)
    this.setState(state => ({
      ...state,
      [key]: value,
    }))
  }

  render() {
    const {
      name,
      email,
      shape,
      ovalStraightEdges,
      isOvalRectanglePlusCircles,
      ovalHalfCircleRadius,
      ovalRectangleLength,
      ovalRectangleWidth,
      ovalLength,
      ovalWidth,
      symmetrical,
      hexagonSide,
      hexagonWidth,
      rectangleWidth,
      rectangleLength,
      rectangleRadius,
    } = this.state

    return (
      <form action="https://docs.google.com/forms/d/e/1FAIpQLSedFkoFBtCd0d10qzeenP4smlDPVVyGEGHLe-_QG_Rrz0nWNw/formResponse">
        <div>Name</div>
        <input
          type="text"
          name="entry.2017703642"
          value={name}
          onChange={e => this.handleChange('name', e.target.value)}
        />

        <div>Email Address</div>
        <input
          type="text"
          name="entry.118465590"
          value={email}
          onChange={e => this.handleChange('email', e.target.value)}
        />

        <div>Shape</div>
        <select
          name="entry.648793187"
          value={shape}
          onChange={e => this.handleChange('shape', e.target.value)}
        >
          <option value="">Select a shape</option>
          <option value="oval">Oval</option>
          <option value="hexagon">Hexagon</option>
          <option value="octagon">Octagon</option>
          <option value="rectangle">Rounded Corner Rectangle</option>
          <option value="other">Other</option>
        </select>

        {shape === 'oval' && (
          <React.Fragment>
            <div>Does your oval have any straight edges?</div>
            <input
              type="radio"
              id="ovalStraightEdgesYes"
              name="entry.1582410584"
              value="Yes"
              checked={ovalStraightEdges === 'Yes'}
              onChange={e =>
                this.handleChange('ovalStraightEdges', e.target.value)
              }
            />
            <label htmlFor="ovalStraightEdgesYes">Yes</label>
            <br />
            <input
              type="radio"
              id="ovalStraightEdgesNo"
              name="entry.1582410584"
              value="No"
              checked={ovalStraightEdges === 'No'}
              onChange={e =>
                this.handleChange('ovalStraightEdges', e.target.value)
              }
            />
            <label htmlFor="ovalStraightEdgesNo">No</label>

            {ovalStraightEdges &&
              (ovalStraightEdges === 'Yes' ? (
                <React.Fragment>
                  <div>
                    Are you able to measure a rectangle in the middle of your
                    table and a half circle at each end of your table?
                  </div>
                  <input
                    type="radio"
                    id="isOvalRectanglePlusCirclesYes"
                    name="entry.360888769"
                    value="Yes"
                    checked={isOvalRectanglePlusCircles === 'Yes'}
                    onChange={e =>
                      this.handleChange(
                        'isOvalRectanglePlusCircles',
                        e.target.value
                      )
                    }
                  />
                  <label htmlFor="isOvalRectanglePlusCirclesYes">Yes</label>
                  <br />
                  <input
                    type="radio"
                    id="isOvalRectanglePlusCirclesNo"
                    name="entry.360888769"
                    value="No"
                    checked={isOvalRectanglePlusCircles === 'No'}
                    onChange={e =>
                      this.handleChange(
                        'isOvalRectanglePlusCircles',
                        e.target.value
                      )
                    }
                  />
                  <label htmlFor="isOvalRectanglePlusCirclesNo">No</label>

                  {isOvalRectanglePlusCircles &&
                    (isOvalRectanglePlusCircles === 'Yes' ? (
                      <React.Fragment>
                        <div>Half circle radius</div>
                        <input
                          type="text"
                          name="entry.332731374"
                          value={ovalHalfCircleRadius}
                          onChange={e =>
                            this.handleChange(
                              'ovalHalfCircleRadius',
                              e.target.value
                            )
                          }
                        />

                        <div>Rectangle Length</div>
                        <input
                          type="text"
                          name="entry.1448227414"
                          value={ovalRectangleLength}
                          onChange={e =>
                            this.handleChange(
                              'ovalRectangleLength',
                              e.target.value
                            )
                          }
                        />

                        <div>Rectangle Width</div>
                        <input
                          type="text"
                          name="entry.1812424524"
                          value={ovalRectangleWidth}
                          onChange={e =>
                            this.handleChange(
                              'ovalRectangleWidth',
                              e.target.value
                            )
                          }
                        />
                      </React.Fragment>
                    ) : (
                      <div>
                        I’m sorry. We are unable to process your order at this
                        time.
                      </div>
                    ))}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div>Oval width</div>
                  <input
                    type="text"
                    name="entry.1013160945"
                    value={ovalWidth}
                    onChange={e =>
                      this.handleChange('ovalWidth', e.target.value)
                    }
                  />

                  <div>Oval length</div>
                  <input
                    type="text"
                    name="entry.589199326"
                    value={ovalLength}
                    onChange={e =>
                      this.handleChange('ovalLength', e.target.value)
                    }
                  />
                </React.Fragment>
              ))}
          </React.Fragment>
        )}

        {(shape === 'hexagon' || shape === 'octagon') && (
          <React.Fragment>
            <div>Is your table perfectly symmetrical?</div>
            <input
              type="radio"
              id="symmetricalYes"
              name="entry.288952006"
              value="Yes"
              checked={symmetrical === 'Yes'}
              onChange={e => this.handleChange('symmetrical', e.target.value)}
            />
            <label htmlFor="symmetricalYes">Yes</label>
            <br />
            <input
              type="radio"
              id="symmetricalNo"
              name="entry.288952006"
              value="No"
              checked={symmetrical === 'No'}
              onChange={e => this.handleChange('symmetrical', e.target.value)}
            />
            <label htmlFor="symmetricalNo">No</label>
            {symmetrical === 'Yes' ? (
              <React.Fragment>
                <div>
                  Measurement of one side{' '}
                  {shape === 'hexagon'
                    ? '(1 of the 6 sides of the hexagon)'
                    : '(1 of the 8 sides of the octagon)'}
                </div>
                <input
                  type="text"
                  name="entry.925102677"
                  value={hexagonSide}
                  onChange={e =>
                    this.handleChange('hexagonSide', e.target.value)
                  }
                />

                <div>Width measurement</div>
                <input
                  type="text"
                  name="entry.1537892205"
                  value={hexagonWidth}
                  onChange={e =>
                    this.handleChange('hexagonWidth', e.target.value)
                  }
                />
              </React.Fragment>
            ) : (
              <div>
                I’m sorry. We are unable to process your order at this time.
              </div>
            )}
          </React.Fragment>
        )}

        {shape === 'rectangle' && (
          <React.Fragment>
            <div>Width</div>
            <input
              type="text"
              name="entry.1178931324"
              value={rectangleWidth}
              onChange={e =>
                this.handleChange('rectangleWidth', e.target.value)
              }
            />

            <div>Length</div>
            <input
              type="text"
              name="entry.902514703"
              value={rectangleLength}
              onChange={e =>
                this.handleChange('rectangleLength', e.target.value)
              }
            />

            <div>What is the radius of your rounded corners?</div>
            <input
              type="text"
              name="entry.261651380"
              value={rectangleRadius}
              onChange={e =>
                this.handleChange('rectangleRadius', e.target.value)
              }
            />
          </React.Fragment>
        )}

        <br />
        <input type="submit" value="Get Price" />
      </form>
    )
  }
}

export default UniqueShape
