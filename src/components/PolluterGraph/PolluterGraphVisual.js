import React from 'react';
import ResponsiveContainer from '@bit/recharts.recharts.responsive-container';
import ComposedChart from '@bit/recharts.recharts.composed-chart';
import Bar from '@bit/recharts.recharts.bar';
import Text from '@bit/recharts.recharts.text';
import XAxis from '@bit/recharts.recharts.x-axis';
import YAxis from '@bit/recharts.recharts.y-axis';
import CartesianGrid from '@bit/recharts.recharts.cartesian-grid';
import Tooltip from '@bit/recharts.recharts.tooltip';
import Legend from '@bit/recharts.recharts.legend';

import { appStyles } from "../../constants";

export const PollutersGraphVisual = ({data, width, height}) => {

    return (
        <div style={{width, height}}>
            <ResponsiveContainer>
                <ComposedChart
                    data={data}
                    margin={{
                        top: 20, right: 0, bottom: 20, left: 0,
                    }}
                    >
                    <CartesianGrid />
                    <XAxis
                        dataKey="Company name"
                    />
                    <YAxis type="number"
                           orientation='left'
                           label={
                               <Text
                                   x={0}
                                   y={0}
                                   dx={30}
                                   dy={300}
                                   offset={0}
                                   angle={-90}
                               >Global emissions  in tonnes of CO2</Text>
                           } />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="CO2 tonnes 1965 - 2017"
                         barSize={20} stackId="a" fill={appStyles.red}/>
                    <Bar dataKey="CO2 tons increase in 2018 - 2030"
                         barSize={20} stackId="a" fill={appStyles.orange}/>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}