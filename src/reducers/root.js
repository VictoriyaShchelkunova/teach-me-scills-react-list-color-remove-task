const initialState = {
    list: [],
    value: null,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_LIST':
            return {
                ...state,
                list: action.payload
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                list: state.list.filter(({ id }) => id !== action.payload)
            }
        case 'CHANGE_COLOR':
            return {
                ...state,
                list: state.list.map((item) => item.id === +action.payload ? {...item, color: 'red'} : {...item, color: 'black'} )
            }
        default:
            return state;
    }
}