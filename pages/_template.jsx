import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import { config } from 'config'

import '../semantic/dist/semantic.css'

export default class PagesTemplate extends Component {
  render () {
    return (
      <div>
        <Link to={prefixLink('/')}>{config.siteTitle}</Link>
        <hr />
        <ul>
          <li>
            <Link to={prefixLink('/examples/')}>Examples</Link>
          </li>
          <li>
            <Link to={prefixLink('/docs/')}>Documentation</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    )
  }
}

PagesTemplate.propTypes = {
  children: PropTypes.object
}
