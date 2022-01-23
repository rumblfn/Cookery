import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';
import InputBase from "@mui/material/InputBase";
import { ListOfProducts } from '../HomePage/listOfProducts/listOfProducts'
import Button from "@mui/material/Button";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { ListOfSelectedProducts } from '../../components/HomePage/listOfSelectedProducts/listOfSelectedProducts';
import { selectedProductsConnect } from '../../connect/selectedProducts/selectedProducts'
import { recipesConnect } from "../../connect/recipes/recipes"
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { nanoid } from 'nanoid'
import useMediaQuery from '@mui/material/useMediaQuery';

export const widg = ({title, time, actions, products, description, setDescription, images, productsWithCount, addNewRecipe}) => {
    return (
        <div style={{padding: '16px', display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', marginBottom: '16px'}}>
                <Link to='/profile/create/checkProducts'>
                    <Button 
                        style={{
                            borderColor: "#000000",
                            color: '#000000',
                        }}
                        variant="outlined" 
                        type="submit"
                    >
                        <ArrowBackRoundedIcon/> Вернуться
                    </Button>
                </Link>
                <Link to='/profile'>
                    <Button
                        style={{
                            marginLeft: '16px',
                        }}
                        variant="outlined" 
                        type="submit"
                        onClick = {() => { 
                            addNewRecipe({
                                "title": title,
                                "userId": nanoid(),
                                "id": nanoid(),
                                "time": time,
                                "cook": actions,
                                "lstOfProducts": products,
                                "products": productsWithCount,
                                "description": description,
                                "images": images,
                                "rating": 0,
                                "comments": []
                            })
                        }}
                        >Опубликовать
                    </Button>
                </Link>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{
                background: 'rgba(0,0,0,.3)',
                borderRadius: '5px',
                width: '100%',
                height: '50vh',
                border: '2px solid black',
                display: 'flex',
                justifyContent: 'center', 
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Button
                    style={{
                        margin: '4%',
                        borderColor: "#000000",
                        color: '#000000',
                    }}
                    variant="outlined" 
                    type="submit"
                    >Загрузить изображение
                </Button>
            </div>
            <TextareaAutosize
                style={{border: 'none', margin: '10px 16px', maxHeight: '40vh'}}
                aria-label="textarea"
                placeholder="Добавьте описание"
                autoFocus
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            </div>
        </div>
    )
}

export const ToPost = recipesConnect(widg)

export const WidgetSelectedProducts = ({title, time, actions, setActions, products, setProductsWithCount, productsWithCount}) => {
    let [newAction, setNewAction] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const newProds = [];
        for (const prod of products) {
            newProds.push([prod, '0']);
        }
        setProductsWithCount([...newProds]);
    }, [])
    
    return (
        <div style={{padding: '16px'}}>
            <div style={{display: 'flex', marginBottom: '16px'}}>
            <Link to='/profile/create'>
                <Button 
                    style={{
                        borderColor: "#000000",
                        color: '#000000',
                    }}
                    variant="outlined" 
                    type="submit"
                >
                    <ArrowBackRoundedIcon/> Вернуться
                </Button>
            </Link>
            <Link to='/profile/create/post'>
                <Button
                    style={{
                        marginLeft: '16px',
                    }}
                    variant="outlined" 
                    type="submit"
                    >Дальше
                </Button>
            </Link>
            </div>
            <div style={{display: 'flex'}}>
                <h4 style={{marginRight: '2%'}}>{title}</h4>
                <h4 style={{marginRight: '2%'}}>{time}</h4>
            </div>

            <ListOfSelectedProducts 
                productsWithCount={productsWithCount}
                creating={true}/>

            <h6 style={{marginTop: '8px'}}>Способ приготовления</h6>
            <div style={{display: 'flex'}}>
                <InputBase
                    autoFocus
                    inputRef={inputRef}
                    sx={{width: '100%'}} 
                    value={newAction}
                    style={{borderBottom: '2px solid black'}}
                    placeholder="Введите название"
                    onChange={(e) => {
                        setNewAction(e.target.value);
                    }}
                />
                <Button 
                    style={{
                        marginLeft: '16px',
                        borderColor: "#000000",
                        color: '#000000',
                    }}
                    variant="outlined" 
                    type="submit"
                    onClick={() => {
                        if (newAction) {
                            inputRef.current.focus()
                            setActions([
                                ...actions,
                                newAction
                            ]);
                            setNewAction('')
                        }
                    }}
                    >Добавить
                </Button>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '16px'}}>
                {actions.map((item, index) => (
                    <p key={index} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        <span>{index + 1}</span>. {item}
                    </p>))
                }
            </div>
        </div>
    )
}


