import React, { Component } from 'react'
import { Segment, List, Header, Grid } from 'semantic-ui-react'
import LinkButton from '../link_button'
import RoadmapItem from './roadmap_item'

export default class Roadmap extends Component {
  render () {
    return (
      <Grid.Column textAlign='center'>
        <Header as='h2'>
          Roadmap
          <Header.Subheader>The future of Kovan</Header.Subheader>
        </Header>
        <Segment textAlign='left'>
          <List divided relaxed>
            <RoadmapItem
              complete
              header='Kovan Launched'
              description='Kovan initially launched with the founding validator set'
            />
            <RoadmapItem
              complete
              header='Smart Contract Hard Fork'
              description='Parity adds support for Smart Contract based validator management'
            />
            <RoadmapItem
              header='Automated Github Faucet Service'
              description='Additional batch of validators to be added using the Smart Contract'
            />
            <RoadmapItem
              header='Validator Onboarding'
              description='Additional batch of validators to be added using the Smart Contract'
            />
            <RoadmapItem
              header='Public Validator Signup'
              description='For additional openness and reliability, an application process will be launched to allow for more trusted validators'
            />
            <RoadmapItem
              header='Protocol Enhancements'
              description='Additional features to improve the stability and functionality of the network'
            />
          </List>
        </Segment>
        <p>For more on the Kovan roadmap, check out the KIP milestones on github:</p>
        <LinkButton basic to='https://github.com/kovan-testnet/kips' icon='github' content='Kovan Github' />
      </Grid.Column>
    )
  }
}

Roadmap.propTypes = {

}
