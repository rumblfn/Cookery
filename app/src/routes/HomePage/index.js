import React from 'react';
import { ListOfProducts } from '../../components/HomePage/listOfProducts/listOfProducts';
import { ListOfSelectedProducts } from '../../components/HomePage/listOfSelectedProducts/listOfSelectedProducts';
import { ListOfReciepes } from '../../components/HomePage/listOfReciepes/listOfReciepes'
import useMediaQuery from '@mui/material/useMediaQuery';


const css_desc = {
                display: 'grid',
                gridTemplateColumns: '30% 70%'
            }

const css_laptop = {
                display: 'grid',
                gridTemplateColumns: '35% 65%'
            }

const css_tablet = {
                display: 'grid',
                gridTemplateColumns: '40% 60%'
            }

const css_tablet2 = {
                display: 'grid',
                gridTemplateColumns: '50% 50%'
            }

const css_mobile = {
                display: 'flex',
                flexDirection: 'column',
            }


export const HomePage = () => {
    let css = css_desc
    const laptop = useMediaQuery('(max-width:1024px)');
    const tablet = useMediaQuery('(max-width:768px)');
    const tablet2 = useMediaQuery('(max-width:628px)');
    const phone = useMediaQuery('(max-width:425px)');

    if (phone) {
        css = css_mobile;
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
                <ListOfProducts marginRightProp='2%' />
                <div>
                    <ListOfSelectedProducts />
                    <ListOfReciepes />
                </div>
            </div>
        </div>
    )
}