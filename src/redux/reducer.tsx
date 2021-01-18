import AsyncStorage from '@react-native-async-storage/async-storage';
import { Action } from '../Model/action.interface';
import { LOADING, MSG_ERROR, SIGN_IN, SIGN_OUT, SIGN_UP } from './constants';

const initialState = {
  userToken: null,
  isSignout: false, 
  isLoading: true
};

const reducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case SIGN_IN:
      return {
        ...state,
        ...action.payload,
        isSignout: false,
      };
    case LOADING: 
      return{
        ...state,
        ...action.payload
      }
    case SIGN_OUT:
      AsyncStorage.clear()
      return{
        ...state,
        userToken: null,
        isSignout: true,
        showAlert: false
      }
    case MSG_ERROR:
      return{
        ...state,
        ...action.payload,
        showAlert: true
      }
    default:
      return{
        ...state,
        showAlert: false
      }
  }
}
export default reducer;