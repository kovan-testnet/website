import React, { PropTypes, Component } from 'react'
import { Icon, Header } from 'semantic-ui-react'

export default class IconHeader extends Component {
  render () {
    const { header, icon, subHeader, as, inverted, circular } = this.props
    return (
      <Header as={as || 'h3'} icon textAlign='time' inverted={inverted}>
        <Icon name={icon} circular={circular} />
        <Header.Content>
          {header}
          {subHeader && <Header.Subheader content={subHeader} />}
        </Header.Content>
      </Header>
    )
  }
}

IconHeader.propTypes = {
  header: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  inverted: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  as: PropTypes.string,
  circular: PropTypes.bool
}
