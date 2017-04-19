import React, { Component } from 'react'
import { Icon, Container, Grid } from 'semantic-ui-react'

export default class Footer extends Component {
  render () {
    return (
      <Grid style={{ marginTop: '0' }}>
        <Grid.Column width={16} color='grey'>
          <Container>
            <Grid>
              <Grid.Column width={8}>
                <Icon name='birthday' />
                Kovan
                {' '}
                <a
                  href='http://www.ibtimes.co.uk/parity-pushes-new-ethereum-testnet-kovan-after-spam-attacks-1609901'
                  target='_blank'
                >
                  was born
                </a>
                {' '}
                on 6/3/17
              </Grid.Column>
              <Grid.Column width={8} textAlign='right'>
                <Icon name='github' />
                <Icon name='twitter' />
                <Icon name='mail outline' />
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}
