
import React, { Component } from 'react'

export class Item extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        {this.props.item.title}
      </div>
    )
  }
}

export default Item