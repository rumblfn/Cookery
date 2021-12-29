import cheese_img from './images/cheese.png';
import sousage_img from './images/sousage.png';
import { useState, useEffect } from 'react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { Link } from 'react-router-dom';





export const Top = () => {

    const [addedList, setAddedList] = useState([]);
    const [chooseList, setChooseList] = useState([]);
    const [products, setProducts] = useState([]);
    const [change, setChange] = useState(false);
    const [Toggle, setToggle] = useState(0);


    const addProduct = (item) => {
        if (!addedList.includes(item)) {
            setAddedList([...addedList, item]);
        }
    }
    const removeProduct = (item) => {
        const editedList = addedList.filter((elem) =>
            elem.id != item.id
        );

        setToggle(Toggle - Toggle + item.id);
        console.log(Toggle);
        setTimeout(() => {
            setAddedList(editedList);
            setToggle(Toggle - Toggle);
        }, 100);

    }
    const editList = (event) => {
        const listToShow = products.filter((elem) =>
            elem.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setChooseList(listToShow);
    }

    const addProductToList = (list) => {
        setProducts([...list]);
        setChooseList([...list]);
    }
    const toggle = () => setChange(!change);

    const notFoundFc = () => {
        if (change) {
            return (chooseList.length === 0 ? <li>no products found:(</li> : <li></li>);
        }
    }

    async function getProducts() {
        const url = 'https://my-json-server.typicode.com/rumblfn/Cookery/db'
        try {
            const response = await fetch(url);
            const data = await response.json();
            toggle();
            let collectProducts = [];
            for (let elem in data) {
                collectProducts.push(data[`${elem}`]);
            }
            addProductToList(collectProducts);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div className="products-container">
                <div className='productsList-container'>
                    <h2 className='lists-headings'>Choose Products</h2>
                    <div>
                        <input placeholder='Search for products...'
                            className='food-input'
                            type='text'
                            onChange={editList}
                        />
                    </div>
                    <ul className="productsList">
                        {notFoundFc()}
                        {chooseList.map((item) => (
                            <li
                                key={item.id}
                                className='product'
                                onClick={() => addProduct(item)}
                            >
                                <img src={item.img} />
                                <p>{item.name}</p>
                            </li>))}
                    </ul>
                </div>
                <div className='addedProducts'>
                    <h2 className='lists-headings'>Added Products</h2>
                    <ul className="addedProductsList">
                        {addedList.map((item) => (
                            <li
                                key={item.id}
                                className={`product ${Toggle == item.id ? 'sth' : {}}`}
                            >
                                <img src={item.img} />
                                <p>{item.name}</p>
                                <BackspaceOutlinedIcon
                                    sx={{ color: 'red' }}
                                    onClick={() => removeProduct(item)}
                                />
                            </li>))}
                    </ul>
                </div>
            </div>
            <div className='productsResultBox'>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
                <div className='productsResult'>
                </div>
            </div>

            <Link to="/recipes" style={{ textDecoration: 'none', color: 'black' }}>
                <span className='products-link'>All products >></span>
            </Link>
        </div>
    )
}