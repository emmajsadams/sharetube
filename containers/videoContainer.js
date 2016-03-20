import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Video from '../components/video'
import { fetchVideo } from '../actions/video'

class VideoContainer extends Component {
  constructor(props) {
    super(props)

    // TODO: Correct place to dispatch this?
    this.props.dispatch(fetchVideo('https://raw.githubusercontent.com/codystebbins/dstruct/master/tsd.json'))
  }

  render() {
    return <Video video={this.props.video} />
  }
}

function mapStateToProps(state) {
  debugger;
  return { video: state.video }
}

//export default connect(mapStateToProps)(VideoContainer)
export default connect(state => state)(VideoContainer)
