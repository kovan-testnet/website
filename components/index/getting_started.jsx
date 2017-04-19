import React, { Component } from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'

import Connect from './connect'
import Faucet from './faucet'
import Develop from './develop'

export default class GettingStarted extends Component {
  render () {
    return (
      <Grid.Column>
        <Header inverted textAlign='center' as='h2'>
          Get Started
          <Header.Subheader>Deploy Ethereum Smart Contracts on Kovan Today!</Header.Subheader>
        </Header>
        <Divider hidden />
        <Grid stackable columns={3}>
          <Connect />
          <Faucet />
          <Develop />
        </Grid>
      </Grid.Column>
    )
  }
}
