import { TOGGLE_VISIBLE, UPDATE_PROFILE } from './types';

const initialState = {
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    isVisible: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type){
    case TOGGLE_VISIBLE:
        return { ...state, isVisible: !state.isVisible };
    case UPDATE_PROFILE:
        return { ...state, ...action.payload }
    default:
        return state;
  }
};
