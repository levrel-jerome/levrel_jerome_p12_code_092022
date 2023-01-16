import React, { useEffect, useState } from 'react';
import { getUser } from '../services/user';

const Hello = () =>  { 

    const [data, setData] = useState();

    useEffect(() => {
        const id = new URL(window.location).searchParams.get("id") || 12
        getUser(id)
       .then((user) => {
        setData(user)
       })
    }, [])
        
    return (
        <div className='hello'>
            {data &&
            <h1>Bonjour <span className='name'>{data.userInfos.firstName}</span></h1>
            }
           <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Hello;