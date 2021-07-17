import React, { useEffect, useState } from 'react'
import { AppRouter } from './components/routers/AppRouter'
import { UserContext } from './components/UserContext'


export const RuleOfThumb = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./assets/data.json')
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });
    }, [])

    

    const [user, setUser] = useState({});


    return (
        <div>
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
            
            
            
        </div>
    )
}
