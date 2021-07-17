import React, { useEffect, useRef } from 'react'

export const RullingItemDesign = ({
    name,
    description,
    category,
    picture,
    lastUpdated,
    votes
}) => {
   
    return (
        <div 
            className="main__ruling-item-design"
            >
                <h2 class="main_name-of-famous">{ 
                    name.length > 21
                    ?
                    name.substring(0,21) + "..."
                    :
                    name}</h2>
                <img src={ `./assets/img/${ picture }` } className="famous-img" alt={ name }/>

                {/* <div className="featured-card__buttons"> */}
                                <button className="icon-button" aria-label="thumbs up">
                                    <img src="assets/img/thumbs-up.svg" alt="thumbs up" />
                                </button>
                                <button className="icon-button" aria-label="thumbs down">
                                    <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
                                </button>
                            {/* </div> */}
                


            
        </div>
    )
}
