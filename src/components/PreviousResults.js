import React, { useContext, useEffect, useRef, useState } from 'react'
import RulingItems from './RulingItems'
import { UserContext } from './UserContext'

export const PreviousResults = () => {

    const {data} = useContext(UserContext);

    const [weightValue, setWeightValue] = useState(300);

    const [view, setView] = useState("grid")

    const handleChange = ({target}) =>{
        setView(target.value)
    }

    const [movement, setMovement] = useState({
        startPosition:0,
        traslatePosition:0,
        endPosition:0,
        divWeight: 290
    });

    const rulingContainer = useRef(null)

    useEffect(() => {
        setWeightValue(rulingContainer.current.clientWidth)
    }, [rulingContainer])

    const mainRuling = document.querySelector(".main_ruling-container");

    return (
        <>
            <main role="main">

                <div className="main_container-previous-rulings">                   
                    <h2 className="main__title-previous-rulings">Previous Rulings</h2>
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
                                weightValue={weightValue}
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
