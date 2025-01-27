const initState = {
    themeId: 1,
}
type themeReducerState = typeof initState


export const themeReducer = (state = initState, action: themeReducerActionType): themeReducerState => { // fix any
    switch (action.type) {
        // дописать
            case 'SET_THEME_ID':{
                let a = {...state,themeId: action.id}
                return a
            }

        default:
            return state
    }
}

type themeReducerActionType = SetThemeReducerActionType

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any
type SetThemeReducerActionType = ReturnType<typeof changeThemeId >