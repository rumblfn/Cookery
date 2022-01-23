import { productsConnect } from '../../../connect/products/products'
import CheckIcon from '@mui/icons-material/Check';
import './style.css';
import '../style.css'
import Paper from '@mui/material/Paper';
import InputBase from "@mui/material/InputBase";
import Axios from 'axios';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { auth } from '../../../firebase';


const Widget = productsConnect(({toggleClass, setInputValue, inputValue, checkEmail, products, changeSelectedState, filterState, marginRightProp, maxHeightProp}) => {
    let default_size = '70vh'
    console.log(products)

    const checkProduct = (item) => {
        changeSelectedState(item)
    }

    const filterProducts = (event) => {
        setInputValue(event.target.value)
        filterState(event.target.value);
    }

    const addNewProduct = () => {
        Axios.post('http://localhost:3001/products/insert', {
            productName: inputValue
        }).then(() => {
            console.log(`${inputValue} added`);
        })
    }

    return (
        <>
        {checkEmail ?
        <div style={{marginBottom: '16px', marginLeft: '16px'}}>
            <Button variant="outlined" sx={{
                color: 'black', backgroundColor: 'white', borderColor: 'black',
                "&:hover": {
                    backgroundColor: 'rgb(17,17,50)',
                    color: 'white',
                    borderColor: 'white',
                }
            }} onClick={addNewProduct}>
                Добавить
            </Button>
        </div> : null
        }
        <Paper className={toggleClass ? "blob": null} elevation={3} style={{borderRadius: '7px', padding: '10px', marginRight: marginRightProp, overflow: 'auto', maxHeight: maxHeightProp || default_size}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '25px'}}>
                <InputBase
                    onChange={filterProducts}
                    sx={{m: 0, width: '100%', borderBottom: '2px solid black'}} placeholder="Введите название продукта"
                />
            </div>
            {Object.keys(products).map(elKey => (
                <div key={elKey} className="block" onClick={() => checkProduct(elKey)}>
                    <p>{products[elKey].name}</p>
                    <CheckIcon hidden={!products[elKey].selected}/>
                </div>))
            }
        </Paper>
        </>
    )
})

export const ListOfProducts = ({toggleClass}) => {
    const [checkEmail, setCheckEmail] = useState(false);
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        try {
            if (auth.currentUser.email === 'toshamilgis@gmail.com') {
                setCheckEmail(true)
            }
        } catch {
            setCheckEmail(false)
        }
    }, [])

    return (
        <Widget toggleClass={toggleClass} checkEmail={checkEmail} setInputValue={setInputValue} inputValue={inputValue}/>
    )
}