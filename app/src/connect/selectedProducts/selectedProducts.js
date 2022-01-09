import {connect} from "react-redux";
import { getSelectedProducts } from '../../store/products';
import { toggleSelectedState } from "../../store/products";

const mapStateToProps = (state) => ({
    products: getSelectedProducts(state),
})

const mapDispatchToProps = (dispatch) => ({
    changeSelectedState(item) {
        return dispatch(toggleSelectedState(item));
    },
})

export const selectedProductsConnect = connect(mapStateToProps, mapDispatchToProps);