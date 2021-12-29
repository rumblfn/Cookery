import { Footer } from "../../components/Footer/footer";
import { useState, useEffect } from 'react';

let collectProducts = [];
const Resipes = () => {
    async function getRecipes() {
        const url = 'https://raw.githubusercontent.com/rumblfn/Cookery/main/jsonSettings/recipes.json';
        try {
            const response = await fetch(url);
            const data = await response.json();
            for (let elem in data) {
                collectProducts.push(data[`${elem}`]);
            }
        } catch (e) {
            console.error(e);
        }
        console.log(collectProducts[0]);
    }
    useEffect(() => {
        getRecipes();
    }, []);
    return (
        <div className="container">
            <div className="products_container">
                {collectProducts.map((item) => (
                    <div className="product_box"
                        key={item.id}
                    >
                        {item.images.map((img) =>
                            <img src={img} />
                        )}
                        <h3>{item.title}</h3>
                    </div>))}
            </div>

        </div >
    )
}
export default Resipes;