import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewEvent.css';

const AddNewEvent = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const newEvent = { data }
        fetch('https://mighty-shore-84070.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the user.')
                }
            })
        reset();
    }

    return (
        <div className="add-service">
            <h2 className="m-4">Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("duration")} placeholder="description" />
                <input type="text" {...register("price")} placeholder="price" />
                <input  {...register("img")} placeholder="image" />
                <input type="submit" />
            </form>
        </div >
    );
};

export default AddNewEvent;