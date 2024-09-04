import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const WeatherChart = ({ data }) => {
    const [weatherData, setWeatherData] = React.useState(data?.data || []);
    const [chartData, setChartData] = React.useState([]);

    // Update weatherData whenever data changes
    React.useEffect(() => {
        if (data && data.data) {
            setWeatherData(data.data);
        }
    }, [data]);

    // Extract the necessary data for the chart
    React.useEffect(() => {
        if (weatherData.length) {
            const transformedData = weatherData.map((item) => ({
                time: new Date(item.timestamp_local).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }),
                temp: item.temp,
                precip: (item?.precip).toFixed(2) // Include precipitation data
            }));
            setChartData(transformedData);
        }
    }, [weatherData]);

    return (
        <div style={{ width: '100%', height: '100%', background: 'transparent', color: "black", padding: '20px 0 0 0', borderRadius: '10px' }}>
            <ResponsiveContainer>
                <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.3}/>
                        </linearGradient>
                        <linearGradient id="colorPrecip" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="blue" stopOpacity={0.9}/>
                            <stop offset="95%" stopColor="lightblue" stopOpacity={0.3}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="time" tick={{ fill: 'black' }} />
                    <YAxis yAxisId="left" tick={{ fill: 'black' }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fill: 'black' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#001529', border: '1px solid black' }} labelStyle={{ color: 'white' }} />
                    <Area yAxisId="left" type="monotone" dataKey="temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorTemp)" />
                    <Area yAxisId="right" type="monotone" dataKey="precip" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPrecip)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WeatherChart;