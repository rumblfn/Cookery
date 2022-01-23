import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

export const CreateNewRecipe = () => {
    return (
        <div style={{ 
            marginTop: '24px',
            display: 'flex',
        }}>
            <h4>Добавить новый</h4>
            <Link to='/profile/create'>
                <Button 
                    style={{
                        marginLeft: '12px',
                        borderColor: "#000000",
                        color: '#000000',
                    }}
                    variant="outlined" 
                    type="submit"
                >
                    <AddRoundedIcon/>
                </Button>
            </Link>
        </div>
    )
}