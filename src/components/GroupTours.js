import React from 'react';
import './GroupTours.css';

const GroupTours = () => {
    // Sample tour data (replace with your actual data)
    const tours = [
        {
            id: 1,
            image: 'https://via.placeholder.com/400x300',
            title: 'Amazing Thailand Group Tour',
            description: 'Explore the best of Thailand with our amazing group tour.',
            price: '$999',
            link: '/tour/1'
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/400x300',
            title: 'Incredible Vietnam Group Tour',
            description: 'Discover the beauty of Vietnam with our incredible group tour.',
            price: '$1299',
            link: '/tour/2'
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/400x300',
            title: 'Wonderful Bali Group Tour',
            description: 'Experience the magic of Bali with our wonderful group tour.',
            price: '$1199',
            link: '/tour/3'
        }
    ];

    return (
        <div className="group-tours-page">
            <h1>Group Tours</h1>
            <div className="tour-list">
                {tours.map(tour => (
                    <div key={tour.id} className="tour-item">
                        <img src={tour.image} alt={tour.title} />
                        <h2>{tour.title}</h2>
                        <p>{tour.description}</p>
                        <div className="tour-details">
                            <span className="price">{tour.price}</span>
                            <a href={tour.link} className="details-link">View Details</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GroupTours;