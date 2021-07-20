import React, { useContext, useEffect, useRef, useState } from 'react'
import RulingItems from './RulingItems'
import { UserContext } from './UserContext'

export const PreviousResults = () => {

    const {data} = useContext(UserContext);

    const [view, setView] = useState("grid")

    const handleChange = ({target}) =>{
        setView(target.value)
    }

    const refPreviousRulings = useRef(null);

    const [weightValue, setWeightValue] = useState(300);

    const [movement, setMovement] = useState({
        startPosition:0,
        traslatePosition:0,
        endPosition:0,
        divWeight: 290
    });

    useEffect(() => {
        setWeightValue(refPreviousRulings.current.clientWidth)
    }, [movement])

    const rulingContainer = useRef(null)

    return (
        <>
            <main role="main">

                <div className="main_container-previous-rulings"
                ref={ refPreviousRulings }>                   
                    <h2 className="main__title-previous-rulings"                    
                    >Previous Rulings</h2>
                    <select 
                        className="main__select custom-select" 
                        name="select"
                        onChange={ handleChange }
                        >
                            <option className="option" value="grid" defaultValue>Grid</option>
                            <option className="option" value="list">List</option>
                    </select>

                </div>

                <div 
                    id={`main_ruling-container-${view}`}
                    className="main_ruling-container"
                    ref={rulingContainer}
                    >

                {
                    data.map(person=>{
                        
                        const {id, ide, name, description, category, picture, lastUpdated, votes} = person;   

                        return (
                            <RulingItems
                                key={name}
                                id={id}
                                idFire={ide}
                                rulingContainer={rulingContainer}
                                name={name}
                                description={description}
                                category={category}
                                picture={picture}
                                lastUpdated={lastUpdated}
                                votes={votes}
                                weightValue={weightValue}
                                dataLength={data.length}
                                movement={movement}
                                setMovement={setMovement}
                                view={view}                               
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
