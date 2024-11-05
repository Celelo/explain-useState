import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Like = ({style}) => {
    const [addtLike, setAddLike] = useState(false)

    const toggleLike = () => {
        setAddLike(!addtLike)
    }

    return (
        <div onClick={toggleLike} >
            <FontAwesomeIcon icon={faHeart} style={{color: addtLike ? 'red' : 'white'}} />
        </div>
    );
};
