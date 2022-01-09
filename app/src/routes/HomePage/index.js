import React from 'react';
import { ListOfProducts } from '../../components/HomePage/listOfProducts/listOfProducts';
import { ListOfSelectedProducts } from '../../components/HomePage/listOfSelectedProducts/listOfSelectedProducts';
import { ListOfReciepes } from '../../components/HomePage/listOfReciepes/listOfReciepes'


export const HomePage = () => {
    return (
        <div className="container">
            <div style={{
                display: 'grid',
                gridTemplateColumns: '30% 70%'
            }}>
                <ListOfProducts />
                <div>
                    <ListOfSelectedProducts />
                    <ListOfReciepes />
                </div>
            </div>
        </div>
    )
}