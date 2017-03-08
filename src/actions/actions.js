import request from 'superagent';

export const REQUEST_REDDITS = 'REQUEST_REDDITS';
const API_URL = "https://www.reddit.com/r/writingprompts/top.json?limit=8"

export function requestSubreddits(term = null) {
  const data = request.get(`${API_URL}`)
  console.log(term);
  return {
    type: REQUEST_REDDITS,
    payload: data
  }
}