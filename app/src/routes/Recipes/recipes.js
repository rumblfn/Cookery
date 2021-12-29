import { Footer } from "../../components/Footer/footer";
import { useState, useEffect } from 'react';
// import './style.css';

const Resipes = () => {
    const [collectProducts, setCollectProducts] = useState([]);
    async function getRecipes() {
        const url = 'https://raw.githubusercontent.com/rumblfn/Cookery/main/jsonSettings/recipes.json';
        try {
            const response = await fetch(url);
            const data = await response.json();
            for (let elem of data) {
                let el = elem
                el.currentImage = 0
                setCollectProducts(collectProducts => [...collectProducts, el])
            }
        } catch (e) {
            console.error(e);
        }
    }

    console.log(collectProducts)

    const changeImageIncrease = (item, index) => {
        item.currentImage++;
        if (item.currentImage > item.images.length - 1) {
            item.currentImage = 0;
        }
        let newArr = [...collectProducts];
        newArr[index] = item
        setCollectProducts(newArr)
    }

    const changeImagedecrease = (item, index) => {
        item.currentImage--;
        if (item.currentImage < 0) {
            item.currentImage = item.images.length - 1;
        }
        let newArr = [...collectProducts];
        newArr[index] = item
        setCollectProducts(newArr)
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <div className="container">
            <div className="products_container">
                {collectProducts.map((item, index) => (
                    <div className="product_box"
                        key={item.id}
                    >
                        <button onClick={(e) => changeImagedecrease(item, index)}>
                            left
                        </button>
                            <img src={item.images[item.currentImage]} alt='food_image'/>
                        <button onClick={(e) => changeImageIncrease(item, index)}>
                            right
                        </button>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>

        </div >
    )
}
export default Resipes;