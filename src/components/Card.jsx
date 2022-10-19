import "../assets/Styles/Card.css"

function Card({ name, image }) {
    return (
        <div className="container_character-card"><img src={image} alt={name} />
            <br />
            <span>{name}</span>
        </div>
    )
}

export default Card;