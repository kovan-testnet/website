import React, { Component } from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'
import LinkButton from '../link_button'

export default class Connect extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3' inverted>
          1. Connect to Kovan
          <Header.Subheader>Kovan RPC Services</Header.Subheader>
        </Header>
        <p>There are a few options for connecting to Kovan. Here are the two most popular:</p>
        <Header as='h4' content='Install Parity' inverted />
        <p>
          Parity is a popular Ethereum client that is easily configurable to connect to Kovan.{' '}
          You can connect to Kovan by starting Parity with the following flags:
        </p>
        <pre><code>parity --network kovan</code></pre>
        <Button.Group>
          <LinkButton
            basic inverted
            to='https://parity.io'
            content='ParityTech Website'
          />
        </Button.Group>
        <Header as='h4' content='Use Infura' inverted />
        <p>You can also use Infura to connect to Kovan by specifying the following RPC URL:</p>
        <pre><code>https://kovan.infura.io</code></pre>
        <LinkButton
          basic inverted
          to='https://infura.io'
          content='Infura Website'
        />
      </Grid.Column>
    )
  }
}
