import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const TourDetail = () => {
    const { id } = useParams();
    const [tourEvents, setTourEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState({});

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setTourEvents(data))
    }, [])

    useEffect(() => {
        const foundDetail = tourEvents?.find(tourEvent => tourEvent.id == id);
        setSelectedEvent(foundDetail);
    }, [tourEvents])

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
                        <Button onClick="" size="small">Confirm booking</Button>
                        <Link to="/home"><Button size="small">Go Back</Button></Link>
                    </CardActions>
                </Card>
            </div>
        </>
    );
};

export default TourDetail;