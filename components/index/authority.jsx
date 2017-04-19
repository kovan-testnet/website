import React, { PropTypes, Component } from 'react'
import { Grid } from 'semantic-ui-react'

export default class Authority extends Component {
  render () {
    const { name, image, link } = this.props
    return (
      <Grid.Column>
        <a href={link} title={name} target='_blank' >
          <img src={image} alt={name} style={{ maxWidth: '100%' }} />
        </a>
      </Grid.Column>
    )
  }
}

Authority.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
