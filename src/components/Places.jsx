import React, { useEffect, useState } from 'react';
import { getPlaces } from '../API/placesaction';
import '../styles/places.css';

const Places = ({ searchTerm }) => {
    const [places, setPlaces] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPlaces()
            .then(data => setPlaces(data))
            .catch(err => setError(err));
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container">
            <div className="row">
                {places
                    .filter((place) => {
                        if (searchTerm === "") {
                            return place;
                        } else if (place.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return place;
                        }
                        return null;
                    })
                    .map((place) => (
                        <div className="col-md-4" key={place.id}>
                            <div className="card">
                                <img src={place.image} alt={place.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{place.name}</h5>
                                    <p className="card-text">{place.description}</p>
                                    <a href={`/book/${place.id}`} className="btn btn-primary">
                                        Go Book
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Places;
