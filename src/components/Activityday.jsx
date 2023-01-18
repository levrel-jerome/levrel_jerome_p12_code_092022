import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { getActivityDay } from '../services/activity';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};
/*function to get api information user and display those information into rechart element*/
const Activityday = () => {

    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const id = new URL(window.location).searchParams.get("id") || 12
        getActivityDay(id)
       .then((userActivity) => {
        if(!userActivity) {
          throw Error("this user id doesn't exist");
        }
        setData(userActivity)
       })
       .catch(err => {
        setError(err.message)
       })
      }, [])

    return (
        <div className='activity-day'>
          {error && <p className='error-message'> {error} </p>}
          {!error &&
          <div className='info-activity'>
          <p>Activité quotidienne</p>
          <ul>
            <li><span><img src='/asset/oval.png' alt=''/></span>Poids(kg)</li>
            <li><span><img src='/asset/ovalred.png' alt=''/></span>Calorie brulées(kCal)</li>
          </ul>
          </div>}
            {data &&
            <BarChart
            width={1100}
            height={320}
            data={data.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }} 
          >
            <CartesianGrid strokeDasharray="2 2"
            vertical={false}
            />
            <XAxis tickFormatter={(index) => index+1}
            tickLine={false} />
            <YAxis orientation='right' type="number"
             domain={[0, 'dataMax']}
             axisLine={false}
             tickLine={false} />
            <Tooltip content={<CustomTooltip/>} />
            <Bar dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} barSize={7}  />
            <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} barSize={7} />
          </BarChart>
            }
        </div>
    );
};

export default Activityday;