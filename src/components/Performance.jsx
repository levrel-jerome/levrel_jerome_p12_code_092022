import React, { useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import { getPerformance } from '../services/performance';

/*function to get api information user and display those information into rechart element*/
const Performance = () => {

    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const id = new URL(window.location).searchParams.get("id") || 12
        getPerformance(id)
       .then((userActivity) => {
        if(!userActivity) {
            throw Error("this user id doesn't exist");
          }
        let userData = [...userActivity.data]
        let userActivityKind = {...userActivity.kind}
        userData = userData.map((data) => ({...data, kind:userActivityKind[data.kind]}))
        setData(userData)
       })
       .catch(err => {
        setError(err.message)
       })
    }, [])

    return (
        <div className='performance'>
            {error && <p className='error-message'> {error} </p>}
            {!error &&< RadarChart className='radar' outerRadius={90} width={330} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' axisLine={false} tickLine={false} />
            <PolarRadiusAxis angle={30} domain={[0, 0]} tick={false} />
            <Radar className='radar-value' dataKey="value" stroke="rgba(255, 1, 1, 0.7)" fill="rgba(255, 1, 1, 0.7)" />
    </RadarChart>}
        </div>
    );
};

export default Performance;