import { recipesConnect } from '../../connect/recipes/recipes'
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
    @media (max-width: 628px) {
        grid-template-columns: 1fr;
    }
`

const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    width: 60%;
    margin-left: 15%;
    @media (max-width: 1024px) {
        margin-left: 5%;
        width: 90%;
    }
`;

const OverlayRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 628px) {
        align-items: normal;
        margin: 5%;
    }
`

const Gallery = styled.div`
    @media (max-width: 1024px) {
        display: none;
    }
`

const GalleryRight = styled.div`
    @media (min-width: 1025px) {
        display: none;
    }
`

const GalleryImagesOnly = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5%;
    @media (max-width: 628px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const widget = ({id, recipes}) => {
    const recipeId = id
    let recipeMain = {};
    for (let recipe of recipes) {
        if (recipe.id === recipeId) {
            recipeMain = {...recipe};
            break;
        }
    }

    return (
        <div className='container'>
            <Box>
                <Overlay>
                    <h4 style={{borderBottom: '2px solid black'}}>{recipeMain.title}</h4>
                    <p>{recipeMain.description}</p>
                    <h5 style={{borderBottom: '2px solid black'}}>Список необходимых продуктов</h5>
                    <div>
                        {recipeMain.products.map((item, index) => (
                            <Paper elevation={2} style={{
                                    borderRadius: '7px', padding: '10px', marginRight: '10px', marginBottom: '10px'}}
                                    key={index}>
                                <p style={{marginTop: 'auto', marginBottom: 'auto'}}>{item[0]} - {item[1]}</p>
                            </Paper>))
                        }
                    </div>
                    <h5 style={{borderBottom: '2px solid black', marginTop: '16px'}}>Список действий</h5>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {recipeMain.cook.map((item, index) => (
                            <p key={index} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                            <span>{index + 1}</span>. {item}
                            </p>))
                        }
                    </div>
                    {recipeMain.images.length > 0 ? 
                        <Gallery>
                            <h5 style={{borderBottom: '2px solid black', margin: '16px 0'}}>Галлерея</h5>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5%'}}> 
                            {
                                recipeMain.images.map((item, index) => (
                                    <img style={{width: '100%', borderRadius: '15px'}} key={`${index}${index}`} src={item} alt='img'/>))
                            }
                            </div>
                        </Gallery>
                        : null}
                </Overlay>
                <OverlayRight>
                    <p>Rating: {recipeMain.rating} <FavoriteIcon/></p>
                    <p>time: {recipeMain.time} <AccessTimeIcon/></p>
                    {recipeMain.images.length > 0 ? 
                        <GalleryRight>
                            <h5 style={{borderBottom: '2px solid black', margin: '16px 0'}}>Галлерея</h5>
                            <GalleryImagesOnly> 
                            {
                                recipeMain.images.map((item, index) => (
                                    <img style={{width: '100%', borderRadius: '15px'}} key={`${index}${index}`} src={item} alt='img'/>))
                            }
                            </GalleryImagesOnly>
                        </GalleryRight>
                        : null}
                </OverlayRight>
            </Box>
        </div>
    )
}

export const RecipeInfo = recipesConnect(widget)