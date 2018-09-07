import React, { Component } from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'

import IconColumn from '../icon_column'

export default class Advantages extends Component {
  render () {
    return (
      <Grid.Column>
        <Header inverted textAlign='center' as='h2'>
          Advantages
          <Header.Subheader content='Why are Ethereum developers using Kovan?' />
        </Header>
        <Divider hidden />
        <Grid doubling divided columns={6} textAlign='center'>
          <IconColumn
            header='Speed'
            subHeader='Consistent 4-second blocktimes for a superior developer experience'
            icon='lightning'
            inverted
          />
          <IconColumn
            header='Resilience'
            subHeader='Proof of Authority prevents attacks from hindering development'
            icon='shield'
            inverted
          />
          <IconColumn
            header='Reliability'
            subHeader='Consortium membership enforced by smart contract logic'
            icon='users'
            inverted
          />
          <IconColumn
            header='Free'
            subHeader='Get Kovan ether using multiple faucet services'
            icon='bar'
            inverted
          />
          <IconColumn
            header='Infrastructure'
            subHeader='Block explorer powered by Etherscan and RPC nodes from Infura'
            icon='chain'
            inverted
          />
          <IconColumn
            header='Innovation'
            subHeader='Get early access to experimental protocol upgrades'
            icon='space shuttle'
            inverted
          />
        </Grid>
      </Grid.Column>
    )
  }
}
