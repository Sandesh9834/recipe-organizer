import { recipes } from '../data/data';
import { Link } from 'react-router-dom'

export function RecipeCards({
  id,
  name,
  cuisine,
  image,
  noDetail
}) {
  return (
    <div className='card'>
      <img src={image} alt="Card Image" />
      <h2 className="card-title">{name}</h2>
      <div className="card-footer">
        <p className="card-content"><b>Cuisine type: </b>{cuisine}</p>
        {noDetail && <Link to={`/recipe/${id}`}>Learn More</Link>}
      </div>
    </div>
  )
}
