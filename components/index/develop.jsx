import React, { Component } from 'react'
import { Header, Grid, List } from 'semantic-ui-react'
import LinkButton from '../link_button'

const trufflConfig = `kovan: {
  host: 'localhost',
  port: 8545,
  network_id: '42'
}`

export default class Faucet extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3' inverted>
          3. Develop!
          <Header.Subheader>Deploy your Contracts</Header.Subheader>
        </Header>
        <p>Once you have a Connection and some KETH, you're ready to go!</p>
        <p>The Ethereum development ecosystem is ever-growing and you can use many of the same tools that you're already familiar with.</p>
        <Header as='h4' content='Truffle' inverted />
        <p>Truffle is the most popular development framework for Ethereum. You can connect to Kovan in one of the following ways:</p>
        <List ordered inverted>
          <List.Item>
            Use Parity and add the config to <code>truffle.js</code>:
            <pre>
              <code>{trufflConfig}</code>
            </pre>
          </List.Item>
          <List.Item>
            Use a
            {' '}
            <a href='https://github.com/trufflesuite/truffle-hdwallet-provider' target='_blank'>
              ZeroClient Provider
            </a>
            {' '}
            to connect to a remote RPC node such as Infura
          </List.Item>
        </List>
        <LinkButton
          basic
          inverted
          content='Truffle Framework'
          to='https://truffleframework.com'
        />
      </Grid.Column>
    )
  }
}
