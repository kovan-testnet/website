import React, { Component } from 'react'
import { Segment, Header, Grid } from 'semantic-ui-react'
import Authority from './authority'
import LinkButton from '../link_button'

import digix from '../../assets/logos/digix.png'
import parity from '../../assets/logos/parity.png'
import etherscan from '../../assets/logos/etherscan.png'
import attores from '../../assets/logos/attores.png'
import melonport from '../../assets/logos/melonport.png'
import maker from '../../assets/logos/maker.png'
import tenx from '../../assets/logos/tenx.png'
import gridsingularity from '../../assets/logos/gridsingularity.png'
import blockchainindustries from '../../assets/logos/blockchainindustries.png'

export default class Faucet extends Component {
  render () {
    return (
      <Grid.Column textAlign='center'>
        <Header as='h2'>
          Authorities
          <Header.Subheader>Who validates blocks on Kovan?</Header.Subheader>
        </Header>
        <Segment>
          <Grid columns={3} doubling verticalAlign='middle' centered>
            <Authority image={attores} name='Attores' link='https://attores.com' />
            <Authority image={blockchainindustries} name='Blockchain Industries' link='https://blockchains.industries/' />
            <Authority image={digix} name='Digix Global' link='https://digix.io' />
            <Authority image={etherscan} name='Etherscan' link='https://etherscan.io' />
            <Authority image={gridsingularity} name='GridSingularity' link='https://gridsingularity.com' />
            <Authority image={maker} name='MakerDAO' link='https://makerdao.com' />
            <Authority image={melonport} name='Melonport' link='https://melonport.com' />
            <Authority image={parity} name='Parity Technologies' link='https://pairty.io' />
            <Authority image={tenx} name='TenX' link='https://tenx.tech' />
            <Grid.Column textAlign='center'>
              ...more to come!
            </Grid.Column>
          </Grid>
        </Segment>
        <p>Soon, anyone will be able to apply to become a validator on Kovan!</p>
        <LinkButton basic to='https://twitter.com/kovan_testnet' icon='twitter' content='Follow @kovan_testnet for updates' />
      </Grid.Column>
    )
  }
}

Faucet.propTypes = {

}
