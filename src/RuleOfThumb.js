import React, { useEffect, useState, Suspense } from 'react'
import { AppRouter } from './components/routers/AppRouter'
import { FirebaseAppProvider } from "reactfire"
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { UserContext } from './components/UserContext'


export const RuleOfThumb = () => {

    const firebaseConfig = {
    apiKey: "AIzaSyDpK4V7GxxCl4TP16a201mmiyRfdz45ct0",
    authDomain: "react-backend-36309.firebaseapp.com",
    databaseURL: "https://react-backend-36309-default-rtdb.firebaseio.com",
    projectId: "react-backend-36309",
    storageBucket: "react-backend-36309.appspot.com",
    messagingSenderId: "740431498694",
    appId: "1:740431498694:web:a6439361ec123aa100f6c7"
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    // firebase.initializeApp(firebaseConfig);

    const [data, setData] = useState([]);

    const [nuevaData, setNuevaData] = useState({})

    const dataRef = firebase.database().ref().child('data');

    dataRef.on('value', ( res ) =>{
        setNuevaData(res.val())
    })

    useEffect(() => {
        console.log(nuevaData)
    }, [nuevaData])



    useEffect(() => {
        fetch('./assets/data.json')
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });
    }, [])

    

    const [user, setUser] = useState({});


    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <Suspense>
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
                </Suspense>
            
            
            
        </FirebaseAppProvider>
    )
}
