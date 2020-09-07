export const SWITCHER_THEME = "SWITCHER_THEME";


type actionType = ReturnType<typeof switcherColorTheme>

let initialState = {
    color: 'jet',
}

const themeSwitcherReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case SWITCHER_THEME:
            return {...state, color: action.peyload}
        default:
            return state;
    }
};

export const switcherColorTheme = (peyload: string) => ({
    type: SWITCHER_THEME, peyload
} as const);


export default themeSwitcherReducer;