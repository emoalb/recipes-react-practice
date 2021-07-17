import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients})=>{
return(
    <div className = {style.recipe}>
        <h2>{title}</h2>
        <ol>
            {
                ingredients.map((ingredient,index)=>{
                    return(
                        <li key={index}>{ingredient.text}</li>
                    )
                })
            }
        </ol>
        <p>{Math.ceil(calories/1000)} KCal</p>
        <img src={image} alt="Missing img file"/>   
    </div>
)
}
export default Recipe;