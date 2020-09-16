export const saveListAction = (list) => {
    return {
        type: 'SAVE_LIST',
        payload: list
    }
};

export const removeItemAction = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
};


export const changeColorAction = (value) => {
    return {
        type: 'CHANGE_COLOR',
        payload: value
    }
};