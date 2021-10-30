import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            //mui spinner
            <div className="flex justify-center items-center m-2">
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                    <CircularProgress />
                </Box>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ?
                children :
                <Redirect
                    to={{
                        pathname: '/signIn',
                        state: { from: location }
                    }}
                />
            }
        >
        </Route>
    );
};

export default PrivateRoute;