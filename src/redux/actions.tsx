import { SIGN_IN, SIGN_OUT, SIGN_UP, LOADING, MSG_ERROR, START_FECH, ERROR_FECH } from './constants';

export const signin = (content: any) => ({
    type: SIGN_IN,
    payload: content
})

export const signout = () => ({
    type: SIGN_OUT
})

export const loading = (e: boolean) => ({
    type: LOADING,
    payload: {isLoading: e}
})

export const msgError = (msg: string) => ({
    type: MSG_ERROR,
    payload: {msgError: msg}
})

// makerAccionCreation
const mac = (type: any, ...argNames: any) => (...args: any) => {

    const action = { type }

    argNames.forEach((arg: any, idx: number) => {
        action[argNames[idx]] = args[idx]
    });

    return action;
}

export const startFech = mac(START_FECH)
export const succesFech = mac(START_FECH, 'payload')
export const errorFech = mac(ERROR_FECH, 'error')