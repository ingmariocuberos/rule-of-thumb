import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from './UserContext';

export const CurrentVote = ( {id, idFire, name, voted, setVoted, view} ) => {

    const userContext = useContext(UserContext);

    const positiveVote = useRef(null);
    const negativeVote = useRef(null);
    const voteButton = useRef(null);

    const [vote, setVote] = useState("");

    const handleVote = ({target}) =>{

        if(target.name === "positive"){
            setVote("positive")
        } else if(target.name === "negative"){
            setVote("negative")
        }
    }



    const voteAction = () =>{
        if(voted === "first"){
            positiveVote.current.style.visibility = "hidden";
            negativeVote.current.style.visibility = "hidden";
            setVoted("again");

            userContext.data[idFire].votes[vote] = userContext.data[idFire].votes[vote] + 1;
            // db.collection('data').doc(idFire).update(userContext.data[id]);

        } else if(voted === "again"){
            positiveVote.current.style.visibility = "visible";
            negativeVote.current.style.visibility = "visible";
            setVoted("first");
            setVote("")
            positiveVote.current.style.border ="0px solid #fff";
            negativeVote.current.style.border ="0px solid #fff";
        }
        
    }

    useEffect(() => {
        if(vote === "positive"){
            positiveVote.current.style.border ="2px solid #fff";
            negativeVote.current.style.border ="0px solid #fff";

        } else if(vote === "negative"){
            positiveVote.current.style.border ="0px solid #fff";
            negativeVote.current.style.border ="2px solid #fff";
        }
    }, [vote])

    return (
        <>
            <div id={`main__container-votes-${view}`}>
                <div
                    id={`main__selection-button-thumbs-up-${view}`}
                    className="main__selection-button-thumbs-up"
                    ref={ positiveVote }
                >
                    <button className="icon-button" aria-label="thumbs up"                    
                    onClick={ handleVote }>
                            <img className="main__thumbs-svg" src="assets/img/thumbs-up.svg" 
                            alt="thumbs up"
                            name="positive"
                            value="positive" />
                    </button>
                </div>

                <div
                    id={`main__selection-button-thumbs-down-${view}`}
                    className="main__selection-button-thumbs-down"
                    ref={ negativeVote }
                >                    
                    <button className="icon-button" aria-label="thumbs down"
                    name="negative"
                    value="negative"
                    onClick={ handleVote }>
                            <img className="main__thumbs-svg" src="assets/img/thumbs-down.svg" 
                            alt="thumbs down"
                            name="negative"
                            value="negative" />
                    </button>
                </div>

                <button className="main__selection-button-vote-now"
                ref={ voteButton }
                onClick={ voteAction }
                disabled = { vote=== "" ? true : false } >
                            {voted === "first" 
                            ?
                            "Vote Now"
                            :
                            "Vote Again"
                            }
                    </button>
                                        

            </div>
        </>
    )
}
