import {createStore, combineReducers, applyMiddleware} from 'redux';
import { productsReducer } from './products';
import { recipesReducer } from './recipes';
import { userReducer } from './user/reducer';
import { userRecipeReducer } from './newRecipe/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    products: productsReducer,
    recipes: recipesReducer,
    user: userReducer,
    newRecipe: userRecipeReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)