import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { AppScreen } from '../AppScreen';

export const AppRouter = () => {
    return (
        <div>

            <AppScreen />
            
        </div>
    )
}
