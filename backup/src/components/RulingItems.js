import React, { useState, useEffect, useRef } from 'react';
import 'firebase/firestore';
import PropTypes from 'prop-types'
import { RullingItemDesign } from './RullingItemDesign';


const RulingItems = ({
    id,
    idFire,
    mainRuling,    
    name, 
    description, 
    category, 
    picture, 
    lastUpdated, 
    votes,
    dataLength,
    movement,
    setMovement
    }) => {

        console.log("hola");

        const {startPosition,traslatePosition,endPosition} = movement;
        const refDivItemWidth = useRef(290)

        const handleTouchStart = (e) =>{
            
            setMovement({
                ...movement,
                startPosition: e.changedTouches[0].clientX
            });                   
       
        }            

        const handleTouchEnd = (e) =>{
            setMovement({
                ...movement,
                endPosition: e.changedTouches[0].clientX
            });           
            
        }

        useEffect(() => {

            const realMovement = (traslatePosition + (endPosition - startPosition));

            if (realMovement > 0){
                setMovement({
                    ...movement,
                    traslatePosition: 0
                })
            } else if(-realMovement > ((dataLength-1)*(refDivItemWidth.current.clientWidth + 12))){
                setMovement({
                    ...movement,
                    traslatePosition: -(dataLength-1)*(refDivItemWidth.current.clientWidth + 12)
                })
            }
            else if ((endPosition - startPosition) < 0){
                setMovement({
                    ...movement,
                    traslatePosition: (traslatePosition - refDivItemWidth.current.clientWidth - 12)
                })

            } else if((endPosition - startPosition) > 0){
                setMovement({
                    ...movement,
                    traslatePosition: (traslatePosition + refDivItemWidth.current.clientWidth + 12)
                })

            }
        }, [endPosition])

        useEffect(() => {
            mainRuling.style.transform = `translate(${traslatePosition}px, 0)`;
            
        }, [traslatePosition]);

        
        
    
    return (
        <>
            <div 
                className="main__previous-rulings-item ruling-item"
                ref={ refDivItemWidth }
                onTouchStart={ handleTouchStart }
                onTouchEnd={ handleTouchEnd }
                >
                    <RullingItemDesign
                        id={id}
                        idFire={idFire}
                        name={name}
                        description={description}
                        category={category}
                        picture={picture}
                        lastUpdated={lastUpdated}
                        votes={votes}
                    />
            </div>
            
        </>
    )
}

RulingItems.propTypes = {
    dataLength: PropTypes.number.isRequired,
    movement: PropTypes.object.isRequired,
    setMovement: PropTypes.func.isRequired
}

export default RulingItems