import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'
import LinkButton from '../link_button'

export default class Faucet extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3'>
          Explorer
          <Header.Subheader>Analyse Transactions</Header.Subheader>
        </Header>
        <LinkButton
          basic
          icon='chain'
          content='Etherscan Explorer'
          to='https://kovan.etherscan.io'
        />
        <br /><br />
        <p>The good people at Etherscan have kindly extended their excellenet block explorer service for use with Kovan.</p>
      </Grid.Column>
    )
  }
}
