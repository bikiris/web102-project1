import '../styles/card.css';

// eslint-disable-next-line react/prop-types
const Card = ({name, type, link, image}) => {
    return (
        <div className="card">
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <h4>{type}</h4>
            <button>
                <a href={link}>View Menu</a>
             </button>
        </div>
    )
}
export default Card;