import Paper from '@mui/material/Paper';
import { selectedProductsConnect } from '../../../connect/selectedProducts/selectedProducts'
import CheckIcon from '@mui/icons-material/Check';

export const widget = ({products, changeSelectedState}) => {
    console.log(products);

    const checkProduct = (item) => {
        changeSelectedState(item)
    }

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
}

export const ListOfSelectedProducts = selectedProductsConnect(widget);