import { productsConnect } from '../../../connect/products/products'
import CheckIcon from '@mui/icons-material/Check';
import './style.css';
import Paper from '@mui/material/Paper';
import InputBase from "@mui/material/InputBase";


const widget = ({products, changeSelectedState, filterState}) => {
    const checkProduct = (item) => {
        changeSelectedState(item)
    }

    const filterProducts = (event) => {
        filterState(event.target.value);
    }

    return (
        <Paper elevation={3} style={{borderRadius: '7px', padding: '10px', marginRight: '2%', overflow: 'auto', maxHeight: '70vh'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '25px'}}>
                <InputBase
                    onChange={filterProducts}
                    sx={{m: 0, width: '100%'}} placeholder="Введите название продукта"
                />
            </div>
            {Object.keys(products).map(elKey => (
                <div key={elKey} className="block" onClick={() => checkProduct(elKey)}>
                    <p>{products[elKey].name}</p>
                    <CheckIcon hidden={!products[elKey].selected}/>
                </div>))
            }
        </Paper>
    )
}

export const ListOfProducts = productsConnect(widget)