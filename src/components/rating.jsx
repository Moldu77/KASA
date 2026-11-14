import StarRatingGrey from "../assets/star-rating.png"
import StarRatingRed from "../assets/star-rating-red.png"

export default  function Rating({rating}){
    const number = Number(rating);
    const arrRating =[1,2,3,4,5];
    return(
        <>
        {arrRating.map((note)=>(
            <img src={note<=number?StarRatingRed:StarRatingGrey} key={note} alt=""/>
        ))}
        </>
    );
}

// Fontawesome
/* 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

function Rating({ rate }) {
    const stars = []

    for (let i = 0; i < 5; i++) {
        stars.push(
            <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={
                    i < rate
                        ? "container-stars__stars--orange"
                        : "container-stars__stars--grey"
                }
            />,
        )
    }

    return <div className="container-stars">{stars}</div>
}

export default Rating



*/

