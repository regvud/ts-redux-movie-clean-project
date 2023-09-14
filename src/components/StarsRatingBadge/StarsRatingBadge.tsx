import React, {FC} from 'react';
import StarRatings from "react-star-ratings";


interface IProps {
    vote_average: number
}

const StarsRatingBadge: FC<IProps> = ({vote_average}) => {
    return (
        <>
            <StarRatings
                rating={vote_average * 0.5}
                starRatedColor="blue"
                numberOfStars={5}
                name='rating'
            />
        </>
    );
};

export {StarsRatingBadge};