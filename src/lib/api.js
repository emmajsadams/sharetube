import fetch from 'isomorphic-fetch'

export const fetchJson = url => fetch(url).then(r => r.json())
