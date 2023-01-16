import React, { useEffect, useState } from 'react';
import {  Line, LineChart, Tooltip, XAxis } from 'recharts';
import { getTimingDay } from '../services/timing';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-session">
          <p className="label">{`${payload[0].value}min`}</p>
        </div>
      );
    }
  
    return null;
  };

const Timing = () => {

    const [data, setData] = useState();

    useEffect(() => {
        const id = new URL(window.location).searchParams.get("id") || 12
        getTimingDay(id)
       .then((userActivity) => {
        const days = ["L", "M", "M", "J", "V", "S", "D"]
        userActivity.sessions = userActivity.sessions.map((session) => {
         return  {...session, day : days[session.day-1]}
        })
        setData(userActivity)
       })
    }, [])
    return (
        <div className='session-timing'>
          <p className='entete-session'>Durée moyenne des<br></br> sessions</p>
        <LineChart className='timing' width={330} height={250} data={data?.sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
  <XAxis dataKey='day'
  axisLine={false} 
  tickLine={false}
  stroke="rgba(255, 255, 255, 0.6)"
  />
  <Tooltip content={<CustomTooltip/>}/>
  <Line className='line' type="monotone" dataKey="sessionLength"
   stroke="rgba(255, 255, 255, 0.6)" dot={false}
    />
</LineChart>
        </div>
    );
};

export default Timing;