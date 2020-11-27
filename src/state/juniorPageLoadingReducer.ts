export type StateType = {
    loading: boolean
}
type ActionType = {
    type: string,
    loading: boolean
}
const initialState: StateType = {
    loading: false
}

export const juniorPageLoadingReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "SET_LOADING":
            return {...state, loading: action.loading}
    }
    return state;
};

export const setLoadingAC = (loading: boolean) => {
    return {type: "SET_LOADING", loading}
}