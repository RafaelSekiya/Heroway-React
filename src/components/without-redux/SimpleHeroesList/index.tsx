import React from 'react';
import './styles.css';

function SimpleHeroesList() {
    const heroesList = [
       { id: 1, name: 'Spider-Man' },
       { id: 2, name: 'Black Widow'},
       { id: 3, name: 'Iron Man'},
       { id: 4, name: 'Scarlet Witch'},
       { id: 5, name: 'Thor'},
       { id: 6, name: 'Gamora'},
       { id: 7, name: 'Captain America'},
       { id: 8, name: 'Spider-Man'},
    ];

    const heroesHtmlList = heroesList.map((hero) => {
        return <h3 key={hero.id}>{hero.name}</h3>
    })
    
    return (
    <>
        SimpleHeroesList
        <div className="SimpleHeroesList-container">
            {heroesHtmlList}
        </div>
    </>
    )
}



export default SimpleHeroesList;