const SET_AUTH = 'SET_AUTH'
const SET_USER = 'SET_USER'

const initialState = {
    isAuth: false,
    user: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH:
            state.isAuth = action.bool
            return {...state}
        case SET_AUTH:
            state.user = action.user
            return {...state}
        default:
            return {...state}
    }
}

let setIsAuth = (bool) => ({type: SET_AUTH, bool})
let setUser = (user) => ({type: SET_USER, user})

export const setIsAuthInfo = bool => dispatch => {
    dispatch(setIsAuth(bool))
}
export const setUserInfo = (user) => dispatch => {
    dispatch(setUser(user))
}