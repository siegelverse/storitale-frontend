export const initialState = {
    currentUser: {},
    usernameInput: "", 
    passwordInput: "",
    emailInput: ""
}
  
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.user}
        break;
        case 'CHANGE_USERNAME_INPUT':
            return {...state, usernameInput: action.value}
        break;
        case 'CHANGE_PASSWORD_INPUT':
            return {...state, passwordInput: action.value}
        break;
        case 'CHANGE_EMAIL_INPUT':
            return {...state, emailInput: action.value}
        break;
        case 'LOGOUT_USER':
            return {...state, currentUser: {} }
        break;
        default:
            return state;
    }
}