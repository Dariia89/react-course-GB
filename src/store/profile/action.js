import { TOGGLE_VISIBLE, UPDATE_PROFILE } from './types';

export const toggleVisible = () => {
    return { type: TOGGLE_VISIBLE }
};

export const updateProfileData = (profile) => {
    return { type: UPDATE_PROFILE, payload: profile };
};
