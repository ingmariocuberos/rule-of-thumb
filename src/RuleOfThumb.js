import React, { useEffect, useState } from 'react'
import { AppRouter } from './components/routers/AppRouter'
import "firebase/auth";
import "firebase/firestore";
import { UserContext } from './components/UserContext';
import './firebase/firebasedb';
import db from "./firebase/firebasedb"
import { info } from './assets/info';

export const RuleOfThumb = () => {

    const [data, setData] = useState(info.data);

    const dataRef = db.collection('data');

    const database : any[] = [];

    useEffect(() => {
        dataRef.get().then(snapshot => {
            snapshot.forEach( snapChild =>{
                database.push({
                    id: snapChild.id,
                    ...snapChild.data()
                })                
            }) 
            setData(database);   
        })
    }, []);

    return (
        <UserContext.Provider 
            value={ 
                {
                    data,
                    setData,
                }
            }
        >
            <AppRouter />
        </UserContext.Provider>

    )
}
