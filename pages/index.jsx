import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import Masthead from '../components/masthead'
import AdvantagesGrid from '../components/advantages_grid'

export default class IndexTemplate extends Component {
  render () {
    return (
      <Grid padded>
        <Masthead />
        <AdvantagesGrid />
        <Grid.Column width={16}>
          <Grid stackable columns={2}>
            <Grid.Column color='green'>
              <h1>Connect</h1>
              <p>Connect info (infura)</p>
            </Grid.Column>
            <Grid.Column color='yellow'>
              <h1>Get Ether</h1>
              <p>Faucet Info</p>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column width={16}>
          <Grid stackable columns={4}>
            <Grid.Column color='pink'>
              <h1>Explorer</h1>
              <p>Tests</p>
            </Grid.Column>
            <Grid.Column color='teal'>
              <h1>Netstats</h1>
              <p>Link to etherscan</p>
            </Grid.Column>
            <Grid.Column color='orange'>
              <h1>Support</h1>
              <p>Gitter</p>
            </Grid.Column>
            <Grid.Column color='violet'>
              <h1>KIPs</h1>
              <p>Link to kips</p>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column width={16} color='purple'>
          <h1>Roadmap</h1>
        </Grid.Column>
      </Grid>
    )
  }
}
