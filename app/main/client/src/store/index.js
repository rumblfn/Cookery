import {createStore, combineReducers, applyMiddleware} from 'redux';
import { productsReducer } from './products';
import { recipesReducer } from './recipes';
import { userReducer } from './user/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    products: productsReducer,
    recipes: recipesReducer,
    user: userReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)