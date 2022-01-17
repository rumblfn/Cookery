import Paper from '@mui/material/Paper';
import { selectedProductsConnect } from '../../../connect/selectedProducts/selectedProducts'

export const widget = ({products, changeSelectedState, show, setProducts, lstOfProductsNames}) => {
    const checkProduct = (item) => {
        changeSelectedState(item)
    }

    if (setProducts) {
        setProducts([...lstOfProductsNames])
    }

    if (!show) {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {Object.keys(products).map(elKey => (
                    <Paper elevation={2} style={{
                                borderRadius: '7px', padding: '10px', marginRight: '10px', marginBottom: '10px'}}
                            key={elKey} onClick={() => checkProduct(elKey)}>
                        <p style={{marginTop: 'auto', marginBottom: 'auto'}}>{products[elKey].name}</p>
                    </Paper>))
                }
            </div>
        );
    } else {
        return null;
    }
}

export const ListOfSelectedProducts = selectedProductsConnect(widget);