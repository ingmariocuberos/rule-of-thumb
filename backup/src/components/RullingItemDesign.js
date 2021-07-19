import React, { useState } from 'react'
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
    votes
}) => {
    
    const lastUpdateConverted = handleDate(lastUpdated);
    const [voted, setVoted] = useState("first");   
  
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
                    <div className="main__update-and-category">
                        {
                            voted === "first"
                            ?
                            lastUpdateConverted + " ago in " + category.charAt(0).toUpperCase() + category.slice(1)
                            :
                            "Thank you for your vote!" 
                        }
                    </div>
                    
                    <CurrentVote id={ id } idFire={idFire} name={ name } voted={ voted } setVoted={ setVoted } />
                    

                    <Votes votes={ votes } />
                    

                </div>
                
            <img src={ `./assets/img/${ picture }` } className="famous-img" alt={ name }/>

        </div>
    )
}
