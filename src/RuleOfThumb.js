import React, { useState } from 'react'
import { AppRouter } from './components/routers/AppRouter'
import { UserContext } from './components/UserContext'


export const RuleOfThumb = () => {

    const [data, setData] = useState({});


    return (
        <div>
                <UserContext.Provider 
                    value={ 
                        {
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
