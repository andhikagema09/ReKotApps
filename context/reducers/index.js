import {storeLoginData, storeQrData, resetQrData} from '../actions';

export const INITIAL_STATE = {
  count: 0,
  loginUseCase: {
    data: undefined,
  },
  qrUseCase: {
    data: undefined,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case storeLoginData:
      return {
        ...state,
        loginUseCase: {
          data: action.data,
        },
      };
    case resetQrData:
      return {
        ...state,
        qrUseCase: {
          data: undefined,
        },
      };
    case storeQrData:
      return {
        ...state,
        qrUseCase: {
          data: action.data,
        },
      };
  }
};
