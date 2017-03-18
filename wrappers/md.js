import React, { PropTypes, Component } from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class Mardkdown extends Component {
  render () {
    const post = this.props.route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <div className='markdown'>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    )
  }
}

Mardkdown.propTypes = {
  route: PropTypes.object
}
