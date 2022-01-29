import { recipesConnect } from "../../connect/recipes/recipes"
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { setRecipesWithAPI } from "../../store/recipes";

export const Widget = ({userRecipes, largePhone}) => {
    const userId = useSelector((state) => state.user.id);
    const [isLoading, setIsLoading] = useState(false);
    const selector = useSelector((state) => state.recipes.userRecipes);
    const dispatch = useDispatch()

    const css = {display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2%'}
    if (largePhone) {
        css.gridTemplateColumns = '1fr 1fr'
    }

    useEffect(() => {
        if (selector.length === 0) {
            setIsLoading(true)
            Axios.get('http://localhost:3001/user/reciepes/get', {
                params: {
                    id: userId,
                }
            }).then((response) => {
                setIsLoading(false)
                dispatch(setRecipesWithAPI(response.data))
            })
        }
    }, [])

    return (
        <div style={{
            marginTop: '32px',
        }}>
            <h3>Ваши рецепты</h3>
            <div style={css}>
                {userRecipes.map(item => (
                    <Link key={item.id} to={`/recipes/${item.id}`}>
                        <Paper elevation={3} 
                            style={{borderRadius: '7px', padding: '10px', height: '100px', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}} 
                        >
                            <img style={{borderRadius: '5px', maxHeight: '80%', maxWidth: '80%'}} src={item.images[0]} alt='food'/>
                            <p>{item.title}</p>
                        </Paper>
                    </Link>))
            }
        </div>
        </div>
    )
}

export const UserRecipes = recipesConnect(Widget)