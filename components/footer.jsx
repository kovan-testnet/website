import React, { PropTypes, Component } from 'react'
import { Grid } from 'semantic-ui-react'

export default class Footer extends Component {
  render () {
    return (
      <Grid style={{ marginTop: '0' }}>
        <Grid.Column width={16} color='grey' inverted>
          <Grid padded>
            <Grid.Column width={8}>
              I am a footer
            </Grid.Column>
            <Grid.Column width={8} textAlign='right'>
              I am a footer
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    )
  }
}

Footer.propTypes = {

}
