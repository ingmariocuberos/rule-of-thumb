import React, { useEffect, useRef } from 'react'

export const RullingItemDesign = ({
    name,
    description,
    category,
    picture,
    lastUpdated,
    votes
}) => {

    const nowDate = new Date()
    const fecha = new Date(lastUpdated);
    const diferencia = nowDate - fecha;

    

    console.log(diferencia);
   
    return (
        <div 
            className="main__ruling-item-design"
            >
                <div className="row">
                    <h2 className="main_name-of-famous">{ 
                        name.length > 21
                        ?
                        name.substring(0,21) + "..."
                        :
                        name
                        }
                        </h2>
                    
                    <div className={ true ? "main__button-container main__thums-up" : "main__button-container main__thums-down"}>
                        {
                            true 
                            ?
                            <button className="icon-button" aria-label="thumbs up">
                                    <img className="main__thumbs-svg" src="assets/img/thumbs-up.svg" alt="thumbs up" />
                            </button>
                            :
                            <button className="icon-button" aria-label="thumbs down">
                                    <img className="main__thumbs-svg" src="assets/img/thumbs-down.svg" alt="thumbs down" />
                            </button>
                        }
                    </div>
                    <div className="main__description">{ 
                        description.length > 56
                        ?
                        description.substring(0,56) + "..."
                        :
                        description
                        }
                    </div>
                </div>
                
                <img src={ `./assets/img/${ picture }` } className="famous-img" alt={ name }/>

        </div>
    )
}
