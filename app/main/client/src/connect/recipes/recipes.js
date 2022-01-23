import {connect} from "react-redux";
import { getRecipes, getUserRecipes } from '../../store/recipes';
import { getSelectedProducts } from '../../store/products';
import { addNewRecipeReducer } from '../../store/recipes';

const mapStateToProps = (state) => ({
    recipes: getRecipes(state),
    userRecipes: getUserRecipes(state),
    selectedProducts:  getSelectedProducts(state),
})

const mapDispatchToProps = (dispatch) => ({
    addNewRecipe(item) {
        return dispatch(addNewRecipeReducer(item));
    },
})

export const recipesConnect = connect(mapStateToProps, mapDispatchToProps);