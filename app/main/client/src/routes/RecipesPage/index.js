import { useParams } from "react-router-dom";
import { RecipeInfo } from "../../components/Recipe/recipe";


export const RecipesPage = () => {
    const {recipeId} = useParams();
    console.log(recipeId);
    return (
        <div>
            <RecipeInfo id={recipeId}/>
        </div>
    )
}