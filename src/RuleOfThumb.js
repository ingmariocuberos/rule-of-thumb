import React, { useEffect, useState } from 'react'
import { AppRouter } from './components/routers/AppRouter'
import "firebase/auth";
import "firebase/firestore";
import { UserContext } from './components/UserContext';
import './firebase/firebasedb';
import db from "./firebase/firebasedb"

export const RuleOfThumb = () => {

    const [data, setData] = useState([]);

    const dataRef = db.collection('data')

    const database : any[] = [];

    useEffect(() => {
        dataRef.onSnapshot(snapshot => {
            snapshot.forEach( snapChild =>{
                database.push( snapChild.data())
            })
            setData(database);
        })
    }, [])

    

    // useEffect(() => {
    //     fetch('./assets/data.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data.data);
    //         });
    // }, [])

    

    const [user, setUser] = useState({});


    return (
        <UserContext.Provider 
            value={ 
                {
                    user,
                    setUser,
                    data,
                    setData
                }
            }
        >
            <AppRouter />
        </UserContext.Provider>

    )
}
