import React, { Component } from 'react'

class Title extends Component {
  render () {
    return (
      <div onClick={ () => { this.props.selectVideo(this.props.video) } }>
        { this.props.video.title }
      </div>
    )
  }
}

export default Title