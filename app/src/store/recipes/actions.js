export const ADD_NEW_RECIPE = 'ADD_NEW_RECIPE';

export const addNewRecipeReducer = (recipe) => ({
    type: ADD_NEW_RECIPE,
    payload: recipe,
})