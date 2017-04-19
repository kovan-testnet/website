import React, { Component } from 'react'
import { Icon, Header, Button, Grid, Container } from 'semantic-ui-react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import { config } from 'config'

export default class Masthead extends Component {
  render () {
    return (
      <Grid.Column>
        <div className='dark-area'>
          <Container text>
            <Header as={'h1'} icon inverted>
              <Icon name={'subway'} inverted circular color={config.theme} />
              <Header.Content>
                Kovan Testnet
                <Header.Subheader content='The Fast and Reliable Ethereum Test Chain' />
              </Header.Content>
            </Header>
            <p>Kovan is a Proof of Authority (PoA) publicly accessible blockchain for Ethereum; created and maintained by a consortium of Ethereum developers, to aide the Ethereum developer community.</p>
          </Container>
        </div>
        <Button as={Link} content='Read the Proposal' inverted to={prefixLink('/proposal/')} />
      </Grid.Column>
    )
  }
}
