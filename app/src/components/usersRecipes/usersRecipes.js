import { recipesConnect } from "../../connect/recipes/recipes"
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export const widget = ({userRecipes, largePhone}) => {
    const css = {display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2%'}
    if (largePhone) {
        css.gridTemplateColumns = '1fr 1fr'
    }
    return (
        <div style={{
            marginTop: '32px',
        }}>
            <h3>Ваши рецепты</h3>
            <div style={css}>
                {userRecipes.map(item => (
                    <Link to={`/recipes/${item.id}`}>
                        <Paper elevation={3} 
                            style={{borderRadius: '7px', padding: '10px', height: '100px', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}} 
                            key={item.id}
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

export const UserRecipes = recipesConnect(widget)