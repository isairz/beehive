import { CALL_API } from 'redux-api-middleware'

const UPLOAD_REQEUST = 'beehive/upload/'
const UPLOAD_SUCCESS = 'beehive/upload/success'
const UPLOAD_FAIL = 'beehive/upload/fail'

const initialState = {
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPLOAD_REQEUST:
      return {
        ...state,
        uploading: true,
      }
    case UPLOAD_SUCCESS:
      return {
        ...state,
        uploading: false,
      }
    case UPLOAD_FAIL:
      return {
        ...state,
        uploading: false,
      }
    default:
      return state
  }
}

export function upload(formData) {
  return {
    [CALL_API]: {
      endpoint: '/api/upload',
      method: 'post',
      body: formData,
      types: [UPLOAD_REQEUST, UPLOAD_SUCCESS, UPLOAD_FAIL],
    },
  }
}
