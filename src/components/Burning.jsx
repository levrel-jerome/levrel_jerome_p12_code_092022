import React, { useEffect, useState } from 'react';
import { getUser } from '../services/user';

const Burning = () => {

    const [data, setData] = useState();

    useEffect(() => {
        const id = new URL(window.location).searchParams.get("id") || 12
        getUser(id)
       .then((user) => {
        setData(user)
       })
    }, [])

    return (
        <div className='burning'>
            <div className='burning-block'>
                <div className='burning-image'>
                    <img src='asset/calories-icon.png' alt=''/>
                </div>
                <div className='burning-text'>
                {data &&
                    <h1>{data.keyData.calorieCount}kCal</h1>
                    }
                    <p>Calories</p> 
                </div>  
            </div>
            <div className='burning-block'>
                <div className='burning-image'>
                    <img src='asset/protein-icon.png' alt=''/>
                </div>
                <div className='burning-text'>
                    {data &&
                    <h1>{data.keyData.proteinCount}g</h1>
                    }
                    <p>Proteines</p>
                </div>   
            </div>
            <div className='burning-block'>
                <div className='burning-image'>
                    <img src='asset/carbs-icon.png' alt=''/>
                </div>
                <div className='burning-text'>
                    {data &&
                    <h1>{data.keyData.carbohydrateCount}g</h1>
                    }
                <p>Glucides</p> 
                </div>  
            </div>
            <div className='burning-block'>
                <div className='burning-image'>
                <img src='asset/lipides.png' alt=''/>
                </div>
                <div className='burning-text'>
                {data &&
                <h1>{data.keyData.lipidCount}g</h1>
                }
                <p>Lipides</p>
                </div>   
            </div>
        </div>
    );
};

export default Burning;