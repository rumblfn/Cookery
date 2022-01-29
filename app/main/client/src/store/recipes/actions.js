export const ADD_NEW_RECIPE = 'ADD_NEW_RECIPE';
export const SET_RECIPES = 'SET_RECIPES';
export const SET_RECIPES_ALL = 'SET_RECIPES_ALL';
export const CLEAR_REDUCER = 'CLEAR_REDUCER';
export const STAR_RECIPE = 'STAR_RECIPE';

export const addNewRecipeReducer = (recipe) => ({
    type: ADD_NEW_RECIPE,
    payload: recipe,
})

export const setRecipesWithAPI = (recipes) => ({
    type: SET_RECIPES,
    payload: recipes,
})

export const setRicepesReducer = (data) => ({
    type: SET_RECIPES_ALL,
    payload: data
})

export const clearReducer = () => ({
    type: CLEAR_REDUCER
})

export const starRecipeRecipeReducer = (data)  => ({
    type: STAR_RECIPE,
    payload: data,
})