export const initialState = {
    currentUser: {},
    usernameInput: "", 
    passwordInput: "",
    emailInput: "",
    titleInput: "", 
    descriptionInput: "",
    bodyInput: "",
    updateImage: "", 
    updateUsername: "",
    updateBio: "",
    updatePassword: "",
    story: {},
    loggedInUser: null,
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
        case 'CHANGE_TITLE_INPUT':
            return {...state, titleInput: action.value}
        break;
        case 'CHANGE_DESCRIPTION_INPUT':
            return {...state, descriptionInput: action.value}
        break;
        case 'CHANGE_BODY_INPUT':
            return {...state, bodyInput: action.value}
        break;
        case 'SET_LOGGED_IN_USER':
            return{...state, loggedInUser: action.user}
        break;
        case 'UPDATE_IMAGE_INPUT':
            return{...state, updateImage: action.value}
        break;
        case 'UPDATE_USERNAME_INPUT':
            return{...state, updateUsername: action.value}
        break;
        case 'UPDATE_BIO_INPUT':
            return{...state, updateBio: action.value}
        break;
        case 'UPDATE_PASSWORD_INPUT':
            return{...state, updatePassword: action.value}
        break;
        case 'LOGOUT_USER':
            return {...state, currentUser: {} }
        break;
        case 'SET_CURRENT_STORY':
            return{...state, story: action.story}
        break;
        default:
            return state;
    }
}