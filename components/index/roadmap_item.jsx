import React, { PropTypes, Component } from 'react'
import { List } from 'semantic-ui-react'

export default class RoadmapItem extends Component {
  render () {
    const { complete, header, description } = this.props
    return (
      <List.Item>
        <List.Icon name={complete ? 'checkmark' : 'ellipsis horizontal'} color={complete ? 'green' : undefined} />
        <List.Content>
          <List.Header content={header} />
          <List.Description content={description} />
        </List.Content>
      </List.Item>

    )
  }
}

RoadmapItem.propTypes = {
  complete: PropTypes.bool,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
