import React, { Component } from 'react'
import { Button, Divider, Grid, Container } from 'semantic-ui-react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import IconHeader from './icon_header'

export default class Masthead extends Component {
  render () {
    return (
      <Grid.Column width={16} color='red'>
        <Divider hidden />
        <IconHeader
          as='h1'
          header='Kovan Testnet'
          subHeader='The Fast, Reliable and Progressive Etheruem Testnet'
          icon='subway'
          circular
          inverted
        />
        <Container text textAlign='center'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <Divider hidden />
          <Button as={Link} basic content='Read the Proposal' inverted to={prefixLink('/proposal/')} />
          <Button basic content='Chat on Gitter' inverted />
          <Divider hidden />
        </Container>
      </Grid.Column>
    )
  }
}
