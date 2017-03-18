import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class DocsTemplate extends Component {
  handleTopicChange (e) {
    return this.context.router.push(e.target.value)
  }
  render () {
    const childPages = config.docPages.map((p) => {
      const page = this.props.route.pages.find((_p) => _p.path === p)
      return {
        title: page.data.title,
        path: page.path
      }
    })
    const docPages = childPages.map((child) => {
      const isActive = prefixLink(child.path) === this.props.location.pathname
      return (
        <li key={child.path}>
          <Link to={prefixLink(child.path)}>
            {isActive ? <strong>{child.title}</strong> : child.title}
          </Link>
        </li>
      )
    })
    return (
      <div>
        <ul>{docPages}</ul>
        <br />
        {this.props.children}
      </div>
    )
  }
}

DocsTemplate.contextTypes = {
  router: PropTypes.object.isRequired
}

DocsTemplate.propTypes = {
  route: PropTypes.object,
  location: PropTypes.object,
  children: PropTypes.node
}
