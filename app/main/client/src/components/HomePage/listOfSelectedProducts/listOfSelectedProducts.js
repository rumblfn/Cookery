import Paper from '@mui/material/Paper';
import { selectedProductsConnect } from '../../../connect/selectedProducts/selectedProducts'
import Button from "@mui/material/Button";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';
import InputBase from "@mui/material/InputBase";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../style.css'

export const ShowSelectedProducts = ({setIconImages, iconImage}) => {
    const show = () => {
        setIconImages(prevState => !prevState)
    }

    return (
        <Button 
            style={{
                color: '#000000',
                border: 'none',
                marginBottom: '2%'
            }}
            variant="outlined" 
            type="submit"
            onClick={() => show()}
        >Выбранные продукты {iconImage ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}
        </Button>
    )
}

export const SelectedProducts = selectedProductsConnect(({setToggleClass, productsWithCount, creating, products, changeSelectedState, show, setProducts, lstOfProductsNames}) => {
    let css = {display: 'flex', flexWrap: 'wrap', marginBottom: '32px'};
    let css_paper = {borderRadius: '7px', padding: '10px', marginRight: '10px', marginBottom: '10px', 
        display: 'flex', flexDirection: 'column', alignContent: 'space-between'}

    const checkProduct = (item) => {
        changeSelectedState(item)
    }

    if (setProducts) {
        setProducts([...lstOfProductsNames])
    }

    const checkProducts = () => {
        console.log(productsWithCount)
    }
    

    console.log(products)
    if (creating) {
        css = {display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2%',
            padding: '2%', marginBottom: '32px', boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
            maxHeight: '60vh', overflowY: 'scroll', borderRadius: '15px'};
        css_paper = {borderRadius: '7px', padding: '10px',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}
        if (useMediaQuery('(max-width:1024px)')) {
            css.gridTemplateColumns = '1fr 1fr'
        }
        if (useMediaQuery('(max-width:768px)')) {
            css.gridTemplateColumns = '1fr 1fr 1fr'
        }
        if (useMediaQuery('(max-width:525px)')) {
            css.gridTemplateColumns = '1fr 1fr'
        }
    }

    if (!show) {
        if (Object.keys(products).length > 0) {
            return (
                <div style={css}>
                    {Object.keys(products).map(elKey => (
                        <Paper elevation={2} style={css_paper}
                                key={elKey}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p style={{marginTop: 'auto', marginBottom: 'auto'}}>{products[elKey].name}</p>
                                <Button onClick={() => checkProduct(elKey)} 
                                        style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', color: 'black'}}>
                                    <CloseRoundedIcon style={{
                                        color: 'inherit',
                                    }}/>
                                </Button>
                            </div>
                            {creating ? 
                            <InputBase
                                style={{width: '100%', borderBottom: '2px solid black'}}
                                onChange={(e) => checkProducts(e.target.value, products[elKey].name)}
                                placeholder="Добавьте количество"/> : null}
                        </Paper>))
                    }
                </div>
            );
        } else {
            if (setToggleClass) {
                return (
                    <div className="selectedProductsEmpty" style={{
                        textAlign: 'center', margin: '0 32px', border: '2px dashed black', borderRadius: '8px'
                    }} onClick={() => {setToggleClass(prevState => !prevState)}}>
                        <h6 style={{margin: '48px 0'}}>Список выбранных продуктов пуст</h6>
                    </div>)
            } else {
                return (
                    <div className="selectedProductsEmpty" style={{
                        textAlign: 'center', margin: '0 32px', border: '2px dashed black', borderRadius: '8px'
                    }}>
                        <h6 style={{margin: '48px 0'}}>Список выбранных продуктов пуст</h6>
                    </div>)
            }
        }
    } else {
        return null;
    }
})

export const ListOfSelectedProducts = ({creating, setToggleClass}) => {
    const [iconImage, setIconImages] = useState(true)
    return (
        <>
            <ShowSelectedProducts iconImage={iconImage} setIconImages={setIconImages}/>
            <SelectedProducts setToggleClass={setToggleClass} creating={creating} show={iconImage}/>
        </>
    )
}