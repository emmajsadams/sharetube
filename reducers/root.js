import { combineReducers } from 'redux'
import { handleAction } from 'redux-actions';

import {
  FETCH_VIDEO
} from '../actions/video'


const video = handleAction(FETCH_VIDEO, {
  next: (state, action) => ({
    video: action.payload
  }),
  throw: (state, action) => ({
    video: action.payload
  })
});

export default video
