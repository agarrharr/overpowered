import React from 'react'
import styled from '@emotion/styled'

import * as COLORS from '../colors'

const Container = styled.div`
  background-color: ${COLORS.BRAND};
  padding: 20px 30px;
  text-decoration: none;
`

class Button extends React.Component {
  render() {
    const { disabled, url, label, onClick } = this.props

    return (
      <Container>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ) : (
          <button disabled={disabled ? 'disabled' : ''} onClick={onClick}>
            {label}
          </button>
        )}
      </Container>
    )
  }
}

export default Button
