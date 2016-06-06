import { CALL_API } from 'redux-api-middleware'

const MANGALIST_REQEUST = 'beehive/mangalist/'
const MANGALIST_SUCCESS = 'beehive/mangalist/success'
const MANGALIST_FAILURE = 'beehive/mangalist/failure'

const initialState = {
  loading: false,
  list: [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MANGALIST_REQEUST:
      return {
        ...state,
        loading: true,
      }
    case MANGALIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      }
    case MANGALIST_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export function load() {
  return {
    [CALL_API]: {
      endpoint: '/api/manga',
      method: 'get',
      types: [
        MANGALIST_REQEUST,
        MANGALIST_SUCCESS,
        MANGALIST_FAILURE,
      ],
    },
  }
}
