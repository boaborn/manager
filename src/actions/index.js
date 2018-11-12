import { EMAIl_CHANGED } from './types'

export const emailChanged = (text) => {
  console.log('in text --->', text)
  return {
    type: EMAIl_CHANGED,
    payload: text
  }
}
