import { recipesConnect } from "../../../connect/recipes/recipes"
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

let css = {display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2%', margin: '2%'}

export const Widget = recipesConnect(({format, allRecipesBool, userRecipes, setRicepes, setIsLoading, recipes, selectedProducts}) => {
    let newRecipes = {}
    if (allRecipesBool) {

        if (format === 'computer') { css = {...css, gridTemplateColumns: '1fr 1fr 1fr 1fr'}
        } else if (format === 'laptop') { css = {...css, gridTemplateColumns: '1fr 1fr 1fr'}
        } else if (format === 'tablet') { css = {...css, gridTemplateColumns: '1fr 1fr 1fr'}
        } else if (format === 'tablet2') { css = {...css, gridTemplateColumns: '1fr 1fr'}
        } else if (format === 'phone') { css = {...css, gridTemplateColumns: '1fr'}
        } newRecipes = {...recipes}

    } else {

        if (format === 'computer') { css = {...css, gridTemplateColumns: '1fr 1fr 1fr'}
        } else if (format === 'laptop') { css = {...css, gridTemplateColumns: '1fr 1fr'}
        } else if (format === 'tablet') { css = {...css, gridTemplateColumns: '1fr 1fr'}
        } else if (format === 'tablet2') { css = {...css, gridTemplateColumns: '1fr'}
        } else if (format === 'phone') { css = {...css, gridTemplateColumns: '1fr'} }

        useEffect(() => {
            if (Object.keys(recipes).length <= Object.keys(userRecipes).length) {
                setIsLoading(true)
                Axios.get('http://localhost:3001/recipes/get').then((response) => {
                    setRicepes(response.data)
                    setIsLoading(false)})}}, [])
    
        const isEmpty = (obj) => { for (let key in obj) { return true } return false }
    
        const checkProductsInRecipe = (recipe, prods) => {
            for (let key in prods) {
                if (recipe.lstOfProducts.includes(prods[key].name.toLowerCase())) {
                    return true
                }} return false }
        
        if (isEmpty(selectedProducts)) {
            for (let recipe in recipes) {
                if (checkProductsInRecipe(recipes[recipe], selectedProducts)) {
                    newRecipes[recipe] = {...recipes[recipe]}}}}}

    return (
        <div style={css}>
            {Object.values(newRecipes).map(item => (
            <Link to={`/recipes/${item.id}/all`} key={item.id}>
                <Paper elevation={3} style={{borderRadius: '7px', padding: '10px', height: '200px', justifyContent: 'space-between', display: 'flex', alignItems: 'center', flexDirection: 'column'}} >
                    <img style={{borderRadius: '5px', maxHeight: '80%', maxWidth: '80%'}} src={item.images[0]} alt='food'/>
                    <p>{item.title}</p>
                </Paper>
            </Link>))}
        </div>
    )
})

export const ListOfReciepes = ({format, allRecipesBool}) => {
    const [isLoading, setIsLoading] = useState(false);
    return <Widget format={format} allRecipesBool={allRecipesBool} isLoading={isLoading} setIsLoading={setIsLoading}/>
}