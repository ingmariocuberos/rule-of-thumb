import React, { useEffect, useRef, useState } from 'react'
import { CurrentVote } from './CurrentVote';
import { handleDate } from "./helpers/handleDates";
import Votes from './Votes';

export const RullingItemDesign = ({
    id,
    idFire,
    name,
    description,
    category,
    picture,
    lastUpdated,
    votes,
    view
}) => {
    
    const lastUpdateConverted = handleDate(lastUpdated);

    const [voted, setVoted] = useState("first")
  
    return (
        <div 
            id={`main__ruling-item-design-${view}`}
            className="main__ruling-item-design"
            >
                <div className="">
                    <h2 
                        id={`main_name-of-famous-${view}`}
                        className="main_name-of-famous">{ 
                        name.length > 21
                        ?
                        name.substring(0,18) + "..."
                        :
                        name
                        }
                    </h2>
                    
                    <div
                        id={`main__button-container-${view}`} 
                        className={ votes.positive > votes.negative ? "main__button-container main__thums-up" : "main__button-container main__thums-down"}>
                        {
                            votes.positive > votes.negative 
                            ?
                            <div className="icon-button" aria-label="thumbs up">
                                    <img className="main__thumbs-svg" src="assets/img/thumbs-up.svg" alt="thumbs up" />
                            </div>
                            :
                            <div className="icon-button" aria-label="thumbs down">
                                    <img className="main__thumbs-svg" src="assets/img/thumbs-down.svg" alt="thumbs down" />
                            </div>
                        }
                    </div>
                </div>
                <div
                    id={`main__description-${view}`} 
                    className="main__description">{ 
                    description.length > 56
                    ?
                    description.substring(0,56) + "..."
                    :
                    description
                    }
                </div>
                <div
                    id={`main__update-and-category-${view}`}
                    className="main__update-and-category">
                {
                        voted === "first"
                        ?
                        lastUpdateConverted + " ago in " + category.charAt(0).toUpperCase() + category.slice(1)
                        :
                        "Thank you for your vote!" 
                    }
                </div>

                <CurrentVote 
                id={id} 
                idFire={idFire}
                voted ={voted}
                setVoted={setVoted}
                view={view} />
                    

                <Votes 
                    votes={ votes }
                    view={view} />
                    
                
            <img src={ `./assets/img/${ picture }` } id={`famous-img-${view}`} className="famous-img" alt={ name }/>

        </div>
    )
}
