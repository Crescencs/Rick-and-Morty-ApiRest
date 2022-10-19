import { useState, useEffect } from "react";
import Card from "../components/Card";
import "../assets/Styles/Character.css"
function Character() {
    const [data, setData] = useState(null)
    const [pages, setPages] = useState(1)

    useEffect(function () {
        fetch(`https://rickandmortyapi.com/api/character?page=${pages}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [pages])
    return (
        <div className="container">
            <div className="nav-pages">
                <div className="contaienr_btn">
                    <button onClick={() => setPages(pages - 1)}>Prev</button>
                    <button onClick={() => setPages(pages + 1)}>Next</button>
                </div>
            </div>
            <div className="container_characters">

                {
                    data && data.results.map(character =>
                    (
                        <Card
                            key={character.id}
                            name={character.name}
                            image={character.image}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Character;