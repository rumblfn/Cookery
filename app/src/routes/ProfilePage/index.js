import { PersonalInformation } from '../../components/PersonalInformation/info'
import { CreateNewRecipe } from '../../components/CreateNewRecipe/index'
import { UserRecipes } from '../../components/usersRecipes/usersRecipes'
import { CreateRecipeBlock } from '../../components/CreateRecipeBlock/index'
import { Routes, Route } from 'react-router-dom';


export const ProfilePage = () => {
    return (
        <div className='container'>
            <div style={{
                marginLeft: '25%',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '80vh',
                width: '40%',
            }}>
                <PersonalInformation/>
                <CreateNewRecipe/>
                <UserRecipes/>
                <Routes>
                    <Route path="create/*" element={<CreateRecipeBlock />} />
                </Routes>
            </div>
        </div>
    )
}