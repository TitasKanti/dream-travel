import React, { useEffect, useState } from 'react';
import Travel from '../Travel/Travel';
import './Home.css';

const Home = () => {
    const [tourEvents, setTourEvents] = useState([]);
    useEffect(() => {
        fetch('https://mighty-shore-84070.herokuapp.com/travel')
            .then(res => res.json())
            .then(data => {
                setTourEvents(data);
            })
    }, [])
    return (
        <>
            {/* Banner section */}
            <div className="banner flex justify-start items-center">
                <h2 className="text-yellow-100 text-3xl text-center">To make your vacation memorable <br /> <br /> travel with <span className="text-pink-500">Dream Travel</span></h2>
            </div>

            {/* Booking events */}
            <div className="my-20">
                <h2 className="mb-10 text-4xl font-bold text-yellow-800 text-center">Book Our Offered Touring Events</h2>

                <div className="grid md:grid-cols-3 gap-y-8 mt-5">
                    {
                        tourEvents.map(tourEvent => <Travel
                            key={tourEvent.id}
                            tourEvent={tourEvent}
                        >
                        </Travel>)
                    }
                </div>
            </div>

        </>
    );
};

export default Home;