import { Action, createAction, handleActions } from "redux-actions";
import { Video } from "../types";

export const SET_SOURCE_INDEX = "SET_SOURCE_INDEX";
export interface SetVideoIndex extends Action<number> {}
export const setSourceIndex =
  createAction(SET_SOURCE_INDEX, (index: number) => index);

export const VIDEO_FETCH_REQUESTED = "VIDEO_FETCH_REQUESTED";
export interface VideoFetchRequested extends Action<string> {}
export const videoFetchRequested =
  createAction(VIDEO_FETCH_REQUESTED, (url: string) => url);

export const VIDEO_FETCH_SUCCEEDED = "VIDEO_FETCH_SUCCEEDED";
export interface VideoFetchSucceeded extends Action<Video> {}
export const videoFetchSucceeded =
  createAction(VIDEO_FETCH_SUCCEEDED, (video: Video) => video);

export type VideoFetchActions = VideoFetchRequested | VideoFetchSucceeded;
