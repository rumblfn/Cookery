import { recipesConnect } from '../../connect/recipes/recipes'
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const widget = ({id, recipes}) => {
    const recipeId = id
    console.log(recipeId)
    let recipeMain = {};
    for (let recipe of recipes) {
        if (recipe.id === recipeId) {
            recipeMain = {...recipe};
            break;
        }
    }
    console.log(recipeMain);
    return (
        <div className='container'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{
                    marginLeft: '25%',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '80vh',
                    width: '40%',
                }}>
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
                        <div>
                            <h5 style={{borderBottom: '2px solid black', marginTop: '16px'}}>Галлерея</h5> 
                            {
                                recipeMain.images.map((item, index) => (
                                    <img style={{width: '100%'}} key={`${index}${index}`} src={item} alt='img'/>))
                            }
                        </div>
                        : null}
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                }}>
                    <p>Rating: {recipeMain.rating} <FavoriteIcon/></p>
                    <p>time: {recipeMain.time} <AccessTimeIcon/></p>
                </div>
            </div>
        </div>
    )
}

export const RecipeInfo = recipesConnect(widget)