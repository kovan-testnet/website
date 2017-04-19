import React, { Component } from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'

import Explorer from './explorer'
import Netstats from './netstats'
import Support from './support'
import KIPs from './kips'

export default class GettingStarted extends Component {
  render () {
    return (
      <Grid.Column>
        <Header textAlign='center' as='h2' content='Quick Links' />
        <Segment>
          <Grid doubling columns={4} divided textAlign='center'>
            <Explorer />
            <Netstats />
            <Support />
            <KIPs />
          </Grid>
        </Segment>
      </Grid.Column>
    )
  }
}
