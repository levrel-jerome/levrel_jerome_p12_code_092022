import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { getActivityDay } from '../services/activity';

const Activityday = () => {

    const [data, setData] = useState();

    useEffect(() => {
        const id = new URL(window.location).searchParams.get("id") || 12
        getActivityDay(id)
       .then((userActivity) => {
        setData(userActivity)
       })
    }, [])
    return (
        <div className='activity-day'>
            {data &&
            <BarChart
            width={500}
            height={300}
            data={data.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={data.index} />
            <YAxis orientation='right' type="number" domain={[0, 'dataMax']} />
            <Tooltip />
            <Bar dataKey="kilogram" fill="#282D30"  />
            <Bar dataKey="calories" fill="#E60000" />
          </BarChart>
            }
        </div>
    );
};

export default Activityday;