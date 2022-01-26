import { SET_USER_DATA } from './actions';

const initialState = {
    loged: false,
    id: null,
    name: null,
    mail: null,
    likes: null,
    recipes: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload, loged: true}
        }
        default: {
            return state
        }
    }
}