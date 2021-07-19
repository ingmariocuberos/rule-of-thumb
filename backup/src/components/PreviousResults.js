import React, { useContext, useRef, useEffect, useState } from 'react'
import RulingItems from './RulingItems'
import { UserContext } from './UserContext'
import db from '../firebase/firebasedb';

export const PreviousResults = () => {   
    
    const { data, setData} = useContext(UserContext)

    const [movement, setMovement] = useState({
        startPosition:0,
        traslatePosition:0,
        endPosition:0,
        divWeight: 290
    })

    const mainRuling = document.querySelector(".main_ruling-container"); 
    
    console.log(data)

    return (
        <>
            <main role="main">

                <h2 className="main__title-previous-rulings">Previous Rulings</h2>

                <div className="main_ruling-container">
                {

                    data!== null
                    ?
                    data.map(person=>{

                            console.log(person)
                            
                            const {id, ide, name, description, category, picture, lastUpdated, votes} = person;
    
                            return (
                                <RulingItems
                                    key={id}
                                    idFire={id}
                                    id={ide}
                                    mainRuling={mainRuling}
                                    name={name}
                                    description={description}
                                    category={category}
                                    picture={picture}
                                    lastUpdated={lastUpdated}
                                    votes={votes}
                                    dataLength={data.length}
                                    movement={movement}
                                    setMovement={setMovement}                                
                                    />
                                )                        
                            }                        
                        )
                    
                    :
                    undefined                    
                }

                </div>

            </main>
        </>
    )
}