export const Widget = ({title, setTitle, time ,setTime, products, lstOfProductsNames, setProducts, tablet}) => {
    let navigate = useNavigate();

    const checkForm = () => {
        if (title && time && Object.keys(products).length) {
            setProducts([...lstOfProductsNames])
            navigate("/profile/create/checkProducts");
        }
    }

    return (
        <div>
            <InputBase
                    sx={{m: 2, width: '80%'}} 
                    style={{borderBottom: '2px solid black'}}
                    placeholder="Введите название"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <div style={{
                    display: 'flex',
                }}>
                    <p style={{margin: '16px'}}>Введите время приготовления</p>
                    <input 
                        style={{margin: '10px 0'}} 
                        type="time" id="appt" 
                        name="appt" required
                        onChange={(e) => {setTime(e.target.value)}}/>
                </div>
                <div style={{
                    margin: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <p style={{
                            marginBottom: '0px',
                    }}>Выберите подходящие продукты</p>
                    <Button 
                        style={{
                            marginLeft: '16px'
                        }}
                        variant="outlined" 
                        type="submit"
                        onClick={checkForm}>
                        Дальше <ArrowForwardRoundedIcon/>
                    </Button>
                </div>
                {tablet ? <ListOfProducts maxHeightProp='100%' />: <ListOfProducts maxHeightProp='60vh' />}
        </div>
    )
}


export const WidgetMain = selectedProductsConnect(Widget)


const css_desc_main = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: '0px',
    left: '0px',
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(0,0,0,.5)',
    overflow: 'auto'
}

const css_desc_block = {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: '10%',
    width: '50%',
    minHeight: '60vh',
    borderRadius: '20px',
}

const css_tablet_main = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: '0px',
    left: '0px',
    display: 'flex',
    overflow: 'auto',
    background: 'rgb(255,255,255)'
}

const css_tablet_block = {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
}


export const CreateRecipeBlock = () => {
    let css_1 = css_desc_main
    let css_2 = css_desc_block
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [actions, setActions] = useState([])
    const [description, setDescription] = useState('')
    const [images, setImages] = useState([])
    const [products, setProducts] = useState({})
    const [productsWithCount, setProductsWithCount] = useState([])

    const tablet = useMediaQuery('(max-width:768px)');
    if (tablet) {
        css_1 = css_tablet_main
        css_2 = css_tablet_block
    }

    document.body.style.overflow = "hidden";

    return (
        <div style={css_1}>
            <div style={css_2}>
                <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                }}>
                    <Link to='/profile' onClick={() => {document.body.style.overflow = "scroll";}}>
                        <CloseRoundedIcon style={{
                            color: '#000000',
                        }}/>
                    </Link>
                </div>
                <Routes>
                    <Route path="post" element={
                        <ToPost
                            title={title}
                            time={time}
                            actions={actions}
                            products={products}
                            productsWithCount={productsWithCount}
                            description={description}
                            setDescription={setDescription}
                            images={images}
                            setImages={setImages}
                        />
                    } />
                    <Route path="checkProducts" element={
                        <WidgetSelectedProducts 
                            title={title}
                            time={time}
                            actions={actions}
                            setActions={setActions}
                            setProducts={setProducts}
                            products={products}
                            productsWithCount={productsWithCount}
                            setProductsWithCount={setProductsWithCount}
                        />
                    } />
                    <Route path="/*" element={
                        <WidgetMain 
                            title={title}
                            setTitle={setTitle}
                            time={time}
                            setTime={setTime}
                            setProducts={setProducts}
                            tablet={tablet}
                        />
                    } />
                </Routes>
            </div>
        </div>
    )
}