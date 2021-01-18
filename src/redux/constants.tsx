export const SIGN_IN: string = "SIGN_IN"
export const SIGN_UP: string = "SIGN_UP"
export const SIGN_OUT: string = "SIGN_OUT"
export const LOADING: string = "LOADING"
export const MSG_ERROR: string = "MSG_ERROR"

const makeType = (mod: string) => (type: string) => `${mod}/${type}`

const type = makeType('auth')

export const START_FECH = type('START_FECH')
export const SUCCES_FECH = type('SUCCES_FECH')
export const ERROR_FECH = type('ERROR_FECH')