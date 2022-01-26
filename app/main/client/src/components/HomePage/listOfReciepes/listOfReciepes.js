import { recipesConnect } from "../../../connect/recipes/recipes"
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export const Widget = ({recipes, selectedProducts}) => {
    let newRecipes = []
    const isEmpty = (obj) => {
        for (let key in obj) {
          return true;
        }
        return false;
    }

    const checkProductsInRecipe = (recipe, prods) => {
        for (let key in prods) {
            if (recipe.lstOfProducts.includes(prods[key].name.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
    
    if (isEmpty(selectedProducts)) {
        for (let recipe of recipes) {
            if (checkProductsInRecipe(recipe, selectedProducts)) {
                newRecipes.push(recipe)
            }
        }
    }
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '48% 48%',
            gap: '12px'
        }}>
            {newRecipes.map(item => (
                <Link to={`/recipes/${item.id}`} key={item.id}>
                    <Paper elevation={3} 
                        style={{borderRadius: '7px', padding: '10px', height: '200px', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}} 
                    >
                        <img style={{borderRadius: '5px', maxHeight: '80%', maxWidth: '80%'}} src={item.images[0]} alt='food'/>
                        <p>{item.title}</p>
                    </Paper>
                </Link>))
            }
        </div>
    )
}

export const ListOfReciepes = recipesConnect(Widget)