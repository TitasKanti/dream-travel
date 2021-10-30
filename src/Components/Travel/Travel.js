import React from 'react';
import { useHistory } from 'react-router';

const Travel = ({ tourEvent }) => {
    const { img, name, duration, price, id } = tourEvent;
    const history = useHistory();
    const handleDetail = id => {
        history.push(`/tourDetail/${id}`);
    }
    return (
        <>
            <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <img alt="course info" src={img} className="max-h-40 w-full object-cover" />
                <div className="bg-white w-full p-4">
                    <p className="text-2xl font-bold">
                        {name}
                    </p>
                    <br />
                    <p className="font-light mb-2">
                        {duration}
                    </p>
                    <p className="text-sm mb-3 py-2 text-red-700 bg-indigo-100 text-center">
                        {price}
                    </p>

                    <div className="text-center">
                        <button onClick={() => handleDetail(id)} className="bg-yellow-800 text-sm text-white font-medium mb-2 py-2 px-10 rounded-md">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Travel;