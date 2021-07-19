import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const Votes = ( { votes, view } ) => {

    const positivePercentaje = (((votes.positive / (votes.positive + votes.negative))*100).toFixed(1))*1;
    
    const negativePercentaje = ((100 - positivePercentaje).toFixed(1))*1;

    const refPositive = useRef(null);
    const refNegative = useRef(null);

    const [widthOpinion, setWidthOpinion] = useState({
        positive: 0,
        negative: 0
    })

    

    useEffect(() => {

        if(refPositive !== null){
            refPositive.current.style.width = `${positivePercentaje}%`;
            refNegative.current.style.width = `${negativePercentaje}%`;
            
        }
                
    }, [refPositive, positivePercentaje, negativePercentaje])

    return (
        <>
            <div className="main__container-votes">
                
                <div className="main_positive" ref={ refPositive } >
                    <div className="main__positive-percentaje">   
                            <img className="main__thumbs-svg main__thumbs-up-icon" src="assets/img/thumbs-up.svg" alt="thumbs up" />                  
                            <span className="main__text-percentaje">{ positivePercentaje }%</span>
                    </div>
                    
                </div>
                <div ref={ refNegative } className="main_negative">
                    
                    
                </div>
                <div className="main__negative-percentaje">                        
                        <span className="main__text-percentaje">{ negativePercentaje }%</span>
                        <img className="main__thumbs-svg main__thumbs-down-icon" src="assets/img/thumbs-down.svg" alt="thumbs down" />
                </div>
            </div>
        </>
    )
}

Votes.propTypes = {

}

export default Votes
