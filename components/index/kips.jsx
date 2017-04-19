import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import LinkButton from '../link_button'

export default class KIPs extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3'>
          KIPs
          <Header.Subheader>Kovan Improvement Proposals</Header.Subheader>
        </Header>
        <LinkButton
          basic
          icon='github'
          content='View Proposals'
          to='https://github.com/kovan-testnet/kips'
        />
        <br /><br />
        <p>Kovan is evolving and there are exciting bleeding edge features on the Horizon. Learn more and contribute on Github.</p>
      </Grid.Column>
    )
  }
}

KIPs.propTypes = {

}
