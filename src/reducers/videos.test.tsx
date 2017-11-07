import { isEqual } from "lodash";
import * as test from "tape";
import configureStore from "../configureStore";

import { setSourceIndex, videoFetchRequested, videoFetchSucceeded } from "../actions/videos";
import { selectSourceIndex, selectVideo, selectVideoUrl } from "../selectors/videos";

test("reducers/videos", (t) => {
  t.test("videoFetchRequested should set state url", (assert) => {
    const url = "http://codystebbins.com";
    const store = configureStore({});

    store.dispatch(videoFetchRequested(url));

    assert.true(isEqual(selectVideoUrl(store.getState()), url));
    assert.end();
  });

  t.test("videoFetchSucceeded should set state video", (assert) => {
    const video = { name: "name", sources: [{ id: "id", type: "type", name: "name" }] };
    const store = configureStore({});

    store.dispatch(videoFetchSucceeded(video));

    assert.true(isEqual(selectVideo(store.getState()), video));
    assert.end();
  });

  t.test("setSourceIndex should set state sourceIndex", (assert) => {
    const index = 42;
    const store = configureStore({});

    store.dispatch(setSourceIndex(index));

    assert.true(isEqual(selectSourceIndex(store.getState()), index));
    assert.end();
  });
});
