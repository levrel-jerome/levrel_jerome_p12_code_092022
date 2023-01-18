import React, { useEffect, useState } from 'react';
import { RadialBar, RadialBarChart } from 'recharts';
import { getUser } from '../services/user';


/*function to get api information user and display those information into rechart element*/
const Objectif = () => {

    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const id = new URL(window.location).searchParams.get("id") || 12
        getUser(id)
       .then((user) => {
        if(!user) {
            throw Error("this user id doesn't exist");
          }
        setData(user)
       })
       .catch(err => {
        setError(err.message)
       })
    }, [])

    return (
        <div className='score'>
            {error && <p className='error-message'> {error} </p>}
            {!error &&<p className='objectif-title'>Score</p>}
            {data &&
            <p className='text-objectif'><span className='pourcentage'>{data.todayScore*100}%</span> <br/>de votre <br/>objectif</p>
            }
            {!error &&<RadialBarChart 
            width={330} 
            height={250} 
            innerRadius="70%" 
            outerRadius="100%" 
            data={[{todayScore: data?.todayScore, fill: "#ff0000"},{todayScore: 1, fill: "#FBFBFB"}]}
            startAngle={120}
            endAngle={600} 
          >
  <RadialBar
        minAngle={15}
        background
        clockWise={true}
        dataKey="todayScore"
      />
</RadialBarChart>}
        </div>
    );
};

export default Objectif;