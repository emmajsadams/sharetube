import React, { Component, PropTypes } from 'react';

class Video extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>
      <p>Test</p>
      <p>{JSON.stringify(this.props.video)}</p>
    </div>)
  }
}

Video.defaultProps = {
  video: {}
};

export default Video
