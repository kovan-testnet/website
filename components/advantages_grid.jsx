import React, { Component } from 'react'
import { Button, Divider, Grid, Header } from 'semantic-ui-react'

import IconColumn from './icon_column'

export default class AdvantagesGrid extends Component {
  render () {
    return (
      <Grid.Column width={16} textAlign='center' color='blue'>
        <Divider hidden />
        <Header inverted>
          Advantages
          <Header.Subheader content='Why are Developers using Kovan?' />
        </Header>
        <Divider hidden />
        <Grid doubling divided columns={6}>
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
            header='Realiability'
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
        <Divider hidden />
        <Button basic content='Learn More' inverted />
        <Divider hidden />
      </Grid.Column>
    )
  }
}
