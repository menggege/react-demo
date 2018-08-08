const SET_MENU_STATE = 'SET_MENU_STATE';

const initialState = {
    show: true
}

export const setMenuState = (_state) => ({
    type: SET_MENU_STATE,
    state: _state
})


const ACTION_HANDLERS = {
    [SET_MENU_STATE]: (state, action) => {
        return {
            ...state,
            show: action.state
        }
    }
}

const menuReducer = ((state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
})

export default  menuReducer;

