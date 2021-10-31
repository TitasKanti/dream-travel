import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const TourDetail = () => {
    const { id } = useParams();
    const [tourEvents, setTourEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://mighty-shore-84070.herokuapp.com/travel')
            .then(res => res.json())
            .then(data => setTourEvents(data))
    }, [])

    useEffect(() => {
        const foundDetail = tourEvents?.find(tourEvent => tourEvent.id == id);
        setSelectedEvent(foundDetail);
    }, [tourEvents])

    // react hook form functions
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const newOrder = { ...data, status: 'pending', order: { selectedEvent } };
        console.log(newOrder);
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('order placed successfully')
                }
            })
        reset();
    }

    return (
        <>
            <div className="flex justify-center m-2">
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={selectedEvent?.img}
                    />
                    <CardContent className="text-justify">
                        <Typography className="text-blue-400" gutterBottom variant="h5" component="div">
                            {selectedEvent?.name}
                        </Typography>
                        <Typography className="text-green-700" gutterBottom variant="h6" component="p">
                            {selectedEvent?.duration}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {selectedEvent?.detail}
                        </Typography>
                        <br />
                        <Typography className="bg-yellow-300 text-green-700 py-2 px-5 rounded-md text-center" variant="footer" >
                            Price: {selectedEvent?.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/home"><Button size="small">Go Back</Button></Link>
                    </CardActions>
                </Card>
            </div>

            {/* user information form and place order */}

            <div className="flex flex-col items-center my-5">
                <h2>To confirm the order please fill the form.</h2>
                <form className="flex flex-col leading-10 py-4 mt-2" onSubmit={handleSubmit(onSubmit)}>

                    <input className="px-4 my-2" {...register("name", { required: true, maxLength: 20 })} placeholder={user.displayName} />
                    <input className="px-4 my-2" type="email" {...register("email")} placeholder={user?.email} />
                    <input className="px-4 mb-5" {...register("address")} placeholder="address" />
                    <input className="bg-yellow-800 text-yellow-100 font-bold text-xl py-2 rounded-lg w-2/3" type="submit" value="Place Order" />
                </form>
            </div>

        </>
    );
};

export default TourDetail;