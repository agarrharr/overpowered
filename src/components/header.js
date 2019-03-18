import { Link, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

import * as COLORS from '../colors'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: COLORS.BRAND,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <StaticQuery
            query={graphql`
              query {
                logo: file(relativePath: { eq: "logo-white.png" }) {
                  childImageSharp {
                    fluid(maxWidth: 108) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => (
              <a href="https://overpoweredmats.com/">
                <Img
                  fluid={data.logo.childImageSharp.fluid}
                  alt={siteTitle}
                  style={{ width: 108 }}
                />
              </a>
            )}
          />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
