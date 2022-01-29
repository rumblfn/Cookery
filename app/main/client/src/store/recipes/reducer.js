import { ADD_NEW_RECIPE, SET_RECIPES, SET_RECIPES_ALL, CLEAR_REDUCER, STAR_RECIPE } from './actions';
import Axios from 'axios';

const initialState = {
    userRecipes: [],
    recipes: [],
}

export const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case STAR_RECIPE: {
            switch (action.payload.starred) {
                case true: {
                    let userRecipeCopy = [...state.userRecipes]
                    let recipesCopy = [...state.recipes]
                    let foundIndex = userRecipeCopy.findIndex(x => x.id == action.payload.recipeId);
                    if (foundIndex > -1) {
                        userRecipeCopy[foundIndex].rating -= 1;
                    }
                    foundIndex = recipesCopy.findIndex(x => x.id == action.payload.recipeId);
                    if (foundIndex > -1) {
                        recipesCopy[foundIndex].rating -= 1;
                    }
                    return {userRecipes: userRecipeCopy, recipes: recipesCopy}
                }
                case false: {
                    let userRecipeCopy = [...state.userRecipes]
                    let recipesCopy = [...state.recipes]
                    let foundIndex = userRecipeCopy.findIndex(x => x.id == action.payload.recipeId);
                    if (foundIndex > -1) {
                        userRecipeCopy[foundIndex].rating += 1;
                    }
                    foundIndex = recipesCopy.findIndex(x => x.id == action.payload.recipeId);
                    if (foundIndex > -1) {
                        recipesCopy[foundIndex].rating += 1;
                    }
                    return {userRecipes: userRecipeCopy, recipes: recipesCopy}
                }
                default: {
                    return state
                }
            }
        }
        case SET_RECIPES_ALL: {
            const settedRecipes = []
            Object.values(action.payload).forEach((item) => {
                settedRecipes.push({
                    comments: JSON.parse(item.comments),
                    cook: JSON.parse(item.cook),
                    description: JSON.parse(item.description),
                    id: item.id,
                    images: JSON.parse(item.images) || [],
                    lstOfProducts: JSON.parse(item.lstOfProducts),
                    products: JSON.parse(item.products),
                    rating: item.rating,
                    time: item.time,
                    title: item.title,
                    userId: item.userId
                })
            })
            return {...state, recipes: [...state.recipes, ...settedRecipes]}
        }
        case SET_RECIPES: {
            const settedUserRecipes = []
            Object.values(action.payload).forEach((item) => {
                settedUserRecipes.push(
                    {
                        comments: JSON.parse(item.comments),
                        cook: JSON.parse(item.cook),
                        description: JSON.parse(item.description),
                        id: item.id,
                        images: JSON.parse(item.images) || [],
                        lstOfProducts: JSON.parse(item.lstOfProducts),
                        products: JSON.parse(item.products),
                        rating: item.rating,
                        time: item.time,
                        title: item.title,
                        userId: item.userId
                    }
                )
            })
            return {...state, userRecipes: [...settedUserRecipes]}
        }
        case ADD_NEW_RECIPE: {
            Axios.post('http://localhost:3001/reciepes/insert', {
                ...action.payload, images: JSON.stringify(action.payload.images)
            }).then(() => {})
            return {
                ...state,
                userRecipes: [...state.userRecipes, action.payload],
                recipes: [...state.recipes, action.payload]
            }
        }
        case CLEAR_REDUCER: {
            return {...state, userRecipes: []}
        }
        default: {
            return state
        }
    }
}