import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const ContadorLike = ({style}) => {
    const [like, setLike] = useState(false);
    const [cont, setCont] = useState({
        num: 399,
    });

    const handleClick = () => {
        setLike(!like);
        setCont({ ...cont, num: like ? cont.num - 1 : cont.num +1});
    };

    return (
        <div onClick={handleClick}>
            <h1>Contador de like</h1>
            <FontAwesomeIcon
                icon={faHeart}
                style={{ color: like ?'red':  'white' }}
            />
            <p>{cont.num}</p>
        </div>
    );
};
