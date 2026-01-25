import { data_1, titles } from "../constant/recharts";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const LineChartComponent = ({dataKeyValue, showGrid=true}) => {
    return (
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={data_1}
                    margin={{
                        top: 16,
                        right:30,
                    }}
                >
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="20%" stopColor="rgba(109, 19, 148, 1)"/>
                            <stop offset="50%" stopColor="rgba(128, 11, 18, 1)"/>
                            <stop offset="70%" stopColor="rgba(41, 14, 67, 1)"/>
                            <stop offset="90%" stopColor="rgba(7, 22, 98, 1)"/>
                        </linearGradient>
                    </defs>

                    {showGrid  && (<CartesianGrid 
                        stroke="#9C8CBA"
                        strokeDasharray="5 5"
                    />)}
                    <XAxis 
                        dataKey="day"
                        tick={{fill: "#040C22", fontSize: 12, fontFamily: "font-inter"}}
                        axisLine={{stroke: "#040C22"}}
                        tickLine={{stroke: "#040C22"}}
                        interval={2}
                        tickMargin={10}
                    />
                    <YAxis
                        tick={{fill: "#040C22", fontSize: 12, fontFamily: "font-inter"}}
                        axisLine={{stroke: "#040C22"}}
                        tickLine={{stroke: "#040C22"}}
                        tickFormatter={(value) => `${value}%`}
                        tickMargin={5}
                    />
                    <Tooltip content={<CustomToolTip metricKeyValue={dataKeyValue} />} />
                    <Line 
                        type="monotone" 
                        dataKey={dataKeyValue}
                        stroke="url(#lineGradient)"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{r:4, fill:"#ffffff", stroke:"#040C22", strokeWidth:1}}
                        connectNulls={true}
                    />
                </LineChart>
            </ResponsiveContainer>
    );
};

const LineChartWidget = ({dataKeyValue}) => {
    return (
            <ResponsiveContainer width="100%" height={150}>
                <LineChart
                    data={data_1}
                    style={{ cursor: 'pointer' }} 
                >
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="20%" stopColor="rgba(109, 19, 148, 1)"/>
                            <stop offset="50%" stopColor="rgba(128, 11, 18, 1)"/>
                            <stop offset="70%" stopColor="rgba(41, 14, 67, 1)"/>
                            <stop offset="90%" stopColor="rgba(7, 22, 98, 1)"/>
                        </linearGradient>
                    </defs>
                    <Line 
                        type="monotone" 
                        dataKey={dataKeyValue}
                        stroke="url(#lineGradient)"
                        strokeWidth={5}
                        dot={false}
                        activeDot={false} 
                    />
                </LineChart>
            </ResponsiveContainer>
    );
};


const CustomToolTip = ({active, payload, metricKeyValue}) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-[#FEFEFF] flex flex-col border-[#040C22] border-[1px] gap-4 rounded-md">
                <p className="font-raleway font-semibold text-[#040C22]">
                    {titles[metricKeyValue].label}:
                    <span className="ml-2">{payload[0].value}%</span>
                </p>
            </div>
        )
    }
}

export {LineChartComponent, LineChartWidget };