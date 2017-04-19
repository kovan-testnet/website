import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'
import LinkButton from '../link_button'

export default class Netstats extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3'>
          Netstats
          <Header.Subheader>Monitor Network Status</Header.Subheader>
        </Header>
        <LinkButton
          basic
          icon='bar chart'
          content='Open Netstats'
          to='https://authorities.kovan.network'
        />
        <br /><br />
        <p>View comprehensive realtime statistics about the state of the Kovan testnet on the authorities netstats page.</p>
      </Grid.Column>
    )
  }
}
