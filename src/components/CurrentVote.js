import React from 'react'

export const CurrentVote = ( ) => {

    const handleVote = ({target}) =>{
        console.log(target.name);
    }

    return (
        <>
            <div>
                <div className="main__selection-button-thumbs-up">
                    <button className="icon-button " aria-label="thumbs up"                    
                    onClick={ handleVote }>
                            <img className="main__thumbs-svg" src="assets/img/thumbs-up.svg" 
                            alt="thumbs up"
                            name="positiveVote"
                            value="positive" />
                    </button>
                </div>

                <div className="main__selection-button-thumbs-down">                    
                    <button className="icon-button" aria-label="thumbs down"
                    name="negativeVote"
                    value="negative"
                    onClick={ handleVote }>
                            <img className="main__thumbs-svg" src="assets/img/thumbs-down.svg" 
                            alt="thumbs down"
                            name="negativeVote"
                            value="negative" />
                    </button>
                </div>

                <button className="main__selection-button-vote-now" >
                            Vote Now
                    </button>
                                        

            </div>
        </>
    )
}
