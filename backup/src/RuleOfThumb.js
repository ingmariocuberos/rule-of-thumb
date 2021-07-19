import React, { useEffect, useState } from 'react'
import { AppRouter } from './components/routers/AppRouter'
import "firebase/firestore";
import { UserContext } from './components/UserContext';
import './firebase/firebasedb';
import db from "./firebase/firebasedb"

export const RuleOfThumb = () => {

    // useEffect(() => {
    
        const [data, setData] = useState(null);

        const database : any[] = [];
        
        

        useEffect(() => {            
            const dataRef = db.collection('data');
            dataRef.onSnapshot(snapshot => {
                snapshot.forEach( snapChild =>{
                    database.push({
                        id: snapChild.id,
                        ...snapChild.data()
                    })
                })
                
            });
                setData(database);
            // 
        }, [])
        

        // setData(database);

    // }, [])
    
    // useEffect(() => {
    //     db.collection('data').doc(idFire).update(userContext.data[id]);
    // }, [input])

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
