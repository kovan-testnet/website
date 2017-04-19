import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

import LinkButton from '../link_button'

export default class Faucet extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3' inverted>
          2. Get Free KETH
          <Header.Subheader>Kovan Faucet Services</Header.Subheader>
        </Header>
        <p>"Faucets" allow you to acquire Kovan Ether without the need for mining.</p>
        <Header as='h4' content='Icarus Faucet' inverted />
        <p>ParityTech has provided an automated SMS-verification Faucet service that allows you get a daily allowance of KETH.</p>
        <LinkButton to='faucet' content='Sign up for Icarus' basic inverted />
        <Header as='h4' content='Gitter Chat' inverted />
        <p>
          You can also request KETH in the 'faucet' Gitter channel.{' '}
          Prominent contributers can receive larger amounts of KETH.
        </p>
        <LinkButton to='https://gitter.im/kovan-testnet/faucet' content='Gitter Faucet' basic inverted />
        <Header as='h4' content='Alternative Faucets' inverted />
        <p>More Faucet services will become available over time. Watch this space!</p>
      </Grid.Column>
    )
  }
}
