import React, { Component } from 'react'
import { Button, Grid, Container } from 'semantic-ui-react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import IconHeader from '../icon_header'

export default class Masthead extends Component {
  render () {
    return (
      <Grid.Column>
        <div className='dark-area'>
          <Container text>
            <IconHeader
              as='h1'
              inverted
              circular
              icon='subway'
              header='Kovan Testnet'
              subheader='The Fast, Reliable, Progressive Ethereum Testnet'
            />
            <p>Kovan is the first Proof of Authority (PoA) testnet for Ethereum; created and maintained by a consortium of Ethereum developers, to aide the Ethereum developer community.</p>
          </Container>
        </div>
        <Button as={Link} basic content='Read the Proposal' inverted to={prefixLink('/proposal/')} />
      </Grid.Column>
    )
  }
}
