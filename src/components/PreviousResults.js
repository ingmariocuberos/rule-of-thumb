import React, { useContext, useRef, useState } from 'react'
import RulingItems from './RulingItems'
import { UserContext } from './UserContext'

export const PreviousResults = () => {

    const {data} = useContext(UserContext);

    const [movement, setMovement] = useState({
        startPosition:0,
        traslatePosition:0,
        endPosition:0,
        divWeight: 290
    })

    const mainRuling = document.querySelector(".main_ruling-container");

    return (
        <>
            <main role="main">

                <h2 className="main__title-previous-rulings">Previous Rulings</h2>

                <div className="main_ruling-container">

                {
                    data.map(person=>{
                        
                        const {name, description, category, picture, lastUpdated, votes} = person;   

                        return (
                            <RulingItems
                                key={name}
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
                }

                </div>

            </main>
        </>
    )
}
