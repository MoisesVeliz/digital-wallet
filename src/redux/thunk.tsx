import AsyncStorage from '@react-native-async-storage/async-storage';
import { loading, signin, msgError } from './actions';

const userRegistered = {
    userName: 'moises',
    password: '1234'
}

const userToken = '12345678900000000'

export const login =  (loginInput: {user: string, password: string}) => async (dispatch: any, getState: any) => {
    dispatch(loading(true))
    try {
        const res  = await fetch('https://jsonplaceholder.typicode.com/comments')
        const json = await res.json()
        console.log(loginInput)
        if (loginInput.user === userRegistered.userName && loginInput.password === userRegistered.password) { // response success checking logic could differ
            dispatch(signin({...loginInput, userToken: userToken}))
            AsyncStorage.setItem('userToken', userToken)
            dispatch(loading(false))
        } else {
            dispatch(loading(false))
            dispatch(msgError('Credenciales no excisten o son invalidad'))
        }
    } catch (error) {
        console.log(error)
    }
}