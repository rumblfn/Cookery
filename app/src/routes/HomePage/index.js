import React from 'react';
import { ListOfProducts } from '../../components/HomePage/listOfProducts/listOfProducts';
import { ListOfSelectedProducts } from '../../components/HomePage/listOfSelectedProducts/listOfSelectedProducts';
import { ListOfReciepes } from '../../components/HomePage/listOfReciepes/listOfReciepes'
import useMediaQuery from '@mui/material/useMediaQuery';


const css_desc = {
    display: 'grid',
    gridTemplateColumns: '3fr 7fr',
    gap: '1%'
}

const css_laptop = {
    display: 'grid',
    gridTemplateColumns: '7fr 13fr',
    gap: '1%'
}

const css_tablet = {
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    gap: '1%'
}

const css_tablet2 = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1%'
}

const css_mobile = {
    display: 'flex',
    flexDirection: 'column',
}


export const HomePage = () => {
    let default_size = '70vh'
    let css = css_desc
    const laptop = useMediaQuery('(max-width:1024px)');
    const tablet = useMediaQuery('(max-width:768px)');
    const tablet2 = useMediaQuery('(max-width:628px)');
    const phone = useMediaQuery('(max-width:425px)');

    if (phone) {
        css = css_mobile;
        default_size = '40vh'
    } else if (tablet2) {
        css = css_tablet2;
    } else if (tablet) {
        css = css_tablet;
    }else if (laptop) {
        css = css_laptop;
    }
    return ( 
        <div className="container">
            <div style={css}>
                <div style={{marginBottom: '24px'}}>
                    <ListOfProducts marginRightProp='2%' maxHeightProp={default_size}/>
                </div>
                <div>
                    <ListOfSelectedProducts />
                    <ListOfReciepes />
                </div>
            </div>
        </div>
    )
}